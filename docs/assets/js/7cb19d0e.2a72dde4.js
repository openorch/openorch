"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[936],{84067:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>v,default:()=>_,frontMatter:()=>y,metadata:()=>b,toc:()=>q});var l=a(74848),i=a(28453),n=a(91366),r=a.n(n),t=(a(6050),a(57742)),m=a.n(t),o=(a(67792),a(27362)),c=a.n(o),d=(a(36683),a(81124)),p=a.n(d),h=a(60674),u=a.n(h),x=a(23397),g=a.n(x),j=(a(26651),a(51107)),f=(a(77675),a(19365));const y={id:"list-models",title:"List Models",description:"Retrieves a list of models.",sidebar_label:"List Models",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VW1v2zYQ/isEP6uSm6zA4E9Lh2Ewmi1BnHxyDPQsnWW2fMuRkuMa+u/DUbYrxzawDUW/2BTv+PBenue4lRWGkpSPylk5lg8YSWGLQYDQKkThlsK4CnXIn+2zfcCXRhEG8TltvgttOU6rcatw/Vl4JKNCUM7mMpPOIwEDTyo5lgz3V4KSmSQM3tmAQY638mo04r/jSO4+yUyWzka0ka3gvVZlgiu+BHbZylCu0ACvPPFlUfWAfcS8UhFNOHWAEDD2q6pSjAn6/sgjbjzKsQyRlK1ll+033OILlpE3FioOPZWNWCOx5SiRM1D4GtGGS9alhtY1dN7WaP03GDxrVNXZbQOvHy+GauD1AczAZhuz2JkUkaPjKl6qChDBhr/tpeA8EBiMSOdxvIa4dGQm53Pw5IyPj2jY7/wFLw1oFTeXbDb+7ozZcenEIahveLYIEer/WIHGlmiDIxxmsnBOI1i2t0gXWn+OZMfopx4d7/0yen+qnycLTVw5Ut+w+v9KQubAv4o1RfLhnJInNiJZ0GKK1CKJPxLmzwmJe4tlQ4kZs638iEBIN01cyfFs3s33HZ7JNJrEtC3lPJMG48rx0PIuRMns5QOyOEy9wuwnWUhJhYTekGavQrsS9MqFOP7w69X1e8n37MOYclp9JsNg3hbtceNRPO9cnqVYOq3dGiux2AgQwUOJAmwlovuKVkCZ5nIlluSMiCsUTwFJBK64KlHculpZgbbyTtnIs1nxJSuECrkVvWzlzY4xqRHyO/u8+oQ9/ZRdOg6Wewdl6h0aUJx2AI3ht6Bs3WiI5GxeOjPAvp+IaeO9Iy5oX6lVjH5cFKHxSPsJkIMqToaovJkIAxZqZAmnxCtsUTufvg9nZSa1Yv0lNe9v/vP+VrTX+ejo3jAuivV6nde2yR3Vxe5cKKD2+t11PspX0eikQSQT7pa7Wg7CXkNdI+XKFcml4IqpqNllOkxJDlQvR/lVmmguRAN2EOYtP7eHB/LNG3LQyo99oXcNjvgaC69BpQmVarTdcX4mDzgy2z+s80wyu9m63S4g4BPpruPtlwaJlTbPZAukYMHVmM27bM81lslX3HBbyhI9c6EF3fQ0ezMEuqES7++mjzKTsFPLd2oyWrZfMPzeZDcD8LfU7mPg3y67cGS77YnfdQf/3nTxxEFPvTeXc9513T+3VD+A",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},v=void 0,b={id:"superplatform/list-models",title:"List Models",description:"Retrieves a list of models.",source:"@site/docs/superplatform/list-models.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/list-models",permalink:"/docs/superplatform/list-models",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-models",title:"List Models",description:"Retrieves a list of models.",sidebar_label:"List Models",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VW1v2zYQ/isEP6uSm6zA4E9Lh2Ewmi1BnHxyDPQsnWW2fMuRkuMa+u/DUbYrxzawDUW/2BTv+PBenue4lRWGkpSPylk5lg8YSWGLQYDQKkThlsK4CnXIn+2zfcCXRhEG8TltvgttOU6rcatw/Vl4JKNCUM7mMpPOIwEDTyo5lgz3V4KSmSQM3tmAQY638mo04r/jSO4+yUyWzka0ka3gvVZlgiu+BHbZylCu0ACvPPFlUfWAfcS8UhFNOHWAEDD2q6pSjAn6/sgjbjzKsQyRlK1ll+033OILlpE3FioOPZWNWCOx5SiRM1D4GtGGS9alhtY1dN7WaP03GDxrVNXZbQOvHy+GauD1AczAZhuz2JkUkaPjKl6qChDBhr/tpeA8EBiMSOdxvIa4dGQm53Pw5IyPj2jY7/wFLw1oFTeXbDb+7ozZcenEIahveLYIEer/WIHGlmiDIxxmsnBOI1i2t0gXWn+OZMfopx4d7/0yen+qnycLTVw5Ut+w+v9KQubAv4o1RfLhnJInNiJZ0GKK1CKJPxLmzwmJe4tlQ4kZs638iEBIN01cyfFs3s33HZ7JNJrEtC3lPJMG48rx0PIuRMns5QOyOEy9wuwnWUhJhYTekGavQrsS9MqFOP7w69X1e8n37MOYclp9JsNg3hbtceNRPO9cnqVYOq3dGiux2AgQwUOJAmwlovuKVkCZ5nIlluSMiCsUTwFJBK64KlHculpZgbbyTtnIs1nxJSuECrkVvWzlzY4xqRHyO/u8+oQ9/ZRdOg6Wewdl6h0aUJx2AI3ht6Bs3WiI5GxeOjPAvp+IaeO9Iy5oX6lVjH5cFKHxSPsJkIMqToaovJkIAxZqZAmnxCtsUTufvg9nZSa1Yv0lNe9v/vP+VrTX+ejo3jAuivV6nde2yR3Vxe5cKKD2+t11PspX0eikQSQT7pa7Wg7CXkNdI+XKFcml4IqpqNllOkxJDlQvR/lVmmguRAN2EOYtP7eHB/LNG3LQyo99oXcNjvgaC69BpQmVarTdcX4mDzgy2z+s80wyu9m63S4g4BPpruPtlwaJlTbPZAukYMHVmM27bM81lslX3HBbyhI9c6EF3fQ0ezMEuqES7++mjzKTsFPLd2oyWrZfMPzeZDcD8LfU7mPg3y67cGS77YnfdQf/3nTxxEFPvTeXc9513T+3VD+A",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Model Status",permalink:"/docs/superplatform/get-model-status"},next:{title:"Check",permalink:"/docs/superplatform/check"}},N={},q=[];function M(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"List Models"}),"\n",(0,l.jsx)(m(),{method:"post",path:"/model-svc/models"}),"\n",(0,l.jsx)(s.p,{children:"Retrieves a list of models."}),"\n",(0,l.jsxs)(s.p,{children:["Requires ",(0,l.jsx)(s.code,{children:"model-svc:model:view"})," permission."]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(f.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"models"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object[]"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"Array ["})})}),(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"assets"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsx)("div",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,l.jsx)(u(),{collapsible:!1,name:"bits",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,l.jsx)(u(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"extension",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"flavour",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"fullName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"maxBits",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,l.jsx)(u(),{collapsible:!1,name:"maxRam",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,l.jsx)(u(),{collapsible:!1,name:"mirrors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,l.jsx)(u(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"parameters",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"platformId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"promptTemplate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"quality",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"quantComment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"size",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,l.jsx)(u(),{collapsible:!1,name:"tags",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,l.jsx)(u(),{collapsible:!1,name:"uncensored",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,l.jsx)(u(),{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)("li",{children:(0,l.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,l.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "models": [\n    {\n      "assets": {},\n      "bits": 0,\n      "description": "string",\n      "extension": "string",\n      "flavour": "string",\n      "fullName": "string",\n      "id": "string",\n      "maxBits": 0,\n      "maxRam": 0,\n      "mirrors": [\n        "string"\n      ],\n      "name": "string",\n      "parameters": "string",\n      "platformId": "string",\n      "promptTemplate": "string",\n      "quality": "string",\n      "quantComment": "string",\n      "size": 0,\n      "tags": [\n        "string"\n      ],\n      "uncensored": true,\n      "version": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(M,{...e})}):M(e)}}}]);