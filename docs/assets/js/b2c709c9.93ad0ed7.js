"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[1479],{21949:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>_,contentTitle:()=>v,default:()=>q,frontMatter:()=>b,metadata:()=>y,toc:()=>k});var i=a(74848),n=a(28453),l=a(91366),r=a.n(l),t=(a(6050),a(57742)),o=a.n(t),c=(a(67792),a(27362)),d=a.n(c),m=(a(36683),a(81124)),p=a.n(m),h=a(60674),u=a.n(h),x=a(23397),g=a.n(x),j=(a(26651),a(51107)),f=(a(77675),a(19365));const b={id:"login",title:"Login",description:"Authenticates a user and returns a token.",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VVFv2zYQ/ivEPcuSl6zAoKelQ1ukC5YgTh+KNA9n6SyxpUj2SNr1DP334ii7cRav6Powv5g6Ho/ffXf3cQcthYa1j9pZqOEixZ5s1A1GCgpVCsQKbauYYmIrpug+kS2hAKbPiUJ86dot1DtonI1koyzReyMhtLPVxyCBdxCangaUlWfniaOmIF80oDayiFtPUEOIrG0HYwEeQ9g4bk9sjsXB4pYfqYkwiulpKleu01bdTiD3cDVTC3XkRKMYgnc2TDDO5nP5OxUipKahEFbJQPGzWWbSnpsbJozUXsSTBLRk6N939Sliisebnu0k337nMqn05Q9yfYL9sYBfT1F4addodKveLq7/+nn6iNnxD/bBWMCL00gisUWjFsRrYvUqx/x/IIkRuwD1PbyTiRIIuiF4KGCg2LsWavAut6nH2EMNldRjFtZNZaQJoYCQYUuMHSQ24lMZ16DpXYj1i9/Ozn+B8UH8msQ6bhcCfML6kpCJZbaf03K39aQ+7F0+gFo5Y9yGWrXcKlTBY0NZAHJfKWymIVIrdoOKPamcT9gnpKaJIdt6p20UldBySU/YkpBtcaC9zDjWf2eq4Rtj6PWftM0cCv23jwLz6gsO3tCRYBwIP9aJ4+mwK3dQJWzik4NoKPwetO2SwcjOlo0bjrDdXKpF8t6xlGNiuo/R11UVkif2BuPK8VCiruCZ6twmm+lqaU3GeRXIrGZSIWrVxaVC70Op3rvEyrPrGIcBl4aUtrPepUDqzc1dqe56Uq810xIDqZXjTLSc7kgoNbohGzIZB8xvbq7U+rycP0Ec6qrabDZlZ1PpuKv250KFnTez83Je9nEwWTSIh3C9OrTlY8Ib7DriUrsqu1RSKx2lELB4JBAKkNacGJiXZ1m9XYgD2iOQV/tGfkLY0bvxnx6ffcdE+hIrb1DbrGGcX5JphO7hMEJCWb77oQApheztdkLuOzbjKObPiXgL9f1DAWtkLTWRr7E4tK5M3SfaQg1/THhnMjiSOJo09e4/tGMsDicumoZ8/K7vsRDcXC/uoIDl/l0dXCtnGDfyiOEGaoACXOYvT3e27cCg7RJ24jvFlN9XFia4Iw==",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},v=void 0,y={id:"singulatron/login",title:"Login",description:"Authenticates a user and returns a token.",source:"@site/docs/singulatron/login.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/login",permalink:"/docs/singulatron/login",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"login",title:"Login",description:"Authenticates a user and returns a token.",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VVFv2zYQ/ivEPcuSl6zAoKelQ1ukC5YgTh+KNA9n6SyxpUj2SNr1DP334ii7cRav6Powv5g6Ho/ffXf3cQcthYa1j9pZqOEixZ5s1A1GCgpVCsQKbauYYmIrpug+kS2hAKbPiUJ86dot1DtonI1koyzReyMhtLPVxyCBdxCangaUlWfniaOmIF80oDayiFtPUEOIrG0HYwEeQ9g4bk9sjsXB4pYfqYkwiulpKleu01bdTiD3cDVTC3XkRKMYgnc2TDDO5nP5OxUipKahEFbJQPGzWWbSnpsbJozUXsSTBLRk6N939Sliisebnu0k337nMqn05Q9yfYL9sYBfT1F4addodKveLq7/+nn6iNnxD/bBWMCL00gisUWjFsRrYvUqx/x/IIkRuwD1PbyTiRIIuiF4KGCg2LsWavAut6nH2EMNldRjFtZNZaQJoYCQYUuMHSQ24lMZ16DpXYj1i9/Ozn+B8UH8msQ6bhcCfML6kpCJZbaf03K39aQ+7F0+gFo5Y9yGWrXcKlTBY0NZAHJfKWymIVIrdoOKPamcT9gnpKaJIdt6p20UldBySU/YkpBtcaC9zDjWf2eq4Rtj6PWftM0cCv23jwLz6gsO3tCRYBwIP9aJ4+mwK3dQJWzik4NoKPwetO2SwcjOlo0bjrDdXKpF8t6xlGNiuo/R11UVkif2BuPK8VCiruCZ6twmm+lqaU3GeRXIrGZSIWrVxaVC70Op3rvEyrPrGIcBl4aUtrPepUDqzc1dqe56Uq810xIDqZXjTLSc7kgoNbohGzIZB8xvbq7U+rycP0Ec6qrabDZlZ1PpuKv250KFnTez83Je9nEwWTSIh3C9OrTlY8Ib7DriUrsqu1RSKx2lELB4JBAKkNacGJiXZ1m9XYgD2iOQV/tGfkLY0bvxnx6ffcdE+hIrb1DbrGGcX5JphO7hMEJCWb77oQApheztdkLuOzbjKObPiXgL9f1DAWtkLTWRr7E4tK5M3SfaQg1/THhnMjiSOJo09e4/tGMsDicumoZ8/K7vsRDcXC/uoIDl/l0dXCtnGDfyiOEGaoACXOYvT3e27cCg7RJ24jvFlN9XFia4Iw==",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Change User Password (Admin)",permalink:"/docs/singulatron/change-user-password-admin"},next:{title:"Upsert a Permission",permalink:"/docs/singulatron/upsert-a-permission"}},_={},k=[];function N(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Login"}),"\n",(0,i.jsx)(o(),{method:"post",path:"/user-svc/login"}),"\n",(0,i.jsx)(s.p,{children:"Authenticates a user and returns a token."}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(d(),{className:"openapi-tabs__mime",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(s.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,i.jsx)(s.p,{children:"Login Request"})})}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(f.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Login successful"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"token"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"deletedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(u(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "token": {\n    "createdAt": "string",\n    "deletedAt": "string",\n    "id": "string",\n    "token": "string",\n    "updatedAt": "string",\n    "userId": "string"\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(f.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);