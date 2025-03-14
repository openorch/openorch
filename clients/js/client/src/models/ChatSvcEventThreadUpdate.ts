/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * A language-agnostic microservices framework for building AI applications.
 *
 * The version of the OpenAPI document: 0.3.0-rc.29
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChatSvcEventThreadUpdate
 */
export interface ChatSvcEventThreadUpdate {
    /**
     * 
     * @type {string}
     * @memberof ChatSvcEventThreadUpdate
     */
    threadId?: string;
}

/**
 * Check if a given object implements the ChatSvcEventThreadUpdate interface.
 */
export function instanceOfChatSvcEventThreadUpdate(value: object): value is ChatSvcEventThreadUpdate {
    return true;
}

export function ChatSvcEventThreadUpdateFromJSON(json: any): ChatSvcEventThreadUpdate {
    return ChatSvcEventThreadUpdateFromJSONTyped(json, false);
}

export function ChatSvcEventThreadUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatSvcEventThreadUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'threadId': json['threadId'] == null ? undefined : json['threadId'],
    };
}

export function ChatSvcEventThreadUpdateToJSON(json: any): ChatSvcEventThreadUpdate {
    return ChatSvcEventThreadUpdateToJSONTyped(json, false);
}

export function ChatSvcEventThreadUpdateToJSONTyped(value?: ChatSvcEventThreadUpdate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'threadId': value['threadId'],
    };
}

