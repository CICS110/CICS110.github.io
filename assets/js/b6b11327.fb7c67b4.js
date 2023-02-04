"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const i={author:"Ben Burns",sidebar_position:1,sidebar_label:"Extensions"},a="Helpful VSCode Extensions",s={unversionedId:"guides/vscode/extensions",id:"guides/vscode/extensions",title:"Helpful VSCode Extensions",description:'This is a guide detailing some useful but nonessential VSCode Extensions. To install any of these, click the Extensions icon on the left (Tetris blocks), and search the phrase "in quotes" in the search bar.',source:"@site/main/guides/vscode/extensions.md",sourceDirName:"guides/vscode",slug:"/guides/vscode/extensions",permalink:"/main/guides/vscode/extensions",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{author:"Ben Burns",sidebar_position:1,sidebar_label:"Extensions"},sidebar:"tutorialSidebar",previous:{title:"Installation and Setup",permalink:"/main/guides/vscode/installation"},next:{title:"Python Debugger",permalink:"/main/guides/vscode/debugger"}},l={},u=[{value:"Themes",id:"themes",level:2},{value:"Material Icon Theme",id:"material-icon-theme",level:3},{value:"Quality of Life Extensions",id:"quality-of-life-extensions",level:2}],c={toc:u};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"helpful-vscode-extensions"},"Helpful VSCode Extensions"),(0,o.kt)("p",null,'This is a guide detailing some useful but nonessential VSCode Extensions. To install any of these, click the Extensions icon on the left (Tetris blocks), and search the phrase "in quotes" in the search bar.'),(0,o.kt)("h2",{id:"themes"},"Themes"),(0,o.kt)("p",null,'Probably the most popular type of VSCode extension are themes, which let you change the visual appearance of your VSCode. There are a few themes already preinstalled. To switch your theme to a preinstalled theme, open the VSCode Command Pallet: press Ctrl+Shift+P on Windows, or \u2318+Shift+P on MacOS. Then enter "Preferences: Color Theme". You can use the arrow keys to preview what each theme looks like, and select whichever you prefer. '),(0,o.kt)("p",null,"You can find a visual explorer of VSCode themes ",(0,o.kt)("a",{parentName:"p",href:"https://vscodethemes.com/?language=python"},"here"),". Below are themes that members of the CICS 110 staff use:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Built-in light/dark (Kobi) "),(0,o.kt)("li",{parentName:"ul"},'Github Dark Colorblind (Beta), from the "Github Theme" extension (Ben)'),(0,o.kt)("li",{parentName:"ul"},'All of the "Ayu" themes (Ben)'),(0,o.kt)("li",{parentName:"ul"},"Dark+ Python (Manan)")),(0,o.kt)("h3",{id:"material-icon-theme"},"Material Icon Theme"),(0,o.kt)("p",null,'A theme I highly recommend installing is the "Material Icon Theme". It\'s strictly better than the default, especially for differentiating between different types of text files. Just make sure you apply the theme after you install at. '),(0,o.kt)("h2",{id:"quality-of-life-extensions"},"Quality of Life Extensions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Better Comments" highlights TODOs in orange, making it easier to see what you still need to do'),(0,o.kt)("li",{parentName:"ul"},'"Todo Tree" also highlights TODOs, and gives you a sidebar icon that you can click to view all your TODOs in one place (you just have to make sure to write a comment like: ',(0,o.kt)("inlineCode",{parentName:"li"},"# TODO : whatever you want to do"),")"),(0,o.kt)("li",{parentName:"ul"},'If you get sick of reaching for your arrow keys to move your cursor out of parenthesis or brackets, "TabOut" lets you press your ',(0,o.kt)("inlineCode",{parentName:"li"},"Tab")," key to move the cursor past the next close parenthesis/bracket/brace.")))}h.isMDXComponent=!0}}]);