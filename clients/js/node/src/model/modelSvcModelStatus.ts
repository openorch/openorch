/**
 * Singulatron
 * Run and develop self-hosted AI apps. Your programmable in-house GPT. The Firebase for the AI age.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ModelSvcModelStatus {
    'address'?: string;
    'assetsReady'?: boolean;
    /**
    * Running triggers onModelLaunch on the frontend.  Running is true when the model is both running and answering  - fully loaded.
    */
    'running'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "string"
        },
        {
            "name": "assetsReady",
            "baseName": "assetsReady",
            "type": "boolean"
        },
        {
            "name": "running",
            "baseName": "running",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return ModelSvcModelStatus.attributeTypeMap;
    }
}
