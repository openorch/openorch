/* tslint:disable */
/* eslint-disable */
/**
 * Singulatron
 * AI management and development platform.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the RegistrySvcServiceInstance interface.
 */
function instanceOfRegistrySvcServiceInstance(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('slug' in value) || value['slug'] === undefined)
        return false;
    return true;
}
function RegistrySvcServiceInstanceFromJSON(json) {
    return RegistrySvcServiceInstanceFromJSONTyped(json);
}
function RegistrySvcServiceInstanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'host': json['host'] == null ? undefined : json['host'],
        'id': json['id'],
        'ip': json['ip'] == null ? undefined : json['ip'],
        'path': json['path'] == null ? undefined : json['path'],
        'port': json['port'] == null ? undefined : json['port'],
        'scheme': json['scheme'] == null ? undefined : json['scheme'],
        'slug': json['slug'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}
function RegistrySvcServiceInstanceToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'host': value['host'],
        'id': value['id'],
        'ip': value['ip'],
        'path': value['path'],
        'port': value['port'],
        'scheme': value['scheme'],
        'slug': value['slug'],
        'url': value['url'],
    };
}

export { RegistrySvcServiceInstanceFromJSON, RegistrySvcServiceInstanceFromJSONTyped, RegistrySvcServiceInstanceToJSON, instanceOfRegistrySvcServiceInstance };