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
/**
 *
 * @export
 * @interface DynamicSvcErrorResponse
 */
export interface DynamicSvcErrorResponse {
    /**
     *
     * @type {string}
     * @memberof DynamicSvcErrorResponse
     */
    error?: string;
}
/**
 * Check if a given object implements the DynamicSvcErrorResponse interface.
 */
export declare function instanceOfDynamicSvcErrorResponse(value: object): value is DynamicSvcErrorResponse;
export declare function DynamicSvcErrorResponseFromJSON(json: any): DynamicSvcErrorResponse;
export declare function DynamicSvcErrorResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DynamicSvcErrorResponse;
export declare function DynamicSvcErrorResponseToJSON(json: any): DynamicSvcErrorResponse;
export declare function DynamicSvcErrorResponseToJSONTyped(value?: DynamicSvcErrorResponse | null, ignoreDiscriminator?: boolean): any;
