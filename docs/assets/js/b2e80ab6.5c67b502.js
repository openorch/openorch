"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[6293],{70205:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>N,contentTitle:()=>b,default:()=>z,frontMatter:()=>y,metadata:()=>f,toc:()=>_});var l=a(74848),n=a(28453),i=a(91366),r=a.n(i),t=(a(6050),a(57742)),c=a.n(t),d=(a(67792),a(27362)),p=a.n(d),o=(a(36683),a(81124)),m=a.n(o),h=a(60674),u=a.n(h),j=a(23397),x=a.n(j),g=(a(26651),a(51107)),v=(a(77675),a(19365));const y={id:"decrypt-value",title:"Decrypt a Value",description:"Decrypt a value and return the encrypted result",sidebar_label:"Decrypt a Value",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVcGO2zYQ/RVizrLkZBsg0Km7aVAsGsCLONuL4wNNjSUmEskMKTuqoH8vhpTXzsYpiubSi00NZzhvHucNR6jQK9IuaGughN9Q0eCCkOIg2x6FNJUgDD0ZERoUaOI2stH3bYAMrEOSHH1fQQlViv+TgyEDwi89+nBnqwHKEZQ1AU3gpXSu1SoGFp885x7BqwY7yStHfGzQ6PkrQuFFGBxCCT6QNjVMWdqJPjpg56/6zAZJJAeYzga7+4QqwMSm6yTEKsT7VMNcjSasoAzU48QG76zxCcHL5ZL//vmo5A/Z/5WKKYNfrtVxJ6sLIv41+GcI5vNffH/+o5F9aCzpv7D62QSvrhVwbwKSka1YIx2QxFsiSz+XacrAo+pJhwHKzQh3KAnptg8NlJvttM0gyNpDuYE1KsIg1gcF2ww6DI1lsTgb2XSSI6Dw0WvhD6qYZQScgeH6mKCnlv2K1irZNtaH8tXrlzcvgFOdkKwZcOqDSzzP6fgwOBQfZ5ePIPa2be0RK7EbhBTeSZW0H+xnNEKq1PhiT7aLg+DRIwnPXGqF4p2ttRFoKme1CTlkoDlJg7JCJtnIjrm7na84UgzndnT6D0z9yLS/P8+Mt19l51q8aPwT/+d+35xM24nT7u1p0EgVbxU7qZk2L1v0v3pt6r6VgazJle0usD3ci3XvnCVmPTHdhODKorAOjSXV5JbqAr6bFiuzcISd9ihu74VrZdhb6iJ7nVZkfSLJC1TWDz5gxwS1WiFPgnJ8QvD7wztxuMmX3+T3ZVEcj8e8Nn3MP8f5QtauXdzky7wJXRvFjdT51X6+kzN8f5R1jZRrW0SXgpnXgWmFlUOzItUwn0g+FbTMb/LlglT+mo/lJu2kuQB6fiNOY/4bQi7G/H94TuaeCPg1FK6V2jCGSMc4C2UDZ6HE3Ekq2wxYErw/jjvp8ZHaaWLzlx6JFbrlpiEtd1z6httlblDW1mccoIQ3CfmC5XHqsdihzybDlJ0ibpXCKNQf+15K/mG1/gAZ7OYHsbMVx5A88vMij1BCfFI5Omo42kZopal7WbNvOpPFImdln2XEkLLTgqs6bZnhAuFzGaZC+JfLuhoyjkmk0/Tkn7Z+GPGk/eTN97idpulvX+ro8Q==",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},b=void 0,f={id:"openorch/decrypt-value",title:"Decrypt a Value",description:"Decrypt a value and return the encrypted result",source:"@site/docs/openorch/decrypt-value.api.mdx",sourceDirName:"openorch",slug:"/openorch/decrypt-value",permalink:"/docs/openorch/decrypt-value",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"decrypt-value",title:"Decrypt a Value",description:"Decrypt a value and return the encrypted result",sidebar_label:"Decrypt a Value",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVcGO2zYQ/RVizrLkZBsg0Km7aVAsGsCLONuL4wNNjSUmEskMKTuqoH8vhpTXzsYpiubSi00NZzhvHucNR6jQK9IuaGughN9Q0eCCkOIg2x6FNJUgDD0ZERoUaOI2stH3bYAMrEOSHH1fQQlViv+TgyEDwi89+nBnqwHKEZQ1AU3gpXSu1SoGFp885x7BqwY7yStHfGzQ6PkrQuFFGBxCCT6QNjVMWdqJPjpg56/6zAZJJAeYzga7+4QqwMSm6yTEKsT7VMNcjSasoAzU48QG76zxCcHL5ZL//vmo5A/Z/5WKKYNfrtVxJ6sLIv41+GcI5vNffH/+o5F9aCzpv7D62QSvrhVwbwKSka1YIx2QxFsiSz+XacrAo+pJhwHKzQh3KAnptg8NlJvttM0gyNpDuYE1KsIg1gcF2ww6DI1lsTgb2XSSI6Dw0WvhD6qYZQScgeH6mKCnlv2K1irZNtaH8tXrlzcvgFOdkKwZcOqDSzzP6fgwOBQfZ5ePIPa2be0RK7EbhBTeSZW0H+xnNEKq1PhiT7aLg+DRIwnPXGqF4p2ttRFoKme1CTlkoDlJg7JCJtnIjrm7na84UgzndnT6D0z9yLS/P8+Mt19l51q8aPwT/+d+35xM24nT7u1p0EgVbxU7qZk2L1v0v3pt6r6VgazJle0usD3ci3XvnCVmPTHdhODKorAOjSXV5JbqAr6bFiuzcISd9ihu74VrZdhb6iJ7nVZkfSLJC1TWDz5gxwS1WiFPgnJ8QvD7wztxuMmX3+T3ZVEcj8e8Nn3MP8f5QtauXdzky7wJXRvFjdT51X6+kzN8f5R1jZRrW0SXgpnXgWmFlUOzItUwn0g+FbTMb/LlglT+mo/lJu2kuQB6fiNOY/4bQi7G/H94TuaeCPg1FK6V2jCGSMc4C2UDZ6HE3Ekq2wxYErw/jjvp8ZHaaWLzlx6JFbrlpiEtd1z6httlblDW1mccoIQ3CfmC5XHqsdihzybDlJ0ibpXCKNQf+15K/mG1/gAZ7OYHsbMVx5A88vMij1BCfFI5Omo42kZopal7WbNvOpPFImdln2XEkLLTgqs6bZnhAuFzGaZC+JfLuhoyjkmk0/Tkn7Z+GPGk/eTN97idpulvX+ro8Q==",sidebar_class_name:"post api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"List Nodes",permalink:"/docs/openorch/list-nodes"},next:{title:"Encrypt a Value",permalink:"/docs/openorch/encrypt-value"}},N={},_=[];function S(e){const s={p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Decrypt a Value"}),"\n",(0,l.jsx)(c(),{method:"post",path:"/secret-svc/decrypt"}),"\n",(0,l.jsx)(s.p,{children:"Decrypt a value and return the encrypted result"}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(p(),{className:"openapi-tabs__mime",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})}),(0,l.jsx)("strong",{className:"openapi-schema__required",children:(0,l.jsx)(s.p,{children:"required"})})]}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,l.jsx)(s.p,{children:"Decrypt Value Request"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(r(),{label:void 0,id:void 0,children:[(0,l.jsxs)(v.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Decrypt Value Response"})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(x(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"value",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(u(),{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{items:{type:"string"},type:"array"}})]})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(m(),{responseExample:'{\n  "value": "string",\n  "values": [\n    "string"\n  ]\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Bad Request"})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(x(),{className:"openapi-tabs__schema",children:(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,l.jsxs)(v.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(x(),{className:"openapi-tabs__schema",children:(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,l.jsxs)(v.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(x(),{className:"openapi-tabs__schema",children:(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function z(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(S,{...e})}):S(e)}}}]);