"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2614],{42880:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>D,contentTitle:()=>v,default:()=>I,frontMatter:()=>k,metadata:()=>_,toc:()=>N});var l=s(74848),t=s(28453),r=s(91366),n=s.n(r),i=(s(6050),s(57742)),d=s.n(i),o=(s(67792),s(27362)),m=s.n(o),c=s(36683),p=s.n(c),u=s(81124),h=s.n(u),j=s(60674),x=s.n(j),f=s(23397),g=s.n(f),b=(s(26651),s(51107)),y=(s(77675),s(19365));const k={id:"make-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",sidebar_label:"Make a Model Default",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VcFu3DYQ/RViTi1AS5s4AQqd4iBFsU1SG9345OxhTM2uGFMkQ1K73QoE+hH9wn5JMZJ2vbbXBXrxRaLEmeGbx/fIHmqKKmiftLNQwYJSFChaV5MRGEVqSNS0ws6k6ec/f/0ttg1Z4YNrPUcHEpFsEludGtclgeLzEDn/IE/k6yi6SHUBEpyngLzwvIYKWryjD2MoSPAYsKVEIUJ10z9Cua8PEjR/e0wNSLDYEhfi2XkNEgJ973SgGqoUOpIQVUMtQtVD2nkOjSlou4aclxwcvbORIs+/ns349XDZy48gQTmbyCaeRe+NVkMH5bfIIf3TJdztN1IJcs5ZwptTZed2g0bX4tfF5W//ZwEfmMCkR8QUggunWpPPIHn1FMm1xS41Lug/qX4xJG9Pc5IoWDRiQWFDQfw81HwZSFlCJNUFnXaD9t4TBgoXXWqgulmyVBKuWZaTDhcbBUsJLaXGsZB9NwqY46Ec1HgWN2oclf0kz1yy4M/qg+Lj0Oko9y4Yzi2NU2gaF1P19qfX56+AF99jW3CvY3vHCB8z+WXnSXydQr6CWDlj3JZqcbsTKKJHRQJtLZK7IytQjY4Rq+Dawb3XkYKIvA1akfjk1toKsrV32qZib8CGsKZwb8GLSUbD7sCBZPT6I+0G2rVdOQbLG4pq2FBqUXPbEQ3Fd1HbdWcwBWcL5dqj2ldzsei8d4FZG5lqUvJVWcbOU/AG08qFtkBdQpaPPWzPfKBWRxIXc7GPHRhotQoujo1GQcrFXUzUcpNGK7KRGOUexS9Xn8TmvJg9wBCrstxut8XadoUL63LKiyWuvTk7L2ZFk1rDqBKFNl6uJl6PWtjiek2h0K4cQkpmTyfDIYvj9kACy2XsalacF7OzoIo3XNu7mFq0R2g/4x0dzuX7Q/YBNf29uV72GpjEkeiPVHqD2nIPA6f95KIbOLgI5DgGCdX9Qf/ASksJbBlO6/tbjHQdTM78+3tHgT29lLDBoPGWaeXbRUce11Ct0ET6D2J++H26Un4UR5fQyQ72mrc73io0HX+BhDvaHV1SeZnl3j4MZZy9UIp8Osp7ctjl4xPn6voLSMDJ//dm42JyP+DqJzE9NusIgZ9ZPpPS96OVcz7Ej1PPZhxOiDGaKVrmnP8FUNLqRA==",sidebar_class_name:"put api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},v=void 0,_={id:"superplatform/make-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",source:"@site/docs/superplatform/make-default.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/make-default",permalink:"/docs/superplatform/make-default",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"make-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",sidebar_label:"Make a Model Default",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VcFu3DYQ/RViTi1AS5s4AQqd4iBFsU1SG9345OxhTM2uGFMkQ1K73QoE+hH9wn5JMZJ2vbbXBXrxRaLEmeGbx/fIHmqKKmiftLNQwYJSFChaV5MRGEVqSNS0ws6k6ec/f/0ttg1Z4YNrPUcHEpFsEludGtclgeLzEDn/IE/k6yi6SHUBEpyngLzwvIYKWryjD2MoSPAYsKVEIUJ10z9Cua8PEjR/e0wNSLDYEhfi2XkNEgJ973SgGqoUOpIQVUMtQtVD2nkOjSlou4aclxwcvbORIs+/ns349XDZy48gQTmbyCaeRe+NVkMH5bfIIf3TJdztN1IJcs5ZwptTZed2g0bX4tfF5W//ZwEfmMCkR8QUggunWpPPIHn1FMm1xS41Lug/qX4xJG9Pc5IoWDRiQWFDQfw81HwZSFlCJNUFnXaD9t4TBgoXXWqgulmyVBKuWZaTDhcbBUsJLaXGsZB9NwqY46Ec1HgWN2oclf0kz1yy4M/qg+Lj0Oko9y4Yzi2NU2gaF1P19qfX56+AF99jW3CvY3vHCB8z+WXnSXydQr6CWDlj3JZqcbsTKKJHRQJtLZK7IytQjY4Rq+Dawb3XkYKIvA1akfjk1toKsrV32qZib8CGsKZwb8GLSUbD7sCBZPT6I+0G2rVdOQbLG4pq2FBqUXPbEQ3Fd1HbdWcwBWcL5dqj2ldzsei8d4FZG5lqUvJVWcbOU/AG08qFtkBdQpaPPWzPfKBWRxIXc7GPHRhotQoujo1GQcrFXUzUcpNGK7KRGOUexS9Xn8TmvJg9wBCrstxut8XadoUL63LKiyWuvTk7L2ZFk1rDqBKFNl6uJl6PWtjiek2h0K4cQkpmTyfDIYvj9kACy2XsalacF7OzoIo3XNu7mFq0R2g/4x0dzuX7Q/YBNf29uV72GpjEkeiPVHqD2nIPA6f95KIbOLgI5DgGCdX9Qf/ASksJbBlO6/tbjHQdTM78+3tHgT29lLDBoPGWaeXbRUce11Ct0ET6D2J++H26Un4UR5fQyQ72mrc73io0HX+BhDvaHV1SeZnl3j4MZZy9UIp8Osp7ctjl4xPn6voLSMDJ//dm42JyP+DqJzE9NusIgZ9ZPpPS96OVcz7Ej1PPZhxOiDGaKVrmnP8FUNLqRA==",sidebar_class_name:"put api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get a Model",permalink:"/docs/superplatform/get-model"},next:{title:"Start a Model",permalink:"/docs/superplatform/start-model"}},D={},N=[];function S(e){const a={p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Make a Model Default"}),"\n",(0,l.jsx)(d(),{method:"put",path:"/model-svc/model/{modelId}/make-default"}),"\n",(0,l.jsx)(a.p,{children:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used."}),"\n",(0,l.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Model ID",in:"path",name:"modelId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"object"})})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(h(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function I(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(S,{...e})}):S(e)}}}]);