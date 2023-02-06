"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||i;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3726:(e,t,n)=>{n.d(t,{O:()=>i});var r=n(7294),o=n(2263);const i=e=>{let{lec_src:t}=e;const{siteConfig:n}=(0,o.Z)(),{url:i}=n,c=`https://view.officeapps.live.com/op/embed.aspx?src=${i+t}`;return r.createElement("div",{style:{marginBottom:"4rem"}},r.createElement("iframe",{src:c,width:"100%",height:"600px",frameborder:"0"}),r.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},2753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),i=n(3726);const c={},a="Lec 01 Course Introduction",l={unversionedId:"lectures/introduction/index",id:"lectures/introduction/index",title:"Lec 01 Course Introduction",description:"Exploring Code Activity",source:"@site/main/lectures/01-introduction/index.md",sourceDirName:"lectures/01-introduction",slug:"/lectures/introduction/",permalink:"/main/lectures/introduction/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Lectures",permalink:"/main/lectures/"},next:{title:"Section 01, 06 (Cole Reilly)",permalink:"/main/lectures/introduction/Cole/"}},u={},p=[{value:"Exploring Code Activity",id:"exploring-code-activity",level:2}],s={toc:p};function m(e){let{components:t,...c}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lec-01-course-introduction"},"Lec 01 Course Introduction"),(0,o.kt)(i.O,{lec_src:n(4534).Z,mdxType:"PowerPoint"}),(0,o.kt)("h2",{id:"exploring-code-activity"},"Exploring Code Activity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Guess_the_number",live_py:!0,title:"Guess_the_number"},'from datetime import datetime\n\nnow = datetime.now()\ncur_time = now.strftime("%I:%M %p")\nnum = ((now.hour * 60 + now.minute)*17 + 27) % 100\n\nprint("Try to guess the number between 0 and 100")\nprint("The number changes every minute")\nprint(f"This is the number for: {cur_time}")\nguess = int(input("Enter a number: "))\n\nif guess == num:\n    print("You guessed it!")\nelif guess > num:\n    print("Too high")\nelse:\n    print("Too low")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Spirograph",live_py:!0,title:"Spirograph"},'from turtle import *\nfrom math import pi, sin, cos, lcm\n\nR = 100\nr = 60\nd = 100\nsteps = 100\nd_theta = (1 / steps) * 2 * pi * lcm(R, r) / R\ntheta = 0\n\nhideturtle()\ncolor("blue")\n\npenup()\ngoto(R - r + d, 0)\npendown()\n\nfor i in range(steps):\n    theta += d_theta\n    x = (R - r) * cos(theta) + d * cos(theta * (R - r) / r)\n    y = (R - r) * sin(theta) - d * sin(theta * (R - r) / r)\n    goto(x, y)\n')))}m.isMDXComponent=!0},4534:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/Lecture_1-d60f225e7a334b5d799a2be53c525212.pptx"}}]);