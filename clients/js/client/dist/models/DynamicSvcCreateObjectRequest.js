/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * AI app platform. A language-agnostic, distributed platform for building microservices-based AI backends.
 *
 * The version of the OpenAPI document: 0.3.0-rc.19
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { DynamicSvcCreateObjectFieldsFromJSON, DynamicSvcCreateObjectFieldsToJSON, } from './DynamicSvcCreateObjectFields';
/**
 * Check if a given object implements the DynamicSvcCreateObjectRequest interface.
 */
export function instanceOfDynamicSvcCreateObjectRequest(value) {
    return true;
}
export function DynamicSvcCreateObjectRequestFromJSON(json) {
    return DynamicSvcCreateObjectRequestFromJSONTyped(json, false);
}
export function DynamicSvcCreateObjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'object': json['object'] == null ? undefined : DynamicSvcCreateObjectFieldsFromJSON(json['object']),
    };
}
export function DynamicSvcCreateObjectRequestToJSON(json) {
    return DynamicSvcCreateObjectRequestToJSONTyped(json, false);
}
export function DynamicSvcCreateObjectRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'object': DynamicSvcCreateObjectFieldsToJSON(value['object']),
    };
}
