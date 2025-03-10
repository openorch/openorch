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
/**
 * Check if a given object implements the ModelSvcModel interface.
 */
export function instanceOfModelSvcModel(value) {
    return true;
}
export function ModelSvcModelFromJSON(json) {
    return ModelSvcModelFromJSONTyped(json, false);
}
export function ModelSvcModelFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'assets': json['assets'] == null ? undefined : json['assets'],
        'bits': json['bits'] == null ? undefined : json['bits'],
        'description': json['description'] == null ? undefined : json['description'],
        'extension': json['extension'] == null ? undefined : json['extension'],
        'flavour': json['flavour'] == null ? undefined : json['flavour'],
        'fullName': json['fullName'] == null ? undefined : json['fullName'],
        'id': json['id'] == null ? undefined : json['id'],
        'maxBits': json['maxBits'] == null ? undefined : json['maxBits'],
        'maxRam': json['maxRam'] == null ? undefined : json['maxRam'],
        'mirrors': json['mirrors'] == null ? undefined : json['mirrors'],
        'name': json['name'] == null ? undefined : json['name'],
        'parameters': json['parameters'] == null ? undefined : json['parameters'],
        'platformId': json['platformId'] == null ? undefined : json['platformId'],
        'promptTemplate': json['promptTemplate'] == null ? undefined : json['promptTemplate'],
        'quality': json['quality'] == null ? undefined : json['quality'],
        'quantComment': json['quantComment'] == null ? undefined : json['quantComment'],
        'size': json['size'] == null ? undefined : json['size'],
        'tags': json['tags'] == null ? undefined : json['tags'],
        'uncensored': json['uncensored'] == null ? undefined : json['uncensored'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}
export function ModelSvcModelToJSON(json) {
    return ModelSvcModelToJSONTyped(json, false);
}
export function ModelSvcModelToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'assets': value['assets'],
        'bits': value['bits'],
        'description': value['description'],
        'extension': value['extension'],
        'flavour': value['flavour'],
        'fullName': value['fullName'],
        'id': value['id'],
        'maxBits': value['maxBits'],
        'maxRam': value['maxRam'],
        'mirrors': value['mirrors'],
        'name': value['name'],
        'parameters': value['parameters'],
        'platformId': value['platformId'],
        'promptTemplate': value['promptTemplate'],
        'quality': value['quality'],
        'quantComment': value['quantComment'],
        'size': value['size'],
        'tags': value['tags'],
        'uncensored': value['uncensored'],
        'version': value['version'],
    };
}
