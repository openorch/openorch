"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7074],{37991:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>v,default:()=>q,frontMatter:()=>y,metadata:()=>b,toc:()=>_});var l=a(74848),n=a(28453),i=a(91366),r=a.n(i),t=(a(6050),a(57742)),o=a.n(t),d=(a(67792),a(27362)),c=a.n(d),p=(a(36683),a(81124)),m=a.n(p),h=a(60674),u=a.n(h),x=a(23397),j=a.n(x),g=(a(26651),a(51107)),f=(a(77675),a(19365));const y={id:"login",title:"Login",description:"Authenticates a user and returns a token.",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:"eJy9lVGPEzkMx79K5OfpTI8F6TRPLCd06rFiVxSelj64GXcayCTBybT0qvnuyJkWuuwcOnigLx05dmL/Yv9zhIaiZhOS8Q5quO7TllwyGhNFhaqPxApdo5hSz05MyX8kV0IBPhCjxC0aqMH61jgogOlTTzG98M0B6iNo7xK5JJ8YgpWNjXfVhyjHHSHqLXUoX4Flv2QonsNQ57B0CAQ1xMTGtTAUEDDGvedmcjHavp1YGIqzxa8/kE4wiOlh7TdSgXoz5n+qxDA1UCfuaRBDDN7FMcMn87n8TW0Re60pxk1vofhVAJnyBBcmTNRcT5NpyNJ/r5ppYl9PerTSh+YHh0lrLKa2nGA9QX8o4OkUwoXboTWN+md5+/rX8RGz5//ZB0MBz6YzScQOrVoS74jVy7zn70lJjNhGqO/hnYzgcqdhVUBHaetl2oLPLRowbaGGSu5iFne6Ok9hzClL/BF6tuJTWa/Rbn1M9bM/n1z9AcNK/HTPJh2WkvSY5wtCJhYheIzk7SGQen9yeQ9q4631e2rU+qBQxYCaslrknlKoxwFSG/adSltSuZYoPI0mNU4LuSZ445JIipFDtoQNCWiHHZ00ybP5N2OGr7QwmFd0yPwE/ZtvuvPyM3bB0gMdOeO+lI9vtlE1LmfFbfx3OkQdGgEZ0VJ8Ho1re4uJvSu17y6yvVuoZR+CZ7mgkf02pVBXVewDcbCYNp67Ek0FjzTo1s0CU2ciqeuFOvtmpp3R7OOILirSPh5iok6wWaPJxVzwOYu/727U7qqcP8gh1lW13+/L1vWl57Y6xcUK22BnV+W83KbOZlEg7uLt5nRTFyXssW2JS+Or7FLJfZgksGF5WR4UIA04VjUvr8r5jHX5NOu3j6lDd5HtzalrH7C4eDt+6lk6tUeiz6kKFo3LYiUMjqd5uYfzvAi7fPaqAJkMWTse1xjpHdthEPOnnvgA9f2qgB2ywbXUer8ainOfyoh9pAPU8NeY70ymROpH24+N+p1IDMU54lprCumHvpdTf3e7fAsFrE9va+cbiWHcy2uFe6ghP8sSnUc5245g0bU9tuI77im/L+SAwbQ=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},v=void 0,b={id:"superplatform/login",title:"Login",description:"Authenticates a user and returns a token.",source:"@site/docs/superplatform/login.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/login",permalink:"/docs/superplatform/login",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"login",title:"Login",description:"Authenticates a user and returns a token.",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:"eJy9lVGPEzkMx79K5OfpTI8F6TRPLCd06rFiVxSelj64GXcayCTBybT0qvnuyJkWuuwcOnigLx05dmL/Yv9zhIaiZhOS8Q5quO7TllwyGhNFhaqPxApdo5hSz05MyX8kV0IBPhCjxC0aqMH61jgogOlTTzG98M0B6iNo7xK5JJ8YgpWNjXfVhyjHHSHqLXUoX4Flv2QonsNQ57B0CAQ1xMTGtTAUEDDGvedmcjHavp1YGIqzxa8/kE4wiOlh7TdSgXoz5n+qxDA1UCfuaRBDDN7FMcMn87n8TW0Re60pxk1vofhVAJnyBBcmTNRcT5NpyNJ/r5ppYl9PerTSh+YHh0lrLKa2nGA9QX8o4OkUwoXboTWN+md5+/rX8RGz5//ZB0MBz6YzScQOrVoS74jVy7zn70lJjNhGqO/hnYzgcqdhVUBHaetl2oLPLRowbaGGSu5iFne6Ok9hzClL/BF6tuJTWa/Rbn1M9bM/n1z9AcNK/HTPJh2WkvSY5wtCJhYheIzk7SGQen9yeQ9q4631e2rU+qBQxYCaslrknlKoxwFSG/adSltSuZYoPI0mNU4LuSZ445JIipFDtoQNCWiHHZ00ybP5N2OGr7QwmFd0yPwE/ZtvuvPyM3bB0gMdOeO+lI9vtlE1LmfFbfx3OkQdGgEZ0VJ8Ho1re4uJvSu17y6yvVuoZR+CZ7mgkf02pVBXVewDcbCYNp67Ek0FjzTo1s0CU2ciqeuFOvtmpp3R7OOILirSPh5iok6wWaPJxVzwOYu/727U7qqcP8gh1lW13+/L1vWl57Y6xcUK22BnV+W83KbOZlEg7uLt5nRTFyXssW2JS+Or7FLJfZgksGF5WR4UIA04VjUvr8r5jHX5NOu3j6lDd5HtzalrH7C4eDt+6lk6tUeiz6kKFo3LYiUMjqd5uYfzvAi7fPaqAJkMWTse1xjpHdthEPOnnvgA9f2qgB2ywbXUer8ainOfyoh9pAPU8NeY70ymROpH24+N+p1IDMU54lprCumHvpdTf3e7fAsFrE9va+cbiWHcy2uFe6ghP8sSnUc5245g0bU9tuI77im/L+SAwbQ=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Change User Password (Admin)",permalink:"/docs/superplatform/change-password-admin"},next:{title:"Create an Organization",permalink:"/docs/superplatform/create-organization"}},N={},_=[];function k(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Login"}),"\n",(0,l.jsx)(o(),{method:"post",path:"/user-svc/login"}),"\n",(0,l.jsx)(s.p,{children:"Authenticates a user and returns a token."}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(c(),{className:"openapi-tabs__mime",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"Login Request"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"slug",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(f.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Login successful"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"token"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"deletedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "token": {\n    "createdAt": "string",\n    "deletedAt": "string",\n    "id": "string",\n    "token": "string",\n    "updatedAt": "string",\n    "userId": "string"\n  }\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(k,{...e})}):k(e)}}}]);