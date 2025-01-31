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
 * @interface DockerSvcRunContainerOptions
 */
export interface DockerSvcRunContainerOptions {
    /**
     * Assets maps environment variable names to file URLs.
     * Example: {"MODEL": "https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q2_K.gguf"}
     * These files are downloaded by the File Svc and mounted in the container.
     * The environment variable `MODEL` will point to the local file path in the container.
     * @type {{ [key: string]: string; }}
     * @memberof DockerSvcRunContainerOptions
     */
    assets?: {
        [key: string]: string;
    };
    /**
     * Envs are environment variables to set in the container
     * @type {Array<string>}
     * @memberof DockerSvcRunContainerOptions
     */
    envs?: Array<string>;
    /**
     * GPUEnabled specifies if GPU support is enabled
     * @type {boolean}
     * @memberof DockerSvcRunContainerOptions
     */
    gpuEnabled?: boolean;
    /**
     * Hash is a unique identifier for the container
     * @type {string}
     * @memberof DockerSvcRunContainerOptions
     */
    hash?: string;
    /**
     * Keeps are paths that persist across container restarts.
     * They function like mounts or volumes, but their external storage location is irrelevant.
     * @type {Array<string>}
     * @memberof DockerSvcRunContainerOptions
     */
    keeps?: Array<string>;
    /**
     * Labels are metadata labels associated with the container
     * @type {{ [key: string]: string; }}
     * @memberof DockerSvcRunContainerOptions
     */
    labels?: {
        [key: string]: string;
    };
    /**
     * Name is the name of the container
     * @type {string}
     * @memberof DockerSvcRunContainerOptions
     */
    name?: string;
}
/**
 * Check if a given object implements the DockerSvcRunContainerOptions interface.
 */
export declare function instanceOfDockerSvcRunContainerOptions(value: object): value is DockerSvcRunContainerOptions;
export declare function DockerSvcRunContainerOptionsFromJSON(json: any): DockerSvcRunContainerOptions;
export declare function DockerSvcRunContainerOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DockerSvcRunContainerOptions;
export declare function DockerSvcRunContainerOptionsToJSON(json: any): DockerSvcRunContainerOptions;
export declare function DockerSvcRunContainerOptionsToJSONTyped(value?: DockerSvcRunContainerOptions | null, ignoreDiscriminator?: boolean): any;
