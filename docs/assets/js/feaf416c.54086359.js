"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[7453],{375471:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>t,contentTitle:()=>r,default:()=>v,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=o(474848),i=o(28453);const c={sidebar_position:30,tags:["download-svc","download","containers","services"]},r="Download Svc",l={id:"services/download-svc",title:"Download Svc",description:"The download service keeps a network local copy of files frequently accessed by services in the OpenOrch platform.",source:"@site/docs/services/download-svc.md",sourceDirName:"services",slug:"/services/download-svc",permalink:"/docs/services/download-svc",draft:!1,unlisted:!1,editUrl:"https://github.com/openorch/openorch/tree/main/docs-source/docs/services/download-svc.md",tags:[{inline:!0,label:"download-svc",permalink:"/docs/tags/download-svc"},{inline:!0,label:"download",permalink:"/docs/tags/download"},{inline:!0,label:"containers",permalink:"/docs/tags/containers"},{inline:!0,label:"services",permalink:"/docs/tags/services"}],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,tags:["download-svc","download","containers","services"]},sidebar:"tutorialSidebar",previous:{title:"Docker Svc",permalink:"/docs/services/docker-svc"},next:{title:"Dynamic Svc",permalink:"/docs/services/dynamic-svc"}},t={},d=[{value:"Responsibilities",id:"responsibilities",level:2},{value:"Current Limitations",id:"current-limitations",level:2}];function a(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"download-svc",children:"Download Svc"}),"\n",(0,n.jsx)(s.p,{children:"The download service keeps a network local copy of files frequently accessed by services in the OpenOrch platform."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["This page is a high level overview of the ",(0,n.jsx)(s.code,{children:"Download Svc"}),". For more details, please see the ",(0,n.jsx)(s.a,{href:"/docs/openorch/download",children:"Download Svc API documentation"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"responsibilities",children:"Responsibilities"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Only download files from the internet once, serve network local file quicker"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"current-limitations",children:"Current Limitations"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Serving files doesn't exist yet, services that depend on the Download Svc (such as the ",(0,n.jsx)(s.a,{href:"/docs/services/docker-svc",children:"Docker Svc"}),") only work when they run on the same node as the Download Svc. This obviously doesn't work in a distributed setting."]}),"\n"]})]})}function v(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}}}]);