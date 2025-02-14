/**
 * OpenOrch
 * AI app platform. A language-agnostic, distributed platform for building microservices-based AI backends.
 *
 * The version of the OpenAPI document: 0.3.0-rc.19
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ModelSvcContainer } from './modelSvcContainer';

export class ModelSvcCudaParameters {
    'container'?: ModelSvcContainer;
    'defaultCudaVersion'?: string;
    'defaultCudnnVersion'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "ModelSvcContainer"
        },
        {
            "name": "defaultCudaVersion",
            "baseName": "defaultCudaVersion",
            "type": "string"
        },
        {
            "name": "defaultCudnnVersion",
            "baseName": "defaultCudnnVersion",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ModelSvcCudaParameters.attributeTypeMap;
    }
}

