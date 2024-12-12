export * from './chatSvcApi';
import { ChatSvcApi } from './chatSvcApi';
export * from './configSvcApi';
import { ConfigSvcApi } from './configSvcApi';
export * from './deploySvcApi';
import { DeploySvcApi } from './deploySvcApi';
export * from './dockerSvcApi';
import { DockerSvcApi } from './dockerSvcApi';
export * from './downloadSvcApi';
import { DownloadSvcApi } from './downloadSvcApi';
export * from './dynamicSvcApi';
import { DynamicSvcApi } from './dynamicSvcApi';
export * from './emailSvcApi';
import { EmailSvcApi } from './emailSvcApi';
export * from './firehoseSvcApi';
import { FirehoseSvcApi } from './firehoseSvcApi';
export * from './modelSvcApi';
import { ModelSvcApi } from './modelSvcApi';
export * from './policySvcApi';
import { PolicySvcApi } from './policySvcApi';
export * from './promptSvcApi';
import { PromptSvcApi } from './promptSvcApi';
export * from './registrySvcApi';
import { RegistrySvcApi } from './registrySvcApi';
export * from './secretSvcApi';
import { SecretSvcApi } from './secretSvcApi';
export * from './sourceSvcApi';
import { SourceSvcApi } from './sourceSvcApi';
export * from './userSvcApi';
import { UserSvcApi } from './userSvcApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ChatSvcApi, ConfigSvcApi, DeploySvcApi, DockerSvcApi, DownloadSvcApi, DynamicSvcApi, EmailSvcApi, FirehoseSvcApi, ModelSvcApi, PolicySvcApi, PromptSvcApi, RegistrySvcApi, SecretSvcApi, SourceSvcApi, UserSvcApi];
