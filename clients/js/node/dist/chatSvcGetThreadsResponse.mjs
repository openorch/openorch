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
class ChatSvcGetThreadsResponse {
    static getAttributeTypeMap() {
        return ChatSvcGetThreadsResponse.attributeTypeMap;
    }
}
ChatSvcGetThreadsResponse.discriminator = undefined;
ChatSvcGetThreadsResponse.attributeTypeMap = [
    {
        "name": "threads",
        "baseName": "threads",
        "type": "Array<ChatSvcThread>"
    }
];

export { ChatSvcGetThreadsResponse };