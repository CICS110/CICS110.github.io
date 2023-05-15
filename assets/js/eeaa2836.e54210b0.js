"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3052],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(o),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},2666:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const r={},i="Capstone Project",l={unversionedId:"capstone/index",id:"capstone/index",title:"Capstone Project",description:"About",source:"@site/main/assignments/00-capstone/index.md",sourceDirName:"00-capstone",slug:"/capstone/",permalink:"/main/assignments/capstone/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Assignments",permalink:"/main/assignments/"}},s={},u=[{value:"About",id:"about",level:2},{value:"Requirements:",id:"requirements",level:3},{value:"Assignment",id:"assignment",level:2},{value:"Submission Timeline",id:"submission-timeline",level:3},{value:"Step 1. Select a Real-World Problem",id:"step-1-select-a-real-world-problem",level:3},{value:"Step 2. Make a Plan",id:"step-2-make-a-plan",level:3},{value:"Project Plan Example",id:"project-plan-example",level:4},{value:"Project Plan Grading Scale",id:"project-plan-grading-scale",level:4},{value:"Step 3. Implement a Solution Using Python",id:"step-3-implement-a-solution-using-python",level:3},{value:"Step 4. Present",id:"step-4-present",level:3},{value:"Step 5. Peer Grade",id:"step-5-peer-grade",level:3},{value:"Step 6: Reflect",id:"step-6-reflect",level:3},{value:"Grading Scale",id:"grading-scale",level:2},{value:"Rubric",id:"rubric",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"capstone-project"},"Capstone Project"),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"During the semester, you utilized programming fundamentals to solve various real-world problems. Now, it is your chance to select a real-world problem that you find interesting and solve it by applying everything you have learned throughout the semester. To complete this capstone project, you will work in ",(0,a.kt)("strong",{parentName:"p"},"groups of 2-3 students"),". While you are free to choose any project you desire, your implementation must satisfy the following ",(0,a.kt)("strong",{parentName:"p"},"16 requirements"),"."),(0,a.kt)("h3",{id:"requirements"},"Requirements:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implemented in Python."),(0,a.kt)("li",{parentName:"ul"},"Include variables of various data types (e.g., integers, floats, sequence data types, etc.). You must use at least one of the following sequence data types: list, tuple, or set."),(0,a.kt)("li",{parentName:"ul"},"Include a dictionary and retrieve a value by key from the dictionary."),(0,a.kt)("li",{parentName:"ul"},"Include expressions that involve operators, variables, and constants (e.g., x >= 10)."),(0,a.kt)("li",{parentName:"ul"},"Use at least 2 of the following: logical and, logical or, or logical not."),(0,a.kt)("li",{parentName:"ul"},"Include casting between data types (e.g., int(user_response), where user_response is a string)."),(0,a.kt)("li",{parentName:"ul"},"Create and use a module (i.e., rather than having one giant python file, your code should be organized into modules such that there is a main file that imports modules)."),(0,a.kt)("li",{parentName:"ul"},"Code should be able to handle reasonable invalid inputs (e.g., inputting text instead of numbers, files in the wrong format, etc.) You may wish to use a try/except to do this."),(0,a.kt)("li",{parentName:"ul"},"Include at least 5 functions that you have created and called elsewhere in the code."),(0,a.kt)("li",{parentName:"ul"},"Include branching logic. You must use at least one if-elif-else statement."),(0,a.kt)("li",{parentName:"ul"},"Use assert statements to test your branching logic."),(0,a.kt)("li",{parentName:"ul"},"Include looping. You must use at least one for loop AND at least one while loop. The while loop must include a break statement and/or a continue statement inside the loop."),(0,a.kt)("li",{parentName:"ul"},"Include a comprehension for at least one of the following: mapping or filtering."),(0,a.kt)("li",{parentName:"ul"},"Include logic for working with a file You must read from and/or write to a file. The file could be a text file or a csv file."),(0,a.kt)("li",{parentName:"ul"},"Create and use a class with at least two methods (",(0,a.kt)("em",{parentName:"li"},"we will discuss classes in lecture soon"),").")),(0,a.kt)("h2",{id:"assignment"},"Assignment"),(0,a.kt)("p",null,"There are ",(0,a.kt)("strong",{parentName:"p"},"6 steps")," to this project. Below is a timeline for all parts. ",(0,a.kt)("strong",{parentName:"p"},"All deadlines are hard deadlines, meaning tokens cannot be used and no late submissions will be accepted"),"."),(0,a.kt)("h3",{id:"submission-timeline"},"Submission Timeline"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Project Proposal & Plan:")," April 28th (11:59pm) via Gradescope"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Implementation:")," May 15th (11:59pm) via Moodle"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Poster Presentation:")," submissions are due May 15th (11:59pm) via Moodle; presentations are during the last class (May 16th if you\u2019re in a Tu/Th section or May 17th if you\u2019re in a Mo/We section)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Reflection:")," May 19th (11:59pm) via Moodle"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Peer Grading:")," May 19th (11:59pm) via Moodle")),(0,a.kt)("h3",{id:"step-1-select-a-real-world-problem"},"Step 1. Select a Real-World Problem"),(0,a.kt)("p",null,"By no means do we expect you to solve life\u2019s biggest challenges. You don\u2019t have to find a cure for cancer or dominate the AI chatbot race. The key here is to select a problem that is interesting to you and ",(0,a.kt)("strong",{parentName:"p"},"IS MANAGEABLE TO SOLVE BEFORE THE CAPSTONE DUE DATE"),". You must also be able to solve your problem using ",(0,a.kt)("strong",{parentName:"p"},"ALL")," of the required concepts/skills listed above. We highly encourage you to discuss your project idea with your instructor and/or lab TA. ",(0,a.kt)("strong",{parentName:"p"},"You must propose your project idea by April 28th (11:59pm) via Gradescope"),". "),(0,a.kt)("p",null,"Here are some example project ideas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Calendar application for scheduling meetings (similar to YouCanBook.me)"),(0,a.kt)("li",{parentName:"ul"},"Gradebook system for tracking deadlines, student grades, token usage, etc."),(0,a.kt)("li",{parentName:"ul"},"Item finder on a coordinate system (along the lines of the Battleship game)")),(0,a.kt)("h3",{id:"step-2-make-a-plan"},"Step 2. Make a Plan"),(0,a.kt)("p",null,"Before you start programming, you should plan out your solution. You don\u2019t have to create a sophisticated plan, and your plan doesn\u2019t have to be flawless (you should expect to face some hurdles during implementation). Rather, you should list the main steps you will need to take to solve the problem. For example, each homework question that you solved this semester was broken down into several parts (a, b, \u2026). Each part was one step to solving the main problem. In doing this, we turned a large problem (like \u201cimplement Wordle\u201d) into several smaller and more manageable problems (like \u201cget guess\u201d and \u201ccomplete one turn\u201d). You should think about what steps you will need to take and what functions you will need to create to complete those steps. ",(0,a.kt)("strong",{parentName:"p"},"When you propose your project idea on Gradescope on April 28th (11:59pm), you will be asked to include your plan"),"."),(0,a.kt)("p",null,"Below is an example project plan for Wordle. Note how we tried to flag the main functions, loops, branchings, try/excepts, etc. ",(0,a.kt)("strong",{parentName:"p"},"You don\u2019t have to have every item in the requirements list flagged in your project plan, however, you should aim to have most items in there")," (see Grading Scale below). You must have all requirements in your final implementation. In your plan, ",(0,a.kt)("strong",{parentName:"p"},"you must also include at least one decision tree diagram")," that reflects a core branching component of your project."),(0,a.kt)("h4",{id:"project-plan-example"},"Project Plan Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Group Members (and section #):\nAllison Poh (section 5)\nTim Richards (section 5)\n\nProject Title:\nWordle Clone\n\nProject Idea:\nWe want to recreate Wordle to allow players to play multiple games in one day.\n\nProject Plan:\nWe expect our implementation to have 6 functions:\n1. A function for generating a solution that randomly selects a 5-letter word. We will create a list of 5-letter words by searching on the Web. We will use python\u2019s built-in module random to randomly select one of these words from the list.\n2. A function for getting user input that asks the user to enter a 5-letter guess. We will use the input function and a try/except to make sure their input is valid. If the input is invalid, the user will need to enter another guess, so we will also use a loop here.\n3. A function for printing a guess back to the user. Printing involves turning all letters to capitalization and adding a space between each letter for better readability.\n4. A function for comparing a guess to the solution. The function should compare the two words letter-by-letter. This will require a loop. Branching will be used in the loop to determine what symbol to print based on if the letters are correct or incorrect (green = correct, red = incorrect).\n5. A function that calls all of the above functions, imitating one turn of the game. \n6. A function that calls the one turn function up to 6 times (because there are 6 attempts allowed). The function will additionally check if the game should be over (i.e., if a player won).\n\nDecision Tree Diagram:\n<you are required to have at least one decision tree diagram in this write-up>\n\nGroup Member Roles:\nAllison will work on functions for generating a solution, getting user input, and printing a guess back to the user\nTim will work on a function for comparing a guess to a solution\nWe will then work together to create a function for one turn, and a function for calling one turn up to 6 times\n")),(0,a.kt)("p",null,"Use the following template for your project plan: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1y7_xBo04OH3TemiqWVUKlNjVqWmQox0DDe6-JZQs8Rg/edit?usp=sharing"},"Project Proposal and Plan Template"),". You need to replace all of the red text. Before submitting, be sure to change the font color back to black."),(0,a.kt)("h4",{id:"project-plan-grading-scale"},"Project Plan Grading Scale"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1: Below Standards:")," Project Plan is incomplete and mentions very few requirements"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2: Approaching Standards:")," Project Plan mentions at least ",(0,a.kt)("strong",{parentName:"li"},"25%")," of the requirements"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"3: Meeting Standards:")," Project Plan mentions at least ",(0,a.kt)("strong",{parentName:"li"},"50%")," of the requirements and ",(0,a.kt)("strong",{parentName:"li"},"includes at least one decision tree diagram")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"4: Exceeding Standards:")," Project Plan mentions at least ",(0,a.kt)("strong",{parentName:"li"},"80%")," of the requirements and ",(0,a.kt)("strong",{parentName:"li"},"includes at least one decision tree diagram"))),(0,a.kt)("h3",{id:"step-3-implement-a-solution-using-python"},"Step 3. Implement a Solution Using Python"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start early and collaborate often"),". If you get stuck, first ask your group members for help. You can visit any course staff\u2019s office hours for additional help, but do note that we do not have the solution to every problem in the world. We can help you conceptually, but we won\u2019t be able to answer \u201cWhy doesn\u2019t this work?\u201d without any context. ",(0,a.kt)("strong",{parentName:"p"},"Implementation is due May 15th (11:59pm) via Moodle"),"."),(0,a.kt)("p",null,"Pair programming can be challenging to manage, but there are several tools that can help your group work effectively. The simplest version control tool that we can offer you is Gradescope. As many of you know, Gradescope saves your submission history, allowing you to jump back to past submissions (i.e., versions) of your code. If you tag your group members for each submission, then all group members should be able to see the full version history. You can use ",(0,a.kt)("strong",{parentName:"p"},"Capstone Project Sandbox")," in Gradescope for this purpose. A more conventional approach to version control is using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/"},"Github"),". This is definitely a more advanced and sophisticated version control technique than Gradescope, but it's worth checking out if you want to learn a widely used tool. Github can be integrated with VSCode (see ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/sourcecontrol/github"},"Working with GitHub in VSCode"),"). ",(0,a.kt)("strong",{parentName:"p"},"You are not required to use either of these techniques.")),(0,a.kt)("h3",{id:"step-4-present"},"Step 4. Present"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You will present your project during the last class (May 16th if you\u2019re in a Tu/Th section or May 17th if you\u2019re in a Mo/We section)"),". The presentation is ",(0,a.kt)("strong",{parentName:"p"},"MANDATORY"),"; only those with an extenuating circumstance (documentation required) may be excused. Your group will create one poster that shows off the most important details about your project. A poster can be created in PowerPoint or Google Slides, but IT IS NOT A SLIDE SHOW. Rather, a poster is a visual aid that explains your project using text, screenshots, diagrams, etc., in one condensed slide. In academic conferences, posters are printed on large paper and displayed on boards or walls for researchers to present. Although we aren\u2019t going to print the posters, you are still required to create the poster as if we were to print them (that is, no more than one slide). See this example poster for the Wordle problem: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1UvUEwaWcnwyteh_3mMN1XzQ8O_FNTVNQrvArtZomnF0/edit?usp=sharing"},"Wordle Poster Presentation"),". You may use this poster as a template if you wish."),(0,a.kt)("p",null,"During the last class, you are expected to have your poster and project code ready on your laptop (remember to charge your laptop if you\u2019re in a classroom with few outlets). Groups will walk around the room and listen to other groups present their projects. In this way, you will not be standing in front of the entire class and presenting. Rather, you will be presenting multiple times to different groups in a less formal and more conversational manner. We expect the listeners to ask questions and engage with the presenters. All groups will both present and listen to other groups throughout the poster presentation session."),(0,a.kt)("h3",{id:"step-5-peer-grade"},"Step 5. Peer Grade"),(0,a.kt)("p",null,"You will ",(0,a.kt)("strong",{parentName:"p"},"INDIVIDUALLY")," grade 3 randomly assigned peer projects. The grading rubric can be found at the end of this page. During the poster presentations, you will be given a handout to record your thoughts about peer projects. You will not know which groups you are grading beforehand so be sure to listen and record notes for all groups. You will then need to transcribe your thoughts into Moodle for 3 randomly assigned groups (note: you will be able to see the code files for the groups your grading on Moodle). The Moodle submission should be completed immediately after the poster presentations (while things are fresh in your mind) but ",(0,a.kt)("strong",{parentName:"p"},"we\u2019ll accept submissions until May 19th (11:59pm)"),"."),(0,a.kt)("h3",{id:"step-6-reflect"},"Step 6: Reflect"),(0,a.kt)("p",null,"The reflection is ",(0,a.kt)("strong",{parentName:"p"},"INDIVIDUAL"),". It is required but will be graded based on completion and thoroughness. Do not tell us what you ",(0,a.kt)("em",{parentName:"p"},"think")," we want to hear. Rather, give your ",(0,a.kt)("em",{parentName:"p"},"honest reflection")," on your project. The reflection questionnaire will become available on Moodle after the poster presentations and will be ",(0,a.kt)("strong",{parentName:"p"},"due by May 19th (11:59pm)"),"."),(0,a.kt)("h2",{id:"grading-scale"},"Grading Scale"),(0,a.kt)("p",null,"Each person will individually grade 3 peer projects during the poster presentations. The grading rubric will be added here by April 21st."),(0,a.kt)("h2",{id:"rubric"},"Rubric"),(0,a.kt)("p",null,"Link to rubric: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1z44zCLcjgp0E-VKFZhzvcoTeZxXnruXcD5PCrsLR9is/edit#gid=0"},"https://docs.google.com/spreadsheets/d/1z44zCLcjgp0E-VKFZhzvcoTeZxXnruXcD5PCrsLR9is/edit#gid=0")))}c.isMDXComponent=!0}}]);