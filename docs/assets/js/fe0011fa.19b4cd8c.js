"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[797],{324631:(t,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>a});var n=e(474848),s=e(28453);const c={sidebar_position:2,tags:["contributing","clients"]},o="Contribute to the Clients",r={id:"contributing/contributing-to-the-clients",title:"Contribute to the Clients",description:"TypeScript/JavaScript Clients",source:"@site/docs/contributing/contributing-to-the-clients.md",sourceDirName:"contributing",slug:"/contributing/contributing-to-the-clients",permalink:"/docs/contributing/contributing-to-the-clients",draft:!1,unlisted:!1,editUrl:"https://github.com/openorch/openorch/tree/main/docs-source/docs/contributing/contributing-to-the-clients.md",tags:[{inline:!0,label:"contributing",permalink:"/docs/tags/contributing"},{inline:!0,label:"clients",permalink:"/docs/tags/clients"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["contributing","clients"]},sidebar:"tutorialSidebar",previous:{title:"Contribute to the Docs",permalink:"/docs/contributing/contributing-to-the-docs"},next:{title:"Platform Capabilities",permalink:"/docs/category/platform-capabilities"}},l={},a=[{value:"TypeScript/JavaScript Clients",id:"typescriptjavascript-clients",level:2},{value:"Publishing",id:"publishing",level:3}];function d(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,s.R)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"contribute-to-the-clients",children:"Contribute to the Clients"}),"\n",(0,n.jsx)(i.h2,{id:"typescriptjavascript-clients",children:"TypeScript/JavaScript Clients"}),"\n",(0,n.jsxs)(i.p,{children:["Without some scripting making sweeping changes in the clients would be hard because of how they depend on each other: ",(0,n.jsx)(i.code,{children:"js/types"})," (",(0,n.jsx)(i.code,{children:"@singulatron/types"}),") is a dependency of ",(0,n.jsx)(i.code,{children:"js/client"})," (",(0,n.jsx)(i.code,{children:"@singulatron/client"}),")."]}),"\n",(0,n.jsxs)(i.p,{children:["To fix this a tiny script ",(0,n.jsx)(i.code,{children:"link_local.sh"})," was introduced."]}),"\n",(0,n.jsxs)(i.p,{children:["Your local workflow when editing the ",(0,n.jsx)(i.code,{children:"@singulatron/types"})," should be is to issue the ",(0,n.jsx)(i.code,{children:"bash link_local.sh"})," in the ",(0,n.jsx)(i.code,{children:"clients/js"})," folder. The script links up and builds the packages in the correct order for local testing."]}),"\n",(0,n.jsx)(i.h3,{id:"publishing",children:"Publishing"}),"\n",(0,n.jsxs)(i.p,{children:["Just bump the version number in the ",(0,n.jsx)(i.code,{children:"package.json"}),"s and the clients will be automatically published when merged to main."]})]})}function h(t={}){const{wrapper:i}={...(0,s.R)(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(d,{...t})}):d(t)}}}]);