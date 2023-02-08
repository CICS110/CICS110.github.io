"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1163],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},c="mdxType",d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},y=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,u=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),c=s(t),y=o,g=c["".concat(u,".").concat(y)]||c[y]||d[y]||i;return t?r.createElement(g,a(a({ref:e},p),{},{components:t})):r.createElement(g,a({ref:e},p))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=y;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=n,l[c]="string"==typeof n?n:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},8632:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={sidebar_position:2,sidebar_label:"Linux"},a="Installing Python on Linux",l={unversionedId:"guides/installing-python/linux",id:"guides/installing-python/linux",title:"Installing Python on Linux",description:"Installing python on linux depends slightly on your distribution, but your distribution's default package manager should have python as an installation option.",source:"@site/main/guides/installing-python/linux.md",sourceDirName:"guides/installing-python",slug:"/guides/installing-python/linux",permalink:"/main/guides/installing-python/linux",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Linux"},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/main/guides/installing-python/macos"},next:{title:"Setting up VSCode",permalink:"/main/guides/vscode/"}},u={},s=[],p={toc:s};function c(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installing-python-on-linux"},"Installing Python on Linux"),(0,o.kt)("p",null,"Installing python on linux depends slightly on your distribution, but your distribution's default package manager should have python as an installation option. "),(0,o.kt)("p",null,"For example, Ubuntu's package manager is apt, so you can install python by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3.11\n")),(0,o.kt)("p",null,"If you are not familiar with your distribution's package manager, you can google \"install python ",(0,o.kt)("inlineCode",{parentName:"p"},"distribution name"),'" to find the commands you need to run. '),(0,o.kt)("p",null,"Alternatively, you can install and build python from source, which you can find here: ",(0,o.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/source/"},"https://www.python.org/downloads/source/"),". You can find more information ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.python.org/moin/BeginnersGuide/Download"},"here"),"."))}c.isMDXComponent=!0}}]);