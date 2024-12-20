import { ModelSvcModelFromJSON, ModelSvcModelToJSON } from './ModelSvcModel.mjs';

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
 * Check if a given object implements the ModelSvcListResponse interface.
 */
function instanceOfModelSvcListResponse(value) {
    return true;
}
function ModelSvcListResponseFromJSON(json) {
    return ModelSvcListResponseFromJSONTyped(json);
}
function ModelSvcListResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'models': json['models'] == null ? undefined : (json['models'].map(ModelSvcModelFromJSON)),
    };
}
function ModelSvcListResponseToJSON(json) {
    return ModelSvcListResponseToJSONTyped(json, false);
}
function ModelSvcListResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'models': value['models'] == null ? undefined : (value['models'].map(ModelSvcModelToJSON)),
    };
}

export { ModelSvcListResponseFromJSON, ModelSvcListResponseFromJSONTyped, ModelSvcListResponseToJSON, ModelSvcListResponseToJSONTyped, instanceOfModelSvcListResponse };
