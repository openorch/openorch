/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
class DockerSvcStopContainerRequest {
    static getAttributeTypeMap() {
        return DockerSvcStopContainerRequest.attributeTypeMap;
    }
}
DockerSvcStopContainerRequest.discriminator = undefined;
DockerSvcStopContainerRequest.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    }
];

export { DockerSvcStopContainerRequest };