"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[3599],{98089:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>E,contentTitle:()=>v,default:()=>_,frontMatter:()=>b,metadata:()=>y,toc:()=>k});var l=a(74848),t=a(28453),n=a(91366),i=a.n(n),r=(a(6050),a(57742)),o=a.n(r),d=(a(67792),a(27362)),c=a.n(d),p=(a(36683),a(81124)),m=a.n(p),h=a(60674),u=a.n(h),x=a(23397),j=a.n(x),g=(a(26651),a(51107)),f=(a(77675),a(19365));const b={id:"get-host",title:"Get Docker Host",description:"Retrieve information about the Docker host",sidebar_label:"Get Docker Host",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFu2zAM/RWBZ9fO2g0YfFqHFV2wAR2W9ZTmoMiMrVWWVEpOlhn694G206ZZd9gOuySG9EQ+Pj6yhwqDIu2jdhZK+IqRNG5RaLtx1Eo+FnLtuihig+KDU/dIonEhQgbOIw2IeQUl1Bg/jueEwTsbMEDZw/lsxn/P09x8ggyUsxFt5FvpvdFqiFV8DwzpIagGW8lfnjhT1GPAIXnZQ9x7hBJCJG1rSInzPnSasIJyOaJW2QHl1t9RRUiJca9nr36ndGtlFxtH+idW/04OiRy9zO4lJm9eEmduI5KVRiyQtkjiaoj5fyilDAKqjnTcQ7ns4T1KQrrsYgPlcpVYUFkHFniywmKrWOYWY+MmF0AGXvIDKKoBdBa2qpg8E4aawhC8I8OgwjglDd+Xb96eX7wCTnNgseCqxkKOuZxq9m3vUdxNkDsQG2eM22El1nshRfBSoZC2EtHdoxVSjUYRG3LtYOzbgCQCC64Vis+u1lagrbzTNuaQgeYkDcoKuRNWtqzb5WSYoQ/wKKf0+hPuB4F5ipgst06qoXXYSs1lB2kwvAva1p2RkZzNlWuPYn+Zi0XnvSNWbVSqidGXRRE6j+SNjDyhudQFpOx0vuyZJ2x1QHE5FwfsoECrFbkwFhoEKhf2IWLLRRqt0AZklgcW118+i+1FPnvGIZRFsdvt8tp2uaO6mN6FQtbenF3ks7yJrWFWEakNN5tJ16MSdrKukXLtigFSsHo6GoYsjsuDDNguY1Wz/CKfnZHKX3Ns70JspT1ie43xsKGmTfRMlf5pgv5uz019jfgjFt5IbTn9IEc/OX0JT06H7HH5jKtqCX2/lgFvyaTExw8dEo/XKoOtJC3XXPdylbKDw3g47nHPDVAKPXPYStON5jqZ/HQ8fddX3yADOY3Ikx85WHb44OiHK7s/in3q55EC/6bsD0/6fnR7So/48eqPLx6HaESzmKuU0i8H0z6Z",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},v=void 0,y={id:"superplatform/get-host",title:"Get Docker Host",description:"Retrieve information about the Docker host",source:"@site/docs/superplatform/get-host.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-host",permalink:"/docs/superplatform/get-host",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-host",title:"Get Docker Host",description:"Retrieve information about the Docker host",sidebar_label:"Get Docker Host",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFu2zAM/RWBZ9fO2g0YfFqHFV2wAR2W9ZTmoMiMrVWWVEpOlhn694G206ZZd9gOuySG9EQ+Pj6yhwqDIu2jdhZK+IqRNG5RaLtx1Eo+FnLtuihig+KDU/dIonEhQgbOIw2IeQUl1Bg/jueEwTsbMEDZw/lsxn/P09x8ggyUsxFt5FvpvdFqiFV8DwzpIagGW8lfnjhT1GPAIXnZQ9x7hBJCJG1rSInzPnSasIJyOaJW2QHl1t9RRUiJca9nr36ndGtlFxtH+idW/04OiRy9zO4lJm9eEmduI5KVRiyQtkjiaoj5fyilDAKqjnTcQ7ns4T1KQrrsYgPlcpVYUFkHFniywmKrWOYWY+MmF0AGXvIDKKoBdBa2qpg8E4aawhC8I8OgwjglDd+Xb96eX7wCTnNgseCqxkKOuZxq9m3vUdxNkDsQG2eM22El1nshRfBSoZC2EtHdoxVSjUYRG3LtYOzbgCQCC64Vis+u1lagrbzTNuaQgeYkDcoKuRNWtqzb5WSYoQ/wKKf0+hPuB4F5ipgst06qoXXYSs1lB2kwvAva1p2RkZzNlWuPYn+Zi0XnvSNWbVSqidGXRRE6j+SNjDyhudQFpOx0vuyZJ2x1QHE5FwfsoECrFbkwFhoEKhf2IWLLRRqt0AZklgcW118+i+1FPnvGIZRFsdvt8tp2uaO6mN6FQtbenF3ks7yJrWFWEakNN5tJ16MSdrKukXLtigFSsHo6GoYsjsuDDNguY1Wz/CKfnZHKX3Ns70JspT1ie43xsKGmTfRMlf5pgv5uz019jfgjFt5IbTn9IEc/OX0JT06H7HH5jKtqCX2/lgFvyaTExw8dEo/XKoOtJC3XXPdylbKDw3g47nHPDVAKPXPYStON5jqZ/HQ8fddX3yADOY3Ikx85WHb44OiHK7s/in3q55EC/6bsD0/6fnR7So/48eqPLx6HaESzmKuU0i8H0z6Z",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get Container Summary",permalink:"/docs/superplatform/container-summary"},next:{title:"Build an Image",permalink:"/docs/superplatform/build-image"}},E={},k=[];function F(e){const s={p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get Docker Host"}),"\n",(0,l.jsx)(o(),{method:"get",path:"/docker-svc/host"}),"\n",(0,l.jsx)(s.p,{children:"Retrieve information about the Docker host"}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(i(),{label:void 0,id:void 0,children:[(0,l.jsxs)(f.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"host",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "host": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(F,{...e})}):F(e)}}}]);