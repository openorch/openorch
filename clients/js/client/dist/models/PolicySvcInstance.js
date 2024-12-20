/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.8
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PolicySvcRateLimitParametersFromJSON, PolicySvcRateLimitParametersToJSON, } from './PolicySvcRateLimitParameters';
import { PolicySvcTemplateIdFromJSON, PolicySvcTemplateIdToJSON, } from './PolicySvcTemplateId';
import { PolicySvcBlocklistParametersFromJSON, PolicySvcBlocklistParametersToJSON, } from './PolicySvcBlocklistParameters';
/**
 * Check if a given object implements the PolicySvcInstance interface.
 */
export function instanceOfPolicySvcInstance(value) {
    if (!('templateId' in value) || value['templateId'] === undefined)
        return false;
    return true;
}
export function PolicySvcInstanceFromJSON(json) {
    return PolicySvcInstanceFromJSONTyped(json, false);
}
export function PolicySvcInstanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'blocklistParameters': json['blocklistParameters'] == null ? undefined : PolicySvcBlocklistParametersFromJSON(json['blocklistParameters']),
        'endpoint': json['endpoint'] == null ? undefined : json['endpoint'],
        'id': json['id'] == null ? undefined : json['id'],
        'rateLimitParameters': json['rateLimitParameters'] == null ? undefined : PolicySvcRateLimitParametersFromJSON(json['rateLimitParameters']),
        'templateId': PolicySvcTemplateIdFromJSON(json['templateId']),
    };
}
export function PolicySvcInstanceToJSON(json) {
    return PolicySvcInstanceToJSONTyped(json, false);
}
export function PolicySvcInstanceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'blocklistParameters': PolicySvcBlocklistParametersToJSON(value['blocklistParameters']),
        'endpoint': value['endpoint'],
        'id': value['id'],
        'rateLimitParameters': PolicySvcRateLimitParametersToJSON(value['rateLimitParameters']),
        'templateId': PolicySvcTemplateIdToJSON(value['templateId']),
    };
}
