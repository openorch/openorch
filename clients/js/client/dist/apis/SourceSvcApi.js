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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
import { SourceSvcCheckoutRepoRequestToJSON, SourceSvcCheckoutRepoResponseFromJSON, } from '../models/index';
/**
 *
 */
export class SourceSvcApi extends runtime.BaseAPI {
    /**
     * Checkout a git repository over https or ssh at a specific version into a temporary directory. Performs a shallow clone with minimal history for faster checkout.
     * Checkout a git repository
     */
    checkoutRepoRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling checkoutRepo().');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            if (this.configuration && this.configuration.apiKey) {
                headerParameters["Authorization"] = yield this.configuration.apiKey("Authorization"); // BearerAuth authentication
            }
            const response = yield this.request({
                path: `/source-svc/repo/checkout`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SourceSvcCheckoutRepoRequestToJSON(requestParameters['request']),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => SourceSvcCheckoutRepoResponseFromJSON(jsonValue));
        });
    }
    /**
     * Checkout a git repository over https or ssh at a specific version into a temporary directory. Performs a shallow clone with minimal history for faster checkout.
     * Checkout a git repository
     */
    checkoutRepo(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.checkoutRepoRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}