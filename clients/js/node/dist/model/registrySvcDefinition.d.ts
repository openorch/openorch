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
import { RegistrySvcAPISpec } from './registrySvcAPISpec';
import { RegistrySvcClient } from './registrySvcClient';
import { RegistrySvcImageSpec } from './registrySvcImageSpec';
import { RegistrySvcRepositorySpec } from './registrySvcRepositorySpec';
export declare class RegistrySvcDefinition {
    /**
    * API Specs such as OpenAPI definitions etc.
    */
    'apiSpecs'?: Array<RegistrySvcAPISpec>;
    /**
    * Programming language clients such as on npm or GitHub.
    */
    'clients'?: Array<RegistrySvcClient>;
    /**
    * Envars is a map of Renvironment variables that a deployment (see Deploy Svc Deployment) of this definition will REQUIRE to run. E.g., {\"DB_URL\": \"mysql://user:password@host:port/db\"} These will be injected into the service instances (see Registry Svc Instance) at runtime. The value of a key here is the default value. The actual value can be overridden at deployment time.
    */
    'envars'?: {
        [key: string]: string;
    };
    /**
    * HostPort is a clutch until automatic port assignment works. It will go a way as it doesn\'t make any sense in a Definition.
    */
    'hostPort'?: number;
    'id': string;
    /**
    * Container specifications for Docker, K8s, etc. Use this to deploy already built images.
    */
    'image'?: RegistrySvcImageSpec;
    /**
    * Repository based definitions is an alternative to Image definitions. Instead of deploying an already built and pushed image, a source code repository url can be provided. The container will be built from the source.
    */
    'repository'?: RegistrySvcRepositorySpec;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
