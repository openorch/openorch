"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[1179],{66830:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>b,default:()=>I,frontMatter:()=>f,metadata:()=>N,toc:()=>y});var i=a(74848),r=a(28453),n=a(91366),l=a.n(n),o=(a(6050),a(57742)),t=a.n(o),c=(a(67792),a(27362)),d=a.n(c),m=(a(36683),a(81124)),p=a.n(m),h=a(60674),u=a.n(h),x=a(23397),j=a.n(x),g=(a(26651),a(51107)),v=(a(77675),a(19365));const f={id:"get-docker-service-information",title:"Get Docker Service Information",description:"Retrieve detailed information about the Docker service",sidebar_label:"Get Docker Service Information",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1v1DAQ/SvWnNNkaUFCOVEEVBVIVLQ9oLKH2WQ2MXVsM3Z2WaL8dzT5YD9oLxy47EYz4/GbN++5g5JCwdpH7Szk8IUia9qQKimiNlQqbdeOG5S8wpVro4o1qXeueCRWgXijC4IEmIJ3NlCAvIPzxUL+jlvfjrXqet8QEiicjWSjlKP3RhdDIvse5EwHoaipQfny7Dxx1OMNgurvaDmgeofUOHtZlkxhCMedJ8ghRNa2gj4BYnb8ZKbGMI52kF05Zwgt9H0yh9zqOxXxyYjEXi5e/D3/vcU21o71Lyr/ffDnoD+D5NVTm7i2kdiiUbISYvV+6Pl/IPUJBCpa1nEH+UMHbwmZ+LKNNeQPy36ZQMQqQP4Ak8Qm2cAygYZi7UrIoaIICXiUQ5CNWz+btJgN0pBbZLYwXNKykcLMuAJN7ULMX70+v3gBct2M5lamGwc6xHTK3d3Ok/o2lXwDtXbGuC2VarVTqILHghTaUkX3SFZh8aPVTKVas2sG49wHsc3shU+u0laRLb3TNqaQgJZLasKSZCMWG+HvchLObJqJVvT6I+0Gomc/yAqxGFZIDWoZO6Ch8CZoW7UGIzubFq456H1zrW5b7x0LpyNTdYw+z7LQemJvMIphU9SZOOTkvWjtMG5JGzLOq0BmfSYMU6kurxV6H1L11bWsPLuKsWlwZUhpe1a7NpC6urlL1V1N6oNmWmEgtXY8ECWnKxJKjC7IBpKZZsxXN5/U5iJdHCEOeZZtt9u0sm3quMqmcyHDypuzi3SR1rExMkMkbsLn9Syt/cBbrCriVLtsKMmEax2NlNzuCYQERFojA4v0XFp6F2KD9gDkFUV1rOGTp++IyW7vvn9/hCddRPoZM29QW0E2ENRNbnmAY7fAJJ1lArI1Keg62cM9m76X8I+WWKy6TGCDrGV9g1OTWaVisEfayVqKgryoaIOmHQV68or0hy6+en8HCeBks72mpVkyf0j3OWV3B71PPTFCkN8+eeZI142O6fs/9WPq2RN/jDhWC6HLvu9/AzHUfVk=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},b=void 0,N={id:"singulatron/get-docker-service-information",title:"Get Docker Service Information",description:"Retrieve detailed information about the Docker service",source:"@site/docs/singulatron/get-docker-service-information.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/get-docker-service-information",permalink:"/docs/singulatron/get-docker-service-information",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-docker-service-information",title:"Get Docker Service Information",description:"Retrieve detailed information about the Docker service",sidebar_label:"Get Docker Service Information",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1v1DAQ/SvWnNNkaUFCOVEEVBVIVLQ9oLKH2WQ2MXVsM3Z2WaL8dzT5YD9oLxy47EYz4/GbN++5g5JCwdpH7Szk8IUia9qQKimiNlQqbdeOG5S8wpVro4o1qXeueCRWgXijC4IEmIJ3NlCAvIPzxUL+jlvfjrXqet8QEiicjWSjlKP3RhdDIvse5EwHoaipQfny7Dxx1OMNgurvaDmgeofUOHtZlkxhCMedJ8ghRNa2gj4BYnb8ZKbGMI52kF05Zwgt9H0yh9zqOxXxyYjEXi5e/D3/vcU21o71Lyr/ffDnoD+D5NVTm7i2kdiiUbISYvV+6Pl/IPUJBCpa1nEH+UMHbwmZ+LKNNeQPy36ZQMQqQP4Ak8Qm2cAygYZi7UrIoaIICXiUQ5CNWz+btJgN0pBbZLYwXNKykcLMuAJN7ULMX70+v3gBct2M5lamGwc6xHTK3d3Ok/o2lXwDtXbGuC2VarVTqILHghTaUkX3SFZh8aPVTKVas2sG49wHsc3shU+u0laRLb3TNqaQgJZLasKSZCMWG+HvchLObJqJVvT6I+0Gomc/yAqxGFZIDWoZO6Ch8CZoW7UGIzubFq456H1zrW5b7x0LpyNTdYw+z7LQemJvMIphU9SZOOTkvWjtMG5JGzLOq0BmfSYMU6kurxV6H1L11bWsPLuKsWlwZUhpe1a7NpC6urlL1V1N6oNmWmEgtXY8ECWnKxJKjC7IBpKZZsxXN5/U5iJdHCEOeZZtt9u0sm3quMqmcyHDypuzi3SR1rExMkMkbsLn9Syt/cBbrCriVLtsKMmEax2NlNzuCYQERFojA4v0XFp6F2KD9gDkFUV1rOGTp++IyW7vvn9/hCddRPoZM29QW0E2ENRNbnmAY7fAJJ1lArI1Keg62cM9m76X8I+WWKy6TGCDrGV9g1OTWaVisEfayVqKgryoaIOmHQV68or0hy6+en8HCeBks72mpVkyf0j3OWV3B71PPTFCkN8+eeZI142O6fs/9WPq2RN/jDhWC6HLvu9/AzHUfVk=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Docker Host",permalink:"/docs/singulatron/get-docker-host"},next:{title:"Download a File",permalink:"/docs/singulatron/download-a-file"}},k={},y=[];function _(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get Docker Service Information"}),"\n",(0,i.jsx)(t(),{method:"get",path:"/docker-service/info"}),"\n",(0,i.jsx)(s.p,{children:"Retrieve detailed information about the Docker service"}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Service Information"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"info"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"dockerDaemonAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"hasDocker",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})]})]})})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "info": {\n    "dockerDaemonAddress": "string",\n    "error": "string",\n    "hasDocker": true\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function I(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);