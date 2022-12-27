"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2544],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>y});var n=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=n.createContext({}),p=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=p(l),m=r,y=s["".concat(u,".").concat(m)]||s[m]||c[m]||a;return l?n.createElement(y,o(o({ref:t},d),{},{components:l})):n.createElement(y,o({ref:t},d))}));function y(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8377:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(7462),r=(l(7294),l(3905));const a={},o="Python Live Code Blocks",i={unversionedId:"live_python",id:"live_python",title:"Python Live Code Blocks",description:"Hello World you can run",source:"@site/guides/live_python.md",sourceDirName:".",slug:"/live_python",permalink:"/guides/live_python",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Heading (rank 1)",permalink:"/guides/"}},u={},p=[{value:"Hello World you can run",id:"hello-world-you-can-run",level:3},{value:"Hello World Not Runnable",id:"hello-world-not-runnable",level:3},{value:"Adding a title",id:"adding-a-title",level:3},{value:"Hello World &quot;slim&quot;",id:"hello-world-slim",level:3},{value:"You can use a turtle too:",id:"you-can-use-a-turtle-too",level:3},{value:"Importing Default Libraries",id:"importing-default-libraries",level:3}],d={toc:p};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"python-live-code-blocks"},"Python Live Code Blocks"),(0,r.kt)("h3",{id:"hello-world-you-can-run"},"Hello World you can run"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To make a runnable code block, add ",(0,r.kt)("inlineCode",{parentName:"li"},"live_py")," to the code block"),(0,r.kt)("li",{parentName:"ul"},"The code block will have a play button in the top right corner, click it to run the code"),(0,r.kt)("li",{parentName:"ul"},"The code can be edited and run again on the website",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"No need to change any source code"))),(0,r.kt)("li",{parentName:"ul"},"I don't know why the subtitles are in german")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py",live_py:!0},"print('Hello World')\n")),(0,r.kt)("h3",{id:"hello-world-not-runnable"},"Hello World Not Runnable"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Reference, here is a code block that is not runnable")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"print('Hello World')\n")),(0,r.kt)("h3",{id:"adding-a-title"},"Adding a title"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To add a title to the code block, add ",(0,r.kt)("inlineCode",{parentName:"li"},"title=My_Title")," to the code block"),(0,r.kt)("li",{parentName:"ul"},"If you want a space in the title, use ",(0,r.kt)("inlineCode",{parentName:"li"},"_")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"-")," instead of a space"),(0,r.kt)("li",{parentName:"ul"},"If you want an '_' or '-' in the title, use ",(0,r.kt)("inlineCode",{parentName:"li"},"__")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"--")," instead of a single one")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Hello-World,-with-a-title",live_py:!0,title:"Hello-World,-with-a-title"},"print('Hello World, with a title')\n")),(0,r.kt)("h3",{id:"hello-world-slim"},'Hello World "slim"'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The slim version is a little smaller"),(0,r.kt)("li",{parentName:"ul"},"Doesn't display the title"),(0,r.kt)("li",{parentName:"ul"},"Play button is inline"),(0,r.kt)("li",{parentName:"ul"},"To make a slim code block, add ",(0,r.kt)("inlineCode",{parentName:"li"},"slim")," to the code block")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py slim title=can't_see_me",live_py:!0,slim:!0,title:"can't_see_me"},"print('Hello World slim')\n")),(0,r.kt)("h3",{id:"you-can-use-a-turtle-too"},"You can use a turtle too:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can import turtle and use it"),(0,r.kt)("li",{parentName:"ul"},"Can save the drawings to a file ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the download button is in the top right of the turtle window")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=turtle_example",live_py:!0,title:"turtle_example"},"from turtle import *\ncolor('red', 'yellow')\nbegin_fill()\nwhile True:\n    forward(200)\n    left(170)\n    p = pos()\n    if abs(p[0]) < 1 and abs(p[1]) < 1:\n        break\nend_fill()\ndone()\n")),(0,r.kt)("h3",{id:"importing-default-libraries"},"Importing Default Libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can import and use various libraries that are included by default",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Link to standard library: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/index.html"},"https://docs.python.org/3/library/index.html")))),(0,r.kt)("li",{parentName:"ul"},"Warning: This has a large output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=fetching_json",live_py:!0,title:"fetching_json"},'from urllib.request import urlopen\nimport json\n# A Url that returns JSON data (without requiring authentication)\nurl = "https://pokeapi.co/api/v2/pokemon/ditto"\nwith urlopen(url) as response:\n    body = response.read()\n\nbody_parsed = json.loads(body)\nprint(json.dumps(body_parsed, indent=2))\n')))}s.isMDXComponent=!0}}]);