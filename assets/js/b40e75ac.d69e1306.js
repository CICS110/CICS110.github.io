"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8015],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),i=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=f;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:a,s[1]=u;for(var i=2;i<l;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},61014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905)),l=r(74866),s=r(85162),u=r(22408);const o={},i="Lec 18 Classes",c={unversionedId:"Classes/index",id:"Classes/index",title:"Lec 18 Classes",description:"Assignment Updates",source:"@site/main/lectures/18_Classes/index.md",sourceDirName:"18_Classes",slug:"/Classes/",permalink:"/main/lectures/Classes/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Section 04 (Jared Yeager)",permalink:"/main/lectures/Recursion/Jared/"}},d={},p=[{value:"Assignment Updates",id:"assignment-updates",level:2},{value:"Slides",id:"slides",level:2},{value:"Activities",id:"activities",level:2}],f={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lec-18-classes"},"Lec 18 Classes"),(0,a.kt)("h2",{id:"assignment-updates"},"Assignment Updates"),(0,a.kt)("p",null,"Stuff due soon:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HW6 Due Wednesday (Files)"),(0,a.kt)("li",{parentName:"ul"},"Participation due Thursday"),(0,a.kt)("li",{parentName:"ul"},"Qui due Thursday"),(0,a.kt)("li",{parentName:"ul"},"Lab on Friday"),(0,a.kt)("li",{parentName:"ul"},"Capstone Proposal Due Friday")),(0,a.kt)("h2",{id:"slides"},"Slides"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Section 1, 6",label:"Section 1, 6",default:!0,mdxType:"TabItem"},(0,a.kt)(u.O,{lec_src:r(70161).Z,mdxType:"PowerPoint"}))),(0,a.kt)("h2",{id:"activities"},"Activities"),(0,a.kt)("p",null,"Download: ",(0,a.kt)("a",{target:"_blank",href:r(83632).Z},"Undo.py")))}m.isMDXComponent=!0},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.default)(l,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(87462),a=r(67294),l=r(86010),s=r(12466),u=r(16550),o=r(91980),i=r(67392),c=r(50012);function d(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=p(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[o,i]=m({queryString:r,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),v=(()=>{const e=o??d;return f({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{v&&u(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),i(e),b(e)}),[i,b,l]),tabValues:l}}var v=r(72389);const y="tabList__CuJ",h="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:u,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(d(t),o(n))},f=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:f,onClick:p},s,{className:(0,l.default)("tabs__item",h,s?.className,{"tabs__item--active":u===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,l.default)("tabs-container",y)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function E(e){const t=(0,v.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},22408:(e,t,r)=>{r.d(t,{O:()=>l});var n=r(67294),a=r(52263);const l=e=>{let{lec_src:t}=e;const r=`https://view.officeapps.live.com/op/embed.aspx?src=${(0,a.Z)().siteConfig.url+t}`;return n.createElement("div",{style:{marginBottom:"4rem"}},n.createElement("iframe",{src:r,width:"100%",height:"600px",frameborder:"0"}),n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},70161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Lecture_18_Cole-7b5cbac16278a0cf291611d48e4c4eab.pptx"},83632:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Undo-798e5de0b288a0ed39ec0d901d224a39.py"}}]);