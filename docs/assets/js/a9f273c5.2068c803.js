"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[5727],{31195:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>y,default:()=>_,frontMatter:()=>g,metadata:()=>b,toc:()=>S});var n=a(74848),l=a(28453),r=a(91366),i=a.n(r),t=(a(6050),a(57742)),o=a.n(t),c=(a(67792),a(27362)),d=a.n(c),p=(a(36683),a(81124)),m=a.n(p),h=a(60674),u=a.n(h),f=a(23397),x=a.n(f),j=(a(26651),a(51107)),v=(a(77675),a(19365));const g={id:"get-info",title:"Get Docker Service Information",description:"Retrieve detailed information about the Docker service",sidebar_label:"Get Docker Service Information",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1v20gM/SsDnhXJbVqg0GlTtAiMLdCibk6uD/SIlqYZzUw5I3u9gv77gvponDS59LAXWyA55OMjH3uoKGo2IRnvoISvlNjQkVRFCY2lShl38Nyi+BXufZdUakh98PqeWEXio9EEGfhAPAatKyihprR2Bw8ZMMXgXaQIZQ+vVyv5e1xyM+VQ64dCkIH2LpFLEo4hWKNHR/Ejypseom6oRfkKLKWTmSoI2t+t1Yj2A1Lr3U1VMcXRnM6BoISY2LgahgyI2fOzngbj1PKFd++9JXQwDNli8vsfpNOzFrG9Wb36vf87h11qPJt/qfrzxl+C/gKSt89NYu0SsUOrZCTE6uOY8/+BNGQQSXds0hnKbQ/vCZn4pksNlNvdsMsgYR2h3MK8epujhl0GLaXGzysHGQSUB1BME7+KR12YaRHj2FMck3dsJaiwXqNtfEzl23evr1+BlFlQbKSrqZFLLE85+3YOpL7PId9BHby1/kSV2p8VqhhQk0JXqeTvySnUPzvDVKkD+3YU0l0UGS0a+ORr4xS5KnjjUg4ZGCnSEFYkk3DYCm8388IsYpnpxGD+pvNI8KIDGR3qcXTUopG2I1qKf0Xj6s5iYu9y7duL3F/WatOF4Fn4nJhqUgplUcQuEAeLSYSaoylEGY/p+OyuAlNrIqmbtVpiRwZao9nPByMq0j6eY6JWmrRGk4skKBcUt18+qeN1vnqEIZZFcTqd8tp1uee6mN/FAutgr67zVd6k1gqqRNzGz4eZ14sWTljXxLnxxRhSCHsmWQnZXLYHGci6TF2t8ut8dcU6fyO5g4+pRXeB9pbSchGfv2aPSOofBPXn93YeeaJ/UhEsGifIRqb6WQRbeBABzBuxy0DWXZx9v8dId2yHQcw/O2JR3i6DI7LBvVCy3cnpm5ZPdHNPZ5mN1hRkOY5ou2nvnhyF4VKYtx+/QQY4q+dhVSVZtnxI9sXlzhe5n676BEF+h+yFJ30/CWEYfsVPrhdf/NLXFC1k7oZh+A810nTT",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},y=void 0,b={id:"superplatform/get-info",title:"Get Docker Service Information",description:"Retrieve detailed information about the Docker service",source:"@site/docs/superplatform/get-info.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-info",permalink:"/docs/superplatform/get-info",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-info",title:"Get Docker Service Information",description:"Retrieve detailed information about the Docker service",sidebar_label:"Get Docker Service Information",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VE1v20gM/SsDnhXJbVqg0GlTtAiMLdCibk6uD/SIlqYZzUw5I3u9gv77gvponDS59LAXWyA55OMjH3uoKGo2IRnvoISvlNjQkVRFCY2lShl38Nyi+BXufZdUakh98PqeWEXio9EEGfhAPAatKyihprR2Bw8ZMMXgXaQIZQ+vVyv5e1xyM+VQ64dCkIH2LpFLEo4hWKNHR/Ejypseom6oRfkKLKWTmSoI2t+t1Yj2A1Lr3U1VMcXRnM6BoISY2LgahgyI2fOzngbj1PKFd++9JXQwDNli8vsfpNOzFrG9Wb36vf87h11qPJt/qfrzxl+C/gKSt89NYu0SsUOrZCTE6uOY8/+BNGQQSXds0hnKbQ/vCZn4pksNlNvdsMsgYR2h3MK8epujhl0GLaXGzysHGQSUB1BME7+KR12YaRHj2FMck3dsJaiwXqNtfEzl23evr1+BlFlQbKSrqZFLLE85+3YOpL7PId9BHby1/kSV2p8VqhhQk0JXqeTvySnUPzvDVKkD+3YU0l0UGS0a+ORr4xS5KnjjUg4ZGCnSEFYkk3DYCm8388IsYpnpxGD+pvNI8KIDGR3qcXTUopG2I1qKf0Xj6s5iYu9y7duL3F/WatOF4Fn4nJhqUgplUcQuEAeLSYSaoylEGY/p+OyuAlNrIqmbtVpiRwZao9nPByMq0j6eY6JWmrRGk4skKBcUt18+qeN1vnqEIZZFcTqd8tp1uee6mN/FAutgr67zVd6k1gqqRNzGz4eZ14sWTljXxLnxxRhSCHsmWQnZXLYHGci6TF2t8ut8dcU6fyO5g4+pRXeB9pbSchGfv2aPSOofBPXn93YeeaJ/UhEsGifIRqb6WQRbeBABzBuxy0DWXZx9v8dId2yHQcw/O2JR3i6DI7LBvVCy3cnpm5ZPdHNPZ5mN1hRkOY5ou2nvnhyF4VKYtx+/QQY4q+dhVSVZtnxI9sXlzhe5n676BEF+h+yFJ30/CWEYfsVPrhdf/NLXFC1k7oZh+A810nTT",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Build an Image",permalink:"/docs/superplatform/build-image"},next:{title:"Download a File",permalink:"/docs/superplatform/download"}},k={},S=[];function N(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Get Docker Service Information"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/docker-svc/info"}),"\n",(0,n.jsx)(s.p,{children:"Retrieve detailed information about the Docker service"}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(i(),{label:void 0,id:void 0,children:[(0,n.jsxs)(v.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Service Information"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsxs)("span",{className:"openapi-schema__container",children:[(0,n.jsx)("strong",{className:"openapi-schema__property",children:(0,n.jsx)(s.p,{children:"info"})}),(0,n.jsx)("span",{className:"openapi-schema__name",children:(0,n.jsx)(s.p,{children:"object"})})]})}),(0,n.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"dockerDaemonAddress",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"hasDocker",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}})]})]})})})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(m(),{responseExample:'{\n  "info": {\n    "dockerDaemonAddress": "string",\n    "error": "string",\n    "hasDocker": true\n  }\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(v.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(N,{...e})}):N(e)}}}]);