/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.3.0-rc.7
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SecretSvcSecret
 */
export interface SecretSvcSecret {
    /**
     * Id of the secret
     * @type {string}
     * @memberof SecretSvcSecret
     */
    id?: string;
    /**
     * Envar or slug-like key of the secret
     * @type {string}
     * @memberof SecretSvcSecret
     */
    key?: string;
    /**
     * Slugs of services/users who can read the secret
     * @type {Array<string>}
     * @memberof SecretSvcSecret
     */
    readers?: Array<string>;
    /**
     * Secret Value
     * @type {string}
     * @memberof SecretSvcSecret
     */
    value?: string;
    /**
     * Slugs of services/users who can modify the secret
     * @type {Array<string>}
     * @memberof SecretSvcSecret
     */
    writers?: Array<string>;
}

/**
 * Check if a given object implements the SecretSvcSecret interface.
 */
export function instanceOfSecretSvcSecret(value: object): value is SecretSvcSecret {
    return true;
}

export function SecretSvcSecretFromJSON(json: any): SecretSvcSecret {
    return SecretSvcSecretFromJSONTyped(json, false);
}

export function SecretSvcSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretSvcSecret {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'key': json['key'] == null ? undefined : json['key'],
        'readers': json['readers'] == null ? undefined : json['readers'],
        'value': json['value'] == null ? undefined : json['value'],
        'writers': json['writers'] == null ? undefined : json['writers'],
    };
}

  export function SecretSvcSecretToJSON(json: any): SecretSvcSecret {
      return SecretSvcSecretToJSONTyped(json, false);
  }

  export function SecretSvcSecretToJSONTyped(value?: SecretSvcSecret | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'key': value['key'],
        'readers': value['readers'],
        'value': value['value'],
        'writers': value['writers'],
    };
}

