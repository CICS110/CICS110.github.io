"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),h=a,k=m["".concat(p,".").concat(h)]||m[h]||d[h]||r;return n?i.createElement(k,o(o({ref:t},u),{},{components:n})):i.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(7462),a=(n(7294),n(3905));const r={title:"Section 04 (Jared Yeager)"},o="Types and Operations",l={unversionedId:"lectures/arith-exprs/Jared/index",id:"lectures/arith-exprs/Jared/index",title:"Section 04 (Jared Yeager)",description:"This is not entirely complete, you may notice some TODOs I have left for myself.",source:"@site/main/lectures/02-arith-exprs/Jared/index.md",sourceDirName:"lectures/02-arith-exprs/Jared",slug:"/lectures/arith-exprs/Jared/",permalink:"/main/lectures/arith-exprs/Jared/",draft:!1,tags:[],version:"current",frontMatter:{title:"Section 04 (Jared Yeager)"},sidebar:"tutorialSidebar",previous:{title:"Lec 02 Arithmetic Expressions",permalink:"/main/lectures/arith-exprs/"},next:{title:"Lec 03 Variables & Assignment",permalink:"/main/lectures/vars-and-assignment/"}},p={},s=[{value:"Assignment Updates",id:"assignment-updates",level:2},{value:"replit",id:"replit",level:2},{value:"Types",id:"types",level:2},{value:"Learning Something&#39;s Type",id:"learning-somethings-type",level:3},{value:"Arithmetic Operations",id:"arithmetic-operations",level:2},{value:"Order of Operations",id:"order-of-operations",level:3},{value:"Operands&#39; and Result&#39;s Types",id:"operands-and-results-types",level:3},{value:"String Operations",id:"string-operations",level:2},{value:"Converting Types (Casting)",id:"converting-types-casting",level:2},{value:"Math Module",id:"math-module",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"types-and-operations"},"Types and Operations"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This is not entirely complete, you may notice some TODOs I have left for myself.\n(There are probably a ton of typos too.)"),(0,a.kt)("p",{parentName:"admonition"},"But it is 1pm and I have class at 2:30, so I'm throwing up what I have.")),(0,a.kt)("h2",{id:"assignment-updates"},"Assignment Updates"),(0,a.kt)("p",null,"Short week 1 tasks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sign up for Piazza: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 2/7")),(0,a.kt)("li",{parentName:"ul"},"Sign up for Gradescope: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 2/7")),(0,a.kt)("li",{parentName:"ul"},"Sign up for Zybooks: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 2/7")),(0,a.kt)("li",{parentName:"ul"},"Quiz 1: ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 2/6"))),(0,a.kt)("p",null,"Lab this week is meeting your TA and making sure all the relevant software is installed."),(0,a.kt)("h2",{id:"replit"},"replit"),(0,a.kt)("p",null,"For this lecture,\nit will be convenient to have ",(0,a.kt)("a",{parentName:"p",href:"https://replit.com/languages/python3"},"replit")," open."),(0,a.kt)("p",null,'replit is quite cool. On the left-hand side,\nyou can type python code and run it with the big, green "Run" button.\nGo ahead and try it with ',(0,a.kt)("inlineCode",{parentName:"p"},'print("Hello, World")'),"."),(0,a.kt)("p",null,"But we will be using the right-hand side today.\nOn the right hand side you can put code/expressions (e.g. arithmetic)\none line at a time, they will be evaluated,\nand the results will be displayed."),(0,a.kt)("p",null,'The distinction is subtle.\nIt may by more useful to think of the right-hand side a "python calculator" of sorts.'),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Extra: REPLs")),(0,a.kt)("p",null,"This calculator-like thing is more formally know as a\n",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop"},"read-eval-print loop REPL")),(0,a.kt)("p",null,"It reads an expression from the user, evaluates it, prints the result, and repeats (loops).")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Extra: Python's built-in REPL")),(0,a.kt)("p",null,"replit's python REPL is presumably a wrapper around python's built-in REPL."),(0,a.kt)("p",null,"If you are in a terminal or powershell and python 3 is installed,\nthen you can start up the built in REPL with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"python3"),"\n(if you have installed python, it is almost surely python 3).\nThat's it, just ",(0,a.kt)("inlineCode",{parentName:"p"},"python3")," with no file name after it."),(0,a.kt)("p",null,"To get out of the REPL, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"exit()")," function,\nof you can hit control-d (it might be something else on Windows).")),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("p",null,"We as humans understand the difference between numbers and words.\nEven within numbers, we have whole numbers, fractions, and decimals, for instance."),(0,a.kt)("p",null,"Computers formalise this with a notion of ",(0,a.kt)("em",{parentName:"p"},"types"),". All data has some type associated with it.\nEverything is something, maybe a number, maybe text, and later on, maybe weirder things."),(0,a.kt)("p",null,"There are 3 types we care about at the moment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Integers (",(0,a.kt)("inlineCode",{parentName:"li"},"int"),"): these are the whole numbers of python,\ne.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),",",(0,a.kt)("inlineCode",{parentName:"li"},"1"),",",(0,a.kt)("inlineCode",{parentName:"li"},"6"),",",(0,a.kt)("inlineCode",{parentName:"li"},"-7"),"."),(0,a.kt)("li",{parentName:"ul"},"Floating point numbers (",(0,a.kt)("inlineCode",{parentName:"li"},"float"),"): these are the whole decimal numbers of python,\ne.g.: ",(0,a.kt)("inlineCode",{parentName:"li"},"0.0"),",",(0,a.kt)("inlineCode",{parentName:"li"},"-1.67"),",",(0,a.kt)("inlineCode",{parentName:"li"},"4e23"),"."),(0,a.kt)("li",{parentName:"ul"},"Strings (",(0,a.kt)("inlineCode",{parentName:"li"},"str"),'): these are the "text" type of python. e.g.: ',(0,a.kt)("inlineCode",{parentName:"li"},'"Hello, World!"'),".")),(0,a.kt)("p",null,"When we want to make a string out of verbatim text in code,\nwe surround it with quotation marks so that the computer knows it is text, not code.\nWe may use ",(0,a.kt)("inlineCode",{parentName:"p"},'"')," or ",(0,a.kt)("inlineCode",{parentName:"p"},"'"),". ",(0,a.kt)("strong",{parentName:"p"},"Note"),", these are both straight quotes.\nCurvy quotes like ",(0,a.kt)("inlineCode",{parentName:"p"},"\u201c"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\u201d"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2018"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"\u2019")," do ",(0,a.kt)("strong",{parentName:"p"},"not")," work."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Extra: Infinity and NaN")),(0,a.kt)("p",null,"There are some special ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),"s to mention exist:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Infinity (prints as ",(0,a.kt)("inlineCode",{parentName:"li"},"inf"),"): hard to deliberately make show up,\nbut anything more than ",(0,a.kt)("inlineCode",{parentName:"li"},"1.8e308"),' or so is too big and thus "infinite".\nWhy that specific number is much longer story.'),(0,a.kt)("li",{parentName:"ul"},"Negative Infinity (prints as ",(0,a.kt)("inlineCode",{parentName:"li"},"-inf"),"): Much like ",(0,a.kt)("inlineCode",{parentName:"li"},"inf"),", but negative."),(0,a.kt)("li",{parentName:"ul"},"Not a Number (prints as ",(0,a.kt)("inlineCode",{parentName:"li"},"nan"),"):\nSometimes when you do illegal math you get an error (such as dividing by 0).\nSometimes, lake with ",(0,a.kt)("inlineCode",{parentName:"li"},"1.8e308 - 1.8e308")," (",(0,a.kt)("inlineCode",{parentName:"li"},"inf")," - ",(0,a.kt)("inlineCode",{parentName:"li"},"inf"),') you get "Not a Number"'))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Extra: Escaping Strings")),(0,a.kt)("p",null,"[TODO: extra information on escape characters]")),(0,a.kt)("h3",{id:"learning-somethings-type"},"Learning Something's Type"),(0,a.kt)("p",null,"If you want to know what something's type is, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"type()")," function.\nThis take in anything and return the type, e.g., in the REPL\n(the first line is what I typed in, which is what the ",(0,a.kt)("inlineCode",{parentName:"p"},">>>")," represents):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> type(\"Hello, World!\")\n<class 'str'>\n")),(0,a.kt)("p",null,"Ignore the ",(0,a.kt)("inlineCode",{parentName:"p"},"class")," thing. We are being told is a string (",(0,a.kt)("inlineCode",{parentName:"p"},"str"),")"),(0,a.kt)("h2",{id:"arithmetic-operations"},"Arithmetic Operations"),(0,a.kt)("p",null,"We have a notion of ",(0,a.kt)("em",{parentName:"p"},"expressions")," in the computer science world.\nThe formal definitions can be a tad complex, by they are effectively\n",(0,a.kt)("strong",{parentName:"p"},"things that evaluate to something"),".\nFor instance, the expression ",(0,a.kt)("inlineCode",{parentName:"p"},"7 + 3 * 2")," evaluates to ",(0,a.kt)("inlineCode",{parentName:"p"},"13"),"."),(0,a.kt)("p",null,'You are hopefully familiar with operations (as in "order of operations")\nin the math sense. If we have the expression ',(0,a.kt)("inlineCode",{parentName:"p"},"7 + 8"),", we call ",(0,a.kt)("inlineCode",{parentName:"p"},"7")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"8"),"\n",(0,a.kt)("em",{parentName:"p"},"operands"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," the ",(0,a.kt)("em",{parentName:"p"},"operator"),"."),(0,a.kt)("p",null,"The basic arithmetic operators in python:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+"),": Addition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-"),": Subtraction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),": Multiplication"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/"),": Division"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**"),": Exponentiation")),(0,a.kt)("p",null,"There are two more arithmetic operators in python.\nThey both have to do with the concept of whole number division with a remainder.\nSo for instance, while you could say 17 divided by 5 is 3.4, you could also say\n17 divided by 5 is 3 with a remainder of 2 (because 5 * 3 + 2 = 17)."),(0,a.kt)("p",null,"The first approach is captured in python by ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", the second with the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"//"),": Integer Division/Floor Divisions. ",(0,a.kt)("inlineCode",{parentName:"li"},"17 // 5")," would give ",(0,a.kt)("inlineCode",{parentName:"li"},"3"),", the whole number\nof times to operator on the right can be taken out of the operator on the left."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%"),": Modulo/Remainder. ",(0,a.kt)("inlineCode",{parentName:"li"},"17 % 5")," would give ",(0,a.kt)("inlineCode",{parentName:"li"},"2"),", what remain of the operator on the left\nafter the operator on the right is taken out of it as many times as possible.")),(0,a.kt)("h3",{id:"order-of-operations"},"Order of Operations"),(0,a.kt)("p",null,'With any luck, the phrase "order of operation" or "PEMDAS" is ingrained deep in your memory.\nIf not, the idea is that in longer arithmetic expressions,\nsome operations are done before others.'),(0,a.kt)("p",null,"The order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"()"),": Expressions in ",(0,a.kt)("strong",{parentName:"li"},"P"),"arentheses have highest priority."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"**")," : ",(0,a.kt)("strong",{parentName:"li"},"E"),"xponentiation is the tightest binding operator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),",",(0,a.kt)("inlineCode",{parentName:"li"},"/"),",",(0,a.kt)("inlineCode",{parentName:"li"},"//"),",",(0,a.kt)("inlineCode",{parentName:"li"},"%"),": ",(0,a.kt)("strong",{parentName:"li"},"M"),"ultiplication, ",(0,a.kt)("strong",{parentName:"li"},"D"),"ivision, and the like come next."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"-"),": ",(0,a.kt)("strong",{parentName:"li"},"A"),"ddition and ",(0,a.kt)("strong",{parentName:"li"},"S"),"ubtraction are last.")),(0,a.kt)("p",null,"Some examples of results by using parentheses to change the order of evaluation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> 5 ** 4 * 3 + 2\n1877\n>>> 5 ** 4 * (3 + 2)\n3125\n>>> 5 ** (4 * 3) + 2\n244140627\n>>> 5 ** (4 * 3 + 2)\n6103515625\n>>> 5 ** (4 * (3 + 2))\n95367431640625\n")),(0,a.kt)("p",null,"And within a level of ",(0,a.kt)("em",{parentName:"p"},"precedence"),", the order of evaluation goes from left to right.\nA demonstrated below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> 2 - 3 + 4\n3\n>>> (2 - 3) + 4\n3\n>>> 2 - (3 + 4)\n-5\n")),(0,a.kt)("h3",{id:"operands-and-results-types"},"Operands' and Result's Types"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"floats")," are both numbers,\nyou python lets you have operations with both in them:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> 2 * 3.1415\n6.283\n")),(0,a.kt)("p",null,"The type of the result depends on the type of the operands\n(and if the operation is division or not)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> type(1 + 1)\n<class 'int'>\n>>> type(1 + 1.0)\n<class 'float'>\n>>> type(1.0 + 1)\n<class 'float'>\n>>> type(1.0 + 1.0)\n<class 'float'>\n>>> type(1 / 1)\n<class 'float'>\n")),(0,a.kt)("p",null,"If either operand is a ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", or the operation is ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),", the result will be a ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),".\nOtherwise (If both operands are ",(0,a.kt)("inlineCode",{parentName:"p"},"int")," and the operation is ",(0,a.kt)("strong",{parentName:"p"},"not")," ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),"), it will be an ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"."),(0,a.kt)("h2",{id:"string-operations"},"String Operations"),(0,a.kt)("p",null,"We can work with more than numbers in python though. We also have text, aka strings (",(0,a.kt)("inlineCode",{parentName:"p"},"str"),")."),(0,a.kt)("p",null,"Turns out, there are some handy operations we can perform on strings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"+"),": Concatenation. Combines 2 strings together, e.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'"Hello" + " " + "World"'),"\nevaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},'"Hello World"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*"),": Repeat. This taken as operands a string and and an integer, in either order,\nand repeats the string that many times. E.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'5 * "ha"')," evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},'"hahahahaha"'))),(0,a.kt)("h2",{id:"converting-types-casting"},"Converting Types (Casting)"),(0,a.kt)("p",null,"Finally, we can convert between these types if we so desire.\nFor example, if we have the string ",(0,a.kt)("inlineCode",{parentName:"p"},'"125"'),", we may want to convert it to the\ninteger ",(0,a.kt)("inlineCode",{parentName:"p"},"125"),"."),(0,a.kt)("p",null,"Conversion function are conveniently named after their types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int()"),": attempts to convert something to an ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),".\nE.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'int("125")')," evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},"125"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"float()"),": attempts to convert something to an ",(0,a.kt)("inlineCode",{parentName:"li"},"float"),"\nE.g., ",(0,a.kt)("inlineCode",{parentName:"li"},'float("125")')," evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},"125.0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str()"),": attempts to convert something to an ",(0,a.kt)("inlineCode",{parentName:"li"},"str"),".\nE.g., ",(0,a.kt)("inlineCode",{parentName:"li"},"str(-0.12)")," evaluates to ",(0,a.kt)("inlineCode",{parentName:"li"},'"-0.12"'),".")),(0,a.kt)("p",null,'I say "attempts", because some things are illegal and will fail:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'>>> int("3.14")\nTraceback (most recent call last):\n  File "<stdin>", line 1, in <module>\nValueError: invalid literal for int() with base 10: \'3.14\'\n')),(0,a.kt)("p",null,"Finally, a warning about converting ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),"s to ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"s,\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"int()")," function truncates (chops off) the decimal part.\nYou may find it more appropriate to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"round()")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> int(126.9999999999)\n126\n>>> round(126.9999999999)\n127\n")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Extra: It's Technically not Conversion")),(0,a.kt)("p",null,"[TODO: write this]")),(0,a.kt)("h2",{id:"math-module"},"Math Module"),(0,a.kt)("p",null,"[TODO: Ramble about the math module]"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"From here on is post-lecture content,\nor notes about the lecture but not part of the lecture itself.")),(0,a.kt)("hr",null),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Instructor's Outline")),(0,a.kt)("p",null,"This is an outline I had in the replit when demonstrating things."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"############################\n### Instructor's Outline ###\n############################\n\n# types:\n#   int      (whole numbers)\n#   float    (decimal point numbers)\n#   string   (text)\n\n# type() function\n\n# Familiar Math Operations:\n#   Addition:        +\n#   Subtraction:     -\n#   Multiplication:  *\n#   Division:        /\n#   Exponentiation:  **\n\n# order of operations\n\n# types in vs types out\n#    1. floats dominate\n#    2. division outputs floats\n\n# String Operations:\n#   Concatination:   +\n#   Repeat:          *\n\n# Casting\n#    int(), float(), str()\n#    use round() for float -> int\n\n# Less-Familiar Math Operations:\n#   Floor Division:  //\n#   Modulo:          %\n\n# Math Library (import math)\n#   math.pi\n#   math.sqrt()\n#   https://docs.python.org/3/library/math.html\n"))))}m.isMDXComponent=!0}}]);