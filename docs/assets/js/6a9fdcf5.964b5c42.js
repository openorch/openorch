"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[1997],{48:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>v,default:()=>L,frontMatter:()=>g,metadata:()=>b,toc:()=>_});var i=a(74848),r=a(28453),l=a(91366),t=a.n(l),n=(a(6050),a(57742)),d=a.n(n),c=(a(67792),a(27362)),o=a.n(c),p=(a(36683),a(81124)),m=a.n(p),h=a(60674),x=a.n(h),j=a(23397),u=a.n(j),y=(a(26651),a(51107)),f=(a(77675),a(19365));const g={id:"get-threads",title:"Get Threads",description:"Fetch all chat threads associated with a specific user",sidebar_label:"Get Threads",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk1z2zYQ/SuYPdOkEyczHZ3qZNKM20ztiZyTrcMKXJFIQADGglJUDf97Z/lhM7KaJu3FpoBd7NuH95Y8QEmsownJeAcL+I2SrhVaq3SNSaU6EpaskNlrg4lKtTOpVqg4kDYbo1XLFCEDHyiiHHJVwgIqSrdDKmQQ6aElTm98uYfFAbR3iVySRwzBGt2nFZ9ZAByAdU0NylPaB4IF+PVn0gm6rsuOwL6npMYy6uNQBDqpx8E7JpZDXp6fy79vE6ckbrUm5k1r7V5FStHQlkrIfhxjiNJ4MkOxkS55NIkafh6hIwmLl2nWIKdoXCXITXlyOZlk6UQXsqz8RqWaxpvKITuR7oPRVwOsoxPGHVXSxjhitauNrlWfwLNj1ZqsdxWr5PN7dztsa3Qq+raq7V6tJVKek+BBVgkrVhsfJwUJsEdKniMcFjBG3MvvNpTfYUkUd7KdT8NGD9yUPFEj8dKa7yEzCVbDM8Z+FNjTwqTJf4/oZfvqlAiv3BatKdXvy+s/f0ZyRyDHAi9O0OGwTbWP5q+f0/SpAq9Pd5AoOrRqSXFLUb2L0cf/V6nLgEm30aQ9LO4O8IYwUrxsUw2Lu1W3ykCUBYs7eCvzabnVsMqgoVR7mTvBc4IMAko8FDLDzniri/Q4jLiHyv3hbbQSVViv0dae0+L1Ly8vXoCUmVAsBezg3TmWZ07aB1L3Y8g9qI231u+oVOt9PyxRk0JXquS/kFOoH1oTqVSb6JteoyJdxcKj0aQ++Mo4Ra4M3rjUS1SK1IRlP2wdNsLb5Xi9Pb1Pzsdg/qBBjEL5x6fx++4rNqEfJTJs3MZP8xh1f1vUoBFKGC3xr2xc1VpM0btc+2ZW9+ZKLdsQfBSyBxbrlMKiKLgNFIPFtPGxydEU8GxqX7uzEKkxTOrySk2xPTuN0dHzQAIr0p73nKgRAqzR5LifghOK9zcf1PYiP/8GAy+KYrfb5ZVrcx+rYszjAqtgzy7y87xOje2dS7Hh683I+ayFHVYVxdz4og8p4HECw3LeHmQgUhq6Os8v8vOzqPNXcrbosEE3Qzt7V8ERI7NX4n9//453n+hrKoJF4/pJKbQcRjvcwWQHCR+hrDIQ4cvu4bBGpk/Rdp0sP7QUxYOrDLYYDa6FgLtVl00yFAd9oT0s4O0A/0xMIKSgbQcdHnm/y6aMS60ppO/Gzm19c728hQzW4xdE40vJibiTrwvcwQL6LxDJ7p3arx3AoqtarCR2OFMsgaN/n8wikLLpQbqattx+hvDYbEMj8lfaOplyOAxW7LrH+GHrHzMeHT5Eyy2uuq77G24JVT4=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},v=void 0,b={id:"superplatform/get-threads",title:"Get Threads",description:"Fetch all chat threads associated with a specific user",source:"@site/docs/superplatform/get-threads.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-threads",permalink:"/docs/superplatform/get-threads",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-threads",title:"Get Threads",description:"Fetch all chat threads associated with a specific user",sidebar_label:"Get Threads",hide_title:!0,hide_table_of_contents:!0,api:"eJylVk1z2zYQ/SuYPdOkEyczHZ3qZNKM20ztiZyTrcMKXJFIQADGglJUDf97Z/lhM7KaJu3FpoBd7NuH95Y8QEmsownJeAcL+I2SrhVaq3SNSaU6EpaskNlrg4lKtTOpVqg4kDYbo1XLFCEDHyiiHHJVwgIqSrdDKmQQ6aElTm98uYfFAbR3iVySRwzBGt2nFZ9ZAByAdU0NylPaB4IF+PVn0gm6rsuOwL6npMYy6uNQBDqpx8E7JpZDXp6fy79vE6ckbrUm5k1r7V5FStHQlkrIfhxjiNJ4MkOxkS55NIkafh6hIwmLl2nWIKdoXCXITXlyOZlk6UQXsqz8RqWaxpvKITuR7oPRVwOsoxPGHVXSxjhitauNrlWfwLNj1ZqsdxWr5PN7dztsa3Qq+raq7V6tJVKek+BBVgkrVhsfJwUJsEdKniMcFjBG3MvvNpTfYUkUd7KdT8NGD9yUPFEj8dKa7yEzCVbDM8Z+FNjTwqTJf4/oZfvqlAiv3BatKdXvy+s/f0ZyRyDHAi9O0OGwTbWP5q+f0/SpAq9Pd5AoOrRqSXFLUb2L0cf/V6nLgEm30aQ9LO4O8IYwUrxsUw2Lu1W3ykCUBYs7eCvzabnVsMqgoVR7mTvBc4IMAko8FDLDzniri/Q4jLiHyv3hbbQSVViv0dae0+L1Ly8vXoCUmVAsBezg3TmWZ07aB1L3Y8g9qI231u+oVOt9PyxRk0JXquS/kFOoH1oTqVSb6JteoyJdxcKj0aQ++Mo4Ra4M3rjUS1SK1IRlP2wdNsLb5Xi9Pb1Pzsdg/qBBjEL5x6fx++4rNqEfJTJs3MZP8xh1f1vUoBFKGC3xr2xc1VpM0btc+2ZW9+ZKLdsQfBSyBxbrlMKiKLgNFIPFtPGxydEU8GxqX7uzEKkxTOrySk2xPTuN0dHzQAIr0p73nKgRAqzR5LifghOK9zcf1PYiP/8GAy+KYrfb5ZVrcx+rYszjAqtgzy7y87xOje2dS7Hh683I+ayFHVYVxdz4og8p4HECw3LeHmQgUhq6Os8v8vOzqPNXcrbosEE3Qzt7V8ERI7NX4n9//453n+hrKoJF4/pJKbQcRjvcwWQHCR+hrDIQ4cvu4bBGpk/Rdp0sP7QUxYOrDLYYDa6FgLtVl00yFAd9oT0s4O0A/0xMIKSgbQcdHnm/y6aMS60ppO/Gzm19c728hQzW4xdE40vJibiTrwvcwQL6LxDJ7p3arx3AoqtarCR2OFMsgaN/n8wikLLpQbqattx+hvDYbEMj8lfaOplyOAxW7LrH+GHrHzMeHT5Eyy2uuq77G24JVT4=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"List Messages",permalink:"/docs/superplatform/get-messages"},next:{title:"Get Config",permalink:"/docs/superplatform/get-config"}},N={},_=[];function q(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get Threads"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/chat-svc/threads"}),"\n",(0,i.jsx)(s.p,{children:"Fetch all chat threads associated with a specific user"}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(o(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Get Threads Request"})})}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"object"})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(t(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Threads successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"threads"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Title of the thread.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"topicIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"TopicIds defines which topics the thread belongs to.\nTopics can roughly be thought of as tags for threads.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"UserIds the ids of the users who can see this thread.",items:{type:"string"},type:"array"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "threads": [\n    {\n      "createdAt": "string",\n      "id": "string",\n      "title": "string",\n      "topicIds": [\n        "string"\n      ],\n      "updatedAt": "string",\n      "userIds": [\n        "string"\n      ]\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(u(),{className:"openapi-tabs__schema",children:(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(f.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(u(),{className:"openapi-tabs__schema",children:(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(u(),{className:"openapi-tabs__schema",children:(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function L(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);