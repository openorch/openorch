"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2825],{69930:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>v,default:()=>_,frontMatter:()=>y,metadata:()=>w,toc:()=>N});var n=a(74848),l=a(28453),r=a(91366),i=a.n(r),d=(a(6050),a(57742)),t=a.n(d),o=(a(67792),a(27362)),c=a.n(o),m=(a(36683),a(81124)),p=a.n(m),h=a(60674),u=a.n(h),x=a(23397),g=a.n(x),j=(a(26651),a(51107)),f=(a(77675),a(19365));const y={id:"change-user-password",title:"Change User Password",description:"Allows an authenticated user to change their own password.",sidebar_label:"Change User Password",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vdtu20YQ/ZXFPFOkYzdAwacqRRq4DWrBsh8KRw8jckRustzd7EWMKvDfi+FFF1sNEgTIi0QsZ2bPOTNzuIeSfOGkDdJoyGGulGm9QC0whpp0kAUGKkX05EQwoqhRVyRCTdIJ02ph0fvWuDKFBBx9juTDG1PuIN9DYXQgHfgRrVVcSRqdffR80x58UVOD/GSdseSCJN+nRedIh8VYmI/CzhLk4IOTuoIuAWpQqotvNLVfyeyS6cSsP1IRoOOjcwl+HyhOVcT9wGrkJx2VkAcXqeMDb432A+7rqyv+Oy92qDIIVwofi4K830SldpB8u0YvYHcJ/HLpxlu9RSVL8efy7u/vueC8CeSccd8oYI/k1Uskj5pnyDj5L5U/Dcnry5oEchqVWJLbkhNv+5o/B1KXgKciOhl2kD/t4Q2hIzePoYb8adWtEghYecif4JF3jBHKgmCVQEOhNiXkYE0/fhY5BzLexZnfFtkwU7NpBYFvYn6+vyg6xdGZMgWq2viQv/71+uYV8JUToiUzHEid4nqu38POkvgwhnwAsTFsE1SK9U6g8BYLEqhLEcwn0gKLYU3ExpmGrUL0zPxITbw3ldSCdGmN1IGNQ/IlNWFJ3BWNDWs4H4en7wkcpEUr/6JdLzb36f7oOW+/YGMVXfSQqUcH6zgenDnGiZNIvTGTjWHRD8khFxX537zUVVQYnNFpYZoT5ItbsYzWGsdtG/pQh2DzLPPRkrMKw8a4JkWZwQv/uY+6F7OkLSljhSe1mXH/qBTzW4HW+lT8Y6IT1pnKYdPgWpGQelab6Em8Wzyk4qEm8Yd0tEZPYmNc3wbOrogFV7Ig7XupJszvFu/F9ia9OkPs8yxr2zatdEyNq7Ixz2dYWTW7Sa/SOjSKOQRyjb/bTON7JNxiVZFLpcn6kIw7KQO3CZZHASEBHtxBgav0mkvy2DeoT0CO1tyP0+I49Wf6nXx3fuxrNs5boC8hswqlZky9NPtxFZ9gWkX2kmfLuEqAm8ZR+z234dGpruPjz5Ece8EqgS06yd3rrSCZVoC39xPtmPBAZcYLyBKhisMOPDOrLpky5kVBNnw19tRaFnfLB0hgPX6yG1NyjsOWP3fYQg6QgOml7V2iP9uDQl1FrDh2qMnriKN3HBeVISXTA7OaXundCcLniz4Q4V+mdTFlvx9soOsO8cOr/804uMsQzd1cdV33H+SrHtk=",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},v=void 0,w={id:"singulatron/change-user-password",title:"Change User Password",description:"Allows an authenticated user to change their own password.",source:"@site/docs/singulatron/change-user-password.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/change-user-password",permalink:"/docs/singulatron/change-user-password",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"change-user-password",title:"Change User Password",description:"Allows an authenticated user to change their own password.",sidebar_label:"Change User Password",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vdtu20YQ/ZXFPFOkYzdAwacqRRq4DWrBsh8KRw8jckRustzd7EWMKvDfi+FFF1sNEgTIi0QsZ2bPOTNzuIeSfOGkDdJoyGGulGm9QC0whpp0kAUGKkX05EQwoqhRVyRCTdIJ02ph0fvWuDKFBBx9juTDG1PuIN9DYXQgHfgRrVVcSRqdffR80x58UVOD/GSdseSCJN+nRedIh8VYmI/CzhLk4IOTuoIuAWpQqotvNLVfyeyS6cSsP1IRoOOjcwl+HyhOVcT9wGrkJx2VkAcXqeMDb432A+7rqyv+Oy92qDIIVwofi4K830SldpB8u0YvYHcJ/HLpxlu9RSVL8efy7u/vueC8CeSccd8oYI/k1Uskj5pnyDj5L5U/Dcnry5oEchqVWJLbkhNv+5o/B1KXgKciOhl2kD/t4Q2hIzePoYb8adWtEghYecif4JF3jBHKgmCVQEOhNiXkYE0/fhY5BzLexZnfFtkwU7NpBYFvYn6+vyg6xdGZMgWq2viQv/71+uYV8JUToiUzHEid4nqu38POkvgwhnwAsTFsE1SK9U6g8BYLEqhLEcwn0gKLYU3ExpmGrUL0zPxITbw3ldSCdGmN1IGNQ/IlNWFJ3BWNDWs4H4en7wkcpEUr/6JdLzb36f7oOW+/YGMVXfSQqUcH6zgenDnGiZNIvTGTjWHRD8khFxX537zUVVQYnNFpYZoT5ItbsYzWGsdtG/pQh2DzLPPRkrMKw8a4JkWZwQv/uY+6F7OkLSljhSe1mXH/qBTzW4HW+lT8Y6IT1pnKYdPgWpGQelab6Em8Wzyk4qEm8Yd0tEZPYmNc3wbOrogFV7Ig7XupJszvFu/F9ia9OkPs8yxr2zatdEyNq7Ixz2dYWTW7Sa/SOjSKOQRyjb/bTON7JNxiVZFLpcn6kIw7KQO3CZZHASEBHtxBgav0mkvy2DeoT0CO1tyP0+I49Wf6nXx3fuxrNs5boC8hswqlZky9NPtxFZ9gWkX2kmfLuEqAm8ZR+z234dGpruPjz5Ece8EqgS06yd3rrSCZVoC39xPtmPBAZcYLyBKhisMOPDOrLpky5kVBNnw19tRaFnfLB0hgPX6yG1NyjsOWP3fYQg6QgOml7V2iP9uDQl1FrDh2qMnriKN3HBeVISXTA7OaXundCcLniz4Q4V+mdTFlvx9soOsO8cOr/804uMsQzd1cdV33H+SrHtk=",sidebar_class_name:"post api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Remove Prompt",permalink:"/docs/singulatron/remove-prompt"},next:{title:"Change User Password (Admin)",permalink:"/docs/singulatron/change-user-password-admin"}},k={},N=[];function b(e){const s={p:"p",...(0,l.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Change User Password"}),"\n",(0,n.jsx)(t(),{method:"post",path:"/user-svc/change-password"}),"\n",(0,n.jsx)(s.p,{children:"Allows an authenticated user to change their own password."}),"\n",(0,n.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsx)(c(),{className:"openapi-tabs__mime",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json-schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,n.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,n.jsx)(s.p,{children:"Body"})}),(0,n.jsx)("strong",{className:"openapi-schema__required",children:(0,n.jsx)(s.p,{children:"required"})})]}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:"1rem",marginBottom:"1rem"},children:(0,n.jsx)(s.p,{children:"Change Password Request"})})}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(u(),{collapsible:!1,name:"currentPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(u(),{collapsible:!1,name:"newPassword",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})]})]})})}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(i(),{label:void 0,id:void 0,children:[(0,n.jsxs)(f.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Password changed successfully"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,n.jsx)(s.p,{children:"object"})})})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,n.jsxs)(f.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Invalid JSON"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(f.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(f.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(s.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(u(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(p(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function _(e={}){const{wrapper:s}={...(0,l.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(b,{...e})}):b(e)}}}]);