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
class GenericSvcGenericObjectCreateFields {
    static getAttributeTypeMap() {
        return GenericSvcGenericObjectCreateFields.attributeTypeMap;
    }
}
GenericSvcGenericObjectCreateFields.discriminator = undefined;
GenericSvcGenericObjectCreateFields.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "{ [key: string]: any; }"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "_public",
        "baseName": "public",
        "type": "boolean"
    },
    {
        "name": "table",
        "baseName": "table",
        "type": "string"
    },
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    }
];

export { GenericSvcGenericObjectCreateFields };