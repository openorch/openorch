"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4762],{86399:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>b,default:()=>I,frontMatter:()=>N,metadata:()=>S,toc:()=>q});var i=a(74848),r=a(28453),l=a(91366),n=a.n(l),t=(a(6050),a(57742)),d=a.n(t),c=(a(67792),a(27362)),o=a.n(c),m=a(36683),p=a.n(m),h=a(81124),j=a.n(h),g=a(60674),x=a.n(g),u=a(23397),f=a.n(u),y=(a(26651),a(51107)),v=(a(77675),a(19365));const N={id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/iuYvTSZoUknTjodXVo3bVq1bp2p4pOtAwwuRSQggGBBqaqG/72zfEi0RNuTaS8SiF3s9+1iH9hBjqSC9lE7CzN4j1GVokIiuUISL6TNhSRySsuI7RIjvRSFC0IK8qh0oZVQpYwilgFlnkICzmOQbHCewwxWGP/o7UECXgZZYcRAMLvdHaF/bE2I+U+QgOYNL2MJCVhZIcygQ5jnkEDAL7UOmMMshhoTIFViJWG2g7j1rEsxaLuCplmyMnlnCYnlr8/P+e8h8EBQ9P5iJEG1UkhU1MZsRcAYNK6RsZWzEW1kK9J7o1Xra/aJ2NRuRMUHjkTUHXBnllc6YkWnCiO7D9m96wRCk4glintJ+O0bgVa5HHNxr60MW1FogyLXAZXZCqzuMWehtu2RFlvoSGgKSI5jlIAKyPd7GScimDxkMyHX+eR2tzEhqH3+BFodzGkIboIRrhj5sikx4Kkre1hw959QxQMPkCHILX8P2f3EVbQY85xOiVz2EpFjoS12NyJjlKqs0Mbuu0cQpSSuhz3IIyE6UHs2BfoYDAC4SsUd/KoTsSll/IZE7b+/g6+/4cducCi4Ez4fe8kRoXQK+pnrJgxTCDft/pDzeo/E+mJTOrEJLuID8Dv73gVxOT/0r1hqEoVG0xrCysftBMXnk+ZUo+G9N1O9ZG7X0uhc/La4/vNrusUxqQ7g1URkrKxj6YL+5+va0RTA22kPIgYrjVhgWGMQP4fgwn9DahIgVHXQcdv2/R9RBgyXdSxhdrvkJh3likcCvONZslgrWHKlxtLxDPGOYjs8WB8ynjdntFZZl6DZbkjUJqsOo4Za9t2caZsKZJlxSprSUZy9/e71xStg5IHYgvl39T+md5L6W4/irle5A1E4Y9yGG/G2nYlSYTtGovuMVkjVDSpRBFe12cqJLYhDqxWKK7fSVqDNvdM2psPgK1HmGA6j77K/8TbihwyWXv+OXX5qW7hhikjVXhJWUrPbJA3SD6TtqjYyBmdT5aqR7Q9zsai9d4Fj3EWqjNHPsoxqj8EbGQsXqlTq7GQcwLU98wErTciVN+i2Eai0Co46R0mgcrSliBU7abRCS+14GFj88uFKrC/S8wccaJZlm80mXdk6dWGV9ecokytvzi7S87SMlWkLFkNF10Uf15ELG7laYUi1y1qVjKOno2GVxdg9SIDTpfPqPL1Iz8+CSl+xbU6/StoR2ytNUYyeNUcjcl8p/8+Dqr/tiH/HzBup7WhOdjVxC0NNwNC2IYHZ6MW0L4xlAlwAfGa347fETTBNw9tfagxcnssE1jJoec9B4keaJl7nMCukIXzC2xd/9e+yl2L8lpvkP6Sw3XLkpan5CxL4jNvxW69ZNslQDkymE18qhT6ODp40pGbcPz5cLz5CArIv6EP1sLVkWLD5SVbH1ddx4N8meeTIbtfVZtPs9TvRoyf2Jd9pc5CWTdP8C0n0APE=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},b=void 0,S={id:"superplatform/get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",source:"@site/docs/superplatform/get-messages.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/get-messages",permalink:"/docs/superplatform/get-messages",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-messages",title:"List Messages",description:"Fetch messages (and associated assets) for a specific chat thread.",sidebar_label:"List Messages",hide_title:!0,hide_table_of_contents:!0,api:"eJytVktz2zYQ/iuYvTSZoUknTjodXVo3bVq1bp2p4pOtAwwuRSQggGBBqaqG/72zfEi0RNuTaS8SiF3s9+1iH9hBjqSC9lE7CzN4j1GVokIiuUISL6TNhSRySsuI7RIjvRSFC0IK8qh0oZVQpYwilgFlnkICzmOQbHCewwxWGP/o7UECXgZZYcRAMLvdHaF/bE2I+U+QgOYNL2MJCVhZIcygQ5jnkEDAL7UOmMMshhoTIFViJWG2g7j1rEsxaLuCplmyMnlnCYnlr8/P+e8h8EBQ9P5iJEG1UkhU1MZsRcAYNK6RsZWzEW1kK9J7o1Xra/aJ2NRuRMUHjkTUHXBnllc6YkWnCiO7D9m96wRCk4glintJ+O0bgVa5HHNxr60MW1FogyLXAZXZCqzuMWehtu2RFlvoSGgKSI5jlIAKyPd7GScimDxkMyHX+eR2tzEhqH3+BFodzGkIboIRrhj5sikx4Kkre1hw959QxQMPkCHILX8P2f3EVbQY85xOiVz2EpFjoS12NyJjlKqs0Mbuu0cQpSSuhz3IIyE6UHs2BfoYDAC4SsUd/KoTsSll/IZE7b+/g6+/4cducCi4Ez4fe8kRoXQK+pnrJgxTCDft/pDzeo/E+mJTOrEJLuID8Dv73gVxOT/0r1hqEoVG0xrCysftBMXnk+ZUo+G9N1O9ZG7X0uhc/La4/vNrusUxqQ7g1URkrKxj6YL+5+va0RTA22kPIgYrjVhgWGMQP4fgwn9DahIgVHXQcdv2/R9RBgyXdSxhdrvkJh3likcCvONZslgrWHKlxtLxDPGOYjs8WB8ynjdntFZZl6DZbkjUJqsOo4Za9t2caZsKZJlxSprSUZy9/e71xStg5IHYgvl39T+md5L6W4/irle5A1E4Y9yGG/G2nYlSYTtGovuMVkjVDSpRBFe12cqJLYhDqxWKK7fSVqDNvdM2psPgK1HmGA6j77K/8TbihwyWXv+OXX5qW7hhikjVXhJWUrPbJA3SD6TtqjYyBmdT5aqR7Q9zsai9d4Fj3EWqjNHPsoxqj8EbGQsXqlTq7GQcwLU98wErTciVN+i2Eai0Co46R0mgcrSliBU7abRCS+14GFj88uFKrC/S8wccaJZlm80mXdk6dWGV9ecokytvzi7S87SMlWkLFkNF10Uf15ELG7laYUi1y1qVjKOno2GVxdg9SIDTpfPqPL1Iz8+CSl+xbU6/StoR2ytNUYyeNUcjcl8p/8+Dqr/tiH/HzBup7WhOdjVxC0NNwNC2IYHZ6MW0L4xlAlwAfGa347fETTBNw9tfagxcnssE1jJoec9B4keaJl7nMCukIXzC2xd/9e+yl2L8lpvkP6Sw3XLkpan5CxL4jNvxW69ZNslQDkymE18qhT6ODp40pGbcPz5cLz5CArIv6EP1sLVkWLD5SVbH1ddx4N8meeTIbtfVZtPs9TvRoyf2Jd9pc5CWTdP8C0n0APE=",sidebar_class_name:"post api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Add Message",permalink:"/docs/superplatform/add-message"},next:{title:"Get Threads",permalink:"/docs/superplatform/get-threads"}},k={},q=[];function _(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"List Messages"}),"\n",(0,i.jsx)(d(),{method:"post",path:"/chat-svc/thread/{threadId}/messages"}),"\n",(0,i.jsx)(s.p,{children:"Fetch messages (and associated assets) for a specific chat thread."}),"\n",(0,i.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,i.jsx)(s.p,{children:"Path Parameters"})})}),(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:(0,i.jsx)(p(),{className:"paramsItem",param:{description:"Thread ID",in:"path",name:"threadId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(v.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Messages and assets successfully retrieved"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"assets"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Content is the base64 encoded binary file direcly embedded in the asset itself",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"Url of the asset where",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(x(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"messages"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(x(),{collapsible:!1,name:"assetIds",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{description:"AssetIds defines the attachments the message has.",items:{type:"string"},type:"array"}}),(0,i.jsx)(x(),{collapsible:!1,name:"content",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:'Content of the message eg. "Hi, what\'s up?"',type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"createdAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"threadId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"ThreadId of the message.",type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"updatedAt",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(x(),{collapsible:!1,name:"userId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{description:"UserId is the id of the user who wrote the message.\nFor AI messages this field is empty.",type:"string"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})})]})]})}),(0,i.jsx)(v.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(j(),{responseExample:'{\n  "assets": [\n    {\n      "content": "string",\n      "createdAt": "string",\n      "description": "string",\n      "id": "string",\n      "type": "string",\n      "updatedAt": "string",\n      "url": "string"\n    }\n  ],\n  "messages": [\n    {\n      "assetIds": [\n        "string"\n      ],\n      "content": "string",\n      "createdAt": "string",\n      "id": "string",\n      "threadId": "string",\n      "updatedAt": "string",\n      "userId": "string"\n    }\n  ]\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(v.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Invalid JSON"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(v.default,{label:"401",value:"401",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Unauthorized"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]}),(0,i.jsxs)(v.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(s.p,{children:"Internal Server Error"})}),(0,i.jsx)("div",{children:(0,i.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(v.default,{label:"application/json",value:"application/json",children:(0,i.jsx)(f(),{className:"openapi-tabs__schema",children:(0,i.jsx)(v.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(s.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"string"})})})]})})})})})})]})]})})})]})}function I(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);