"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[6495],{14064:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>L,default:()=>A,frontMatter:()=>v,metadata:()=>S,toc:()=>N});var n=s(74848),i=s(28453),r=s(91366),t=s.n(r),l=(s(6050),s(57742)),o=s.n(l),m=(s(67792),s(27362)),d=s.n(m),c=s(36683),p=s.n(c),h=s(81124),u=s.n(h),j=s(60674),x=s.n(j),y=s(23397),f=s.n(y),b=(s(26651),s(51107)),g=(s(77675),s(19365));const v={id:"container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.",sidebar_label:"Get Container Summary",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1v2zgQ/SsEz4rkNi1Q+LTexkizzcbBOjm5PtDUWGJDkeyQstdr6L8XQ8mWE9sBNodc/EHOx5vHmTdbnoOXqFxQ1vAhv4bABPN1VQncMLtkoQR2ZeUTIJPWBKEMIFM5mKCWCnK22LBS+JJZZEZUkDCtKhUgZ8FSIAeytTN1tQCkiFoZ8ClPuHWAgvLe5HzI99GnbXKecCdQVBAAPR/Oti+Qft2j+SZ8yROu6PRXDdGVsPAhL9srL0uoBB9uedg4OvcBlSl40yTnw95RiNNhTXv1P8Le7cu/pfLPxNXd3VFgZQIUgLxp5glH8M4aD54MPg4G9PU82+Q7TyKhYALdCue0kpHr7Kcnk+1BDof0EkG1AbUt/ImSEu6DCPWZq+7JjoBcje//GX8dPYyvUta9666NPFvYULJpjMqEydmtLWJfHJHJEX7VCiHnw1mLb4+mzz3fO9rFT5CBNw25fjrFz41ZCa1y9td0cked+7fyXpmC3fcN92b+ANHiyZ44g+/DMb5HI+pQWlT/Qf5uSD6fZioAGqHZFHAFyMYx5vtAosYCWaMKmzj/f4JAwFEdSj6czWkSgqBenfFOoKYrSW1QQSgtSUoBIaoIOfAsj0YXfiWzvdZkfi82PhbYKk2NmjwybaXQpfVh+PnLx8sPnHLuIE2pxLaqQ2AvCXzYOGA/OpMfnC2t1nbdCifpo5AQmz/YJzBMyLbR2RJtFbX30QMyT+wrCTQiyjAwubPKhHQnIyWIHLDXkVHXPfFR+okSTn2HTWRbmaUlsJEJGd8RKqGobC80+D9oHmotAlqTSlsdxL6/YdPaOYtEbstUGYIbZpl1YCzKMrVYZKQLL1TJXDiESnlgoxvmtAhLi1WsvlISrW+L9Ayk9RsfoKICtZJgPBDCHYLr+1u2ukwHz/L7YZat1+u0MHXM3/n5TBROX1ymg7QMlSZUAbDyk2XHaQ/fr0VRAKbKZtEkI+ZU0GQycWAmKGmZUJe0BQ3Sy3RwgTL9QmGd9aES5gAoLdN+n/R77Rkt236W3nX7dj0R4N+QOS2UoRoindtuZGa8H5lu5COA56JL40G22+1CeHhE3TR03G62uLaVFwtN4r0U2sMr5R+t9JMYn2DTb/aV0DWZ8Lhy35Cp2/KvZOqW/RszHS/+V1Lt9n+fa05/UFGyKHrJbtaJ2dZpJCW4cOB1JMjNoShejx94wkUnVr0yULBk94Oi767M5iD2S2VpIdAn0XLSZbttdadp9vbt1VmPvZy11sTQvGma3wIyqZk=",sidebar_class_name:"get api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},L=void 0,S={id:"openorch/container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.",source:"@site/docs/openorch/container-summary.api.mdx",sourceDirName:"openorch",slug:"/openorch/container-summary",permalink:"/docs/openorch/container-summary",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.",sidebar_label:"Get Container Summary",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VU1v2zgQ/SsEz4rkNi1Q+LTexkizzcbBOjm5PtDUWGJDkeyQstdr6L8XQ8mWE9sBNodc/EHOx5vHmTdbnoOXqFxQ1vAhv4bABPN1VQncMLtkoQR2ZeUTIJPWBKEMIFM5mKCWCnK22LBS+JJZZEZUkDCtKhUgZ8FSIAeytTN1tQCkiFoZ8ClPuHWAgvLe5HzI99GnbXKecCdQVBAAPR/Oti+Qft2j+SZ8yROu6PRXDdGVsPAhL9srL0uoBB9uedg4OvcBlSl40yTnw95RiNNhTXv1P8Le7cu/pfLPxNXd3VFgZQIUgLxp5glH8M4aD54MPg4G9PU82+Q7TyKhYALdCue0kpHr7Kcnk+1BDof0EkG1AbUt/ImSEu6DCPWZq+7JjoBcje//GX8dPYyvUta9666NPFvYULJpjMqEydmtLWJfHJHJEX7VCiHnw1mLb4+mzz3fO9rFT5CBNw25fjrFz41ZCa1y9td0cked+7fyXpmC3fcN92b+ANHiyZ44g+/DMb5HI+pQWlT/Qf5uSD6fZioAGqHZFHAFyMYx5vtAosYCWaMKmzj/f4JAwFEdSj6czWkSgqBenfFOoKYrSW1QQSgtSUoBIaoIOfAsj0YXfiWzvdZkfi82PhbYKk2NmjwybaXQpfVh+PnLx8sPnHLuIE2pxLaqQ2AvCXzYOGA/OpMfnC2t1nbdCifpo5AQmz/YJzBMyLbR2RJtFbX30QMyT+wrCTQiyjAwubPKhHQnIyWIHLDXkVHXPfFR+okSTn2HTWRbmaUlsJEJGd8RKqGobC80+D9oHmotAlqTSlsdxL6/YdPaOYtEbstUGYIbZpl1YCzKMrVYZKQLL1TJXDiESnlgoxvmtAhLi1WsvlISrW+L9Ayk9RsfoKICtZJgPBDCHYLr+1u2ukwHz/L7YZat1+u0MHXM3/n5TBROX1ymg7QMlSZUAbDyk2XHaQ/fr0VRAKbKZtEkI+ZU0GQycWAmKGmZUJe0BQ3Sy3RwgTL9QmGd9aES5gAoLdN+n/R77Rkt236W3nX7dj0R4N+QOS2UoRoindtuZGa8H5lu5COA56JL40G22+1CeHhE3TR03G62uLaVFwtN4r0U2sMr5R+t9JMYn2DTb/aV0DWZ8Lhy35Cp2/KvZOqW/RszHS/+V1Lt9n+fa05/UFGyKHrJbtaJ2dZpJCW4cOB1JMjNoShejx94wkUnVr0yULBk94Oi767M5iD2S2VpIdAn0XLSZbttdadp9vbt1VmPvZy11sTQvGma3wIyqZk=",sidebar_class_name:"get api-method",info_path:"docs/openorch/openorch",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Stop a Container",permalink:"/docs/openorch/stop-container"},next:{title:"Get Docker Host",permalink:"/docs/openorch/get-host"}},k={},N=[];function _(e){const a={p:"p",...(0,i.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.default,{as:"h1",className:"openapi__heading",children:"Get Container Summary"}),"\n",(0,n.jsx)(o(),{method:"get",path:"/docker-svc/container/summary"}),"\n",(0,n.jsx)(a.p,{children:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines."}),"\n",(0,n.jsx)(b.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,n.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},children:(0,n.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,n.jsx)(a.p,{children:"Query Parameters"})})}),(0,n.jsx)("div",{children:(0,n.jsxs)("ul",{children:[(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Container Hash",in:"query",name:"hash",schema:{type:"string"}}}),(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Container Name",in:"query",name:"name",schema:{type:"string"}}}),(0,n.jsx)(p(),{className:"paramsItem",param:{description:"Number of Lines",in:"query",name:"lines",schema:{type:"integer"}}})]})})]}),"\n",(0,n.jsx)("div",{children:(0,n.jsx)("div",{children:(0,n.jsxs)(t(),{label:void 0,id:void 0,children:[(0,n.jsxs)(g.default,{label:"200",value:"200",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"OK"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,n.jsx)(x(),{collapsible:!1,name:"logs",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,n.jsx)(x(),{collapsible:!1,name:"summary",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"DEPRECATED. Summary contains both Status and Logs.",type:"string"}})]})]})}),(0,n.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "logs": "string",\n  "status": "string",\n  "summary": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(g.default,{label:"400",value:"400",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Invalid JSON or Missing Parameters"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(g.default,{label:"401",value:"401",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Unauthorized"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,n.jsxs)(g.default,{label:"500",value:"500",children:[(0,n.jsx)("div",{children:(0,n.jsx)(a.p,{children:"Internal Server Error"})}),(0,n.jsx)("div",{children:(0,n.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,n.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,n.jsxs)(f(),{className:"openapi-tabs__schema",children:[(0,n.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,n.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,n.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,n.jsx)("strong",{children:(0,n.jsx)(a.p,{children:"Schema"})})}),(0,n.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,n.jsx)(x(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,n.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,n.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function A(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}}}]);