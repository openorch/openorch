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
class UserSvcCreateUserRequest {
    static getAttributeTypeMap() {
        return UserSvcCreateUserRequest.attributeTypeMap;
    }
}
UserSvcCreateUserRequest.discriminator = undefined;
UserSvcCreateUserRequest.attributeTypeMap = [
    {
        "name": "password",
        "baseName": "password",
        "type": "string"
    },
    {
        "name": "roleIds",
        "baseName": "roleIds",
        "type": "Array<string>"
    },
    {
        "name": "user",
        "baseName": "user",
        "type": "UserSvcUser"
    }
];

export { UserSvcCreateUserRequest };