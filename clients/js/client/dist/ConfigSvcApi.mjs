import { a as BaseAPI, _ as __awaiter, J as JSONApiResponse, b as RequiredError } from './runtime2.mjs';
import { ConfigSvcGetConfigResponseFromJSON } from './ConfigSvcGetConfigResponse.mjs';
import { ConfigSvcSaveConfigRequestToJSON } from './ConfigSvcSaveConfigRequest.mjs';
import './ConfigSvcConfig.mjs';

/* tslint:disable */
/* eslint-disable */
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
 */
class ConfigSvcApi extends BaseAPI {
    /**
     * Fetch the current configuration from the server
     * Get Config
     */
    getConfigRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters['namespace'] != null) {
                queryParameters['namespace'] = requestParameters['namespace'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/config-svc/config`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => ConfigSvcGetConfigResponseFromJSON(jsonValue));
        });
    }
    /**
     * Fetch the current configuration from the server
     * Get Config
     */
    getConfig() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.getConfigRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Save the provided configuration to the server
     * Save Config
     */
    saveConfigRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new RequiredError('body', 'Required parameter "body" was null or undefined when calling saveConfig().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/config-svc/config`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: ConfigSvcSaveConfigRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response);
        });
    }
    /**
     * Save the provided configuration to the server
     * Save Config
     */
    saveConfig(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveConfigRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { ConfigSvcApi };
