"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={authors:"Emerson, Erfan"},r="If Statements",l={unversionedId:"ifs/index",id:"ifs/index",title:"If Statements",description:"When writing code, it's important to be able to translate your logic and problem-solving skills into code that a computer can understand. One common tool for this is the \"if statement,\" which allows you to execute different blocks of code depending on a specific condition. In this guide, we'll cover how to take your logical thinking and turn it into if statements that can be used in your code.",source:"@site/main/guides/09-ifs/index.md",sourceDirName:"09-ifs",slug:"/ifs/",permalink:"/main/guides/ifs/",draft:!1,tags:[],version:"current",frontMatter:{authors:"Emerson, Erfan"},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/main/guides/functions/"},next:{title:"Staff",permalink:"/main/guides/staff/"}},s={},p=[{value:"Motivation",id:"motivation",level:2},{value:"Writing an If Statement",id:"writing-an-if-statement",level:2},{value:"Multiple Conditions",id:"multiple-conditions",level:2},{value:"Else Statements",id:"else-statements",level:2},{value:"If statement examples",id:"if-statement-examples",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"if-statements"},"If Statements"),(0,o.kt)("p",null,"When writing code, it's important to be able to translate your logic and problem-solving skills into code that a computer can understand. One common tool for this is the \"if statement,\" which allows you to execute different blocks of code depending on a specific condition. In this guide, we'll cover how to take your logical thinking and turn it into if statements that can be used in your code."),(0,o.kt)("h2",{id:"motivation"},"Motivation"),(0,o.kt)("p",null,"Up until this point, our programs are a linear recipe: do ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),", then do ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),", and so on. This is great for some tasks, but sometimes we don't always want a certain procedure to run. For example, let's say I wanted to pack my backpack for the day. A program to pack my backpack might look something like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pack_laptop()\nreplace_snacks()\npack_umbrella()\nrefill_water()\n")),(0,o.kt)("p",null,"But what happens if I don't ",(0,o.kt)("em",{parentName:"p"},"always")," want to pack the same things? Maybe I only need to pack snacks if it's a Monday, when I have a bunch of classes, and not on a Tuesday when I have more free time? Maybe I only want to bring my umbrella if I think it's going to rain and it's not too windy, and if it's windy and raining I pack a raincoat?"),(0,o.kt)("p",null,"This is the goal of a ",(0,o.kt)("em",{parentName:"p"},"conditional statement"),", also refered to as an ",(0,o.kt)("em",{parentName:"p"},"if statement"),'. Conditionals let us mark a section of code and say "only run this if condition ',(0,o.kt)("inlineCode",{parentName:"p"},"x"),' is true". So for example, if it is Monday, replace my snacks.'),(0,o.kt)("h2",{id:"writing-an-if-statement"},"Writing an If Statement"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1: Identify the condition.")," The first step in converting logic into if statements is to identify the condition or situation that needs to be checked. For example, if you're trying to determine whether a user has entered a valid password, the condition might be whether the password contains at least one uppercase letter, one lowercase letter, and one number."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2: Determine the action(s).")," Once you've identified the condition, you need to determine what action(s) should be taken if the condition is true or false. For example, if the user has entered a valid password, you might allow them to log in to their account. If the password is invalid, you might display an error message and prompt them to enter a new password."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3: Write the if statement.")," Now that you have identified the condition and actions, it's time to write the if statement. The basic syntax for an if statement is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if (condition):\n    # code that only runs if condition is True\n# more code that runs independent of if condition is True of False\n")),(0,o.kt)("h2",{id:"multiple-conditions"},"Multiple Conditions"),(0,o.kt)("p",null,"In some cases, you may need to check multiple conditions in order to make a decision. For example, I might want to pack an umbrella if I have class today and it's raining outside. I only want to pack my umbrella if ",(0,o.kt)("em",{parentName:"p"},"both conditions")," are true. In these cases, you can use logical operators such as ",(0,o.kt)("inlineCode",{parentName:"p"},"and")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"or")," to combine conditions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if is_raining and has_class:\n    pack_umbrella()\n")),(0,o.kt)("h2",{id:"else-statements"},"Else Statements"),(0,o.kt)("p",null,"It's fairly common to want to make a \"this-or-that\" type decision. For example, let's say I just got out of class. If I'm hungry, I'll go to the dining hall, otherwise I'll head to the library. This is the utility of the ",(0,o.kt)("em",{parentName:"p"},"else")," statement:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"if hungry:\n    go_to_woo()\nelse:\n    go_to_du_bois()\n")),(0,o.kt)("h2",{id:"if-statement-examples"},"If statement examples"),(0,o.kt)("p",null,"Below are some practice problems using branching code. Below each problem we have included an example solution, which walks through the logical approach to the problem and how to convert that solution into code."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Problem 1: Write a function that takes in floats representing the length and width of a rectangle, and prints \u201csquare\u201d if it is a square, or prints \u201cnot square\u201d if it is not a square.")),(0,o.kt)("p",null,"The first step here is to find important details in the problem. You can often find the different branches you\u2019ll need in the prompt itself. Here we can see two cases, either"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"print \u201csquare\u201d if it is a square"),(0,o.kt)("li",{parentName:"ol"},"print \u201cnot square\u201d if it is not a square")),(0,o.kt)("p",null,"We can take the language of the prompt and directly turn it into psuedocode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-psuedocode"},"if it is a square:\n    print \u201csquare\u201d\nif it is not a square:\n    print \u201cnot square\u201d\n")),(0,o.kt)("p",null,"Now, given the length and width, how do we know if the rectangle we're given is a square? If the length and width are equal! And we have operators for that, \u201c==\u201d and \u201c!=\u201d."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pseudocode"},"if length == width:\n    print(\u201csquare\u201d)\nelif length != width:\n    print(\u201cnot square\u201d)\n")),(0,o.kt)("p",null,"Finally, note that ",(0,o.kt)("inlineCode",{parentName:"p"},"length == width")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"length != width")," are opposite cases, we can can just use an if else statement rather than an elif:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pseudocode"},"if length == width:\n    print(\u201csquare\u201d)\nelse:\n    print(\u201cnot square\u201d)\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Problem 2: A school has following rules for grading system:"),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"below 60 - F"),(0,o.kt)("li",{parentName:"ul"},"60 to 69 - D"),(0,o.kt)("li",{parentName:"ul"},"70 to 79 - C"),(0,o.kt)("li",{parentName:"ul"},"80 to 89 - B"),(0,o.kt)("li",{parentName:"ul"},"Above 90 - A")),(0,o.kt)("p",{parentName:"blockquote"},"Ask the user to enter their number grade, print out their corresponding letter grade.")),(0,o.kt)("p",null,"Let's rewrite the problem statement, with the conditions we want to check in bold, and the corresponding code we want to run in italics."),(0,o.kt)("p",null,"A school has following rules for grading system:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"below 60")," - ",(0,o.kt)("em",{parentName:"li"},"(print) F")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"60 to 69")," - ",(0,o.kt)("em",{parentName:"li"},"(print) D")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"70 to 79")," - ",(0,o.kt)("em",{parentName:"li"},"(print) C")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"80 to 89")," - ",(0,o.kt)("em",{parentName:"li"},"(print) B")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Above 90")," - ",(0,o.kt)("em",{parentName:"li"},"(print) A"))),(0,o.kt)("p",null,"Ask the user to enter their number grade and print the corresponding letter."),(0,o.kt)("p",null,"In other words, we want to make a conditional check on the user's grade, and then print that letter. We can check the various letters in any order, but the two ways that make the most sense are to go in ascending or descending order."),(0,o.kt)("p",null,"Here\u2019s the pseudocode, again using language pulled directly from the problem:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-pseudocode"},"if(number grade is below 60):\n    print F\nelif(number grade is 60 to 69):\n    print D\nelif(number grade is 70 to 79):\n    print C\nelif(number grade is 80 to 89):\n    print B\nelif(number grade is above 90):\n    print A\n")),(0,o.kt)("p",null,"We\u2019ll need to find the right comparison operators to use here. Which ones check if a number is greater than or less than another number? ",(0,o.kt)("inlineCode",{parentName:"p"},">")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"<"),". We\u2019ll also need a variable to actually compare against the threshold grades, which we know from the problem is an input from the user. I\u2019ll call it ",(0,o.kt)("inlineCode",{parentName:"p"},"user_grade"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'user_grade = int(input(\u201cwhat\u2019s your grade?\u201d))\n\nif user_grade < 60:\n    print(\u201cF\u201d):\nelif user_grade < 70:\n    print(\u201cD\u201d):\nelif user_grade < 80:\n    print("C")\nelif user_grade < 90):\n    print("B")\nelse:\n    print(\u201cA\u201d)\n')),(0,o.kt)("p",null,"A good question to ask is, why don't we need to check both sides of the range when we're checking ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"D"),"? For example, why don't we check ",(0,o.kt)("inlineCode",{parentName:"p"},"(user_grade >= 60 and user_grade < 70)")," for \u201cD\u201d?"),(0,o.kt)("p",null,"The reason being is, if we have gotten to the first ",(0,o.kt)("inlineCode",{parentName:"p"},"elif")," statement, the condition in the ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," must have been ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),". So, by the time we get to \u201cD\u201d, we know that the first if didn\u2019t pass, so ",(0,o.kt)("inlineCode",{parentName:"p"},"user_grade")," must not be less than 60. Therefore we know that, if we are checking the condition on the fifth line, ",(0,o.kt)("inlineCode",{parentName:"p"},"user_grade")," must be greater than or equal to 60. It wouldn\u2019t be wrong to include the extra check, but this ends up much neater."))}u.isMDXComponent=!0}}]);