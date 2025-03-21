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
export class UserSvcUser {
    static getAttributeTypeMap() {
        return UserSvcUser.attributeTypeMap;
    }
}
UserSvcUser.discriminator = undefined;
UserSvcUser.attributeTypeMap = [
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<UserSvcContact>"
    },
    {
        "name": "createdAt",
        "baseName": "createdAt",
        "type": "string"
    },
    {
        "name": "deletedAt",
        "baseName": "deletedAt",
        "type": "string"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "passwordHash",
        "baseName": "passwordHash",
        "type": "string"
    },
    {
        "name": "slug",
        "baseName": "slug",
        "type": "string"
    },
    {
        "name": "updatedAt",
        "baseName": "updatedAt",
        "type": "string"
    }
];
