"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[5202],{6789:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>v,contentTitle:()=>_,default:()=>L,frontMatter:()=>f,metadata:()=>b,toc:()=>N});var n=a(74848),l=a(28453),i=a(91366),r=a.n(i),t=(a(6050),a(57742)),d=a.n(t),c=(a(67792),a(27362)),o=a.n(c),m=(a(36683),a(81124)),h=a.n(m),p=a(60674),x=a.n(p),j=a(23397),u=a.n(j),g=(a(26651),a(51107)),y=(a(77675),a(19365));const f={id:"get",title:"Get",description:"Fetch the current configuration from the server",sidebar_label:"Get",hide_title:!0,hide_table_of_contents:!0,api:"eJylVdtu40YM/ZUBHxeK5E26QKGnei8JDKTdIHaAFtk80BIlzXY0M8uZsdc1/O8FJTs3B4t0qxdJHPKQPLzMFmoKFWsftbNQwjnFqlOxI1UlZrJRVc42uk2MoqEadv1wHIhXxJAB07dEIb539QbKLVTORrJRPtF7o6vBrvgaBH4LoeqoR/mKG09Qglt+pSrCbrfLnoVyQVF9GJyr69HH3ptmqqGMnGgnguCdDRQE83QykddTnA8vJsIUWdOKahVSVVEITTJmA9nrE/DsPHHUo+sR/ViO3h8LjWtbbduPOuDSSDL3dCydM4QWhI5nDGVQa6YqOt48MgiRtW2HU7e2xmF97O5wcu5MTfyC8UvOdLhONuqeZjZENPswn1L7Ri06HVRjsFU16xUFharX1rG6+VM1hDExlV/sl6jeKN0MjZMCseowKOui0gfs4YhHh2pNKnRurdCq2R/zxfTycg+xTDE6m8n7CA4NE9abH0Puce4dqPlier241xrx81ELsqOiZNC7mswL1R977Hc5ndWvYvhVEpH9Mnl7zPyNxRQ7x/ofqv9L0z4PSxy8e2lqZjYSWzRqPgy6+sTs+P95kvywDVDewn6uBVtXBHcZ9BQ7V0MJ3g2D7jF2UEIxzlXRkgjHpSMIW0hs5LwwrkLTuRDLd7+enr2F3Z3oVYl13MwlmrFC7zHoapoE9D62LkYvqIOW1Fl0hjpIOtcPi+3Td+y9ISi3Mhi2cYdNh9XABPWoJZqAhsJvQds2GYzsbF65HjKwOOBPr2Zqnrx3LMmMCUgMZVGE5Im9wdg47nPUBRztw+tkFdpa1bQi47wKZJoTSZxqNZ0p9D7k6i+XWHl2LWPfy3JR2p50LgVSF1eLXC06UueaaYmBVON4GBKxbimHDIyuyAZJ9D7mi6tLtTrLJ08iDmVRrNfrvLUpd9wWe7tQYOvNyVk+ybvYG8khEvfhc3Oo9EPCa2xb4ly7YlApZNx0FJJh/kAgZCAVHxmY5KcCKR3So30U5MXQHU/oenQT/cSltm+QSN9j4Q3qYfaH9Lf7zrw9bPwMpDfvMpBSiHy7FXJv2Ox2Iv6WSBb27V0GK2QtNZG/XQYd4bCOb7fwN23kphojPlmId1E3SaI4mrNddrCYVhX5+EPdx7N19Xm+gAyW+7talhmUwLiWmxXXUAJk4AYGh6EZZFswaNuEreiOmPL8C6853Jo=",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},_=void 0,b={id:"singulatron/get",title:"Get",description:"Fetch the current configuration from the server",source:"@site/docs/singulatron/get.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/get",permalink:"/docs/singulatron/get",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get",title:"Get",description:"Fetch the current configuration from the server",sidebar_label:"Get",hide_title:!0,hide_table_of_contents:!0,api:"eJylVdtu40YM/ZUBHxeK5E26QKGnei8JDKTdIHaAFtk80BIlzXY0M8uZsdc1/O8FJTs3B4t0qxdJHPKQPLzMFmoKFWsftbNQwjnFqlOxI1UlZrJRVc42uk2MoqEadv1wHIhXxJAB07dEIb539QbKLVTORrJRPtF7o6vBrvgaBH4LoeqoR/mKG09Qglt+pSrCbrfLnoVyQVF9GJyr69HH3ptmqqGMnGgnguCdDRQE83QykddTnA8vJsIUWdOKahVSVVEITTJmA9nrE/DsPHHUo+sR/ViO3h8LjWtbbduPOuDSSDL3dCydM4QWhI5nDGVQa6YqOt48MgiRtW2HU7e2xmF97O5wcu5MTfyC8UvOdLhONuqeZjZENPswn1L7Ri06HVRjsFU16xUFharX1rG6+VM1hDExlV/sl6jeKN0MjZMCseowKOui0gfs4YhHh2pNKnRurdCq2R/zxfTycg+xTDE6m8n7CA4NE9abH0Puce4dqPlier241xrx81ELsqOiZNC7mswL1R977Hc5ndWvYvhVEpH9Mnl7zPyNxRQ7x/ofqv9L0z4PSxy8e2lqZjYSWzRqPgy6+sTs+P95kvywDVDewn6uBVtXBHcZ9BQ7V0MJ3g2D7jF2UEIxzlXRkgjHpSMIW0hs5LwwrkLTuRDLd7+enr2F3Z3oVYl13MwlmrFC7zHoapoE9D62LkYvqIOW1Fl0hjpIOtcPi+3Td+y9ISi3Mhi2cYdNh9XABPWoJZqAhsJvQds2GYzsbF65HjKwOOBPr2Zqnrx3LMmMCUgMZVGE5Im9wdg47nPUBRztw+tkFdpa1bQi47wKZJoTSZxqNZ0p9D7k6i+XWHl2LWPfy3JR2p50LgVSF1eLXC06UueaaYmBVON4GBKxbimHDIyuyAZJ9D7mi6tLtTrLJ08iDmVRrNfrvLUpd9wWe7tQYOvNyVk+ybvYG8khEvfhc3Oo9EPCa2xb4ly7YlApZNx0FJJh/kAgZCAVHxmY5KcCKR3So30U5MXQHU/oenQT/cSltm+QSN9j4Q3qYfaH9Lf7zrw9bPwMpDfvMpBSiHy7FXJv2Ox2Iv6WSBb27V0GK2QtNZG/XQYd4bCOb7fwN23kphojPlmId1E3SaI4mrNddrCYVhX5+EPdx7N19Xm+gAyW+7talhmUwLiWmxXXUAJk4AYGh6EZZFswaNuEreiOmPL8C6853Jo=",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Threads",permalink:"/docs/singulatron/get-threads"},next:{title:"Save",permalink:"/docs/singulatron/save"}},v={},N=[];function w(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get"}),"\n",(0,n.jsx)(d(),{method:"post",path:"/config/get"}),"\n",(0,n.jsx)(s.p,{children:"Fetch the current configuration from the server"}),"\n",(0,n.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(o(),{className:"openapi-tabs__mime",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(s.p,{children:"Body"})}),(0,n.jsx)("strong",{className:"openapi-schema__required",children:(0,n.jsx)(s.p,{children:"required"})})]}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,n.jsx)(s.p,{children:"Get Config Request"})})}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"object"})})})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(y.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Current configuration retrieved successfully"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"config"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"app"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"loggingDisabled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})})]})}),(0,n.jsx)(x(),{collapsible:!1,name:"directory",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"download"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"downloadFolder",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(x(),{collapsible:!1,name:"isRuntimeInstalled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"* This flag drives a minor UX feature:\n\t * if the user has not installed the runtime we show an INSTALL\n\t * button, but if the user has already installed the runtime we show\n\t * we show a START runtime button.\n\t *",type:"boolean"}}),(0,n.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"model"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsx)("div",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"currentModelId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})})]})]})})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(h(),{responseExample:'{\n  "config": {\n    "app": {\n      "loggingDisabled": true\n    },\n    "directory": "string",\n    "download": {\n      "downloadFolder": "string"\n    },\n    "isRuntimeInstalled": true,\n    "model": {\n      "currentModelId": "string"\n    }\n  }\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(u(),{className:"openapi-tabs__schema",children:(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,n.jsxs)(y.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(u(),{className:"openapi-tabs__schema",children:(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function L(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}}}]);