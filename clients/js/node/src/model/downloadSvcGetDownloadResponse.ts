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

import { RequestFile } from './models';
import { DownloadSvcDownloadDetails } from './downloadSvcDownloadDetails';

export class DownloadSvcGetDownloadResponse {
    'download'?: DownloadSvcDownloadDetails;
    'exists': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "download",
            "baseName": "download",
            "type": "DownloadSvcDownloadDetails"
        },
        {
            "name": "exists",
            "baseName": "exists",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return DownloadSvcGetDownloadResponse.attributeTypeMap;
    }
}

