"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5004],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,c=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return n?o.createElement(c,r(r({ref:t},h),{},{components:n})):o.createElement(c,r({ref:t},h))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46216:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={author:"Kobi Falus",sidebar_position:0,sidebar_label:"Windows"},r="Installing Python on Windows",l={unversionedId:"guides/installing-python/windows",id:"guides/installing-python/windows",title:"Installing Python on Windows",description:"This guide will help you install Python on Windows. If you are using a different operating system, please see the Installing Python for a different guide.",source:"@site/main/guides/00-installing-python/windows.md",sourceDirName:"guides/00-installing-python",slug:"/guides/installing-python/windows",permalink:"/main/guides/installing-python/windows",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{author:"Kobi Falus",sidebar_position:0,sidebar_label:"Windows"},sidebar:"tutorialSidebar",previous:{title:"Installing Python",permalink:"/main/guides/installing-python/"},next:{title:"MacOS",permalink:"/main/guides/installing-python/macos"}},s={},p=[{value:"Make sure you don&#39;t already have Python",id:"make-sure-you-dont-already-have-python",level:2},{value:"Installing Python",id:"installing-python",level:2},{value:"For if things go wrong",id:"for-if-things-go-wrong",level:2}],h={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-python-on-windows"},"Installing Python on Windows"),(0,a.kt)("p",null,"This guide will help you install Python on Windows. If you are using a different operating system, please see the ",(0,a.kt)("a",{parentName:"p",href:"/main/guides/installing-python/"},"Installing Python")," for a different guide."),(0,a.kt)("h2",{id:"make-sure-you-dont-already-have-python"},"Make sure you don't already have Python"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Open the start menu and search for "cmd" (or "command prompt")'),(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"python --version"),' and press enter. If you get a message saying "python is not recognized as an internal or external command", you do not have Python installed. If you get a message saying "Python 3.6.1" (or any other set of numbers), you already have Python installed.')),(0,a.kt)("h2",{id:"installing-python"},"Installing Python"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to the Microsoft store website\n",(0,a.kt)("a",{parentName:"p",href:"https://apps.microsoft.com/store/detail/python-311/9NRWMJP3717K?hl=en-us&gl=us"},"https://apps.microsoft.com/store/detail/python-311/9NRWMJP3717K?hl=en-us&gl=us"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Get in Store App" button (should open the microsoft store app)')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click the "Get" button. This will download and install Python.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When it is done installing, follow the steps ",(0,a.kt)("a",{parentName:"p",href:"#make-sure-you-dont-already-have-python"},"above")," to verify that you have Python installed successfully."))),(0,a.kt)("h2",{id:"for-if-things-go-wrong"},"For if things go wrong"),(0,a.kt)("p",null,"Other methods of installing Python on Windows are available, but are not recommended. Contact an instructor if you have trouble installing Python using the method above. Or, try one of the following methods."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"These methods are not ideal, they have more risk of not working. If you have trouble installing Python using the method above, try one of the following methods. Try these at your own risk (though they should still work fine)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the latest version of Python from the ",(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/windows/"},"Python website"),'. Make sure to select the "Add Python to PATH" option when installing.'),(0,a.kt)("li",{parentName:"ul"},"Install Python using ",(0,a.kt)("a",{parentName:"li",href:"https://chocolatey.org/"},"Chocolatey"),". This is a package manager for Windows. You can install Chocolatey by following the instructions on their website. Once you have Chocolatey installed, you can install Python by running ",(0,a.kt)("inlineCode",{parentName:"li"},"choco install python")," in the command prompt."),(0,a.kt)("li",{parentName:"ul"},"Install Python using ",(0,a.kt)("a",{parentName:"li",href:"https://scoop.sh/"},"Scoop"),". This is another package manager for Windows. You can install Scoop by following the instructions on their website. Once you have Scoop installed, you can install Python by running ",(0,a.kt)("inlineCode",{parentName:"li"},"scoop install python")," in the command prompt.")))}u.isMDXComponent=!0}}]);