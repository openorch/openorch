"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[5026],{34933:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(74848),t=n(28453);const r={sidebar_position:40,tags:["registry-service","registry","microservices","addresses","authentication"]},o="Registry Svc",c={id:"built-in-services/registry-svc",title:"Registry Svc",description:"The registry service is designed to maintain a database of services, service instances and nodes.",source:"@site/docs/built-in-services/registry-svc.md",sourceDirName:"built-in-services",slug:"/built-in-services/registry-svc",permalink:"/docs/built-in-services/registry-svc",draft:!1,unlisted:!1,editUrl:"https://github.com/openorch/openorch/tree/main/docs-source/docs/built-in-services/registry-svc.md",tags:[{inline:!0,label:"registry-service",permalink:"/docs/tags/registry-service"},{inline:!0,label:"registry",permalink:"/docs/tags/registry"},{inline:!0,label:"microservices",permalink:"/docs/tags/microservices"},{inline:!0,label:"addresses",permalink:"/docs/tags/addresses"},{inline:!0,label:"authentication",permalink:"/docs/tags/authentication"}],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,tags:["registry-service","registry","microservices","addresses","authentication"]},sidebar:"tutorialSidebar",previous:{title:"Config Svc",permalink:"/docs/built-in-services/config-svc"},next:{title:"Deploy Svc",permalink:"/docs/built-in-services/deploy-svc"}},a={},d=[{value:"Entities",id:"entities",level:2},{value:"Definition",id:"definition",level:3},{value:"Container based definition",id:"container-based-definition",level:4},{value:"Notes",id:"notes",level:4},{value:"Source code based definition",id:"source-code-based-definition",level:4},{value:"Instance",id:"instance",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Node",id:"node",level:3},{value:"How It Works",id:"how-it-works",level:2}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"registry-svc",children:"Registry Svc"}),"\n",(0,s.jsx)(i.p,{children:"The registry service is designed to maintain a database of services, service instances and nodes."}),"\n",(0,s.jsx)(i.p,{children:"Its responsibilities include gathering information about:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Nodes: each OpenOrch server registers itself as a node, which roughly correlates to a physical machine"}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["This page is a high level overview of the ",(0,s.jsx)(i.code,{children:"Registry Svc"}),". For more details, please see the ",(0,s.jsx)(i.a,{href:"/docs/openorch/register-instance",children:"Registry Svc API documentation"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"entities",children:"Entities"}),"\n",(0,s.jsx)(i.h3,{id:"definition",children:"Definition"}),"\n",(0,s.jsxs)(i.p,{children:["A ",(0,s.jsx)(i.code,{children:"Definition"})," or service definition consists of the following things:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"An ID"}),"\n",(0,s.jsx)(i.li,{children:"A container image to run and some additional information like the internal port exposed etc."}),"\n",(0,s.jsx)(i.li,{children:"A set of endpoint definitions (OpenAPI etc.)"}),"\n",(0,s.jsx)(i.li,{children:"The URL of different clients (JS, Go etc.)"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["A ",(0,s.jsx)(i.code,{children:"Definition"})," is an abstract concept that can not be called. For a callable entity look at ",(0,s.jsx)(i.code,{children:"Instance"}),"s. Definitions are basically things you can deploy as an instance with a deployment."]}),"\n",(0,s.jsx)(i.h4,{id:"container-based-definition",children:"Container based definition"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"id: test-a\nimage:\n  name: hashicorp/http-echo\n  port: 8080\nhostPort: 8887\n"})}),"\n",(0,s.jsx)(i.h4,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(i.p,{children:"HostPorts are a temporary requirement until support for dynamic port assignment lands."}),"\n",(0,s.jsx)(i.h4,{id:"source-code-based-definition",children:"Source code based definition"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-yaml",children:"id: test-b\nrepository:\n  url: https://github.com/openorch/openorch.git\n  containerFile: server/docker/Dockerfile\nhostPort: 9998\n"})}),"\n",(0,s.jsx)(i.h3,{id:"instance",children:"Instance"}),"\n",(0,s.jsxs)(i.p,{children:["A ",(0,s.jsx)(i.code,{children:"Instance"})," or a service instance is an actual running, callable instance of a ",(0,s.jsx)(i.code,{children:"Definition"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["A ",(0,s.jsx)(i.code,{children:"Instance"})," consists of the following things:"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Address information that can be used to internally address the ",(0,s.jsx)(i.code,{children:"Instance"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"A Deployment ID."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"deployment",children:"Deployment"}),"\n",(0,s.jsxs)(i.p,{children:["Definitions become instances through the ",(0,s.jsx)(i.a,{href:"/docs/built-in-services/deploy-svc",children:"Deployment entity of the Deploy Service"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"node",children:"Node"}),"\n",(0,s.jsxs)(i.p,{children:["A ",(0,s.jsx)(i.code,{children:"Node"})," is a physical or virtual machine that runs a OpenOrch daemon. The daemon can then lauch service instances or other processes such as containers on these machines."]}),"\n",(0,s.jsx)(i.p,{children:"Maintaining a list of nodes is important so the daemon can efficiently distribute workload across the nodes."}),"\n",(0,s.jsx)(i.h2,{id:"how-it-works",children:"How It Works"}),"\n",(0,s.jsx)(i.p,{children:"The registry is needed when you want to call services not included in the OpenOrch daemon. You can think of the daemon as the standard library and services in the registry as third party libraries."}),"\n",(0,s.jsx)(i.p,{children:"When you want to call a service, you can ask the registry to provide you with a list of instance addresses for a service by service slug. Then you can use any of those instance addresses to make a call."}),"\n",(0,s.jsx)(i.p,{children:"Things like load balancing should be done on the client side at the moment, the damon does not provide a Proxy Svc yet."})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}}}]);