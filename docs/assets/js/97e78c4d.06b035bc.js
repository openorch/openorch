"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[9416],{26306:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>Q,contentTitle:()=>N,default:()=>q,frontMatter:()=>v,metadata:()=>k,toc:()=>w});var l=s(74848),r=s(28453),i=s(91366),n=s.n(i),t=(s(6050),s(57742)),m=s.n(t),o=(s(67792),s(27362)),d=s.n(o),c=s(36683),p=s.n(c),h=s(81124),u=s.n(h),j=s(60674),f=s.n(j),x=s(23397),y=s.n(x),g=(s(26651),s(51107)),b=(s(77675),s(19365));const v={id:"container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.",sidebar_label:"Get Container Summary",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vk1v4zYQ/SsEz4qUTbpA4VPdjZFNN02COjl5faCpscQNRXKHlF1X0H8vhpItJ7YDbA65+EOcjzePM2/U8By8ROWCsoaP+DUEJpivq0rghtklCyWwKyufAZm0JghlAJnKwQS1VJCzxYaVwpfMIjOigoRpVakAOQuWAjmQnZ2pqwUgRdTKgE95wq0DFJT3Jucjvos+7ZLzhDuBooIA6Plo1rxC+mWH5qvwJU+4oqc/a4iuhIWPeNkdeVlCJfio4WHj6LkPqEzB2zY5HfaOQhwPa7qjXwh7tyv/lso/EVf3ZweBlQlQAPK2nSccwTtrPHgyuDg/p6+X2e6/8SQSCibQqXBOKxm5zn54Mmn2cjikmwiqC6ht4Y+UlHAfRKhPHPVXdgDkavLwz+TL+HFylbL+Xrdt5NnChpJNY1QmTM5ubRH74oBMjvCzVgg5H806fDs0Q+75ztEufoAMvG3J9bdj/NyYldAqZ39N7++oc/9W3itTsIeh4d7NHyBaPNoTJ/B9OsT3ZEQdSovqP8g/DMnn40wFQCM0mwKuANkkxvwYSNRYIGtUYRPn/08QCDiuQ8lHszlNQhDUqzPeC9R0JakNKgilJUkpIEQVIQee5dHozK9kttOazO/ExscCO6WpUZNHpq0UurQ+jD7/fnH5iVPOLaQpldhVtQ/sNYGPGwfse2/ynbOl1dquO+EkfRQSYvMH+wyGCdk1OluiraL2PnlA5ol9JYFGRBkGJndWmZBuZaQEkQMOOjLuuydeyjBRwqlvsIlsK7O0BDYyIeM9QiUUle2FBv8HzUOtRUBrUmmrvdgPN2xaO2eRyO2YKkNwoyzztQN0WoSlxSoVKiNteKVM5swhVMoDG9+wrW1koFISre8K9Qyk9RsfoKIitZJgPBDKLYrrh1u2ukzPX2Dwoyxbr9dpYerUYpH1fj4ThdNnl+l5WoZKE6oAWPn7Zc/rXglrURSAqbJZNMmIPRU0mUz3y+MJp3bpqjpPLyiosz5UwuzBpHU6bJRhs70gpRmm6UP3b98VAf4NmdNCGaohktn0QzPjw9D0Qx8BvJRdGhCybZqF8PCEum3pcbfb4uJWXiw0yfdSaA9vlH+w1I9ifIbNsNtXQtdkwuPSfUemfs+/kalf9+/MdLj630i1fQMYcs3pDypKFmUv2U47Mds5jaUEF/a8DiS53ZfF68kjT7jo5WrQBgqWbH9Q9O2R2ezFfq0tHQT6JFqOujRNpzxtu7Pvjk567AStsyaG5m3b/g8z6avg",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},N=void 0,k={id:"superplatform/container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.",source:"@site/docs/superplatform/container-summary.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/container-summary",permalink:"/docs/superplatform/container-summary",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"container-summary",title:"Get Container Summary",description:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines.",sidebar_label:"Get Container Summary",hide_title:!0,hide_table_of_contents:!0,api:"eJy9Vk1v4zYQ/SsEz4qUTbpA4VPdjZFNN02COjl5faCpscQNRXKHlF1X0H8vhpItJ7YDbA65+EOcjzePM2/U8By8ROWCsoaP+DUEJpivq0rghtklCyWwKyufAZm0JghlAJnKwQS1VJCzxYaVwpfMIjOigoRpVakAOQuWAjmQnZ2pqwUgRdTKgE95wq0DFJT3Jucjvos+7ZLzhDuBooIA6Plo1rxC+mWH5qvwJU+4oqc/a4iuhIWPeNkdeVlCJfio4WHj6LkPqEzB2zY5HfaOQhwPa7qjXwh7tyv/lso/EVf3ZweBlQlQAPK2nSccwTtrPHgyuDg/p6+X2e6/8SQSCibQqXBOKxm5zn54Mmn2cjikmwiqC6ht4Y+UlHAfRKhPHPVXdgDkavLwz+TL+HFylbL+Xrdt5NnChpJNY1QmTM5ubRH74oBMjvCzVgg5H806fDs0Q+75ztEufoAMvG3J9bdj/NyYldAqZ39N7++oc/9W3itTsIeh4d7NHyBaPNoTJ/B9OsT3ZEQdSovqP8g/DMnn40wFQCM0mwKuANkkxvwYSNRYIGtUYRPn/08QCDiuQ8lHszlNQhDUqzPeC9R0JakNKgilJUkpIEQVIQee5dHozK9kttOazO/ExscCO6WpUZNHpq0UurQ+jD7/fnH5iVPOLaQpldhVtQ/sNYGPGwfse2/ynbOl1dquO+EkfRQSYvMH+wyGCdk1OluiraL2PnlA5ol9JYFGRBkGJndWmZBuZaQEkQMOOjLuuydeyjBRwqlvsIlsK7O0BDYyIeM9QiUUle2FBv8HzUOtRUBrUmmrvdgPN2xaO2eRyO2YKkNwoyzztQN0WoSlxSoVKiNteKVM5swhVMoDG9+wrW1koFISre8K9Qyk9RsfoKIitZJgPBDKLYrrh1u2ukzPX2Dwoyxbr9dpYerUYpH1fj4ThdNnl+l5WoZKE6oAWPn7Zc/rXglrURSAqbJZNMmIPRU0mUz3y+MJp3bpqjpPLyiosz5UwuzBpHU6bJRhs70gpRmm6UP3b98VAf4NmdNCGaohktn0QzPjw9D0Qx8BvJRdGhCybZqF8PCEum3pcbfb4uJWXiw0yfdSaA9vlH+w1I9ifIbNsNtXQtdkwuPSfUemfs+/kalf9+/MdLj630i1fQMYcs3pDypKFmUv2U47Mds5jaUEF/a8DiS53ZfF68kjT7jo5WrQBgqWbH9Q9O2R2ezFfq0tHQT6JFqOujRNpzxtu7Pvjk567AStsyaG5m3b/g8z6avg",sidebar_class_name:"get api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Stop a Container",permalink:"/docs/superplatform/stop-container"},next:{title:"Get Docker Host",permalink:"/docs/superplatform/get-host"}},Q={},w=[];function _(e){const a={p:"p",...(0,r.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.default,{as:"h1",className:"openapi__heading",children:"Get Container Summary"}),"\n",(0,l.jsx)(m(),{method:"get",path:"/docker-svc/container/summary"}),"\n",(0,l.jsx)(a.p,{children:"Get a summary of the Docker container identified by hash or name, limited to a specified number of lines."}),"\n",(0,l.jsx)(g.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Query Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{children:[(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Container Hash",in:"query",name:"hash",schema:{type:"string"}}}),(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Container Name",in:"query",name:"name",schema:{type:"string"}}}),(0,l.jsx)(p(),{className:"paramsItem",param:{description:"Number of Lines",in:"query",name:"lines",schema:{type:"integer"}}})]})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n(),{label:void 0,id:void 0,children:[(0,l.jsxs)(b.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(f(),{collapsible:!1,name:"logs",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(f(),{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,l.jsx)(f(),{collapsible:!1,name:"summary",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{description:"DEPRECATED. Summary contains both Status and Logs.",type:"string"}})]})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "logs": "string",\n  "status": "string",\n  "summary": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON or Missing Parameters"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(f(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(f(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(b.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(y(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(f(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}})})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(u(),{responseExample:'{\n  "error": "string"\n}',language:"json"})})]})})})})]})]})})})]})}function q(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(_,{...e})}):_(e)}}}]);