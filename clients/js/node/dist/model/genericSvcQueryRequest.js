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
export class GenericSvcQueryRequest {
    static getAttributeTypeMap() {
        return GenericSvcQueryRequest.attributeTypeMap;
    }
}
GenericSvcQueryRequest.discriminator = undefined;
GenericSvcQueryRequest.attributeTypeMap = [
    {
        "name": "_public",
        "baseName": "public",
        "type": "boolean"
    },
    {
        "name": "query",
        "baseName": "query",
        "type": "DatastoreQuery"
    },
    {
        "name": "table",
        "baseName": "table",
        "type": "string"
    }
];