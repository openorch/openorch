"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[8414],{272315:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>w,default:()=>E,frontMatter:()=>b,metadata:()=>_,toc:()=>I});var n=a(474848),l=a(28453),t=a(891366),i=a.n(t),r=(a(206050),a(157742)),d=a.n(r),o=(a(567792),a(427362)),c=a.n(o),m=a(336683),p=a.n(m),h=a(781124),x=a.n(h),u=a(760674),j=a.n(u),f=a(323397),g=a.n(f),y=(a(626651),a(751107)),v=(a(377675),a(119365));const b={id:"get-model-status",title:"Get Model Status",description:"Retrieves the status of a model by ID.",sidebar_label:"Get Model Status",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VW1v2zYQ/isEP22ALLnNig36tAwtAmMZUiTNp8RAaeossaVI9o6y5wn678NR8kscd8Aw7ItNkffy3MN7jr2sgDSaEI13spT3ENHABkjEBgRFFTsSfi2UaH0FVqx2YvE+f3bP7h6+dQYnw8/pdEYbXaZVuTGw/SwCYGuIjHe5zKQPgIrzLCpZyhriH2z6kHLITAaFqoUISLJ86s9wJVOxeC8zafg7qNjITDrVgixlyrmoZCZxRFXJMmIHmSTdQKtk2cu4C2xKEY2r5TAs2ZiCdwTE52/nc/67lHaiASduKkGd1kC07qzdyUxq7yK4yO4qBGt0qrL4QhyjP8EQkDmIZsw4hn29r6oKgegC6EwqIoh0D6ranZyvvLegHBtg5xzbvirlfjwQEU1dA5LwLlV3qzqnG+Fdusg1ploqvuK4dzEkmE2xbWC0GnvBkFj52IgppVCuEsrRFhgs+89EYkhYryqouAXO8Q6nN/Z0qPxlnceilocIfvUFdEwBznd476f5m9cMPDrVxcaj+Quqf3Nr553DCd5d6paFi4BOWfEAuAEUHxA9/rdMQyYJdIcm7pIqfgOFgNddbGT5tOQmjqpmwUyt+rDRzFILsfGTypK02F4WB5WOq6KfhDMUtFchJeijBDu07FVYr5VtPMXy3S9vr95ITrtH9cDgx749xXZOzaddAPE8mTxLsfbW+i1UPFCUoKA0pP6J/is4ofTYE9yObeq4RwIUxLwaDeLW18YJcFXwxsV8PxQaUBXgcSxcT9ed6D52nwrmd9il3jFu7Rks35DS6YagVYbLJmWBfiXj6s6qiN7l2rcnsT8uxEMXgkcmeGSqiTGUReEDOI+6yT3WBWvyJRV3bhYQWkMgrhciWBXXHttUfWs0ehqLJAHa044itFygNRocASPcI7j5eCs2V/n8RX4qi2K73ea161L+yY8KVQc7u8rneRNby6giYEt364nTI3zaKh4QufFFMimYORMtm9wFcHeoefRyl4wFzfOrfD5Dnf/MYYOn2Cp3AvQGopi6c99lLxjpjwL5X9+f6foj/BmLYJVJ8zIx108KeZKHODIb1zKT5fF5mWSyzCTLgR36fqUIHtEOA29/6wBZqctMbhQatWLa+DUzxOtKlmtlCf6BgR+mwqofxcmjdxH7vp8dz8iNsh1/yUx+hd3Jozgsh2wvDYYynl5rDSGe+L2aTMPpHLn58Imn8qTto5A4WLZfcPSLmM6FOELg3yH7jkvfjzIdhoP9ePRdj4P6R2umaDkMw9/ZzxHr",sidebar_class_name:"get api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},w=void 0,_={id:"openorch/get-model-status",title:"Get Model Status",description:"Retrieves the status of a model by ID.",source:"@site/docs/openorch/get-model-status.api.mdx",sourceDirName:"openorch",slug:"/openorch/get-model-status",permalink:"/docs/openorch/get-model-status",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-model-status",title:"Get Model Status",description:"Retrieves the status of a model by ID.",sidebar_label:"Get Model Status",hide_title:!0,hide_table_of_contents:!0,api:"eJy1VW1v2zYQ/isEP22ALLnNig36tAwtAmMZUiTNp8RAaeossaVI9o6y5wn678NR8kscd8Aw7ItNkffy3MN7jr2sgDSaEI13spT3ENHABkjEBgRFFTsSfi2UaH0FVqx2YvE+f3bP7h6+dQYnw8/pdEYbXaZVuTGw/SwCYGuIjHe5zKQPgIrzLCpZyhriH2z6kHLITAaFqoUISLJ86s9wJVOxeC8zafg7qNjITDrVgixlyrmoZCZxRFXJMmIHmSTdQKtk2cu4C2xKEY2r5TAs2ZiCdwTE52/nc/67lHaiASduKkGd1kC07qzdyUxq7yK4yO4qBGt0qrL4QhyjP8EQkDmIZsw4hn29r6oKgegC6EwqIoh0D6ranZyvvLegHBtg5xzbvirlfjwQEU1dA5LwLlV3qzqnG+Fdusg1ploqvuK4dzEkmE2xbWC0GnvBkFj52IgppVCuEsrRFhgs+89EYkhYryqouAXO8Q6nN/Z0qPxlnceilocIfvUFdEwBznd476f5m9cMPDrVxcaj+Quqf3Nr553DCd5d6paFi4BOWfEAuAEUHxA9/rdMQyYJdIcm7pIqfgOFgNddbGT5tOQmjqpmwUyt+rDRzFILsfGTypK02F4WB5WOq6KfhDMUtFchJeijBDu07FVYr5VtPMXy3S9vr95ITrtH9cDgx749xXZOzaddAPE8mTxLsfbW+i1UPFCUoKA0pP6J/is4ofTYE9yObeq4RwIUxLwaDeLW18YJcFXwxsV8PxQaUBXgcSxcT9ed6D52nwrmd9il3jFu7Rks35DS6YagVYbLJmWBfiXj6s6qiN7l2rcnsT8uxEMXgkcmeGSqiTGUReEDOI+6yT3WBWvyJRV3bhYQWkMgrhciWBXXHttUfWs0ehqLJAHa044itFygNRocASPcI7j5eCs2V/n8RX4qi2K73ea161L+yY8KVQc7u8rneRNby6giYEt364nTI3zaKh4QufFFMimYORMtm9wFcHeoefRyl4wFzfOrfD5Dnf/MYYOn2Cp3AvQGopi6c99lLxjpjwL5X9+f6foj/BmLYJVJ8zIx108KeZKHODIb1zKT5fF5mWSyzCTLgR36fqUIHtEOA29/6wBZqctMbhQatWLa+DUzxOtKlmtlCf6BgR+mwqofxcmjdxH7vp8dz8iNsh1/yUx+hd3Jozgsh2wvDYYynl5rDSGe+L2aTMPpHLn58Imn8qTto5A4WLZfcPSLmM6FOELg3yH7jkvfjzIdhoP9ePRdj4P6R2umaDkMw9/ZzxHr",sidebar_class_name:"get api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Start a Model",permalink:"/docs/openorch/start-model"},next:{title:"List Models",permalink:"/docs/openorch/list-models"}},q={},I=[];function L(e){const s={code:"code",p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Model Status"}),"\n",(0,n.jsx)(d(),{method:"get",path:"/model-svc/model/{modelId}/status"}),"\n",(0,n.jsx)(s.p,{children:"Retrieves the status of a model by ID."}),"\n",(0,n.jsxs)(s.p,{children:["Requires the ",(0,n.jsx)(s.code,{children:"model-svc:model:view"})," permission."]}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Model ID",in:"path",name:"modelId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(i(),{label:void 0,id:void 0,children:[(0,n.jsxs)(v.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Model status retrieved successfully"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"status"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"address",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"assetsReady",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,n.jsx)(j(),{collapsible:!1,name:"running",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{description:"Running triggers onModelLaunch on the frontend.\n\tRunning is true when the model is both running and answering\n\t- fully loaded.",type:"boolean"}})]})]})})})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(x(),{responseExample:'{\n  "status": {\n    "address": "string",\n    "assetsReady": true,\n    "running": true\n  }\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(g(),{className:"openapi-tabs__schema",children:(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,n.jsxs)(v.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(g(),{className:"openapi-tabs__schema",children:(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function E(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(L,{...e})}):L(e)}}}]);