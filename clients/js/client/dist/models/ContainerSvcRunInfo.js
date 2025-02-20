/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * A language-agnostic microservices framework for building AI applications.
 *
 * The version of the OpenAPI document: 0.3.0-rc.22
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the ContainerSvcRunInfo interface.
 */
export function instanceOfContainerSvcRunInfo(value) {
    return true;
}
export function ContainerSvcRunInfoFromJSON(json) {
    return ContainerSvcRunInfoFromJSONTyped(json, false);
}
export function ContainerSvcRunInfoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'newContainerStarted': json['newContainerStarted'] == null ? undefined : json['newContainerStarted'],
        'portNumber': json['portNumber'] == null ? undefined : json['portNumber'],
    };
}
export function ContainerSvcRunInfoToJSON(json) {
    return ContainerSvcRunInfoToJSONTyped(json, false);
}
export function ContainerSvcRunInfoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'newContainerStarted': value['newContainerStarted'],
        'portNumber': value['portNumber'],
    };
}
