"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[8804],{57170:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>_,contentTitle:()=>v,default:()=>L,frontMatter:()=>y,metadata:()=>b,toc:()=>S});var l=s(74848),r=s(28453),n=s(91366),t=s.n(n),i=(s(6050),s(57742)),d=s.n(i),o=(s(67792),s(27362)),c=s.n(o),p=s(36683),m=s.n(p),h=s(81124),j=s.n(h),x=(s(60674),s(23397)),u=s.n(x),f=(s(26651),s(51107)),g=(s(77675),s(19365));const y={id:"delete-role",title:"Delete a Role",description:"Delete a role based on the role ID.",sidebar_label:"Delete a Role",hide_title:!0,hide_table_of_contents:!0,api:"eJylVE1v2zgQ/SvEnLYAI7nJFljo1BQJFt4GmyJuTqkPDDW22FIkO6TsugL/ezGSHDsfLRbbiy2JM/PePL6ZHmqMmkxIxjuo4AItJhRKkLco7lXEWngnUoPjl/lFARJ8QFKcMa+hgnrIufEWQUJQpFpMSBGqu/5J9ZuxBEgw/BpUakCCUy1CBVx/XoMEwq+dIayhStShhKgbbBVUPaRd4MiYyLg15Lzk4Bi8ixj5/HQ247/HoNfvQYL2LqFLfKpCsEYP9MvPkUP65xD+/jPqBDnnLOHPl8rO3UZZU4t/Ftf//g+Ahx5GgNfPAW6d6lLjyXzH+ncB3rzcQUJyyooF0gZJXBJ5+j2kLCGi7sik3XD971AR0nmXGqjulnxfSa3ZGXAbkcRio2EpocXU+IOTBhdxBpRdRDqJG12yOcp+tEgGRmHKo8c6shxbWq+VbXxM1Zu/Ts9eA8Pt2SyY9GiSY05PJfm4Cyg+TSGfQKy8tX6LtbjfCSViUBqFcrVI/gs6ofRoVLEi3w4zMnQVWU+jUVz5tXECXR28canY275BVSMdjH8+XfMgM8i9rCqY97gD1tS4lWeyfDNKDzeDrTLcdlQW49to3LqzKpF3hfbtUe0Pc7HoQvCUQE5KNSmFqixjF5CCVWnlqS2UKSHLp6PjTgJhayKK87nYxw4KtEaTj2OjUaD2cRcTttykNRpdRGa5Z/H3hyuxOStmjzjEqiy3222xdl3haV1OebFU62BPzopZ0aTWMquE1Mbr1aTrUQtbtV4jFcaXQ0jJ6plkOWRx3B5IYLuMXc2Ks2J2Qro45drBx9Qqd8T2YQdOK+2RJv1hPP7jspyuM+G3VAarjGPUQYV+8vkd7H3O228EraZ1uJTAluagvmeIW7I58+evHRJP2VLCRpFR99w2r1wT+bmGaqVsxF/w/+Nm2rSvxGEzv0h3b0m3YyWV7fgNJHzB3WFz52WWe3MzkfHwXGsM6Sjt2U7Jxyvg4vLq8uMlSFDTgB6mgevJ/QMDvMjq6TSNLPg3y5+k9P04azk/xI9HP814GOExmkVa5px/ABa8eqY=",sidebar_class_name:"delete api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},v=void 0,b={id:"superplatform/delete-role",title:"Delete a Role",description:"Delete a role based on the role ID.",source:"@site/docs/superplatform/delete-role.api.mdx",sourceDirName:"superplatform",slug:"/superplatform/delete-role",permalink:"/docs/superplatform/delete-role",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-role",title:"Delete a Role",description:"Delete a role based on the role ID.",sidebar_label:"Delete a Role",hide_title:!0,hide_table_of_contents:!0,api:"eJylVE1v2zgQ/SvEnLYAI7nJFljo1BQJFt4GmyJuTqkPDDW22FIkO6TsugL/ezGSHDsfLRbbiy2JM/PePL6ZHmqMmkxIxjuo4AItJhRKkLco7lXEWngnUoPjl/lFARJ8QFKcMa+hgnrIufEWQUJQpFpMSBGqu/5J9ZuxBEgw/BpUakCCUy1CBVx/XoMEwq+dIayhStShhKgbbBVUPaRd4MiYyLg15Lzk4Bi8ixj5/HQ247/HoNfvQYL2LqFLfKpCsEYP9MvPkUP65xD+/jPqBDnnLOHPl8rO3UZZU4t/Ftf//g+Ahx5GgNfPAW6d6lLjyXzH+ncB3rzcQUJyyooF0gZJXBJ5+j2kLCGi7sik3XD971AR0nmXGqjulnxfSa3ZGXAbkcRio2EpocXU+IOTBhdxBpRdRDqJG12yOcp+tEgGRmHKo8c6shxbWq+VbXxM1Zu/Ts9eA8Pt2SyY9GiSY05PJfm4Cyg+TSGfQKy8tX6LtbjfCSViUBqFcrVI/gs6ofRoVLEi3w4zMnQVWU+jUVz5tXECXR28canY275BVSMdjH8+XfMgM8i9rCqY97gD1tS4lWeyfDNKDzeDrTLcdlQW49to3LqzKpF3hfbtUe0Pc7HoQvCUQE5KNSmFqixjF5CCVWnlqS2UKSHLp6PjTgJhayKK87nYxw4KtEaTj2OjUaD2cRcTttykNRpdRGa5Z/H3hyuxOStmjzjEqiy3222xdl3haV1OebFU62BPzopZ0aTWMquE1Mbr1aTrUQtbtV4jFcaXQ0jJ6plkOWRx3B5IYLuMXc2Ks2J2Qro45drBx9Qqd8T2YQdOK+2RJv1hPP7jspyuM+G3VAarjGPUQYV+8vkd7H3O228EraZ1uJTAluagvmeIW7I58+evHRJP2VLCRpFR99w2r1wT+bmGaqVsxF/w/+Nm2rSvxGEzv0h3b0m3YyWV7fgNJHzB3WFz52WWe3MzkfHwXGsM6Sjt2U7Jxyvg4vLq8uMlSFDTgB6mgevJ/QMDvMjq6TSNLPg3y5+k9P04azk/xI9HP814GOExmkVa5px/ABa8eqY=",sidebar_class_name:"delete api-method",info_path:"docs/superplatform/superplatform",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Create a New Role",permalink:"/docs/superplatform/create-role"},next:{title:"Add Permission to Role",permalink:"/docs/superplatform/add-permission-to-role"}},_={},S=[];function k(e){const a={p:"p",...(0,r.R)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Delete a Role"}),"\n",(0,l.jsx)(d(),{method:"delete",path:"/user-svc/role/{roleId}"}),"\n",(0,l.jsx)(a.p,{children:"Delete a role based on the role ID."}),"\n",(0,l.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(s,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(a.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(m(),{className:"paramsItem",param:{description:"Role ID",in:"path",name:"roleId",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(t(),{label:void 0,id:void 0,children:[(0,l.jsxs)(g.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"OK"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"object"})})})]})}),(0,l.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(j(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,l.jsxs)(g.default,{label:"400",value:"400",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Invalid JSON"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(u(),{className:"openapi-tabs__schema",children:(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,l.jsxs)(g.default,{label:"401",value:"401",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Unauthorized"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(u(),{className:"openapi-tabs__schema",children:(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"string"})})})]})})})})})})]}),(0,l.jsxs)(g.default,{label:"500",value:"500",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.p,{children:"Internal Server Error"})}),(0,l.jsx)("div",{children:(0,l.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,l.jsx)(u(),{className:"openapi-tabs__schema",children:(0,l.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(a.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,l.jsx)(a.p,{children:"string"})})})]})})})})})})]})]})})})]})}function L(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(k,{...e})}):k(e)}}}]);