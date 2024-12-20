'use strict';

var ChatSvcMessage = require('./ChatSvcMessage.js');
var ChatSvcAsset = require('./ChatSvcAsset.js');

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
 * Check if a given object implements the ChatSvcGetMessagesResponse interface.
 */
function instanceOfChatSvcGetMessagesResponse(value) {
    return true;
}
function ChatSvcGetMessagesResponseFromJSON(json) {
    return ChatSvcGetMessagesResponseFromJSONTyped(json);
}
function ChatSvcGetMessagesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assets': json['assets'] == null ? undefined : (json['assets'].map(ChatSvcAsset.ChatSvcAssetFromJSON)),
        'messages': json['messages'] == null ? undefined : (json['messages'].map(ChatSvcMessage.ChatSvcMessageFromJSON)),
    };
}
function ChatSvcGetMessagesResponseToJSON(json) {
    return ChatSvcGetMessagesResponseToJSONTyped(json, false);
}
function ChatSvcGetMessagesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'assets': value['assets'] == null ? undefined : (value['assets'].map(ChatSvcAsset.ChatSvcAssetToJSON)),
        'messages': value['messages'] == null ? undefined : (value['messages'].map(ChatSvcMessage.ChatSvcMessageToJSON)),
    };
}

exports.ChatSvcGetMessagesResponseFromJSON = ChatSvcGetMessagesResponseFromJSON;
exports.ChatSvcGetMessagesResponseFromJSONTyped = ChatSvcGetMessagesResponseFromJSONTyped;
exports.ChatSvcGetMessagesResponseToJSON = ChatSvcGetMessagesResponseToJSON;
exports.ChatSvcGetMessagesResponseToJSONTyped = ChatSvcGetMessagesResponseToJSONTyped;
exports.instanceOfChatSvcGetMessagesResponse = instanceOfChatSvcGetMessagesResponse;
