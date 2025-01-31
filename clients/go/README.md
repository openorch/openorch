# Go API client for openapi

On-premise AI platform and microservices ecosystem.

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 0.3.0-rc.11
- Package version: 1.0.0
- Generator version: 7.7.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen
For more information, please visit [http://openorch.org/](http://openorch.org/)

## Installation

Install the following dependencies:

```sh
go get github.com/stretchr/testify/assert
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```go
import openapi "github.com/GIT_USER_ID/GIT_REPO_ID"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```go
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `openapi.ContextServerIndex` of type `int`.

```go
ctx := context.WithValue(context.Background(), openapi.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `openapi.ContextServerVariables` of type `map[string]string`.

```go
ctx := context.WithValue(context.Background(), openapi.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `openapi.ContextOperationServerIndices` and `openapi.ContextOperationServerVariables` context maps.

```go
ctx := context.WithValue(context.Background(), openapi.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), openapi.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:58231*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ChatSvcAPI* | [**AddMessage**](docs/ChatSvcAPI.md#addmessage) | **Post** /chat-svc/thread/{threadId}/message | Add Message
*ChatSvcAPI* | [**AddThread**](docs/ChatSvcAPI.md#addthread) | **Post** /chat-svc/thread | Add Thread
*ChatSvcAPI* | [**DeleteMessage**](docs/ChatSvcAPI.md#deletemessage) | **Delete** /chat-svc/message/{messageId} | Delete a Message
*ChatSvcAPI* | [**DeleteThread**](docs/ChatSvcAPI.md#deletethread) | **Delete** /chat-svc/thread/{threadId} | Delete a Thread
*ChatSvcAPI* | [**Events**](docs/ChatSvcAPI.md#events) | **Get** /chat-svc/events | Events
*ChatSvcAPI* | [**GetMessages**](docs/ChatSvcAPI.md#getmessages) | **Post** /chat-svc/thread/{threadId}/messages | List Messages
*ChatSvcAPI* | [**GetThread**](docs/ChatSvcAPI.md#getthread) | **Get** /chat-svc/thread/{threadId} | Get Thread
*ChatSvcAPI* | [**GetThreads**](docs/ChatSvcAPI.md#getthreads) | **Post** /chat-svc/threads | Get Threads
*ChatSvcAPI* | [**UpdateThread**](docs/ChatSvcAPI.md#updatethread) | **Put** /chat-svc/thread/{threadId} | Update Thread
*ConfigSvcAPI* | [**GetConfig**](docs/ConfigSvcAPI.md#getconfig) | **Get** /config-svc/config | Get Config
*ConfigSvcAPI* | [**SaveConfig**](docs/ConfigSvcAPI.md#saveconfig) | **Put** /config-svc/config | Save Config
*DeploySvcAPI* | [**DeleteDeployment**](docs/DeploySvcAPI.md#deletedeployment) | **Delete** /deploy-svc/deployment | Delete Deployment
*DeploySvcAPI* | [**ListDeployments**](docs/DeploySvcAPI.md#listdeployments) | **Post** /deploy-svc/deployments | List Deployments
*DeploySvcAPI* | [**SaveDeployment**](docs/DeploySvcAPI.md#savedeployment) | **Put** /deploy-svc/deployment | Save Deployment
*DockerSvcAPI* | [**BuildImage**](docs/DockerSvcAPI.md#buildimage) | **Put** /docker-svc/image | Build an Image
*DockerSvcAPI* | [**ContainerIsRunning**](docs/DockerSvcAPI.md#containerisrunning) | **Get** /docker-svc/container/is-running | Check If a Container Is Running
*DockerSvcAPI* | [**ContainerSummary**](docs/DockerSvcAPI.md#containersummary) | **Get** /docker-svc/container/summary | Get Container Summary
*DockerSvcAPI* | [**GetHost**](docs/DockerSvcAPI.md#gethost) | **Get** /docker-svc/host | Get Docker Host
*DockerSvcAPI* | [**GetInfo**](docs/DockerSvcAPI.md#getinfo) | **Get** /docker-svc/info | Get Docker Service Information
*DockerSvcAPI* | [**RunContainer**](docs/DockerSvcAPI.md#runcontainer) | **Put** /docker-svc/container | Run a Container
*DockerSvcAPI* | [**StopContainer**](docs/DockerSvcAPI.md#stopcontainer) | **Put** /docker-svc/container/stop | Stop a Container
*DynamicSvcAPI* | [**CreateObject**](docs/DynamicSvcAPI.md#createobject) | **Post** /dynamic-svc/object | Create a Generic Object
*DynamicSvcAPI* | [**DeleteObjects**](docs/DynamicSvcAPI.md#deleteobjects) | **Post** /dynamic-svc/objects/delete | Delete a Generic Object
*DynamicSvcAPI* | [**Query**](docs/DynamicSvcAPI.md#query) | **Post** /dynamic-svc/objects | Query Objects
*DynamicSvcAPI* | [**UpdateObjects**](docs/DynamicSvcAPI.md#updateobjects) | **Post** /dynamic-svc/objects/update | Update Objects
*DynamicSvcAPI* | [**UpsertObject**](docs/DynamicSvcAPI.md#upsertobject) | **Put** /dynamic-svc/object/{objectId} | Upsert a Generic Object
*EmailSvcAPI* | [**SendEmail**](docs/EmailSvcAPI.md#sendemail) | **Post** /email-svc/email | Send an Email
*FileSvcAPI* | [**DownloadFile**](docs/FileSvcAPI.md#downloadfile) | **Put** /file-svc/download | Download a File
*FileSvcAPI* | [**GetDownload**](docs/FileSvcAPI.md#getdownload) | **Get** /file-svc/download/{url} | Get a Download
*FileSvcAPI* | [**ListDownloads**](docs/FileSvcAPI.md#listdownloads) | **Post** /file-svc/downloads | List Downloads
*FileSvcAPI* | [**ListUploads**](docs/FileSvcAPI.md#listuploads) | **Post** /file-svc/uploads | List Uploads
*FileSvcAPI* | [**PauseDownload**](docs/FileSvcAPI.md#pausedownload) | **Put** /file-svc/download/{url}/pause | Pause a Download
*FileSvcAPI* | [**ServeDownload**](docs/FileSvcAPI.md#servedownload) | **Get** /file-svc/serve/download/{url} | Serve a Downloaded file
*FileSvcAPI* | [**ServeUpload**](docs/FileSvcAPI.md#serveupload) | **Get** /file-svc/serve/upload/{fileId} | Serve an Uploaded File
*FileSvcAPI* | [**UploadFile**](docs/FileSvcAPI.md#uploadfile) | **Put** /file-svc/upload | Upload a File
*FirehoseSvcAPI* | [**PublishEvent**](docs/FirehoseSvcAPI.md#publishevent) | **Post** /firehose-svc/event | Publish an Event
*FirehoseSvcAPI* | [**SubscribeToEvents**](docs/FirehoseSvcAPI.md#subscribetoevents) | **Get** /firehose-svc/events/subscribe | Subscribe to the Event Stream
*ModelSvcAPI* | [**GetDefaultModelStatus**](docs/ModelSvcAPI.md#getdefaultmodelstatus) | **Get** /model-svc/default-model/status | Get Default Model Status
*ModelSvcAPI* | [**GetModel**](docs/ModelSvcAPI.md#getmodel) | **Get** /model-svc/model/{modelId} | Get a Model
*ModelSvcAPI* | [**GetModelStatus**](docs/ModelSvcAPI.md#getmodelstatus) | **Get** /model-svc/model/{modelId}/status | Get Model Status
*ModelSvcAPI* | [**ListModels**](docs/ModelSvcAPI.md#listmodels) | **Post** /model-svc/models | List Models
*ModelSvcAPI* | [**MakeDefault**](docs/ModelSvcAPI.md#makedefault) | **Put** /model-svc/model/{modelId}/make-default | Make a Model Default
*ModelSvcAPI* | [**StartDefaultModel**](docs/ModelSvcAPI.md#startdefaultmodel) | **Put** /model-svc/default-model/start | Start the Default Model
*ModelSvcAPI* | [**StartModel**](docs/ModelSvcAPI.md#startmodel) | **Put** /model-svc/model/{modelId}/start | Start a Model
*PolicySvcAPI* | [**Check**](docs/PolicySvcAPI.md#check) | **Post** /policy-svc/check | Check
*PolicySvcAPI* | [**UpsertInstance**](docs/PolicySvcAPI.md#upsertinstance) | **Put** /policy-svc/instance/{instanceId} | Upsert an Instance
*PromptSvcAPI* | [**AddPrompt**](docs/PromptSvcAPI.md#addprompt) | **Post** /prompt-svc/prompt | Add Prompt
*PromptSvcAPI* | [**ListPrompts**](docs/PromptSvcAPI.md#listprompts) | **Post** /prompt-svc/prompts | List Prompts
*PromptSvcAPI* | [**RemovePrompt**](docs/PromptSvcAPI.md#removeprompt) | **Post** /prompt-svc/remove | Remove Prompt
*PromptSvcAPI* | [**SubscribeToPromptResponses**](docs/PromptSvcAPI.md#subscribetopromptresponses) | **Get** /prompt-svc/prompts/{threadId}/responses/subscribe | Subscribe to Prompt Responses by Thread
*RegistrySvcAPI* | [**DeleteDefinition**](docs/RegistrySvcAPI.md#deletedefinition) | **Delete** /registry-svc/definition/{id} | Delete Definition
*RegistrySvcAPI* | [**DeleteNode**](docs/RegistrySvcAPI.md#deletenode) | **Delete** /registry-svc/node/{url} | Delete Node
*RegistrySvcAPI* | [**ListDefinitions**](docs/RegistrySvcAPI.md#listdefinitions) | **Get** /registry-svc/definitions | List Definitions
*RegistrySvcAPI* | [**ListInstances**](docs/RegistrySvcAPI.md#listinstances) | **Get** /registry-svc/instances | List Service Instances
*RegistrySvcAPI* | [**ListNodes**](docs/RegistrySvcAPI.md#listnodes) | **Post** /registry-svc/nodes | List Nodes
*RegistrySvcAPI* | [**RegisterInstance**](docs/RegistrySvcAPI.md#registerinstance) | **Put** /registry-svc/instance | Register Instance
*RegistrySvcAPI* | [**RemoveInstance**](docs/RegistrySvcAPI.md#removeinstance) | **Delete** /registry-svc/instance/{id} | Remove Instance
*RegistrySvcAPI* | [**SaveDefinition**](docs/RegistrySvcAPI.md#savedefinition) | **Put** /registry-svc/definition | Register a Definition
*RegistrySvcAPI* | [**SelfNode**](docs/RegistrySvcAPI.md#selfnode) | **Get** /registry-svc/node/self | View Self Node
*SecretSvcAPI* | [**DecryptValue**](docs/SecretSvcAPI.md#decryptvalue) | **Post** /secret-svc/decrypt | Decrypt a Value
*SecretSvcAPI* | [**EncryptValue**](docs/SecretSvcAPI.md#encryptvalue) | **Post** /secret-svc/encrypt | Encrypt a Value
*SecretSvcAPI* | [**IsSecure**](docs/SecretSvcAPI.md#issecure) | **Get** /secret-svc/is-secure | Check Security Status
*SecretSvcAPI* | [**ListSecrets**](docs/SecretSvcAPI.md#listsecrets) | **Post** /secret-svc/secrets | List Secrets
*SecretSvcAPI* | [**RemoveSecrets**](docs/SecretSvcAPI.md#removesecrets) | **Delete** /secret-svc/secrets | Remove Secrets
*SecretSvcAPI* | [**SaveSecrets**](docs/SecretSvcAPI.md#savesecrets) | **Put** /secret-svc/secrets | Save Secrets
*SourceSvcAPI* | [**CheckoutRepo**](docs/SourceSvcAPI.md#checkoutrepo) | **Post** /source-svc/repo/checkout | Checkout a git repository
*UserSvcAPI* | [**AddUserToOrganization**](docs/UserSvcAPI.md#addusertoorganization) | **Post** /user-svc/organization/{organizationId}/user | Add a User to an Organization
*UserSvcAPI* | [**AssignPermissions**](docs/UserSvcAPI.md#assignpermissions) | **Put** /user-svc/roles/permissions | Assign Permissions
*UserSvcAPI* | [**ChangePassword**](docs/UserSvcAPI.md#changepassword) | **Post** /user-svc/change-password | Change User Password
*UserSvcAPI* | [**ChangePasswordAdmin**](docs/UserSvcAPI.md#changepasswordadmin) | **Post** /user-svc/change-password-admin | Change User Password (Admin)
*UserSvcAPI* | [**CreateOrganization**](docs/UserSvcAPI.md#createorganization) | **Post** /user-svc/organization | Create an Organization
*UserSvcAPI* | [**CreateRole**](docs/UserSvcAPI.md#createrole) | **Post** /user-svc/role | Create a New Role
*UserSvcAPI* | [**CreateUser**](docs/UserSvcAPI.md#createuser) | **Post** /user-svc/user | Create a New User
*UserSvcAPI* | [**DeleteRole**](docs/UserSvcAPI.md#deleterole) | **Delete** /user-svc/role/{roleId} | Delete a Role
*UserSvcAPI* | [**DeleteUser**](docs/UserSvcAPI.md#deleteuser) | **Delete** /user-svc/user/{userId} | Delete a User
*UserSvcAPI* | [**GetPermissionsByRole**](docs/UserSvcAPI.md#getpermissionsbyrole) | **Get** /user-svc/role/{roleId}/permissions | Get Permissions by Role
*UserSvcAPI* | [**GetPublicKey**](docs/UserSvcAPI.md#getpublickey) | **Get** /user-svc/public-key | Get Public Key
*UserSvcAPI* | [**GetRoles**](docs/UserSvcAPI.md#getroles) | **Get** /user-svc/roles | Get all Roles
*UserSvcAPI* | [**GetUsers**](docs/UserSvcAPI.md#getusers) | **Post** /user-svc/users | List Users
*UserSvcAPI* | [**IsAuthorized**](docs/UserSvcAPI.md#isauthorized) | **Post** /user-svc/permission/{permissionId}/is-authorized | Is Authorized
*UserSvcAPI* | [**ListGrants**](docs/UserSvcAPI.md#listgrants) | **Post** /user-svc/grants | List Grants
*UserSvcAPI* | [**Login**](docs/UserSvcAPI.md#login) | **Post** /user-svc/login | Login
*UserSvcAPI* | [**ReadUserByToken**](docs/UserSvcAPI.md#readuserbytoken) | **Post** /user-svc/user/by-token | Read User by Token
*UserSvcAPI* | [**Register**](docs/UserSvcAPI.md#register) | **Post** /user-svc/register | Register
*UserSvcAPI* | [**RemoveUserFromOrganization**](docs/UserSvcAPI.md#removeuserfromorganization) | **Delete** /user-svc/organization/{organizationId}/user/{userId} | Remove a User from an Organization
*UserSvcAPI* | [**SaveGrants**](docs/UserSvcAPI.md#savegrants) | **Put** /user-svc/grants | Save Grants
*UserSvcAPI* | [**SavePermissions**](docs/UserSvcAPI.md#savepermissions) | **Put** /user-svc/permissions | Save Permissions
*UserSvcAPI* | [**SaveSelf**](docs/UserSvcAPI.md#saveself) | **Put** /user-svc/self | Save User Profile
*UserSvcAPI* | [**SaveUser**](docs/UserSvcAPI.md#saveuser) | **Put** /user-svc/user/{userId} | Save User
*UserSvcAPI* | [**SetRolePermission**](docs/UserSvcAPI.md#setrolepermission) | **Put** /user-svc/role/{roleId}/permissions | Set Role Permissions


## Documentation For Models

 - [ChatSvcAddMessageRequest](docs/ChatSvcAddMessageRequest.md)
 - [ChatSvcAddThreadRequest](docs/ChatSvcAddThreadRequest.md)
 - [ChatSvcAddThreadResponse](docs/ChatSvcAddThreadResponse.md)
 - [ChatSvcEventMessageAdded](docs/ChatSvcEventMessageAdded.md)
 - [ChatSvcEventThreadAdded](docs/ChatSvcEventThreadAdded.md)
 - [ChatSvcEventThreadUpdate](docs/ChatSvcEventThreadUpdate.md)
 - [ChatSvcGetMessagesResponse](docs/ChatSvcGetMessagesResponse.md)
 - [ChatSvcGetThreadResponse](docs/ChatSvcGetThreadResponse.md)
 - [ChatSvcGetThreadsResponse](docs/ChatSvcGetThreadsResponse.md)
 - [ChatSvcMessage](docs/ChatSvcMessage.md)
 - [ChatSvcThread](docs/ChatSvcThread.md)
 - [ChatSvcUpdateThreadRequest](docs/ChatSvcUpdateThreadRequest.md)
 - [ConfigSvcConfig](docs/ConfigSvcConfig.md)
 - [ConfigSvcGetConfigResponse](docs/ConfigSvcGetConfigResponse.md)
 - [ConfigSvcSaveConfigRequest](docs/ConfigSvcSaveConfigRequest.md)
 - [DatastoreFilter](docs/DatastoreFilter.md)
 - [DatastoreOp](docs/DatastoreOp.md)
 - [DatastoreOrderBy](docs/DatastoreOrderBy.md)
 - [DatastoreQuery](docs/DatastoreQuery.md)
 - [DeploySvcAutoScalingConfig](docs/DeploySvcAutoScalingConfig.md)
 - [DeploySvcDeleteDeploymentRequest](docs/DeploySvcDeleteDeploymentRequest.md)
 - [DeploySvcDeployment](docs/DeploySvcDeployment.md)
 - [DeploySvcDeploymentStatus](docs/DeploySvcDeploymentStatus.md)
 - [DeploySvcDeploymentStrategy](docs/DeploySvcDeploymentStrategy.md)
 - [DeploySvcErrorResponse](docs/DeploySvcErrorResponse.md)
 - [DeploySvcListDeploymentsResponse](docs/DeploySvcListDeploymentsResponse.md)
 - [DeploySvcResourceLimits](docs/DeploySvcResourceLimits.md)
 - [DeploySvcSaveDeploymentRequest](docs/DeploySvcSaveDeploymentRequest.md)
 - [DeploySvcStrategyType](docs/DeploySvcStrategyType.md)
 - [DeploySvcTargetRegion](docs/DeploySvcTargetRegion.md)
 - [DockerSvcBuildImageRequest](docs/DockerSvcBuildImageRequest.md)
 - [DockerSvcContainerIsRunningResponse](docs/DockerSvcContainerIsRunningResponse.md)
 - [DockerSvcDockerInfo](docs/DockerSvcDockerInfo.md)
 - [DockerSvcErrorResponse](docs/DockerSvcErrorResponse.md)
 - [DockerSvcGetContainerSummaryResponse](docs/DockerSvcGetContainerSummaryResponse.md)
 - [DockerSvcGetDockerHostResponse](docs/DockerSvcGetDockerHostResponse.md)
 - [DockerSvcGetInfoResponse](docs/DockerSvcGetInfoResponse.md)
 - [DockerSvcRunContainerOptions](docs/DockerSvcRunContainerOptions.md)
 - [DockerSvcRunContainerRequest](docs/DockerSvcRunContainerRequest.md)
 - [DockerSvcRunContainerResponse](docs/DockerSvcRunContainerResponse.md)
 - [DockerSvcRunInfo](docs/DockerSvcRunInfo.md)
 - [DockerSvcStopContainerRequest](docs/DockerSvcStopContainerRequest.md)
 - [DynamicSvcCreateObjectRequest](docs/DynamicSvcCreateObjectRequest.md)
 - [DynamicSvcCreateObjectResponse](docs/DynamicSvcCreateObjectResponse.md)
 - [DynamicSvcDeleteObjectRequest](docs/DynamicSvcDeleteObjectRequest.md)
 - [DynamicSvcErrorResponse](docs/DynamicSvcErrorResponse.md)
 - [DynamicSvcObject](docs/DynamicSvcObject.md)
 - [DynamicSvcObjectCreateFields](docs/DynamicSvcObjectCreateFields.md)
 - [DynamicSvcQueryRequest](docs/DynamicSvcQueryRequest.md)
 - [DynamicSvcQueryResponse](docs/DynamicSvcQueryResponse.md)
 - [DynamicSvcUpdateObjectRequest](docs/DynamicSvcUpdateObjectRequest.md)
 - [DynamicSvcUpsertObjectRequest](docs/DynamicSvcUpsertObjectRequest.md)
 - [DynamicSvcUpsertObjectResponse](docs/DynamicSvcUpsertObjectResponse.md)
 - [EmailSvcErrorResponse](docs/EmailSvcErrorResponse.md)
 - [EmailSvcFile](docs/EmailSvcFile.md)
 - [EmailSvcSendEmailRequest](docs/EmailSvcSendEmailRequest.md)
 - [EmailSvcSendEmailResponse](docs/EmailSvcSendEmailResponse.md)
 - [FileSvcDownload](docs/FileSvcDownload.md)
 - [FileSvcDownloadFileRequest](docs/FileSvcDownloadFileRequest.md)
 - [FileSvcDownloadsResponse](docs/FileSvcDownloadsResponse.md)
 - [FileSvcErrorResponse](docs/FileSvcErrorResponse.md)
 - [FileSvcGetDownloadResponse](docs/FileSvcGetDownloadResponse.md)
 - [FileSvcListUploadsRequest](docs/FileSvcListUploadsRequest.md)
 - [FileSvcListUploadsResponse](docs/FileSvcListUploadsResponse.md)
 - [FileSvcUpload](docs/FileSvcUpload.md)
 - [FileSvcUploadFileResponse](docs/FileSvcUploadFileResponse.md)
 - [FirehoseSvcErrorResponse](docs/FirehoseSvcErrorResponse.md)
 - [FirehoseSvcEvent](docs/FirehoseSvcEvent.md)
 - [FirehoseSvcEventPublishRequest](docs/FirehoseSvcEventPublishRequest.md)
 - [ModelSvcArchitectures](docs/ModelSvcArchitectures.md)
 - [ModelSvcContainer](docs/ModelSvcContainer.md)
 - [ModelSvcErrorResponse](docs/ModelSvcErrorResponse.md)
 - [ModelSvcGetModelResponse](docs/ModelSvcGetModelResponse.md)
 - [ModelSvcListResponse](docs/ModelSvcListResponse.md)
 - [ModelSvcModel](docs/ModelSvcModel.md)
 - [ModelSvcModelStatus](docs/ModelSvcModelStatus.md)
 - [ModelSvcPlatform](docs/ModelSvcPlatform.md)
 - [ModelSvcStatusResponse](docs/ModelSvcStatusResponse.md)
 - [PolicySvcBlocklistParameters](docs/PolicySvcBlocklistParameters.md)
 - [PolicySvcCheckRequest](docs/PolicySvcCheckRequest.md)
 - [PolicySvcCheckResponse](docs/PolicySvcCheckResponse.md)
 - [PolicySvcEntity](docs/PolicySvcEntity.md)
 - [PolicySvcErrorResponse](docs/PolicySvcErrorResponse.md)
 - [PolicySvcInstance](docs/PolicySvcInstance.md)
 - [PolicySvcParameters](docs/PolicySvcParameters.md)
 - [PolicySvcRateLimitParameters](docs/PolicySvcRateLimitParameters.md)
 - [PolicySvcScope](docs/PolicySvcScope.md)
 - [PolicySvcTemplateId](docs/PolicySvcTemplateId.md)
 - [PolicySvcUpsertInstanceRequest](docs/PolicySvcUpsertInstanceRequest.md)
 - [PromptSvcAddPromptRequest](docs/PromptSvcAddPromptRequest.md)
 - [PromptSvcAddPromptResponse](docs/PromptSvcAddPromptResponse.md)
 - [PromptSvcEngineParameters](docs/PromptSvcEngineParameters.md)
 - [PromptSvcErrorResponse](docs/PromptSvcErrorResponse.md)
 - [PromptSvcListPromptsRequest](docs/PromptSvcListPromptsRequest.md)
 - [PromptSvcListPromptsResponse](docs/PromptSvcListPromptsResponse.md)
 - [PromptSvcParameters](docs/PromptSvcParameters.md)
 - [PromptSvcPrompt](docs/PromptSvcPrompt.md)
 - [PromptSvcPromptStatus](docs/PromptSvcPromptStatus.md)
 - [PromptSvcRemovePromptRequest](docs/PromptSvcRemovePromptRequest.md)
 - [PromptSvcStableDiffusionParameters](docs/PromptSvcStableDiffusionParameters.md)
 - [PromptSvcTextToImageParameters](docs/PromptSvcTextToImageParameters.md)
 - [RegistrySvcAPISpec](docs/RegistrySvcAPISpec.md)
 - [RegistrySvcClient](docs/RegistrySvcClient.md)
 - [RegistrySvcDefinition](docs/RegistrySvcDefinition.md)
 - [RegistrySvcErrorResponse](docs/RegistrySvcErrorResponse.md)
 - [RegistrySvcGPU](docs/RegistrySvcGPU.md)
 - [RegistrySvcImageSpec](docs/RegistrySvcImageSpec.md)
 - [RegistrySvcInstance](docs/RegistrySvcInstance.md)
 - [RegistrySvcInstanceStatus](docs/RegistrySvcInstanceStatus.md)
 - [RegistrySvcLanguage](docs/RegistrySvcLanguage.md)
 - [RegistrySvcListDefinitionsResponse](docs/RegistrySvcListDefinitionsResponse.md)
 - [RegistrySvcListInstancesResponse](docs/RegistrySvcListInstancesResponse.md)
 - [RegistrySvcListNodesRequest](docs/RegistrySvcListNodesRequest.md)
 - [RegistrySvcListNodesResponse](docs/RegistrySvcListNodesResponse.md)
 - [RegistrySvcNode](docs/RegistrySvcNode.md)
 - [RegistrySvcNodeSelfResponse](docs/RegistrySvcNodeSelfResponse.md)
 - [RegistrySvcProcess](docs/RegistrySvcProcess.md)
 - [RegistrySvcRegisterInstanceRequest](docs/RegistrySvcRegisterInstanceRequest.md)
 - [RegistrySvcRepositorySpec](docs/RegistrySvcRepositorySpec.md)
 - [RegistrySvcResourceUsage](docs/RegistrySvcResourceUsage.md)
 - [RegistrySvcSaveDefinitionRequest](docs/RegistrySvcSaveDefinitionRequest.md)
 - [RegistrySvcUsage](docs/RegistrySvcUsage.md)
 - [SecretSvcChecksumAlgorithm](docs/SecretSvcChecksumAlgorithm.md)
 - [SecretSvcDecryptValueRequest](docs/SecretSvcDecryptValueRequest.md)
 - [SecretSvcDecryptValueResponse](docs/SecretSvcDecryptValueResponse.md)
 - [SecretSvcEncryptValueRequest](docs/SecretSvcEncryptValueRequest.md)
 - [SecretSvcEncryptValueResponse](docs/SecretSvcEncryptValueResponse.md)
 - [SecretSvcIsSecureResponse](docs/SecretSvcIsSecureResponse.md)
 - [SecretSvcListSecretsRequest](docs/SecretSvcListSecretsRequest.md)
 - [SecretSvcListSecretsResponse](docs/SecretSvcListSecretsResponse.md)
 - [SecretSvcRemoveSecretsRequest](docs/SecretSvcRemoveSecretsRequest.md)
 - [SecretSvcSaveSecretsRequest](docs/SecretSvcSaveSecretsRequest.md)
 - [SecretSvcSecret](docs/SecretSvcSecret.md)
 - [SourceSvcCheckoutRepoRequest](docs/SourceSvcCheckoutRepoRequest.md)
 - [SourceSvcCheckoutRepoResponse](docs/SourceSvcCheckoutRepoResponse.md)
 - [SourceSvcErrorResponse](docs/SourceSvcErrorResponse.md)
 - [StableDiffusionTxt2ImgRequest](docs/StableDiffusionTxt2ImgRequest.md)
 - [UserSvcAddUserToOrganizationRequest](docs/UserSvcAddUserToOrganizationRequest.md)
 - [UserSvcAssignPermissionsRequest](docs/UserSvcAssignPermissionsRequest.md)
 - [UserSvcAuthToken](docs/UserSvcAuthToken.md)
 - [UserSvcChangePasswordAdminRequest](docs/UserSvcChangePasswordAdminRequest.md)
 - [UserSvcChangePasswordRequest](docs/UserSvcChangePasswordRequest.md)
 - [UserSvcContact](docs/UserSvcContact.md)
 - [UserSvcCreateOrganizationRequest](docs/UserSvcCreateOrganizationRequest.md)
 - [UserSvcCreateRoleRequest](docs/UserSvcCreateRoleRequest.md)
 - [UserSvcCreateRoleResponse](docs/UserSvcCreateRoleResponse.md)
 - [UserSvcCreateUserRequest](docs/UserSvcCreateUserRequest.md)
 - [UserSvcErrorResponse](docs/UserSvcErrorResponse.md)
 - [UserSvcGetPermissionsResponse](docs/UserSvcGetPermissionsResponse.md)
 - [UserSvcGetPublicKeyResponse](docs/UserSvcGetPublicKeyResponse.md)
 - [UserSvcGetRolesResponse](docs/UserSvcGetRolesResponse.md)
 - [UserSvcGetUsersRequest](docs/UserSvcGetUsersRequest.md)
 - [UserSvcGetUsersResponse](docs/UserSvcGetUsersResponse.md)
 - [UserSvcGrant](docs/UserSvcGrant.md)
 - [UserSvcIsAuthorizedRequest](docs/UserSvcIsAuthorizedRequest.md)
 - [UserSvcIsAuthorizedResponse](docs/UserSvcIsAuthorizedResponse.md)
 - [UserSvcListGrantsRequest](docs/UserSvcListGrantsRequest.md)
 - [UserSvcListGrantsResponse](docs/UserSvcListGrantsResponse.md)
 - [UserSvcLoginRequest](docs/UserSvcLoginRequest.md)
 - [UserSvcLoginResponse](docs/UserSvcLoginResponse.md)
 - [UserSvcOrganization](docs/UserSvcOrganization.md)
 - [UserSvcPermission](docs/UserSvcPermission.md)
 - [UserSvcPermissionLink](docs/UserSvcPermissionLink.md)
 - [UserSvcReadUserByTokenResponse](docs/UserSvcReadUserByTokenResponse.md)
 - [UserSvcRegisterRequest](docs/UserSvcRegisterRequest.md)
 - [UserSvcRegisterResponse](docs/UserSvcRegisterResponse.md)
 - [UserSvcRole](docs/UserSvcRole.md)
 - [UserSvcSaveGrantsRequest](docs/UserSvcSaveGrantsRequest.md)
 - [UserSvcSavePermissionsRequest](docs/UserSvcSavePermissionsRequest.md)
 - [UserSvcSavePermissionsResponse](docs/UserSvcSavePermissionsResponse.md)
 - [UserSvcSaveProfileRequest](docs/UserSvcSaveProfileRequest.md)
 - [UserSvcSetRolePermissionsRequest](docs/UserSvcSetRolePermissionsRequest.md)
 - [UserSvcUser](docs/UserSvcUser.md)


## Documentation For Authorization


Authentication schemes defined for the API:
### BearerAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

Note, each API key must be added to a map of `map[string]APIKey` where the key is: Authorization and passed in as the auth context for each request.

Example

```go
auth := context.WithValue(
		context.Background(),
		openapi.ContextAPIKeys,
		map[string]openapi.APIKey{
			"Authorization": {Key: "API_KEY_STRING"},
		},
	)
r, err := client.Service.Operation(auth, args)
```


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author

sales@singulatron.com

