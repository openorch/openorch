"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[389],{16211:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>S,contentTitle:()=>v,default:()=>z,frontMatter:()=>k,metadata:()=>_,toc:()=>N});var n=s(74848),i=s(28453),r=s(91366),l=s.n(r),t=(s(6050),s(57742)),c=s.n(t),o=(s(67792),s(27362)),d=s.n(o),m=s(36683),p=s.n(m),h=s(81124),u=s.n(h),x=s(60674),j=s.n(x),f=s(23397),g=s.n(f),b=(s(26651),s(51107)),y=(s(77675),s(19365));const k={id:"get-container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by the hash, limited to a specified number of lines",sidebar_label:"Get Container Summary",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1z2zYQ/SuYPbUzDKnYzUyHp7pJxnXjiTNVfHJ0WJErEjEIIAAoVeXgv3eWH/qy2kx88EUiwYfdtw94ux2U5AsnbZBGQw7XFAQK3zYNuq0wKxFqEu9M8UhOFEYHlJqckCXpIFeSSrHc9pAafZ0IJRsZqBTBcBBLxYDRbbMkx9GU1OQhAWPJIae8KSGHisLbKfZ8SA0JWHTYUCDnIX/oTnju8OIP9DUkIHnVYuBnjQ1BDvXwxdG3VjoqIQ+upQR8UVODkHcQtpZxPjipK4gxOc3ycUf8diR+Js1Q3d1qgnw3n9SBKnIQ44LR3hrtyTPgYjbjv2MSdx8gAdaedOCvaK2SRa9e9tUzpDvIYR1rG+QQcDzIs8VOK2b5lYoAMfLaL+cY3Og1KlmKP+d3H5/PhZwz7keYvH7K5F5jG2rj5D9UvhiTN+c1CeQ0KjEntyYn3vcxX4ZSTMBT0ToZtr01fid05K7aUEP+sOBbFbBi18Do3Pm6gEUCDYXajIbrDcYbICt70Cu/LrKdxbOO3ROz8QJl3dEtj8AMuO7Bm61THChTpkBVGx/yN79eXL4GpjIxnXPlQ7GHfE91/by1JL6MkC8gVkYpsxkaDfcULEig5hbzSFpgMXhNrJxp+kZ078kJz4ciCxK3ppJakC6tkTqkk4FrwpLc3sJX46Xqzwp2kqOVH2jbH4LUK8Nke4GK/nipQclle1Tkf/NSV63C4IxOC9McxP50I+attcax5oNSdQg2zzLfWnJWYVgZ16QoM4jJiRxXN6JBjRU1pENfeElrUsb277u9kICSBWlPzGzKfP3pVqwv09lRXp9n2WazSSvdpsZV2bjPZ1hZ9eoynaV1aBQzCeQaf7catTygvcGqIpdKk/WQjBWTQTFkvpcBEuALMtQxSy84pDU+NKgPSPLA2Tfzffc/kqHb2+qlJtR4BQL9HTKrUGqm36vYjcZ5gL1xRuP3uSGBfBw9fldOfjwlFgmwTThI1y3R071TMfLyt5a4Xz8sElijk7hkWXn8Sc/PJeQrVJ7+R6Cf/hoH0M/iyZQ8W9V02zUTXaNq+Q0SeKTtNEX70fgcBk8n6DMoHGsXFzGZHMzKDJiroiAbDnY/6b7xsANev/8MCeDYgvZ+52DJ9MDRzzI77RcDBf5loc5u6bqhm8S4ww+f/nPHrkkNaBZqEWP8F8IRVtg=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},v=void 0,_={id:"singulatron/get-container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by the hash, limited to a specified number of lines",source:"@site/docs/singulatron/get-container-summary.api.mdx",sourceDirName:"singulatron",slug:"/singulatron/get-container-summary",permalink:"/docs/singulatron/get-container-summary",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by the hash, limited to a specified number of lines",sidebar_label:"Get Container Summary",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1z2zYQ/SuYPbUzDKnYzUyHp7pJxnXjiTNVfHJ0WJErEjEIIAAoVeXgv3eWH/qy2kx88EUiwYfdtw94ux2U5AsnbZBGQw7XFAQK3zYNuq0wKxFqEu9M8UhOFEYHlJqckCXpIFeSSrHc9pAafZ0IJRsZqBTBcBBLxYDRbbMkx9GU1OQhAWPJIae8KSGHisLbKfZ8SA0JWHTYUCDnIX/oTnju8OIP9DUkIHnVYuBnjQ1BDvXwxdG3VjoqIQ+upQR8UVODkHcQtpZxPjipK4gxOc3ycUf8diR+Js1Q3d1qgnw3n9SBKnIQ44LR3hrtyTPgYjbjv2MSdx8gAdaedOCvaK2SRa9e9tUzpDvIYR1rG+QQcDzIs8VOK2b5lYoAMfLaL+cY3Og1KlmKP+d3H5/PhZwz7keYvH7K5F5jG2rj5D9UvhiTN+c1CeQ0KjEntyYn3vcxX4ZSTMBT0ToZtr01fid05K7aUEP+sOBbFbBi18Do3Pm6gEUCDYXajIbrDcYbICt70Cu/LrKdxbOO3ROz8QJl3dEtj8AMuO7Bm61THChTpkBVGx/yN79eXL4GpjIxnXPlQ7GHfE91/by1JL6MkC8gVkYpsxkaDfcULEig5hbzSFpgMXhNrJxp+kZ078kJz4ciCxK3ppJakC6tkTqkk4FrwpLc3sJX46Xqzwp2kqOVH2jbH4LUK8Nke4GK/nipQclle1Tkf/NSV63C4IxOC9McxP50I+attcax5oNSdQg2zzLfWnJWYVgZ16QoM4jJiRxXN6JBjRU1pENfeElrUsb277u9kICSBWlPzGzKfP3pVqwv09lRXp9n2WazSSvdpsZV2bjPZ1hZ9eoynaV1aBQzCeQaf7catTygvcGqIpdKk/WQjBWTQTFkvpcBEuALMtQxSy84pDU+NKgPSPLA2Tfzffc/kqHb2+qlJtR4BQL9HTKrUGqm36vYjcZ5gL1xRuP3uSGBfBw9fldOfjwlFgmwTThI1y3R071TMfLyt5a4Xz8sElijk7hkWXn8Sc/PJeQrVJ7+R6Cf/hoH0M/iyZQ8W9V02zUTXaNq+Q0SeKTtNEX70fgcBk8n6DMoHGsXFzGZHMzKDJiroiAbDnY/6b7xsANev/8MCeDYgvZ+52DJ9MDRzzI77RcDBf5loc5u6bqhm8S4ww+f/nPHrkkNaBZqEWP8F8IRVtg=",sidebar_class_name:"get api-method",info_path:"docs/singulatron/singulatron",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Check If a Container Is Running",permalink:"/docs/singulatron/is-running"},next:{title:"Get Docker Host",permalink:"/docs/singulatron/get-host"}},S={},N=[];function Q(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get Container Summary"}),"\n",(0,n.jsx)(c(),{method:"get",path:"/docker-svc/container/{hash}/summary/{numberOfLines}"}),"\n",(0,n.jsx)(a.p,{children:"Get a summary of the Docker container identified by the hash, limited to a specified number of lines"}),"\n",(0,n.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Path Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Container Hash",in:"path",name:"hash",required:!0,schema:{type:"string"}}}),(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Number of Lines",in:"path",name:"numberOfLines",required:!0,schema:{type:"integer"}}})]})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(l(),{label:void 0,id:void 0,children:[(0,n.jsxs)(y.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"summary",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "summary": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Invalid JSON"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(y.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(y.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(y.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(j(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(y.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function z(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(Q,{...e})}):Q(e)}}}]);