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
import type { ChatSvcThread } from './ChatSvcThread';
import {
    ChatSvcThreadFromJSON,
    ChatSvcThreadFromJSONTyped,
    ChatSvcThreadToJSON,
} from './ChatSvcThread';

/**
 * 
 * @export
 * @interface ChatSvcGetThreadsResponse
 */
export interface ChatSvcGetThreadsResponse {
    /**
     * 
     * @type {Array<ChatSvcThread>}
     * @memberof ChatSvcGetThreadsResponse
     */
    threads?: Array<ChatSvcThread>;
}

/**
 * Check if a given object implements the ChatSvcGetThreadsResponse interface.
 */
export function instanceOfChatSvcGetThreadsResponse(value: object): value is ChatSvcGetThreadsResponse {
    return true;
}

export function ChatSvcGetThreadsResponseFromJSON(json: any): ChatSvcGetThreadsResponse {
    return ChatSvcGetThreadsResponseFromJSONTyped(json, false);
}

export function ChatSvcGetThreadsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChatSvcGetThreadsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'threads': json['threads'] == null ? undefined : ((json['threads'] as Array<any>).map(ChatSvcThreadFromJSON)),
    };
}

export function ChatSvcGetThreadsResponseToJSON(value?: ChatSvcGetThreadsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'threads': value['threads'] == null ? undefined : ((value['threads'] as Array<any>).map(ChatSvcThreadToJSON)),
    };
}
