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

import { RequestFile } from './models';
import { ChatSvcAsset } from './chatSvcAsset';
import { ChatSvcMessage } from './chatSvcMessage';

export class ChatSvcGetMessagesResponse {
    'assets'?: Array<ChatSvcAsset>;
    'messages'?: Array<ChatSvcMessage>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "assets",
            "baseName": "assets",
            "type": "Array<ChatSvcAsset>"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<ChatSvcMessage>"
        }    ];

    static getAttributeTypeMap() {
        return ChatSvcGetMessagesResponse.attributeTypeMap;
    }
}

