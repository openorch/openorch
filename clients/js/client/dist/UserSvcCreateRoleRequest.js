'use strict';

/* tslint:disable */
/* eslint-disable */
/**
 * Singulatron
 * Run and develop self-hosted AI apps. Your programmable in-house GPT. The Firebase for the AI age.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the UserSvcCreateRoleRequest interface.
 */
function instanceOfUserSvcCreateRoleRequest(value) {
    return true;
}
function UserSvcCreateRoleRequestFromJSON(json) {
    return UserSvcCreateRoleRequestFromJSONTyped(json);
}
function UserSvcCreateRoleRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'] == null ? undefined : json['name'],
        'permissionIds': json['permissionIds'] == null ? undefined : json['permissionIds'],
    };
}
function UserSvcCreateRoleRequestToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'description': value['description'],
        'name': value['name'],
        'permissionIds': value['permissionIds'],
    };
}

exports.UserSvcCreateRoleRequestFromJSON = UserSvcCreateRoleRequestFromJSON;
exports.UserSvcCreateRoleRequestFromJSONTyped = UserSvcCreateRoleRequestFromJSONTyped;
exports.UserSvcCreateRoleRequestToJSON = UserSvcCreateRoleRequestToJSON;
exports.instanceOfUserSvcCreateRoleRequest = instanceOfUserSvcCreateRoleRequest;