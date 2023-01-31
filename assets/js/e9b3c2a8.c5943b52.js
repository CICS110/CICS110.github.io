"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(u,".").concat(m)]||d[m]||c[m]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={author:"Kobi Falus"},i="Python Live Code Blocks",o={unversionedId:"staff/meta-guides/live_python",id:"staff/meta-guides/live_python",title:"Python Live Code Blocks",description:"Hello World you can run",source:"@site/main/guides/staff/meta-guides/live_python.md",sourceDirName:"staff/meta-guides",slug:"/staff/meta-guides/live_python",permalink:"/guides/staff/meta-guides/live_python",draft:!1,tags:[],version:"current",frontMatter:{author:"Kobi Falus"},sidebar:"tutorialSidebar",previous:{title:"Making an Announcement",permalink:"/guides/staff/meta-guides/making_an_announcement"},next:{title:"Markdown Tutorial",permalink:"/guides/staff/meta-guides/markdown_tutorial"}},u={},p=[{value:"Hello World you can run",id:"hello-world-you-can-run",level:3},{value:"Hello World Not Runnable",id:"hello-world-not-runnable",level:3},{value:"Adding a title",id:"adding-a-title",level:3},{value:"Hello World &quot;slim&quot;",id:"hello-world-slim",level:3},{value:"You can use a turtle too:",id:"you-can-use-a-turtle-too",level:3},{value:"Importing Default Libraries",id:"importing-default-libraries",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"python-live-code-blocks"},"Python Live Code Blocks"),(0,a.kt)("h3",{id:"hello-world-you-can-run"},"Hello World you can run"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To make a runnable code block, add ",(0,a.kt)("inlineCode",{parentName:"li"},"live_py")," to the code block"),(0,a.kt)("li",{parentName:"ul"},"The code block will have a play button in the top right corner, click it to run the code"),(0,a.kt)("li",{parentName:"ul"},"The code can be edited and run again on the website",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"No need to change any source code"))),(0,a.kt)("li",{parentName:"ul"},"I don't know why the subtitles are in german")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"print('Hello World')\n")),(0,a.kt)("h3",{id:"hello-world-not-runnable"},"Hello World Not Runnable"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Reference, here is a code block that is not runnable")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"print('Hello World')\n")),(0,a.kt)("h3",{id:"adding-a-title"},"Adding a title"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To add a title to the code block, add ",(0,a.kt)("inlineCode",{parentName:"li"},"title=My_Title")," to the code block"),(0,a.kt)("li",{parentName:"ul"},"If you want a space in the title, use ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-")," instead of a space"),(0,a.kt)("li",{parentName:"ul"},"If you want an '_' or '-' in the title, use ",(0,a.kt)("inlineCode",{parentName:"li"},"__")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"--")," instead of a single one")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Hello-World,-with-a-title",live_py:!0,title:"Hello-World,-with-a-title"},"print('Hello World, with a title')\n")),(0,a.kt)("h3",{id:"hello-world-slim"},'Hello World "slim"'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The slim version is a little smaller"),(0,a.kt)("li",{parentName:"ul"},"Doesn't display the title"),(0,a.kt)("li",{parentName:"ul"},"Play button is inline"),(0,a.kt)("li",{parentName:"ul"},"To make a slim code block, add ",(0,a.kt)("inlineCode",{parentName:"li"},"slim")," to the code block")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim title=can't_see_me",live_py:!0,slim:!0,title:"can't_see_me"},"print('Hello World slim')\n")),(0,a.kt)("h3",{id:"you-can-use-a-turtle-too"},"You can use a turtle too:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can import turtle and use it"),(0,a.kt)("li",{parentName:"ul"},"Can save the drawings to a file ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"the download button is in the top right of the turtle window")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=turtle_example",live_py:!0,title:"turtle_example"},"from turtle import *\ncolor('red', 'yellow')\nbegin_fill()\nwhile True:\n    forward(200)\n    left(170)\n    p = pos()\n    if abs(p[0]) < 1 and abs(p[1]) < 1:\n        break\nend_fill()\ndone()\n")),(0,a.kt)("h3",{id:"importing-default-libraries"},"Importing Default Libraries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Can import and use various libraries that are included by default",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Link to standard library: ",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/index.html"},"https://docs.python.org/3/library/index.html")))),(0,a.kt)("li",{parentName:"ul"},"Warning: This has a large output")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=fetching_json",live_py:!0,title:"fetching_json"},'from urllib.request import urlopen\nimport json\n# A Url that returns JSON data (without requiring authentication)\nurl = "https://pokeapi.co/api/v2/pokemon/ditto"\nwith urlopen(url) as response:\n    body = response.read()\n\nbody_parsed = json.loads(body)\nprint(json.dumps(body_parsed, indent=2))\n')))}d.isMDXComponent=!0}}]);