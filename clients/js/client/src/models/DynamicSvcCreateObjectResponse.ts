/* tslint:disable */
/* eslint-disable */
/**
 * Singulatron
 * AI management and development platform.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { DynamicSvcGenericObject } from './DynamicSvcGenericObject';
import {
    DynamicSvcGenericObjectFromJSON,
    DynamicSvcGenericObjectFromJSONTyped,
    DynamicSvcGenericObjectToJSON,
} from './DynamicSvcGenericObject';

/**
 * 
 * @export
 * @interface DynamicSvcCreateObjectResponse
 */
export interface DynamicSvcCreateObjectResponse {
    /**
     * 
     * @type {DynamicSvcGenericObject}
     * @memberof DynamicSvcCreateObjectResponse
     */
    object?: DynamicSvcGenericObject;
}

/**
 * Check if a given object implements the DynamicSvcCreateObjectResponse interface.
 */
export function instanceOfDynamicSvcCreateObjectResponse(value: object): value is DynamicSvcCreateObjectResponse {
    return true;
}

export function DynamicSvcCreateObjectResponseFromJSON(json: any): DynamicSvcCreateObjectResponse {
    return DynamicSvcCreateObjectResponseFromJSONTyped(json, false);
}

export function DynamicSvcCreateObjectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicSvcCreateObjectResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'object': json['object'] == null ? undefined : DynamicSvcGenericObjectFromJSON(json['object']),
    };
}

export function DynamicSvcCreateObjectResponseToJSON(value?: DynamicSvcCreateObjectResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'object': DynamicSvcGenericObjectToJSON(value['object']),
    };
}
