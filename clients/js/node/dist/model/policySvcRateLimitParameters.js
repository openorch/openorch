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
export class PolicySvcRateLimitParameters {
    static getAttributeTypeMap() {
        return PolicySvcRateLimitParameters.attributeTypeMap;
    }
}
PolicySvcRateLimitParameters.discriminator = undefined;
PolicySvcRateLimitParameters.attributeTypeMap = [
    {
        "name": "entity",
        "baseName": "entity",
        "type": "PolicySvcEntity"
    },
    {
        "name": "maxRequests",
        "baseName": "maxRequests",
        "type": "number"
    },
    {
        "name": "scope",
        "baseName": "scope",
        "type": "PolicySvcScope"
    },
    {
        "name": "timeWindow",
        "baseName": "timeWindow",
        "type": "string"
    }
];
