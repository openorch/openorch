/* tslint:disable */
/* eslint-disable */
/**
 * Superplatform
 * On-premise AI platform and microservices ecosystem.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { RegistrySvcLanguage } from './RegistrySvcLanguage';
import {
    RegistrySvcLanguageFromJSON,
    RegistrySvcLanguageFromJSONTyped,
    RegistrySvcLanguageToJSON,
} from './RegistrySvcLanguage';

/**
 * 
 * @export
 * @interface RegistrySvcClient
 */
export interface RegistrySvcClient {
    /**
     * Programming language.
     * @type {RegistrySvcLanguage}
     * @memberof RegistrySvcClient
     */
    language: RegistrySvcLanguage;
    /**
     * The URL of the client.
     * @type {string}
     * @memberof RegistrySvcClient
     */
    url: string;
}



/**
 * Check if a given object implements the RegistrySvcClient interface.
 */
export function instanceOfRegistrySvcClient(value: object): value is RegistrySvcClient {
    if (!('language' in value) || value['language'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function RegistrySvcClientFromJSON(json: any): RegistrySvcClient {
    return RegistrySvcClientFromJSONTyped(json, false);
}

export function RegistrySvcClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrySvcClient {
    if (json == null) {
        return json;
    }
    return {
        
        'language': RegistrySvcLanguageFromJSON(json['language']),
        'url': json['url'],
    };
}

export function RegistrySvcClientToJSON(value?: RegistrySvcClient | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'language': RegistrySvcLanguageToJSON(value['language']),
        'url': value['url'],
    };
}
