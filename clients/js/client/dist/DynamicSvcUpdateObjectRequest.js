'use strict';

var DynamicSvcGenericObject = require('./DynamicSvcGenericObject.js');
var DatastoreCondition = require('./DatastoreCondition.js');
require('./DatastoreEqualCondition.js');
require('./DatastoreFieldSelector.js');
require('./DatastoreContainsCondition.js');
require('./DatastoreStartsWithCondition.js');

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
 * Check if a given object implements the DynamicSvcUpdateObjectRequest interface.
 */
function instanceOfDynamicSvcUpdateObjectRequest(value) {
    return true;
}
function DynamicSvcUpdateObjectRequestFromJSON(json) {
    return DynamicSvcUpdateObjectRequestFromJSONTyped(json);
}
function DynamicSvcUpdateObjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'conditions': json['conditions'] == null ? undefined : (json['conditions'].map(DatastoreCondition.DatastoreConditionFromJSON)),
        'object': json['object'] == null ? undefined : DynamicSvcGenericObject.DynamicSvcGenericObjectFromJSON(json['object']),
        'table': json['table'] == null ? undefined : json['table'],
    };
}
function DynamicSvcUpdateObjectRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'conditions': value['conditions'] == null ? undefined : (value['conditions'].map(DatastoreCondition.DatastoreConditionToJSON)),
        'object': DynamicSvcGenericObject.DynamicSvcGenericObjectToJSON(value['object']),
        'table': value['table'],
    };
}

exports.DynamicSvcUpdateObjectRequestFromJSON = DynamicSvcUpdateObjectRequestFromJSON;
exports.DynamicSvcUpdateObjectRequestFromJSONTyped = DynamicSvcUpdateObjectRequestFromJSONTyped;
exports.DynamicSvcUpdateObjectRequestToJSON = DynamicSvcUpdateObjectRequestToJSON;
exports.instanceOfDynamicSvcUpdateObjectRequest = instanceOfDynamicSvcUpdateObjectRequest;