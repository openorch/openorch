"use strict";(self.webpackChunksingulatron_api_docs=self.webpackChunksingulatron_api_docs||[]).push([[4533],{59064:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=r(74848),i=r(28453);const t={sidebar_position:90,tags:["deploy-svc","deploy","containers","services"]},o="Deploy Svc",c={id:"services/deploy-svc",title:"Deploy Svc",description:"The deploy service is responsible of launching containers on whatever infrastructure the Superplatform is running on (eg. Docker Svc) and registering them into the Registry Svc.",source:"@site/docs/services/deploy-svc.md",sourceDirName:"services",slug:"/services/deploy-svc",permalink:"/docs/services/deploy-svc",draft:!1,unlisted:!1,editUrl:"https://github.com/singulatron/superplatform/tree/main/docs-source/docs/services/deploy-svc.md",tags:[{inline:!0,label:"deploy-svc",permalink:"/docs/tags/deploy-svc"},{inline:!0,label:"deploy",permalink:"/docs/tags/deploy"},{inline:!0,label:"containers",permalink:"/docs/tags/containers"},{inline:!0,label:"services",permalink:"/docs/tags/services"}],version:"current",sidebarPosition:90,frontMatter:{sidebar_position:90,tags:["deploy-svc","deploy","containers","services"]},sidebar:"tutorialSidebar",previous:{title:"Registry Svc",permalink:"/docs/services/registry-svc"},next:{title:"User Svc",permalink:"/docs/services/user-svc"}},l={},a=[{value:"Dependencies",id:"dependencies",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"deploy-svc",children:"Deploy Svc"}),"\n",(0,n.jsxs)(s.p,{children:["The deploy service is responsible of launching containers on whatever infrastructure the Superplatform is running on (eg. ",(0,n.jsx)(s.a,{href:"/docs/services/docker-svc",children:"Docker Svc"}),") and registering them into the ",(0,n.jsx)(s.a,{href:"/docs/services/docker-svc",children:"Registry Svc"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"It registers services it launches since services are not expected to self register. This is to support services that are not using the Superplatform SDK to build themselves\u2014in other words, Superplatform is designed to be able to run non-Superplatform services too."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["This page is a high level overview of the ",(0,n.jsx)(s.code,{children:"Deploy Svc"}),". For more details, please see the ",(0,n.jsx)(s.a,{href:"/docs/superplatform/save-deployment",children:"Deploy Svc API documentation"}),"."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/services/docker-svc",children:"Docker Svc"})," to start containers of services"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"/docs/services/registry-svc",children:"Registry Svc"})," to start containers of services"]}),"\n"]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>c});var n=r(96540);const i={},t=n.createContext(i);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);