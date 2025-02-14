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
import type { DeploySvcDeployment } from './DeploySvcDeployment';
/**
 *
 * @export
 * @interface DeploySvcSaveDeploymentRequest
 */
export interface DeploySvcSaveDeploymentRequest {
    /**
     *
     * @type {DeploySvcDeployment}
     * @memberof DeploySvcSaveDeploymentRequest
     */
    deployment?: DeploySvcDeployment;
}
/**
 * Check if a given object implements the DeploySvcSaveDeploymentRequest interface.
 */
export declare function instanceOfDeploySvcSaveDeploymentRequest(value: object): value is DeploySvcSaveDeploymentRequest;
export declare function DeploySvcSaveDeploymentRequestFromJSON(json: any): DeploySvcSaveDeploymentRequest;
export declare function DeploySvcSaveDeploymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploySvcSaveDeploymentRequest;
export declare function DeploySvcSaveDeploymentRequestToJSON(json: any): DeploySvcSaveDeploymentRequest;
export declare function DeploySvcSaveDeploymentRequestToJSONTyped(value?: DeploySvcSaveDeploymentRequest | null, ignoreDiscriminator?: boolean): any;
