'use strict';

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
class DockerSvcRunContainerRequest {
    static getAttributeTypeMap() {
        return DockerSvcRunContainerRequest.attributeTypeMap;
    }
}
DockerSvcRunContainerRequest.discriminator = undefined;
DockerSvcRunContainerRequest.attributeTypeMap = [
    {
        "name": "hostPort",
        "baseName": "hostPort",
        "type": "number"
    },
    {
        "name": "image",
        "baseName": "image",
        "type": "string"
    },
    {
        "name": "options",
        "baseName": "options",
        "type": "DockerSvcRunContainerOptions"
    },
    {
        "name": "port",
        "baseName": "port",
        "type": "number"
    }
];

exports.DockerSvcRunContainerRequest = DockerSvcRunContainerRequest;