/**
 * OpenOrch
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.7
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
class SecretSvcReadSecretRequest {
    static getAttributeTypeMap() {
        return SecretSvcReadSecretRequest.attributeTypeMap;
    }
}
SecretSvcReadSecretRequest.discriminator = undefined;
SecretSvcReadSecretRequest.attributeTypeMap = [
    {
        "name": "key",
        "baseName": "key",
        "type": "string"
    },
    {
        "name": "keys",
        "baseName": "keys",
        "type": "Array<string>"
    }
];

export { SecretSvcReadSecretRequest };
