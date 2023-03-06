"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const r={author:"bburns",sidebar_position:99},l="The Big List",o={unversionedId:"big-list",id:"big-list",title:"The Big List",description:"This is an in-progress list of Python programming practice problems. The problems are roughly categorized by topic, and questions are listed so that a particular question only requires concepts covered before it. For example, questions in the Functions section will not require if-statements.",source:"@site/main/extras/big-list.md",sourceDirName:".",slug:"/big-list",permalink:"/main/extras/big-list",draft:!1,tags:[],version:"current",sidebarPosition:99,frontMatter:{author:"bburns",sidebar_position:99},sidebar:"tutorialSidebar",previous:{title:"Extras",permalink:"/main/extras/"}},s={},u=[{value:"Asserts",id:"asserts",level:2},{value:"<code>int</code> assertions",id:"int-assertions",level:3},{value:"<code>String</code> assertions",id:"string-assertions",level:3},{value:"<code>type</code> assertions",id:"type-assertions",level:3},{value:"Functions",id:"functions",level:2},{value:"Function headers",id:"function-headers",level:3},{value:"Return statements",id:"return-statements",level:3},{value:"Full functions",id:"full-functions",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-big-list"},"The Big List"),(0,a.kt)("p",null,"This is an in-progress list of Python programming practice problems. The problems are roughly categorized by topic, and questions are listed so that a particular question only requires concepts covered before it. For example, questions in the Functions section will not require if-statements."),(0,a.kt)("p",null,"We will not post solutions to these questions, and there is no autograder. We heavily encourage you to compare solutions to classmates or come to office hours if you are unsure about your solutions. If you get stuck, check out the ",(0,a.kt)("a",{parentName:"p",href:"/main/guides/getting-unstuck"},"Getting Unstuck")," guide, or post to Piazza."),(0,a.kt)("h2",{id:"asserts"},"Asserts"),(0,a.kt)("h3",{id:"int-assertions"},(0,a.kt)("inlineCode",{parentName:"h3"},"int")," assertions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," containing an ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),", write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," is equal to 3"),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"count")," containing an ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),", write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"count")," is greater than or equal to 0."),(0,a.kt)("li",{parentName:"ul"},"Given two variables ",(0,a.kt)("inlineCode",{parentName:"li"},"first")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"second")," containing ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," values, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"first")," is strictly smaller than ",(0,a.kt)("inlineCode",{parentName:"li"},"second"),"."),(0,a.kt)("li",{parentName:"ul"},"Given two variables ",(0,a.kt)("inlineCode",{parentName:"li"},"num_apples")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"num_pears")," containing ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," values, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"num_apples")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"num_pears")," are not equal."),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"day")," containing an int, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"day")," is between 1 and 7 inclusive.")),(0,a.kt)("h3",{id:"string-assertions"},(0,a.kt)("inlineCode",{parentName:"h3"},"String")," assertions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," containing a String, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," contains the value 'Ben'"),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," containing a String, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," does not contain the value 'John'"),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," containing a String, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," is at most 10 characters long."),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," containing a String, write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," is neither 'Ben' nor 'John'")),(0,a.kt)("h3",{id:"type-assertions"},(0,a.kt)("inlineCode",{parentName:"h3"},"type")," assertions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"count"),", write a single line of code that asserts ",(0,a.kt)("inlineCode",{parentName:"li"},"count")," contains an ",(0,a.kt)("inlineCode",{parentName:"li"},"int")),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"ratio"),", write a single line of code that asserts ",(0,a.kt)("inlineCode",{parentName:"li"},"ratio")," contains a ",(0,a.kt)("inlineCode",{parentName:"li"},"float")),(0,a.kt)("li",{parentName:"ul"},"Given a variable ",(0,a.kt)("inlineCode",{parentName:"li"},"name"),", write a single line of code that asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"name")," is a String."),(0,a.kt)("li",{parentName:"ul"},"Given two variables ",(0,a.kt)("inlineCode",{parentName:"li"},"num_apples")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"num_pears"),", write a single line of code that asserts that both ",(0,a.kt)("inlineCode",{parentName:"li"},"num_apples")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"num_pears")," contain ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"s")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"Define parameters in the order they are listed in the prompt."),(0,a.kt)("h3",{id:"function-headers"},"Function headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Write the function header for a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"my_function"),", which takes in no parameters"),(0,a.kt)("li",{parentName:"ul"},"Write the function header for a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"convert"),", which takes in a single parameter named ",(0,a.kt)("inlineCode",{parentName:"li"},"meters"),", and returns ",(0,a.kt)("inlineCode",{parentName:"li"},"meters")," times 1000"),(0,a.kt)("li",{parentName:"ul"},"Write a function header for a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"multiply"),", which takes in two positional parameters named ",(0,a.kt)("inlineCode",{parentName:"li"},"multiplier")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"multiplicand")),(0,a.kt)("li",{parentName:"ul"},"Write a function header for a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"get_capacity"),", which takes in a single parameter named ",(0,a.kt)("inlineCode",{parentName:"li"},"water_level")," with default value ",(0,a.kt)("inlineCode",{parentName:"li"},"0")),(0,a.kt)("li",{parentName:"ul"},"Write a function header for a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"take_power")," which takes in two parameters: ",(0,a.kt)("inlineCode",{parentName:"li"},"base"),", with no default value, and ",(0,a.kt)("inlineCode",{parentName:"li"},"exponent"),", with a default value of 2")),(0,a.kt)("h3",{id:"return-statements"},"Return statements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the following function by writing a single line of code that returns the value ",(0,a.kt)("inlineCode",{parentName:"li"},"3"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def return_three():\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the following function by writing a single line of code that returns the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"result"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def return_variable(num):\n    result = num + 3\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the following function by writing a single line of code that returns the value of the parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"num"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def return_parameter(num):\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the following function by writing a single line of code that returns the value of the parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"num")," multiplied by ",(0,a.kt)("inlineCode",{parentName:"li"},"5"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def quintuple(num):\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Complete the following function by writing a single line of code that returns the value of the first parameter subtracted by the second parameter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def subtract(a, b):\n")),(0,a.kt)("h3",{id:"full-functions"},"Full functions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Write a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"print_hello"),", which takes in no parameters and prints the String 'Hello!'"),(0,a.kt)("li",{parentName:"ol"},"Write a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"add_three"),", which takes in a single parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"num"),", and returns the value of ",(0,a.kt)("inlineCode",{parentName:"li"},"num")," plus the value ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),"."),(0,a.kt)("li",{parentName:"ol"},"Write a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"compare"),", which takes in two parameters ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),", which returns ",(0,a.kt)("inlineCode",{parentName:"li"},"True")," if ",(0,a.kt)("inlineCode",{parentName:"li"},"a")," is greater than ",(0,a.kt)("inlineCode",{parentName:"li"},"b"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"False")," otherwise. This function should be two lines including the header, and should not require the use of if-statements or a ternary!"),(0,a.kt)("li",{parentName:"ol"},"Write a function named ",(0,a.kt)("inlineCode",{parentName:"li"},"fifth_power"),", which takes in a single parameter ",(0,a.kt)("inlineCode",{parentName:"li"},"num"),", asserts that ",(0,a.kt)("inlineCode",{parentName:"li"},"num")," is an ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),", and then returns ",(0,a.kt)("inlineCode",{parentName:"li"},"num")," raised to the 5th power. This function should be three lines including the header.")))}m.isMDXComponent=!0}}]);