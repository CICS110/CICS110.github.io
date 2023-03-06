"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,c=d["".concat(o,".").concat(h)]||d[h]||m[h]||l;return n?i.createElement(c,r(r({ref:t},u),{},{components:n})):i.createElement(c,r({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const l={title:"Section 04 (Jared Yeager)"},r="Lists, Tuples, and Strings",s={unversionedId:"lectures/lists-tuples-strings/Jared/index",id:"lectures/lists-tuples-strings/Jared/index",title:"Section 04 (Jared Yeager)",description:"Assignment Updates",source:"@site/main/lectures/06-lists-tuples-strings/Jared/index.md",sourceDirName:"lectures/06-lists-tuples-strings/Jared",slug:"/lectures/lists-tuples-strings/Jared/",permalink:"/main/lectures/lists-tuples-strings/Jared/",draft:!1,tags:[],version:"current",frontMatter:{title:"Section 04 (Jared Yeager)"},sidebar:"tutorialSidebar",previous:{title:"Lec 06 Lists, Tuples, Sets",permalink:"/main/lectures/lists-tuples-strings/"},next:{title:"Lec 07 Dictionaries, Sets",permalink:"/main/lectures/dictionaries-sets/"}},o={},p=[{value:"Assignment Updates",id:"assignment-updates",level:2},{value:"Lists, Tuples, ... and Strings",id:"lists-tuples--and-strings",level:2},{value:"Lists",id:"lists",level:3},{value:"Tuples",id:"tuples",level:3},{value:"Strings",id:"strings",level:3},{value:"When to use What",id:"when-to-use-what",level:3},{value:"Methods",id:"methods",level:2},{value:"What Are Methods?",id:"what-are-methods",level:3},{value:"List Methods",id:"list-methods",level:3},{value:"String Methods",id:"string-methods",level:3},{value:"Operators",id:"operators",level:2},{value:"Unpacking",id:"unpacking",level:2},{value:"Negative Indexing",id:"negative-indexing",level:2},{value:"Slicing",id:"slicing",level:2},{value:"Conversions",id:"conversions",level:2},{value:"To List/Tuple",id:"to-listtuple",level:3},{value:"To String",id:"to-string",level:3}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lists-tuples-and-strings"},"Lists, Tuples, and Strings"),(0,a.kt)("h2",{id:"assignment-updates"},"Assignment Updates"),(0,a.kt)("p",null,"Stuff due this week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Participation 3 ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/2")),(0,a.kt)("li",{parentName:"ul"},"Quiz 4: ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/2")),(0,a.kt)("li",{parentName:"ul"},"HW 2: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/3")),(0,a.kt)("li",{parentName:"ul"},"Lab 4: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/3"))),(0,a.kt)("p",null,"Stuff due next week:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"(Presumably) Participation 4 ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/9")),(0,a.kt)("li",{parentName:"ul"},"(Presumably) Quiz 5: ",(0,a.kt)("strong",{parentName:"li"},"Due Thursday 3/9")),(0,a.kt)("li",{parentName:"ul"},"HW 3: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/10")),(0,a.kt)("li",{parentName:"ul"},"Lab 5: ",(0,a.kt)("strong",{parentName:"li"},"Due Friday 3/10"))),(0,a.kt)("h2",{id:"lists-tuples--and-strings"},"Lists, Tuples, ... and Strings"),(0,a.kt)("p",null,"We have covered various types (",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"str"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),") up to now.\nAnd we have used variables to store and access objects of these types.\nBut there is a weakness in out ability to hold information.\nWe don't have a good way to hold, say, 100 ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),"s. And wanting to take an average of\n100 numbers is not an unreasonable goal."),(0,a.kt)("p",null,"And so we have a number of ",(0,a.kt)("em",{parentName:"p"},"collection type"),"s or ",(0,a.kt)("em",{parentName:"p"},"collection"),"s in python.\nThese are types that exists to store a bunch of information.\nWithin those are ",(0,a.kt)("em",{parentName:"p"},"sequence type"),"s, types that store a bunch of things in some order."),(0,a.kt)("h3",{id:"lists"},"Lists"),(0,a.kt)("p",null,"One such sequence type is ",(0,a.kt)("em",{parentName:"p"},"list"),"s."),(0,a.kt)("p",null,"You can make a lists explicitly with an opening square bracket/brace (",(0,a.kt)("inlineCode",{parentName:"p"},"["),"),\nfollowed by comma-separated ",(0,a.kt)("em",{parentName:"p"},"elements")," (values or variables),\nfollowed by a closing square bracket/brace (",(0,a.kt)("inlineCode",{parentName:"p"},"]"),"). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Make_List",live_py:!0,title:"Make_List"},"list_1 = [3, 1, 4, 1, 5]\nlist_2 = [\"a\", 1, 1.0, True] # can contain a mix of types\nlist_3 = []                  # can be empty\nprint(list_1)                # [3, 1, 4, 1, 5]\nprint(list_2)                # ['a', 1, 1.0, True]\nprint(list_3)                # []\n")),(0,a.kt)("p",null,"Once you have a list, you'll want to be able to access elements of it.\nThis is done with the list, followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"["),", followed by an ",(0,a.kt)("em",{parentName:"p"},"index")," to access,\nfollowed by ",(0,a.kt)("inlineCode",{parentName:"p"},"]"),".\n",(0,a.kt)("strong",{parentName:"p"},"Note: indexing starts at 0."),"\nSo the first element in the list has index ",(0,a.kt)("inlineCode",{parentName:"p"},"0"),", second has index ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),", ...,\nlast element has index ",(0,a.kt)("inlineCode",{parentName:"p"},"length-1")," (where ",(0,a.kt)("inlineCode",{parentName:"p"},"length")," is the length of this list,\ngenerally obtained via ",(0,a.kt)("inlineCode",{parentName:"p"},"len()")," function)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Index_List",live_py:!0,title:"Index_List"},"l = [3, 1, 4, 1, 5]\nprint(l)           # [3, 1, 4, 1, 5]\nprint(l[0])        # 3\nprint(l[1])        # 1\nprint(l[len(l)-1]) # 5\n")),(0,a.kt)("p",null,"Finally, you can change the elements at an in index of the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Edit_List",live_py:!0,title:"Edit_List"},"l = [3, 1, 4, 1, 5]\nprint(l)        # [3, 1, 4, 1, 5]\nl[0] = 5        # 3 -> 5\nl[len(l)-1] = 3 # 5 -> 3\nprint(l)        # [5, 1, 4, 1, 3]\n")),(0,a.kt)("h3",{id:"tuples"},"Tuples"),(0,a.kt)("p",null,"Tuples are much the same as lists mechanically. But there are some differences."),(0,a.kt)("p",null,"Most visibly, they are created with pair of parentheses (",(0,a.kt)("inlineCode",{parentName:"p"},"("),", and ",(0,a.kt)("inlineCode",{parentName:"p"},")"),"),\nnot square brackets."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Make_Tuple",live_py:!0,title:"Make_Tuple"},"tup_1 = (3, 1, 4, 1, 5)\ntup_2 = (\"a\", 1, 1.0, True) # can contain a mix of types\ntup_3 = (0,)                # singletons need a comma\ntup_4 = ()                  # can be empty\nprint(tup_1)                # (3, 1, 4, 1, 5)\nprint(tup_2)                # ('a', 1, 1.0, True)\nprint(tup_3)                # (0,)\nprint(tup_4)                # ()\n")),(0,a.kt)("p",null,"Indexing is exactly the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Index_Tuple",live_py:!0,title:"Index_Tuple"},"t = (3, 1, 4, 1, 5)\nprint(t)           # (3, 1, 4, 1, 5)\nprint(t[0])        # 3\nprint(t[1])        # 1\nprint(t[len(t)-1]) # 5\n")),(0,a.kt)("p",null,"However, you can not change the elements of a tuple.\nWe say a tuple is ",(0,a.kt)("em",{parentName:"p"},"immutable"),", whereas a list is ",(0,a.kt)("em",{parentName:"p"},"mutable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Edit_Tuple",live_py:!0,title:"Edit_Tuple"},"t = (3, 1, 4, 1, 5)\nprint(t)        # (3, 1, 4, 1, 5)\nt[0] = 5        # Error\n")),(0,a.kt)("h3",{id:"strings"},"Strings"),(0,a.kt)("p",null,"Plot twist: string are also a kind of sequence type.\nOr at least enough so that they support indexing.\nThat said, when you index into a string you just get a string of length 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Index_String",live_py:!0,title:"Index_String"},'s = "Hello, World!"\nprint(s[2])         # "l"\nprint(s[4])         # "o"\nprint(s[10])        # "l"\n')),(0,a.kt)("p",null,"Like tuples however, you can not edit them."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py Edit_String",live_py:!0,Edit_String:!0},'s = "Hello, World!"\ns[12]               # "!"\ns[12] = "?"         # Error\n')),(0,a.kt)("h3",{id:"when-to-use-what"},"When to use What"),(0,a.kt)("p",null,"Strings are for text, pretty clear. You want text? Strings."),(0,a.kt)("p",null,"But lists vs tuples?\nThe mechanical difference is just that lists are mutable and tuples aren't."),(0,a.kt)("p",null,'In terms of actual use:\nI tend to think of tuples as bundling associated information together into a bigger whole,\nalmost making a new "type" out of "sub-types". For instance, bundling an x-coordinate and\na y-coordinate to get a 2D point.\nLists to me are more for working with bulk, many of the same type of thing.\nIf I need to store a long list of numbers to later get some stats about,\nI\'d generally use a list.'),(0,a.kt)("p",null,"But maybe that's just me. I tend to just default to lists in general,\npartly because they are more flexible, but partly because other languages have list\nanalogues more than they do tuple analogues."),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"what-are-methods"},"What Are Methods?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Methods")," are a weird kind of function associated with certain types.\nFor example lists have an ",(0,a.kt)("inlineCode",{parentName:"p"},"append()")," method, but only lists can use it.\nAnd you need some variable/object of the relevant type to use a method."),(0,a.kt)("p",null,"For example, again, ",(0,a.kt)("inlineCode",{parentName:"p"},"append(element)")," is a method for lists. So if you have a list ",(0,a.kt)("inlineCode",{parentName:"p"},"l"),",\nyou can invoke the ",(0,a.kt)("inlineCode",{parentName:"p"},"append()")," method like so: ",(0,a.kt)("inlineCode",{parentName:"p"},"l.append(3)"),"\n(this will append the element ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," to the end of list ",(0,a.kt)("inlineCode",{parentName:"p"},"l"),")."),(0,a.kt)("p",null,"We've seen the dot ",(0,a.kt)("inlineCode",{parentName:"p"},".")," before in a different context.\nMy intuition is that ",(0,a.kt)("inlineCode",{parentName:"p"},"foo.bar"),' Is saying something like\n"get the ',(0,a.kt)("inlineCode",{parentName:"p"},"bar")," attribute/variable/function/something from ",(0,a.kt)("inlineCode",{parentName:"p"},"foo"),'":'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"math.sqrt()"),' is "get the ',(0,a.kt)("inlineCode",{parentName:"li"},"sqrt()")," function from the ",(0,a.kt)("inlineCode",{parentName:"li"},"math"),' module (library)".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"math.pi"),' is "get the ',(0,a.kt)("inlineCode",{parentName:"li"},"pi")," constant from the ",(0,a.kt)("inlineCode",{parentName:"li"},"math"),' module (library)".'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"l.append()"),' is "get the ',(0,a.kt)("inlineCode",{parentName:"li"},"append()")," method from ",(0,a.kt)("inlineCode",{parentName:"li"},"l"),'". And if ',(0,a.kt)("inlineCode",{parentName:"li"},"l")," is list,\nit has an append method associated with it.")),(0,a.kt)("p",null,"You might see this method written as ",(0,a.kt)("inlineCode",{parentName:"p"},"list.append()")," in\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/datastructures.html"},"documentation")),(0,a.kt)("h3",{id:"list-methods"},"List Methods"),(0,a.kt)("p",null,"Here are a few useful\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/tutorial/datastructures.html"},"list methods"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list.append(x)"),": appends ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," to the end of the list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list.insert(i, x)"),": inserts ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," at index ",(0,a.kt)("inlineCode",{parentName:"li"},"i"),",\nfor ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," between ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," and list length (inclusive)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list.pop(i)"),": removes and returns the element at index ",(0,a.kt)("inlineCode",{parentName:"li"},"i"),",\nif ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," is unspecified defaults to last element in the list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list.remove(x)"),": removes the first occurrence of ",(0,a.kt)("inlineCode",{parentName:"li"},"x")," in the list.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=List_Methods",live_py:!0,title:"List_Methods"},'ones = [True, 1.0] # [True, 1.0]\nones.append("one") # [True, 1.0, "one"]\nones.remove(1.0)   # [True, "one"]\nones.insert(0, 1)  # [1, True, "one"]\nones.pop(1)        # [1, "one"]\nprint(ones)        # [1, "one"]\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"strong"},"ones")," used to invoke these method changes as a result of them.")),(0,a.kt)("h3",{id:"string-methods"},"String Methods"),(0,a.kt)("p",null,"Here are a few useful\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/stdtypes.html#string-methods"},"string methods"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str.lower()"),": returns a lower-case copy of the string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str.upper()"),": returns a upper-case copy of the string."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"str.replace(old, new)"),": returns a copy of the string\nwith all occurrences of substring ",(0,a.kt)("inlineCode",{parentName:"li"},"old")," replaced by ",(0,a.kt)("inlineCode",{parentName:"li"},"new"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=String_Methods",live_py:!0,title:"String_Methods"},'Hi = "Hello, World!"\nhi = Hi.lower()\nHI = Hi.upper()\nH1 = Hi.replace("o", "0")\nprint(Hi) # Hello, World!\nprint(hi) # hello, world!\nprint(HI) # HELLO, WORLD!\nprint(H1) # Hell0, W0rld!\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Notice that the ",(0,a.kt)("inlineCode",{parentName:"strong"},"Hi")," used to invoke these method was unchanged.")),(0,a.kt)("p",null,"This behaviour is remarkable different from lists.\nMethods ",(0,a.kt)("strong",{parentName:"p"},"can")," change the thing used to call them, but they may not.\nThe only real way to know is to read the documentation, and better yet:\nplay around and test them in a REPL or some such."),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Material from here on was not part of the lecture,\nbut is stuff I think is quite useful to know about.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"operators"},"Operators"),(0,a.kt)("p",null,"Remember how ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," work on strings?\nWell they do the same thing to lists and tuples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Repeat_And_Concatenate",live_py:!0,title:"Repeat_And_Concatenate"},'print("Foo" + "Bar")   # FooBar\nprint(3 * "Foo")       # FooFooFoo\nprint([1,5] + [3,7,9]) # [1, 5, 3, 7, 9]\nprint(5 * [0])         # [0, 0, 0, 0, 0]\nprint((1,2,3) + (8,9)) # (1, 2, 3, 8, 9)\nprint(2 * ("a","b"))   # (\'a\', \'b\', \'a\', \'b\')\n')),(0,a.kt)("h2",{id:"unpacking"},"Unpacking"),(0,a.kt)("p",null,"Imagine you had a reasonably-short\ntuple that you know you wanted to work with all of its elements,\nlike adding together two points in 2D space:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=2D_Add",live_py:!0,title:"2D_Add"},"# Assume these were set in the past somewhere\npoint1 = (3,1)\npoint2 = (4,1)\n# ...\n# Now we want to add them\npoint_add = (point1[0]+point2[0], point1[1]+point2[1])\nprint(point_add) # (7, 2)\n")),(0,a.kt)("p",null,"You might find using the tuple name and indices repeatedly bothersome or unclear,\nespecially of say ",(0,a.kt)("inlineCode",{parentName:"p"},"point1[0]")," showed up multiple times in a calculation.\nYou could use helper variables to diminish that to some extent."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=2D_Add_Variables",live_py:!0,title:"2D_Add_Variables"},"# Assume these were set in the past somewhere\npoint1 = (3,1)\npoint2 = (4,1)\n# ...\n# Now we want to add them\na = point1[0]\nb = point1[1]\nx = point2[0]\ny = point2[1]\npoint_add = (a+x, b+y)\nprint(point_add)       # (7, 2)\n")),(0,a.kt)("p",null,"I find this more visually clear,\nespecially if those variables are used multiple times each."),(0,a.kt)("p",null,"The initial assignment isn't the nicest.\nPython has special machinery to do this a little more nicely though."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=2D_Add_Unpacking",live_py:!0,title:"2D_Add_Unpacking"},"# Assume these were set in the past somewhere\npoint1 = (3,1)\npoint2 = (4,1)\n# ...\n# Now we want to add them\na, b = point1          # (a, b) = (3, 1)\nx, y = point2          # (x, y) = (4, 1)\npoint_add = (a+x, b+y)\nprint(point_add)       # (7, 2)\n")),(0,a.kt)("h2",{id:"negative-indexing"},"Negative Indexing"),(0,a.kt)("p",null,"You may want the last element in a list/tuple/string, or the second-last, etc.\nThis can be done by taking the length of the list minus 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Last_Element",live_py:!0,title:"Last_Element"},"l = [0,1,2,3,4]    # 5 elements, indices 0 to 4 (inclusive)\nlength = len(l)    # 5\nprint(l[length-1]) # prints 4\n")),(0,a.kt)("p",null,"You could also write ",(0,a.kt)("inlineCode",{parentName:"p"},"l[len(l)-1]"),". This is ... kind of gross.\nIt turns out, there is shortcut for this: ",(0,a.kt)("inlineCode",{parentName:"p"},"l[-1]"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Negative_Indices",live_py:!0,title:"Negative_Indices"},"l = [0,1,2,3,4]\nprint(l[len(l)-1]) # 4\nprint(l[-1])       # 4\nprint(l[len(l)-2]) # 3\nprint(l[-2])       # 3\nprint(l[len(l)-3]) # 2\nprint(l[-3])       # 2\n")),(0,a.kt)("p",null,"You get the idea. A negative index is basically\n\"index 'length of list minus this number'\"."),(0,a.kt)("h2",{id:"slicing"},"Slicing"),(0,a.kt)("p",null,"You can do way more than just indexing,\nyou can extract sub-lists/tuples/strings called ",(0,a.kt)("em",{parentName:"p"},"slices"),"."),(0,a.kt)("p",null,"For a list (or tuple or string) ",(0,a.kt)("inlineCode",{parentName:"p"},"l"),",\nyou can get the element at an index ",(0,a.kt)("inlineCode",{parentName:"p"},"index")," via ",(0,a.kt)("inlineCode",{parentName:"p"},"l[index]"),".\nThere is a generalised indexing form though ",(0,a.kt)("inlineCode",{parentName:"p"},"l[from:to:step]"),".\nThis gets you a sub-list/tuple/string based on the indices from ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," (inclusive) to\n",(0,a.kt)("inlineCode",{parentName:"p"},"to")," (exclusive) in increments of ",(0,a.kt)("inlineCode",{parentName:"p"},"step"),"."),(0,a.kt)("p",null,"In fact, and of these three can be left blank (as long as the ",(0,a.kt)("inlineCode",{parentName:"p"},":")," are still there).\n",(0,a.kt)("inlineCode",{parentName:"p"},"step")," defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"from")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"to")," default to the limits of the list\n(",(0,a.kt)("inlineCode",{parentName:"p"},"step")," may be negative, so ",(0,a.kt)("inlineCode",{parentName:"p"},"from")," could be the end of the list when unspecified)."),(0,a.kt)("p",null,"This really is best seen with examples."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Slicing",live_py:!0,title:"Slicing"},'l = [0,1,2,3,4,5,6,7,8,9]\nt = (0,1,2,3,4,5,6,7,8,9)\ns = "0123456789"\nprint(l[3:7])      # [3, 4, 5, 6]\nprint(t[:4])       # (0, 1, 2, 3)\nprint(s[6:])       # 6789\nprint(l[-3:])      # [7, 8, 9]\nprint(t[:-8])      # (0, 1)\nprint(s[-8:-2])    # 234567\nprint(l[1:-1:2])    # [1, 3, 5, 7]\nprint(t[9:1:-2])   # (9, 7, 5, 3)\nprint(s[-1:-9:-2]) # 9753\nprint(l[1::3])     # [1, 4, 7]\nprint(t[:9:3])     # (0, 3, 6)\nprint(s[::2])      # 02468\n')),(0,a.kt)("p",null,"And yes, you ",(0,a.kt)("strong",{parentName:"p"},"can")," assign to a slice."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Slice_Assignment",live_py:!0,title:"Slice_Assignment"},"l = [0,1,2,3,4,5]\nprint(l)          # [0,1,2,3,4,5]\nl[::2] = l[1::2]\nprint(l)          # [1,1,3,3,5,5]\nl = l[::-1]\nprint(l)          # [5,5,3,3,1,1]\n")),(0,a.kt)("h2",{id:"conversions"},"Conversions"),(0,a.kt)("p",null,"Like ",(0,a.kt)("inlineCode",{parentName:"p"},"int()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"str()"),", etc; there are ",(0,a.kt)("inlineCode",{parentName:"p"},"list()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"tuple()")," functions."),(0,a.kt)("p",null,"So we can (sort of) use ",(0,a.kt)("inlineCode",{parentName:"p"},"str()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"list()"),",\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"tuple()")," to convert between these sequence types."),(0,a.kt)("h3",{id:"to-listtuple"},"To List/Tuple"),(0,a.kt)("p",null,"Converting to lists and tuples from any of the others works how you might hope,\ndirect conversion between tuples and lists, strings becoming list/tuples of the\none-letter strings."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_List",live_py:!0,title:"To_List"},"t = (3,1,4,1,5)\ns = \"92653\"\nlt = list(t) # [3, 1, 4, 1, 5]\nls = list(s) # ['9', '2', '6', '5', '3']\nprint(lt)\nprint(ls)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_Tuple",live_py:!0,title:"To_Tuple"},"l = [3,1,4,1,5]\ns = \"92653\"\ntl = tuple(l) # (3, 1, 4, 1, 5)\nts = tuple(s) # ('9', '2', '6', '5', '3')\nprint(tl)\nprint(ts)\n")),(0,a.kt)("h3",{id:"to-string"},"To String"),(0,a.kt)("p",null,"Converting to strings just puts the list/tuple in string form,\nit does not make a string out of the elements in the list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=To_String",live_py:!0,title:"To_String"},'l = [3,1,4,1,5]\nt = ("3","1","4","1","5")\nsl = str(l) # "[3, 1, 4, 1, 5]"\nst = str(t) # "(\'3\', \'1\', \'4\', \'1\', \'5\')"\nprint(sl)\nprint(st)\n')),(0,a.kt)("p",null,"If you want to convert a list/tuple of strings intro a string by\neffectively concatenating everything in the list/tuple together,\nyou probably want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"str.join()")," method.\nThe invoking string should be whatever you want to appear between each element of the list/tuple,\ngenerally this ",(0,a.kt)("inlineCode",{parentName:"p"},'""'),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Join",live_py:!0,title:"Join"},'l = ["3","1","4","1","5"]\nt = ("9","2","6","5","3")\nsl = "".join(l) # "31415"\nst = "".join(t) # "92653"\nprint(sl)\nprint(st)\n')))}d.isMDXComponent=!0}}]);