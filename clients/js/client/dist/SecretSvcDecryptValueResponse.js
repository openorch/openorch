'use strict';

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
/**
 * Check if a given object implements the SecretSvcDecryptValueResponse interface.
 */
function instanceOfSecretSvcDecryptValueResponse(value) {
    return true;
}
function SecretSvcDecryptValueResponseFromJSON(json) {
    return SecretSvcDecryptValueResponseFromJSONTyped(json);
}
function SecretSvcDecryptValueResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'value': json['value'] == null ? undefined : json['value'],
        'values': json['values'] == null ? undefined : json['values'],
    };
}
function SecretSvcDecryptValueResponseToJSON(json) {
    return SecretSvcDecryptValueResponseToJSONTyped(json, false);
}
function SecretSvcDecryptValueResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'value': value['value'],
        'values': value['values'],
    };
}

exports.SecretSvcDecryptValueResponseFromJSON = SecretSvcDecryptValueResponseFromJSON;
exports.SecretSvcDecryptValueResponseFromJSONTyped = SecretSvcDecryptValueResponseFromJSONTyped;
exports.SecretSvcDecryptValueResponseToJSON = SecretSvcDecryptValueResponseToJSON;
exports.SecretSvcDecryptValueResponseToJSONTyped = SecretSvcDecryptValueResponseToJSONTyped;
exports.instanceOfSecretSvcDecryptValueResponse = instanceOfSecretSvcDecryptValueResponse;