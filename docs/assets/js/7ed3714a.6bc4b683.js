"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[9685],{46573:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>M,contentTitle:()=>N,default:()=>K,frontMatter:()=>b,metadata:()=>v,toc:()=>_});var n=a(74848),l=a(28453),i=a(91366),r=a.n(i),d=(a(6050),a(57742)),t=a.n(d),o=(a(67792),a(27362)),c=a.n(o),m=a(36683),p=a.n(m),h=a(81124),u=a.n(h),x=a(60674),j=a.n(x),g=a(23397),f=a.n(g),y=(a(26651),a(51107)),w=(a(77675),a(19365));const b={id:"get-download",title:"Get a Download",description:"Get a download by ID.",sidebar_label:"Get a Download",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu20YQ/ZXFPLUATSp2AxR8qgMnhpCgMSL7obAFZESOyE2Wu5u9SFEE/nsxpGhRNh0gaF8kkjuXM2fmzO6hJF84aYM0GnK4piBQlGarlcFSrHZifpU+6Af9ib5F6ciLUJP4PBic+U2RDy/5RtL2s7DkGum9NDqFBIwlhxx8XkIOFYWrgzUkYNFhQ4Gch/x+/wTJYCfmV5CA5E8WQw0JaGwIchjSzjmU6+GVkAcXKQFf1NQg5HsIO8vWPjipK2jbJRt7a7Qnz+fnsxn/nSb/+B4SKIwOpAOforVKFl0d2RfPJvtRCuu4yiD7gAOu5ycF6oKUonKEa2WMItTQJlBKNwE4eQxI5Ztd6CMdbKQOVJFjI3LOTLuvpaK/O8peOLxhWicPo1LvpKKF/EHTWWU56Wgx+peqtM5Ujvy4DB2bVR/PBwzRT8aMTk21Mxm+mNUXKkJHxXfpg5/K/ty65W9/zF49H4E7jTHUxskfVP7KMDwFyAleT83YXAdyGpVYkNuQE2+7Dv6nTMwgFdHJsOsU9YbQkbuM3N/7JY9+wIrFdlTXYlPAMoGGQm0OCu2UyS6QjXX++JLtj9JrgVMy/l7DXZcgy5QpUNXGh/z1n+cXr4BzD9AWXEE/x2OAT/m53VkSDweTBxBro5TZUreUUHiLBQnUpQjmK2mBRb8AxNqZpltSd56c8EyuLEh8MJXUgnRpjdQhHVZKTViSOy6Vy0PPO87hcVzQyve06wZI6rXpxGx0wKJrEzUouWyPivxfXuoqKgzO6LQwzSj2zVwsorXGMcU9U3UINs8yHy05qzCsjWtSlFmn+xM6PkXdlVvShpSxwpNanzHDVIrLuUBrfSr+MdGJTmHYNLhSJKQ+q030JK5vblNxW5N4Jx2t0JNYG9cRxd4VMSVKFqR9p/UB8/XNB7G5SGcniH2eZdvtNq10TI2rsoOfz7Cy6uwinaV1aBTXEMg1/uP60IVRwVusKnKpNFlnkjHXMig2WRwJhAR4tHoGZul5t0CMDw3qEcj+0hpdLCfM7Y+K+v+vt8N8BPoeMqtQ6tGq6kV0D+NocFznkEA+usOWCXA32WG/5/7cOdW2/PlbJMd6XiawQSe5rf19KT0/l5CvUXn6Sdm/Hcorfxen1+ok/GHm9Y7pRxX5DRL4SrvTa7ddtsmgIAbUG1wWBdkwcn22xdrxwrl+ewsJYDy5g9BKDpYMDxx9EtZTvfYQ+LdNXnDZ73s1t+2jfX/0osfjkuitmaVl27b/AsYNLKo=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},N=void 0,v={id:"singulatron/get-download",title:"Get a Download",description:"Get a download by ID.",source:"@site/docs/singulatron/get-download.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/get-download",permalink:"/docs/singulatron/get-download",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-download",title:"Get a Download",description:"Get a download by ID.",sidebar_label:"Get a Download",hide_title:!0,hide_table_of_contents:!0,api:"eJytVdtu20YQ/ZXFPLUATSp2AxR8qgMnhpCgMSL7obAFZESOyE2Wu5u9SFEE/nsxpGhRNh0gaF8kkjuXM2fmzO6hJF84aYM0GnK4piBQlGarlcFSrHZifpU+6Af9ib5F6ciLUJP4PBic+U2RDy/5RtL2s7DkGum9NDqFBIwlhxx8XkIOFYWrgzUkYNFhQ4Gch/x+/wTJYCfmV5CA5E8WQw0JaGwIchjSzjmU6+GVkAcXKQFf1NQg5HsIO8vWPjipK2jbJRt7a7Qnz+fnsxn/nSb/+B4SKIwOpAOforVKFl0d2RfPJvtRCuu4yiD7gAOu5ycF6oKUonKEa2WMItTQJlBKNwE4eQxI5Ztd6CMdbKQOVJFjI3LOTLuvpaK/O8peOLxhWicPo1LvpKKF/EHTWWU56Wgx+peqtM5Ujvy4DB2bVR/PBwzRT8aMTk21Mxm+mNUXKkJHxXfpg5/K/ty65W9/zF49H4E7jTHUxskfVP7KMDwFyAleT83YXAdyGpVYkNuQE2+7Dv6nTMwgFdHJsOsU9YbQkbuM3N/7JY9+wIrFdlTXYlPAMoGGQm0OCu2UyS6QjXX++JLtj9JrgVMy/l7DXZcgy5QpUNXGh/z1n+cXr4BzD9AWXEE/x2OAT/m53VkSDweTBxBro5TZUreUUHiLBQnUpQjmK2mBRb8AxNqZpltSd56c8EyuLEh8MJXUgnRpjdQhHVZKTViSOy6Vy0PPO87hcVzQyve06wZI6rXpxGx0wKJrEzUouWyPivxfXuoqKgzO6LQwzSj2zVwsorXGMcU9U3UINs8yHy05qzCsjWtSlFmn+xM6PkXdlVvShpSxwpNanzHDVIrLuUBrfSr+MdGJTmHYNLhSJKQ+q030JK5vblNxW5N4Jx2t0JNYG9cRxd4VMSVKFqR9p/UB8/XNB7G5SGcniH2eZdvtNq10TI2rsoOfz7Cy6uwinaV1aBTXEMg1/uP60IVRwVusKnKpNFlnkjHXMig2WRwJhAR4tHoGZul5t0CMDw3qEcj+0hpdLCfM7Y+K+v+vt8N8BPoeMqtQ6tGq6kV0D+NocFznkEA+usOWCXA32WG/5/7cOdW2/PlbJMd6XiawQSe5rf19KT0/l5CvUXn6Sdm/Hcorfxen1+ok/GHm9Y7pRxX5DRL4SrvTa7ddtsmgIAbUG1wWBdkwcn22xdrxwrl+ewsJYDy5g9BKDpYMDxx9EtZTvfYQ+LdNXnDZ73s1t+2jfX/0osfjkuitmaVl27b/AsYNLKo=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Download a File",permalink:"/docs/singulatron/download"},next:{title:"Pause a Download",permalink:"/docs/singulatron/pause"}},M={},_=[];function S(e){const s={code:"code",p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Get a Download"}),"\n",(0,n.jsx)(t(),{method:"get",path:"/download-svc/download/{downloadId}"}),"\n",(0,n.jsx)(s.p,{children:"Get a download by ID."}),"\n",(0,n.jsxs)(s.p,{children:["Requires the ",(0,n.jsx)(s.code,{children:"download-svc:download:view"})," permission."]}),"\n",(0,n.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(s.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("ul",{children:(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Download ID",in:"path",name:"downloadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(r(),{label:void 0,id:void 0,children:[(0,n.jsxs)(w.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(w.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(w.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"download"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(j(),{collapsible:!1,name:"cancelled",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,n.jsx)(j(),{collapsible:!1,name:"dir",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"downloadedBytes",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"fileName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"filePath",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"fullFileSize",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,n.jsx)(j(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"paused",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,n.jsx)(j(),{collapsible:!1,name:"progress",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,n.jsx)(j(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(j(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})}),(0,n.jsx)(j(),{collapsible:!1,name:"exists",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})]})]})}),(0,n.jsx)(w.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "download": {\n    "cancelled": true,\n    "dir": "string",\n    "downloadedBytes": 0,\n    "error": "string",\n    "fileName": "string",\n    "filePath": "string",\n    "fullFileSize": 0,\n    "id": "string",\n    "paused": true,\n    "progress": 0,\n    "status": "string",\n    "url": "string"\n  },\n  "exists": true\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(w.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(w.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(f(),{className:"openapi-tabs__schema",children:(0,n.jsx)(w.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,n.jsxs)(w.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(w.default,{label:"application/json",value:"application/json",children:(0,n.jsx)(f(),{className:"openapi-tabs__schema",children:(0,n.jsx)(w.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function K(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(S,{...e})}):S(e)}}}]);