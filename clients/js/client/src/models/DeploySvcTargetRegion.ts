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
/**
 * 
 * @export
 * @interface DeploySvcTargetRegion
 */
export interface DeploySvcTargetRegion {
    /**
     * Cluster or node where service should be deployed (e.g., "us-west1", "local-docker")
     * @type {string}
     * @memberof DeploySvcTargetRegion
     */
    cluster?: string;
    /**
     * Optional: Specific zone for the deployment
     * @type {string}
     * @memberof DeploySvcTargetRegion
     */
    zone?: string;
}

/**
 * Check if a given object implements the DeploySvcTargetRegion interface.
 */
export function instanceOfDeploySvcTargetRegion(value: object): value is DeploySvcTargetRegion {
    return true;
}

export function DeploySvcTargetRegionFromJSON(json: any): DeploySvcTargetRegion {
    return DeploySvcTargetRegionFromJSONTyped(json, false);
}

export function DeploySvcTargetRegionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeploySvcTargetRegion {
    if (json == null) {
        return json;
    }
    return {
        
        'cluster': json['cluster'] == null ? undefined : json['cluster'],
        'zone': json['zone'] == null ? undefined : json['zone'],
    };
}

export function DeploySvcTargetRegionToJSON(value?: DeploySvcTargetRegion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'cluster': value['cluster'],
        'zone': value['zone'],
    };
}
