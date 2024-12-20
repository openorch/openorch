import { UserSvcRoleFromJSON, UserSvcRoleToJSON } from './UserSvcRole.mjs';

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
 * Check if a given object implements the UserSvcCreateRoleResponse interface.
 */
function instanceOfUserSvcCreateRoleResponse(value) {
    return true;
}
function UserSvcCreateRoleResponseFromJSON(json) {
    return UserSvcCreateRoleResponseFromJSONTyped(json);
}
function UserSvcCreateRoleResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'role': json['role'] == null ? undefined : UserSvcRoleFromJSON(json['role']),
    };
}
function UserSvcCreateRoleResponseToJSON(json) {
    return UserSvcCreateRoleResponseToJSONTyped(json, false);
}
function UserSvcCreateRoleResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'role': UserSvcRoleToJSON(value['role']),
    };
}

export { UserSvcCreateRoleResponseFromJSON, UserSvcCreateRoleResponseFromJSONTyped, UserSvcCreateRoleResponseToJSON, UserSvcCreateRoleResponseToJSONTyped, instanceOfUserSvcCreateRoleResponse };
