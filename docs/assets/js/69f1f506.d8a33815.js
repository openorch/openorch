"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2078],{38547:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>v,default:()=>k,frontMatter:()=>y,metadata:()=>b,toc:()=>N});var l=a(74848),i=a(28453),r=a(91366),n=a.n(r),t=(a(6050),a(57742)),c=a.n(t),d=(a(67792),a(27362)),m=a.n(d),o=(a(36683),a(81124)),p=a.n(o),h=a(60674),u=a.n(h),j=a(23397),x=a.n(j),g=(a(26651),a(51107)),f=(a(77675),a(19365));const y={id:"create-a-new-user",title:"Create a New User",description:"Allows an authenticated administrator to create a new user with specified details.",sidebar_label:"Create a New User",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VsGO2zYQ/RVizrLk7DZAoVOdYJtuUWQXa+dQGD6MpbHEhCIZkrLiGv73Yih7JcdOmwBJdBKHw+Hjm5lH7qEkXzhpgzQacpgpZTovUAtsQ006yAIDlQLLRmrpg8NgnAhGFI4wkEChqROtJyc6GWrhLRVyI6kUJQWUyqeQgKOPLfnwypQ7yPdQGB1IB/5FaxXvII3O3ntGsAdf1NQg/1lnLLkgyccRet8ZV/J/2FmCHHxwUldwSMAZRfdl9JOBGn/V6WhA53DHY4Z9uQ8ffGE+kP7meD0n5Sxc9S5J0ZdnqUGpeOY8H3dsFsZFijU2BMnlWnmdE+nn5LayoNHs2hhFqHk6Rru27kT0H+jr70i2Lb9IzuBu1u+pCFctkcIxN6/7EnzHxffUl9ix2KSjEvLgWmK05K3Rvk/uzXR6SXKMcEye8G1RkPebVqkdJF9frBdwDwn8cm23e71FJUvx5/zh7bdscF6l5JxxX0dlj+TFlXNrrnXj5D9U/jQkL69zEri8leCKJSfuYsyfA4mNWHnIl30hnJpmlUBDoTYl5GBNrC2LoYYcMm7Gie/94gAS8BE5h9lD6xS7ZcoUqGrjQ/7y15vbF3BYsV/ROhl2c8bew32FXhazNoy7rQ7BctToxY3LPvEEfPinQVHvPmFjFZ0r5OnEo15dnmyrQfjOpW7sMZKyIdZIwQbjUbgGgzzbfyRC3I8n2RkcztXm/4APIjJOqtQbc7pZsIjl8gwLFfnfvNRVqzA4o9PCNPAMY/Z4L+attcZxfvu8MfV5lvnWkrMKw8a4JkWZwYUCPbVaoOa7bkvKWOFJbSacbyrF7F6gtT4Vf5vWCetM5bBpcK1ISD2pTetJvHlcpGJRk/hdOlqjJ7Hh27WmuLoivjyVLEj7mN8T5jePf4ntbTo9Q+zzLOu6Lq10mxpXZcd1PsPKqsltOk3r0KiozOQa/7B5zsvzgTusKnKpNFl0yfiukYFrC+YDgZAAF3rPwDS9iVeG8aFBPQL5+vQ+eEtdlGj4jLzRO+DHvDqOjRToU8isQhkvvcjX/tjISxg3Mhz7YpUAp5Cn93tOyjunDgc2f2zJ7SBfrhLYopOcSx4dEqgJS26p5R4+0I6P359tsmAQ7K7aeBt+LmKH5LRiVhRkw3/6jhXp8WG+gATWxzdVY0pe47Dj1sEOcoAETOQ6aky07UGhrlqs2LePyd+/rBZ3oA==",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},v=void 0,b={id:"singulatron/create-a-new-user",title:"Create a New User",description:"Allows an authenticated administrator to create a new user with specified details.",source:"@site/docs/singulatron/create-a-new-user.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/create-a-new-user",permalink:"/docs/singulatron/create-a-new-user",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"create-a-new-user",title:"Create a New User",description:"Allows an authenticated administrator to create a new user with specified details.",sidebar_label:"Create a New User",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VsGO2zYQ/RVizrLk7DZAoVOdYJtuUWQXa+dQGD6MpbHEhCIZkrLiGv73Yih7JcdOmwBJdBKHw+Hjm5lH7qEkXzhpgzQacpgpZTovUAtsQ006yAIDlQLLRmrpg8NgnAhGFI4wkEChqROtJyc6GWrhLRVyI6kUJQWUyqeQgKOPLfnwypQ7yPdQGB1IB/5FaxXvII3O3ntGsAdf1NQg/1lnLLkgyccRet8ZV/J/2FmCHHxwUldwSMAZRfdl9JOBGn/V6WhA53DHY4Z9uQ8ffGE+kP7meD0n5Sxc9S5J0ZdnqUGpeOY8H3dsFsZFijU2BMnlWnmdE+nn5LayoNHs2hhFqHk6Rru27kT0H+jr70i2Lb9IzuBu1u+pCFctkcIxN6/7EnzHxffUl9ix2KSjEvLgWmK05K3Rvk/uzXR6SXKMcEye8G1RkPebVqkdJF9frBdwDwn8cm23e71FJUvx5/zh7bdscF6l5JxxX0dlj+TFlXNrrnXj5D9U/jQkL69zEri8leCKJSfuYsyfA4mNWHnIl30hnJpmlUBDoTYl5GBNrC2LoYYcMm7Gie/94gAS8BE5h9lD6xS7ZcoUqGrjQ/7y15vbF3BYsV/ROhl2c8bew32FXhazNoy7rQ7BctToxY3LPvEEfPinQVHvPmFjFZ0r5OnEo15dnmyrQfjOpW7sMZKyIdZIwQbjUbgGgzzbfyRC3I8n2RkcztXm/4APIjJOqtQbc7pZsIjl8gwLFfnfvNRVqzA4o9PCNPAMY/Z4L+attcZxfvu8MfV5lvnWkrMKw8a4JkWZwYUCPbVaoOa7bkvKWOFJbSacbyrF7F6gtT4Vf5vWCetM5bBpcK1ISD2pTetJvHlcpGJRk/hdOlqjJ7Hh27WmuLoivjyVLEj7mN8T5jePf4ntbTo9Q+zzLOu6Lq10mxpXZcd1PsPKqsltOk3r0KiozOQa/7B5zsvzgTusKnKpNFl0yfiukYFrC+YDgZAAF3rPwDS9iVeG8aFBPQL5+vQ+eEtdlGj4jLzRO+DHvDqOjRToU8isQhkvvcjX/tjISxg3Mhz7YpUAp5Cn93tOyjunDgc2f2zJ7SBfrhLYopOcSx4dEqgJS26p5R4+0I6P359tsmAQ7K7aeBt+LmKH5LRiVhRkw3/6jhXp8WG+gATWxzdVY0pe47Dj1sEOcoAETOQ6aky07UGhrlqs2LePyd+/rBZ3oA==",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Set Role Permissions",permalink:"/docs/singulatron/set-role-permissions"},next:{title:"Read User by Token",permalink:"/docs/singulatron/read-user-by-token"}},_={},N=[];function w(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Create a New User"}),"\n",(0,l.jsx)(c(),{method:"post",path:"/user-service/user"}),"\n",(0,l.jsx)(s.p,{children:"Allows an authenticated administrator to create a new user with specified details."}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(m(),{className:"openapi-tabs__mime",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"Create User Request"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"roleIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"user"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"authTokenIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,l.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"deletedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Email or username",type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"isService",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,l.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"passwordHash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"roleIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,l.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n(),{label:void 0,id:void 0,children:[(0,l.jsxs)(f.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"User created successfully"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"object"})})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function k(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(w,{...e})}):w(e)}}}]);