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
class GenericSvcUpsertObjectRequest {
    static getAttributeTypeMap() {
        return GenericSvcUpsertObjectRequest.attributeTypeMap;
    }
}
GenericSvcUpsertObjectRequest.discriminator = undefined;
GenericSvcUpsertObjectRequest.attributeTypeMap = [
    {
        "name": "object",
        "baseName": "object",
        "type": "GenericSvcGenericObjectCreateFields"
    }
];

export { GenericSvcUpsertObjectRequest };