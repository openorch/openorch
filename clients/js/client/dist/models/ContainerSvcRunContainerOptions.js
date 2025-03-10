/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * A language-agnostic microservices framework for building AI applications.
 *
 * The version of the OpenAPI document: 0.3.0-rc.26
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the ContainerSvcRunContainerOptions interface.
 */
export function instanceOfContainerSvcRunContainerOptions(value) {
    return true;
}
export function ContainerSvcRunContainerOptionsFromJSON(json) {
    return ContainerSvcRunContainerOptionsFromJSONTyped(json, false);
}
export function ContainerSvcRunContainerOptionsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assets': json['assets'] == null ? undefined : json['assets'],
        'envs': json['envs'] == null ? undefined : json['envs'],
        'gpuEnabled': json['gpuEnabled'] == null ? undefined : json['gpuEnabled'],
        'hash': json['hash'] == null ? undefined : json['hash'],
        'keeps': json['keeps'] == null ? undefined : json['keeps'],
        'labels': json['labels'] == null ? undefined : json['labels'],
        'name': json['name'] == null ? undefined : json['name'],
    };
}
export function ContainerSvcRunContainerOptionsToJSON(json) {
    return ContainerSvcRunContainerOptionsToJSONTyped(json, false);
}
export function ContainerSvcRunContainerOptionsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'assets': value['assets'],
        'envs': value['envs'],
        'gpuEnabled': value['gpuEnabled'],
        'hash': value['hash'],
        'keeps': value['keeps'],
        'labels': value['labels'],
        'name': value['name'],
    };
}
