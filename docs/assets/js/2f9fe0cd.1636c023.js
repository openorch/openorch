"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4976],{787966:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=s(474848),o=s(28453);const r={sidebar_position:3,tags:["test"]},t="Backend Environment Variables",c={id:"building-applications/backend-environment-variables",title:"Backend Environment Variables",description:"OPENORCHGPUPLATFORM",source:"@site/docs/building-applications/backend-environment-variables.md",sourceDirName:"building-applications",slug:"/building-applications/backend-environment-variables",permalink:"/docs/building-applications/backend-environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/openorch/openorch/tree/main/docs-source/docs/building-applications/backend-environment-variables.md",tags:[{inline:!0,label:"test",permalink:"/docs/tags/test"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,tags:["test"]},sidebar:"tutorialSidebar",previous:{title:"Building Applications",permalink:"/docs/category/building-applications"},next:{title:"Services",permalink:"/docs/category/services"}},a={},l=[{value:"<code>OPENORCH_GPU_PLATFORM</code>",id:"openorch_gpu_platform",level:2},{value:"<code>OPENORCH_VOLUME_NAME</code>",id:"openorch_volume_name",level:2},{value:"<code>OPENORCH_LLM_HOST</code>",id:"openorch_llm_host",level:2},{value:"<code>OPENORCH_ADDRESS</code>",id:"openorch_address",level:2},{value:"<code>OPENORCH_DB</code>",id:"openorch_db",level:2},{value:"PostgreSQL",id:"postgresql",level:3},{value:"<code>SINGULARON_LOCAL_STORAGE_PATH</code>",id:"singularon_local_storage_path",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"backend-environment-variables",children:"Backend Environment Variables"}),"\n",(0,i.jsx)(n.h2,{id:"openorch_gpu_platform",children:(0,i.jsx)(n.code,{children:"OPENORCH_GPU_PLATFORM"})}),"\n",(0,i.jsx)(n.p,{children:"This envar is used to enabel GPU acceleration.\nSupported platforms:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cuda"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Do not set this if your card doesn't support the given architecture or things will break."}),"\n",(0,i.jsx)(n.h2,{id:"openorch_volume_name",children:(0,i.jsx)(n.code,{children:"OPENORCH_VOLUME_NAME"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["This flag is typically unnecessary since OpenOrch automatically detects the volume that is bound to ",(0,i.jsx)(n.code,{children:"/root/.openorch"}),". Use it only as a corrective action."]})}),"\n",(0,i.jsx)(n.p,{children:"This envar is needed when OpenOrch runs as a container next to containers it starts:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Host\n |\n |-> OpenOrch Container\n |-> Container Launched By OpenOrch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["For the containers like ",(0,i.jsx)(n.code,{children:"llama-cpp"})," to be able to read the models downloaded by OpenOrch we they must both mount the same docker volume."]}),"\n",(0,i.jsxs)(n.p,{children:["An example of this can be seen in the root ",(0,i.jsx)(n.code,{children:"docker-compose.yaml"})," file: ",(0,i.jsx)(n.code,{children:"OPENORCH_VOLUME_NAME=singulatron-data"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"So cycle goes like this:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["OpenOrch container writes to ",(0,i.jsx)(n.code,{children:"/root/.openorch"}),", which is mounted to the volume ",(0,i.jsx)(n.code,{children:"singulatron-data"})]}),"\n",(0,i.jsxs)(n.li,{children:["Assets (which are basically downloaded files) will be passed to containers created by OpenOrch by mounting files in ",(0,i.jsx)(n.code,{children:"singulatron-data"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"openorch_llm_host",children:(0,i.jsx)(n.code,{children:"OPENORCH_LLM_HOST"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"This flag is typically unnecessary since OpenOrch retrieves the IP of the Docker bridge. Use it only as a corrective action."})}),"\n",(0,i.jsx)(n.p,{children:"When OpenOrch is running in a container, it needs to know how to address its siblings (other containers it started):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Host\n |\n |-> OpenOrch Container\n |-> Container Launched By OpenOrch\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"OpenOrch Container"})," uses the envar ",(0,i.jsx)(n.code,{children:"OPENORCH_LLM_HOST"})," to address ",(0,i.jsx)(n.code,{children:"Container Launched By OpenOrch"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Typically this value should be ",(0,i.jsx)(n.code,{children:"172.17.0.1"})," if you are using the default docker network."]}),"\n",(0,i.jsxs)(n.p,{children:["If you are using an other network than default, use ",(0,i.jsx)(n.code,{children:"docker network inspect"})," to find out the IP of your docker bridge for that network.\nUsually it's going to be ",(0,i.jsx)(n.code,{children:"172.18.0.1"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"This envar is not needed if OpenOrch runs directly on the host:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"Host With OpenOrch\n |\n |-> Container Launched By OpenOrch\n"})}),"\n",(0,i.jsx)(n.h2,{id:"openorch_address",children:(0,i.jsx)(n.code,{children:"OPENORCH_ADDRESS"})}),"\n",(0,i.jsxs)(n.p,{children:["This envar is used in by the ",(0,i.jsx)(n.code,{children:"Registry Svc"})," to register the node. It should be an at least internally resolving address so the nodes can talk to each other."]}),"\n",(0,i.jsx)(n.h2,{id:"openorch_db",children:(0,i.jsx)(n.code,{children:"OPENORCH_DB"})}),"\n",(0,i.jsx)(n.p,{children:"You can use this envar to make OpenOrch actually use a database instead of local file storage to store data."}),"\n",(0,i.jsx)(n.h3,{id:"postgresql",children:"PostgreSQL"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'OPENORCH_DB=postgres\nOPENORCH_DB_SQL_CONNECTION_STRING="postgres://postgres:mysecretpassword@localhost:5432/mydatabase?sslmode=disable"\n'})}),"\n",(0,i.jsx)(n.p,{children:"Naturally, you should change the details of the connection string to reflect your environment."}),"\n",(0,i.jsx)(n.h2,{id:"singularon_local_storage_path",children:(0,i.jsx)(n.code,{children:"SINGULARON_LOCAL_STORAGE_PATH"})}),"\n",(0,i.jsxs)(n.p,{children:["By default the local file storage will place files into ",(0,i.jsx)(n.code,{children:"~/.openorch/data"}),", but this flag (and other config options) can override that."]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);