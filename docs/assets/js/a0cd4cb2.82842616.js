"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[2530],{75448:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>b,contentTitle:()=>M,default:()=>w,frontMatter:()=>k,metadata:()=>_,toc:()=>N});var l=s(74848),n=s(28453),t=s(91366),i=s.n(t),r=(s(6050),s(57742)),d=s.n(r),o=(s(67792),s(27362)),m=s.n(o),c=s(36683),p=s.n(c),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),f=s(23397),g=s.n(f),y=(s(26651),s(51107)),v=(s(77675),s(19365));const k={id:"make-a-model-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",sidebar_label:"Make a Model Default",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFu3DYQ/RViTg1ASxs7AQqd4iBt4DaJjax9CII9jKVZiTFFMkNyN1tBQD+iX9gvCUa7ttfxpkAvPknkPHLezDy+ARqKNZuQjHdQwZxSVKh635BVGFXqSDW0xGzTbvPfv/9R646cCuz7IGgmFckltTap8zkpVO8n5NkbfeC8iSpHagrQEJCxp0Qcofo8/MDk9g7QYGQdMHWgwWFPUIFpQAPT12yYGqgSZ9IQ6456hGqAtAmCiomNa2EcFwKOwbtIUeLHs5l8HmY8/xM01N4lckmiGII1NUq0/BIFMjxO4a+/UJ1gHMdRw4tD1565FVrTqD/m5x/+T4LAPhAns2VMzJ4PlaZ/wuT5YyZXDnPqPJu/qHkyJi8P9yQRO7RqTrwiVr9Ndz4NJdnEViQHkyJhoaGn1PlGVJbTJMzUQQXlFC8H04xljzd0tFMyaIgT761uM1sBl9bXaDsfU/Xy1+OT5yCqi1RnNmkzF+Zbsq8xmvo0S4Y7wl1KAXYClvW1YCb+xi29AKUzWE+doR6NZIxoKb6KxrXZYmLvitr390/k9OJMzXMInoXwlqTkqcoy5kAcLKal575AU8Kof5jQx+wUukY1tCLrg4pkl0dSHDXq9ExhCLFQn3xm8YGWse/x2pIy7qjzOZJ6e3FZqMuO1O+G6RojqaXnyQ7kdEvy/q2pyUWSmm45v714p1YnxewB41iV5Xq9LlqXC89tuTsXS2yDPTopZkWXeis1JOI+ni9FVaamvYLX2LbEhfHlBClBQzLJCmR+30DQIFPddmBWHMuVwcfUo9sj+R5v6M7k3txJ4kH/hnspP62n7gSV6Fsqg0XjpIaplcNO1rey11BNLvpA2QsNMmRBDYOM7YrtOMr210y8gerzQsMK2ci0t65tovw3UC3RRvqPPvzycefXz9SeuR8kvNtEt5GRoM2yAg03tNma/7gYNXSEDfHEYhs4rWsKae/IIxMZ9x/7xdUljON3e51m4A==",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},M=void 0,_={id:"singulatron/make-a-model-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",source:"@site/docs/singulatron/make-a-model-default.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/make-a-model-default",permalink:"/docs/singulatron/make-a-model-default",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"make-a-model-default",title:"Make a Model Default",description:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used.",sidebar_label:"Make a Model Default",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VMFu3DYQ/RViTg1ASxs7AQqd4iBt4DaJjax9CII9jKVZiTFFMkNyN1tBQD+iX9gvCUa7ttfxpkAvPknkPHLezDy+ARqKNZuQjHdQwZxSVKh635BVGFXqSDW0xGzTbvPfv/9R646cCuz7IGgmFckltTap8zkpVO8n5NkbfeC8iSpHagrQEJCxp0Qcofo8/MDk9g7QYGQdMHWgwWFPUIFpQAPT12yYGqgSZ9IQ6456hGqAtAmCiomNa2EcFwKOwbtIUeLHs5l8HmY8/xM01N4lckmiGII1NUq0/BIFMjxO4a+/UJ1gHMdRw4tD1565FVrTqD/m5x/+T4LAPhAns2VMzJ4PlaZ/wuT5YyZXDnPqPJu/qHkyJi8P9yQRO7RqTrwiVr9Ndz4NJdnEViQHkyJhoaGn1PlGVJbTJMzUQQXlFC8H04xljzd0tFMyaIgT761uM1sBl9bXaDsfU/Xy1+OT5yCqi1RnNmkzF+Zbsq8xmvo0S4Y7wl1KAXYClvW1YCb+xi29AKUzWE+doR6NZIxoKb6KxrXZYmLvitr390/k9OJMzXMInoXwlqTkqcoy5kAcLKal575AU8Kof5jQx+wUukY1tCLrg4pkl0dSHDXq9ExhCLFQn3xm8YGWse/x2pIy7qjzOZJ6e3FZqMuO1O+G6RojqaXnyQ7kdEvy/q2pyUWSmm45v714p1YnxewB41iV5Xq9LlqXC89tuTsXS2yDPTopZkWXeis1JOI+ni9FVaamvYLX2LbEhfHlBClBQzLJCmR+30DQIFPddmBWHMuVwcfUo9sj+R5v6M7k3txJ4kH/hnspP62n7gSV6Fsqg0XjpIaplcNO1rey11BNLvpA2QsNMmRBDYOM7YrtOMr210y8gerzQsMK2ci0t65tovw3UC3RRvqPPvzycefXz9SeuR8kvNtEt5GRoM2yAg03tNma/7gYNXSEDfHEYhs4rWsKae/IIxMZ9x/7xdUljON3e51m4A==",sidebar_class_name:"put api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Get a Model",permalink:"/docs/singulatron/get-a-model"},next:{title:"Start a Model",permalink:"/docs/singulatron/start-a-model"}},b={},N=[];function q(e){const a={p:"p",...(0,n.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Make a Model Default"}),"\n",(0,l.jsx)(d(),{method:"put",path:"/model/{id}/make-default"}),"\n",(0,l.jsx)(a.p,{children:"Sets a model as the default model \u2014 when prompts are sent without a Model ID, the default model is used."}),"\n",(0,l.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Model ID",in:"path",name:"id",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(i(),{label:void 0,id:void 0,children:[(0,l.jsxs)(v.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"object"})})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(v.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(m(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function w(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(q,{...e})}):q(e)}}}]);