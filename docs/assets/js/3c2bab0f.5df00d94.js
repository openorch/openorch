"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4402],{28082:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>E,contentTitle:()=>S,default:()=>V,frontMatter:()=>g,metadata:()=>N,toc:()=>_});var a=r(74848),n=r(28453),t=r(91366),i=r.n(t),l=(r(6050),r(57742)),o=r.n(l),p=(r(67792),r(27362)),d=r.n(p),c=r(36683),m=r.n(c),h=r(81124),u=r.n(h),j=r(60674),b=r.n(j),x=r(23397),f=r.n(x),v=(r(26651),r(51107)),y=(r(77675),r(19365));const g={id:"subscribe-to-prompt-responses",title:"Subscribe to Prompt Responses by Thread",description:"Subscribe to prompt responses by thread via Server-Sent Events (SSE)",sidebar_label:"Subscribe to Prompt Responses by Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU2P2zYQ/SvEnJKAlpxsixY6dYsuAqMpsljvnjY+0NRYYiORzJCy6wr678How9Y6u+0luVhfw5k3b94bt5Bj0GR8NM5CButmy49bFNEJT672URAG72zAILZHEUtClYu9UWKNtEdarNFGcbNHG4N4tV7fvAYJziMpTrnKIYMwJb13t33KuykjSPCKVI0RKUD22F7AuR+qrf4ACYZfeBVLkGBVjZDBAGaVgwTCL40hzCGL1KCEoEusFWQtxKPn2BDJ2AK6bsPBU/2shXfLJV8ueIiEqja2OHUPErSzEW3k6DfpG768XKXrJPz0XOa/TAicd8IuTgT8TwVPzGo0A2okcvRcYTm9cdu/UccTlLffQnmwqomlI/Mv5j+ueCchoG7IxGM/4d9REdJ1E0vIHjc8jqgKHj4M4hDrvYaNhBpj6Vg+BcZeJ3wA0kGUi7DX421I24nLLj1NNj2JDrg+K3UQWEMVp0krp1VVuhCzn399d/UWGMiEc819D63O0X6jzqNH8WkM+QRi56rKHTBnnygRvNIolM1FdJ/RCqUHhYoduVrEEsVDQBKBbWQ0ig+uMFagzb0zNiaT4ktUea+NUfPX48h6e8GJcOXNn3jsR2DszjFYnqfS/TyxVobbDqrC8Bvrr6lUJGcT7epZ7tuVWDfeO2LGB6bKGH2WpqHxSL5SceeoTpRJoZMXdHy0C09Ym4DieiWm2J6B2mhyYWg0CNQuHEPEmpusjEa2V9aeULy//SD2V8nyCYaQpenhcEgK2ySOinQ8F1JV+GpxlSyTMtYVo4pIdfi4G3mdtXBQRYGUGJf2ISmzZ2KF/d6btQcSWC5DV8vkKlkuSCe/cG7vQqyVnaF9sjFHBd/NN+aww+CCrfZst++1dEclRPwnpr5SxjLgnsB2dM8jnN3Dlhr8AxKyJ5v0vJzPJtpIYLNwjrbdqoAPVHUdv/7SILGzNxL2iozaMqG8yU3g+xyynaoC/kf/r+7G5f1azBf+s/1McrdHnpKqGn4CCZ/xOP9D6DadnKzDYIbP11qjj7ODvOe6+a55f3MPEtRo97O3+LycbjjhszguvTlU5d9OvnCkbQfndt0pfvj04onTQhiimZZN13VfAdpjqms=",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},S=void 0,N={id:"superplatform/subscribe-to-prompt-responses",title:"Subscribe to Prompt Responses by Thread",description:"Subscribe to prompt responses by thread via Server-Sent Events (SSE)",source:"@site/docs/superplatform/subscribe-to-prompt-responses.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/subscribe-to-prompt-responses",permalink:"/docs/superplatform/subscribe-to-prompt-responses",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"subscribe-to-prompt-responses",title:"Subscribe to Prompt Responses by Thread",description:"Subscribe to prompt responses by thread via Server-Sent Events (SSE)",sidebar_label:"Subscribe to Prompt Responses by Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VU2P2zYQ/SvEnJKAlpxsixY6dYsuAqMpsljvnjY+0NRYYiORzJCy6wr678How9Y6u+0luVhfw5k3b94bt5Bj0GR8NM5CButmy49bFNEJT672URAG72zAILZHEUtClYu9UWKNtEdarNFGcbNHG4N4tV7fvAYJziMpTrnKIYMwJb13t33KuykjSPCKVI0RKUD22F7AuR+qrf4ACYZfeBVLkGBVjZDBAGaVgwTCL40hzCGL1KCEoEusFWQtxKPn2BDJ2AK6bsPBU/2shXfLJV8ueIiEqja2OHUPErSzEW3k6DfpG768XKXrJPz0XOa/TAicd8IuTgT8TwVPzGo0A2okcvRcYTm9cdu/UccTlLffQnmwqomlI/Mv5j+ueCchoG7IxGM/4d9REdJ1E0vIHjc8jqgKHj4M4hDrvYaNhBpj6Vg+BcZeJ3wA0kGUi7DX421I24nLLj1NNj2JDrg+K3UQWEMVp0krp1VVuhCzn399d/UWGMiEc819D63O0X6jzqNH8WkM+QRi56rKHTBnnygRvNIolM1FdJ/RCqUHhYoduVrEEsVDQBKBbWQ0ig+uMFagzb0zNiaT4ktUea+NUfPX48h6e8GJcOXNn3jsR2DszjFYnqfS/TyxVobbDqrC8Bvrr6lUJGcT7epZ7tuVWDfeO2LGB6bKGH2WpqHxSL5SceeoTpRJoZMXdHy0C09Ym4DieiWm2J6B2mhyYWg0CNQuHEPEmpusjEa2V9aeULy//SD2V8nyCYaQpenhcEgK2ySOinQ8F1JV+GpxlSyTMtYVo4pIdfi4G3mdtXBQRYGUGJf2ISmzZ2KF/d6btQcSWC5DV8vkKlkuSCe/cG7vQqyVnaF9sjFHBd/NN+aww+CCrfZst++1dEclRPwnpr5SxjLgnsB2dM8jnN3Dlhr8AxKyJ5v0vJzPJtpIYLNwjrbdqoAPVHUdv/7SILGzNxL2iozaMqG8yU3g+xyynaoC/kf/r+7G5f1azBf+s/1McrdHnpKqGn4CCZ/xOP9D6DadnKzDYIbP11qjj7ODvOe6+a55f3MPEtRo97O3+LycbjjhszguvTlU5d9OvnCkbQfndt0pfvj04onTQhiimZZN13VfAdpjqms=",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"List Prompts",permalink:"/docs/superplatform/list-prompts"},next:{title:"Remove Prompt",permalink:"/docs/superplatform/remove-prompt"}},E={},_=[];function G(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:r}=s;return r||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Subscribe to Prompt Responses by Thread"}),"\n",(0,a.jsx)(o(),{method:"get",path:"/prompt-svc/prompts/{threadId}/responses/subscribe"}),"\n",(0,a.jsx)(s.p,{children:"Subscribe to prompt responses by thread via Server-Sent Events (SSE)"}),"\n",(0,a.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,a.jsxs)(r,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},children:(0,a.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,a.jsx)(s.p,{children:"Path Parameters"})})}),(0,a.jsx)("div",{children:(0,a.jsx)("ul",{children:(0,a.jsx)(m(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("div",{children:(0,a.jsxs)(i(),{label:void 0,id:void 0,children:[(0,a.jsxs)(y.default,{label:"200",value:"200",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Streaming response"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,a.jsx)(f(),{className:"openapi-tabs__schema",children:(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(r,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,a.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,a.jsxs)(y.default,{label:"400",value:"400",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Missing threadId parameter"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(r,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(b(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,a.jsxs)(y.default,{label:"401",value:"401",children:[(0,a.jsx)("div",{children:(0,a.jsx)(s.p,{children:"Unauthorized"})}),(0,a.jsx)("div",{children:(0,a.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,a.jsx)(y.default,{label:"*/*",value:"*/*",children:(0,a.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,a.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,a.jsxs)(r,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,a.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,a.jsx)("strong",{children:(0,a.jsx)(s.p,{children:"Schema"})})}),(0,a.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,a.jsx)(b(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,a.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,a.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function V(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(G,{...e})}):G(e)}}}]);