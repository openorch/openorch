/*
OpenOrch

A language-agnostic microservices framework for building AI applications.

API version: 0.3.0-rc.22
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the ContainerSvcRunContainerResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ContainerSvcRunContainerResponse{}

// ContainerSvcRunContainerResponse struct for ContainerSvcRunContainerResponse
type ContainerSvcRunContainerResponse struct {
	Info *ContainerSvcRunInfo `json:"info,omitempty"`
}

// NewContainerSvcRunContainerResponse instantiates a new ContainerSvcRunContainerResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewContainerSvcRunContainerResponse() *ContainerSvcRunContainerResponse {
	this := ContainerSvcRunContainerResponse{}
	return &this
}

// NewContainerSvcRunContainerResponseWithDefaults instantiates a new ContainerSvcRunContainerResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewContainerSvcRunContainerResponseWithDefaults() *ContainerSvcRunContainerResponse {
	this := ContainerSvcRunContainerResponse{}
	return &this
}

// GetInfo returns the Info field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerResponse) GetInfo() ContainerSvcRunInfo {
	if o == nil || IsNil(o.Info) {
		var ret ContainerSvcRunInfo
		return ret
	}
	return *o.Info
}

// GetInfoOk returns a tuple with the Info field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerResponse) GetInfoOk() (*ContainerSvcRunInfo, bool) {
	if o == nil || IsNil(o.Info) {
		return nil, false
	}
	return o.Info, true
}

// HasInfo returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerResponse) HasInfo() bool {
	if o != nil && !IsNil(o.Info) {
		return true
	}

	return false
}

// SetInfo gets a reference to the given ContainerSvcRunInfo and assigns it to the Info field.
func (o *ContainerSvcRunContainerResponse) SetInfo(v ContainerSvcRunInfo) {
	o.Info = &v
}

func (o ContainerSvcRunContainerResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ContainerSvcRunContainerResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Info) {
		toSerialize["info"] = o.Info
	}
	return toSerialize, nil
}

type NullableContainerSvcRunContainerResponse struct {
	value *ContainerSvcRunContainerResponse
	isSet bool
}

func (v NullableContainerSvcRunContainerResponse) Get() *ContainerSvcRunContainerResponse {
	return v.value
}

func (v *NullableContainerSvcRunContainerResponse) Set(val *ContainerSvcRunContainerResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableContainerSvcRunContainerResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableContainerSvcRunContainerResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableContainerSvcRunContainerResponse(val *ContainerSvcRunContainerResponse) *NullableContainerSvcRunContainerResponse {
	return &NullableContainerSvcRunContainerResponse{value: val, isSet: true}
}

func (v NullableContainerSvcRunContainerResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableContainerSvcRunContainerResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


