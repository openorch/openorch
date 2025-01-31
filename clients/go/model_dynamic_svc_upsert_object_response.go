/*
OpenOrch

On-premise AI platform and microservices ecosystem.

API version: 0.3.0-rc.11
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the DynamicSvcUpsertObjectResponse type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DynamicSvcUpsertObjectResponse{}

// DynamicSvcUpsertObjectResponse struct for DynamicSvcUpsertObjectResponse
type DynamicSvcUpsertObjectResponse struct {
	Object *DynamicSvcObject `json:"object,omitempty"`
}

// NewDynamicSvcUpsertObjectResponse instantiates a new DynamicSvcUpsertObjectResponse object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDynamicSvcUpsertObjectResponse() *DynamicSvcUpsertObjectResponse {
	this := DynamicSvcUpsertObjectResponse{}
	return &this
}

// NewDynamicSvcUpsertObjectResponseWithDefaults instantiates a new DynamicSvcUpsertObjectResponse object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDynamicSvcUpsertObjectResponseWithDefaults() *DynamicSvcUpsertObjectResponse {
	this := DynamicSvcUpsertObjectResponse{}
	return &this
}

// GetObject returns the Object field value if set, zero value otherwise.
func (o *DynamicSvcUpsertObjectResponse) GetObject() DynamicSvcObject {
	if o == nil || IsNil(o.Object) {
		var ret DynamicSvcObject
		return ret
	}
	return *o.Object
}

// GetObjectOk returns a tuple with the Object field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DynamicSvcUpsertObjectResponse) GetObjectOk() (*DynamicSvcObject, bool) {
	if o == nil || IsNil(o.Object) {
		return nil, false
	}
	return o.Object, true
}

// HasObject returns a boolean if a field has been set.
func (o *DynamicSvcUpsertObjectResponse) HasObject() bool {
	if o != nil && !IsNil(o.Object) {
		return true
	}

	return false
}

// SetObject gets a reference to the given DynamicSvcObject and assigns it to the Object field.
func (o *DynamicSvcUpsertObjectResponse) SetObject(v DynamicSvcObject) {
	o.Object = &v
}

func (o DynamicSvcUpsertObjectResponse) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DynamicSvcUpsertObjectResponse) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Object) {
		toSerialize["object"] = o.Object
	}
	return toSerialize, nil
}

type NullableDynamicSvcUpsertObjectResponse struct {
	value *DynamicSvcUpsertObjectResponse
	isSet bool
}

func (v NullableDynamicSvcUpsertObjectResponse) Get() *DynamicSvcUpsertObjectResponse {
	return v.value
}

func (v *NullableDynamicSvcUpsertObjectResponse) Set(val *DynamicSvcUpsertObjectResponse) {
	v.value = val
	v.isSet = true
}

func (v NullableDynamicSvcUpsertObjectResponse) IsSet() bool {
	return v.isSet
}

func (v *NullableDynamicSvcUpsertObjectResponse) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDynamicSvcUpsertObjectResponse(val *DynamicSvcUpsertObjectResponse) *NullableDynamicSvcUpsertObjectResponse {
	return &NullableDynamicSvcUpsertObjectResponse{value: val, isSet: true}
}

func (v NullableDynamicSvcUpsertObjectResponse) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDynamicSvcUpsertObjectResponse) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


