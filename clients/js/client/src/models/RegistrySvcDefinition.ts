/* tslint:disable */
/* eslint-disable */
/**
 * OpenOrch
 * A language-agnostic microservices framework for building AI applications.
 *
 * The version of the OpenAPI document: 0.3.0-rc.26
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { RegistrySvcAPISpec } from './RegistrySvcAPISpec';
import {
    RegistrySvcAPISpecFromJSON,
    RegistrySvcAPISpecFromJSONTyped,
    RegistrySvcAPISpecToJSON,
    RegistrySvcAPISpecToJSONTyped,
} from './RegistrySvcAPISpec';
import type { RegistrySvcImageSpec } from './RegistrySvcImageSpec';
import {
    RegistrySvcImageSpecFromJSON,
    RegistrySvcImageSpecFromJSONTyped,
    RegistrySvcImageSpecToJSON,
    RegistrySvcImageSpecToJSONTyped,
} from './RegistrySvcImageSpec';
import type { RegistrySvcRepositorySpec } from './RegistrySvcRepositorySpec';
import {
    RegistrySvcRepositorySpecFromJSON,
    RegistrySvcRepositorySpecFromJSONTyped,
    RegistrySvcRepositorySpecToJSON,
    RegistrySvcRepositorySpecToJSONTyped,
} from './RegistrySvcRepositorySpec';
import type { RegistrySvcClient } from './RegistrySvcClient';
import {
    RegistrySvcClientFromJSON,
    RegistrySvcClientFromJSONTyped,
    RegistrySvcClientToJSON,
    RegistrySvcClientToJSONTyped,
} from './RegistrySvcClient';

/**
 * 
 * @export
 * @interface RegistrySvcDefinition
 */
export interface RegistrySvcDefinition {
    /**
     * API Specs such as OpenAPI definitions etc.
     * @type {Array<RegistrySvcAPISpec>}
     * @memberof RegistrySvcDefinition
     */
    apiSpecs?: Array<RegistrySvcAPISpec>;
    /**
     * Programming language clients such as on npm or GitHub.
     * @type {Array<RegistrySvcClient>}
     * @memberof RegistrySvcDefinition
     */
    clients?: Array<RegistrySvcClient>;
    /**
     * Envars is a map of Renvironment variables that a deployment (see Deploy Svc Deployment) of this definition will REQUIRE to run.
     * E.g., {"DB_URL": "mysql://user:password@host:port/db"}
     * These will be injected into the service instances (see Registry Svc Instance) at runtime.
     * The value of a key here is the default value. The actual value can be overridden at deployment time.
     * @type {{ [key: string]: string; }}
     * @memberof RegistrySvcDefinition
     */
    envars?: { [key: string]: string; };
    /**
     * HostPort is a clutch until automatic port assignment works.
     * It will go a way as it doesn't make any sense in a Definition.
     * @type {number}
     * @memberof RegistrySvcDefinition
     */
    hostPort?: number;
    /**
     * 
     * @type {string}
     * @memberof RegistrySvcDefinition
     */
    id: string;
    /**
     * Container specifications for Docker, K8s, etc.
     * Use this to deploy already built images.
     * @type {RegistrySvcImageSpec}
     * @memberof RegistrySvcDefinition
     */
    image?: RegistrySvcImageSpec;
    /**
     * Repository based definitions is an alternative to Image definitions.
     * Instead of deploying an already built and pushed image, a source code repository
     * url can be provided. The container will be built from the source.
     * @type {RegistrySvcRepositorySpec}
     * @memberof RegistrySvcDefinition
     */
    repository?: RegistrySvcRepositorySpec;
}

/**
 * Check if a given object implements the RegistrySvcDefinition interface.
 */
export function instanceOfRegistrySvcDefinition(value: object): value is RegistrySvcDefinition {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function RegistrySvcDefinitionFromJSON(json: any): RegistrySvcDefinition {
    return RegistrySvcDefinitionFromJSONTyped(json, false);
}

export function RegistrySvcDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrySvcDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'apiSpecs': json['apiSpecs'] == null ? undefined : ((json['apiSpecs'] as Array<any>).map(RegistrySvcAPISpecFromJSON)),
        'clients': json['clients'] == null ? undefined : ((json['clients'] as Array<any>).map(RegistrySvcClientFromJSON)),
        'envars': json['envars'] == null ? undefined : json['envars'],
        'hostPort': json['hostPort'] == null ? undefined : json['hostPort'],
        'id': json['id'],
        'image': json['image'] == null ? undefined : RegistrySvcImageSpecFromJSON(json['image']),
        'repository': json['repository'] == null ? undefined : RegistrySvcRepositorySpecFromJSON(json['repository']),
    };
}

export function RegistrySvcDefinitionToJSON(json: any): RegistrySvcDefinition {
    return RegistrySvcDefinitionToJSONTyped(json, false);
}

export function RegistrySvcDefinitionToJSONTyped(value?: RegistrySvcDefinition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiSpecs': value['apiSpecs'] == null ? undefined : ((value['apiSpecs'] as Array<any>).map(RegistrySvcAPISpecToJSON)),
        'clients': value['clients'] == null ? undefined : ((value['clients'] as Array<any>).map(RegistrySvcClientToJSON)),
        'envars': value['envars'],
        'hostPort': value['hostPort'],
        'id': value['id'],
        'image': RegistrySvcImageSpecToJSON(value['image']),
        'repository': RegistrySvcRepositorySpecToJSON(value['repository']),
    };
}

