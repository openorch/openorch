"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4161],{48575:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>w,contentTitle:()=>N,default:()=>J,frontMatter:()=>v,metadata:()=>_,toc:()=>q});var i=s(74848),r=s(28453),t=s(91366),l=s.n(t),n=(s(6050),s(57742)),d=s.n(n),c=(s(67792),s(27362)),o=s.n(c),m=s(36683),h=s.n(m),p=s(81124),u=s.n(p),j=s(60674),x=s.n(j),g=s(23397),y=s.n(g),f=(s(26651),s(51107)),b=(s(77675),s(19365));const v={id:"get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",sidebar_label:"Get Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJylVt9v20YM/lcOfNoARUqbFhj0tGzrAm/FUizpU+KH84m2rj3dXY+UXdfQ/z5Qkh0lUYsVfbElHn985JEfdYAKySQb2QYPJfyJbGpl/TqkRotM6VVoWWlFEY1dW6NMrVlxnVBXarVXlkkt/oAMQsTUmywqKGGDfNvrQAZRJ90gYyIo7w5PIg5agwsrgqi5hgy8bhBKGAItxE3CT61NWEHJqcUMyNTYaCgPwPsousTJ+g103VKUKQZPSHL+8vxc/mYDV8jaOlLUGoNE69a5vUrIyeIWJawJntGzONAxOmv6JIsPJF4OExQxSQnYDjHxsyWmCbpVCA61hy4bk3puYxJqxuqSZ5LKwFazYrbscCY9EauwVlzjeF05ZDPmIVqzqGjGw3iiKlxbj6R2tTW16g1o4lat0AW/IcUhv/e3w7HRXqXQbmq3VyvRlGcWPJoU6w2pdUijAxJglrGh+QQHgU5J7+W9jdU3qtQSptl03g8HPXBb0bE0oi+phR4yoWC1NKnY/wX2IAirD2h4ViKyV3PduPBb7Wyl/rq5/ud7mu5p6w8BXsyk73XLdUj2y/d19VyA1/MZMCavnbrBtMWk3qQU0o9F6jIgNG2yvO+Z4zfUCdNlyzWUd0sZc+kkKO/gdyGlm62BZQYNch1GDurZR9ShEN46o60phqstDkdq6UDCCOaBn9rkRL9wwWhXB+Ly9S8vL16AxDvCuRHUw9BOQT0boX1EdT+q3INaB+fCDnviFErVBpX2leLwEb3SZiA4tU6h6ZtTelaRFNQaVG/DxnqFvorBes6PhFmjrjA9UObleM99nR9GXkf7Nw59Kvze803wrE1/NdhoK2mTdki/kvWb1mlOwecmNBPf7xbqpo0xJCntUKmaOZZFQW3EFJ1m2R25toWMyONyXPuzmLCxhOpyoY66fQUaa1KgIVFSaALtibGRJJ016KmnuCOKq3dv1fYiP3+Egcqi2O12+ca3eUibYrSjQm+iO7vIz/OaG9cPLqaGrtdjXScp7PRmgym3oehVCjjRK9xM04MMpF2GrM7zi/z8LJn8lfiOgbjRfoL2ClmdduGjghwehuNHNu94wYyfuYhO237H9HU5jN1/B8fuh9P2yaA8LddlBtLoong4rDTh++S6TsSfWkwyfMsMtjpZvZJiyBK3JM8VlGvtCL+R2E//jnv7ZzXd9bOgj63q91Jh7Vp5gww+4n76LdAtu+zY9gJmOL40BiNPDJ/RTTdlh6s3t5CBHuf2YUjEWXZ8EO+zoJ4O2QBBfrvsKyaHwzCCXXfSH46+anGa7EFbarTsuu4/RXdVug==",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},N=void 0,_={id:"superplatform/get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",source:"@site/docs/superplatform/get-thread.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-thread",permalink:"/docs/superplatform/get-thread",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-thread",title:"Get Thread",description:"Fetch information about a specific chat thread by its ID",sidebar_label:"Get Thread",hide_title:!0,hide_table_of_contents:!0,api:"eJylVt9v20YM/lcOfNoARUqbFhj0tGzrAm/FUizpU+KH84m2rj3dXY+UXdfQ/z5Qkh0lUYsVfbElHn985JEfdYAKySQb2QYPJfyJbGpl/TqkRotM6VVoWWlFEY1dW6NMrVlxnVBXarVXlkkt/oAMQsTUmywqKGGDfNvrQAZRJ90gYyIo7w5PIg5agwsrgqi5hgy8bhBKGAItxE3CT61NWEHJqcUMyNTYaCgPwPsousTJ+g103VKUKQZPSHL+8vxc/mYDV8jaOlLUGoNE69a5vUrIyeIWJawJntGzONAxOmv6JIsPJF4OExQxSQnYDjHxsyWmCbpVCA61hy4bk3puYxJqxuqSZ5LKwFazYrbscCY9EauwVlzjeF05ZDPmIVqzqGjGw3iiKlxbj6R2tTW16g1o4lat0AW/IcUhv/e3w7HRXqXQbmq3VyvRlGcWPJoU6w2pdUijAxJglrGh+QQHgU5J7+W9jdU3qtQSptl03g8HPXBb0bE0oi+phR4yoWC1NKnY/wX2IAirD2h4ViKyV3PduPBb7Wyl/rq5/ud7mu5p6w8BXsyk73XLdUj2y/d19VyA1/MZMCavnbrBtMWk3qQU0o9F6jIgNG2yvO+Z4zfUCdNlyzWUd0sZc+kkKO/gdyGlm62BZQYNch1GDurZR9ShEN46o60phqstDkdq6UDCCOaBn9rkRL9wwWhXB+Ly9S8vL16AxDvCuRHUw9BOQT0boX1EdT+q3INaB+fCDnviFErVBpX2leLwEb3SZiA4tU6h6ZtTelaRFNQaVG/DxnqFvorBes6PhFmjrjA9UObleM99nR9GXkf7Nw59Kvze803wrE1/NdhoK2mTdki/kvWb1mlOwecmNBPf7xbqpo0xJCntUKmaOZZFQW3EFJ1m2R25toWMyONyXPuzmLCxhOpyoY66fQUaa1KgIVFSaALtibGRJJ016KmnuCOKq3dv1fYiP3+Egcqi2O12+ca3eUibYrSjQm+iO7vIz/OaG9cPLqaGrtdjXScp7PRmgym3oehVCjjRK9xM04MMpF2GrM7zi/z8LJn8lfiOgbjRfoL2ClmdduGjghwehuNHNu94wYyfuYhO237H9HU5jN1/B8fuh9P2yaA8LddlBtLoong4rDTh++S6TsSfWkwyfMsMtjpZvZJiyBK3JM8VlGvtCL+R2E//jnv7ZzXd9bOgj63q91Jh7Vp5gww+4n76LdAtu+zY9gJmOL40BiNPDJ/RTTdlh6s3t5CBHuf2YUjEWXZ8EO+zoJ4O2QBBfrvsKyaHwzCCXXfSH46+anGa7EFbarTsuu4/RXdVug==",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Delete a Thread",permalink:"/docs/superplatform/delete-thread"},next:{title:"Update Thread",permalink:"/docs/superplatform/update-thread"}},w={},q=[];function U(e){const a={p:"p",...(0,r.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Get Thread"}),"\n",(0,i.jsx)(d(),{method:"get",path:"/chat-svc/thread/{threadId}"}),"\n",(0,i.jsx)(a.p,{children:"Fetch information about a specific chat thread by its ID"}),"\n",(0,i.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(a.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(h(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(l(),{label:void 0,id:void 0,children:[(0,i.jsxs)(b.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Thread details successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"exists",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"}}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"thread"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Title of the thread.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"topicIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"TopicIds defines which topics the thread belongs to.\nTopics can roughly be thought of as tags for threads.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"UserIds the ids of the users who can see this thread.",items:{type:"string"},type:"array"}})]})]})})]})]})}),(0,i.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(u(),{responseExample:'{\n  "exists": true,\n  "thread": {\n    "createdAt": "string",\n    "id": "string",\n    "title": "string",\n    "topicIds": [\n      "string"\n    ],\n    "updatedAt": "string",\n    "userIds": [\n      "string"\n    ]\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(b.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(y(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(y(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(b.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(y(),{className:"openapi-tabs__schema",children:(0,i.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(a.p,{children:"string"})})})]})})})})})})]})]})})})]})}function J(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(U,{...e})}):U(e)}}}]);