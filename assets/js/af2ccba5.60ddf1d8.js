"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[375],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),p=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return t?a.createElement(k,l(l({ref:n},s),{},{components:t})):a.createElement(k,l({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2538:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={title:"Section 04 (Jared Yeager)"},l="Functions",o={unversionedId:"lectures/function-basics/Jared/index",id:"lectures/function-basics/Jared/index",title:"Section 04 (Jared Yeager)",description:"This is not entirely complete, you may notice some TODOs I have left for myself.",source:"@site/main/lectures/04-function-basics/Jared/index.md",sourceDirName:"lectures/04-function-basics/Jared",slug:"/lectures/function-basics/Jared/",permalink:"/main/lectures/function-basics/Jared/",draft:!1,tags:[],version:"current",frontMatter:{title:"Section 04 (Jared Yeager)"},sidebar:"tutorialSidebar",previous:{title:"Lec 04 Function Basics",permalink:"/main/lectures/function-basics/"},next:{title:"Lec 05 Booleans & Assert",permalink:"/main/lectures/booleans-and-assert/"}},u={},p=[{value:"Assignment Updates",id:"assignment-updates",level:2},{value:"Black Box Functions",id:"black-box-functions",level:2},{value:"Hello, You, One More Time",id:"hello-you-one-more-time",level:3},{value:"Functions as Code",id:"functions-as-code",level:2},{value:"Function Signatures",id:"function-signatures",level:3},{value:"Making Functions",id:"making-functions",level:3},{value:"None",id:"none",level:2},{value:"Default Parameters",id:"default-parameters",level:2},{value:"Variable Scope",id:"variable-scope",level:2}],s={toc:p};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions"},"Functions"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is not entirely complete, you may notice some TODOs I have left for myself.")),(0,i.kt)("h2",{id:"assignment-updates"},"Assignment Updates"),(0,i.kt)("p",null,"Stuff due this week:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Reading 1: ",(0,i.kt)("strong",{parentName:"li"},"Due Thursday 2/16")),(0,i.kt)("li",{parentName:"ul"},"Quiz 2: ",(0,i.kt)("strong",{parentName:"li"},"Due Thursday 2/16")),(0,i.kt)("li",{parentName:"ul"},"Lab 2: ",(0,i.kt)("strong",{parentName:"li"},"Due Friday 2/17"))),(0,i.kt)("p",null,"Stuff due next week:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"HW 1: ",(0,i.kt)("strong",{parentName:"li"},"Due Wednesday 2/22")),(0,i.kt)("li",{parentName:"ul"},"Quiz 3: ",(0,i.kt)("strong",{parentName:"li"},"Due Thursday 2/23")),(0,i.kt)("li",{parentName:"ul"},"Lab 3: ",(0,i.kt)("strong",{parentName:"li"},"Due Friday 2/23")),(0,i.kt)("li",{parentName:"ul"},"[TODO: Reading? Presumably Thursday.]")),(0,i.kt)("h2",{id:"black-box-functions"},"Black Box Functions"),(0,i.kt)("p",null,'There are several ways to look at what functions are.\nUp to now, we have been treating functions as "black boxes",\nmeaning we view them as a sort of magical device that we feed input to\nand that we get output from,\nwithout needing to know how they work or what\'s happening inside.'),(0,i.kt)("p",null,"In the view, we care about things that interact with the function:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"input"),"/",(0,i.kt)("em",{parentName:"li"},"parameters"),": what goes in to the function. Syntactically,\nwe put inputs in between the parentheses that come after the function name.\nE.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"314.159")," is the input in ",(0,i.kt)("inlineCode",{parentName:"li"},"round(314.159)"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"output"),"/",(0,i.kt)("em",{parentName:"li"},"return"),": This is what the function call evaluates to, or gives back.\nE.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"round(314.159)")," outputs ",(0,i.kt)("inlineCode",{parentName:"li"},"314"),". So ",(0,i.kt)("inlineCode",{parentName:"li"},"x = round(314.159)"),"\nwould evaluate to ",(0,i.kt)("inlineCode",{parentName:"li"},"x = 314"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"side effects"),": Functions in programming language may affect or interact with\nthe broader world in some way. For instance: printing to a terminal.")),(0,i.kt)("p",null,"Here is how that view relates so some functions we've already seen."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"int(42.67)"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"function: ",(0,i.kt)("inlineCode",{parentName:"li"},"int()"),"."),(0,i.kt)("li",{parentName:"ul"},"input: ",(0,i.kt)("inlineCode",{parentName:"li"},"42.67"),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"float"),"."),(0,i.kt)("li",{parentName:"ul"},"output: ",(0,i.kt)("inlineCode",{parentName:"li"},"42"),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),"."),(0,i.kt)("li",{parentName:"ul"},"side effects: none.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'print("Hello, World")'),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"function: ",(0,i.kt)("inlineCode",{parentName:"li"},"print()"),"."),(0,i.kt)("li",{parentName:"ul"},"input: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, World"'),", a ",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"."),(0,i.kt)("li",{parentName:"ul"},"side effects: prints ",(0,i.kt)("inlineCode",{parentName:"li"},"Hello, World")," to terminal.\n",(0,i.kt)("strong",{parentName:"li"},"Note:"),' this is "output" in program sense, but not in the within-program function sense.\nAfter all, if I had ',(0,i.kt)("inlineCode",{parentName:"li"},"x = print(Hello, World)"),", what would ",(0,i.kt)("inlineCode",{parentName:"li"},"print(Hello, World)"),"\nevaluate to? What would be store in ",(0,i.kt)("inlineCode",{parentName:"li"},"x"),"? That's the function output."),(0,i.kt)("li",{parentName:"ul"},"output: (We'll come back to this, but:)",(0,i.kt)("inlineCode",{parentName:"li"},"None"),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"NoneType"),".")),(0,i.kt)("p",null,"For now, thing of ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," as a special object that represents nothing.\nIn essence, the function returns nothing, or doesn't return anything."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'input("Please enter a number: ")'),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"function: ",(0,i.kt)("inlineCode",{parentName:"li"},"input()"),"."),(0,i.kt)("li",{parentName:"ul"},"input: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Please enter a number: "'),", a ",(0,i.kt)("inlineCode",{parentName:"li"},"str"),". This is the input in the function sense."),(0,i.kt)("li",{parentName:"ul"},"side effects: prints ",(0,i.kt)("inlineCode",{parentName:"li"},'"Please enter a number: "')," to terminal.\nBlocks the program until we enter something (input in the use-program-interaction sense).\nSay we enter ",(0,i.kt)("inlineCode",{parentName:"li"},"314"),"."),(0,i.kt)("li",{parentName:"ul"},"output: ",(0,i.kt)("inlineCode",{parentName:"li"},'"314"')," (what we typed in), of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str"),".")),(0,i.kt)("h3",{id:"hello-you-one-more-time"},"Hello, You, One More Time"),(0,i.kt)("p",null,"With all this, let us once more behold our second program:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Hello_You",live_py:!0,title:"Hello_You"},'your_name = input("Please enter your name: ")\nprint("Hello, " + your_name)\n')),(0,i.kt)("p",null,"With out understanding of functions as black boxes,\nI want to untangle two interwoven notions of input and output in this program.\nThere is input (parameters) and output (returns) in the function sense.\nBut there is also input and output in the user-program-interaction sense."),(0,i.kt)("p",null,"What happens on each line:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},'your_name = input("Please enter your name: ")'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Evaluate ",(0,i.kt)("inlineCode",{parentName:"li"},'input("Please enter your name: ")'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"function name: ",(0,i.kt)("inlineCode",{parentName:"li"},"input()")),(0,i.kt)("li",{parentName:"ul"},"function input/parameter: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Please enter your name: "'),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str")),(0,i.kt)("li",{parentName:"ul"},"function side effects:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"prints ",(0,i.kt)("inlineCode",{parentName:"li"},"Please enter your name: ")," to Terminal (user-interaction output)"),(0,i.kt)("li",{parentName:"ul"},"has program wait until we enter user-interaction input"),(0,i.kt)("li",{parentName:"ul"},"reads input, say ",(0,i.kt)("inlineCode",{parentName:"li"},"Jared")))),(0,i.kt)("li",{parentName:"ul"},"function output/return: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Jared"'),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str")))),(0,i.kt)("li",{parentName:"ul"},"Line effectively reduces to ",(0,i.kt)("inlineCode",{parentName:"li"},'your_name = "Jared"')),(0,i.kt)("li",{parentName:"ul"},"Assign ",(0,i.kt)("inlineCode",{parentName:"li"},"your_name")," to be ",(0,i.kt)("inlineCode",{parentName:"li"},'"Jared"'),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str")))),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},'print("Hello, " + your_name)'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Evaluate ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, " + your_name'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lookup ",(0,i.kt)("inlineCode",{parentName:"li"},"your_name"),", currently ",(0,i.kt)("inlineCode",{parentName:"li"},'"Jared"'),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str")),(0,i.kt)("li",{parentName:"ul"},"Reduces to ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, " + "Jared"')),(0,i.kt)("li",{parentName:"ul"},"Evaluates to ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, Jared"'),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str")))),(0,i.kt)("li",{parentName:"ul"},"Line effectively reduces to ",(0,i.kt)("inlineCode",{parentName:"li"},'print("Hello, Jared")')),(0,i.kt)("li",{parentName:"ul"},"Evaluate ",(0,i.kt)("inlineCode",{parentName:"li"},'print("Hello, Jared")'),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"function name: ",(0,i.kt)("inlineCode",{parentName:"li"},"print()")),(0,i.kt)("li",{parentName:"ul"},"function input/parameter: ",(0,i.kt)("inlineCode",{parentName:"li"},'"Hello, Jared"'),", of type ",(0,i.kt)("inlineCode",{parentName:"li"},"str")),(0,i.kt)("li",{parentName:"ul"},"function side effects: prints ",(0,i.kt)("inlineCode",{parentName:"li"},"Hello, Jared")," to Terminal (user-interaction output)"),(0,i.kt)("li",{parentName:"ul"},"function output/return: ",(0,i.kt)("inlineCode",{parentName:"li"},"None")))),(0,i.kt)("li",{parentName:"ul"},"Line effectively reduces to ",(0,i.kt)("inlineCode",{parentName:"li"},"None")),(0,i.kt)("li",{parentName:"ul"},"Nothing is done with value ",(0,i.kt)("inlineCode",{parentName:"li"},"None"))))),(0,i.kt)("h2",{id:"functions-as-code"},"Functions as Code"),(0,i.kt)("p",null,'Viewing functions as black boxes is fine for calling them.\nBut there are times we want to build a "black box" that does something like,\nsay, compute the area of a triangle.'),(0,i.kt)("p",null,"What functions are, and what we would be making, is a reusable piece of code.\nA named piece of code that depends on some ",(0,i.kt)("em",{parentName:"p"},"parameters")," (e.g., base and height) and\nproduces some ",(0,i.kt)("em",{parentName:"p"},"return")," (e.g., area)."),(0,i.kt)("h3",{id:"function-signatures"},"Function Signatures"),(0,i.kt)("p",null,"Function ",(0,i.kt)("em",{parentName:"p"},"signatures")," are a condensed way of representing the parameter and return\ninformation if a function."),(0,i.kt)("p",null,"For instance: ",(0,i.kt)("inlineCode",{parentName:"p"},"round(number:float) -> int")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name of the function, ",(0,i.kt)("inlineCode",{parentName:"li"},"round")," is the first thing."),(0,i.kt)("li",{parentName:"ul"},"Then within the parentheses you have the ",(0,i.kt)("em",{parentName:"li"},"parameters")," or ",(0,i.kt)("em",{parentName:"li"},"arguments")," the function takes in",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"These are each given a name, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"number")),(0,i.kt)("li",{parentName:"ul"},"These can optionally have expected types, ",(0,i.kt)("inlineCode",{parentName:"li"},":"),", then type, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"float")))),(0,i.kt)("li",{parentName:"ul"},"Then optionally at the end, an ",(0,i.kt)("inlineCode",{parentName:"li"},"->")," followed by the output type, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"int"))),(0,i.kt)("p",null,"So a function signature for the area of a triangle function might be:\n",(0,i.kt)("inlineCode",{parentName:"p"},"triangle_area(base:float, height:float) -> float"),"."),(0,i.kt)("h3",{id:"making-functions"},"Making Functions"),(0,i.kt)("p",null,"So how do we make a function?"),(0,i.kt)("p",null,"First we make what is called the function ",(0,i.kt)("em",{parentName:"p"},"header"),', basically saying\n"I\'m making a function". The header is composed of the ',(0,i.kt)("em",{parentName:"p"},"keyword")," ",(0,i.kt)("inlineCode",{parentName:"p"},"def"),'\n(as in "define"), followed by the signature for the function we want to create,\nfollowed by a ',(0,i.kt)("inlineCode",{parentName:"p"},":"),"."),(0,i.kt)("p",null,"So for the area of a triangle function, this would be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"def triangle_area(base:float, height:float) -> float:\n  # [Add code here]\n")),(0,i.kt)("p",null,"Then we want to add code to this function.\nThe actual computation of the area, in this case.\n",(0,i.kt)("strong",{parentName:"p"},"Very important"),": Code that is part of a function needs to be indented,\nthat is how the computer tells it is part of the function.\nUpdating our function:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def triangle_area(base:float, height:float) -> float:\n  area = base * height / 2\n  # [Something is still missing]\n")),(0,i.kt)("p",null,"But we are still missing something. Remember the black box view of this.\nThis function should take in ",(0,i.kt)("inlineCode",{parentName:"p"},"base")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"height")," and give back/return ",(0,i.kt)("inlineCode",{parentName:"p"},"area"),".\nWe've computed ",(0,i.kt)("inlineCode",{parentName:"p"},"area"),", but we need a specific keyword to tell the function to return it.\nThis is the ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," keyword. And so our function becomes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"def triangle_area(base:float, height:float) -> float:\n  area = base * height / 2\n  return area\n")),(0,i.kt)("p",null,'That last line says have "the function output/return ',(0,i.kt)("inlineCode",{parentName:"p"},"area"),'".'),(0,i.kt)("p",null,"As a final note, we could actually shorten this.\n",(0,i.kt)("inlineCode",{parentName:"p"},"return")," can work on any expression, not just a pure variable.\nFor instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Triangle_Area",live_py:!0,title:"Triangle_Area"},"def triangle_area(base:float, height:float) -> float:\n  return base * height / 2 # b * h / 2 is evaluated and returned\n\nprint(triangle_area(3, 6))\nprint(triangle_area(5, 5))\n")),(0,i.kt)("h2",{id:"none"},"None"),(0,i.kt)("p",null,"Some functions, like ",(0,i.kt)("inlineCode",{parentName:"p"},"print()"),", return nothing. Or at least in essence return nothing.\nHowever, because the mechanics of python demand they technically return something,\nthey instead return a special object: ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),", of type ",(0,i.kt)("inlineCode",{parentName:"p"},"NoneType"),'. This thing represents nothing.\nA function the returns None represents a function that "has no return".'),(0,i.kt)("p",null,"Below are examples of cases where a function returns nothing.\nNote that while the type is technically ",(0,i.kt)("inlineCode",{parentName:"p"},"NoneType"),",\nwe still use ",(0,i.kt)("inlineCode",{parentName:"p"},"-> None")," to indicate no return."),(0,i.kt)("p",null,"The first example case is a function that has no ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," at all.\nA practical example of such a function is a function that takes in information\nand prints it in an aesthetically pleasing manner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=No_Return",live_py:!0,title:"No_Return"},'def no_return() -> None:\n  print("I do not return, thus I return nothing (None)")\n\nret = no_return() # ret = None\nprint("no_return() returned: " + str(ret))\n')),(0,i.kt)("p",null,"The second example case is a function that has just ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," with nothing after it.\nThere are cases where the return of the function is not important,\nbut you want to use ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," when ending the flow of execution."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Return_Nothing",live_py:!0,title:"Return_Nothing"},'def return_nothing() -> None:\n  print("I return nothing, thus I return nothing (None)")\n  return\n\nret = return_nothing() # ret = None\nprint("return_nothing() returned: " + str(ret))\n')),(0,i.kt)("p",null,"The third example case is a function that explicitly has ",(0,i.kt)("inlineCode",{parentName:"p"},"return None")," in it.\nThis is equivalent to the above,\nbut there is a case where perhaps emphasising the ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," being returned makes sense."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Return_None",live_py:!0,title:"Return_None"},'def return_none() -> None:\n  print("I return None, thus I return nothing (None)")\n  return None\n\nret = return_none() # ret = None\nprint("return_none() returned: " + str(ret))\n')),(0,i.kt)("p",null,"The fourth example is mechanically a subset of the third,\na function that returns some expression that evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"None"),".\nI can't offhandedly think of a case where I would want to do this,\nbut the world is big."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Return_Eval_None",live_py:!0,title:"Return_Eval_None"},'def return_eval_none() -> None:\n  return print("I return the None returned by print(), thus I return nothing (None)")\n\nret = return_eval_none() # ret = None\nprint("return_eval_none() returned: " + str(ret))\n')),(0,i.kt)("h2",{id:"default-parameters"},"Default Parameters"),(0,i.kt)("p",null,"Normally, if a function has, say, two parameters, then when ",(0,i.kt)("em",{parentName:"p"},"calling")," (using) said function,\nyou need to specify exactly that many values.\nFor instance: for the ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle_area()")," function from earlier,\n",(0,i.kt)("inlineCode",{parentName:"p"},"triangle_area(3, 1)")," would be legal,\nwhereas ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle_area(3)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"triangle_area(3, 1, 4)")," would not."),(0,i.kt)("p",null,"But there is a way in python to have functions with optional parameters that have a default values.\nSo we can make a function for computing the surface area of cube,\nthat optionally takes a length, otherwise, assumes that length is 1."),(0,i.kt)("p",null,"The only real change, is to the signature.\nA length to surface area function might have the signature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"cube_surface_area(length:float) -> float\n")),(0,i.kt)("p",null,"But we want for ",(0,i.kt)("inlineCode",{parentName:"p"},"cube_surface_area(3)")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cube_surface_area()"),"\nto be legal, with the latter effectively being ",(0,i.kt)("inlineCode",{parentName:"p"},"cube_surface_area(1)"),"."),(0,i.kt)("p",null,"We can make that parameter option with a default by adding ",(0,i.kt)("inlineCode",{parentName:"p"},"="),"\nfollowed by a default value after the parameter name and type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"cube_surface_area(length:float=1) -> float\n")),(0,i.kt)("p",null,"From there it can be used in the ",(0,i.kt)("em",{parentName:"p"},"body")," (code) of the function\nlike any other parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Cube_Surface_Area",live_py:!0,title:"Cube_Surface_Area"},"def cube_surface_area(length:float=1) -> float:\n  return 6 * length ** 2\n\nprint(cube_surface_area(5))\nprint(cube_surface_area(3))\nprint(cube_surface_area())\n")),(0,i.kt)("h2",{id:"variable-scope"},"Variable Scope"),(0,i.kt)("p",null,"Variables can have one of two levels of ",(0,i.kt)("em",{parentName:"p"},"scope"),' (where they are "visible"):'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Global: They are visible (can be references from) everywhere."),(0,i.kt)("li",{parentName:"ul"},"Local: They are visible (can be references from) only within a specific call of a function,\nand once that function call ends, they are gone.")),(0,i.kt)("p",null,"A variable's scope depends on where it is ",(0,i.kt)("em",{parentName:"p"},"defined")," via ",(0,i.kt)("inlineCode",{parentName:"p"},"x = [something]"),".\nFor each level, global and local (not within and within a function),\nthe first time an ",(0,i.kt)("inlineCode",{parentName:"p"},"x = [something]")," occurs, ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," is ",(0,i.kt)("em",{parentName:"p"},"defined")," to be that something\n(you can of course )."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Print_Global_Locally",live_py:!0,title:"Print_Global_Locally"},"def print_num() -> None:\n  print(num)\n\nnum = 2      # defined gloabally\n\nprint_num()\n# print(num) # no local num, look-up global num, prints 2\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Print_Local_Globally",live_py:!0,title:"Print_Local_Globally"},"def make_num() -> None:\n  num = 2\n\nmake_num()\n# num = 2  # makes local num\n#          # deleted when function ends\n\nprint(num) # error, no global num to print\n")),(0,i.kt)("p",null,"When a variable is used within a function, the function first looks locally,\nand then globally. So if there is a local ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and a global ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", then we the local one\nwill ",(0,i.kt)("em",{parentName:"p"},"shadow")," (make effectively invisible to the function) the global one."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Shadow_Global",live_py:!0,title:"Shadow_Global"},"def set_num() -> None:\n  num = 3\n  print(num)\n\nnum = 5      # global num = 5\n\nset_num()\n# num = 3    # local num = 3, shadows global\n# print(num) # looks local first, sees local num, prints 3\n\nprint(num)   # looks global, prints 5\n")))}m.isMDXComponent=!0}}]);