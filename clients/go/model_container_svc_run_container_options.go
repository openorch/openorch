/*
OpenOrch

A language-agnostic microservices framework for building AI applications.

API version: 0.3.0-rc.26
Contact: sales@singulatron.com
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package openapi

import (
	"encoding/json"
)

// checks if the ContainerSvcRunContainerOptions type satisfies the MappedNullable interface at compile time
var _ MappedNullable = &ContainerSvcRunContainerOptions{}

// ContainerSvcRunContainerOptions struct for ContainerSvcRunContainerOptions
type ContainerSvcRunContainerOptions struct {
	// Assets maps environment variable names to file URLs. Example: {\"MODEL\": \"https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q2_K.gguf\"} These files are downloaded by the File Svc and mounted in the container. The environment variable `MODEL` will point to the local file path in the container.
	Assets *map[string]string `json:"assets,omitempty"`
	// Envs are environment variables to set in the container
	Envs []string `json:"envs,omitempty"`
	// GPUEnabled specifies if GPU support is enabled
	GpuEnabled *bool `json:"gpuEnabled,omitempty"`
	// Hash is a unique identifier for the container
	Hash *string `json:"hash,omitempty"`
	// Keeps are paths that persist across container restarts. They function like mounts or volumes, but their external storage location is irrelevant.
	Keeps []string `json:"keeps,omitempty"`
	// Labels are metadata labels associated with the container
	Labels *map[string]string `json:"labels,omitempty"`
	// Name is the name of the container
	Name *string `json:"name,omitempty"`
}

// NewContainerSvcRunContainerOptions instantiates a new ContainerSvcRunContainerOptions object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewContainerSvcRunContainerOptions() *ContainerSvcRunContainerOptions {
	this := ContainerSvcRunContainerOptions{}
	return &this
}

// NewContainerSvcRunContainerOptionsWithDefaults instantiates a new ContainerSvcRunContainerOptions object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewContainerSvcRunContainerOptionsWithDefaults() *ContainerSvcRunContainerOptions {
	this := ContainerSvcRunContainerOptions{}
	return &this
}

// GetAssets returns the Assets field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetAssets() map[string]string {
	if o == nil || IsNil(o.Assets) {
		var ret map[string]string
		return ret
	}
	return *o.Assets
}

// GetAssetsOk returns a tuple with the Assets field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetAssetsOk() (*map[string]string, bool) {
	if o == nil || IsNil(o.Assets) {
		return nil, false
	}
	return o.Assets, true
}

// HasAssets returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasAssets() bool {
	if o != nil && !IsNil(o.Assets) {
		return true
	}

	return false
}

// SetAssets gets a reference to the given map[string]string and assigns it to the Assets field.
func (o *ContainerSvcRunContainerOptions) SetAssets(v map[string]string) {
	o.Assets = &v
}

// GetEnvs returns the Envs field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetEnvs() []string {
	if o == nil || IsNil(o.Envs) {
		var ret []string
		return ret
	}
	return o.Envs
}

// GetEnvsOk returns a tuple with the Envs field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetEnvsOk() ([]string, bool) {
	if o == nil || IsNil(o.Envs) {
		return nil, false
	}
	return o.Envs, true
}

// HasEnvs returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasEnvs() bool {
	if o != nil && !IsNil(o.Envs) {
		return true
	}

	return false
}

// SetEnvs gets a reference to the given []string and assigns it to the Envs field.
func (o *ContainerSvcRunContainerOptions) SetEnvs(v []string) {
	o.Envs = v
}

// GetGpuEnabled returns the GpuEnabled field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetGpuEnabled() bool {
	if o == nil || IsNil(o.GpuEnabled) {
		var ret bool
		return ret
	}
	return *o.GpuEnabled
}

// GetGpuEnabledOk returns a tuple with the GpuEnabled field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetGpuEnabledOk() (*bool, bool) {
	if o == nil || IsNil(o.GpuEnabled) {
		return nil, false
	}
	return o.GpuEnabled, true
}

// HasGpuEnabled returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasGpuEnabled() bool {
	if o != nil && !IsNil(o.GpuEnabled) {
		return true
	}

	return false
}

// SetGpuEnabled gets a reference to the given bool and assigns it to the GpuEnabled field.
func (o *ContainerSvcRunContainerOptions) SetGpuEnabled(v bool) {
	o.GpuEnabled = &v
}

// GetHash returns the Hash field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetHash() string {
	if o == nil || IsNil(o.Hash) {
		var ret string
		return ret
	}
	return *o.Hash
}

// GetHashOk returns a tuple with the Hash field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetHashOk() (*string, bool) {
	if o == nil || IsNil(o.Hash) {
		return nil, false
	}
	return o.Hash, true
}

// HasHash returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasHash() bool {
	if o != nil && !IsNil(o.Hash) {
		return true
	}

	return false
}

// SetHash gets a reference to the given string and assigns it to the Hash field.
func (o *ContainerSvcRunContainerOptions) SetHash(v string) {
	o.Hash = &v
}

// GetKeeps returns the Keeps field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetKeeps() []string {
	if o == nil || IsNil(o.Keeps) {
		var ret []string
		return ret
	}
	return o.Keeps
}

// GetKeepsOk returns a tuple with the Keeps field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetKeepsOk() ([]string, bool) {
	if o == nil || IsNil(o.Keeps) {
		return nil, false
	}
	return o.Keeps, true
}

// HasKeeps returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasKeeps() bool {
	if o != nil && !IsNil(o.Keeps) {
		return true
	}

	return false
}

// SetKeeps gets a reference to the given []string and assigns it to the Keeps field.
func (o *ContainerSvcRunContainerOptions) SetKeeps(v []string) {
	o.Keeps = v
}

// GetLabels returns the Labels field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetLabels() map[string]string {
	if o == nil || IsNil(o.Labels) {
		var ret map[string]string
		return ret
	}
	return *o.Labels
}

// GetLabelsOk returns a tuple with the Labels field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetLabelsOk() (*map[string]string, bool) {
	if o == nil || IsNil(o.Labels) {
		return nil, false
	}
	return o.Labels, true
}

// HasLabels returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasLabels() bool {
	if o != nil && !IsNil(o.Labels) {
		return true
	}

	return false
}

// SetLabels gets a reference to the given map[string]string and assigns it to the Labels field.
func (o *ContainerSvcRunContainerOptions) SetLabels(v map[string]string) {
	o.Labels = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *ContainerSvcRunContainerOptions) GetName() string {
	if o == nil || IsNil(o.Name) {
		var ret string
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *ContainerSvcRunContainerOptions) GetNameOk() (*string, bool) {
	if o == nil || IsNil(o.Name) {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *ContainerSvcRunContainerOptions) HasName() bool {
	if o != nil && !IsNil(o.Name) {
		return true
	}

	return false
}

// SetName gets a reference to the given string and assigns it to the Name field.
func (o *ContainerSvcRunContainerOptions) SetName(v string) {
	o.Name = &v
}

func (o ContainerSvcRunContainerOptions) MarshalJSON() ([]byte, error) {
	toSerialize,err := o.ToMap()
	if err != nil {
		return []byte{}, err
	}
	return json.Marshal(toSerialize)
}

func (o ContainerSvcRunContainerOptions) ToMap() (map[string]interface{}, error) {
	toSerialize := map[string]interface{}{}
	if !IsNil(o.Assets) {
		toSerialize["assets"] = o.Assets
	}
	if !IsNil(o.Envs) {
		toSerialize["envs"] = o.Envs
	}
	if !IsNil(o.GpuEnabled) {
		toSerialize["gpuEnabled"] = o.GpuEnabled
	}
	if !IsNil(o.Hash) {
		toSerialize["hash"] = o.Hash
	}
	if !IsNil(o.Keeps) {
		toSerialize["keeps"] = o.Keeps
	}
	if !IsNil(o.Labels) {
		toSerialize["labels"] = o.Labels
	}
	if !IsNil(o.Name) {
		toSerialize["name"] = o.Name
	}
	return toSerialize, nil
}

type NullableContainerSvcRunContainerOptions struct {
	value *ContainerSvcRunContainerOptions
	isSet bool
}

func (v NullableContainerSvcRunContainerOptions) Get() *ContainerSvcRunContainerOptions {
	return v.value
}

func (v *NullableContainerSvcRunContainerOptions) Set(val *ContainerSvcRunContainerOptions) {
	v.value = val
	v.isSet = true
}

func (v NullableContainerSvcRunContainerOptions) IsSet() bool {
	return v.isSet
}

func (v *NullableContainerSvcRunContainerOptions) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableContainerSvcRunContainerOptions(val *ContainerSvcRunContainerOptions) *NullableContainerSvcRunContainerOptions {
	return &NullableContainerSvcRunContainerOptions{value: val, isSet: true}
}

func (v NullableContainerSvcRunContainerOptions) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableContainerSvcRunContainerOptions) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


