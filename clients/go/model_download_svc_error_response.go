/*
Singulatron

Run and develop self-hosted AI apps. Your programmable in-house GPT. The Firebase for the AI age.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the DownloadSvcErrorResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DownloadSvcErrorResponse{}

// DownloadSvcErrorResponse struct for DownloadSvcErrorResponse
type DownloadSvcErrorResponse struct {
	Error *string `json:"error,omitempty"`
}

// NewDownloadSvcErrorResponse instantiates a new DownloadSvcErrorResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDownloadSvcErrorResponse() *DownloadSvcErrorResponse {
	this := DownloadSvcErrorResponse{}
	return &this
}

// NewDownloadSvcErrorResponseWithDefaults instantiates a new DownloadSvcErrorResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDownloadSvcErrorResponseWithDefaults() *DownloadSvcErrorResponse {
	this := DownloadSvcErrorResponse{}
	return &this
}

// GetError returns the Error field value if set, zero value otherwise.
func (o *DownloadSvcErrorResponse) GetError() string {
	if o == nil || IsNil(o.Error) {
		var ret string
		return ret
	}
	return *o.Error
}

// GetErrorOk returns a tuple with the Error field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DownloadSvcErrorResponse) GetErrorOk() (*string, bool) {
	if o == nil || IsNil(o.Error) {
		return nil, false
	}
	return o.Error, true
}

// HasError returns a boolean if a field has been set.
func (o *DownloadSvcErrorResponse) HasError() bool {
	if o != nil && !IsNil(o.Error) {
		return true
	}

	return false
}

// SetError gets a reference to the given string and assigns it to the Error field.
func (o *DownloadSvcErrorResponse) SetError(v string) {
	o.Error = &v
}

func (o DownloadSvcErrorResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DownloadSvcErrorResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Error) {
		toSerialize["error"] = o.Error
	}
	return toSerialize, nil
}

type NullableDownloadSvcErrorResponse struct {
	value *DownloadSvcErrorResponse
	isSet bool
}

func (v NullableDownloadSvcErrorResponse) Get() *DownloadSvcErrorResponse {
	return v.value
}

func (v *NullableDownloadSvcErrorResponse) Set(val *DownloadSvcErrorResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableDownloadSvcErrorResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableDownloadSvcErrorResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDownloadSvcErrorResponse(val *DownloadSvcErrorResponse) *NullableDownloadSvcErrorResponse {
	return &NullableDownloadSvcErrorResponse{value: val, isSet: true}
}

func (v NullableDownloadSvcErrorResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDownloadSvcErrorResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

