/* tslint:disable */
/* eslint-disable */
/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the RegistrySvcImageSpec interface.
 */
function instanceOfRegistrySvcImageSpec(value) {
    if (!('image' in value) || value['image'] === undefined)
        return false;
    if (!('port' in value) || value['port'] === undefined)
        return false;
    return true;
}
function RegistrySvcImageSpecFromJSON(json) {
    return RegistrySvcImageSpecFromJSONTyped(json);
}
function RegistrySvcImageSpecFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'image': json['image'],
        'port': json['port'],
    };
}
function RegistrySvcImageSpecToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'image': value['image'],
        'port': value['port'],
    };
}

export { RegistrySvcImageSpecFromJSON, RegistrySvcImageSpecFromJSONTyped, RegistrySvcImageSpecToJSON, instanceOfRegistrySvcImageSpec };