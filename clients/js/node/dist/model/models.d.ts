import localVarRequest from 'request';
export * from './chatSvcAddMessageRequest';
export * from './chatSvcAddThreadRequest';
export * from './chatSvcAddThreadResponse';
export * from './chatSvcAsset';
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
export * from './datastoreCondition';
export * from './datastoreContainsCondition';
export * from './datastoreEqualCondition';
export * from './datastoreFieldSelector';
export * from './datastoreOrderBy';
export * from './datastoreQuery';
export * from './datastoreStartsWithCondition';
export * from './dockerSvcContainerIsRunningResponse';
export * from './dockerSvcDockerInfo';
export * from './dockerSvcErrorResponse';
export * from './dockerSvcGetContainerSummaryResponse';
export * from './dockerSvcGetDockerHostResponse';
export * from './dockerSvcGetInfoResponse';
export * from './dockerSvcLaunchContainerRequest';
export * from './dockerSvcLaunchContainerResponse';
export * from './dockerSvcLaunchInfo';
export * from './dockerSvcLaunchOptions';
export * from './downloadSvcDownloadDetails';
export * from './downloadSvcDownloadRequest';
export * from './downloadSvcDownloadsResponse';
export * from './downloadSvcErrorResponse';
export * from './downloadSvcGetDownloadResponse';
export * from './firehoseSvcErrorResponse';
export * from './firehoseSvcEvent';
export * from './firehoseSvcPublishRequest';
export * from './genericSvcCreateObjectRequest';
export * from './genericSvcCreateObjectResponse';
export * from './genericSvcDeleteObjectRequest';
export * from './genericSvcErrorResponse';
export * from './genericSvcGenericObject';
export * from './genericSvcGenericObjectCreateFields';
export * from './genericSvcQueryRequest';
export * from './genericSvcQueryResponse';
export * from './genericSvcUpdateObjectRequest';
export * from './genericSvcUpsertObjectRequest';
export * from './genericSvcUpsertObjectResponse';
export * from './modelSvcArchitectures';
export * from './modelSvcContainer';
export * from './modelSvcErrorResponse';
export * from './modelSvcGetModelResponse';
export * from './modelSvcListResponse';
export * from './modelSvcModel';
export * from './modelSvcModelStatus';
export * from './modelSvcPlatform';
export * from './modelSvcStatusResponse';
export * from './nodeSvcErrorResponse';
export * from './nodeSvcGPU';
export * from './nodeSvcListNodesResponse';
export * from './nodeSvcNode';
export * from './nodeSvcProcess';
export * from './promptSvcAddPromptRequest';
export * from './promptSvcAddPromptResponse';
export * from './promptSvcErrorResponse';
export * from './promptSvcListPromptsRequest';
export * from './promptSvcListPromptsResponse';
export * from './promptSvcPrompt';
export * from './promptSvcPromptStatus';
export * from './promptSvcRemovePromptRequest';
export * from './userSvcAuthToken';
export * from './userSvcChangePasswordAdminRequest';
export * from './userSvcChangePasswordRequest';
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
export * from './userSvcPermission';
export * from './userSvcReadUserByTokenRequest';
export * from './userSvcReadUserByTokenResponse';
export * from './userSvcRegisterRequest';
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
    };
}
export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
