/*
Singulatron

AI management and development platform.

API version: 0.2
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
	"bytes"
	"fmt"
)

// checks if the PolicySvcInstance type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &PolicySvcInstance{}

// PolicySvcInstance struct for PolicySvcInstance
type PolicySvcInstance struct {
	BlocklistParameters *PolicySvcBlocklistParameters `json:"blocklistParameters,omitempty"`
	Endpoint *string `json:"endpoint,omitempty"`
	Id *string `json:"id,omitempty"`
	RateLimitParameters *PolicySvcRateLimitParameters `json:"rateLimitParameters,omitempty"`
	TemplateId PolicySvcTemplateId `json:"templateId"`
}

type _PolicySvcInstance PolicySvcInstance

// NewPolicySvcInstance instantiates a new PolicySvcInstance object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPolicySvcInstance(templateId PolicySvcTemplateId) *PolicySvcInstance {
	this := PolicySvcInstance{}
	this.TemplateId = templateId
	return &this
}

// NewPolicySvcInstanceWithDefaults instantiates a new PolicySvcInstance object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPolicySvcInstanceWithDefaults() *PolicySvcInstance {
	this := PolicySvcInstance{}
	return &this
}

// GetBlocklistParameters returns the BlocklistParameters field value if set, zero value otherwise.
func (o *PolicySvcInstance) GetBlocklistParameters() PolicySvcBlocklistParameters {
	if o == nil || IsNil(o.BlocklistParameters) {
		var ret PolicySvcBlocklistParameters
		return ret
	}
	return *o.BlocklistParameters
}

// GetBlocklistParametersOk returns a tuple with the BlocklistParameters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicySvcInstance) GetBlocklistParametersOk() (*PolicySvcBlocklistParameters, bool) {
	if o == nil || IsNil(o.BlocklistParameters) {
		return nil, false
	}
	return o.BlocklistParameters, true
}

// HasBlocklistParameters returns a boolean if a field has been set.
func (o *PolicySvcInstance) HasBlocklistParameters() bool {
	if o != nil && !IsNil(o.BlocklistParameters) {
		return true
	}

	return false
}

// SetBlocklistParameters gets a reference to the given PolicySvcBlocklistParameters and assigns it to the BlocklistParameters field.
func (o *PolicySvcInstance) SetBlocklistParameters(v PolicySvcBlocklistParameters) {
	o.BlocklistParameters = &v
}

// GetEndpoint returns the Endpoint field value if set, zero value otherwise.
func (o *PolicySvcInstance) GetEndpoint() string {
	if o == nil || IsNil(o.Endpoint) {
		var ret string
		return ret
	}
	return *o.Endpoint
}

// GetEndpointOk returns a tuple with the Endpoint field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicySvcInstance) GetEndpointOk() (*string, bool) {
	if o == nil || IsNil(o.Endpoint) {
		return nil, false
	}
	return o.Endpoint, true
}

// HasEndpoint returns a boolean if a field has been set.
func (o *PolicySvcInstance) HasEndpoint() bool {
	if o != nil && !IsNil(o.Endpoint) {
		return true
	}

	return false
}

// SetEndpoint gets a reference to the given string and assigns it to the Endpoint field.
func (o *PolicySvcInstance) SetEndpoint(v string) {
	o.Endpoint = &v
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *PolicySvcInstance) GetId() string {
	if o == nil || IsNil(o.Id) {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicySvcInstance) GetIdOk() (*string, bool) {
	if o == nil || IsNil(o.Id) {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *PolicySvcInstance) HasId() bool {
	if o != nil && !IsNil(o.Id) {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *PolicySvcInstance) SetId(v string) {
	o.Id = &v
}

// GetRateLimitParameters returns the RateLimitParameters field value if set, zero value otherwise.
func (o *PolicySvcInstance) GetRateLimitParameters() PolicySvcRateLimitParameters {
	if o == nil || IsNil(o.RateLimitParameters) {
		var ret PolicySvcRateLimitParameters
		return ret
	}
	return *o.RateLimitParameters
}

// GetRateLimitParametersOk returns a tuple with the RateLimitParameters field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PolicySvcInstance) GetRateLimitParametersOk() (*PolicySvcRateLimitParameters, bool) {
	if o == nil || IsNil(o.RateLimitParameters) {
		return nil, false
	}
	return o.RateLimitParameters, true
}

// HasRateLimitParameters returns a boolean if a field has been set.
func (o *PolicySvcInstance) HasRateLimitParameters() bool {
	if o != nil && !IsNil(o.RateLimitParameters) {
		return true
	}

	return false
}

// SetRateLimitParameters gets a reference to the given PolicySvcRateLimitParameters and assigns it to the RateLimitParameters field.
func (o *PolicySvcInstance) SetRateLimitParameters(v PolicySvcRateLimitParameters) {
	o.RateLimitParameters = &v
}

// GetTemplateId returns the TemplateId field value
func (o *PolicySvcInstance) GetTemplateId() PolicySvcTemplateId {
	if o == nil {
		var ret PolicySvcTemplateId
		return ret
	}

	return o.TemplateId
}

// GetTemplateIdOk returns a tuple with the TemplateId field value
// and a boolean to check if the value has been set.
func (o *PolicySvcInstance) GetTemplateIdOk() (*PolicySvcTemplateId, bool) {
	if o == nil {
		return nil, false
	}
	return &o.TemplateId, true
}

// SetTemplateId sets field value
func (o *PolicySvcInstance) SetTemplateId(v PolicySvcTemplateId) {
	o.TemplateId = v
}

func (o PolicySvcInstance) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o PolicySvcInstance) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.BlocklistParameters) {
		toSerialize["blocklistParameters"] = o.BlocklistParameters
	}
	if !IsNil(o.Endpoint) {
		toSerialize["endpoint"] = o.Endpoint
	}
	if !IsNil(o.Id) {
		toSerialize["id"] = o.Id
	}
	if !IsNil(o.RateLimitParameters) {
		toSerialize["rateLimitParameters"] = o.RateLimitParameters
	}
	toSerialize["templateId"] = o.TemplateId
	return toSerialize, nil
}

func (o *PolicySvcInstance) UnmarshalJSON(data []byte) (err error) {
	// This validates that all required properties are included in the JSON object
	// by unmarshalling the object into a generic map with string keys and checking
	// that every required field exists as a key in the generic map.
	requiredProperties := []string{
		"templateId",
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

	varPolicySvcInstance := _PolicySvcInstance{}

	decoder := json.NewDecoder(bytes.NewReader(data))
	decoder.DisallowUnknownFields()
	err = decoder.Decode(&varPolicySvcInstance)

	if err != nil {
		return err
	}

	*o = PolicySvcInstance(varPolicySvcInstance)

	return err
}

type NullablePolicySvcInstance struct {
	value *PolicySvcInstance
	isSet bool
}

func (v NullablePolicySvcInstance) Get() *PolicySvcInstance {
	return v.value
}

func (v *NullablePolicySvcInstance) Set(val *PolicySvcInstance) {
	v.value = val
	v.isSet = true
}

func (v NullablePolicySvcInstance) IsSet() bool {
	return v.isSet
}

func (v *NullablePolicySvcInstance) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePolicySvcInstance(val *PolicySvcInstance) *NullablePolicySvcInstance {
	return &NullablePolicySvcInstance{value: val, isSet: true}
}

func (v NullablePolicySvcInstance) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePolicySvcInstance) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

