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
 * Check if a given object implements the PolicySvcCheckResponse interface.
 */
export function instanceOfPolicySvcCheckResponse(value) {
    if (!('allowed' in value) || value['allowed'] === undefined)
        return false;
    return true;
}
export function PolicySvcCheckResponseFromJSON(json) {
    return PolicySvcCheckResponseFromJSONTyped(json, false);
}
export function PolicySvcCheckResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'allowed': json['allowed'],
    };
}
export function PolicySvcCheckResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'allowed': value['allowed'],
    };
}