"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9074],{3905:(a,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>N});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function r(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function m(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},r=Object.keys(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var p=n.createContext({}),o=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):m(m({},e),a)),t},l=function(a){var e=o(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,r=a.originalType,p=a.parentName,l=i(a,["components","mdxType","originalType","parentName"]),c=o(t),k=s,N=c["".concat(p,".").concat(k)]||c[k]||h[k]||r;return t?n.createElement(N,m(m({ref:e},l),{},{components:t})):n.createElement(N,m({ref:e},l))}));function N(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var r=t.length,m=new Array(r);m[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=a,i[c]="string"==typeof a?a:s,m[1]=i;for(var o=2;o<r;o++)m[o]=t[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8347:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var n=t(87462),s=(t(67294),t(3905));const r={title:"Lab 06: Looping"},m="Lab 06: Looping",i={unversionedId:"looping/index",id:"looping/index",title:"Lab 06: Looping",description:"General Information",source:"@site/main/labs/06-looping/index.md",sourceDirName:"06-looping",slug:"/looping/",permalink:"/main/labs/looping/",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab 06: Looping"},sidebar:"tutorialSidebar",previous:{title:"Lab 05: Branching Diagrams",permalink:"/main/labs/branching-diagrams/"}},p={},o=[{value:"General Information",id:"general-information",level:2},{value:"About",id:"about",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Estimated Size",id:"estimated-size",level:3},{value:"Preamble",id:"preamble",level:2},{value:"Assignment",id:"assignment",level:2},{value:"0. Example Problem",id:"0-example-problem",level:3},{value:"1. Solving iterative problems",id:"1-solving-iterative-problems",level:3},{value:"2. Counting Digits",id:"2-counting-digits",level:3},{value:"3. Drawing Control Flow Diagrams",id:"3-drawing-control-flow-diagrams",level:3},{value:"4. Tracing through loops",id:"4-tracing-through-loops",level:3},{value:"5. (Challenge) Greatest Common Divisor",id:"5-challenge-greatest-common-divisor",level:3},{value:"Grading Scale",id:"grading-scale",level:2},{value:"1: Below Standards: ???",id:"1-below-standards-",level:3},{value:"2: Approaching Standards: ???",id:"2-approaching-standards-",level:3},{value:"3: Meeting Standards: ???",id:"3-meeting-standards-",level:3},{value:"4: Exceeding Standards: ???",id:"4-exceeding-standards-",level:3}],l={toc:o};function c(a){let{components:e,...t}=a;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"lab-06-looping"},"Lab 06: Looping"),(0,s.kt)("h2",{id:"general-information"},"General Information"),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"Academic Honesty")),(0,s.kt)("p",null,"All work that is completed in this assignment is your own group's.\nYou may talk to other students about the problems you are to solve,\nhowever, you may not share code in any way, except with your partner(s).\nWhat you submit ",(0,s.kt)("strong",{parentName:"p"},"must be your own group's work"),"."),(0,s.kt)("p",null,"You may not use any code that is posted on the internet. If you are\nnot sure it is in your best interest to contact the course staff.\nWe will be using software that will compare your code to other students in the course\nas well as online resources.\nIt is very easy for us to detect similar submissions and will result in\na failure for the exercise or possibly a failure for the course.\nPlease, do not do this.\nIt is important to be academically honest and submit your work only.\nPlease review the ",(0,s.kt)("a",{parentName:"p",href:"https://www.umass.edu/honesty/"},"UMass Academic Honesty Policy and\nProcedures")," so you are aware of what this means."),(0,s.kt)("p",null,"Copying partial or whole solutions, obtained from other students or elsewhere, is academic dishonesty.\nDo not share your code with your classmates, and do not use your classmates' code.\nIf you are confused about what constitutes academic dishonesty you should re-read the course policies.\nWe assume you have read the course policies in detail and\nby submitting this project you have provided your virtual signature in agreement with these policies.")),(0,s.kt)("h2",{id:"about"},"About"),(0,s.kt)("p",null,"This lab will ask you to 1) construct control flow diagrams from specific loop requirements,\n2) describe in English how to solve particular iterative problems,\nand 3) trace through snippets of loop related code to answer questions."),(0,s.kt)("p",null,"This lab's focus is on understanding the concept of iteration,\nand mastering the syntax of ",(0,s.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," loops."),(0,s.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Practice creating control flow diagrams to solve iterative problems"),(0,s.kt)("li",{parentName:"ol"},"Practice understanding and mastering loops in Python")),(0,s.kt)("h3",{id:"estimated-size"},"Estimated Size"),(0,s.kt)("p",null,"4 questions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Two description questions"),(0,s.kt)("li",{parentName:"ul"},"A control flow diagram question"),(0,s.kt)("li",{parentName:"ul"},"A loop tracing question"),(0,s.kt)("li",{parentName:"ul"},"A challenge question")),(0,s.kt)("h2",{id:"preamble"},"Preamble"),(0,s.kt)("p",null,"This lab centers around creating control flow diagrams of iterative processes, and tracing through ",(0,s.kt)("inlineCode",{parentName:"p"},"while")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," loops."),(0,s.kt)("p",null,"For instance, you have recently seen ",(0,s.kt)("a",{parentName:"p",href:"../lectures/while-loops/Jared#shifting-the-loop"},"this")," ",(0,s.kt)("inlineCode",{parentName:"p"},"while")," loop example in the online lecture notes:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=While",live_py:!0,title:"While"},'nums = []\ninp = input("Please enter a number or \'done\'")\nwhile inp.lower() != "done":\n    num = int(inp)\n    nums.append(num)\n    inp = input("Please enter a number or \'done\'")\ntotal = sum(nums)\nprint(f"Sum of {nums}: {total}")\n')),(0,s.kt)("p",null,"In the above snippet, the ",(0,s.kt)("inlineCode",{parentName:"p"},"while")," loop keeps appending a number to the list ",(0,s.kt)("inlineCode",{parentName:"p"},"nums")," until the user inputs the string ",(0,s.kt)("inlineCode",{parentName:"p"},'"done"'),". At that point, all the numbers in the list will be added together and the sum will be printed."),(0,s.kt)("p",null,"An example of using a ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," loop is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=For",live_py:!0,title:"For"},'prices = [12.75, 2.50, 4.99, 7.50]\nsum = 0.0\navg = 0.0\nfor price in prices:\n    sum += price\n\navg = sum / len(prices)\nprint(f"Average of {prices}: {avg}")\n')),(0,s.kt)("p",null,"This time we see that we iterate through a list of floats using a ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," loop. We iterate through the list of prices, and add each ",(0,s.kt)("inlineCode",{parentName:"p"},"price")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"sum"),". When the ",(0,s.kt)("inlineCode",{parentName:"p"},"for")," loop has gone through all the item in the list, we calculate the average and print it out."),(0,s.kt)("h2",{id:"assignment"},"Assignment"),(0,s.kt)("h3",{id:"0-example-problem"},"0. Example Problem"),(0,s.kt)("p",null,"Let's say we have a pile of books on a table, and we want to see if a particular book is in the pile. How can I solve this problem iteratively? At the beginning of the lab, your course staff will walk through a solution to this problem. You do not have to submit anything."),(0,s.kt)("h3",{id:"1-solving-iterative-problems"},"1. Solving iterative problems"),(0,s.kt)("p",null,"We are given a string ",(0,s.kt)("inlineCode",{parentName:"p"},"my_string")," and a character ",(0,s.kt)("inlineCode",{parentName:"p"},"char"),". In words, describe an iterative solution that determines if the ",(0,s.kt)("inlineCode",{parentName:"p"},"char")," appears somewhere in ",(0,s.kt)("inlineCode",{parentName:"p"},"my_string"),". For example, if the given string is \"Hello\" and the target character is '6', we would want to return ",(0,s.kt)("inlineCode",{parentName:"p"},"False"),". If our character was 'H', we would want to return ",(0,s.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,s.kt)("h3",{id:"2-counting-digits"},"2. Counting Digits"),(0,s.kt)("p",null,"You are given a line of text. In words, describe an iterative solution that determines how many characters in the line of text are digits. The goal is to count the number of digits in the line of text. For example, the line of text"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Let\u2019s 86 those ","*",'&^% spam cans with dates 12-30-1997 and 9-19-1976."')),(0,s.kt)("p",null,"contains 17 digits, so your solution should return ",(0,s.kt)("inlineCode",{parentName:"p"},"17"),"."),(0,s.kt)("p",null,"You can assume there is some process that determines if a single character is a digit, like the python ",(0,s.kt)("inlineCode",{parentName:"p"},"isDigit()")," function."),(0,s.kt)("h3",{id:"3-drawing-control-flow-diagrams"},"3. Drawing Control Flow Diagrams"),(0,s.kt)("p",null,"Recall the example stack-of-books problem:"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Let's say we have a pile of books on a table, and we want to see if a particular book is in the pile. How can I solve this problem iteratively?")),(0,s.kt)("p",null,"Draw a control flow diagram of an iterative solution that returns ",(0,s.kt)("inlineCode",{parentName:"p"},"True")," if the book is in the pile, and ",(0,s.kt)("inlineCode",{parentName:"p"},"False")," otherwise. If you want an example of control flow diagrams, see the slides from ",(0,s.kt)("a",{parentName:"p",href:"../lectures/while-loops"},"lecture 9"),". You are welcome to choose any ways to construct control flow diagrams, such as with PowerPoint, a Google Doc, or paper and pencil. You will upload your drawings (either as a PDF or picture) to Gradescope."),(0,s.kt)("h3",{id:"4-tracing-through-loops"},"4. Tracing through loops"),(0,s.kt)("p",null,"Consider the following code snippet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-py"},"base = 5\nexponent = 15\nfinal = 1\nwhile exponent > 0:\n    final = base * final\n    exponent -= 1\n")),(0,s.kt)("p",null,"What are the values of the variables ",(0,s.kt)("inlineCode",{parentName:"p"},"exponent"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"final"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"base")," after the 3rd iteration of the ",(0,s.kt)("inlineCode",{parentName:"p"},"while")," loop? What about after the 5th iteration? The 10th? How many times will the ",(0,s.kt)("inlineCode",{parentName:"p"},"while")," loop execute?"),(0,s.kt)("h3",{id:"5-challenge-greatest-common-divisor"},"5. (Challenge) Greatest Common Divisor"),(0,s.kt)("p",null,"For any two integers ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),", we define the greatest common divisor to be the largest positive number that divides both ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),". For example, if ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"20")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a = 20")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"20")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b"),(0,s.kt)("mo",{parentName:"mrow"},"="),(0,s.kt)("mn",{parentName:"mrow"},"24")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b = 24")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,s.kt)("span",{parentName:"span",className:"mrel"},"="),(0,s.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"24"))))),", ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," is divisible by 1, 2, 4, 5, 10, and 20, and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," is divisible by 1, 2, 3, 4, 6, 8, 12 and 24. Therefore, the largest number that divides both ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b")))))," is 4."),(0,s.kt)("p",null,"Describe an iterative solution that, given ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),", computes their greatest common divisor. Here, we can assume the user gives two positive integers (In other words, two whole numbers strictly greater than zero)."),(0,s.kt)("p",null,"Hint: Perhaps the easiest way to do this is to just test all the numbers that can possibly divide both ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," and ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),". What is the first number we should check? What's the last number we should check?"),(0,s.kt)("h2",{id:"grading-scale"},"Grading Scale"),(0,s.kt)("p",null,"Below are how many points translate to what level on the 5-point scale."),(0,s.kt)("h3",{id:"1-below-standards-"},"1: Below Standards: ???"),(0,s.kt)("h3",{id:"2-approaching-standards-"},"2: Approaching Standards: ???"),(0,s.kt)("h3",{id:"3-meeting-standards-"},"3: Meeting Standards: ???"),(0,s.kt)("h3",{id:"4-exceeding-standards-"},"4: Exceeding Standards: ???"))}c.isMDXComponent=!0}}]);