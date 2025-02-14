/*
OpenOrch

AI app platform. A language-agnostic, distributed platform for building microservices-based AI backends.

API version: 0.3.0-rc.19
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the DynamicSvcCreateObjectFields type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &DynamicSvcCreateObjectFields{}

// DynamicSvcCreateObjectFields struct for DynamicSvcCreateObjectFields
type DynamicSvcCreateObjectFields struct {
	// Authors is a list of user ID and organization ID who created the object. If an organization ID is not provided, the currently active organization will be queried from the User Svc.
	Authors []string `json:"authors,omitempty"`
	Data map[string]interface{} `json:"data"`
	// Deleters is a list of user IDs and role IDs that can delete the object. `_self` can be used to refer to the caller user's userId and `_org` can be used to refer to the user's currently active organization (if exists).
	Deleters []string `json:"deleters,omitempty"`
	Id *string `json:"id,omitempty"`
	// Readers is a list of user IDs and role IDs that can read the object. `_self` can be used to refer to the caller user's userId and `_org` can be used to refer to the user's currently active organization (if exists).
	Readers []string `json:"readers,omitempty"`
	Table string `json:"table"`
	// Writers is a list of user IDs and role IDs that can write the object. `_self` can be used to refer to the caller user's userId and `_org` can be used to refer to the user's currently active organization (if exists).
	Writers []string `json:"writers,omitempty"`
}

type _DynamicSvcCreateObjectFields DynamicSvcCreateObjectFields

// NewDynamicSvcCreateObjectFields instantiates a new DynamicSvcCreateObjectFields object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewDynamicSvcCreateObjectFields(data map[string]interface{}, table string) *DynamicSvcCreateObjectFields {
	this := DynamicSvcCreateObjectFields{}
	this.Data = data
	this.Table = table
	return &this
}

// NewDynamicSvcCreateObjectFieldsWithDefaults instantiates a new DynamicSvcCreateObjectFields object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewDynamicSvcCreateObjectFieldsWithDefaults() *DynamicSvcCreateObjectFields {
	this := DynamicSvcCreateObjectFields{}
	return &this
}

// GetAuthors returns the Authors field value if set, zero value otherwise.
func (o *DynamicSvcCreateObjectFields) GetAuthors() []string {
	if o == nil || IsNil(o.Authors) {
		var ret []string
		return ret
	}
	return o.Authors
}

// GetAuthorsOk returns a tuple with the Authors field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetAuthorsOk() ([]string, bool) {
	if o == nil || IsNil(o.Authors) {
		return nil, false
	}
	return o.Authors, true
}

// HasAuthors returns a boolean if a field has been set.
func (o *DynamicSvcCreateObjectFields) HasAuthors() bool {
	if o != nil && !IsNil(o.Authors) {
		return true
	}

	return false
}

// SetAuthors gets a reference to the given []string and assigns it to the Authors field.
func (o *DynamicSvcCreateObjectFields) SetAuthors(v []string) {
	o.Authors = v
}

// GetData returns the Data field value
func (o *DynamicSvcCreateObjectFields) GetData() map[string]interface{} {
	if o == nil {
		var ret map[string]interface{}
		return ret
	}

	return o.Data
}

// GetDataOk returns a tuple with the Data field value
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetDataOk() (map[string]interface{}, bool) {
	if o == nil {
		return map[string]interface{}{}, false
	}
	return o.Data, true
}

// SetData sets field value
func (o *DynamicSvcCreateObjectFields) SetData(v map[string]interface{}) {
	o.Data = v
}

// GetDeleters returns the Deleters field value if set, zero value otherwise.
func (o *DynamicSvcCreateObjectFields) GetDeleters() []string {
	if o == nil || IsNil(o.Deleters) {
		var ret []string
		return ret
	}
	return o.Deleters
}

// GetDeletersOk returns a tuple with the Deleters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetDeletersOk() ([]string, bool) {
	if o == nil || IsNil(o.Deleters) {
		return nil, false
	}
	return o.Deleters, true
}

// HasDeleters returns a boolean if a field has been set.
func (o *DynamicSvcCreateObjectFields) HasDeleters() bool {
	if o != nil && !IsNil(o.Deleters) {
		return true
	}

	return false
}

// SetDeleters gets a reference to the given []string and assigns it to the Deleters field.
func (o *DynamicSvcCreateObjectFields) SetDeleters(v []string) {
	o.Deleters = v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *DynamicSvcCreateObjectFields) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *DynamicSvcCreateObjectFields) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *DynamicSvcCreateObjectFields) SetId(v string) {
	o.Id = &v
}

// GetReaders returns the Readers field value if set, zero value otherwise.
func (o *DynamicSvcCreateObjectFields) GetReaders() []string {
	if o == nil || IsNil(o.Readers) {
		var ret []string
		return ret
	}
	return o.Readers
}

// GetReadersOk returns a tuple with the Readers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetReadersOk() ([]string, bool) {
	if o == nil || IsNil(o.Readers) {
		return nil, false
	}
	return o.Readers, true
}

// HasReaders returns a boolean if a field has been set.
func (o *DynamicSvcCreateObjectFields) HasReaders() bool {
	if o != nil && !IsNil(o.Readers) {
		return true
	}

	return false
}

// SetReaders gets a reference to the given []string and assigns it to the Readers field.
func (o *DynamicSvcCreateObjectFields) SetReaders(v []string) {
	o.Readers = v
}

// GetTable returns the Table field value
func (o *DynamicSvcCreateObjectFields) GetTable() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Table
}

// GetTableOk returns a tuple with the Table field value
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetTableOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Table, true
}

// SetTable sets field value
func (o *DynamicSvcCreateObjectFields) SetTable(v string) {
	o.Table = v
}

// GetWriters returns the Writers field value if set, zero value otherwise.
func (o *DynamicSvcCreateObjectFields) GetWriters() []string {
	if o == nil || IsNil(o.Writers) {
		var ret []string
		return ret
	}
	return o.Writers
}

// GetWritersOk returns a tuple with the Writers field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *DynamicSvcCreateObjectFields) GetWritersOk() ([]string, bool) {
	if o == nil || IsNil(o.Writers) {
		return nil, false
	}
	return o.Writers, true
}

// HasWriters returns a boolean if a field has been set.
func (o *DynamicSvcCreateObjectFields) HasWriters() bool {
	if o != nil && !IsNil(o.Writers) {
		return true
	}

	return false
}

// SetWriters gets a reference to the given []string and assigns it to the Writers field.
func (o *DynamicSvcCreateObjectFields) SetWriters(v []string) {
	o.Writers = v
}

func (o DynamicSvcCreateObjectFields) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o DynamicSvcCreateObjectFields) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Authors) {
		toSerialize["authors"] = o.Authors
	}
	toSerialize["data"] = o.Data
	if !IsNil(o.Deleters) {
		toSerialize["deleters"] = o.Deleters
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.Readers) {
		toSerialize["readers"] = o.Readers
	}
	toSerialize["table"] = o.Table
	if !IsNil(o.Writers) {
		toSerialize["writers"] = o.Writers
	}
	return toSerialize, nil
}

func (o *DynamicSvcCreateObjectFields) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"data",
		"table",
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

	varDynamicSvcCreateObjectFields := _DynamicSvcCreateObjectFields{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varDynamicSvcCreateObjectFields)

	if err != nil {
		return err
	}

	*o = DynamicSvcCreateObjectFields(varDynamicSvcCreateObjectFields)

	return err
}

type NullableDynamicSvcCreateObjectFields struct {
	value *DynamicSvcCreateObjectFields
	isSet bool
}

func (v NullableDynamicSvcCreateObjectFields) Get() *DynamicSvcCreateObjectFields {
	return v.value
}

func (v *NullableDynamicSvcCreateObjectFields) Set(val *DynamicSvcCreateObjectFields) {
	v.value = val
	v.isSet = true
}

func (v NullableDynamicSvcCreateObjectFields) IsSet() bool {
	return v.isSet
}

func (v *NullableDynamicSvcCreateObjectFields) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableDynamicSvcCreateObjectFields(val *DynamicSvcCreateObjectFields) *NullableDynamicSvcCreateObjectFields {
	return &NullableDynamicSvcCreateObjectFields{value: val, isSet: true}
}

func (v NullableDynamicSvcCreateObjectFields) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableDynamicSvcCreateObjectFields) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


