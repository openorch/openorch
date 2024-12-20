'use strict';

var DatastoreQuery = require('./DatastoreQuery.js');
require('./DatastoreFilter.js');
require('./DatastoreOp.js');
require('./DatastoreOrderBy.js');

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
 * Check if a given object implements the DynamicSvcQueryRequest interface.
 */
function instanceOfDynamicSvcQueryRequest(value) {
    return true;
}
function DynamicSvcQueryRequestFromJSON(json) {
    return DynamicSvcQueryRequestFromJSONTyped(json);
}
function DynamicSvcQueryRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'query': json['query'] == null ? undefined : DatastoreQuery.DatastoreQueryFromJSON(json['query']),
        'readers': json['readers'] == null ? undefined : json['readers'],
        'table': json['table'] == null ? undefined : json['table'],
    };
}
function DynamicSvcQueryRequestToJSON(json) {
    return DynamicSvcQueryRequestToJSONTyped(json, false);
}
function DynamicSvcQueryRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'query': DatastoreQuery.DatastoreQueryToJSON(value['query']),
        'readers': value['readers'],
        'table': value['table'],
    };
}

exports.DynamicSvcQueryRequestFromJSON = DynamicSvcQueryRequestFromJSON;
exports.DynamicSvcQueryRequestFromJSONTyped = DynamicSvcQueryRequestFromJSONTyped;
exports.DynamicSvcQueryRequestToJSON = DynamicSvcQueryRequestToJSON;
exports.DynamicSvcQueryRequestToJSONTyped = DynamicSvcQueryRequestToJSONTyped;
exports.instanceOfDynamicSvcQueryRequest = instanceOfDynamicSvcQueryRequest;
