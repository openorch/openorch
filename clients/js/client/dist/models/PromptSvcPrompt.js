/* tslint:disable */
/* eslint-disable */
/**
 * Singulatron
 * Run and develop self-hosted AI apps. Your programmable in-house GPT. The Firebase for the AI age.
 *
 * The version of the OpenAPI document: 0.2
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PromptSvcPromptStatusFromJSON, PromptSvcPromptStatusToJSON, } from './PromptSvcPromptStatus';
/**
 * Check if a given object implements the PromptSvcPrompt interface.
 */
export function instanceOfPromptSvcPrompt(value) {
    if (!('prompt' in value) || value['prompt'] === undefined)
        return false;
    return true;
}
export function PromptSvcPromptFromJSON(json) {
    return PromptSvcPromptFromJSONTyped(json, false);
}
export function PromptSvcPromptFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'createdAt': json['createdAt'] == null ? undefined : json['createdAt'],
        'error': json['error'] == null ? undefined : json['error'],
        'id': json['id'] == null ? undefined : json['id'],
        'lastRun': json['lastRun'] == null ? undefined : json['lastRun'],
        'maxRetries': json['maxRetries'] == null ? undefined : json['maxRetries'],
        'modelId': json['modelId'] == null ? undefined : json['modelId'],
        'prompt': json['prompt'],
        'runCount': json['runCount'] == null ? undefined : json['runCount'],
        'status': json['status'] == null ? undefined : PromptSvcPromptStatusFromJSON(json['status']),
        'sync': json['sync'] == null ? undefined : json['sync'],
        'template': json['template'] == null ? undefined : json['template'],
        'threadId': json['threadId'] == null ? undefined : json['threadId'],
        'updatedAt': json['updatedAt'] == null ? undefined : json['updatedAt'],
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}
export function PromptSvcPromptToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'createdAt': value['createdAt'],
        'error': value['error'],
        'id': value['id'],
        'lastRun': value['lastRun'],
        'maxRetries': value['maxRetries'],
        'modelId': value['modelId'],
        'prompt': value['prompt'],
        'runCount': value['runCount'],
        'status': PromptSvcPromptStatusToJSON(value['status']),
        'sync': value['sync'],
        'template': value['template'],
        'threadId': value['threadId'],
        'updatedAt': value['updatedAt'],
        'userId': value['userId'],
    };
}