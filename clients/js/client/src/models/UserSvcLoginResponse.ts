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

import { mapValues } from '../runtime';
import type { UserSvcAuthToken } from './UserSvcAuthToken';
import {
    UserSvcAuthTokenFromJSON,
    UserSvcAuthTokenFromJSONTyped,
    UserSvcAuthTokenToJSON,
} from './UserSvcAuthToken';

/**
 * 
 * @export
 * @interface UserSvcLoginResponse
 */
export interface UserSvcLoginResponse {
    /**
     * 
     * @type {UserSvcAuthToken}
     * @memberof UserSvcLoginResponse
     */
    token?: UserSvcAuthToken;
}

/**
 * Check if a given object implements the UserSvcLoginResponse interface.
 */
export function instanceOfUserSvcLoginResponse(value: object): value is UserSvcLoginResponse {
    return true;
}

export function UserSvcLoginResponseFromJSON(json: any): UserSvcLoginResponse {
    return UserSvcLoginResponseFromJSONTyped(json, false);
}

export function UserSvcLoginResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSvcLoginResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'] == null ? undefined : UserSvcAuthTokenFromJSON(json['token']),
    };
}

export function UserSvcLoginResponseToJSON(value?: UserSvcLoginResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'token': UserSvcAuthTokenToJSON(value['token']),
    };
}
