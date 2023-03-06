"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),o=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=o(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:a,s[1]=u;for(var o=2;o<l;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(86010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.default)(l,s),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(87462),a=r(67294),l=r(86010),s=r(12466),u=r(16550),i=r(91980),o=r(67392),c=r(50012);function p(e){return function(e){return a.Children.map(e,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[s,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,o]=f({queryString:r,groupId:n}),[p,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),y=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{y&&u(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),o(e),b(e)}),[o,b,l]),tabValues:l}}var y=r(72389);const g="tabList__CuJ",v="tabItem_LNqP";function h(e){let{className:t,block:r,selectedValue:u,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=o[r].value;n!==u&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.default)("tabs",{"tabs--block":r},t)},o.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,l.default)("tabs__item",v,s?.className,{"tabs__item--active":u===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return a.createElement("div",{className:(0,l.default)("tabs-container",g)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function T(e){const t=(0,y.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},22408:(e,t,r)=>{r.d(t,{O:()=>l});var n=r(67294),a=r(52263);const l=e=>{let{lec_src:t}=e;const r=`https://view.officeapps.live.com/op/embed.aspx?src=${(0,a.Z)().siteConfig.url+t}`;return n.createElement("div",{style:{marginBottom:"4rem"}},n.createElement("iframe",{src:r,width:"100%",height:"600px",frameborder:"0"}),n.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},83827:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),l=r(74866),s=r(85162),u=r(22408);const i={},o="Lec 06 Lists, Tuples, Sets",c={unversionedId:"lectures/lists-tuples-strings/index",id:"lectures/lists-tuples-strings/index",title:"Lec 06 Lists, Tuples, Sets",description:"Assignment Updates",source:"@site/main/lectures/06-lists-tuples-strings/index.md",sourceDirName:"lectures/06-lists-tuples-strings",slug:"/lectures/lists-tuples-strings/",permalink:"/main/lectures/lists-tuples-strings/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Section 04 (Jared Yeager)",permalink:"/main/lectures/booleans-and-assert/Jared/"},next:{title:"Section 04 (Jared Yeager)",permalink:"/main/lectures/lists-tuples-strings/Jared/"}},p={},d=[{value:"Assignment Updates",id:"assignment-updates",level:2},{value:"Slides",id:"slides",level:2}],m={toc:d};function f(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lec-06-lists-tuples-sets"},"Lec 06 Lists, Tuples, Sets"),(0,a.kt)("h2",{id:"assignment-updates"},"Assignment Updates"),(0,a.kt)("p",null,"Stuff due this week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Participation 3 ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/2")),(0,a.kt)("li",{parentName:"ul"},"Quiz 4: ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/2")),(0,a.kt)("li",{parentName:"ul"},"HW 2: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/3")),(0,a.kt)("li",{parentName:"ul"},"Lab 4: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/3"))),(0,a.kt)("p",null,"Stuff due next week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(Presumably) Participation 4 ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/9")),(0,a.kt)("li",{parentName:"ul"},"(Presumably) Quiz 5: ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/9")),(0,a.kt)("li",{parentName:"ul"},"HW 3: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/10")),(0,a.kt)("li",{parentName:"ul"},"Lab 5: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/10"))),(0,a.kt)("h2",{id:"slides"},"Slides"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Section 2, 3, 4, 5",label:"Section 2, 3, 4, 5",default:!0,mdxType:"TabItem"},(0,a.kt)(u.O,{lec_src:r(63070).Z,mdxType:"PowerPoint"})),(0,a.kt)(s.Z,{value:"Section 1, 6",label:"Section 1, 6",mdxType:"TabItem"},(0,a.kt)(u.O,{lec_src:r(62306).Z,mdxType:"PowerPoint"}))))}f.isMDXComponent=!0},63070:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Lecture_6-328b1f031b9d5241e1c126a0f0e21a32.pptx"},62306:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/Lecture_6_Cole-a58ac2e0c762e79e2e27a29c92339ab0.pptx"}}]);