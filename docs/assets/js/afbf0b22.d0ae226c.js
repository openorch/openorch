"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4260],{474113:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>q,contentTitle:()=>b,default:()=>_,frontMatter:()=>v,metadata:()=>y,toc:()=>N});var i=a(474848),l=a(28453),r=a(891366),n=a.n(r),t=(a(206050),a(157742)),o=a.n(t),m=(a(567792),a(427362)),c=a.n(m),d=(a(336683),a(781124)),p=a.n(d),h=a(760674),x=a.n(h),u=a(323397),g=a.n(u),j=(a(626651),a(751107)),f=(a(377675),a(119365));const v={id:"list-models",title:"List Models",description:"Retrieves a list of models.",sidebar_label:"List Models",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VdtuGzcQ/RWCz+tdJW7QQk91gqIQ4laGZT/ZAkJxR1omvHmGK1kR9t+D4UqyZEtAUxR9kbic4eFczhluZA2k0cRkgpdDeQsJDSyBhBLWUBJhLlyowVL56B/9LTy1BoHEl7x5QUs9zKvh0sDqi4iAzhCZ4EtZyBABFQOPajmUDPdXhpKFRKAYPAHJ4Ua+Hwz47ziS8WdZSB18Ap/YqmK0Rme46iuxy0aSbsApXkXky5LpAfuIeWUSOHrroIgg9au6Noyp7M2RR1pHkENJCY1fyK7YbYTZV9CJN2YmHXoan2AByJajRE5AwXMCT+esc6uWocXTttbav5WDk0ZTn9x26vnj2VCder5V7sDmWzfbmgxiwOMqnquKQlRr/vbngosKlYMEeBonWpXmAd3odA4Rg4vpDhz7nb7gqVXWpPU5m0+fgnNbLr1xIPMdThYhqcVPVqD1GjwFhMNMZiFYUJ7tS8AzrT9FsmP0tx4d7/0yePdWP/detakJaL5D/e+VBMyBfxRrjuTDKSWPfAL0yooJ4BJQ/JEx/5+QuLegW8zMeNjIj6AQ8KpNjRw+TLvprsMPMo8mMVlqOS2kg9QEHloxUJLMXj4gq/3Uq9xuklFOijJ6i5a9Khu0sk2gNPzw2/vLd5Lv2YUx4bT6TA6DeV20u3UE8bh1eZRiHqwNK6jFbC2UoKg0COVrkcI38ELpPJdrMcfgRGpA3BOgIK640SCuw8J4Ab6OwfjEs9nwJQ2oGrgVvWzl1ZYxuRHyhX3RfIaefsbPAwfLvVM69w6cMpw2KQv0Oxm/aK1KGHypgzvAvhmJSRtjQC5oX6kmpTisqhDBB9RNGXBRvRmgcuwvIoIzBOJqJHaTImfvjMZAfZIkQAdaUwLHCVrDOsyq3kXw5821WF6Wg6P7aVhVq9WqXPg23789R5VaRHtxWQ7KJjmbtQjoaDzf1vQlfFqpxQKwNKHKLhVXziTLLuMIfoy6kQfCl4PyshxcoC5/zbMtUHLKHwR6zQ/v/ql89ZrsVfPfvtXbVid4TlW0yuRZlau02bL/Qe5xZLF7YqeFZJ6zdbOZKYJ7tF3H208tIGtuWsilQqNmXI+HaVfsWMeC+QZrbozWEJkVS2XbnnCvxkF3qMmb8eROFlJtdfNCUkYrdguG35n8+gD8Ncn7GPi3K84c2Wx6CXTd3r83nT2xV1bvzeWcdl33AylBQdE=",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},b=void 0,y={id:"openorch/list-models",title:"List Models",description:"Retrieves a list of models.",source:"@site/docs/openorch/list-models.api.mdx",sourceDirName:"openorch",slug:"/openorch/list-models",permalink:"/docs/openorch/list-models",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"list-models",title:"List Models",description:"Retrieves a list of models.",sidebar_label:"List Models",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VdtuGzcQ/RWCz+tdJW7QQk91gqIQ4laGZT/ZAkJxR1omvHmGK1kR9t+D4UqyZEtAUxR9kbic4eFczhluZA2k0cRkgpdDeQsJDSyBhBLWUBJhLlyowVL56B/9LTy1BoHEl7x5QUs9zKvh0sDqi4iAzhCZ4EtZyBABFQOPajmUDPdXhpKFRKAYPAHJ4Ua+Hwz47ziS8WdZSB18Ap/YqmK0Rme46iuxy0aSbsApXkXky5LpAfuIeWUSOHrroIgg9au6Noyp7M2RR1pHkENJCY1fyK7YbYTZV9CJN2YmHXoan2AByJajRE5AwXMCT+esc6uWocXTttbav5WDk0ZTn9x26vnj2VCder5V7sDmWzfbmgxiwOMqnquKQlRr/vbngosKlYMEeBonWpXmAd3odA4Rg4vpDhz7nb7gqVXWpPU5m0+fgnNbLr1xIPMdThYhqcVPVqD1GjwFhMNMZiFYUJ7tS8AzrT9FsmP0tx4d7/0yePdWP/detakJaL5D/e+VBMyBfxRrjuTDKSWPfAL0yooJ4BJQ/JEx/5+QuLegW8zMeNjIj6AQ8KpNjRw+TLvprsMPMo8mMVlqOS2kg9QEHloxUJLMXj4gq/3Uq9xuklFOijJ6i5a9Khu0sk2gNPzw2/vLd5Lv2YUx4bT6TA6DeV20u3UE8bh1eZRiHqwNK6jFbC2UoKg0COVrkcI38ELpPJdrMcfgRGpA3BOgIK640SCuw8J4Ab6OwfjEs9nwJQ2oGrgVvWzl1ZYxuRHyhX3RfIaefsbPAwfLvVM69w6cMpw2KQv0Oxm/aK1KGHypgzvAvhmJSRtjQC5oX6kmpTisqhDBB9RNGXBRvRmgcuwvIoIzBOJqJHaTImfvjMZAfZIkQAdaUwLHCVrDOsyq3kXw5821WF6Wg6P7aVhVq9WqXPg23789R5VaRHtxWQ7KJjmbtQjoaDzf1vQlfFqpxQKwNKHKLhVXziTLLuMIfoy6kQfCl4PyshxcoC5/zbMtUHLKHwR6zQ/v/ql89ZrsVfPfvtXbVid4TlW0yuRZlau02bL/Qe5xZLF7YqeFZJ6zdbOZKYJ7tF3H208tIGtuWsilQqNmXI+HaVfsWMeC+QZrbozWEJkVS2XbnnCvxkF3qMmb8eROFlJtdfNCUkYrdguG35n8+gD8Ncn7GPi3K84c2Wx6CXTd3r83nT2xV1bvzeWcdl33AylBQdE=",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Model Status",permalink:"/docs/openorch/get-model-status"},next:{title:"Check",permalink:"/docs/openorch/check"}},q={},N=[];function M(e){const s={code:"code",p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"List Models"}),"\n",(0,i.jsx)(o(),{method:"post",path:"/model-svc/models"}),"\n",(0,i.jsx)(s.p,{children:"Retrieves a list of models."}),"\n",(0,i.jsxs)(s.p,{children:["Requires ",(0,i.jsx)(s.code,{children:"model-svc:model:view"})," permission."]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"OK"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"models"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assets"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsx)("div",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},collapsible:!1,discriminator:!1})})]})}),(0,i.jsx)(x(),{collapsible:!1,name:"bits",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"extension",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"flavour",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"fullName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"maxBits",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(x(),{collapsible:!1,name:"maxRam",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(x(),{collapsible:!1,name:"mirrors",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"parameters",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"platformId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"promptTemplate",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"quality",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"quantComment",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"size",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(x(),{collapsible:!1,name:"tags",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"uncensored",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(x(),{collapsible:!1,name:"version",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "models": [\n    {\n      "assets": {},\n      "bits": 0,\n      "description": "string",\n      "extension": "string",\n      "flavour": "string",\n      "fullName": "string",\n      "id": "string",\n      "maxBits": 0,\n      "maxRam": 0,\n      "mirrors": [\n        "string"\n      ],\n      "name": "string",\n      "parameters": "string",\n      "platformId": "string",\n      "promptTemplate": "string",\n      "quality": "string",\n      "quantComment": "string",\n      "size": 0,\n      "tags": [\n        "string"\n      ],\n      "uncensored": true,\n      "version": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(M,{...e})}):M(e)}}}]);