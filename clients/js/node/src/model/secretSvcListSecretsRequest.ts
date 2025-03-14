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

import { RequestFile } from './models';

export class SecretSvcListSecretsRequest {
    'key'?: string;
    'keys'?: Array<string>;
    'namespace'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "keys",
            "baseName": "keys",
            "type": "Array<string>"
        },
        {
            "name": "namespace",
            "baseName": "namespace",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SecretSvcListSecretsRequest.attributeTypeMap;
    }
}

