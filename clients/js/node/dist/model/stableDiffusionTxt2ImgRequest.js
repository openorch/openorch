/**
 * OpenOrch
 * A language-agnostic microservices framework for building AI applications.
 *
 * The version of the OpenAPI document: 0.3.0-rc.22
 * Contact: sales@singulatron.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export class StableDiffusionTxt2ImgRequest {
    static getAttributeTypeMap() {
        return StableDiffusionTxt2ImgRequest.attributeTypeMap;
    }
}
StableDiffusionTxt2ImgRequest.discriminator = undefined;
StableDiffusionTxt2ImgRequest.attributeTypeMap = [
    {
        "name": "alwaysonScripts",
        "baseName": "alwayson_scripts",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "batchSize",
        "baseName": "batch_size",
        "type": "number"
    },
    {
        "name": "cfgScale",
        "baseName": "cfg_scale",
        "type": "number"
    },
    {
        "name": "comments",
        "baseName": "comments",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "denoisingStrength",
        "baseName": "denoising_strength",
        "type": "number"
    },
    {
        "name": "disableExtraNetworks",
        "baseName": "disable_extra_networks",
        "type": "boolean"
    },
    {
        "name": "doNotSaveGrid",
        "baseName": "do_not_save_grid",
        "type": "boolean"
    },
    {
        "name": "doNotSaveSamples",
        "baseName": "do_not_save_samples",
        "type": "boolean"
    },
    {
        "name": "enableHr",
        "baseName": "enable_hr",
        "type": "boolean"
    },
    {
        "name": "eta",
        "baseName": "eta",
        "type": "number"
    },
    {
        "name": "firstpassImage",
        "baseName": "firstpass_image",
        "type": "string"
    },
    {
        "name": "firstphaseHeight",
        "baseName": "firstphase_height",
        "type": "number"
    },
    {
        "name": "firstphaseWidth",
        "baseName": "firstphase_width",
        "type": "number"
    },
    {
        "name": "forceTaskId",
        "baseName": "force_task_id",
        "type": "string"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "number"
    },
    {
        "name": "hrCheckpointName",
        "baseName": "hr_checkpoint_name",
        "type": "string"
    },
    {
        "name": "hrNegativePrompt",
        "baseName": "hr_negative_prompt",
        "type": "string"
    },
    {
        "name": "hrPrompt",
        "baseName": "hr_prompt",
        "type": "string"
    },
    {
        "name": "hrResizeX",
        "baseName": "hr_resize_x",
        "type": "number"
    },
    {
        "name": "hrResizeY",
        "baseName": "hr_resize_y",
        "type": "number"
    },
    {
        "name": "hrSamplerName",
        "baseName": "hr_sampler_name",
        "type": "string"
    },
    {
        "name": "hrScale",
        "baseName": "hr_scale",
        "type": "number"
    },
    {
        "name": "hrScheduler",
        "baseName": "hr_scheduler",
        "type": "string"
    },
    {
        "name": "hrSecondPassSteps",
        "baseName": "hr_second_pass_steps",
        "type": "number"
    },
    {
        "name": "hrUpscaler",
        "baseName": "hr_upscaler",
        "type": "string"
    },
    {
        "name": "infotext",
        "baseName": "infotext",
        "type": "string"
    },
    {
        "name": "nIter",
        "baseName": "n_iter",
        "type": "number"
    },
    {
        "name": "negativePrompt",
        "baseName": "negative_prompt",
        "type": "string"
    },
    {
        "name": "overrideSettings",
        "baseName": "override_settings",
        "type": "{ [key: string]: string; }"
    },
    {
        "name": "overrideSettingsRestoreAfterwards",
        "baseName": "override_settings_restore_afterwards",
        "type": "boolean"
    },
    {
        "name": "prompt",
        "baseName": "prompt",
        "type": "string"
    },
    {
        "name": "refinerCheckpoint",
        "baseName": "refiner_checkpoint",
        "type": "string"
    },
    {
        "name": "refinerSwitchAt",
        "baseName": "refiner_switch_at",
        "type": "number"
    },
    {
        "name": "restoreFaces",
        "baseName": "restore_faces",
        "type": "boolean"
    },
    {
        "name": "sChurn",
        "baseName": "s_churn",
        "type": "number"
    },
    {
        "name": "sMinUncond",
        "baseName": "s_min_uncond",
        "type": "number"
    },
    {
        "name": "sNoise",
        "baseName": "s_noise",
        "type": "number"
    },
    {
        "name": "sTmax",
        "baseName": "s_tmax",
        "type": "number"
    },
    {
        "name": "sTmin",
        "baseName": "s_tmin",
        "type": "number"
    },
    {
        "name": "samplerIndex",
        "baseName": "sampler_index",
        "type": "string"
    },
    {
        "name": "samplerName",
        "baseName": "sampler_name",
        "type": "string"
    },
    {
        "name": "saveImages",
        "baseName": "save_images",
        "type": "boolean"
    },
    {
        "name": "scheduler",
        "baseName": "scheduler",
        "type": "string"
    },
    {
        "name": "scriptArgs",
        "baseName": "script_args",
        "type": "Array<string>"
    },
    {
        "name": "scriptName",
        "baseName": "script_name",
        "type": "string"
    },
    {
        "name": "seed",
        "baseName": "seed",
        "type": "number"
    },
    {
        "name": "seedResizeFromH",
        "baseName": "seed_resize_from_h",
        "type": "number"
    },
    {
        "name": "seedResizeFromW",
        "baseName": "seed_resize_from_w",
        "type": "number"
    },
    {
        "name": "sendImages",
        "baseName": "send_images",
        "type": "boolean"
    },
    {
        "name": "steps",
        "baseName": "steps",
        "type": "number"
    },
    {
        "name": "styles",
        "baseName": "styles",
        "type": "Array<string>"
    },
    {
        "name": "subseed",
        "baseName": "subseed",
        "type": "number"
    },
    {
        "name": "subseedStrength",
        "baseName": "subseed_strength",
        "type": "number"
    },
    {
        "name": "tiling",
        "baseName": "tiling",
        "type": "boolean"
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number"
    }
];
