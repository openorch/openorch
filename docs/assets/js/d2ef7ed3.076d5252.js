"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4275],{86003:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>w,default:()=>D,frontMatter:()=>y,metadata:()=>N,toc:()=>q});var l=s(74848),i=s(28453),n=s(91366),r=s.n(n),t=(s(6050),s(57742)),d=s.n(t),o=(s(67792),s(27362)),c=s.n(o),m=s(36683),p=s.n(m),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),f=s(23397),g=s.n(f),b=(s(26651),s(51107)),v=(s(77675),s(19365));const y={id:"get-download",title:"Get a Download",description:"Get a download by ID.",sidebar_label:"Get a Download",hide_title:!0,hide_table_of_contents:!0,api:"eJytVcFu2zgQ/RViTruAIrnJFljotCnSDYwW22DdnBIDHVNjmS1FsiRl1xX078VIli0nSoFi92JL4uPMm8d5wwYKCtIrF5U1kMMtRYGisDujLRZitRfzm/TRPJp/6WutPAURNyQ+DYCLsJX58JJvFe0+CUe+UiEoa1JIwDryyMHnBeRQUrw5oCEBhx4riuQD5A/NEyYDTsxvIAHFnxzGDSRgsCLIYUg751C+p1dAHn1NCQS5oQohbyDuHaND9MqU0LZLBgdnTaDA65ezGf+dJ//wDhKQ1kQykVfROa1kV0f2OTCkGaVwnquMqg848Hq+ItFI0pqKEa+VtZrQQJtAofwE4eQYkIo3+9hHOmCUiVSSZxB5b6e3r5WmfzrJXli8Y1knF2ut/1aaFuo7TWdVxeRGh3V4qUrnbekpjMswdbXq44WIsQ6TMWuvp44zGb7Y1WeSsZPimwoxTGVvx43yMACXz2K0jPxj9up5Y9wbrOPGevWdil9pkae0OcHrqc6bm0jeoBYL8lvy4m13rv8pE+tKsvYq7jufvSH05K9rPvWHJRsiYskWPHlusZUsS0VxYw++7fzKWyAbu//4kjUnQ7bAKZl/7+zu7CDLtJWoNzbE/PWfl1evgHMP1BZcQd/dY4JP9fm4dyQeD5BHEGurtd1RN6pQBIeSBJpCRPuFjEDZn7ZYe1t1o+s+kBeBxVWSxHtbKiPIFM4qE9Nh0GwIC/KnUXN9OPNOczi2Czr1jvZdWymztp3FrYkou2OiChWXHVBT+CsoU9Yao7cmlbYaxb6bi0XtnPUsca/UJkaXZ1moHXmnMa6tr1JUWTcNzgeVuXCeKhVIXM/FgO0UqJT0NvSFBkHShn2IVHGRWkkyofP0wOL27r3YXqWzMw4hz7LdbpeWpk6tL7PDvpBh6fTFVTpLN7HSzCqSr8KH9UHXUQk7LEvyqbJZB8lYPRU1Qxbj8iABbpe+qll62Y0KG2KFZkSzv55GV8iZGs3JJf//RXY480jfYuY0KjMaSr0xHmAcDU6DGxLIR7fVMgH2AG9omhUGuve6bfnz15o8e3SZwBa9whXrxDejCvxcQL5GHegnZf92KK/4XZxfoJP0hz42e5Yfdc1vkMAX2p9fsO2yTQZXMKEecC0luTja+mwyteMhcvv2IySA9dltg05xsGR44OiTtJ56sKfAv23ywpam6R3atkd8v/TijqPxezSrtGzb9gfnZCa/",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},w=void 0,N={id:"superplatform/get-download",title:"Get a Download",description:"Get a download by ID.",source:"@site/docs/superplatform/get-download.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-download",permalink:"/docs/superplatform/get-download",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-download",title:"Get a Download",description:"Get a download by ID.",sidebar_label:"Get a Download",hide_title:!0,hide_table_of_contents:!0,api:"eJytVcFu2zgQ/RViTruAIrnJFljotCnSDYwW22DdnBIDHVNjmS1FsiRl1xX078VIli0nSoFi92JL4uPMm8d5wwYKCtIrF5U1kMMtRYGisDujLRZitRfzm/TRPJp/6WutPAURNyQ+DYCLsJX58JJvFe0+CUe+UiEoa1JIwDryyMHnBeRQUrw5oCEBhx4riuQD5A/NEyYDTsxvIAHFnxzGDSRgsCLIYUg751C+p1dAHn1NCQS5oQohbyDuHaND9MqU0LZLBgdnTaDA65ezGf+dJ//wDhKQ1kQykVfROa1kV0f2OTCkGaVwnquMqg848Hq+ItFI0pqKEa+VtZrQQJtAofwE4eQYkIo3+9hHOmCUiVSSZxB5b6e3r5WmfzrJXli8Y1knF2ut/1aaFuo7TWdVxeRGh3V4qUrnbekpjMswdbXq44WIsQ6TMWuvp44zGb7Y1WeSsZPimwoxTGVvx43yMACXz2K0jPxj9up5Y9wbrOPGevWdil9pkae0OcHrqc6bm0jeoBYL8lvy4m13rv8pE+tKsvYq7jufvSH05K9rPvWHJRsiYskWPHlusZUsS0VxYw++7fzKWyAbu//4kjUnQ7bAKZl/7+zu7CDLtJWoNzbE/PWfl1evgHMP1BZcQd/dY4JP9fm4dyQeD5BHEGurtd1RN6pQBIeSBJpCRPuFjEDZn7ZYe1t1o+s+kBeBxVWSxHtbKiPIFM4qE9Nh0GwIC/KnUXN9OPNOczi2Czr1jvZdWymztp3FrYkou2OiChWXHVBT+CsoU9Yao7cmlbYaxb6bi0XtnPUsca/UJkaXZ1moHXmnMa6tr1JUWTcNzgeVuXCeKhVIXM/FgO0UqJT0NvSFBkHShn2IVHGRWkkyofP0wOL27r3YXqWzMw4hz7LdbpeWpk6tL7PDvpBh6fTFVTpLN7HSzCqSr8KH9UHXUQk7LEvyqbJZB8lYPRU1Qxbj8iABbpe+qll62Y0KG2KFZkSzv55GV8iZGs3JJf//RXY480jfYuY0KjMaSr0xHmAcDU6DGxLIR7fVMgH2AG9omhUGuve6bfnz15o8e3SZwBa9whXrxDejCvxcQL5GHegnZf92KK/4XZxfoJP0hz42e5Yfdc1vkMAX2p9fsO2yTQZXMKEecC0luTja+mwyteMhcvv2IySA9dltg05xsGR44OiTtJ56sKfAv23ywpam6R3atkd8v/TijqPxezSrtGzb9gfnZCa/",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Download a File",permalink:"/docs/superplatform/download"},next:{title:"Pause a Download",permalink:"/docs/superplatform/pause"}},_={},q=[];function k(e){const a={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get a Download"}),"\n",(0,l.jsx)(d(),{method:"get",path:"/download-svc/download/{downloadId}"}),"\n",(0,l.jsx)(a.p,{children:"Get a download by ID."}),"\n",(0,l.jsxs)(a.p,{children:["Requires the ",(0,l.jsx)(a.code,{children:"download-svc:download:view"})," permission."]}),"\n",(0,l.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Download ID",in:"path",name:"downloadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(v.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(a.p,{children:"download"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(a.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(j(),{collapsible:!1,name:"cancelled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,l.jsx)(j(),{collapsible:!1,name:"dir",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"downloadedBytes",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"fileName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"filePath",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"fullFileSize",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,l.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"paused",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,l.jsx)(j(),{collapsible:!1,name:"progress",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,l.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(j(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,l.jsx)(j(),{collapsible:!1,name:"exists",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})]})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "download": {\n    "cancelled": true,\n    "dir": "string",\n    "downloadedBytes": 0,\n    "error": "string",\n    "fileName": "string",\n    "filePath": "string",\n    "fullFileSize": 0,\n    "id": "string",\n    "paused": true,\n    "progress": 0,\n    "status": "string",\n    "url": "string"\n  },\n  "exists": true\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(g(),{className:"openapi-tabs__schema",children:(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,l.jsxs)(v.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(g(),{className:"openapi-tabs__schema",children:(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"string"})})})]})})})})})})]})]})})})]})}function D(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(k,{...e})}):k(e)}}}]);