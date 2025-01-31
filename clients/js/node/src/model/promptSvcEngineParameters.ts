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
import { PromptSvcStableDiffusionParameters } from './promptSvcStableDiffusionParameters';

export class PromptSvcEngineParameters {
    'lastRun'?: PromptSvcStableDiffusionParameters;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "lastRun",
            "baseName": "lastRun",
            "type": "PromptSvcStableDiffusionParameters"
        }    ];

    static getAttributeTypeMap() {
        return PromptSvcEngineParameters.attributeTypeMap;
    }
}

