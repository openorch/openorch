/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import type {
  DockerSvcBuildImageRequest,
  DockerSvcContainerIsRunningResponse,
  DockerSvcErrorResponse,
  DockerSvcGetContainerSummaryResponse,
  DockerSvcGetDockerHostResponse,
  DockerSvcGetInfoResponse,
  DockerSvcRunContainerRequest,
  DockerSvcRunContainerResponse,
  DockerSvcStopContainerRequest,
} from '../models/index';
import {
    DockerSvcBuildImageRequestFromJSON,
    DockerSvcBuildImageRequestToJSON,
    DockerSvcContainerIsRunningResponseFromJSON,
    DockerSvcContainerIsRunningResponseToJSON,
    DockerSvcErrorResponseFromJSON,
    DockerSvcErrorResponseToJSON,
    DockerSvcGetContainerSummaryResponseFromJSON,
    DockerSvcGetContainerSummaryResponseToJSON,
    DockerSvcGetDockerHostResponseFromJSON,
    DockerSvcGetDockerHostResponseToJSON,
    DockerSvcGetInfoResponseFromJSON,
    DockerSvcGetInfoResponseToJSON,
    DockerSvcRunContainerRequestFromJSON,
    DockerSvcRunContainerRequestToJSON,
    DockerSvcRunContainerResponseFromJSON,
    DockerSvcRunContainerResponseToJSON,
    DockerSvcStopContainerRequestFromJSON,
    DockerSvcStopContainerRequestToJSON,
} from '../models/index';

export interface BuildImageRequest {
    body: DockerSvcBuildImageRequest;
}

export interface ContainerIsRunningRequest {
    hash?: string;
    name?: string;
}

export interface ContainerSummaryRequest {
    hash?: string;
    name?: string;
    lines?: number;
}

export interface RunContainerRequest {
    body: DockerSvcRunContainerRequest;
}

export interface StopContainerRequest {
    body: DockerSvcStopContainerRequest;
}

/**
 * 
 */
export class DockerSvcApi extends runtime.BaseAPI {

    /**
     * Builds a Docker image with the specified parameters.  Requires the `docker-svc:image:build` permission.
     * Build an Image
     */
    async buildImageRaw(requestParameters: BuildImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling buildImage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/image`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DockerSvcBuildImageRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Builds a Docker image with the specified parameters.  Requires the `docker-svc:image:build` permission.
     * Build an Image
     */
    async buildImage(requestParameters: BuildImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.buildImageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Check if a Docker container is running, identified by hash or name.
     * Check If a Container Is Running
     */
    async containerIsRunningRaw(requestParameters: ContainerIsRunningRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DockerSvcContainerIsRunningResponse>> {
        const queryParameters: any = {};

        if (requestParameters['hash'] != null) {
            queryParameters['hash'] = requestParameters['hash'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/container/is-running`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcContainerIsRunningResponseFromJSON(jsonValue));
    }

    /**
     * Check if a Docker container is running, identified by hash or name.
     * Check If a Container Is Running
     */
    async containerIsRunning(requestParameters: ContainerIsRunningRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DockerSvcContainerIsRunningResponse> {
        const response = await this.containerIsRunningRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.
     * Get Container Summary
     */
    async containerSummaryRaw(requestParameters: ContainerSummaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DockerSvcGetContainerSummaryResponse>> {
        const queryParameters: any = {};

        if (requestParameters['hash'] != null) {
            queryParameters['hash'] = requestParameters['hash'];
        }

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['lines'] != null) {
            queryParameters['lines'] = requestParameters['lines'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/container/summary`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcGetContainerSummaryResponseFromJSON(jsonValue));
    }

    /**
     * Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.
     * Get Container Summary
     */
    async containerSummary(requestParameters: ContainerSummaryRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DockerSvcGetContainerSummaryResponse> {
        const response = await this.containerSummaryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve information about the Docker host
     * Get Docker Host
     */
    async getHostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DockerSvcGetDockerHostResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/host`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcGetDockerHostResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve information about the Docker host
     * Get Docker Host
     */
    async getHost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DockerSvcGetDockerHostResponse> {
        const response = await this.getHostRaw(initOverrides);
        return await response.value();
    }

    /**
     * Retrieve detailed information about the Docker service
     * Get Docker Service Information
     */
    async getInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DockerSvcGetInfoResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/info`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcGetInfoResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve detailed information about the Docker service
     * Get Docker Service Information
     */
    async getInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DockerSvcGetInfoResponse> {
        const response = await this.getInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * Runs a Docker container with the specified parameters.  Requires the `docker-svc:container:run` permission.
     * Run a Container
     */
    async runContainerRaw(requestParameters: RunContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DockerSvcRunContainerResponse>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling runContainer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/container`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DockerSvcRunContainerRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DockerSvcRunContainerResponseFromJSON(jsonValue));
    }

    /**
     * Runs a Docker container with the specified parameters.  Requires the `docker-svc:container:run` permission.
     * Run a Container
     */
    async runContainer(requestParameters: RunContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DockerSvcRunContainerResponse> {
        const response = await this.runContainerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Stops a Docker container with the specified parameters.  Requires the `docker-svc:container:stop` permission.
     * Stop a Container
     */
    async stopContainerRaw(requestParameters: StopContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters['body'] == null) {
            throw new runtime.RequiredError(
                'body',
                'Required parameter "body" was null or undefined when calling stopContainer().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // BearerAuth authentication
        }

        const response = await this.request({
            path: `/docker-svc/container/stop`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: DockerSvcStopContainerRequestToJSON(requestParameters['body']),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Stops a Docker container with the specified parameters.  Requires the `docker-svc:container:stop` permission.
     * Stop a Container
     */
    async stopContainer(requestParameters: StopContainerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<object> {
        const response = await this.stopContainerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
