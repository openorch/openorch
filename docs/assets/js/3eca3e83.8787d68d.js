"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7144],{85201:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>N,default:()=>P,frontMatter:()=>v,metadata:()=>q,toc:()=>I});var i=a(74848),t=a(28453),n=a(91366),r=a.n(n),l=(a(6050),a(57742)),c=a.n(l),d=(a(67792),a(27362)),m=a.n(d),o=a(36683),h=a.n(o),p=a(81124),j=a.n(p),g=a(60674),x=a.n(g),u=a(23397),f=a.n(u),y=(a(26651),a(51107)),b=(a(77675),a(19365));const v={id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/isYXJrM0KQTJ52MLq2bNq1at/bU9snWAQaXIhIQQLBLKaqG/72zfEi0RdvjaS8SCCz2+3axr63MAXU0gYx3ciY/AelSVIColoDilXK5UIheG0XQLoHwtSh8FEpgAG0Ko4UuFQkqI6g8lYn0AaJihfNczuQS6M9en0xkUFFVQBBRzm62D9CvWhVi/rNMpOGNoKiUiXSqAjmTHcI8l4mM8LU2EXI5o1hDIlGXUCk520raBJZFisYtZdMsWBiDdwjI52+Pj/nvPvBAUPT2AqHAWmtALGprNyICRQMrYGztHYEj1qJCsEa3tmafkVVtR1RCZE+Q6YA7tbwyBBUeCoz03mf3sTsQBgWVIO4UwvfvBDjtc8jFnXEqbkRhLIjcRNB2I6C6g5wPjWuvtNjCEIItZPLQR4nUEfh9T2nCg8l9NhPnJp/c7jYmDuqQP4FWR3vogutohS9GtqxLiHBoyg5W+rvPoGnPQ6oY1Ya/h+h+4ilajHmOh0RO+xORQ2EcdC+iiJQuK3DUffcIolTI+bADecRFe2rPhkDvgwEAlqm4lb+ZRKxLRd+hqMMPt/LlL/zYCw4Jd8Dnqj95QCidgn7muRHiFMJ1uz/EvNkhsbxYl16soye4B37rPvkoTuf7+kWlQVEYsK0iqAJtJig+HzSHEg3vvZuqJXO3Utbk4vfL879eUi0ekuoA3kx4xqmaSh/NPy8rR1MA76ctIIhOWXEJcQVR/BKjj/8NqUkkgq6joU1b938CFSGe1lTK2c2CizSpJbcE+ZF7yeVKywVnKpWee0jwSG3zYHmZcb85wpXOugDNtkOgNlm1bzXYsu/6TFtUZJZZr5UtPdLs/Ye3J28kIw/ELpl/l/9jegehvwkgbnuRWykKb61fcyHetD1RaWjbCPkv4ITSXaMSRfRVG60c2ALZtUaDOPNL4wS4PHjjKB0aXwkqh7hvfaf9i7ce30ewCuYP6OLTuMIPXUTp9pGgUobNRmUBf0TjlrVVFL1Lta9Gui/m4rIOwUf2ceepkijMsswHcD7qMvVxmR20AnnujkKEyiBw1gWrqPCxaq2vjI4eOyNRgPa4QYKKDbRGg8O2NQwMfr04E6uT9PgePs6ybL1ep0tXt/j9PczUMtijk/Q4LamybbJCrPC86H26p49rtVxCTI3PWpGMPWfIssh5AHceNY8XHCWdQcfpSXp8FHX6gdVy1FXKjYieGSQxmmYedMZdgvw/c1T/yATfKAtWGTdqj10q3MghFeRQrWUiZ6NBaZcPi0Ry3POd7ZZHiOtom4a3v9YQOSsXiVypaNQd+4dnM4O8zuWsUBbhCWtf/d2PY6/FeISb5D9Ertuw55Wt+Usm8gtsxiNes2iSIQuYTHd8qjUEGl08qEPNuGxcnF9eyUSqPo/3ScPakmHB6idZPUy6jgP/NskjV7bbLiWbZiffHT16Y5fpnTQ7adE0zb9ZKvzb",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},N=void 0,q={id:"openorch/get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",source:"@site/docs/openorch/get-messages.api.mdx",sourceDirName:"openorch",slug:"/openorch/get-messages",permalink:"/docs/openorch/get-messages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/isYXJrM0KQTJ52MLq2bNq1at/bU9snWAQaXIhIQQLBLKaqG/72zfEi0RdvjaS8SCCz2+3axr63MAXU0gYx3ciY/AelSVIColoDilXK5UIheG0XQLoHwtSh8FEpgAG0Ko4UuFQkqI6g8lYn0AaJihfNczuQS6M9en0xkUFFVQBBRzm62D9CvWhVi/rNMpOGNoKiUiXSqAjmTHcI8l4mM8LU2EXI5o1hDIlGXUCk520raBJZFisYtZdMsWBiDdwjI52+Pj/nvPvBAUPT2AqHAWmtALGprNyICRQMrYGztHYEj1qJCsEa3tmafkVVtR1RCZE+Q6YA7tbwyBBUeCoz03mf3sTsQBgWVIO4UwvfvBDjtc8jFnXEqbkRhLIjcRNB2I6C6g5wPjWuvtNjCEIItZPLQR4nUEfh9T2nCg8l9NhPnJp/c7jYmDuqQP4FWR3vogutohS9GtqxLiHBoyg5W+rvPoGnPQ6oY1Ya/h+h+4ilajHmOh0RO+xORQ2EcdC+iiJQuK3DUffcIolTI+bADecRFe2rPhkDvgwEAlqm4lb+ZRKxLRd+hqMMPt/LlL/zYCw4Jd8Dnqj95QCidgn7muRHiFMJ1uz/EvNkhsbxYl16soye4B37rPvkoTuf7+kWlQVEYsK0iqAJtJig+HzSHEg3vvZuqJXO3Utbk4vfL879eUi0ekuoA3kx4xqmaSh/NPy8rR1MA76ctIIhOWXEJcQVR/BKjj/8NqUkkgq6joU1b938CFSGe1lTK2c2CizSpJbcE+ZF7yeVKywVnKpWee0jwSG3zYHmZcb85wpXOugDNtkOgNlm1bzXYsu/6TFtUZJZZr5UtPdLs/Ye3J28kIw/ELpl/l/9jegehvwkgbnuRWykKb61fcyHetD1RaWjbCPkv4ITSXaMSRfRVG60c2ALZtUaDOPNL4wS4PHjjKB0aXwkqh7hvfaf9i7ce30ewCuYP6OLTuMIPXUTp9pGgUobNRmUBf0TjlrVVFL1Lta9Gui/m4rIOwUf2ceepkijMsswHcD7qMvVxmR20AnnujkKEyiBw1gWrqPCxaq2vjI4eOyNRgPa4QYKKDbRGg8O2NQwMfr04E6uT9PgePs6ybL1ep0tXt/j9PczUMtijk/Q4LamybbJCrPC86H26p49rtVxCTI3PWpGMPWfIssh5AHceNY8XHCWdQcfpSXp8FHX6gdVy1FXKjYieGSQxmmYedMZdgvw/c1T/yATfKAtWGTdqj10q3MghFeRQrWUiZ6NBaZcPi0Ry3POd7ZZHiOtom4a3v9YQOSsXiVypaNQd+4dnM4O8zuWsUBbhCWtf/d2PY6/FeISb5D9Ertuw55Wt+Usm8gtsxiNes2iSIQuYTHd8qjUEGl08qEPNuGxcnF9eyUSqPo/3ScPakmHB6idZPUy6jgP/NskjV7bbLiWbZiffHT16Y5fpnTQ7adE0zb9ZKvzb",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Add Message",permalink:"/docs/openorch/add-message"},next:{title:"Get Threads",permalink:"/docs/openorch/get-threads"}},_={},I=[];function k(e){const s={p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List Messages"}),"\n",(0,i.jsx)(c(),{method:"post",path:"/chat-svc/thread/{threadId}/messages"}),"\n",(0,i.jsx)(s.p,{children:"Fetch messages (and associated assets) for a specific chat thread."}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(h(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Messages and assets successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assets"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Content is the base64 encoded binary file direcly embedded in the asset itself",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Url of the asset where",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"messages"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"assetIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"AssetIds defines the attachments the message has.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'Content of the message eg. "Hi, what\'s up?"',type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"ThreadId of the message.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"UserId is the id of the user who wrote the message.\nFor AI messages this field is empty.",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "assets": [\n    {\n      "content": "string",\n      "createdAt": "string",\n      "description": "string",\n      "id": "string",\n      "type": "string",\n      "updatedAt": "string",\n      "url": "string"\n    }\n  ],\n  "messages": [\n    {\n      "assetIds": [\n        "string"\n      ],\n      "content": "string",\n      "createdAt": "string",\n      "id": "string",\n      "threadId": "string",\n      "updatedAt": "string",\n      "userId": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function P(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(k,{...e})}):k(e)}}}]);