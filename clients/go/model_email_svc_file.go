/*
OpenOrch

A language-agnostic microservices framework for building AI applications.

API version: 0.3.0-rc.29
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the EmailSvcFile type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &EmailSvcFile{}

// EmailSvcFile struct for EmailSvcFile
type EmailSvcFile struct {
	// Base64-encoded content of the file
	Content string `json:"content"`
	// MIME type of the file (e.g., \"application/pdf\")
	ContentType string `json:"contentType"`
	// Name of the attached file
	Filename string `json:"filename"`
}

type _EmailSvcFile EmailSvcFile

// NewEmailSvcFile instantiates a new EmailSvcFile object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEmailSvcFile(content string, contentType string, filename string) *EmailSvcFile {
	this := EmailSvcFile{}
	this.Content = content
	this.ContentType = contentType
	this.Filename = filename
	return &this
}

// NewEmailSvcFileWithDefaults instantiates a new EmailSvcFile object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEmailSvcFileWithDefaults() *EmailSvcFile {
	this := EmailSvcFile{}
	return &this
}

// GetContent returns the Content field value
func (o *EmailSvcFile) GetContent() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Content
}

// GetContentOk returns a tuple with the Content field value
// and a boolean to check if the value has been set.
func (o *EmailSvcFile) GetContentOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Content, true
}

// SetContent sets field value
func (o *EmailSvcFile) SetContent(v string) {
	o.Content = v
}

// GetContentType returns the ContentType field value
func (o *EmailSvcFile) GetContentType() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ContentType
}

// GetContentTypeOk returns a tuple with the ContentType field value
// and a boolean to check if the value has been set.
func (o *EmailSvcFile) GetContentTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ContentType, true
}

// SetContentType sets field value
func (o *EmailSvcFile) SetContentType(v string) {
	o.ContentType = v
}

// GetFilename returns the Filename field value
func (o *EmailSvcFile) GetFilename() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Filename
}

// GetFilenameOk returns a tuple with the Filename field value
// and a boolean to check if the value has been set.
func (o *EmailSvcFile) GetFilenameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Filename, true
}

// SetFilename sets field value
func (o *EmailSvcFile) SetFilename(v string) {
	o.Filename = v
}

func (o EmailSvcFile) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o EmailSvcFile) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	toSerialize["content"] = o.Content
	toSerialize["contentType"] = o.ContentType
	toSerialize["filename"] = o.Filename
	return toSerialize, nil
}

func (o *EmailSvcFile) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"content",
		"contentType",
		"filename",
	}

	allProperties := make(map[string]interface{})

	err = json.Unmarshal(data, &allProperties)

	if err != nil {
		return err;
	}

	for _, requiredProperty := range(requiredProperties) {
		if _, exists := allProperties[requiredProperty]; !exists {
			return fmt.Errorf("no value given for required property %v", requiredProperty)
		}
	}

	varEmailSvcFile := _EmailSvcFile{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varEmailSvcFile)

	if err != nil {
		return err
	}

	*o = EmailSvcFile(varEmailSvcFile)

	return err
}

type NullableEmailSvcFile struct {
	value *EmailSvcFile
	isSet bool
}

func (v NullableEmailSvcFile) Get() *EmailSvcFile {
	return v.value
}

func (v *NullableEmailSvcFile) Set(val *EmailSvcFile) {
	v.value = val
	v.isSet = true
}

func (v NullableEmailSvcFile) IsSet() bool {
	return v.isSet
}

func (v *NullableEmailSvcFile) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEmailSvcFile(val *EmailSvcFile) *NullableEmailSvcFile {
	return &NullableEmailSvcFile{value: val, isSet: true}
}

func (v NullableEmailSvcFile) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEmailSvcFile) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


