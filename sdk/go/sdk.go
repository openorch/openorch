package sdk

import (
	"crypto/rsa"
	"crypto/x509"
	"encoding/json"
	"encoding/pem"
	"fmt"
	"net/http"
	"strings"

	"github.com/golang-jwt/jwt/v4"
	"github.com/pkg/errors"
	"github.com/sony/sonyflake"

	openapi "github.com/singulatron/superplatform/clients/go"
)

type Claims struct {
	UserId  string   `json:"sui"` // `sui`: singulatron user ids
	Slug    string   `json:"slu"` // `slu`: singulatron slug
	RoleIds []string `json:"sri"` // `sri`: singulatron role ids
	jwt.RegisteredClaims
}

type Credential struct {
	Slug     string `json:"slug,omitempty"`
	Contact  string `json:"contact,omitempty"`
	Password string `json:"password,omitempty"`
}

func (c *Credential) GetId() string {
	return c.Contact
}

var sonyFlake *sonyflake.Sonyflake

func init() {
	sonyFlake = sonyflake.NewSonyflake(sonyflake.Settings{})
	if sonyFlake == nil {
		panic("Sonyflake not created")
	}
}

const base62 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

func Id(prefix string) string {
	number, err := sonyFlake.NextID()
	if err != nil {
		panic(err)
	}

	if number == 0 {
		return string(base62[0])
	}

	b := make([]byte, 0)
	for number > 0 {
		remainder := number % 62
		number = number / 62
		b = append([]byte{base62[remainder]}, b...)
	}

	return prefix + "_" + string(b)
}

// Authorizer can extract roles from tokens.
// This interface is not the only thing that does authorization, however.
// Authorization also happens by calling the User Svc to check if a user has a specific permission to call an endpoint.
type Authorizer interface {
	TokenFromRequest(r *http.Request) (string, bool)
	DecodeJWT(userSvcPublicKey, token string) (*Claims, error)
	DecodeJWTFromRequest(userSvcPublicKey string, r *http.Request) (*Claims, error)
	IsAdmin(userSvcPublicKey string, token string) (bool, error)
	IsAdminFromRequest(userSvcPublicKey string, r *http.Request) (bool, error)
}

type AuthorizerImpl struct{}

func (a AuthorizerImpl) DecodeJWTFromRequest(userSvcPublicKey string, r *http.Request) (*Claims, error) {
	tokenString, hasToken := a.TokenFromRequest(r)
	if !hasToken {
		return nil, fmt.Errorf("no token found in request")
	}

	return a.DecodeJWT(userSvcPublicKey, tokenString)
}

func (a AuthorizerImpl) DecodeJWT(userSvcPublicKey, token string) (*Claims, error) {
	publicKey, err := PublicKeyFromString(userSvcPublicKey)
	if err != nil {
		return nil, errors.Wrap(err, "failed to get public key from string")
	}

	jwtToken, err := jwt.ParseWithClaims(token, &Claims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodRSA); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}
		return publicKey, nil
	})

	if err != nil {
		return nil, fmt.Errorf("failed to parse JWT: %v", err)
	}

	if claims, ok := jwtToken.Claims.(*Claims); ok && jwtToken.Valid {
		return claims, nil
	}

	return nil, fmt.Errorf("invalid JWT token")
}

func (a AuthorizerImpl) TokenFromRequest(r *http.Request) (string, bool) {
	authHeader := r.Header.Get("Authorization")
	authHeader = strings.Replace(authHeader, "Bearer ", "", 1)

	if authHeader == "" || authHeader == "Bearer" {
		return "", false
	}

	return authHeader, true
}

func (a AuthorizerImpl) IsAdminFromRequest(userSvcPublicKey string, r *http.Request) (bool, error) {
	tokenString, hasToken := a.TokenFromRequest(r)
	if !hasToken {
		return false, fmt.Errorf("no token found in request")
	}

	return a.IsAdmin(userSvcPublicKey, tokenString)
}

func (a AuthorizerImpl) IsAdmin(userSvcPublicKey, token string) (bool, error) {
	claims, err := a.DecodeJWT(userSvcPublicKey, token)
	if err != nil {
		return false, err
	}

	for _, roleId := range claims.RoleIds {
		// @todo remove constant
		if roleId == "user-svc:admin" {
			return true, nil
		}
	}

	return false, nil
}

func PublicKeyFromString(publicKeyPem string) (*rsa.PublicKey, error) {
	block, _ := pem.Decode([]byte(publicKeyPem))
	if block == nil || block.Type != "PUBLIC KEY" {
		return nil, fmt.Errorf("failed to decode PEM block containing public key")
	}
	pub, err := x509.ParsePKIXPublicKey(block.Bytes)
	if err != nil {
		return nil, fmt.Errorf("failed to parse public key: %v", err)
	}

	// Type assertion to convert from interface{} to *rsa.PublicKey
	rsaPub, ok := pub.(*rsa.PublicKey)
	if !ok {
		return nil, fmt.Errorf("not an RSA public key")
	}

	return rsaPub, nil
}

func Marshal(value any) *string {
	jsonBytes, _ := json.Marshal(value)

	v := string(jsonBytes)
	return &v
}

// OpenAPIError checks if an error is a GenericOpenAPIError and returns a meaningful error.
func OpenAPIError(err error) error {
	if err == nil {
		return nil
	}

	// Check if it's a GenericOpenAPIError
	if apiErr, ok := err.(*openapi.GenericOpenAPIError); ok {
		var errorResponse map[string]interface{}
		if unmarshalErr := json.Unmarshal(apiErr.Body(), &errorResponse); unmarshalErr == nil {
			if message, exists := errorResponse["error"]; exists {
				return errors.New(message.(string))
			}
			return fmt.Errorf("unknown error format: %v", string(apiErr.Body()))
		}
		return fmt.Errorf("failed to unmarshal API error response: %v", string(apiErr.Body()))
	}

	// Return the original error if it's not a GenericOpenAPIError
	return err
}
