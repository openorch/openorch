"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2614],{42880:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>b,default:()=>N,frontMatter:()=>k,metadata:()=>_,toc:()=>L});var l=s(74848),t=s(28453),r=s(91366),i=s.n(r),n=(s(6050),s(57742)),o=s.n(n),d=(s(67792),s(27362)),c=s.n(d),m=s(36683),p=s.n(m),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),f=s(23397),v=s.n(f),g=(s(26651),s(51107)),y=(s(77675),s(19365));const k={id:"make-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",sidebar_label:"Make a Model Default",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VcFu4zYQ/RViTi3ASN6kCxQ6NcUWhbu7TVBvTlkfJtTY4oYiuSRl1xUI7Ef0C/slxUiy4yROgV5ykShxZvjm8T2yh5qiCton7SxUsKAUBYrW1WQERpEaEjWtsDNp+vnPt7/FtiErfHCt5+hAIpJNYqtT47okUHwcIufv5Il8HUUXqS5AgvMUkBee11BBi/f0bgwFCR4DtpQoRKhu+yco9/VBguZvj6kBCRZb4kI8O69BQqCvnQ5UQ5VCRxKiaqhFqHpIO8+hMQVt15DzkoOjdzZS5Pnz2Yxfj5e9eg8SlLOJbOJZ9N5oNXRQfokc0j9fwt19IZUg55wl/HCq7Nxu0Oha/La4+v3/LOADE5j0iJhCcOFUa/IFJG+eI7mx2KXGBf0X1a+G5O1pThIFi0YsKGwoiF+Gmq8DKUuIpLqg027Q3s+EgcJllxqobpcslYRrluWkw8VGwVJCS6lxLGTfjQLmeCgHNZ7FjRpHZT/JM5cs+LP6oPg4dDrKvQuGc0vjFJrGxVS9/fH84g3w4ntsC+51bO8Y4VMmP+08ic9TyGcQK2eM21It7nYCRfSoSKCtRXL3ZAWq0TFiFVw7uPcmUhCRt0ErEh/cWltBtvZO21TsDdgQ1hQeLHg5yWjYHTiQjF6/p91Au7Yrx2B5Q1ENG0otam47oqH4U9R23RlMwdlCufao9vVcLDrvXWDWRqaalHxVlrHzFLzBtHKhLVCXkOVTD9szH6jVkcTlXOxjBwZarYKLY6NRkHJxFxO13KTRimwkRrlH8ev1B7G5KGaPMMSqLLfbbbG2XeHCupzyYolrb84uilnRpNYwqkShjVeridejFra4XlMotCuHkJLZ08lwyOK4PZDAchm7mhUXxewsqOKca3sXU4v2CO1HvKfDufxwyD6ipn8w1+teA5M4Ev2ZSm9QW+5h4LSfXHQLBxeBHMcgoXo46B9ZaSmBLcNpfX+HkW6CyZl/f+0osKeXEjYYNN4xrXy76MjjGqoVmkj/Qcx3f0xXyvfi6BI62cFe83bHW4Wm4y+QcE+7o0sqL7Pc24ehjLOXSpFPR3nPDrt8fOJc33wCCTj5/8FsXEzuB1z9JKanZh0h8DPLF1L6frRyzof4cerFjMMJMUYzRcuc879LcupC",sidebar_class_name:"put api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},b=void 0,_={id:"superplatform/make-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",source:"@site/docs/superplatform/make-default.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/make-default",permalink:"/docs/superplatform/make-default",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"make-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",sidebar_label:"Make a Model Default",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VcFu4zYQ/RViTi3ASN6kCxQ6NcUWhbu7TVBvTlkfJtTY4oYiuSRl1xUI7Ef0C/slxUiy4yROgV5ykShxZvjm8T2yh5qiCton7SxUsKAUBYrW1WQERpEaEjWtsDNp+vnPt7/FtiErfHCt5+hAIpJNYqtT47okUHwcIufv5Il8HUUXqS5AgvMUkBee11BBi/f0bgwFCR4DtpQoRKhu+yco9/VBguZvj6kBCRZb4kI8O69BQqCvnQ5UQ5VCRxKiaqhFqHpIO8+hMQVt15DzkoOjdzZS5Pnz2Yxfj5e9eg8SlLOJbOJZ9N5oNXRQfokc0j9fwt19IZUg55wl/HCq7Nxu0Oha/La4+v3/LOADE5j0iJhCcOFUa/IFJG+eI7mx2KXGBf0X1a+G5O1pThIFi0YsKGwoiF+Gmq8DKUuIpLqg027Q3s+EgcJllxqobpcslYRrluWkw8VGwVJCS6lxLGTfjQLmeCgHNZ7FjRpHZT/JM5cs+LP6oPg4dDrKvQuGc0vjFJrGxVS9/fH84g3w4ntsC+51bO8Y4VMmP+08ic9TyGcQK2eM21It7nYCRfSoSKCtRXL3ZAWq0TFiFVw7uPcmUhCRt0ErEh/cWltBtvZO21TsDdgQ1hQeLHg5yWjYHTiQjF6/p91Au7Yrx2B5Q1ENG0otam47oqH4U9R23RlMwdlCufao9vVcLDrvXWDWRqaalHxVlrHzFLzBtHKhLVCXkOVTD9szH6jVkcTlXOxjBwZarYKLY6NRkHJxFxO13KTRimwkRrlH8ev1B7G5KGaPMMSqLLfbbbG2XeHCupzyYolrb84uilnRpNYwqkShjVeridejFra4XlMotCuHkJLZ08lwyOK4PZDAchm7mhUXxewsqOKca3sXU4v2CO1HvKfDufxwyD6ipn8w1+teA5M4Ev2ZSm9QW+5h4LSfXHQLBxeBHMcgoXo46B9ZaSmBLcNpfX+HkW6CyZl/f+0osKeXEjYYNN4xrXy76MjjGqoVmkj/Qcx3f0xXyvfi6BI62cFe83bHW4Wm4y+QcE+7o0sqL7Pc24ehjLOXSpFPR3nPDrt8fOJc33wCCTj5/8FsXEzuB1z9JKanZh0h8DPLF1L6frRyzof4cerFjMMJMUYzRcuc879LcupC",sidebar_class_name:"put api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get a Model",permalink:"/docs/superplatform/get-model"},next:{title:"Start a Model",permalink:"/docs/superplatform/start-model"}},w={},L=[];function M(e){const a={p:"p",...(0,t.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Make a Model Default"}),"\n",(0,l.jsx)(o(),{method:"put",path:"/model-svc/model/{modelId}/make-default"}),"\n",(0,l.jsx)(a.p,{children:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used."}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Model ID",in:"path",name:"modelId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(i(),{label:void 0,id:void 0,children:[(0,l.jsxs)(y.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"object"})})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(y.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function N(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(M,{...e})}):M(e)}}}]);