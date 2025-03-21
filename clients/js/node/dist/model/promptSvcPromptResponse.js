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
export class PromptSvcPromptResponse {
    static getAttributeTypeMap() {
        return PromptSvcPromptResponse.attributeTypeMap;
    }
}
PromptSvcPromptResponse.discriminator = undefined;
PromptSvcPromptResponse.attributeTypeMap = [
    {
        "name": "prompt",
        "baseName": "prompt",
        "type": "PromptSvcPrompt"
    },
    {
        "name": "responseMessage",
        "baseName": "responseMessage",
        "type": "ChatSvcMessage"
    }
];
