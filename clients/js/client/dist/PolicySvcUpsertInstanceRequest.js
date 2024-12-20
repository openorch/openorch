'use strict';

var PolicySvcInstance = require('./PolicySvcInstance.js');
require('./PolicySvcRateLimitParameters.js');
require('./PolicySvcScope.js');
require('./PolicySvcEntity.js');
require('./PolicySvcTemplateId.js');
require('./PolicySvcBlocklistParameters.js');

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
 * Check if a given object implements the PolicySvcUpsertInstanceRequest interface.
 */
function instanceOfPolicySvcUpsertInstanceRequest(value) {
    return true;
}
function PolicySvcUpsertInstanceRequestFromJSON(json) {
    return PolicySvcUpsertInstanceRequestFromJSONTyped(json);
}
function PolicySvcUpsertInstanceRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'instance': json['instance'] == null ? undefined : PolicySvcInstance.PolicySvcInstanceFromJSON(json['instance']),
    };
}
function PolicySvcUpsertInstanceRequestToJSON(json) {
    return PolicySvcUpsertInstanceRequestToJSONTyped(json, false);
}
function PolicySvcUpsertInstanceRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'instance': PolicySvcInstance.PolicySvcInstanceToJSON(value['instance']),
    };
}

exports.PolicySvcUpsertInstanceRequestFromJSON = PolicySvcUpsertInstanceRequestFromJSON;
exports.PolicySvcUpsertInstanceRequestFromJSONTyped = PolicySvcUpsertInstanceRequestFromJSONTyped;
exports.PolicySvcUpsertInstanceRequestToJSON = PolicySvcUpsertInstanceRequestToJSON;
exports.PolicySvcUpsertInstanceRequestToJSONTyped = PolicySvcUpsertInstanceRequestToJSONTyped;
exports.instanceOfPolicySvcUpsertInstanceRequest = instanceOfPolicySvcUpsertInstanceRequest;
