'use strict';

var RegistrySvcNode = require('./RegistrySvcNode.js');
require('./RegistrySvcGPU.js');
require('./RegistrySvcProcess.js');
require('./RegistrySvcResourceUsage.js');
require('./RegistrySvcUsage.js');

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
 * Check if a given object implements the RegistrySvcListNodesResponse interface.
 */
function instanceOfRegistrySvcListNodesResponse(value) {
    return true;
}
function RegistrySvcListNodesResponseFromJSON(json) {
    return RegistrySvcListNodesResponseFromJSONTyped(json);
}
function RegistrySvcListNodesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'nodes': json['nodes'] == null ? undefined : (json['nodes'].map(RegistrySvcNode.RegistrySvcNodeFromJSON)),
    };
}
function RegistrySvcListNodesResponseToJSON(json) {
    return RegistrySvcListNodesResponseToJSONTyped(json, false);
}
function RegistrySvcListNodesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'nodes': value['nodes'] == null ? undefined : (value['nodes'].map(RegistrySvcNode.RegistrySvcNodeToJSON)),
    };
}

exports.RegistrySvcListNodesResponseFromJSON = RegistrySvcListNodesResponseFromJSON;
exports.RegistrySvcListNodesResponseFromJSONTyped = RegistrySvcListNodesResponseFromJSONTyped;
exports.RegistrySvcListNodesResponseToJSON = RegistrySvcListNodesResponseToJSON;
exports.RegistrySvcListNodesResponseToJSONTyped = RegistrySvcListNodesResponseToJSONTyped;
exports.instanceOfRegistrySvcListNodesResponse = instanceOfRegistrySvcListNodesResponse;
