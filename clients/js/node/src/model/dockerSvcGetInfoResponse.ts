/**
 * OpenOrch
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.11
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DockerSvcDockerInfo } from './dockerSvcDockerInfo';

export class DockerSvcGetInfoResponse {
    'info'?: DockerSvcDockerInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "info",
            "baseName": "info",
            "type": "DockerSvcDockerInfo"
        }    ];

    static getAttributeTypeMap() {
        return DockerSvcGetInfoResponse.attributeTypeMap;
    }
}

