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

// checks if the GenericSvcQueryResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &GenericSvcQueryResponse{}

// GenericSvcQueryResponse struct for GenericSvcQueryResponse
type GenericSvcQueryResponse struct {
	Objects []GenericSvcGenericObject `json:"objects,omitempty"`
}

// NewGenericSvcQueryResponse instantiates a new GenericSvcQueryResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewGenericSvcQueryResponse() *GenericSvcQueryResponse {
	this := GenericSvcQueryResponse{}
	return &this
}

// NewGenericSvcQueryResponseWithDefaults instantiates a new GenericSvcQueryResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewGenericSvcQueryResponseWithDefaults() *GenericSvcQueryResponse {
	this := GenericSvcQueryResponse{}
	return &this
}

// GetObjects returns the Objects field value if set, zero value otherwise.
func (o *GenericSvcQueryResponse) GetObjects() []GenericSvcGenericObject {
	if o == nil || IsNil(o.Objects) {
		var ret []GenericSvcGenericObject
		return ret
	}
	return o.Objects
}

// GetObjectsOk returns a tuple with the Objects field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *GenericSvcQueryResponse) GetObjectsOk() ([]GenericSvcGenericObject, bool) {
	if o == nil || IsNil(o.Objects) {
		return nil, false
	}
	return o.Objects, true
}

// HasObjects returns a boolean if a field has been set.
func (o *GenericSvcQueryResponse) HasObjects() bool {
	if o != nil && !IsNil(o.Objects) {
		return true
	}

	return false
}

// SetObjects gets a reference to the given []GenericSvcGenericObject and assigns it to the Objects field.
func (o *GenericSvcQueryResponse) SetObjects(v []GenericSvcGenericObject) {
	o.Objects = v
}

func (o GenericSvcQueryResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o GenericSvcQueryResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Objects) {
		toSerialize["objects"] = o.Objects
	}
	return toSerialize, nil
}

type NullableGenericSvcQueryResponse struct {
	value *GenericSvcQueryResponse
	isSet bool
}

func (v NullableGenericSvcQueryResponse) Get() *GenericSvcQueryResponse {
	return v.value
}

func (v *NullableGenericSvcQueryResponse) Set(val *GenericSvcQueryResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableGenericSvcQueryResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableGenericSvcQueryResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableGenericSvcQueryResponse(val *GenericSvcQueryResponse) *NullableGenericSvcQueryResponse {
	return &NullableGenericSvcQueryResponse{value: val, isSet: true}
}

func (v NullableGenericSvcQueryResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableGenericSvcQueryResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

