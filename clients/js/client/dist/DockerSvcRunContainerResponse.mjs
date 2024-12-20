import { DockerSvcRunInfoFromJSON, DockerSvcRunInfoToJSON } from './DockerSvcRunInfo.mjs';

/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.8
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the DockerSvcRunContainerResponse interface.
 */
function instanceOfDockerSvcRunContainerResponse(value) {
    return true;
}
function DockerSvcRunContainerResponseFromJSON(json) {
    return DockerSvcRunContainerResponseFromJSONTyped(json);
}
function DockerSvcRunContainerResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'info': json['info'] == null ? undefined : DockerSvcRunInfoFromJSON(json['info']),
    };
}
function DockerSvcRunContainerResponseToJSON(json) {
    return DockerSvcRunContainerResponseToJSONTyped(json, false);
}
function DockerSvcRunContainerResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'info': DockerSvcRunInfoToJSON(value['info']),
    };
}

export { DockerSvcRunContainerResponseFromJSON, DockerSvcRunContainerResponseFromJSONTyped, DockerSvcRunContainerResponseToJSON, DockerSvcRunContainerResponseToJSONTyped, instanceOfDockerSvcRunContainerResponse };
