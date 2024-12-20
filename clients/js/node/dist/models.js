'use strict';

var chatSvcAddMessageRequest = require('./chatSvcAddMessageRequest.js');
var chatSvcAddThreadRequest = require('./chatSvcAddThreadRequest.js');
var chatSvcAddThreadResponse = require('./chatSvcAddThreadResponse.js');
var chatSvcAsset = require('./chatSvcAsset.js');
var chatSvcEventMessageAdded = require('./chatSvcEventMessageAdded.js');
var chatSvcEventThreadAdded = require('./chatSvcEventThreadAdded.js');
var chatSvcEventThreadUpdate = require('./chatSvcEventThreadUpdate.js');
var chatSvcGetMessagesResponse = require('./chatSvcGetMessagesResponse.js');
var chatSvcGetThreadResponse = require('./chatSvcGetThreadResponse.js');
var chatSvcGetThreadsResponse = require('./chatSvcGetThreadsResponse.js');
var chatSvcMessage = require('./chatSvcMessage.js');
var chatSvcThread = require('./chatSvcThread.js');
var chatSvcUpdateThreadRequest = require('./chatSvcUpdateThreadRequest.js');
var configSvcConfig = require('./configSvcConfig.js');
var configSvcGetConfigResponse = require('./configSvcGetConfigResponse.js');
var configSvcSaveConfigRequest = require('./configSvcSaveConfigRequest.js');
var datastoreFilter = require('./datastoreFilter.js');
var datastoreOp = require('./datastoreOp.js');
var datastoreOrderBy = require('./datastoreOrderBy.js');
var datastoreQuery = require('./datastoreQuery.js');
var deploySvcAutoScalingConfig = require('./deploySvcAutoScalingConfig.js');
var deploySvcDeleteDeploymentRequest = require('./deploySvcDeleteDeploymentRequest.js');
var deploySvcDeployment = require('./deploySvcDeployment.js');
var deploySvcDeploymentStatus = require('./deploySvcDeploymentStatus.js');
var deploySvcDeploymentStrategy = require('./deploySvcDeploymentStrategy.js');
var deploySvcErrorResponse = require('./deploySvcErrorResponse.js');
var deploySvcListDeploymentsResponse = require('./deploySvcListDeploymentsResponse.js');
var deploySvcResourceLimits = require('./deploySvcResourceLimits.js');
var deploySvcSaveDeploymentRequest = require('./deploySvcSaveDeploymentRequest.js');
var deploySvcStrategyType = require('./deploySvcStrategyType.js');
var deploySvcTargetRegion = require('./deploySvcTargetRegion.js');
var dockerSvcBuildImageRequest = require('./dockerSvcBuildImageRequest.js');
var dockerSvcContainerIsRunningResponse = require('./dockerSvcContainerIsRunningResponse.js');
var dockerSvcDockerInfo = require('./dockerSvcDockerInfo.js');
var dockerSvcErrorResponse = require('./dockerSvcErrorResponse.js');
var dockerSvcGetContainerSummaryResponse = require('./dockerSvcGetContainerSummaryResponse.js');
var dockerSvcGetDockerHostResponse = require('./dockerSvcGetDockerHostResponse.js');
var dockerSvcGetInfoResponse = require('./dockerSvcGetInfoResponse.js');
var dockerSvcRunContainerOptions = require('./dockerSvcRunContainerOptions.js');
var dockerSvcRunContainerRequest = require('./dockerSvcRunContainerRequest.js');
var dockerSvcRunContainerResponse = require('./dockerSvcRunContainerResponse.js');
var dockerSvcRunInfo = require('./dockerSvcRunInfo.js');
var dockerSvcStopContainerRequest = require('./dockerSvcStopContainerRequest.js');
var downloadSvcDownloadDetails = require('./downloadSvcDownloadDetails.js');
var downloadSvcDownloadRequest = require('./downloadSvcDownloadRequest.js');
var downloadSvcDownloadsResponse = require('./downloadSvcDownloadsResponse.js');
var downloadSvcErrorResponse = require('./downloadSvcErrorResponse.js');
var downloadSvcGetDownloadResponse = require('./downloadSvcGetDownloadResponse.js');
var dynamicSvcCreateObjectRequest = require('./dynamicSvcCreateObjectRequest.js');
var dynamicSvcCreateObjectResponse = require('./dynamicSvcCreateObjectResponse.js');
var dynamicSvcDeleteObjectRequest = require('./dynamicSvcDeleteObjectRequest.js');
var dynamicSvcErrorResponse = require('./dynamicSvcErrorResponse.js');
var dynamicSvcObject = require('./dynamicSvcObject.js');
var dynamicSvcObjectCreateFields = require('./dynamicSvcObjectCreateFields.js');
var dynamicSvcQueryRequest = require('./dynamicSvcQueryRequest.js');
var dynamicSvcQueryResponse = require('./dynamicSvcQueryResponse.js');
var dynamicSvcUpdateObjectRequest = require('./dynamicSvcUpdateObjectRequest.js');
var dynamicSvcUpsertObjectRequest = require('./dynamicSvcUpsertObjectRequest.js');
var dynamicSvcUpsertObjectResponse = require('./dynamicSvcUpsertObjectResponse.js');
var emailSvcErrorResponse = require('./emailSvcErrorResponse.js');
var emailSvcFile = require('./emailSvcFile.js');
var emailSvcSendEmailRequest = require('./emailSvcSendEmailRequest.js');
var emailSvcSendEmailResponse = require('./emailSvcSendEmailResponse.js');
var firehoseSvcErrorResponse = require('./firehoseSvcErrorResponse.js');
var firehoseSvcEvent = require('./firehoseSvcEvent.js');
var firehoseSvcEventPublishRequest = require('./firehoseSvcEventPublishRequest.js');
var modelSvcArchitectures = require('./modelSvcArchitectures.js');
var modelSvcContainer = require('./modelSvcContainer.js');
var modelSvcErrorResponse = require('./modelSvcErrorResponse.js');
var modelSvcGetModelResponse = require('./modelSvcGetModelResponse.js');
var modelSvcListResponse = require('./modelSvcListResponse.js');
var modelSvcModel = require('./modelSvcModel.js');
var modelSvcModelStatus = require('./modelSvcModelStatus.js');
var modelSvcPlatform = require('./modelSvcPlatform.js');
var modelSvcStatusResponse = require('./modelSvcStatusResponse.js');
var policySvcBlocklistParameters = require('./policySvcBlocklistParameters.js');
var policySvcCheckRequest = require('./policySvcCheckRequest.js');
var policySvcCheckResponse = require('./policySvcCheckResponse.js');
var policySvcEntity = require('./policySvcEntity.js');
var policySvcErrorResponse = require('./policySvcErrorResponse.js');
var policySvcInstance = require('./policySvcInstance.js');
var policySvcRateLimitParameters = require('./policySvcRateLimitParameters.js');
var policySvcScope = require('./policySvcScope.js');
var policySvcTemplateId = require('./policySvcTemplateId.js');
var policySvcUpsertInstanceRequest = require('./policySvcUpsertInstanceRequest.js');
var promptSvcAddPromptRequest = require('./promptSvcAddPromptRequest.js');
var promptSvcAddPromptResponse = require('./promptSvcAddPromptResponse.js');
var promptSvcErrorResponse = require('./promptSvcErrorResponse.js');
var promptSvcListPromptsRequest = require('./promptSvcListPromptsRequest.js');
var promptSvcListPromptsResponse = require('./promptSvcListPromptsResponse.js');
var promptSvcPrompt = require('./promptSvcPrompt.js');
var promptSvcPromptStatus = require('./promptSvcPromptStatus.js');
var promptSvcRemovePromptRequest = require('./promptSvcRemovePromptRequest.js');
var registrySvcAPISpec = require('./registrySvcAPISpec.js');
var registrySvcClient = require('./registrySvcClient.js');
var registrySvcDefinition = require('./registrySvcDefinition.js');
var registrySvcErrorResponse = require('./registrySvcErrorResponse.js');
var registrySvcGPU = require('./registrySvcGPU.js');
var registrySvcImageSpec = require('./registrySvcImageSpec.js');
var registrySvcInstance = require('./registrySvcInstance.js');
var registrySvcInstanceStatus = require('./registrySvcInstanceStatus.js');
var registrySvcLanguage = require('./registrySvcLanguage.js');
var registrySvcListDefinitionsResponse = require('./registrySvcListDefinitionsResponse.js');
var registrySvcListInstancesResponse = require('./registrySvcListInstancesResponse.js');
var registrySvcListNodesResponse = require('./registrySvcListNodesResponse.js');
var registrySvcNode = require('./registrySvcNode.js');
var registrySvcProcess = require('./registrySvcProcess.js');
var registrySvcRegisterInstanceRequest = require('./registrySvcRegisterInstanceRequest.js');
var registrySvcRepositorySpec = require('./registrySvcRepositorySpec.js');
var registrySvcResourceUsage = require('./registrySvcResourceUsage.js');
var registrySvcSaveDefinitionRequest = require('./registrySvcSaveDefinitionRequest.js');
var registrySvcUsage = require('./registrySvcUsage.js');
var secretSvcDecryptValueRequest = require('./secretSvcDecryptValueRequest.js');
var secretSvcDecryptValueResponse = require('./secretSvcDecryptValueResponse.js');
var secretSvcEncryptValueRequest = require('./secretSvcEncryptValueRequest.js');
var secretSvcEncryptValueResponse = require('./secretSvcEncryptValueResponse.js');
var secretSvcListSecretsRequest = require('./secretSvcListSecretsRequest.js');
var secretSvcListSecretsResponse = require('./secretSvcListSecretsResponse.js');
var secretSvcRemoveSecretsRequest = require('./secretSvcRemoveSecretsRequest.js');
var secretSvcSaveSecretsRequest = require('./secretSvcSaveSecretsRequest.js');
var secretSvcSecret = require('./secretSvcSecret.js');
var sourceSvcCheckoutRepoRequest = require('./sourceSvcCheckoutRepoRequest.js');
var sourceSvcCheckoutRepoResponse = require('./sourceSvcCheckoutRepoResponse.js');
var sourceSvcErrorResponse = require('./sourceSvcErrorResponse.js');
var userSvcAddUserToOrganizationRequest = require('./userSvcAddUserToOrganizationRequest.js');
var userSvcAuthToken = require('./userSvcAuthToken.js');
var userSvcChangePasswordAdminRequest = require('./userSvcChangePasswordAdminRequest.js');
var userSvcChangePasswordRequest = require('./userSvcChangePasswordRequest.js');
var userSvcContact = require('./userSvcContact.js');
var userSvcCreateOrganizationRequest = require('./userSvcCreateOrganizationRequest.js');
var userSvcCreateRoleRequest = require('./userSvcCreateRoleRequest.js');
var userSvcCreateRoleResponse = require('./userSvcCreateRoleResponse.js');
var userSvcCreateUserRequest = require('./userSvcCreateUserRequest.js');
var userSvcErrorResponse = require('./userSvcErrorResponse.js');
var userSvcGetPermissionsResponse = require('./userSvcGetPermissionsResponse.js');
var userSvcGetPublicKeyResponse = require('./userSvcGetPublicKeyResponse.js');
var userSvcGetRolesResponse = require('./userSvcGetRolesResponse.js');
var userSvcGetUsersRequest = require('./userSvcGetUsersRequest.js');
var userSvcGetUsersResponse = require('./userSvcGetUsersResponse.js');
var userSvcIsAuthorizedRequest = require('./userSvcIsAuthorizedRequest.js');
var userSvcIsAuthorizedResponse = require('./userSvcIsAuthorizedResponse.js');
var userSvcLoginRequest = require('./userSvcLoginRequest.js');
var userSvcLoginResponse = require('./userSvcLoginResponse.js');
var userSvcOrganization = require('./userSvcOrganization.js');
var userSvcPermission = require('./userSvcPermission.js');
var userSvcReadUserByTokenResponse = require('./userSvcReadUserByTokenResponse.js');
var userSvcRegisterRequest = require('./userSvcRegisterRequest.js');
var userSvcRegisterResponse = require('./userSvcRegisterResponse.js');
var userSvcRole = require('./userSvcRole.js');
var userSvcSaveProfileRequest = require('./userSvcSaveProfileRequest.js');
var userSvcSetRolePermissionsRequest = require('./userSvcSetRolePermissionsRequest.js');
var userSvcUpserPermissionRequest = require('./userSvcUpserPermissionRequest.js');
var userSvcUser = require('./userSvcUser.js');

/* tslint:disable:no-unused-variable */
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
let enumsMap = {
    "DatastoreOp": datastoreOp.DatastoreOp,
    "DeploySvcDeploymentStatus": deploySvcDeploymentStatus.DeploySvcDeploymentStatus,
    "DeploySvcStrategyType": deploySvcStrategyType.DeploySvcStrategyType,
    "PolicySvcEntity": policySvcEntity.PolicySvcEntity,
    "PolicySvcScope": policySvcScope.PolicySvcScope,
    "PolicySvcTemplateId": policySvcTemplateId.PolicySvcTemplateId,
    "PromptSvcPromptStatus": promptSvcPromptStatus.PromptSvcPromptStatus,
    "RegistrySvcInstanceStatus": registrySvcInstanceStatus.RegistrySvcInstanceStatus,
    "RegistrySvcLanguage": registrySvcLanguage.RegistrySvcLanguage,
};
let typeMap = {
    "ChatSvcAddMessageRequest": chatSvcAddMessageRequest.ChatSvcAddMessageRequest,
    "ChatSvcAddThreadRequest": chatSvcAddThreadRequest.ChatSvcAddThreadRequest,
    "ChatSvcAddThreadResponse": chatSvcAddThreadResponse.ChatSvcAddThreadResponse,
    "ChatSvcAsset": chatSvcAsset.ChatSvcAsset,
    "ChatSvcEventMessageAdded": chatSvcEventMessageAdded.ChatSvcEventMessageAdded,
    "ChatSvcEventThreadAdded": chatSvcEventThreadAdded.ChatSvcEventThreadAdded,
    "ChatSvcEventThreadUpdate": chatSvcEventThreadUpdate.ChatSvcEventThreadUpdate,
    "ChatSvcGetMessagesResponse": chatSvcGetMessagesResponse.ChatSvcGetMessagesResponse,
    "ChatSvcGetThreadResponse": chatSvcGetThreadResponse.ChatSvcGetThreadResponse,
    "ChatSvcGetThreadsResponse": chatSvcGetThreadsResponse.ChatSvcGetThreadsResponse,
    "ChatSvcMessage": chatSvcMessage.ChatSvcMessage,
    "ChatSvcThread": chatSvcThread.ChatSvcThread,
    "ChatSvcUpdateThreadRequest": chatSvcUpdateThreadRequest.ChatSvcUpdateThreadRequest,
    "ConfigSvcConfig": configSvcConfig.ConfigSvcConfig,
    "ConfigSvcGetConfigResponse": configSvcGetConfigResponse.ConfigSvcGetConfigResponse,
    "ConfigSvcSaveConfigRequest": configSvcSaveConfigRequest.ConfigSvcSaveConfigRequest,
    "DatastoreFilter": datastoreFilter.DatastoreFilter,
    "DatastoreOrderBy": datastoreOrderBy.DatastoreOrderBy,
    "DatastoreQuery": datastoreQuery.DatastoreQuery,
    "DeploySvcAutoScalingConfig": deploySvcAutoScalingConfig.DeploySvcAutoScalingConfig,
    "DeploySvcDeleteDeploymentRequest": deploySvcDeleteDeploymentRequest.DeploySvcDeleteDeploymentRequest,
    "DeploySvcDeployment": deploySvcDeployment.DeploySvcDeployment,
    "DeploySvcDeploymentStrategy": deploySvcDeploymentStrategy.DeploySvcDeploymentStrategy,
    "DeploySvcErrorResponse": deploySvcErrorResponse.DeploySvcErrorResponse,
    "DeploySvcListDeploymentsResponse": deploySvcListDeploymentsResponse.DeploySvcListDeploymentsResponse,
    "DeploySvcResourceLimits": deploySvcResourceLimits.DeploySvcResourceLimits,
    "DeploySvcSaveDeploymentRequest": deploySvcSaveDeploymentRequest.DeploySvcSaveDeploymentRequest,
    "DeploySvcTargetRegion": deploySvcTargetRegion.DeploySvcTargetRegion,
    "DockerSvcBuildImageRequest": dockerSvcBuildImageRequest.DockerSvcBuildImageRequest,
    "DockerSvcContainerIsRunningResponse": dockerSvcContainerIsRunningResponse.DockerSvcContainerIsRunningResponse,
    "DockerSvcDockerInfo": dockerSvcDockerInfo.DockerSvcDockerInfo,
    "DockerSvcErrorResponse": dockerSvcErrorResponse.DockerSvcErrorResponse,
    "DockerSvcGetContainerSummaryResponse": dockerSvcGetContainerSummaryResponse.DockerSvcGetContainerSummaryResponse,
    "DockerSvcGetDockerHostResponse": dockerSvcGetDockerHostResponse.DockerSvcGetDockerHostResponse,
    "DockerSvcGetInfoResponse": dockerSvcGetInfoResponse.DockerSvcGetInfoResponse,
    "DockerSvcRunContainerOptions": dockerSvcRunContainerOptions.DockerSvcRunContainerOptions,
    "DockerSvcRunContainerRequest": dockerSvcRunContainerRequest.DockerSvcRunContainerRequest,
    "DockerSvcRunContainerResponse": dockerSvcRunContainerResponse.DockerSvcRunContainerResponse,
    "DockerSvcRunInfo": dockerSvcRunInfo.DockerSvcRunInfo,
    "DockerSvcStopContainerRequest": dockerSvcStopContainerRequest.DockerSvcStopContainerRequest,
    "DownloadSvcDownloadDetails": downloadSvcDownloadDetails.DownloadSvcDownloadDetails,
    "DownloadSvcDownloadRequest": downloadSvcDownloadRequest.DownloadSvcDownloadRequest,
    "DownloadSvcDownloadsResponse": downloadSvcDownloadsResponse.DownloadSvcDownloadsResponse,
    "DownloadSvcErrorResponse": downloadSvcErrorResponse.DownloadSvcErrorResponse,
    "DownloadSvcGetDownloadResponse": downloadSvcGetDownloadResponse.DownloadSvcGetDownloadResponse,
    "DynamicSvcCreateObjectRequest": dynamicSvcCreateObjectRequest.DynamicSvcCreateObjectRequest,
    "DynamicSvcCreateObjectResponse": dynamicSvcCreateObjectResponse.DynamicSvcCreateObjectResponse,
    "DynamicSvcDeleteObjectRequest": dynamicSvcDeleteObjectRequest.DynamicSvcDeleteObjectRequest,
    "DynamicSvcErrorResponse": dynamicSvcErrorResponse.DynamicSvcErrorResponse,
    "DynamicSvcObject": dynamicSvcObject.DynamicSvcObject,
    "DynamicSvcObjectCreateFields": dynamicSvcObjectCreateFields.DynamicSvcObjectCreateFields,
    "DynamicSvcQueryRequest": dynamicSvcQueryRequest.DynamicSvcQueryRequest,
    "DynamicSvcQueryResponse": dynamicSvcQueryResponse.DynamicSvcQueryResponse,
    "DynamicSvcUpdateObjectRequest": dynamicSvcUpdateObjectRequest.DynamicSvcUpdateObjectRequest,
    "DynamicSvcUpsertObjectRequest": dynamicSvcUpsertObjectRequest.DynamicSvcUpsertObjectRequest,
    "DynamicSvcUpsertObjectResponse": dynamicSvcUpsertObjectResponse.DynamicSvcUpsertObjectResponse,
    "EmailSvcErrorResponse": emailSvcErrorResponse.EmailSvcErrorResponse,
    "EmailSvcFile": emailSvcFile.EmailSvcFile,
    "EmailSvcSendEmailRequest": emailSvcSendEmailRequest.EmailSvcSendEmailRequest,
    "EmailSvcSendEmailResponse": emailSvcSendEmailResponse.EmailSvcSendEmailResponse,
    "FirehoseSvcErrorResponse": firehoseSvcErrorResponse.FirehoseSvcErrorResponse,
    "FirehoseSvcEvent": firehoseSvcEvent.FirehoseSvcEvent,
    "FirehoseSvcEventPublishRequest": firehoseSvcEventPublishRequest.FirehoseSvcEventPublishRequest,
    "ModelSvcArchitectures": modelSvcArchitectures.ModelSvcArchitectures,
    "ModelSvcContainer": modelSvcContainer.ModelSvcContainer,
    "ModelSvcErrorResponse": modelSvcErrorResponse.ModelSvcErrorResponse,
    "ModelSvcGetModelResponse": modelSvcGetModelResponse.ModelSvcGetModelResponse,
    "ModelSvcListResponse": modelSvcListResponse.ModelSvcListResponse,
    "ModelSvcModel": modelSvcModel.ModelSvcModel,
    "ModelSvcModelStatus": modelSvcModelStatus.ModelSvcModelStatus,
    "ModelSvcPlatform": modelSvcPlatform.ModelSvcPlatform,
    "ModelSvcStatusResponse": modelSvcStatusResponse.ModelSvcStatusResponse,
    "PolicySvcBlocklistParameters": policySvcBlocklistParameters.PolicySvcBlocklistParameters,
    "PolicySvcCheckRequest": policySvcCheckRequest.PolicySvcCheckRequest,
    "PolicySvcCheckResponse": policySvcCheckResponse.PolicySvcCheckResponse,
    "PolicySvcErrorResponse": policySvcErrorResponse.PolicySvcErrorResponse,
    "PolicySvcInstance": policySvcInstance.PolicySvcInstance,
    "PolicySvcRateLimitParameters": policySvcRateLimitParameters.PolicySvcRateLimitParameters,
    "PolicySvcUpsertInstanceRequest": policySvcUpsertInstanceRequest.PolicySvcUpsertInstanceRequest,
    "PromptSvcAddPromptRequest": promptSvcAddPromptRequest.PromptSvcAddPromptRequest,
    "PromptSvcAddPromptResponse": promptSvcAddPromptResponse.PromptSvcAddPromptResponse,
    "PromptSvcErrorResponse": promptSvcErrorResponse.PromptSvcErrorResponse,
    "PromptSvcListPromptsRequest": promptSvcListPromptsRequest.PromptSvcListPromptsRequest,
    "PromptSvcListPromptsResponse": promptSvcListPromptsResponse.PromptSvcListPromptsResponse,
    "PromptSvcPrompt": promptSvcPrompt.PromptSvcPrompt,
    "PromptSvcRemovePromptRequest": promptSvcRemovePromptRequest.PromptSvcRemovePromptRequest,
    "RegistrySvcAPISpec": registrySvcAPISpec.RegistrySvcAPISpec,
    "RegistrySvcClient": registrySvcClient.RegistrySvcClient,
    "RegistrySvcDefinition": registrySvcDefinition.RegistrySvcDefinition,
    "RegistrySvcErrorResponse": registrySvcErrorResponse.RegistrySvcErrorResponse,
    "RegistrySvcGPU": registrySvcGPU.RegistrySvcGPU,
    "RegistrySvcImageSpec": registrySvcImageSpec.RegistrySvcImageSpec,
    "RegistrySvcInstance": registrySvcInstance.RegistrySvcInstance,
    "RegistrySvcListDefinitionsResponse": registrySvcListDefinitionsResponse.RegistrySvcListDefinitionsResponse,
    "RegistrySvcListInstancesResponse": registrySvcListInstancesResponse.RegistrySvcListInstancesResponse,
    "RegistrySvcListNodesResponse": registrySvcListNodesResponse.RegistrySvcListNodesResponse,
    "RegistrySvcNode": registrySvcNode.RegistrySvcNode,
    "RegistrySvcProcess": registrySvcProcess.RegistrySvcProcess,
    "RegistrySvcRegisterInstanceRequest": registrySvcRegisterInstanceRequest.RegistrySvcRegisterInstanceRequest,
    "RegistrySvcRepositorySpec": registrySvcRepositorySpec.RegistrySvcRepositorySpec,
    "RegistrySvcResourceUsage": registrySvcResourceUsage.RegistrySvcResourceUsage,
    "RegistrySvcSaveDefinitionRequest": registrySvcSaveDefinitionRequest.RegistrySvcSaveDefinitionRequest,
    "RegistrySvcUsage": registrySvcUsage.RegistrySvcUsage,
    "SecretSvcDecryptValueRequest": secretSvcDecryptValueRequest.SecretSvcDecryptValueRequest,
    "SecretSvcDecryptValueResponse": secretSvcDecryptValueResponse.SecretSvcDecryptValueResponse,
    "SecretSvcEncryptValueRequest": secretSvcEncryptValueRequest.SecretSvcEncryptValueRequest,
    "SecretSvcEncryptValueResponse": secretSvcEncryptValueResponse.SecretSvcEncryptValueResponse,
    "SecretSvcListSecretsRequest": secretSvcListSecretsRequest.SecretSvcListSecretsRequest,
    "SecretSvcListSecretsResponse": secretSvcListSecretsResponse.SecretSvcListSecretsResponse,
    "SecretSvcRemoveSecretsRequest": secretSvcRemoveSecretsRequest.SecretSvcRemoveSecretsRequest,
    "SecretSvcSaveSecretsRequest": secretSvcSaveSecretsRequest.SecretSvcSaveSecretsRequest,
    "SecretSvcSecret": secretSvcSecret.SecretSvcSecret,
    "SourceSvcCheckoutRepoRequest": sourceSvcCheckoutRepoRequest.SourceSvcCheckoutRepoRequest,
    "SourceSvcCheckoutRepoResponse": sourceSvcCheckoutRepoResponse.SourceSvcCheckoutRepoResponse,
    "SourceSvcErrorResponse": sourceSvcErrorResponse.SourceSvcErrorResponse,
    "UserSvcAddUserToOrganizationRequest": userSvcAddUserToOrganizationRequest.UserSvcAddUserToOrganizationRequest,
    "UserSvcAuthToken": userSvcAuthToken.UserSvcAuthToken,
    "UserSvcChangePasswordAdminRequest": userSvcChangePasswordAdminRequest.UserSvcChangePasswordAdminRequest,
    "UserSvcChangePasswordRequest": userSvcChangePasswordRequest.UserSvcChangePasswordRequest,
    "UserSvcContact": userSvcContact.UserSvcContact,
    "UserSvcCreateOrganizationRequest": userSvcCreateOrganizationRequest.UserSvcCreateOrganizationRequest,
    "UserSvcCreateRoleRequest": userSvcCreateRoleRequest.UserSvcCreateRoleRequest,
    "UserSvcCreateRoleResponse": userSvcCreateRoleResponse.UserSvcCreateRoleResponse,
    "UserSvcCreateUserRequest": userSvcCreateUserRequest.UserSvcCreateUserRequest,
    "UserSvcErrorResponse": userSvcErrorResponse.UserSvcErrorResponse,
    "UserSvcGetPermissionsResponse": userSvcGetPermissionsResponse.UserSvcGetPermissionsResponse,
    "UserSvcGetPublicKeyResponse": userSvcGetPublicKeyResponse.UserSvcGetPublicKeyResponse,
    "UserSvcGetRolesResponse": userSvcGetRolesResponse.UserSvcGetRolesResponse,
    "UserSvcGetUsersRequest": userSvcGetUsersRequest.UserSvcGetUsersRequest,
    "UserSvcGetUsersResponse": userSvcGetUsersResponse.UserSvcGetUsersResponse,
    "UserSvcIsAuthorizedRequest": userSvcIsAuthorizedRequest.UserSvcIsAuthorizedRequest,
    "UserSvcIsAuthorizedResponse": userSvcIsAuthorizedResponse.UserSvcIsAuthorizedResponse,
    "UserSvcLoginRequest": userSvcLoginRequest.UserSvcLoginRequest,
    "UserSvcLoginResponse": userSvcLoginResponse.UserSvcLoginResponse,
    "UserSvcOrganization": userSvcOrganization.UserSvcOrganization,
    "UserSvcPermission": userSvcPermission.UserSvcPermission,
    "UserSvcReadUserByTokenResponse": userSvcReadUserByTokenResponse.UserSvcReadUserByTokenResponse,
    "UserSvcRegisterRequest": userSvcRegisterRequest.UserSvcRegisterRequest,
    "UserSvcRegisterResponse": userSvcRegisterResponse.UserSvcRegisterResponse,
    "UserSvcRole": userSvcRole.UserSvcRole,
    "UserSvcSaveProfileRequest": userSvcSaveProfileRequest.UserSvcSaveProfileRequest,
    "UserSvcSetRolePermissionsRequest": userSvcSetRolePermissionsRequest.UserSvcSetRolePermissionsRequest,
    "UserSvcUpserPermissionRequest": userSvcUpserPermissionRequest.UserSvcUpserPermissionRequest,
    "UserSvcUser": userSvcUser.UserSvcUser,
};
// Check if a string starts with another string without using es6 features
function startsWith(str, match) {
    return str.substring(0, match.length) === match;
}
// Check if a string ends with another string without using es6 features
function endsWith(str, match) {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}
const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }
    static serialize(data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }
    static deserialize(data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            let subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            let subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            let subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            let subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}
class HttpBasicAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    }
}
class HttpBearerAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}
class ApiKeyAuth {
    constructor(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    applyToRequest(requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}
class OAuth {
    constructor() {
        this.accessToken = '';
    }
    applyToRequest(requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}
class VoidAuth {
    constructor() {
        this.username = '';
        this.password = '';
    }
    applyToRequest(_) {
        // Do nothing
    }
}

exports.ChatSvcAddMessageRequest = chatSvcAddMessageRequest.ChatSvcAddMessageRequest;
exports.ChatSvcAddThreadRequest = chatSvcAddThreadRequest.ChatSvcAddThreadRequest;
exports.ChatSvcAddThreadResponse = chatSvcAddThreadResponse.ChatSvcAddThreadResponse;
exports.ChatSvcAsset = chatSvcAsset.ChatSvcAsset;
exports.ChatSvcEventMessageAdded = chatSvcEventMessageAdded.ChatSvcEventMessageAdded;
exports.ChatSvcEventThreadAdded = chatSvcEventThreadAdded.ChatSvcEventThreadAdded;
exports.ChatSvcEventThreadUpdate = chatSvcEventThreadUpdate.ChatSvcEventThreadUpdate;
exports.ChatSvcGetMessagesResponse = chatSvcGetMessagesResponse.ChatSvcGetMessagesResponse;
exports.ChatSvcGetThreadResponse = chatSvcGetThreadResponse.ChatSvcGetThreadResponse;
exports.ChatSvcGetThreadsResponse = chatSvcGetThreadsResponse.ChatSvcGetThreadsResponse;
exports.ChatSvcMessage = chatSvcMessage.ChatSvcMessage;
exports.ChatSvcThread = chatSvcThread.ChatSvcThread;
exports.ChatSvcUpdateThreadRequest = chatSvcUpdateThreadRequest.ChatSvcUpdateThreadRequest;
exports.ConfigSvcConfig = configSvcConfig.ConfigSvcConfig;
exports.ConfigSvcGetConfigResponse = configSvcGetConfigResponse.ConfigSvcGetConfigResponse;
exports.ConfigSvcSaveConfigRequest = configSvcSaveConfigRequest.ConfigSvcSaveConfigRequest;
exports.DatastoreFilter = datastoreFilter.DatastoreFilter;
Object.defineProperty(exports, 'DatastoreOp', {
    enumerable: true,
    get: function () { return datastoreOp.DatastoreOp; }
});
exports.DatastoreOrderBy = datastoreOrderBy.DatastoreOrderBy;
exports.DatastoreQuery = datastoreQuery.DatastoreQuery;
exports.DeploySvcAutoScalingConfig = deploySvcAutoScalingConfig.DeploySvcAutoScalingConfig;
exports.DeploySvcDeleteDeploymentRequest = deploySvcDeleteDeploymentRequest.DeploySvcDeleteDeploymentRequest;
exports.DeploySvcDeployment = deploySvcDeployment.DeploySvcDeployment;
Object.defineProperty(exports, 'DeploySvcDeploymentStatus', {
    enumerable: true,
    get: function () { return deploySvcDeploymentStatus.DeploySvcDeploymentStatus; }
});
exports.DeploySvcDeploymentStrategy = deploySvcDeploymentStrategy.DeploySvcDeploymentStrategy;
exports.DeploySvcErrorResponse = deploySvcErrorResponse.DeploySvcErrorResponse;
exports.DeploySvcListDeploymentsResponse = deploySvcListDeploymentsResponse.DeploySvcListDeploymentsResponse;
exports.DeploySvcResourceLimits = deploySvcResourceLimits.DeploySvcResourceLimits;
exports.DeploySvcSaveDeploymentRequest = deploySvcSaveDeploymentRequest.DeploySvcSaveDeploymentRequest;
Object.defineProperty(exports, 'DeploySvcStrategyType', {
    enumerable: true,
    get: function () { return deploySvcStrategyType.DeploySvcStrategyType; }
});
exports.DeploySvcTargetRegion = deploySvcTargetRegion.DeploySvcTargetRegion;
exports.DockerSvcBuildImageRequest = dockerSvcBuildImageRequest.DockerSvcBuildImageRequest;
exports.DockerSvcContainerIsRunningResponse = dockerSvcContainerIsRunningResponse.DockerSvcContainerIsRunningResponse;
exports.DockerSvcDockerInfo = dockerSvcDockerInfo.DockerSvcDockerInfo;
exports.DockerSvcErrorResponse = dockerSvcErrorResponse.DockerSvcErrorResponse;
exports.DockerSvcGetContainerSummaryResponse = dockerSvcGetContainerSummaryResponse.DockerSvcGetContainerSummaryResponse;
exports.DockerSvcGetDockerHostResponse = dockerSvcGetDockerHostResponse.DockerSvcGetDockerHostResponse;
exports.DockerSvcGetInfoResponse = dockerSvcGetInfoResponse.DockerSvcGetInfoResponse;
exports.DockerSvcRunContainerOptions = dockerSvcRunContainerOptions.DockerSvcRunContainerOptions;
exports.DockerSvcRunContainerRequest = dockerSvcRunContainerRequest.DockerSvcRunContainerRequest;
exports.DockerSvcRunContainerResponse = dockerSvcRunContainerResponse.DockerSvcRunContainerResponse;
exports.DockerSvcRunInfo = dockerSvcRunInfo.DockerSvcRunInfo;
exports.DockerSvcStopContainerRequest = dockerSvcStopContainerRequest.DockerSvcStopContainerRequest;
exports.DownloadSvcDownloadDetails = downloadSvcDownloadDetails.DownloadSvcDownloadDetails;
exports.DownloadSvcDownloadRequest = downloadSvcDownloadRequest.DownloadSvcDownloadRequest;
exports.DownloadSvcDownloadsResponse = downloadSvcDownloadsResponse.DownloadSvcDownloadsResponse;
exports.DownloadSvcErrorResponse = downloadSvcErrorResponse.DownloadSvcErrorResponse;
exports.DownloadSvcGetDownloadResponse = downloadSvcGetDownloadResponse.DownloadSvcGetDownloadResponse;
exports.DynamicSvcCreateObjectRequest = dynamicSvcCreateObjectRequest.DynamicSvcCreateObjectRequest;
exports.DynamicSvcCreateObjectResponse = dynamicSvcCreateObjectResponse.DynamicSvcCreateObjectResponse;
exports.DynamicSvcDeleteObjectRequest = dynamicSvcDeleteObjectRequest.DynamicSvcDeleteObjectRequest;
exports.DynamicSvcErrorResponse = dynamicSvcErrorResponse.DynamicSvcErrorResponse;
exports.DynamicSvcObject = dynamicSvcObject.DynamicSvcObject;
exports.DynamicSvcObjectCreateFields = dynamicSvcObjectCreateFields.DynamicSvcObjectCreateFields;
exports.DynamicSvcQueryRequest = dynamicSvcQueryRequest.DynamicSvcQueryRequest;
exports.DynamicSvcQueryResponse = dynamicSvcQueryResponse.DynamicSvcQueryResponse;
exports.DynamicSvcUpdateObjectRequest = dynamicSvcUpdateObjectRequest.DynamicSvcUpdateObjectRequest;
exports.DynamicSvcUpsertObjectRequest = dynamicSvcUpsertObjectRequest.DynamicSvcUpsertObjectRequest;
exports.DynamicSvcUpsertObjectResponse = dynamicSvcUpsertObjectResponse.DynamicSvcUpsertObjectResponse;
exports.EmailSvcErrorResponse = emailSvcErrorResponse.EmailSvcErrorResponse;
exports.EmailSvcFile = emailSvcFile.EmailSvcFile;
exports.EmailSvcSendEmailRequest = emailSvcSendEmailRequest.EmailSvcSendEmailRequest;
exports.EmailSvcSendEmailResponse = emailSvcSendEmailResponse.EmailSvcSendEmailResponse;
exports.FirehoseSvcErrorResponse = firehoseSvcErrorResponse.FirehoseSvcErrorResponse;
exports.FirehoseSvcEvent = firehoseSvcEvent.FirehoseSvcEvent;
exports.FirehoseSvcEventPublishRequest = firehoseSvcEventPublishRequest.FirehoseSvcEventPublishRequest;
exports.ModelSvcArchitectures = modelSvcArchitectures.ModelSvcArchitectures;
exports.ModelSvcContainer = modelSvcContainer.ModelSvcContainer;
exports.ModelSvcErrorResponse = modelSvcErrorResponse.ModelSvcErrorResponse;
exports.ModelSvcGetModelResponse = modelSvcGetModelResponse.ModelSvcGetModelResponse;
exports.ModelSvcListResponse = modelSvcListResponse.ModelSvcListResponse;
exports.ModelSvcModel = modelSvcModel.ModelSvcModel;
exports.ModelSvcModelStatus = modelSvcModelStatus.ModelSvcModelStatus;
exports.ModelSvcPlatform = modelSvcPlatform.ModelSvcPlatform;
exports.ModelSvcStatusResponse = modelSvcStatusResponse.ModelSvcStatusResponse;
exports.PolicySvcBlocklistParameters = policySvcBlocklistParameters.PolicySvcBlocklistParameters;
exports.PolicySvcCheckRequest = policySvcCheckRequest.PolicySvcCheckRequest;
exports.PolicySvcCheckResponse = policySvcCheckResponse.PolicySvcCheckResponse;
Object.defineProperty(exports, 'PolicySvcEntity', {
    enumerable: true,
    get: function () { return policySvcEntity.PolicySvcEntity; }
});
exports.PolicySvcErrorResponse = policySvcErrorResponse.PolicySvcErrorResponse;
exports.PolicySvcInstance = policySvcInstance.PolicySvcInstance;
exports.PolicySvcRateLimitParameters = policySvcRateLimitParameters.PolicySvcRateLimitParameters;
Object.defineProperty(exports, 'PolicySvcScope', {
    enumerable: true,
    get: function () { return policySvcScope.PolicySvcScope; }
});
Object.defineProperty(exports, 'PolicySvcTemplateId', {
    enumerable: true,
    get: function () { return policySvcTemplateId.PolicySvcTemplateId; }
});
exports.PolicySvcUpsertInstanceRequest = policySvcUpsertInstanceRequest.PolicySvcUpsertInstanceRequest;
exports.PromptSvcAddPromptRequest = promptSvcAddPromptRequest.PromptSvcAddPromptRequest;
exports.PromptSvcAddPromptResponse = promptSvcAddPromptResponse.PromptSvcAddPromptResponse;
exports.PromptSvcErrorResponse = promptSvcErrorResponse.PromptSvcErrorResponse;
exports.PromptSvcListPromptsRequest = promptSvcListPromptsRequest.PromptSvcListPromptsRequest;
exports.PromptSvcListPromptsResponse = promptSvcListPromptsResponse.PromptSvcListPromptsResponse;
exports.PromptSvcPrompt = promptSvcPrompt.PromptSvcPrompt;
Object.defineProperty(exports, 'PromptSvcPromptStatus', {
    enumerable: true,
    get: function () { return promptSvcPromptStatus.PromptSvcPromptStatus; }
});
exports.PromptSvcRemovePromptRequest = promptSvcRemovePromptRequest.PromptSvcRemovePromptRequest;
exports.RegistrySvcAPISpec = registrySvcAPISpec.RegistrySvcAPISpec;
exports.RegistrySvcClient = registrySvcClient.RegistrySvcClient;
exports.RegistrySvcDefinition = registrySvcDefinition.RegistrySvcDefinition;
exports.RegistrySvcErrorResponse = registrySvcErrorResponse.RegistrySvcErrorResponse;
exports.RegistrySvcGPU = registrySvcGPU.RegistrySvcGPU;
exports.RegistrySvcImageSpec = registrySvcImageSpec.RegistrySvcImageSpec;
exports.RegistrySvcInstance = registrySvcInstance.RegistrySvcInstance;
Object.defineProperty(exports, 'RegistrySvcInstanceStatus', {
    enumerable: true,
    get: function () { return registrySvcInstanceStatus.RegistrySvcInstanceStatus; }
});
Object.defineProperty(exports, 'RegistrySvcLanguage', {
    enumerable: true,
    get: function () { return registrySvcLanguage.RegistrySvcLanguage; }
});
exports.RegistrySvcListDefinitionsResponse = registrySvcListDefinitionsResponse.RegistrySvcListDefinitionsResponse;
exports.RegistrySvcListInstancesResponse = registrySvcListInstancesResponse.RegistrySvcListInstancesResponse;
exports.RegistrySvcListNodesResponse = registrySvcListNodesResponse.RegistrySvcListNodesResponse;
exports.RegistrySvcNode = registrySvcNode.RegistrySvcNode;
exports.RegistrySvcProcess = registrySvcProcess.RegistrySvcProcess;
exports.RegistrySvcRegisterInstanceRequest = registrySvcRegisterInstanceRequest.RegistrySvcRegisterInstanceRequest;
exports.RegistrySvcRepositorySpec = registrySvcRepositorySpec.RegistrySvcRepositorySpec;
exports.RegistrySvcResourceUsage = registrySvcResourceUsage.RegistrySvcResourceUsage;
exports.RegistrySvcSaveDefinitionRequest = registrySvcSaveDefinitionRequest.RegistrySvcSaveDefinitionRequest;
exports.RegistrySvcUsage = registrySvcUsage.RegistrySvcUsage;
exports.SecretSvcDecryptValueRequest = secretSvcDecryptValueRequest.SecretSvcDecryptValueRequest;
exports.SecretSvcDecryptValueResponse = secretSvcDecryptValueResponse.SecretSvcDecryptValueResponse;
exports.SecretSvcEncryptValueRequest = secretSvcEncryptValueRequest.SecretSvcEncryptValueRequest;
exports.SecretSvcEncryptValueResponse = secretSvcEncryptValueResponse.SecretSvcEncryptValueResponse;
exports.SecretSvcListSecretsRequest = secretSvcListSecretsRequest.SecretSvcListSecretsRequest;
exports.SecretSvcListSecretsResponse = secretSvcListSecretsResponse.SecretSvcListSecretsResponse;
exports.SecretSvcRemoveSecretsRequest = secretSvcRemoveSecretsRequest.SecretSvcRemoveSecretsRequest;
exports.SecretSvcSaveSecretsRequest = secretSvcSaveSecretsRequest.SecretSvcSaveSecretsRequest;
exports.SecretSvcSecret = secretSvcSecret.SecretSvcSecret;
exports.SourceSvcCheckoutRepoRequest = sourceSvcCheckoutRepoRequest.SourceSvcCheckoutRepoRequest;
exports.SourceSvcCheckoutRepoResponse = sourceSvcCheckoutRepoResponse.SourceSvcCheckoutRepoResponse;
exports.SourceSvcErrorResponse = sourceSvcErrorResponse.SourceSvcErrorResponse;
exports.UserSvcAddUserToOrganizationRequest = userSvcAddUserToOrganizationRequest.UserSvcAddUserToOrganizationRequest;
exports.UserSvcAuthToken = userSvcAuthToken.UserSvcAuthToken;
exports.UserSvcChangePasswordAdminRequest = userSvcChangePasswordAdminRequest.UserSvcChangePasswordAdminRequest;
exports.UserSvcChangePasswordRequest = userSvcChangePasswordRequest.UserSvcChangePasswordRequest;
exports.UserSvcContact = userSvcContact.UserSvcContact;
exports.UserSvcCreateOrganizationRequest = userSvcCreateOrganizationRequest.UserSvcCreateOrganizationRequest;
exports.UserSvcCreateRoleRequest = userSvcCreateRoleRequest.UserSvcCreateRoleRequest;
exports.UserSvcCreateRoleResponse = userSvcCreateRoleResponse.UserSvcCreateRoleResponse;
exports.UserSvcCreateUserRequest = userSvcCreateUserRequest.UserSvcCreateUserRequest;
exports.UserSvcErrorResponse = userSvcErrorResponse.UserSvcErrorResponse;
exports.UserSvcGetPermissionsResponse = userSvcGetPermissionsResponse.UserSvcGetPermissionsResponse;
exports.UserSvcGetPublicKeyResponse = userSvcGetPublicKeyResponse.UserSvcGetPublicKeyResponse;
exports.UserSvcGetRolesResponse = userSvcGetRolesResponse.UserSvcGetRolesResponse;
exports.UserSvcGetUsersRequest = userSvcGetUsersRequest.UserSvcGetUsersRequest;
exports.UserSvcGetUsersResponse = userSvcGetUsersResponse.UserSvcGetUsersResponse;
exports.UserSvcIsAuthorizedRequest = userSvcIsAuthorizedRequest.UserSvcIsAuthorizedRequest;
exports.UserSvcIsAuthorizedResponse = userSvcIsAuthorizedResponse.UserSvcIsAuthorizedResponse;
exports.UserSvcLoginRequest = userSvcLoginRequest.UserSvcLoginRequest;
exports.UserSvcLoginResponse = userSvcLoginResponse.UserSvcLoginResponse;
exports.UserSvcOrganization = userSvcOrganization.UserSvcOrganization;
exports.UserSvcPermission = userSvcPermission.UserSvcPermission;
exports.UserSvcReadUserByTokenResponse = userSvcReadUserByTokenResponse.UserSvcReadUserByTokenResponse;
exports.UserSvcRegisterRequest = userSvcRegisterRequest.UserSvcRegisterRequest;
exports.UserSvcRegisterResponse = userSvcRegisterResponse.UserSvcRegisterResponse;
exports.UserSvcRole = userSvcRole.UserSvcRole;
exports.UserSvcSaveProfileRequest = userSvcSaveProfileRequest.UserSvcSaveProfileRequest;
exports.UserSvcSetRolePermissionsRequest = userSvcSetRolePermissionsRequest.UserSvcSetRolePermissionsRequest;
exports.UserSvcUpserPermissionRequest = userSvcUpserPermissionRequest.UserSvcUpserPermissionRequest;
exports.UserSvcUser = userSvcUser.UserSvcUser;
exports.ApiKeyAuth = ApiKeyAuth;
exports.HttpBasicAuth = HttpBasicAuth;
exports.HttpBearerAuth = HttpBearerAuth;
exports.OAuth = OAuth;
exports.ObjectSerializer = ObjectSerializer;
exports.VoidAuth = VoidAuth;
