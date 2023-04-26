"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),h=l,u=d["".concat(o,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,s=new Array(i);s[0]=h;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r[d]="string"==typeof e?e:l,s[1]=r;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46018:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(87462),l=(a(67294),a(3905));const i={title:"Section 04 (Jared Yeager)"},s="Classes and Object-Oriented Programming",r={unversionedId:"Classes/Jared/index",id:"Classes/Jared/index",title:"Section 04 (Jared Yeager)",description:"We've managed to dodge around this subject long enough,",source:"@site/main/lectures/18_Classes/Jared/index.md",sourceDirName:"18_Classes/Jared",slug:"/Classes/Jared/",permalink:"/main/lectures/Classes/Jared/",draft:!1,tags:[],version:"current",frontMatter:{title:"Section 04 (Jared Yeager)"},sidebar:"tutorialSidebar",previous:{title:"Lec 18 Classes",permalink:"/main/lectures/Classes/"},next:{title:"Lec 19 Inheritance and Overloading",permalink:"/main/lectures/Inheritance_Overloading/"}},o={},p=[{value:"What are Classes?",id:"what-are-classes",level:2},{value:"No, Really?",id:"no-really",level:3},{value:"What are Objects?",id:"what-are-objects",level:2},{value:"But, Actually?",id:"but-actually",level:3},{value:"What is Object-Oriented Programming?",id:"what-is-object-oriented-programming",level:2},{value:"Making Classes",id:"making-classes",level:2},{value:"Making Methods",id:"making-methods",level:2},{value:"Initialisation",id:"initialisation",level:2},{value:"Instance Variables",id:"instance-variables",level:2},{value:"Examples",id:"examples",level:2},{value:"Tally Counter",id:"tally-counter",level:3},{value:"Tic Tac Toe Game",id:"tic-tac-toe-game",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"classes-and-object-oriented-programming"},"Classes and Object-Oriented Programming"),(0,l.kt)("p",null,"We've managed to dodge around this subject long enough,\nbut the time has come to face the final demon at the heart of the python language's design:\nclasses."),(0,l.kt)("h2",{id:"what-are-classes"},"What are Classes?"),(0,l.kt)("p",null,"Types."),(0,l.kt)("h3",{id:"no-really"},"No, Really?"),(0,l.kt)("p",null,"Yeah, types. In python, classes and types are the same thing."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Extra: In Python ... ?")),(0,l.kt)("p",null,'There are other language, such as Java, where there are\n"primitive types" (such as ',(0,l.kt)("inlineCode",{parentName:"p"},"int")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"bool"),', if memory serves)\nand "classes" as two distinct things.\nThe difference between the two is roughly that classes can have methods and fields of other types,\nand primitive types do not.'),(0,l.kt)("p",null,"There are languages like C, where there are no classes as all.\nC pretty much just has the primitive types and bundles thereof."),(0,l.kt)("p",null,"Some languages like SML have this cool datatype machinery for\nmaking new compound types."),(0,l.kt)("p",null,"But in python, types and classes are the same thing.\nIt might be more technically accurate to say that all types are classes in python,\nas classes in python match the more inter-language notion of classes,\nwhereas the types in python are not like the primitive types elsewhere.")),(0,l.kt)("p",null,"Look at the return of the ",(0,l.kt)("inlineCode",{parentName:"p"},"type()")," function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Type",live_py:!0,title:"Type"},"print(f\"type of 31415 : {type(31415)}\") # <class 'int'>\nprint(f\"type of None  : {type(None)}\")  # <class 'NoneType'>\nprint(f\"type of 'foo' : {type('foo')}\") # <class 'str'>\n")),(0,l.kt)("p",null,"Notice how the prints all contain the word ",(0,l.kt)("strong",{parentName:"p"},"class"),"?\nPython itself certainly doesn't seem to feel there is an appreciable difference."),(0,l.kt)("p",null,"The existence of the two different terms has more to do with history and the\nmechanics of other languages."),(0,l.kt)("h2",{id:"what-are-objects"},"What are Objects?"),(0,l.kt)("p",null,"Specific ",(0,l.kt)("strong",{parentName:"p"},"things")," of some type."),(0,l.kt)("h3",{id:"but-actually"},"But, Actually?"),(0,l.kt)("p",null,"Objects are to classes what a ",(0,l.kt)("inlineCode",{parentName:"p"},"5")," living in memory is to ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),".\nObjects are specific ",(0,l.kt)("em",{parentName:"p"},"instances")," of a type/class."),(0,l.kt)("p",null,"So if we have the class ",(0,l.kt)("inlineCode",{parentName:"p"},"int"),", then specific ints like ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"-345"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),", etc.\nthat live and exist in memory are objects."),(0,l.kt)("p",null,"If we have the class ",(0,l.kt)("inlineCode",{parentName:"p"},"list"),",\nthen specific lists like ",(0,l.kt)("inlineCode",{parentName:"p"},"[3, 6, -1]"),", ",(0,l.kt)("inlineCode",{parentName:"p"},'["foo", "bar"]'),", ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),", etc.\nthat live and exist in memory are objects."),(0,l.kt)("h2",{id:"what-is-object-oriented-programming"},"What is Object-Oriented Programming?"),(0,l.kt)("p",null,"Object oriented programming is a language design paradigm and a programming paradigm\nthat centres around classes and objects."),(0,l.kt)("p",null,"That main characters and considerations are the objects.\nThe objects are able to change/be changed by their methods.\nObjects and methods serve as the main nouns and verbs (respectively) of OOP."),(0,l.kt)("p",null,"There are class-specific functions called ",(0,l.kt)("em",{parentName:"p"},"methods"),",\nwhich require a specific object to invoke them via ",(0,l.kt)("inlineCode",{parentName:"p"},"object_var_name.mathod_name(args)"),"."),(0,l.kt)("p",null,"There are class-specific variables called ",(0,l.kt)("em",{parentName:"p"},"field"),",\nwhich require a specific object to reference them via ",(0,l.kt)("inlineCode",{parentName:"p"},"object_var_name.field_name"),"."),(0,l.kt)("p",null,"It's all about the object, its ",(0,l.kt)("em",{parentName:"p"},"attributes")," (methods and fields),\nand using the methods to alter the fields."),(0,l.kt)("p",null,"A lot of stuff we've done could be done in a more object-oriented programming-y manner."),(0,l.kt)("p",null,"For example, a game of tic-tac-toe could have a ",(0,l.kt)("inlineCode",{parentName:"p"},"TicTacToeGame")," class,\nwith a specific instance/object representing a single game.\nEach object would have its own board (the class would have a board field),\nand there would be methods to do things like update the board and check the state of it."),(0,l.kt)("p",null,"The class is basically a blueprint for internals of the objects,\ndetermining what they have information-wise (what fields/variables they have)\nand what they can do (what methods they have)."),(0,l.kt)("h2",{id:"making-classes"},"Making Classes"),(0,l.kt)("p",null,'So, how do we make one of these classes?\nAs a running example,\nwe\'ll first make a "dog" that "barks" and give it a name.'),(0,l.kt)("p",null,"A class is declared like so:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"class ClassName:\n  METHODS\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"class")," keyword, followed by a name for the class\n(I'll be using a camel-case convention for class names, though that is not necessary),\nfollowed by a ",(0,l.kt)("inlineCode",{parentName:"p"},":"),", followed by code (which will be explored in subsequent sections)."),(0,l.kt)("p",null,"Once a class has been declared, you can make an object of that class with the\nfunction call ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassName()"),". (Remember creating empty sets with ",(0,l.kt)("inlineCode",{parentName:"p"},"set()"),"? Same deal.)"),(0,l.kt)("p",null,"So a rudimentary class declaration for our dog class could look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dog",live_py:!0,title:"Dog"},'class Dog:\n  pass # a do-nothing for now\n\nspot = Dog()\nprint(f"Spot is a {type(spot).__name__}")        # Dog\nprint(f"Spot is a dog? {isinstance(spot, Dog)}") # True\n')),(0,l.kt)("h2",{id:"making-methods"},"Making Methods"),(0,l.kt)("p",null,"We want our objects to be able to ",(0,l.kt)("strong",{parentName:"p"},"do things"),".\nWe want ",(0,l.kt)("inlineCode",{parentName:"p"},"spot.bark()")," to make ",(0,l.kt)("inlineCode",{parentName:"p"},"spot"),' "bark".'),(0,l.kt)("p",null,"Making a method is almost exactly like making a function,\nexcept it is inside the class declaration,\nand the first argument must be a special argument that is used to refer\nto the object that invoked the method\n(",(0,l.kt)("inlineCode",{parentName:"p"},"spot")," is the invoking instance in our above example).\nThis argument is generally named ",(0,l.kt)("inlineCode",{parentName:"p"},"self"),"."),(0,l.kt)("p",null,"That needs an example before we can start digesting it.\nSo here's the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dog")," class from earlier except with a ",(0,l.kt)("inlineCode",{parentName:"p"},"bark()")," method."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dog_Bark",live_py:!0,title:"Dog_Bark"},'class Dog:\n  def bark(self):\n    print("Woof!")\n\nspot = Dog()\nspot.bark()\nDog.bark(spot)\n')),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"bark()")," method takes in ",(0,l.kt)("inlineCode",{parentName:"p"},"self"),", which won't be used yet. But what ",(0,l.kt)("strong",{parentName:"p"},"is")," self.\nWell, when we call ",(0,l.kt)("inlineCode",{parentName:"p"},"spot.bark()"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"bark()")," is run with ",(0,l.kt)("inlineCode",{parentName:"p"},"self")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"spot"),".\nIf we did ",(0,l.kt)("inlineCode",{parentName:"p"},"fido.bark()"),", then ",(0,l.kt)("inlineCode",{parentName:"p"},"bark()")," would be run with ",(0,l.kt)("inlineCode",{parentName:"p"},"self")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"fido"),"."),(0,l.kt)("p",null,"This can be made more explicitly visible by writing ",(0,l.kt)("inlineCode",{parentName:"p"},"spot.bark()")," in what I assume\nis closer to its true form: ",(0,l.kt)("inlineCode",{parentName:"p"},"Dog.bark(spot)"),', which now needs the "invoking instance"\nspecified explicitly.'),(0,l.kt)("h2",{id:"initialisation"},"Initialisation"),(0,l.kt)("p",null,"There are number of special method names that have special meanings/roles.\nThe only only we must contend with in this lecture is ",(0,l.kt)("inlineCode",{parentName:"p"},"__init__"),".\nThis is special method know as the ",(0,l.kt)("em",{parentName:"p"},"constructor"),",\nand governs how the object is initialised."),(0,l.kt)("p",null,"If we want to initialise a class in any way other than the default manner,\nwe can implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"__init__()")," method."),(0,l.kt)("p",null,"We can have the ",(0,l.kt)("inlineCode",{parentName:"p"},"__init__()")," method take any arguments we want as well.\nFor example, the name of the dog.\nAny arguments that ",(0,l.kt)("inlineCode",{parentName:"p"},"__init__()")," takes (beyond ",(0,l.kt)("inlineCode",{parentName:"p"},"self"),")\nwill need to be provided to the ",(0,l.kt)("inlineCode",{parentName:"p"},"Dog()")," call."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dog_Init",live_py:!0,title:"Dog_Init"},'class Dog:\n  # Constructor takes in name\n  def __init__(self, name):\n    print(f"Hello {name}!")\n\n  def bark(self):\n    print("Woof!")\n\n# Name provided to constructor\nspot = Dog("Spot") # __init__ run here\nspot.bark()\n')),(0,l.kt)("h2",{id:"instance-variables"},"Instance Variables"),(0,l.kt)("p",null,"That's cute and all,\nbut it would be good if the name could be more permanently associated with the dog."),(0,l.kt)("p",null,"Well, objects can have instance variables,\nso something like ",(0,l.kt)("inlineCode",{parentName:"p"},"spot.name")," would give us the name associated with ",(0,l.kt)("inlineCode",{parentName:"p"},"spot"),"."),(0,l.kt)("p",null,"But in the internals of the class definition, how do we reference and alter ",(0,l.kt)("inlineCode",{parentName:"p"},"spot.name"),"?\nWell, whenever ",(0,l.kt)("inlineCode",{parentName:"p"},"spot")," is the invoking instance of a method,\n",(0,l.kt)("inlineCode",{parentName:"p"},"self")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"spot")," in the method call.\nIt turns out that ",(0,l.kt)("inlineCode",{parentName:"p"},"self.name")," thus works to affect that instance's ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Dog_Name",live_py:!0,title:"Dog_Name"},'class Dog:\n  def __init__(self, name):\n    # save the name on initialisation\n    self.name = name\n\n  def bark(self):\n    # print name on bark for our sake\n    print(f"Woof! (I\'m {self.name}!)")\n\nspot = Dog("Spot")\nfido = Dog("Fido")\n# We can reference the field directly from the objects\nprint(f"spot.name: {spot.name}")\nprint(f"fido.name: {fido.name}")\n# The field can also be used in other methods\nspot.bark()\nfido.bark()\n')),(0,l.kt)("p",null,"So finally: we have our class/type ",(0,l.kt)("inlineCode",{parentName:"p"},"Dog"),". It's objects will have an instance variable ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),",\nwhich is set by the constructor. We also have a method that lets the dog can ",(0,l.kt)("inlineCode",{parentName:"p"},"bark()"),"."),(0,l.kt)("p",null,"And this sort of encapsulates all of the core machinery for making classes."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Extra: Class Variables")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This is really quite subtle and confusing.")),(0,l.kt)("p",null,"There is another concept called a class variable.\nThe way that class variables behave is much more subtle."),(0,l.kt)("p",null,"They are associated with the ",(0,l.kt)("strong",{parentName:"p"},"class itself"),"."),(0,l.kt)("p",null,"Moreover, in a scope-y way,\nobjects can reference a class variable and shadow it with instance variables.\nIt functions almost like a default, shared between instances."),(0,l.kt)("p",null,"This is something to probably steer clear from unless you feel quite comfortable that\nyou know what you are doing."),(0,l.kt)("p",null,"Here is the code I use to experiment and see how it all works:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Class_Variable",live_py:!0,title:"Class_Variable"},'class A:\n  val = 0\n\n  def update(self, v):\n    self.val = v\n\nx = A()\ny = A()\nz = A()\n# x, y, and z all see the class variable\nprint(f"A.val: {A.val} lives as {id(A.val)}")\nprint(f"x.val: {x.val} lives as {id(x.val)}")\nprint(f"y.val: {y.val} lives as {id(y.val)}")\nprint(f"z.val: {z.val} lives as {id(z.val)}")\nprint("*** UPDATE: x,y ***")\n# x and y get instance variables that shadow the class variable\nx.val = 2\ny.update(3)\nprint(f"A.val: {A.val} lives as {id(A.val)}")\nprint(f"x.val: {x.val} lives as {id(x.val)}")\nprint(f"y.val: {y.val} lives as {id(y.val)}")\nprint(f"z.val: {z.val} lives as {id(z.val)}")\nprint("*** UPDATE: A ***")\n# clas variable changes, z still sees class variable\nA.val = 5\nprint(f"A.val: {A.val} lives as {id(A.val)}")\nprint(f"x.val: {x.val} lives as {id(x.val)}")\nprint(f"y.val: {y.val} lives as {id(y.val)}")\nprint(f"z.val: {z.val} lives as {id(z.val)}")\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Class_Variable_Mut",live_py:!0,title:"Class_Variable_Mut"},'class A:\n  val = []\n\n  def update(self, v):\n    self.val.append(v)\n\nx = A()\ny = A()\nz = A()\n# x, y, and z all see the class variable\nprint(f"A.val: {A.val} lives as {id(A.val)}")\nprint(f"x.val: {x.val} lives as {id(x.val)}")\nprint(f"y.val: {y.val} lives as {id(y.val)}")\nprint(f"z.val: {z.val} lives as {id(z.val)}")\nprint("*** UPDATE: x,y,z ***")\n# x and y update the class variable\nx.val.append(3)\ny.update(1)\n# z gets an instance variable that shadows the class variable\nz.val = [3, 1, 4]\nprint(f"A.val: {A.val} lives as {id(A.val)}")\nprint(f"x.val: {x.val} lives as {id(x.val)}")\nprint(f"y.val: {y.val} lives as {id(y.val)}")\nprint(f"z.val: {z.val} lives as {id(z.val)}")\nprint("*** UPDATE: A ***")\n# class variable changes, x and y still see class variable\nA.val = [2, 7, 1]\nprint(f"A.val: {A.val} lives as {id(A.val)}")\nprint(f"x.val: {x.val} lives as {id(x.val)}")\nprint(f"y.val: {y.val} lives as {id(y.val)}")\nprint(f"z.val: {z.val} lives as {id(z.val)}")\n'))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("p",null,"I presume a couple more examples would be beneficial, or at least not detrimental."),(0,l.kt)("h3",{id:"tally-counter"},"Tally Counter"),(0,l.kt)("p",null,"A ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Tally_counter"},"tally counter")," class\nwould be a fairly minimal example that uses all of these pieces."),(0,l.kt)("p",null,"We would need to track an internal counter (call it ",(0,l.kt)("inlineCode",{parentName:"p"},"counter"),"),\nand we would want that counter initialised to ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),".\nWe would also want to be able to increment the counter\n(call that method ",(0,l.kt)("inlineCode",{parentName:"p"},"click()"),", as though we are clicking the button)."),(0,l.kt)("p",null,"That could look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Tally_Counter",live_py:!0,title:"Tally_Counter"},'class TallyCounter:\n  def __init__(self):\n    self.counter = 0\n\n  def click(self):\n    self.counter += 1\n\nclicker = TallyCounter()\nclicker.click()\nclicker.click()\nclicker.click()\nprint(f"count: {clicker.counter}")\n')),(0,l.kt)("h3",{id:"tic-tac-toe-game"},"Tic Tac Toe Game"),(0,l.kt)("p",null,"For an example that is much more plausible in code we might actually write,\nbut a tad more complex, let's look at tic tac toe."),(0,l.kt)("p",null,"As far is internal information we want to store, the board itself seems appropriate."),(0,l.kt)("p",null,"As far as initialisation goes, the board should be empty."),(0,l.kt)("p",null,"There are no shortage of possible useful methods,\nbut for the purposes of making in minimal working example\nI'll just do printing and updating the board."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Tic-Tac-Toe",live_py:!0,title:"Tic-Tac-Toe"},'class TicTacToeGame:\n  def __init__(self):\n    self.board = [[" "," "," "],[" "," "," "],[" "," "," "]]\n\n  def print_board(self):\n    b = self.board\n    print("+---+---+---+")\n    print(f"| {b[0][0]} | {b[0][1]} | {b[0][2]} |")\n    print("+---+---+---+")\n    print(f"| {b[1][0]} | {b[1][1]} | {b[1][2]} |")\n    print("+---+---+---+")\n    print(f"| {b[2][0]} | {b[2][1]} | {b[2][2]} |")\n    print("+---+---+---+")\n\n  def update_board(self, loc, player):\n    self.board[loc[0]][loc[1]] = player\n\ngame = TicTacToeGame()\nprint("Turn 0:")\ngame.print_board()\n\ngame.update_board((1,1), "X")\nprint("\\nTurn 1:")\ngame.print_board()\n')))}d.isMDXComponent=!0}}]);