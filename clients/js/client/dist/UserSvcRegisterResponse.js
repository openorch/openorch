'use strict';

var UserSvcAuthToken = require('./UserSvcAuthToken.js');

/* tslint:disable */
/* eslint-disable */
/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.4
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the UserSvcRegisterResponse interface.
 */
function instanceOfUserSvcRegisterResponse(value) {
    return true;
}
function UserSvcRegisterResponseFromJSON(json) {
    return UserSvcRegisterResponseFromJSONTyped(json);
}
function UserSvcRegisterResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'token': json['token'] == null ? undefined : UserSvcAuthToken.UserSvcAuthTokenFromJSON(json['token']),
    };
}
function UserSvcRegisterResponseToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'token': UserSvcAuthToken.UserSvcAuthTokenToJSON(value['token']),
    };
}

exports.UserSvcRegisterResponseFromJSON = UserSvcRegisterResponseFromJSON;
exports.UserSvcRegisterResponseFromJSONTyped = UserSvcRegisterResponseFromJSONTyped;
exports.UserSvcRegisterResponseToJSON = UserSvcRegisterResponseToJSON;
exports.instanceOfUserSvcRegisterResponse = instanceOfUserSvcRegisterResponse;