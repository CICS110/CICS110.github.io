"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,c=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(c,l(l({ref:t},m),{},{components:n})):a.createElement(c,l({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const o={title:"Section 04 (Jared Yeager)"},l="Modules and Mutability",r={unversionedId:"make_modules_mutation/Jared/index",id:"make_modules_mutation/Jared/index",title:"Section 04 (Jared Yeager)",description:"This is sort of two mini-lectures.",source:"@site/main/lectures/14_make_modules_mutation/Jared/index.md",sourceDirName:"14_make_modules_mutation/Jared",slug:"/make_modules_mutation/Jared/",permalink:"/main/lectures/make_modules_mutation/Jared/",draft:!1,tags:[],version:"current",frontMatter:{title:"Section 04 (Jared Yeager)"},sidebar:"tutorialSidebar",previous:{title:"Lec 14 Making Modules",permalink:"/main/lectures/make_modules_mutation/"},next:{title:"Lec 15 Files",permalink:"/main/lectures/Files/"}},s={},p=[{value:"Built-in Modules",id:"built-in-modules",level:2},{value:"Learning to Use New Modules",id:"learning-to-use-new-modules",level:3},{value:"Some Common Modules",id:"some-common-modules",level:3},{value:"Importing Modules",id:"importing-modules",level:2},{value:"<code>import x</code>",id:"import-x",level:3},{value:"<code>import x as a</code>",id:"import-x-as-a",level:3},{value:"<code>from x import y,z</code>",id:"from-x-import-yz",level:3},{value:"<code>from x import y as b,z as c</code>",id:"from-x-import-y-as-bz-as-c",level:3},{value:"<code>from x import *</code>",id:"from-x-import-",level:3},{value:"Making your own Modules",id:"making-your-own-modules",level:2},{value:"<code>if __name__ == &quot;__main__&quot;:</code>",id:"if-__name__--__main__",level:3},{value:"Mutability",id:"mutability",level:2},{value:"Variables and Addresses",id:"variables-and-addresses",level:3},{value:"Variables and Passing",id:"variables-and-passing",level:3},{value:"Mutating Operations",id:"mutating-operations",level:3},{value:"Copying the Avoid This",id:"copying-the-avoid-this",level:3}],m={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"modules-and-mutability"},"Modules and Mutability"),(0,i.kt)("p",null,"This is sort of two mini-lectures."),(0,i.kt)("h2",{id:"built-in-modules"},"Built-in Modules"),(0,i.kt)("p",null,"We already have some exposure to modules, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"math")," module."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Built-in")," Modules are just modules that come with the official python installation."),(0,i.kt)("p",null,"These are different from module we create ourselves, which we will see later in this lecture."),(0,i.kt)("p",null,"These are also different from modules we acquire from the great aether of the internet,\nwhich we will see later in this course."),(0,i.kt)("h3",{id:"learning-to-use-new-modules"},"Learning to Use New Modules"),(0,i.kt)("p",null,"There are more modules out there than we could conceivably keep track of,\nand more function within most modules than we could reasonably remember."),(0,i.kt)("p",null,"A fundamental skill in programming is the ability to look up information about\nmodules or functions that you haven't used much or at all before."),(0,i.kt)("p",null,"When encountering a new function/module or when wanting to use one that we\ndon't quite remember the details of,\na reasonable first step is searching (via a search engine) for\n\"python ","[module/function name]",'".\n(Simply, when encountering a new issue, searching for\n"python ',"[issue/problem/question]",'" makes a lot of sense.)'),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/"},"official documentation"),"\nis a good reference for things you've run into before,\nand for getting the idea of the content of a new module.\nIt can have a lot of written technical specifics and details\nthat may not make enough sense yet though."),(0,i.kt)("p",null,"When first playing with a new function, I find it really helpful to see some examples.\nThere a number of websites I see coming up in searches that generally have examples\nor example-oriented explanations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"geeksforgeeks.org"),(0,i.kt)("li",{parentName:"ul"},"w3schools.com"),(0,i.kt)("li",{parentName:"ul"},"tutorialspoint.com"),(0,i.kt)("li",{parentName:"ul"},"realpython.com"),(0,i.kt)("li",{parentName:"ul"},"programiz.com")),(0,i.kt)("p",null,"And finally, for more specific questions, stackoverflow.com is basically the forum\nI expect to run across while searching."),(0,i.kt)("h3",{id:"some-common-modules"},"Some Common Modules"),(0,i.kt)("p",null,"We've run into a number of built-in modules already."),(0,i.kt)("p",null,"Here are some common modules that may have been of use so far in this course\nor were explored more recently in lectures/slides:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/math.html"},(0,i.kt)("inlineCode",{parentName:"a"},"math")),":\ncontains a plethora of mathematical operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/string.html"},(0,i.kt)("inlineCode",{parentName:"a"},"string")),':\ncontains collections of "all letters", "all digits", things like that.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/random.html"},(0,i.kt)("inlineCode",{parentName:"a"},"random")),":\nuseful for random number generation or making random choices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/pprint.html"},(0,i.kt)("inlineCode",{parentName:"a"},"pprint")),":\nuseful for printing things in a more aesthetically pleasing manner."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/datetime.html"},(0,i.kt)("inlineCode",{parentName:"a"},"datetime")),":\nuseful for working with dates and times and the differences between them.")),(0,i.kt)("h2",{id:"importing-modules"},"Importing Modules"),(0,i.kt)("p",null,"We've already done some module importing.\nBut there are actually a number of fancy import incantations we haven't seen yet."),(0,i.kt)("h3",{id:"import-x"},(0,i.kt)("inlineCode",{parentName:"h3"},"import x")),(0,i.kt)("p",null,"We can import a module to gain access to it and all therein."),(0,i.kt)("p",null,"The syntax for this is ",(0,i.kt)("inlineCode",{parentName:"p"},"import module_name"),",\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"module_name")," is the name of the module to import."),(0,i.kt)("p",null,"This is what we are already familiar with, but I note it for completeness."),(0,i.kt)("p",null,"An example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Import",live_py:!0,title:"Import"},'import datetime\n\nnow = datetime.datetime.now()\nprint(f"today        : {now}")\n\ngiga_sec = datetime.timedelta(seconds=10**9)\nprint(f"10^9 secs    : {giga_sec}")\n\nfuture = now + giga_sec\nprint(f"1Gs from now : {future}")\n')),(0,i.kt)("h3",{id:"import-x-as-a"},(0,i.kt)("inlineCode",{parentName:"h3"},"import x as a")),(0,i.kt)("p",null,"We can import a module and give it a new name."),(0,i.kt)("p",null,"The syntax for this is ",(0,i.kt)("inlineCode",{parentName:"p"},"import module_name as new_name"),",\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"module_name")," is the name of the module to import and ",(0,i.kt)("inlineCode",{parentName:"p"},"new_name")," is what we rename it to."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," is kind of a long word and I'm lazy,\nso I'll rename it to ",(0,i.kt)("inlineCode",{parentName:"p"},"dt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Import_As",live_py:!0,title:"Import_As"},'import datetime as dt\n\nnow = dt.datetime.now()\nprint(f"today        : {now}")\n\ngiga_sec = dt.timedelta(seconds=10**9)\nprint(f"10^9 secs    : {giga_sec}")\n\nfuture = now + giga_sec\nprint(f"1Gs from now : {future}")\n')),(0,i.kt)("h3",{id:"from-x-import-yz"},(0,i.kt)("inlineCode",{parentName:"h3"},"from x import y,z")),(0,i.kt)("p",null,"We can import a specific ",(0,i.kt)("em",{parentName:"p"},"attribute")," (variable, function, class, etc.) from a module.\nIf we use this to get attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," from module ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),",\nwe can just use ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," in code instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"x.y"),"."),(0,i.kt)("p",null,"The syntax for this is ",(0,i.kt)("inlineCode",{parentName:"p"},"from module_name import attribute_name"),",\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"module_name")," is the name of the module of interest\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"attribute_name")," is the attribute we want."),(0,i.kt)("p",null,"We can also have multiple attributes separated by commas."),(0,i.kt)("p",null,"For example,\nlet's get the ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"timedelta")," attributes from ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime")," directly,\nand avoid the need to write ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=From_Import",live_py:!0,title:"From_Import"},'from datetime import datetime,timedelta\n\nnow = datetime.now()\nprint(f"today        : {now}")\n\ngiga_sec = timedelta(seconds=10**9)\nprint(f"10^9 secs    : {giga_sec}")\n\nfuture = now + giga_sec\nprint(f"1Gs from now : {future}")\n')),(0,i.kt)("h3",{id:"from-x-import-y-as-bz-as-c"},(0,i.kt)("inlineCode",{parentName:"h3"},"from x import y as b,z as c")),(0,i.kt)("p",null,"This allows us to import a specific ",(0,i.kt)("em",{parentName:"p"},"attribute")," (variable, function, class, etc.)\nfrom a module and give it a new name."),(0,i.kt)("p",null,"The syntax for this is ",(0,i.kt)("inlineCode",{parentName:"p"},"from module_name import attribute_name as new_name"),",\nwhere ",(0,i.kt)("inlineCode",{parentName:"p"},"module_name")," is the name of the module of interest,\n",(0,i.kt)("inlineCode",{parentName:"p"},"attribute_name")," is the attribute we want, and ",(0,i.kt)("inlineCode",{parentName:"p"},"new_name")," is what we rename it to."),(0,i.kt)("p",null,"We can also have multiple attributes and new names separated by commas."),(0,i.kt)("p",null,"For example, to be really confusing,\nI'll rename ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime.datetime")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"dt")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"datetime.timedelta")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"td"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=From_Import_As",live_py:!0,title:"From_Import_As"},'from datetime import datetime as dt,timedelta as td\n\nnow = dt.now()\nprint(f"today        : {now}")\n\ngiga_sec = td(seconds=10**9)\nprint(f"10^9 secs    : {giga_sec}")\n\nfuture = now + giga_sec\nprint(f"1Gs from now : {future}")\n')),(0,i.kt)("h3",{id:"from-x-import-"},(0,i.kt)("inlineCode",{parentName:"h3"},"from x import *")),(0,i.kt)("p",null,"I want to mention this exists, and then talk about why ",(0,i.kt)("strong",{parentName:"p"},"you probably shouldn't do it"),"."),(0,i.kt)("p",null,"This is basically ",(0,i.kt)("inlineCode",{parentName:"p"},"from x import y")," for every ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," that exists.\nThe issue with this is potential name collisions."),(0,i.kt)("p",null,"For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"math")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"numpy")," (a big non-built-in module) both have a ",(0,i.kt)("inlineCode",{parentName:"p"},"log()")," function\nin them. So if both ",(0,i.kt)("inlineCode",{parentName:"p"},"from math import *")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"from numpy import *")," are done,\nthen ",(0,i.kt)("inlineCode",{parentName:"p"},"log()")," will refer to the later one loaded, obscuring the earlier one loaded."),(0,i.kt)("p",null,"(I can't demo this particular case because the web-python uses only built-in libraries.)"),(0,i.kt)("p",null,"Moreover, you might have name collisions between variables/functions you load\nand variables/functions you have. I can certainly imagine having functions or variables named\n",(0,i.kt)("inlineCode",{parentName:"p"},"digits"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"match"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"search"),",\nthose would have collisions with functions and constants in modules I've used quite a bit."),(0,i.kt)("h2",{id:"making-your-own-modules"},"Making your own Modules"),(0,i.kt)("p",null,"Plot twist: You've been doing this the whole time!\nThe python scripts you write can be treated as a module and imported into another script."),(0,i.kt)("p",null,"Since web-python doesn't have obvious scripts, you'll have to follow along in your editor.\nI actually do recommend having a sandbox project that you can just go to\nin order to play around and test stuff."),(0,i.kt)("p",null,"For this section, I will assume you have some project/folder with a ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.py")," and a\n",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," inside it."),(0,i.kt)("p",null,"Let the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.py")," be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'def foo():\n  print("Foo!")\n\ndef bar():\n  print("Bar!")\n\nprint("I\'m foobar.py!")\n')),(0,i.kt)("p",null,"If you ran ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.py"),", you would see the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I'm foobar.py!\n")),(0,i.kt)("p",null,"However, This file, ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.py"),", can be treated as a module named ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar"),".\nAnd so we could have the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," be:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import foobar\n\nprint("I\'m main.py!")\nfoobar.foo()\nfoobar.bar()\n')),(0,i.kt)("p",null,"If you ran ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py"),", you would see the output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I'm foobar.py!\nI'm main.py!\nFoo!\nBar!\n")),(0,i.kt)("p",null,"Those last three lines make sense, but what about the first?\nIt turns out that when a module is loaded, it is basically run,\nso global code is executed."),(0,i.kt)("p",null,"This load only needs to happen for the first import statement involving that module though\n(presumably the module is loaded and stored on the first import,\nwith subsequent import calls only needing to set some names)."),(0,i.kt)("p",null,"So if the code for ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," were:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'from foobar import foo\nfrom foobar import bar\n\nprint("I\'m main.py!")\nfoo()\nbar()\n')),(0,i.kt)("p",null,"You would still only see"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I'm foobar.py!\nI'm main.py!\nFoo!\nBar!\n")),(0,i.kt)("h3",{id:"if-__name__--__main__"},(0,i.kt)("inlineCode",{parentName:"h3"},'if __name__ == "__main__":')),(0,i.kt)("p",null,"What if you didn't want a file/module's global code to be run when you import it?"),(0,i.kt)("p",null,"Well, the exact mechanics of why this incantation works are a little goofy and in the weeds but ...\nthere a condition you can use that will only evaluate to ",(0,i.kt)("inlineCode",{parentName:"p"},"True")," if you are the file/module being run,\nand not a file/module being loaded: ",(0,i.kt)("inlineCode",{parentName:"p"},'__name__ == "__main__"'),"."),(0,i.kt)("p",null,"In the module being run ",(0,i.kt)("inlineCode",{parentName:"p"},"__name__")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"__main__"'),".\nIn modules being loaded, ",(0,i.kt)("inlineCode",{parentName:"p"},"__name__")," is the module's name (e.g., ",(0,i.kt)("inlineCode",{parentName:"p"},'"foobar"'),")."),(0,i.kt)("p",null,"So if ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.py")," from earlier was:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'def foo():\n  print("Foo!")\n\ndef bar():\n  print("Bar!")\n\nif __name__ == "__main__":\n  print("I\'m foobar.py!")\n')),(0,i.kt)("p",null,"Running ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar.py")," would still produce:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I'm foobar.py!\n")),(0,i.kt)("p",null,"But running ",(0,i.kt)("inlineCode",{parentName:"p"},"main.py")," would now produce only:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"I'm main.py!\nFoo!\nBar!\n")),(0,i.kt)("h2",{id:"mutability"},"Mutability"),(0,i.kt)("p",null,'Mutability is one of those "be aware of this" type of issues.\nYou are not expected to understand the intricacies of what is truly happening,\nBut just be loosely aware of it in case some issue based on mutability arises. '),(0,i.kt)("p",null,"What do you need to know?\nThere are types that are ",(0,i.kt)("em",{parentName:"p"},"mutable")," and types that are ",(0,i.kt)("em",{parentName:"p"},"immutable"),",\nand if you pass an object of a mutable type to a function,\nand change it in that function,\nthat change may persist outside that function call."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"int"),"s, for instance, are immutable. Consider (run) the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Mut_int",live_py:!0,title:"Mut_int"},'def mut_int(y):\n  print(f"y (in fun, before): {y}")\n  y += 1\n  print(f"y (in fun, after) : {y}")\n\nx = 5\nprint(f"x (global, before): {x}")\nmut_int(x)\nprint(f"x (global, after) : {x}")\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"y")," is updated in the function, but that has no bearing on ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," outside the function."),(0,i.kt)("p",null,"Lists, on the other hand, are mutable. Consider (run) the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Mut_List",live_py:!0,title:"Mut_List"},'def mut_list(lst_f):\n  print(f"lst_f (in fun, before): {lst_f}")\n  lst_f.append(4)\n  print(f"lst_f (in fun, after) : {lst_f}")\n\nlst_g = [3, 1]\nprint(f"lst_g (global, before): {lst_g}")\nmut_list(lst_g)\nprint(f"lst_g (global, after) : {lst_g}")\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"lst_f")," is updated in the function, and ",(0,i.kt)("inlineCode",{parentName:"p"},"lst_g")," ends up changing as well."),(0,i.kt)("p",null,"As for ",(0,i.kt)("strong",{parentName:"p"},"why")," you see this difference in behaviour,\nthe technical stuff is somewhat outside of scope for this class,\nso I'll include it in sections below, but a very short overview:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you pass a parameter to the function, ",(0,i.kt)("strong",{parentName:"li"},"it is the same object in memory")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"y += 1")," didn't change the object ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," ",(0,i.kt)("inlineCode",{parentName:"li"},"5")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," ",(0,i.kt)("inlineCode",{parentName:"li"},"6"),",\nit set the variable ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"int")," ",(0,i.kt)("inlineCode",{parentName:"li"},"6")," (and so ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," no longer referred to the same object)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lst_f.append(4)")," changed (",(0,i.kt)("strong",{parentName:"li"},"mutated"),") the object ",(0,i.kt)("inlineCode",{parentName:"li"},"list")," ",(0,i.kt)("inlineCode",{parentName:"li"},"[3, 1]")," to\n",(0,i.kt)("inlineCode",{parentName:"li"},"list")," ",(0,i.kt)("inlineCode",{parentName:"li"},"[3, 1, 4]")," (",(0,i.kt)("inlineCode",{parentName:"li"},"lst_f")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"lst_g")," still referred to the same object,\nand so that change was reflected in ",(0,i.kt)("inlineCode",{parentName:"li"},"lst_g"),").")),(0,i.kt)("p",null,"Stepping through these examples and code in the lecture slides in pythontutor.com\nmay be helpful in visualising this distinction."),(0,i.kt)("p",null,"But as for what you need to really remember right now:\nIf you pass an object of a mutable type to a function,\nand change it in that function,\nthat change may persist outside that function call."),(0,i.kt)("p",null,"As for what types are mutable, here are the ones we already know:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mutable: ",(0,i.kt)("inlineCode",{parentName:"li"},"list"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"set"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"dict")),(0,i.kt)("li",{parentName:"ul"},"Immutable: ",(0,i.kt)("inlineCode",{parentName:"li"},"int"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"float"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"str"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"tuple"))),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Material from here on was not part of the lecture,\nbut is stuff I think is helpful to note."),(0,i.kt)("p",{parentName:"admonition"},"It also has be going a bit off script and talking more\na slightly different way in which I conceptualise mutability.")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"variables-and-addresses"},"Variables and Addresses"),(0,i.kt)("p",null,'Mutability isn\'t actually about "if we change the object, does that change persist",\nIt\'s about "can we ',(0,i.kt)("strong",{parentName:"p"},"truly")," change the ",(0,i.kt)("strong",{parentName:"p"},"object itself"),",\nor do we end up making ",(0,i.kt)("strong",{parentName:"p"},"clones/new objects"),'".'),(0,i.kt)("p",null,"Earlier in the semester, we introduced memory diagrams, talked about\nobjects as value-type bundles, and associated those with variable names\n(like ",(0,i.kt)("inlineCode",{parentName:"p"},"x|6|int")," and ",(0,i.kt)("inlineCode",{parentName:"p"},'y|"Hello"|str'),")."),(0,i.kt)("p",null,"That model has some issues. The object bundling is fine,\nbut the issue is that multiple variable names can be associated with the same object."),(0,i.kt)("p",null,"So we have our objects (value-type bundles). Every object exists somewhere in the vast\naether-soup of memory. The location where it lives/exists is called its address.\nWe humans also generally live at addresses, though ours are more complicated.\nThe object addresses are just numbers, like 12345 (as opposed to 12345 Aether-Soup Lane)."),(0,i.kt)("p",null,"Variables are technically probably more like nicknames for these address than anything else.\nWe can get the address of the object associated with a variable with the ",(0,i.kt)("inlineCode",{parentName:"p"},"id()")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Id",live_py:!0,title:"Id"},'x = 31415\ny = "Hello"\nz = False\n\nprint(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")\nprint(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")\nprint(f"z referes to the {type(z).__name__:>4} {z} at address {id(z):>11} Aether-Soup Lane")\n')),(0,i.kt)("p",null,"(Why is the web-python giving negative addresses for ",(0,i.kt)("inlineCode",{parentName:"p"},"int"),"s?\nThat makes no sense. This thing is cursed.)"),(0,i.kt)("p",null,"Here's where things get dicey. Two variables can refer to the ",(0,i.kt)("strong",{parentName:"p"},"same object"),",\nwe'll see this when we pass things to function, but even simple assignment has this effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Id_Equal",live_py:!0,title:"Id_Equal"},'x = "Hello"\ny = x\n\nprint(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")\nprint(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")\n')),(0,i.kt)("p",null,"Notice, ",(0,i.kt)("inlineCode",{parentName:"p"},"y = x")," doesn't copy ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", it makes them reference the\n",(0,i.kt)("strong",{parentName:"p"},"exact same object in memory"),"."),(0,i.kt)("p",null,"And here's where mutability comes in. If a type is immutable,\nthen no methods or operations associated with that type will change the value of\nthe object, so no weird issues arise."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Id_Upper",live_py:!0,title:"Id_Upper"},'x = "Hello"\ny = x\n\nprint(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")\nprint(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")\n\nprint("CAPITALISING")\nz = x.upper() # returns a new object\n\nprint(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")\nprint(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")\nprint(f"z referes to the {type(z).__name__:>4} {z} at address {id(z):>11} Aether-Soup Lane")\n')),(0,i.kt)("p",null,"But for mutable types, some methods or operations may change the value of the object,\nand that will be visible to every variable referring to that object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Id_Update",live_py:!0,title:"Id_Update"},'x = [3, 1, 4, 1, 5]\ny = x\n\nprint(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")\nprint(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")\n\nprint("UPDATING")\nx[4] = 6 # changes (mutates) an existing object\n\nprint(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")\nprint(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")\n')),(0,i.kt)("h3",{id:"variables-and-passing"},"Variables and Passing"),(0,i.kt)("p",null,"When we start passing things to functions,\nthis issue arises again and feels even more obscured.\nThe parameter of the function and the variable passed in\nboth reference the same object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Passing_Id",live_py:!0,title:"Passing_Id"},'def print_text(text):\n  print(f"print_text\'s text  : (lives at {id(text)}): {text}")\n\nword = "Hello!"\n\nprint(f"global word, before: (lives at {id(word)}): {word}")\nprint_text(word)\nprint(f"global word, after : (lives at {id(word)}): {word}")\n')),(0,i.kt)("p",null,"And so if a mutable type is passed to a function,\nand we update the value of the object passed in,\nthis change is visible outside the function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Passing_Updating",live_py:!0,title:"Passing_Updating"},'def print_num(nums):\n  print(f"print_num\'s nums, before: (lives at {id(nums)}): {nums}")\n  # This updates the object\n  nums[4] = 6\n  print(f"print_num\'s nums, after : (lives at {id(nums)}): {nums}")\n\nnum_list = [3, 1, 4, 1, 5]\n\nprint(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")\nprint_num(num_list)\nprint(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")\n')),(0,i.kt)("h3",{id:"mutating-operations"},"Mutating Operations"),(0,i.kt)("p",null,"As a final complicating factor, even if a type is mutable, not every operation, method,\nor action associated with it will mutate it."),(0,i.kt)("p",null,"Compare the two below, which actually behave remarkably differently."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Passing_Append",live_py:!0,title:"Passing_Append"},'def print_num(nums):\n  print(f"print_num\'s nums, before: (lives at {id(nums)}): {nums}")\n  # This updates the object\n  nums += [9]\n  print(f"print_num\'s nums, after : (lives at {id(nums)}): {nums}")\n\nnum_list = [3, 1, 4, 1, 5]\n\nprint(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")\nprint_num(num_list)\nprint(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Passing_Add",live_py:!0,title:"Passing_Add"},'def print_num(nums):\n  print(f"print_num\'s nums, before: (lives at {id(nums)}): {nums}")\n  # This creates a new object from the existing two\n  nums = nums + [9]\n  print(f"print_num\'s nums, after : (lives at {id(nums)}): {nums}")\n\nnum_list = [3, 1, 4, 1, 5]\n\nprint(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")\nprint_num(num_list)\nprint(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")\n')),(0,i.kt)("p",null,"So if you want to get really granular, you just need to be careful around the use\nof mutating operations/methods."),(0,i.kt)("h3",{id:"copying-the-avoid-this"},"Copying the Avoid This"),(0,i.kt)("p",null,"Alright, so what if you want to pass a mutable type,\nand mutate it in a function, but not have that alter things outside the function."),(0,i.kt)("p",null,"Well, you can always pass a copy to the function.\nThere is, in fact, a module for that: the ",(0,i.kt)("inlineCode",{parentName:"p"},"copy")," module.\nIn particular, ",(0,i.kt)("inlineCode",{parentName:"p"},"copy.deepcopy()")," should ensure you have a deep enough copy to avoid this issue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Passing_Copy",live_py:!0,title:"Passing_Copy"},'import copy\n\ndef print_num(nums):\n  print(f"print_num\'s nums, before: (lives at {id(nums)}): {nums}")\n  nums += [9]\n  print(f"print_num\'s nums, after : (lives at {id(nums)}): {nums}")\n\nnum_list = [3, 1, 4, 1, 5]\n\nprint(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")\nprint_num(copy.deepcopy(num_list))\nprint(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")\n')),(0,i.kt)("p",null,"That's it. You could also have the copying done inside the function if you wanted to.\nThat actually might make more sense since you could forget about the need to do\nit once the function is done."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Making_Copy",live_py:!0,title:"Making_Copy"},'import copy\n\ndef print_num(nums):\n  nums = copy.deepcopy(nums)\n  print(f"print_num\'s nums, before: (lives at {id(nums)}): {nums}")\n  nums += [9]\n  print(f"print_num\'s nums, after : (lives at {id(nums)}): {nums}")\n\nnum_list = [3, 1, 4, 1, 5]\n\nprint(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")\nprint_num(num_list)\nprint(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")\n')))}u.isMDXComponent=!0}}]);