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
/**
 *
 * @export
 * @interface SecretSvcEncryptValueResponse
 */
export interface SecretSvcEncryptValueResponse {
    /**
     *
     * @type {string}
     * @memberof SecretSvcEncryptValueResponse
     */
    value?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof SecretSvcEncryptValueResponse
     */
    values?: Array<string>;
}
/**
 * Check if a given object implements the SecretSvcEncryptValueResponse interface.
 */
export declare function instanceOfSecretSvcEncryptValueResponse(value: object): value is SecretSvcEncryptValueResponse;
export declare function SecretSvcEncryptValueResponseFromJSON(json: any): SecretSvcEncryptValueResponse;
export declare function SecretSvcEncryptValueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSvcEncryptValueResponse;
export declare function SecretSvcEncryptValueResponseToJSON(json: any): SecretSvcEncryptValueResponse;
export declare function SecretSvcEncryptValueResponseToJSONTyped(value?: SecretSvcEncryptValueResponse | null, ignoreDiscriminator?: boolean): any;