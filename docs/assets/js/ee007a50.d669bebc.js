"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7074],{37991:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>b,default:()=>q,frontMatter:()=>y,metadata:()=>v,toc:()=>_});var l=a(74848),i=a(28453),n=a(91366),r=a.n(n),t=(a(6050),a(57742)),d=a.n(t),o=(a(67792),a(27362)),c=a.n(o),p=(a(36683),a(81124)),m=a.n(p),h=a(60674),u=a.n(h),x=a(23397),j=a.n(x),g=(a(26651),a(51107)),f=(a(77675),a(19365));const y={id:"login",title:"Login",description:"Authenticates a user and returns a token.",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:"eJy9lVGT0zgMx7+KR89p0mNh7iZPtzAMU9i53aHwtPRBddTU4NhGdlp6nXz3GzktdNkcw/FwfWlGlmzpZ+nvIzQUNZuQjHdQw3WftuSS0ZgoKlR9JFboGsWUenZiSv4TuRIK8IEYJW7RQA3Wt8ZBAUyfe4rpuW8OUB9Be5fIJfnEEKxsbLyrPkY57ghRb6lD+Qos+yVD8RyGOoelQyCoISY2roWhgIAx7j03k4vR9u3EwlCcLX79kXSCQUwPa7+RCtTbMf9TJYapgTpxT4MYYvAujhk+mc/lb2qL2GtNMW56C8WvAsiUJ7gwYaLmeppMQ5b+fdVME/t60qOVPjQ/OExaYzG15QTrCfpDAU+nEC7cDq1p1Ovl7V+/jo+YPf9kHwwFPJvOJBE7tGpJvCNWL/Oe/09KYsQ2Qn0P72UElzsNqwI6Slsv0xZ8btGAaQs1VHIXs7jT1XkKY05Z4o/QsxWfynqNdutjqp/98eTqNxhW4qd7NumwlKTHPJ8TMrEIwWMk7w6B1IeTywdQG2+t31Oj1geFKgbUlNUi95RCPQ6Q2rDvVNqSyrVE4Wk0qXFayDXBG5dEUowcsiVsSEA77OikSZ7N3xkzfKWFwbyhQ+Yn6N9+052XX7ALlh7oyBn3pXx8s42qcTkrbuO/0yHq0AjIiJbin9G4treY2LtS++4i27uFWvYheJYLGtlvUwp1VcU+EAeLaeO5K9FU8EiDbt0sMHUmkrpeqLNvZtoZzT6O6KIi7eMhJuoEmzWaXMwFn7N4dXejdlfl/EEOsa6q/X5ftq4vPbfVKS5W2AY7uyrn5TZ1NosCcRdvN6ebuihhj21LXBpfZZdK7sMkgQ3Ly/KgAGnAsap5eVXOZ6zL37N++5g6dBfZ3py69gGLi7fjPz1Lp/ZI9CVVwaJxWayEwfE0L/dwnhdhl89eFSCTIWvH4xojvWc7DGL+3BMfoL5fFbBDNriWWu9XQ3HuUxmxT3SAGl6M+c5kSqR+tP3YqN+JxFCcI661ppB+6Hs59Xe3y3dQwPr0tna+kRjGvbxWuIca8rMs0XmUs+0IFl3bYyu+457y+wfpIcG3",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},b=void 0,v={id:"superplatform/login",title:"Login",description:"Authenticates a user and returns a token.",source:"@site/docs/superplatform/login.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/login",permalink:"/docs/superplatform/login",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"login",title:"Login",description:"Authenticates a user and returns a token.",sidebar_label:"Login",hide_title:!0,hide_table_of_contents:!0,api:"eJy9lVGT0zgMx7+KR89p0mNh7iZPtzAMU9i53aHwtPRBddTU4NhGdlp6nXz3GzktdNkcw/FwfWlGlmzpZ+nvIzQUNZuQjHdQw3WftuSS0ZgoKlR9JFboGsWUenZiSv4TuRIK8IEYJW7RQA3Wt8ZBAUyfe4rpuW8OUB9Be5fIJfnEEKxsbLyrPkY57ghRb6lD+Qos+yVD8RyGOoelQyCoISY2roWhgIAx7j03k4vR9u3EwlCcLX79kXSCQUwPa7+RCtTbMf9TJYapgTpxT4MYYvAujhk+mc/lb2qL2GtNMW56C8WvAsiUJ7gwYaLmeppMQ5b+fdVME/t60qOVPjQ/OExaYzG15QTrCfpDAU+nEC7cDq1p1Ovl7V+/jo+YPf9kHwwFPJvOJBE7tGpJvCNWL/Oe/09KYsQ2Qn0P72UElzsNqwI6Slsv0xZ8btGAaQs1VHIXs7jT1XkKY05Z4o/QsxWfynqNdutjqp/98eTqNxhW4qd7NumwlKTHPJ8TMrEIwWMk7w6B1IeTywdQG2+t31Oj1geFKgbUlNUi95RCPQ6Q2rDvVNqSyrVE4Wk0qXFayDXBG5dEUowcsiVsSEA77OikSZ7N3xkzfKWFwbyhQ+Yn6N9+052XX7ALlh7oyBn3pXx8s42qcTkrbuO/0yHq0AjIiJbin9G4treY2LtS++4i27uFWvYheJYLGtlvUwp1VcU+EAeLaeO5K9FU8EiDbt0sMHUmkrpeqLNvZtoZzT6O6KIi7eMhJuoEmzWaXMwFn7N4dXejdlfl/EEOsa6q/X5ftq4vPbfVKS5W2AY7uyrn5TZ1NosCcRdvN6ebuihhj21LXBpfZZdK7sMkgQ3Ly/KgAGnAsap5eVXOZ6zL37N++5g6dBfZ3py69gGLi7fjPz1Lp/ZI9CVVwaJxWayEwfE0L/dwnhdhl89eFSCTIWvH4xojvWc7DGL+3BMfoL5fFbBDNriWWu9XQ3HuUxmxT3SAGl6M+c5kSqR+tP3YqN+JxFCcI661ppB+6Hs59Xe3y3dQwPr0tna+kRjGvbxWuIca8rMs0XmUs+0IFl3bYyu+457y+wfpIcG3",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Change User Password (Admin)",permalink:"/docs/superplatform/change-password-admin"},next:{title:"Create an Organization",permalink:"/docs/superplatform/create-organization"}},N={},_=[];function w(e){const s={p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Login"}),"\n",(0,l.jsx)(d(),{method:"post",path:"/user-svc/login"}),"\n",(0,l.jsx)(s.p,{children:"Authenticates a user and returns a token."}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(c(),{className:"openapi-tabs__mime",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"Login Request"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"contact",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"slug",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(f.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Login successful"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!0,className:"schemaItem",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsxs)("span",{className:"openapi-schema__container",children:[(0,l.jsx)("strong",{className:"openapi-schema__property",children:(0,l.jsx)(s.p,{children:"token"})}),(0,l.jsx)("span",{className:"openapi-schema__name",children:(0,l.jsx)(s.p,{children:"object"})})]})}),(0,l.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"deletedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"token",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "token": {\n    "createdAt": "string",\n    "deletedAt": "string",\n    "id": "string",\n    "token": "string",\n    "updatedAt": "string",\n    "userId": "string"\n  }\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(f.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(w,{...e})}):w(e)}}}]);