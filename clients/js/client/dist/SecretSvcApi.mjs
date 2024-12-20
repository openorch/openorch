import { a as BaseAPI, _ as __awaiter, b as RequiredError, J as JSONApiResponse } from './runtime2.mjs';
import { SecretSvcDecryptValueRequestToJSON } from './SecretSvcDecryptValueRequest.mjs';
import { SecretSvcDecryptValueResponseFromJSON } from './SecretSvcDecryptValueResponse.mjs';
import { SecretSvcEncryptValueRequestToJSON } from './SecretSvcEncryptValueRequest.mjs';
import { SecretSvcEncryptValueResponseFromJSON } from './SecretSvcEncryptValueResponse.mjs';
import { SecretSvcListSecretsRequestToJSON } from './SecretSvcListSecretsRequest.mjs';
import { SecretSvcListSecretsResponseFromJSON } from './SecretSvcListSecretsResponse.mjs';
import { SecretSvcRemoveSecretsRequestToJSON } from './SecretSvcRemoveSecretsRequest.mjs';
import { SecretSvcSaveSecretsRequestToJSON } from './SecretSvcSaveSecretsRequest.mjs';
import './SecretSvcSecret.mjs';

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
class SecretSvcApi extends BaseAPI {
    /**
     * Decrypt a value and return the encrypted result
     * Decrypt a Value
     */
    decryptValueRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new RequiredError('body', 'Required parameter "body" was null or undefined when calling decryptValue().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/secret-svc/decrypt`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SecretSvcDecryptValueRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SecretSvcDecryptValueResponseFromJSON(jsonValue));
        });
    }
    /**
     * Decrypt a value and return the encrypted result
     * Decrypt a Value
     */
    decryptValue(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.decryptValueRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Encrypt a value and return the encrypted result
     * Encrypt a Value
     */
    encryptValueRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new RequiredError('body', 'Required parameter "body" was null or undefined when calling encryptValue().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/secret-svc/encrypt`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SecretSvcEncryptValueRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SecretSvcEncryptValueResponseFromJSON(jsonValue));
        });
    }
    /**
     * Encrypt a value and return the encrypted result
     * Encrypt a Value
     */
    encryptValue(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.encryptValueRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * List secrets by key(s) if authorized.
     * List Secrets
     */
    listSecretsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/secret-svc/secrets`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SecretSvcListSecretsRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response, (jsonValue) => SecretSvcListSecretsResponseFromJSON(jsonValue));
        });
    }
    /**
     * List secrets by key(s) if authorized.
     * List Secrets
     */
    listSecrets() {
        return __awaiter(this, arguments, void 0, function* (requestParameters = {}, initOverrides) {
            const response = yield this.listSecretsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Remove secrets if authorized to do so
     * Remove Secrets
     */
    removeSecretsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new RequiredError('body', 'Required parameter "body" was null or undefined when calling removeSecrets().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/secret-svc/secrets`,
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
                body: SecretSvcRemoveSecretsRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response);
        });
    }
    /**
     * Remove secrets if authorized to do so
     * Remove Secrets
     */
    removeSecrets(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.removeSecretsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Save secrets if authorized to do so
     * Save Secrets
     */
    saveSecretsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['body'] == null) {
                throw new RequiredError('body', 'Required parameter "body" was null or undefined when calling saveSecrets().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/secret-svc/secrets`,
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: SecretSvcSaveSecretsRequestToJSON(requestParameters['body']),
            }, initOverrides);
            return new JSONApiResponse(response);
        });
    }
    /**
     * Save secrets if authorized to do so
     * Save Secrets
     */
    saveSecrets(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.saveSecretsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}

export { SecretSvcApi };
