"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4762],{86399:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>S,contentTitle:()=>q,default:()=>_,frontMatter:()=>v,metadata:()=>N,toc:()=>I});var i=a(74848),r=a(28453),t=a(91366),n=a.n(t),l=(a(6050),a(57742)),d=a.n(l),c=(a(67792),a(27362)),m=a.n(c),o=a(36683),p=a.n(o),h=a(81124),x=a.n(h),j=a(60674),g=a.n(j),u=a(23397),f=a.n(u),y=(a(26651),a(51107)),b=(a(77675),a(19365));const v={id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/iuYvTSZoUknTjodXVo3bVq1bu2p7JOtAwwuRSQggGBBqaqG/72zfEi0RCeTaS8SiF3s9+1iH9hBjqSC9lE7CzN4j1GVokIiuUISL6TNhSRySsuI7RIjvRSFC0IK8qh0oZVQpYwilgFlnkICzmOQbHCewwxWGP/o7UECXgZZYcRAMLvfHaHftibE/CdIQPOGl7GEBKysEGbQIcxzSCDgp1oHzGEWQ40JkCqxkjDbQdx61qUYtF1B0yxZmbyzhMTy1+fn/PcUeCAoen8xkqBaKSQqamO2ImAMGtfI2MrZiDayFem90ar1NftAbGo3ouIDRyLqDrgzyysdsaJThZHdp+zedQKhScQSxaMk/PaNQKtcjrl41FaGrSi0QZHrgMpsBVaPmLNQ2/ZIiy10JDQFJMcxSkAF5Pu9jBMRTJ6ymZDrfHK725gQ1D7/DFodzGkI7oIRrhj5sikx4Kkre1hwjx9QxQMPkCHILX8P2f2Zq2gx5jmdErnsJSLHQlvsbkTGKFVZoY3dd48gSklcD3uQZ0J0oPbFFOhjMADgKhUP8KtOxKaU8RsStf/+Ab7+hp+7waHgTvjc9pIjQukU9BeumzBMIdy1+0PO6z0S64tN6cQmuIhPwB/sexfE5fzQv2KpSRQaTWsIKx+3ExS/nDSnGg3vvZnqJXO7lkbn4rfF9Z9f0y2OSXUAryYiY2UdSxf0P1/XjqYA3k57EDFYacQCwxqD+DkEF/4bUpMAoaqDjtu27/+IMmC4rGMJs/slN+koVzwS4B3PksVawZIrNZaOZ4h3FNvhwfqQ8bw5o7XKugTNdkOiNll1GDXUsu/mTNtUIMuMU9KUjuLs7XevL14BIw/EFsy/q/8xvZPU33oUD73KA4jCGeM23Ii37UyUCtsxEt1HtEKqblCJIriqzVZObEEcWq1QXLmVtgJt7p22MR0GX4kyx3AYfZf9jbcRP2Sw9Pp37PJT28INU0Sq9pKwkprdJmmQfiBtV7WRMTibKleNbN/MxaL23gWOcRepMkY/yzKqPQZvZCxcqFKps5NxANf2zAesNCFX3qDbRqDSKjjqHCWBytGWIlbspNEKLbXjYWDxy82VWF+k50840CzLNptNurJ16sIq689RJlfenF2k52kZK9MWLIaKros+riMXNnK1wpBql7UqGUdPR8Mqi7F7kACnS+fVeXqRnp8Flb5h25x+lbQjtleaohg9a45G5L5S/p8HVX/bEf+OmTdS29Gc7GriHoaagKFtQwKz0YtpXxjLBLgA+Mxux2+Ju2Cahrc/1Ri4PJcJrGXQ8pGDxI80TbzOYVZIQ/gZb1/81b/LXorxW26S/5DCdsuRl6bmL0jgI27Hb71m2SRDOTCZTnypFPo4OnjSkJpx/7i5XtxCArIv6EP1sLVkWLD5SVbH1ddx4N8meebIbtfVZtPs9TvRsyf2Jd9pc5CWTdP8C1F3APQ=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},q=void 0,N={id:"superplatform/get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",source:"@site/docs/superplatform/get-messages.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-messages",permalink:"/docs/superplatform/get-messages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/iuYvTSZoUknTjodXVo3bVq1bu2p7JOtAwwuRSQggGBBqaqG/72zfEi0RCeTaS8SiF3s9+1iH9hBjqSC9lE7CzN4j1GVokIiuUISL6TNhSRySsuI7RIjvRSFC0IK8qh0oZVQpYwilgFlnkICzmOQbHCewwxWGP/o7UECXgZZYcRAMLvfHaHftibE/CdIQPOGl7GEBKysEGbQIcxzSCDgp1oHzGEWQ40JkCqxkjDbQdx61qUYtF1B0yxZmbyzhMTy1+fn/PcUeCAoen8xkqBaKSQqamO2ImAMGtfI2MrZiDayFem90ar1NftAbGo3ouIDRyLqDrgzyysdsaJThZHdp+zedQKhScQSxaMk/PaNQKtcjrl41FaGrSi0QZHrgMpsBVaPmLNQ2/ZIiy10JDQFJMcxSkAF5Pu9jBMRTJ6ymZDrfHK725gQ1D7/DFodzGkI7oIRrhj5sikx4Kkre1hwjx9QxQMPkCHILX8P2f2Zq2gx5jmdErnsJSLHQlvsbkTGKFVZoY3dd48gSklcD3uQZ0J0oPbFFOhjMADgKhUP8KtOxKaU8RsStf/+Ab7+hp+7waHgTvjc9pIjQukU9BeumzBMIdy1+0PO6z0S64tN6cQmuIhPwB/sexfE5fzQv2KpSRQaTWsIKx+3ExS/nDSnGg3vvZnqJXO7lkbn4rfF9Z9f0y2OSXUAryYiY2UdSxf0P1/XjqYA3k57EDFYacQCwxqD+DkEF/4bUpMAoaqDjtu27/+IMmC4rGMJs/slN+koVzwS4B3PksVawZIrNZaOZ4h3FNvhwfqQ8bw5o7XKugTNdkOiNll1GDXUsu/mTNtUIMuMU9KUjuLs7XevL14BIw/EFsy/q/8xvZPU33oUD73KA4jCGeM23Ii37UyUCtsxEt1HtEKqblCJIriqzVZObEEcWq1QXLmVtgJt7p22MR0GX4kyx3AYfZf9jbcRP2Sw9Pp37PJT28INU0Sq9pKwkprdJmmQfiBtV7WRMTibKleNbN/MxaL23gWOcRepMkY/yzKqPQZvZCxcqFKps5NxANf2zAesNCFX3qDbRqDSKjjqHCWBytGWIlbspNEKLbXjYWDxy82VWF+k50840CzLNptNurJ16sIq689RJlfenF2k52kZK9MWLIaKros+riMXNnK1wpBql7UqGUdPR8Mqi7F7kACnS+fVeXqRnp8Flb5h25x+lbQjtleaohg9a45G5L5S/p8HVX/bEf+OmTdS29Gc7GriHoaagKFtQwKz0YtpXxjLBLgA+Mxux2+Ju2Cahrc/1Ri4PJcJrGXQ8pGDxI80TbzOYVZIQ/gZb1/81b/LXorxW26S/5DCdsuRl6bmL0jgI27Hb71m2SRDOTCZTnypFPo4OnjSkJpx/7i5XtxCArIv6EP1sLVkWLD5SVbH1ddx4N8meebIbtfVZtPs9TvRsyf2Jd9pc5CWTdP8C1F3APQ=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Add Message",permalink:"/docs/superplatform/add-message"},next:{title:"Get Threads",permalink:"/docs/superplatform/get-threads"}},S={},I=[];function k(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List Messages"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/chat-svc/thread/{threadId}/messages"}),"\n",(0,i.jsx)(s.p,{children:"Fetch messages (and associated assets) for a specific chat thread."}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Messages and assets successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assets"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(g(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Content is the base64 encoded binary file direcly embedded in the asset itself",type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Url of the asset where",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(g(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"messages"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(g(),{collapsible:!1,name:"assetIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"AssetIds defines the attachments the message has.",items:{type:"string"},type:"array"}}),(0,i.jsx)(g(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'Content of the message eg. "Hi, what\'s up?"',type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"ThreadId of the message.",type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(g(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"UserId is the id of the user who wrote the message.\nFor AI messages this field is empty.",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(x(),{responseExample:'{\n  "assets": [\n    {\n      "content": "string",\n      "createdAt": "string",\n      "description": "string",\n      "id": "string",\n      "type": "string",\n      "updatedAt": "string",\n      "url": "string"\n    }\n  ],\n  "messages": [\n    {\n      "assetIds": [\n        "string"\n      ],\n      "content": "string",\n      "createdAt": "string",\n      "id": "string",\n      "threadId": "string",\n      "updatedAt": "string",\n      "userId": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);