"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=l.createContext({}),s=function(e){var t=l.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return n?l.createElement(k,i(i({ref:t},p),{},{components:n})):l.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var l=n(7462),a=(n(7294),n(3905));const o={author:"Kobi Falus"},i="Markdown Tutorial",r={unversionedId:"staff/meta-guides/markdown_tutorial",id:"staff/meta-guides/markdown_tutorial",title:"Markdown Tutorial",description:"This website is made of markdown documents. This guide will walk you through the process of writing markdown documents for the website.",source:"@site/main/guides/staff/meta-guides/markdown_tutorial.md",sourceDirName:"staff/meta-guides",slug:"/staff/meta-guides/markdown_tutorial",permalink:"/guides/staff/meta-guides/markdown_tutorial",draft:!1,tags:[],version:"current",frontMatter:{author:"Kobi Falus"},sidebar:"tutorialSidebar",previous:{title:"Python Live Code Blocks",permalink:"/guides/staff/meta-guides/live_python"},next:{title:"Kobi's Design Doc",permalink:"/guides/staff/design_doc"}},d={},s=[{value:"Resources",id:"resources",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Main Ideas of Markdown",id:"main-ideas-of-markdown",level:2},{value:"Sections",id:"sections",level:3},{value:"Text Formatting",id:"text-formatting",level:3},{value:"Links and Images",id:"links-and-images",level:3},{value:"Code Blocks",id:"code-blocks",level:3},{value:"Lists",id:"lists",level:3},{value:"Tables",id:"tables",level:3},{value:"Horizontal Rule (Line)",id:"horizontal-rule-line",level:3}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"markdown-tutorial"},"Markdown Tutorial"),(0,a.kt)("p",null,"This website is made of markdown documents. This guide will walk you through the process of writing markdown documents for the website."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Markdown Cheat Sheet: ",(0,a.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/cheat-sheet/"},"https://www.markdownguide.org/cheat-sheet/"),"\nBasic Syntax Guide (Way better than this webpage): ",(0,a.kt)("a",{parentName:"p",href:"https://www.markdownguide.org/basic-syntax/"},"https://www.markdownguide.org/basic-syntax/")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"An environment to write markdown documents."),(0,a.kt)("p",null,"Some online editors to play around with: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://stackedit.io/"},"StackEdit"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dillinger.io/"},"Dillinger")," ")),(0,a.kt)("h2",{id:"main-ideas-of-markdown"},"Main Ideas of Markdown"),(0,a.kt)("p",null,"In markdown, you can write text and add formatting to it. You can also add links, images, and other elements to your text."),(0,a.kt)("p",null,"This does not cover everything that markdown can do, but it should be enough to get you started."),(0,a.kt)("h3",{id:"sections"},"Sections"),(0,a.kt)("p",null,"You can create sections by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," symbol. The more ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," symbols you use, the smaller the section will be. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"#")," will create a large section, ",(0,a.kt)("inlineCode",{parentName:"p"},"##")," will create a medium section, and ",(0,a.kt)("inlineCode",{parentName:"p"},"###")," will create a small section."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"# Hello World")," will create a large section with the text ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello World")," in it. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"## Hello World")," will create a medium section with the text ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello World")," in it. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"### Hello World")," will create a small section with the text ",(0,a.kt)("inlineCode",{parentName:"li"},"Hello World")," in it.")),(0,a.kt)("h3",{id:"text-formatting"},"Text Formatting"),(0,a.kt)("p",null,"You can add formatting to your text by using the following symbols:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"_")," for italics"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"__")," for bold"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"***")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"___")," for bold and italics")),(0,a.kt)("p",null,"To use them, surround the text you want to format with the symbols. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"*italics*")," will create italics, ",(0,a.kt)("inlineCode",{parentName:"p"},"**bold**")," will create bold, and ",(0,a.kt)("inlineCode",{parentName:"p"},"***bold and italics***")," will create bold and italics."),(0,a.kt)("h3",{id:"links-and-images"},"Links and Images"),(0,a.kt)("p",null,"You can add links and images to your text with the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"[Link Text](Link URL)\n![Image Text](Image URL)\n")),(0,a.kt)("p",null,"To do a link, surround the text you want to be the link with ",(0,a.kt)("inlineCode",{parentName:"p"},"[]")," and then put the link in ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"[Google](https://google.com)")," will create a link to google with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"Google")," in it."),(0,a.kt)("p",null,"To do an image, do the same but put an ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," in front. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"![Google Logo](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)")," will create an image of the google logo with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"Google Logo")," in it."),(0,a.kt)("h3",{id:"code-blocks"},"Code Blocks"),(0,a.kt)("p",null,"There are two types of code blocks: inline and multiline. Inline code blocks are used to show code in the middle of a sentence. Multiline code blocks are used to show code on their own line."),(0,a.kt)("p",null,"To do an inline code block, surround the code with ",(0,a.kt)("inlineCode",{parentName:"p"},"`"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"`print('Hello World')`")," will create an inline code block with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"print('Hello World')")," in it."),(0,a.kt)("p",null,"To do a multiline code block, surround the code with ",(0,a.kt)("inlineCode",{parentName:"p"},"```"),". For example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"```\nprint('Hello World')\n```\n")),(0,a.kt)("p",null,"will create a multiline code block with the text ",(0,a.kt)("inlineCode",{parentName:"p"},"print('Hello World')")," in it."),(0,a.kt)("p",null,"On the line where you start the code block, you can add a language to the code block. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"```py")," will create a python code block. This will add syntax highlighting to the code block. Here is an example of a python code block:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"print('Hello World')\n")),(0,a.kt)("p",null,"And the markdown for it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"```py\nprint('Hello World')\n```\n")),(0,a.kt)("h3",{id:"lists"},"Lists"),(0,a.kt)("p",null,"You can create lists by using the following symbols:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-")," for unordered lists"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.")," for ordered lists")),(0,a.kt)("p",null,"To create an unordered list, put ",(0,a.kt)("inlineCode",{parentName:"p"},"-")," in front of each item in the list. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"- Item 1\n- Item 2\n- Item 3\n")),(0,a.kt)("p",null,"will create an unordered list with the items ",(0,a.kt)("inlineCode",{parentName:"p"},"Item 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Item 2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Item 3"),"."),(0,a.kt)("p",null,"To create an ordered list, put ",(0,a.kt)("inlineCode",{parentName:"p"},"{a number}.")," in front of each item in the list. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"1. Item 1\n2. Item 2\n3. Item 3\n")),(0,a.kt)("p",null,"will create an ordered list with the items ",(0,a.kt)("inlineCode",{parentName:"p"},"Item 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Item 2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Item 3"),"."),(0,a.kt)("h3",{id:"tables"},"Tables"),(0,a.kt)("p",null,"You can create tables by using the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Row 1    | Row 1    | Row 1    |\n| Row 2    | Row 2    | Row 2    |\n| Row 3    | Row 3    | Row 3    |\n")),(0,a.kt)("p",null,"This will create a table with the columns ",(0,a.kt)("inlineCode",{parentName:"p"},"Column 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Column 2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Column 3")," and the rows ",(0,a.kt)("inlineCode",{parentName:"p"},"Row 1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Row 2"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Row 3"),"."),(0,a.kt)("h3",{id:"horizontal-rule-line"},"Horizontal Rule (Line)"),(0,a.kt)("p",null,"You can create a horizontal rule by using the following syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-md"},"---\n")),(0,a.kt)("p",null,"This will create a horizontal rule."))}u.isMDXComponent=!0}}]);