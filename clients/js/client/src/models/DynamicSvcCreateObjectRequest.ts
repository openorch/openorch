/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { DynamicSvcCreateObjectFields } from './DynamicSvcCreateObjectFields';
import {
    DynamicSvcCreateObjectFieldsFromJSON,
    DynamicSvcCreateObjectFieldsFromJSONTyped,
    DynamicSvcCreateObjectFieldsToJSON,
    DynamicSvcCreateObjectFieldsToJSONTyped,
} from './DynamicSvcCreateObjectFields';

/**
 * 
 * @export
 * @interface DynamicSvcCreateObjectRequest
 */
export interface DynamicSvcCreateObjectRequest {
    /**
     * 
     * @type {DynamicSvcCreateObjectFields}
     * @memberof DynamicSvcCreateObjectRequest
     */
    object?: DynamicSvcCreateObjectFields;
}

/**
 * Check if a given object implements the DynamicSvcCreateObjectRequest interface.
 */
export function instanceOfDynamicSvcCreateObjectRequest(value: object): value is DynamicSvcCreateObjectRequest {
    return true;
}

export function DynamicSvcCreateObjectRequestFromJSON(json: any): DynamicSvcCreateObjectRequest {
    return DynamicSvcCreateObjectRequestFromJSONTyped(json, false);
}

export function DynamicSvcCreateObjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicSvcCreateObjectRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'] == null ? undefined : DynamicSvcCreateObjectFieldsFromJSON(json['object']),
    };
}

export function DynamicSvcCreateObjectRequestToJSON(json: any): DynamicSvcCreateObjectRequest {
    return DynamicSvcCreateObjectRequestToJSONTyped(json, false);
}

export function DynamicSvcCreateObjectRequestToJSONTyped(value?: DynamicSvcCreateObjectRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'object': DynamicSvcCreateObjectFieldsToJSON(value['object']),
    };
}

