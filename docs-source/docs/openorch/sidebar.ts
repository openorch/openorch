import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "openorch/openorch",
    },
    {
      type: "category",
      label: "Chat Svc",
      items: [
        {
          type: "doc",
          id: "openorch/events",
          label: "Events",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/delete-message",
          label: "Delete a Message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/add-thread",
          label: "Add Thread",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/delete-thread",
          label: "Delete a Thread",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/get-thread",
          label: "Get Thread",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/update-thread",
          label: "Update Thread",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/add-message",
          label: "Add Message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/get-messages",
          label: "List Messages",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/get-threads",
          label: "Get Threads",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Config Svc",
      items: [
        {
          type: "doc",
          id: "openorch/get-config",
          label: "Get Config",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/save-config",
          label: "Save Config",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Deploy Svc",
      items: [
        {
          type: "doc",
          id: "openorch/delete-deployment",
          label: "Delete Deployment",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/save-deployment",
          label: "Save Deployment",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/list-deployments",
          label: "List Deployments",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Docker Svc",
      items: [
        {
          type: "doc",
          id: "openorch/run-container",
          label: "Run a Container",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/container-is-running",
          label: "Check If a Container Is Running",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/stop-container",
          label: "Stop a Container",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/container-summary",
          label: "Get Container Summary",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/get-host",
          label: "Get Docker Host",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/build-image",
          label: "Build an Image",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/get-info",
          label: "Get Docker Service Information",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Download Svc",
      items: [
        {
          type: "doc",
          id: "openorch/download",
          label: "Download a File",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/get-download",
          label: "Get a Download",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/pause",
          label: "Pause a Download",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/list-downloads",
          label: "List Downloads",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Dynamic Svc",
      items: [
        {
          type: "doc",
          id: "openorch/create-object",
          label: "Create a Generic Object",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/upsert-object",
          label: "Upsert a Generic Object",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/query",
          label: "Query Objects",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/delete-objects",
          label: "Delete a Generic Object",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/update-objects",
          label: "Update Objects",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Firehose Svc",
      items: [
        {
          type: "doc",
          id: "openorch/publish-event",
          label: "Publish an Event",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/subscribe-to-events",
          label: "Subscribe to the Event Stream",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Model Svc",
      items: [
        {
          type: "doc",
          id: "openorch/start-default-model",
          label: "Start the Default Model",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/get-default-model-status",
          label: "Get Default Model Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/get-model",
          label: "Get a Model",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/make-default",
          label: "Make a Model Default",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/start-model",
          label: "Start a Model",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/get-model-status",
          label: "Get Model Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/list-models",
          label: "List Models",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Policy Svc",
      items: [
        {
          type: "doc",
          id: "openorch/check",
          label: "Check",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/upsert-instance",
          label: "Upsert an Instance",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Prompt Svc",
      items: [
        {
          type: "doc",
          id: "openorch/add-prompt",
          label: "Add Prompt",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/list-prompts",
          label: "List Prompts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/subscribe-to-prompt-responses",
          label: "Subscribe to Prompt Responses by Thread",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/remove-prompt",
          label: "Remove Prompt",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Registry Svc",
      items: [
        {
          type: "doc",
          id: "openorch/save-definition",
          label: "Register a Definition",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/delete-definition",
          label: "Delete Definition",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/list-definitions",
          label: "List Definitions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/register-instance",
          label: "Register Instance",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/remove-instance",
          label: "Remove Instance",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/list-instances",
          label: "List Service Instances",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/delete-node",
          label: "Delete Node",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/list-nodes",
          label: "List Nodes",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Secret Svc",
      items: [
        {
          type: "doc",
          id: "openorch/read-secret",
          label: "Read Secret",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/write-secret",
          label: "Write Secret",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Source Svc",
      items: [
        {
          type: "doc",
          id: "openorch/checkout-repo",
          label: "Checkout a git repository",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "User Svc",
      items: [
        {
          type: "doc",
          id: "openorch/change-password",
          label: "Change User Password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/change-password-admin",
          label: "Change User Password (Admin)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/login",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/create-organization",
          label: "Create an Organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/add-user-to-organization",
          label: "Add a User to an Organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/remove-user-from-organization",
          label: "Remove a User from an Organization",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/upsert-permission",
          label: "Upsert a Permission",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/is-authorized",
          label: "Is Authorized",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/get-public-key",
          label: "Get Public Key",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/register",
          label: "Register",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/create-role",
          label: "Create a New Role",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/delete-role",
          label: "Delete a Role",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/add-permission-to-role",
          label: "Add Permission to Role",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/get-permissions-by-role",
          label: "Get Permissions by Role",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/set-role-permission",
          label: "Set Role Permissions",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/get-roles",
          label: "Get all Roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "openorch/save-self",
          label: "Save User Profile",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/create-user",
          label: "Create a New User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/delete-user",
          label: "Delete a User",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "openorch/save-user",
          label: "Save User",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "openorch/read-user-by-token",
          label: "Read User by Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "openorch/get-users",
          label: "List Users",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
