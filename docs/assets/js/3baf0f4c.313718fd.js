"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[3692],{78097:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>S,contentTitle:()=>k,default:()=>D,frontMatter:()=>y,metadata:()=>_,toc:()=>R});var i=a(74848),l=a(28453),n=a(91366),r=a.n(n),t=(a(6050),a(57742)),d=a.n(t),o=(a(67792),a(27362)),c=a.n(o),m=a(36683),p=a.n(m),h=a(81124),u=a.n(h),x=a(60674),j=a.n(x),f=a(23397),g=a.n(f),v=(a(26651),a(51107)),b=(a(77675),a(19365));const y={id:"delete-definition",title:"Delete Definition",description:"Deletes a registered definition by ID.",sidebar_label:"Delete Definition",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VcFu2zgQ/RViTltAkdymxS502uw6WBgbbIu6OaU+MNRYYkuR7JBy1ivw34uR5FhO3GJPudgS9ch573Ee2UOFQZH2UTsLJSzRYMQgpCCsdYhIWIkKt9pqRoj7vVgtc8jAeSTJQ6sKSqiGactHHGTgJckWI1KA8q5/VuZxxdUSMtA86GVsIAMrW4QSdAUZEH7rNGEFZaQOMwiqwVZC2UPce0aFSNrWkNKGwcE7GzDw9zeLt/x3WvYfJ/50NqKNkDJ4u1g8h6zsThpdjbTUBC57kN4brQbFxZfA0H7GxhP7EfVYG4kcnSOZHUbc/RdUEVJKA4/Xz3ncWtnFxpH+D6sXZHLGtDXSTisU1kWxdZ19OTrvzm9QRLLSCOaFJK6HNV+GUsogoOpIx/3Q1H+gJKSrLjZQ3m24B6Osud/h45Ae2ov1TsEmgxZj445JGfLBs6CgCXkRdqo4Jq3odZWA67HKMUMdGZ5RGKekaVyI5bvf3ly+Bi584LVmnaO0ObunLn7aexSfJ8hnEFtnjHvAigMuRfBSoZC2EtF9RSukGmMotuRaERsUtwFJhENr3LhaW4G28k7bmB8C3aCskI6Rvpo6Wk5HxGSw9Ppv3A+Wa7t1TJY3U6phM7GVmmUHaTD8HrStOyMjOZsr187W/rAS6857RxGyyakmRl8WReg8kjcybh21udQFh//Ujvf2whO2OqC4WokDdnCg1YpcGIUGgcqFfYjYskijFdqAzPLA4q8PN2J3mS9OOISyKB4eHvLadrmjupjmhULW3lxc5ou8ia1hVhGpDe+3k68zCQ+yrpFy7YoBUrB7OhqGrOfyIANul1HVIr/MFxek8l95be9CbKWdsR0Pe3FybJ/40h9T9f9vhmlXI/4bC2+ktlx8MKOfmv4O5k0/FJ0xKHXFieH+Zmjf38uAt2RS4uFvHRKHb5PBTpKW9+wB3y868HMF5VaagD8R8svH6VJ5JZ5eQ2epH7rU7tlcaTp+gwy+4n68ptImZYdeZyrjhyul0MfZlGenUpqfC8vrm+tP15CBnPJ6DAevlx0euMBZRk/DNbLg35T9YErfj9FL6RE/fvrhjMdET+JZRErpO1Eu1n0=",sidebar_class_name:"delete api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},k=void 0,_={id:"superplatform/delete-definition",title:"Delete Definition",description:"Deletes a registered definition by ID.",source:"@site/docs/superplatform/delete-definition.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/delete-definition",permalink:"/docs/superplatform/delete-definition",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-definition",title:"Delete Definition",description:"Deletes a registered definition by ID.",sidebar_label:"Delete Definition",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VcFu2zgQ/RViTltAkdymxS502uw6WBgbbIu6OaU+MNRYYkuR7JBy1ivw34uR5FhO3GJPudgS9ch573Ee2UOFQZH2UTsLJSzRYMQgpCCsdYhIWIkKt9pqRoj7vVgtc8jAeSTJQ6sKSqiGactHHGTgJckWI1KA8q5/VuZxxdUSMtA86GVsIAMrW4QSdAUZEH7rNGEFZaQOMwiqwVZC2UPce0aFSNrWkNKGwcE7GzDw9zeLt/x3WvYfJ/50NqKNkDJ4u1g8h6zsThpdjbTUBC57kN4brQbFxZfA0H7GxhP7EfVYG4kcnSOZHUbc/RdUEVJKA4/Xz3ncWtnFxpH+D6sXZHLGtDXSTisU1kWxdZ19OTrvzm9QRLLSCOaFJK6HNV+GUsogoOpIx/3Q1H+gJKSrLjZQ3m24B6Osud/h45Ae2ov1TsEmgxZj445JGfLBs6CgCXkRdqo4Jq3odZWA67HKMUMdGZ5RGKekaVyI5bvf3ly+Bi584LVmnaO0ObunLn7aexSfJ8hnEFtnjHvAigMuRfBSoZC2EtF9RSukGmMotuRaERsUtwFJhENr3LhaW4G28k7bmB8C3aCskI6Rvpo6Wk5HxGSw9Ppv3A+Wa7t1TJY3U6phM7GVmmUHaTD8HrStOyMjOZsr187W/rAS6857RxGyyakmRl8WReg8kjcybh21udQFh//Ujvf2whO2OqC4WokDdnCg1YpcGIUGgcqFfYjYskijFdqAzPLA4q8PN2J3mS9OOISyKB4eHvLadrmjupjmhULW3lxc5ou8ia1hVhGpDe+3k68zCQ+yrpFy7YoBUrB7OhqGrOfyIANul1HVIr/MFxek8l95be9CbKWdsR0Pe3FybJ/40h9T9f9vhmlXI/4bC2+ktlx8MKOfmv4O5k0/FJ0xKHXFieH+Zmjf38uAt2RS4uFvHRKHb5PBTpKW9+wB3y868HMF5VaagD8R8svH6VJ5JZ5eQ2epH7rU7tlcaTp+gwy+4n68ptImZYdeZyrjhyul0MfZlGenUpqfC8vrm+tP15CBnPJ6DAevlx0euMBZRk/DNbLg35T9YErfj9FL6RE/fvrhjMdET+JZRErpO1Eu1n0=",sidebar_class_name:"delete api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Register a Definition",permalink:"/docs/superplatform/save-definition"},next:{title:"List Definitions",permalink:"/docs/superplatform/list-definitions"}},S={},R=[];function N(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"Delete Definition"}),"\n",(0,i.jsx)(d(),{method:"delete",path:"/registry-svc/definition/{id}"}),"\n",(0,i.jsx)(s.p,{children:"Deletes a registered definition by ID."}),"\n",(0,i.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{description:"Definition ID",in:"path",name:"id",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(r(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"204",value:"204",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"No Content"})}),(0,i.jsx)("div",{})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid ID"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"404",value:"404",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Service not found"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function D(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(N,{...e})}):N(e)}}}]);