/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.1
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
class SecretSvcWriteSecretRequest {
    static getAttributeTypeMap() {
        return SecretSvcWriteSecretRequest.attributeTypeMap;
    }
}
SecretSvcWriteSecretRequest.discriminator = undefined;
SecretSvcWriteSecretRequest.attributeTypeMap = [
    {
        "name": "secrets",
        "baseName": "secrets",
        "type": "Array<SecretSvcSecret>"
    }
];

export { SecretSvcWriteSecretRequest };