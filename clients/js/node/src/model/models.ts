import localVarRequest from 'request';

export * from './chatSvcAddMessageRequest';
export * from './chatSvcAddThreadRequest';
export * from './chatSvcAddThreadResponse';
export * from './chatSvcAsset';
export * from './chatSvcEventMessageAdded';
export * from './chatSvcEventThreadAdded';
export * from './chatSvcEventThreadUpdate';
export * from './chatSvcGetMessagesResponse';
export * from './chatSvcGetThreadResponse';
export * from './chatSvcGetThreadsResponse';
export * from './chatSvcMessage';
export * from './chatSvcThread';
export * from './chatSvcUpdateThreadRequest';
export * from './configSvcAppServiceConfig';
export * from './configSvcConfig';
export * from './configSvcDownloadServiceConfig';
export * from './configSvcGetConfigResponse';
export * from './configSvcModelServiceConfig';
export * from './configSvcSaveConfigRequest';
export * from './datastoreFilter';
export * from './datastoreOp';
export * from './datastoreOrderBy';
export * from './datastoreQuery';
export * from './deploySvcAutoScalingConfig';
export * from './deploySvcDeleteDeploymentRequest';
export * from './deploySvcDeployment';
export * from './deploySvcDeploymentStatus';
export * from './deploySvcDeploymentStrategy';
export * from './deploySvcErrorResponse';
export * from './deploySvcListDeploymentsResponse';
export * from './deploySvcResourceLimits';
export * from './deploySvcSaveDeploymentRequest';
export * from './deploySvcStrategyType';
export * from './deploySvcTargetRegion';
export * from './dockerSvcBuildImageRequest';
export * from './dockerSvcContainerIsRunningResponse';
export * from './dockerSvcDockerInfo';
export * from './dockerSvcErrorResponse';
export * from './dockerSvcGetContainerSummaryResponse';
export * from './dockerSvcGetDockerHostResponse';
export * from './dockerSvcGetInfoResponse';
export * from './dockerSvcRunContainerOptions';
export * from './dockerSvcRunContainerRequest';
export * from './dockerSvcRunContainerResponse';
export * from './dockerSvcRunInfo';
export * from './dockerSvcStopContainerRequest';
export * from './downloadSvcDownloadDetails';
export * from './downloadSvcDownloadRequest';
export * from './downloadSvcDownloadsResponse';
export * from './downloadSvcErrorResponse';
export * from './downloadSvcGetDownloadResponse';
export * from './dynamicSvcCreateObjectRequest';
export * from './dynamicSvcCreateObjectResponse';
export * from './dynamicSvcDeleteObjectRequest';
export * from './dynamicSvcErrorResponse';
export * from './dynamicSvcObject';
export * from './dynamicSvcObjectCreateFields';
export * from './dynamicSvcQueryRequest';
export * from './dynamicSvcQueryResponse';
export * from './dynamicSvcUpdateObjectRequest';
export * from './dynamicSvcUpsertObjectRequest';
export * from './dynamicSvcUpsertObjectResponse';
export * from './emailSvcErrorResponse';
export * from './emailSvcFile';
export * from './emailSvcSendEmailRequest';
export * from './emailSvcSendEmailResponse';
export * from './firehoseSvcErrorResponse';
export * from './firehoseSvcEvent';
export * from './firehoseSvcEventPublishRequest';
export * from './modelSvcArchitectures';
export * from './modelSvcContainer';
export * from './modelSvcErrorResponse';
export * from './modelSvcGetModelResponse';
export * from './modelSvcListResponse';
export * from './modelSvcModel';
export * from './modelSvcModelStatus';
export * from './modelSvcPlatform';
export * from './modelSvcStatusResponse';
export * from './policySvcBlocklistParameters';
export * from './policySvcCheckRequest';
export * from './policySvcCheckResponse';
export * from './policySvcEntity';
export * from './policySvcErrorResponse';
export * from './policySvcInstance';
export * from './policySvcRateLimitParameters';
export * from './policySvcScope';
export * from './policySvcTemplateId';
export * from './policySvcUpsertInstanceRequest';
export * from './promptSvcAddPromptRequest';
export * from './promptSvcAddPromptResponse';
export * from './promptSvcErrorResponse';
export * from './promptSvcListPromptsRequest';
export * from './promptSvcListPromptsResponse';
export * from './promptSvcPrompt';
export * from './promptSvcPromptStatus';
export * from './promptSvcRemovePromptRequest';
export * from './registrySvcAPISpec';
export * from './registrySvcClient';
export * from './registrySvcDefinition';
export * from './registrySvcErrorResponse';
export * from './registrySvcGPU';
export * from './registrySvcImageSpec';
export * from './registrySvcInstance';
export * from './registrySvcInstanceStatus';
export * from './registrySvcLanguage';
export * from './registrySvcListDefinitionsResponse';
export * from './registrySvcListInstancesResponse';
export * from './registrySvcListNodesResponse';
export * from './registrySvcNode';
export * from './registrySvcProcess';
export * from './registrySvcRegisterInstanceRequest';
export * from './registrySvcRepositorySpec';
export * from './registrySvcResourceUsage';
export * from './registrySvcSaveDefinitionRequest';
export * from './registrySvcUsage';
export * from './secretSvcReadSecretRequest';
export * from './secretSvcReadSecretResponse';
export * from './secretSvcSecret';
export * from './secretSvcWriteSecretRequest';
export * from './sourceSvcCheckoutRepoRequest';
export * from './sourceSvcCheckoutRepoResponse';
export * from './sourceSvcErrorResponse';
export * from './userSvcAddUserToOrganizationRequest';
export * from './userSvcAuthToken';
export * from './userSvcChangePasswordAdminRequest';
export * from './userSvcChangePasswordRequest';
export * from './userSvcContact';
export * from './userSvcCreateOrganizationRequest';
export * from './userSvcCreateRoleRequest';
export * from './userSvcCreateRoleResponse';
export * from './userSvcCreateUserRequest';
export * from './userSvcErrorResponse';
export * from './userSvcGetPermissionsResponse';
export * from './userSvcGetPublicKeyResponse';
export * from './userSvcGetRolesResponse';
export * from './userSvcGetUsersRequest';
export * from './userSvcGetUsersResponse';
export * from './userSvcIsAuthorizedRequest';
export * from './userSvcIsAuthorizedResponse';
export * from './userSvcLoginRequest';
export * from './userSvcLoginResponse';
export * from './userSvcOrganization';
export * from './userSvcPermission';
export * from './userSvcReadUserByTokenResponse';
export * from './userSvcRegisterRequest';
export * from './userSvcRegisterResponse';
export * from './userSvcRole';
export * from './userSvcSaveProfileRequest';
export * from './userSvcSetRolePermissionsRequest';
export * from './userSvcUpserPermissionRequest';
export * from './userSvcUser';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ChatSvcAddMessageRequest } from './chatSvcAddMessageRequest';
import { ChatSvcAddThreadRequest } from './chatSvcAddThreadRequest';
import { ChatSvcAddThreadResponse } from './chatSvcAddThreadResponse';
import { ChatSvcAsset } from './chatSvcAsset';
import { ChatSvcEventMessageAdded } from './chatSvcEventMessageAdded';
import { ChatSvcEventThreadAdded } from './chatSvcEventThreadAdded';
import { ChatSvcEventThreadUpdate } from './chatSvcEventThreadUpdate';
import { ChatSvcGetMessagesResponse } from './chatSvcGetMessagesResponse';
import { ChatSvcGetThreadResponse } from './chatSvcGetThreadResponse';
import { ChatSvcGetThreadsResponse } from './chatSvcGetThreadsResponse';
import { ChatSvcMessage } from './chatSvcMessage';
import { ChatSvcThread } from './chatSvcThread';
import { ChatSvcUpdateThreadRequest } from './chatSvcUpdateThreadRequest';
import { ConfigSvcAppServiceConfig } from './configSvcAppServiceConfig';
import { ConfigSvcConfig } from './configSvcConfig';
import { ConfigSvcDownloadServiceConfig } from './configSvcDownloadServiceConfig';
import { ConfigSvcGetConfigResponse } from './configSvcGetConfigResponse';
import { ConfigSvcModelServiceConfig } from './configSvcModelServiceConfig';
import { ConfigSvcSaveConfigRequest } from './configSvcSaveConfigRequest';
import { DatastoreFilter } from './datastoreFilter';
import { DatastoreOp } from './datastoreOp';
import { DatastoreOrderBy } from './datastoreOrderBy';
import { DatastoreQuery } from './datastoreQuery';
import { DeploySvcAutoScalingConfig } from './deploySvcAutoScalingConfig';
import { DeploySvcDeleteDeploymentRequest } from './deploySvcDeleteDeploymentRequest';
import { DeploySvcDeployment } from './deploySvcDeployment';
import { DeploySvcDeploymentStatus } from './deploySvcDeploymentStatus';
import { DeploySvcDeploymentStrategy } from './deploySvcDeploymentStrategy';
import { DeploySvcErrorResponse } from './deploySvcErrorResponse';
import { DeploySvcListDeploymentsResponse } from './deploySvcListDeploymentsResponse';
import { DeploySvcResourceLimits } from './deploySvcResourceLimits';
import { DeploySvcSaveDeploymentRequest } from './deploySvcSaveDeploymentRequest';
import { DeploySvcStrategyType } from './deploySvcStrategyType';
import { DeploySvcTargetRegion } from './deploySvcTargetRegion';
import { DockerSvcBuildImageRequest } from './dockerSvcBuildImageRequest';
import { DockerSvcContainerIsRunningResponse } from './dockerSvcContainerIsRunningResponse';
import { DockerSvcDockerInfo } from './dockerSvcDockerInfo';
import { DockerSvcErrorResponse } from './dockerSvcErrorResponse';
import { DockerSvcGetContainerSummaryResponse } from './dockerSvcGetContainerSummaryResponse';
import { DockerSvcGetDockerHostResponse } from './dockerSvcGetDockerHostResponse';
import { DockerSvcGetInfoResponse } from './dockerSvcGetInfoResponse';
import { DockerSvcRunContainerOptions } from './dockerSvcRunContainerOptions';
import { DockerSvcRunContainerRequest } from './dockerSvcRunContainerRequest';
import { DockerSvcRunContainerResponse } from './dockerSvcRunContainerResponse';
import { DockerSvcRunInfo } from './dockerSvcRunInfo';
import { DockerSvcStopContainerRequest } from './dockerSvcStopContainerRequest';
import { DownloadSvcDownloadDetails } from './downloadSvcDownloadDetails';
import { DownloadSvcDownloadRequest } from './downloadSvcDownloadRequest';
import { DownloadSvcDownloadsResponse } from './downloadSvcDownloadsResponse';
import { DownloadSvcErrorResponse } from './downloadSvcErrorResponse';
import { DownloadSvcGetDownloadResponse } from './downloadSvcGetDownloadResponse';
import { DynamicSvcCreateObjectRequest } from './dynamicSvcCreateObjectRequest';
import { DynamicSvcCreateObjectResponse } from './dynamicSvcCreateObjectResponse';
import { DynamicSvcDeleteObjectRequest } from './dynamicSvcDeleteObjectRequest';
import { DynamicSvcErrorResponse } from './dynamicSvcErrorResponse';
import { DynamicSvcObject } from './dynamicSvcObject';
import { DynamicSvcObjectCreateFields } from './dynamicSvcObjectCreateFields';
import { DynamicSvcQueryRequest } from './dynamicSvcQueryRequest';
import { DynamicSvcQueryResponse } from './dynamicSvcQueryResponse';
import { DynamicSvcUpdateObjectRequest } from './dynamicSvcUpdateObjectRequest';
import { DynamicSvcUpsertObjectRequest } from './dynamicSvcUpsertObjectRequest';
import { DynamicSvcUpsertObjectResponse } from './dynamicSvcUpsertObjectResponse';
import { EmailSvcErrorResponse } from './emailSvcErrorResponse';
import { EmailSvcFile } from './emailSvcFile';
import { EmailSvcSendEmailRequest } from './emailSvcSendEmailRequest';
import { EmailSvcSendEmailResponse } from './emailSvcSendEmailResponse';
import { FirehoseSvcErrorResponse } from './firehoseSvcErrorResponse';
import { FirehoseSvcEvent } from './firehoseSvcEvent';
import { FirehoseSvcEventPublishRequest } from './firehoseSvcEventPublishRequest';
import { ModelSvcArchitectures } from './modelSvcArchitectures';
import { ModelSvcContainer } from './modelSvcContainer';
import { ModelSvcErrorResponse } from './modelSvcErrorResponse';
import { ModelSvcGetModelResponse } from './modelSvcGetModelResponse';
import { ModelSvcListResponse } from './modelSvcListResponse';
import { ModelSvcModel } from './modelSvcModel';
import { ModelSvcModelStatus } from './modelSvcModelStatus';
import { ModelSvcPlatform } from './modelSvcPlatform';
import { ModelSvcStatusResponse } from './modelSvcStatusResponse';
import { PolicySvcBlocklistParameters } from './policySvcBlocklistParameters';
import { PolicySvcCheckRequest } from './policySvcCheckRequest';
import { PolicySvcCheckResponse } from './policySvcCheckResponse';
import { PolicySvcEntity } from './policySvcEntity';
import { PolicySvcErrorResponse } from './policySvcErrorResponse';
import { PolicySvcInstance } from './policySvcInstance';
import { PolicySvcRateLimitParameters } from './policySvcRateLimitParameters';
import { PolicySvcScope } from './policySvcScope';
import { PolicySvcTemplateId } from './policySvcTemplateId';
import { PolicySvcUpsertInstanceRequest } from './policySvcUpsertInstanceRequest';
import { PromptSvcAddPromptRequest } from './promptSvcAddPromptRequest';
import { PromptSvcAddPromptResponse } from './promptSvcAddPromptResponse';
import { PromptSvcErrorResponse } from './promptSvcErrorResponse';
import { PromptSvcListPromptsRequest } from './promptSvcListPromptsRequest';
import { PromptSvcListPromptsResponse } from './promptSvcListPromptsResponse';
import { PromptSvcPrompt } from './promptSvcPrompt';
import { PromptSvcPromptStatus } from './promptSvcPromptStatus';
import { PromptSvcRemovePromptRequest } from './promptSvcRemovePromptRequest';
import { RegistrySvcAPISpec } from './registrySvcAPISpec';
import { RegistrySvcClient } from './registrySvcClient';
import { RegistrySvcDefinition } from './registrySvcDefinition';
import { RegistrySvcErrorResponse } from './registrySvcErrorResponse';
import { RegistrySvcGPU } from './registrySvcGPU';
import { RegistrySvcImageSpec } from './registrySvcImageSpec';
import { RegistrySvcInstance } from './registrySvcInstance';
import { RegistrySvcInstanceStatus } from './registrySvcInstanceStatus';
import { RegistrySvcLanguage } from './registrySvcLanguage';
import { RegistrySvcListDefinitionsResponse } from './registrySvcListDefinitionsResponse';
import { RegistrySvcListInstancesResponse } from './registrySvcListInstancesResponse';
import { RegistrySvcListNodesResponse } from './registrySvcListNodesResponse';
import { RegistrySvcNode } from './registrySvcNode';
import { RegistrySvcProcess } from './registrySvcProcess';
import { RegistrySvcRegisterInstanceRequest } from './registrySvcRegisterInstanceRequest';
import { RegistrySvcRepositorySpec } from './registrySvcRepositorySpec';
import { RegistrySvcResourceUsage } from './registrySvcResourceUsage';
import { RegistrySvcSaveDefinitionRequest } from './registrySvcSaveDefinitionRequest';
import { RegistrySvcUsage } from './registrySvcUsage';
import { SecretSvcReadSecretRequest } from './secretSvcReadSecretRequest';
import { SecretSvcReadSecretResponse } from './secretSvcReadSecretResponse';
import { SecretSvcSecret } from './secretSvcSecret';
import { SecretSvcWriteSecretRequest } from './secretSvcWriteSecretRequest';
import { SourceSvcCheckoutRepoRequest } from './sourceSvcCheckoutRepoRequest';
import { SourceSvcCheckoutRepoResponse } from './sourceSvcCheckoutRepoResponse';
import { SourceSvcErrorResponse } from './sourceSvcErrorResponse';
import { UserSvcAddUserToOrganizationRequest } from './userSvcAddUserToOrganizationRequest';
import { UserSvcAuthToken } from './userSvcAuthToken';
import { UserSvcChangePasswordAdminRequest } from './userSvcChangePasswordAdminRequest';
import { UserSvcChangePasswordRequest } from './userSvcChangePasswordRequest';
import { UserSvcContact } from './userSvcContact';
import { UserSvcCreateOrganizationRequest } from './userSvcCreateOrganizationRequest';
import { UserSvcCreateRoleRequest } from './userSvcCreateRoleRequest';
import { UserSvcCreateRoleResponse } from './userSvcCreateRoleResponse';
import { UserSvcCreateUserRequest } from './userSvcCreateUserRequest';
import { UserSvcErrorResponse } from './userSvcErrorResponse';
import { UserSvcGetPermissionsResponse } from './userSvcGetPermissionsResponse';
import { UserSvcGetPublicKeyResponse } from './userSvcGetPublicKeyResponse';
import { UserSvcGetRolesResponse } from './userSvcGetRolesResponse';
import { UserSvcGetUsersRequest } from './userSvcGetUsersRequest';
import { UserSvcGetUsersResponse } from './userSvcGetUsersResponse';
import { UserSvcIsAuthorizedRequest } from './userSvcIsAuthorizedRequest';
import { UserSvcIsAuthorizedResponse } from './userSvcIsAuthorizedResponse';
import { UserSvcLoginRequest } from './userSvcLoginRequest';
import { UserSvcLoginResponse } from './userSvcLoginResponse';
import { UserSvcOrganization } from './userSvcOrganization';
import { UserSvcPermission } from './userSvcPermission';
import { UserSvcReadUserByTokenResponse } from './userSvcReadUserByTokenResponse';
import { UserSvcRegisterRequest } from './userSvcRegisterRequest';
import { UserSvcRegisterResponse } from './userSvcRegisterResponse';
import { UserSvcRole } from './userSvcRole';
import { UserSvcSaveProfileRequest } from './userSvcSaveProfileRequest';
import { UserSvcSetRolePermissionsRequest } from './userSvcSetRolePermissionsRequest';
import { UserSvcUpserPermissionRequest } from './userSvcUpserPermissionRequest';
import { UserSvcUser } from './userSvcUser';

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

let enumsMap: {[index: string]: any} = {
        "DatastoreOp": DatastoreOp,
        "DeploySvcDeploymentStatus": DeploySvcDeploymentStatus,
        "DeploySvcStrategyType": DeploySvcStrategyType,
        "PolicySvcEntity": PolicySvcEntity,
        "PolicySvcScope": PolicySvcScope,
        "PolicySvcTemplateId": PolicySvcTemplateId,
        "PromptSvcPromptStatus": PromptSvcPromptStatus,
        "RegistrySvcInstanceStatus": RegistrySvcInstanceStatus,
        "RegistrySvcLanguage": RegistrySvcLanguage,
}

let typeMap: {[index: string]: any} = {
    "ChatSvcAddMessageRequest": ChatSvcAddMessageRequest,
    "ChatSvcAddThreadRequest": ChatSvcAddThreadRequest,
    "ChatSvcAddThreadResponse": ChatSvcAddThreadResponse,
    "ChatSvcAsset": ChatSvcAsset,
    "ChatSvcEventMessageAdded": ChatSvcEventMessageAdded,
    "ChatSvcEventThreadAdded": ChatSvcEventThreadAdded,
    "ChatSvcEventThreadUpdate": ChatSvcEventThreadUpdate,
    "ChatSvcGetMessagesResponse": ChatSvcGetMessagesResponse,
    "ChatSvcGetThreadResponse": ChatSvcGetThreadResponse,
    "ChatSvcGetThreadsResponse": ChatSvcGetThreadsResponse,
    "ChatSvcMessage": ChatSvcMessage,
    "ChatSvcThread": ChatSvcThread,
    "ChatSvcUpdateThreadRequest": ChatSvcUpdateThreadRequest,
    "ConfigSvcAppServiceConfig": ConfigSvcAppServiceConfig,
    "ConfigSvcConfig": ConfigSvcConfig,
    "ConfigSvcDownloadServiceConfig": ConfigSvcDownloadServiceConfig,
    "ConfigSvcGetConfigResponse": ConfigSvcGetConfigResponse,
    "ConfigSvcModelServiceConfig": ConfigSvcModelServiceConfig,
    "ConfigSvcSaveConfigRequest": ConfigSvcSaveConfigRequest,
    "DatastoreFilter": DatastoreFilter,
    "DatastoreOrderBy": DatastoreOrderBy,
    "DatastoreQuery": DatastoreQuery,
    "DeploySvcAutoScalingConfig": DeploySvcAutoScalingConfig,
    "DeploySvcDeleteDeploymentRequest": DeploySvcDeleteDeploymentRequest,
    "DeploySvcDeployment": DeploySvcDeployment,
    "DeploySvcDeploymentStrategy": DeploySvcDeploymentStrategy,
    "DeploySvcErrorResponse": DeploySvcErrorResponse,
    "DeploySvcListDeploymentsResponse": DeploySvcListDeploymentsResponse,
    "DeploySvcResourceLimits": DeploySvcResourceLimits,
    "DeploySvcSaveDeploymentRequest": DeploySvcSaveDeploymentRequest,
    "DeploySvcTargetRegion": DeploySvcTargetRegion,
    "DockerSvcBuildImageRequest": DockerSvcBuildImageRequest,
    "DockerSvcContainerIsRunningResponse": DockerSvcContainerIsRunningResponse,
    "DockerSvcDockerInfo": DockerSvcDockerInfo,
    "DockerSvcErrorResponse": DockerSvcErrorResponse,
    "DockerSvcGetContainerSummaryResponse": DockerSvcGetContainerSummaryResponse,
    "DockerSvcGetDockerHostResponse": DockerSvcGetDockerHostResponse,
    "DockerSvcGetInfoResponse": DockerSvcGetInfoResponse,
    "DockerSvcRunContainerOptions": DockerSvcRunContainerOptions,
    "DockerSvcRunContainerRequest": DockerSvcRunContainerRequest,
    "DockerSvcRunContainerResponse": DockerSvcRunContainerResponse,
    "DockerSvcRunInfo": DockerSvcRunInfo,
    "DockerSvcStopContainerRequest": DockerSvcStopContainerRequest,
    "DownloadSvcDownloadDetails": DownloadSvcDownloadDetails,
    "DownloadSvcDownloadRequest": DownloadSvcDownloadRequest,
    "DownloadSvcDownloadsResponse": DownloadSvcDownloadsResponse,
    "DownloadSvcErrorResponse": DownloadSvcErrorResponse,
    "DownloadSvcGetDownloadResponse": DownloadSvcGetDownloadResponse,
    "DynamicSvcCreateObjectRequest": DynamicSvcCreateObjectRequest,
    "DynamicSvcCreateObjectResponse": DynamicSvcCreateObjectResponse,
    "DynamicSvcDeleteObjectRequest": DynamicSvcDeleteObjectRequest,
    "DynamicSvcErrorResponse": DynamicSvcErrorResponse,
    "DynamicSvcObject": DynamicSvcObject,
    "DynamicSvcObjectCreateFields": DynamicSvcObjectCreateFields,
    "DynamicSvcQueryRequest": DynamicSvcQueryRequest,
    "DynamicSvcQueryResponse": DynamicSvcQueryResponse,
    "DynamicSvcUpdateObjectRequest": DynamicSvcUpdateObjectRequest,
    "DynamicSvcUpsertObjectRequest": DynamicSvcUpsertObjectRequest,
    "DynamicSvcUpsertObjectResponse": DynamicSvcUpsertObjectResponse,
    "EmailSvcErrorResponse": EmailSvcErrorResponse,
    "EmailSvcFile": EmailSvcFile,
    "EmailSvcSendEmailRequest": EmailSvcSendEmailRequest,
    "EmailSvcSendEmailResponse": EmailSvcSendEmailResponse,
    "FirehoseSvcErrorResponse": FirehoseSvcErrorResponse,
    "FirehoseSvcEvent": FirehoseSvcEvent,
    "FirehoseSvcEventPublishRequest": FirehoseSvcEventPublishRequest,
    "ModelSvcArchitectures": ModelSvcArchitectures,
    "ModelSvcContainer": ModelSvcContainer,
    "ModelSvcErrorResponse": ModelSvcErrorResponse,
    "ModelSvcGetModelResponse": ModelSvcGetModelResponse,
    "ModelSvcListResponse": ModelSvcListResponse,
    "ModelSvcModel": ModelSvcModel,
    "ModelSvcModelStatus": ModelSvcModelStatus,
    "ModelSvcPlatform": ModelSvcPlatform,
    "ModelSvcStatusResponse": ModelSvcStatusResponse,
    "PolicySvcBlocklistParameters": PolicySvcBlocklistParameters,
    "PolicySvcCheckRequest": PolicySvcCheckRequest,
    "PolicySvcCheckResponse": PolicySvcCheckResponse,
    "PolicySvcErrorResponse": PolicySvcErrorResponse,
    "PolicySvcInstance": PolicySvcInstance,
    "PolicySvcRateLimitParameters": PolicySvcRateLimitParameters,
    "PolicySvcUpsertInstanceRequest": PolicySvcUpsertInstanceRequest,
    "PromptSvcAddPromptRequest": PromptSvcAddPromptRequest,
    "PromptSvcAddPromptResponse": PromptSvcAddPromptResponse,
    "PromptSvcErrorResponse": PromptSvcErrorResponse,
    "PromptSvcListPromptsRequest": PromptSvcListPromptsRequest,
    "PromptSvcListPromptsResponse": PromptSvcListPromptsResponse,
    "PromptSvcPrompt": PromptSvcPrompt,
    "PromptSvcRemovePromptRequest": PromptSvcRemovePromptRequest,
    "RegistrySvcAPISpec": RegistrySvcAPISpec,
    "RegistrySvcClient": RegistrySvcClient,
    "RegistrySvcDefinition": RegistrySvcDefinition,
    "RegistrySvcErrorResponse": RegistrySvcErrorResponse,
    "RegistrySvcGPU": RegistrySvcGPU,
    "RegistrySvcImageSpec": RegistrySvcImageSpec,
    "RegistrySvcInstance": RegistrySvcInstance,
    "RegistrySvcListDefinitionsResponse": RegistrySvcListDefinitionsResponse,
    "RegistrySvcListInstancesResponse": RegistrySvcListInstancesResponse,
    "RegistrySvcListNodesResponse": RegistrySvcListNodesResponse,
    "RegistrySvcNode": RegistrySvcNode,
    "RegistrySvcProcess": RegistrySvcProcess,
    "RegistrySvcRegisterInstanceRequest": RegistrySvcRegisterInstanceRequest,
    "RegistrySvcRepositorySpec": RegistrySvcRepositorySpec,
    "RegistrySvcResourceUsage": RegistrySvcResourceUsage,
    "RegistrySvcSaveDefinitionRequest": RegistrySvcSaveDefinitionRequest,
    "RegistrySvcUsage": RegistrySvcUsage,
    "SecretSvcReadSecretRequest": SecretSvcReadSecretRequest,
    "SecretSvcReadSecretResponse": SecretSvcReadSecretResponse,
    "SecretSvcSecret": SecretSvcSecret,
    "SecretSvcWriteSecretRequest": SecretSvcWriteSecretRequest,
    "SourceSvcCheckoutRepoRequest": SourceSvcCheckoutRepoRequest,
    "SourceSvcCheckoutRepoResponse": SourceSvcCheckoutRepoResponse,
    "SourceSvcErrorResponse": SourceSvcErrorResponse,
    "UserSvcAddUserToOrganizationRequest": UserSvcAddUserToOrganizationRequest,
    "UserSvcAuthToken": UserSvcAuthToken,
    "UserSvcChangePasswordAdminRequest": UserSvcChangePasswordAdminRequest,
    "UserSvcChangePasswordRequest": UserSvcChangePasswordRequest,
    "UserSvcContact": UserSvcContact,
    "UserSvcCreateOrganizationRequest": UserSvcCreateOrganizationRequest,
    "UserSvcCreateRoleRequest": UserSvcCreateRoleRequest,
    "UserSvcCreateRoleResponse": UserSvcCreateRoleResponse,
    "UserSvcCreateUserRequest": UserSvcCreateUserRequest,
    "UserSvcErrorResponse": UserSvcErrorResponse,
    "UserSvcGetPermissionsResponse": UserSvcGetPermissionsResponse,
    "UserSvcGetPublicKeyResponse": UserSvcGetPublicKeyResponse,
    "UserSvcGetRolesResponse": UserSvcGetRolesResponse,
    "UserSvcGetUsersRequest": UserSvcGetUsersRequest,
    "UserSvcGetUsersResponse": UserSvcGetUsersResponse,
    "UserSvcIsAuthorizedRequest": UserSvcIsAuthorizedRequest,
    "UserSvcIsAuthorizedResponse": UserSvcIsAuthorizedResponse,
    "UserSvcLoginRequest": UserSvcLoginRequest,
    "UserSvcLoginResponse": UserSvcLoginResponse,
    "UserSvcOrganization": UserSvcOrganization,
    "UserSvcPermission": UserSvcPermission,
    "UserSvcReadUserByTokenResponse": UserSvcReadUserByTokenResponse,
    "UserSvcRegisterRequest": UserSvcRegisterRequest,
    "UserSvcRegisterResponse": UserSvcRegisterResponse,
    "UserSvcRole": UserSvcRole,
    "UserSvcSaveProfileRequest": UserSvcSaveProfileRequest,
    "UserSvcSetRolePermissionsRequest": UserSvcSetRolePermissionsRequest,
    "UserSvcUpserPermissionRequest": UserSvcUpserPermissionRequest,
    "UserSvcUser": UserSvcUser,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
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
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
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
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
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

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
