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
import type { DynamicSvcCreateObjectFields } from './DynamicSvcCreateObjectFields';
/**
 *
 * @export
 * @interface DynamicSvcUpsertObjectRequest
 */
export interface DynamicSvcUpsertObjectRequest {
    /**
     *
     * @type {DynamicSvcCreateObjectFields}
     * @memberof DynamicSvcUpsertObjectRequest
     */
    object?: DynamicSvcCreateObjectFields;
}
/**
 * Check if a given object implements the DynamicSvcUpsertObjectRequest interface.
 */
export declare function instanceOfDynamicSvcUpsertObjectRequest(value: object): value is DynamicSvcUpsertObjectRequest;
export declare function DynamicSvcUpsertObjectRequestFromJSON(json: any): DynamicSvcUpsertObjectRequest;
export declare function DynamicSvcUpsertObjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicSvcUpsertObjectRequest;
export declare function DynamicSvcUpsertObjectRequestToJSON(json: any): DynamicSvcUpsertObjectRequest;
export declare function DynamicSvcUpsertObjectRequestToJSONTyped(value?: DynamicSvcUpsertObjectRequest | null, ignoreDiscriminator?: boolean): any;
