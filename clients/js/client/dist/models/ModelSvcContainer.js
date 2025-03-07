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
 * Check if a given object implements the ModelSvcContainer interface.
 */
export function instanceOfModelSvcContainer(value) {
    return true;
}
export function ModelSvcContainerFromJSON(json) {
    return ModelSvcContainerFromJSONTyped(json, false);
}
export function ModelSvcContainerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'envars': json['envars'] == null ? undefined : json['envars'],
        'imageTemplate': json['imageTemplate'] == null ? undefined : json['imageTemplate'],
        'keeps': json['keeps'] == null ? undefined : json['keeps'],
        'port': json['port'] == null ? undefined : json['port'],
    };
}
export function ModelSvcContainerToJSON(json) {
    return ModelSvcContainerToJSONTyped(json, false);
}
export function ModelSvcContainerToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'envars': value['envars'],
        'imageTemplate': value['imageTemplate'],
        'keeps': value['keeps'],
        'port': value['port'],
    };
}
