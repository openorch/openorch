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
 * @interface ConfigSvcDownloadServiceConfig
 */
export interface ConfigSvcDownloadServiceConfig {
    /**
     * 
     * @type {string}
     * @memberof ConfigSvcDownloadServiceConfig
     */
    downloadFolder?: string;
}

/**
 * Check if a given object implements the ConfigSvcDownloadServiceConfig interface.
 */
export function instanceOfConfigSvcDownloadServiceConfig(value: object): value is ConfigSvcDownloadServiceConfig {
    return true;
}

export function ConfigSvcDownloadServiceConfigFromJSON(json: any): ConfigSvcDownloadServiceConfig {
    return ConfigSvcDownloadServiceConfigFromJSONTyped(json, false);
}

export function ConfigSvcDownloadServiceConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigSvcDownloadServiceConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'downloadFolder': json['downloadFolder'] == null ? undefined : json['downloadFolder'],
    };
}

  export function ConfigSvcDownloadServiceConfigToJSON(json: any): ConfigSvcDownloadServiceConfig {
      return ConfigSvcDownloadServiceConfigToJSONTyped(json, false);
  }

  export function ConfigSvcDownloadServiceConfigToJSONTyped(value?: ConfigSvcDownloadServiceConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'downloadFolder': value['downloadFolder'],
    };
}

