/**
 * OpenOrch
 * AI app platform. A language-agnostic, distributed platform for building microservices-based AI backends.
 *
 * The version of the OpenAPI document: 0.3.0-rc.19
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export class RegistrySvcListNodesResponse {
    static getAttributeTypeMap() {
        return RegistrySvcListNodesResponse.attributeTypeMap;
    }
}
RegistrySvcListNodesResponse.discriminator = undefined;
RegistrySvcListNodesResponse.attributeTypeMap = [
    {
        "name": "nodes",
        "baseName": "nodes",
        "type": "Array<RegistrySvcNode>"
    }
];
