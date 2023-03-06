"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?i.createElement(c,l(l({ref:t},p),{},{components:n})):i.createElement(c,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),o=n(22408);const l={title:"Lab 02: String Formatting"},r=void 0,s={unversionedId:"string-formatting/index",id:"string-formatting/index",title:"Lab 02: String Formatting",description:"General Information",source:"@site/main/labs/02-string-formatting/index.md",sourceDirName:"02-string-formatting",slug:"/string-formatting/",permalink:"/main/labs/string-formatting/",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab 02: String Formatting"},sidebar:"tutorialSidebar",previous:{title:"Lab 01: Getting Started",permalink:"/main/labs/python-setup/"},next:{title:"Lab 03: Assert",permalink:"/main/labs/assert/"}},d={},p=[{value:"General Information",id:"general-information",level:2},{value:"General Submission Info",id:"general-submission-info",level:4},{value:"Group Submissions",id:"group-submissions",level:4},{value:"Unlimited attempts",id:"unlimited-attempts",level:4},{value:"About",id:"about",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Estimated Size",id:"estimated-size",level:3},{value:"Preamble",id:"preamble",level:2},{value:"Assignment",id:"assignment",level:2},{value:"<strong>0.1. Partner up, if you&#39;d like</strong>",id:"01-partner-up-if-youd-like",level:3},{value:"<strong>0.2. Make a file named <code>format.py</code> (1 point)</strong>",id:"02-make-a-file-named-formatpy-1-point",level:3},{value:"<strong>1.1. Implement <code>short_exp()</code> (1 point)</strong>",id:"11-implement-short_exp-1-point",level:3},{value:"<strong>1.2 Modify <code>short_exp()</code> (1 point)</strong>",id:"12-modify-short_exp-1-point",level:3},{value:"<strong>2. Fix <code>long_div()</code> (2 points)</strong>",id:"2-fix-long_div-2-points",level:3},{value:"<strong>3. Implement <code>long_addsub()</code> (0 points)</strong>",id:"3-implement-long_addsub-0-points",level:3},{value:"Grading Scale",id:"grading-scale",level:2},{value:"1: Below Standards: 0-1 points",id:"1-below-standards-0-1-points",level:3},{value:"2: Approaching Standards: 2 points",id:"2-approaching-standards-2-points",level:3},{value:"3: Meeting Standards: 3-4 points",id:"3-meeting-standards-3-4-points",level:3},{value:"4: Exceeding Standards: 5 points",id:"4-exceeding-standards-5-points",level:3}],u={toc:p};function m(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"general-information"},"General Information"),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Submitting to the Auto-Grader")),(0,a.kt)("p",null,"For auto-grading homework assignments in the course,\nwe use ",(0,a.kt)("a",{parentName:"p",href:"https://www.gradescope.com"},"Gradescope"),"."),(0,a.kt)("h4",{id:"general-submission-info"},"General Submission Info"),(0,a.kt)("p",null,"When submitting files to Gradescope,\nyou need to submit all the files you want graded at once."),(0,a.kt)("p",null,"You can do this in several ways:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select all files you want to submit and drag and drop them in the submission area when prompted."),(0,a.kt)("li",{parentName:"ul"},"Browse your files when prompted by Gradescope and select all files you want to submit."),(0,a.kt)("li",{parentName:"ul"},"Directly compress all the files you want to submit into a zip file (zip file name does not matter),\nand submit that zip file via drag-and-drop or browsing for it."),(0,a.kt)("li",{parentName:"ul"},"Compress a folder containing the files you want to submit into a zip file (zip file name does not matter),\nand submit that zip file via drag-and-drop or browsing for it.")),(0,a.kt)("p",null,"Gradescope will look for files with specific names, and those names are case-sensitive.\nSo if in the instructions we ask for a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.py"),",\nthen Gradescope will not recognize ",(0,a.kt)("inlineCode",{parentName:"p"},"Hello.py"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.txt"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"hello.py.txt"),"."),(0,a.kt)("h4",{id:"group-submissions"},"Group Submissions"),(0,a.kt)("p",null,"When a group of people is submitting an assignment,\nonly one person should submit the solution."),(0,a.kt)("p",null,'They should then add the other members to that submission.\nOn the Gradescope page for a submission there should be a\n"+ Add Group Member" button by the name in the upper-right.'),(0,a.kt)("p",null,"This is important because if multiple people submit,\nour similarity checker will see identical submissions and flag that."),(0,a.kt)("h4",{id:"unlimited-attempts"},"Unlimited attempts"),(0,a.kt)("p",null,"You have unlimited attempts for our auto-graded assignments."),(0,a.kt)("p",null,"This means that you should submit early and often in order\nto be confident that code you are writing as you go passes all of our tests.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Academic Honesty")),(0,a.kt)("p",null,"All work that is completed in this assignment is your own group's.\nYou may talk to other students about the problems you are to solve,\nhowever, you may not share code in any way, except with your partner(s).\nWhat you submit ",(0,a.kt)("strong",{parentName:"p"},"must be your own group's work"),"."),(0,a.kt)("p",null,"You may not use any code that is posted on the internet. If you are\nnot sure it is in your best interest to contact the course staff.\nWe will be using software that will compare your code to other students in the course\nas well as online resources.\nIt is very easy for us to detect similar submissions and will result in\na failure for the exercise or possibly a failure for the course.\nPlease, do not do this.\nIt is important to be academically honest and submit your work only.\nPlease review the ",(0,a.kt)("a",{parentName:"p",href:"https://www.umass.edu/honesty/"},"UMass Academic Honesty Policy and\nProcedures")," so you are aware of what this means."),(0,a.kt)("p",null,"Copying partial or whole solutions, obtained from other students or elsewhere, is academic dishonesty.\nDo not share your code with your classmates, and do not use your classmates' code.\nIf you are confused about what constitutes academic dishonesty you should re-read the course policies.\nWe assume you have read the course policies in detail and\nby submitting this project you have provided your virtual signature in agreement with these policies.")),(0,a.kt)("h2",{id:"about"},"About"),(0,a.kt)("p",null,"Labs will generally be designed to either reinforce something from class,\nor to teach something that may be useful for you but isn't tested in any way."),(0,a.kt)("p",null,"This lab is about string formatting.\nYou will not be tested on this going forward, but it is something that is good to know."),(0,a.kt)("p",null,"String formatting can help you print information in a way that is more legible or easier to make sense of."),(0,a.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Learn about f-Strings"),(0,a.kt)("li",{parentName:"ol"},"Learn to format float decimal places"),(0,a.kt)("li",{parentName:"ol"},"Learn to format floats in scientific notation"),(0,a.kt)("li",{parentName:"ol"},"Learn about variables within formatting"),(0,a.kt)("li",{parentName:"ol"},"Learn about string alignment")),(0,a.kt)("h3",{id:"estimated-size"},"Estimated Size"),(0,a.kt)("p",null,"3 functions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first could reasonably be done with 2 lines, 1 of which is a print statement."),(0,a.kt)("li",{parentName:"ul"},"The second could reasonably be done with 6 lines, 3 of which are print statements."),(0,a.kt)("li",{parentName:"ul"},"The third could reasonably be done with 6 lines, 4 of which are print statements.")),(0,a.kt)("h2",{id:"preamble"},"Preamble"),(0,a.kt)("p",null,"String formatting is an umbrella term for techniques and machinery that lets\nyou print things with a little more control/specificity of how they are printed."),(0,a.kt)("p",null,"This in generally useful making things more aesthetically pleasing and\nthus easier to make sense of at-a-glance."),(0,a.kt)("p",null,"A reference for a number of formatting options can be found\n",(0,a.kt)("a",{parentName:"p",href:"https://fstring.help/"},"here"),"."),(0,a.kt)("p",null,"Below are some slides with examples of f-Strings:"),(0,a.kt)(o.O,{lec_src:n(38180).Z,mdxType:"PowerPoint"}),(0,a.kt)("h2",{id:"assignment"},"Assignment"),(0,a.kt)("h3",{id:"01-partner-up-if-youd-like"},(0,a.kt)("strong",{parentName:"h3"},"0.1. Partner up, if you'd like")),(0,a.kt)("p",null,"Labs and assignments from here on may be done in groups of up to 3.\nOnly the Python Setup lab had to be done alone,\nbecause we wanted to ensure everyone had the environment set up."),(0,a.kt)("h3",{id:"02-make-a-file-named-formatpy-1-point"},(0,a.kt)("strong",{parentName:"h3"},"0.2. Make a file named ",(0,a.kt)("inlineCode",{parentName:"strong"},"format.py")," (1 point)")),(0,a.kt)("p",null,"Pretty self explanatory. Make a folder for the lab, open it in VSCode, make the file."),(0,a.kt)("p",null,"Now that you know about functions, most work will be in one file that has multiple functions.\nThis is hopefully less annoying to write, and definitely easier and faster to test."),(0,a.kt)("p",null,"The file for this lab's work is ",(0,a.kt)("inlineCode",{parentName:"p"},"format.py"),". And don't forget author comments at the top, e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# Authors   : Jared Yeager,         Tim Richards\n# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu\n# Spire IDs : 31415926,             27182818\n")),(0,a.kt)("h3",{id:"11-implement-short_exp-1-point"},(0,a.kt)("strong",{parentName:"h3"},"1.1. Implement ",(0,a.kt)("inlineCode",{parentName:"strong"},"short_exp()")," (1 point)")),(0,a.kt)("p",null,"This function will take two floats, ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"exponent"),".\n(You may call them whatever you want, I originally just used ",(0,a.kt)("inlineCode",{parentName:"p"},"f1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"f2"),", but these names are clearer)."),(0,a.kt)("p",null,"The function will print ",(0,a.kt)("inlineCode",{parentName:"p"},"<base> ^ <exponent> = <result>"),", where:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<base>")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"base")," formatted to always give 2 decimal places"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<exponent>")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"exponent")," formatted to always give 2 decimal places"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<result>")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"base ** exponent")," formatted to always give 2 decimal places\n",(0,a.kt)("em",{parentName:"li"},"in scientific notation")," (the ",(0,a.kt)("inlineCode",{parentName:"li"},"'e'")," needs to be lower case)"),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"'^'")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"=")," should also have space around them.")),(0,a.kt)("p",null,"For example, a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"short_exp(31.415926, 27.182818)"),"\nshould print ",(0,a.kt)("inlineCode",{parentName:"p"},"31.42 ^ 27.18 = 4.97e+40"),"."),(0,a.kt)("p",null,"You may assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"base")," is always positive."),(0,a.kt)("p",null,"If you would like, you may use this starter code to make sure the spacing is appropriate:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Short_Exp_Starter",live_py:!0,title:"Short_Exp_Starter"},'def short_exp(base:float, exponent:float) -> None:\n  result = base ** exponent\n  print(f"{base} ^ {exponent} = {result}")\n\nshort_exp(31.415926, 27.182818)\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Hints")),(0,a.kt)("p",null,"Hard to be subtle with hints for this one, so these are almost answers."),(0,a.kt)("p",null,"Formatting floats in decimal form:\ncheck out the ",(0,a.kt)("em",{parentName:"p"},"Padding and truncating numbers")," section of the ",(0,a.kt)("a",{parentName:"p",href:"https://fstring.help"},"linked page"),"."),(0,a.kt)("p",null,"Formatting floats in scientific notation:\ncheck out the ",(0,a.kt)("em",{parentName:"p"},"Other number representations")," section of the ",(0,a.kt)("a",{parentName:"p",href:"https://fstring.help"},"linked page"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Testing")),(0,a.kt)("p",null,"Stick some calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"short_exp()")," in your file (outside, and below the function)\nand click the play/run button in the upper-right, assuming the extensions are installed\n(or open VSCode's terminal and run ",(0,a.kt)("inlineCode",{parentName:"p"},"python3 format.py"),").\nThe outputs should have 2 decimal places each,\nand the result should be in scientific notation.")),(0,a.kt)("h3",{id:"12-modify-short_exp-1-point"},(0,a.kt)("strong",{parentName:"h3"},"1.2 Modify ",(0,a.kt)("inlineCode",{parentName:"strong"},"short_exp()")," (1 point)")),(0,a.kt)("p",null,"Generalizing functions when you can to make them more flexible can be quite useful.\nSo let's generalize ",(0,a.kt)("inlineCode",{parentName:"p"},"short_exp()"),"."),(0,a.kt)("p",null,"Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"short_exp()")," to take in a third parameter, ",(0,a.kt)("inlineCode",{parentName:"p"},"precision"),", that is ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," by default.\n(You may choose any name, the tests depend in it being the third parameter, not having a specific name.)"),(0,a.kt)("p",null,"Instead of everything having 2 decimal place printed, have ",(0,a.kt)("inlineCode",{parentName:"p"},"precision")," decimal places printed."),(0,a.kt)("p",null,"For example, a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"short_exp(31.415926, 27.182818, 3)"),"\nshould print ",(0,a.kt)("inlineCode",{parentName:"p"},"31.416 ^ 27.183 = 4.975e+40"),"."),(0,a.kt)("p",null,"You may assume ",(0,a.kt)("inlineCode",{parentName:"p"},"precision")," is a positive int."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Hints")),(0,a.kt)("p",null,"Check out the ",(0,a.kt)("em",{parentName:"p"},"Parametrized formats")," section of the ",(0,a.kt)("a",{parentName:"p",href:"https://fstring.help"},"linked page"),".")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Testing")),(0,a.kt)("p",null,"Same as before, except make sure to try varying values for the ",(0,a.kt)("inlineCode",{parentName:"p"},"precision")," field,\nand try some calls without that third field at all (to make sure the default precision is 2).")),(0,a.kt)("h3",{id:"2-fix-long_div-2-points"},(0,a.kt)("strong",{parentName:"h3"},"2. Fix ",(0,a.kt)("inlineCode",{parentName:"strong"},"long_div()")," (2 points)")),(0,a.kt)("p",null,"You a given a function that currently prints long division in only a semi-formatted manner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=Long_Div_Starter",live_py:!0,title:"Long_Div_Starter"},'def long_div(dividend:int, divisor:int) -> None:\n  result = dividend // divisor\n  length_dividend = len(str(dividend)) # how long the dividend is\n  length_divisor = len(str(divisor)) # how long the divisor is\n  horizontal_bar = length_dividend * \'-\'\n  width = length_divisor + 1 + length_dividend\n  \n  print(f"{result}")\n  print(f"{horizontal_bar}")\n  print(f"{divisor}|{dividend}")\n\nlong_div(12865, 415)\n')),(0,a.kt)("p",null,"This function takes two ints, a ",(0,a.kt)("inlineCode",{parentName:"p"},"dividend")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor"),",\nand should print out the long-division in a more appropriately formatted manner."),(0,a.kt)("p",null,"For example, a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"long_div(12865, 415)")," should result in the following being printed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"       31\n    -----\n415|12865\n")),(0,a.kt)("p",null,"You task is to ensure the nicely formatted version is displayed."),(0,a.kt)("p",null,"There are three lines of output total."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The last of the three is the ",(0,a.kt)("inlineCode",{parentName:"li"},"divisor"),", followed by a vertical line (",(0,a.kt)("inlineCode",{parentName:"li"},"'|'"),"), followed by the ",(0,a.kt)("inlineCode",{parentName:"li"},"dividend"),".\nThe length of this line also determines the total width of the area alignment occurs in.\n(You may thus find the ",(0,a.kt)("inlineCode",{parentName:"li"},"width")," variable helpful.)"),(0,a.kt)("li",{parentName:"ul"},"The second line is a right-justified series of dashes (",(0,a.kt)("inlineCode",{parentName:"li"},"'-'"),") that covers exactly the ",(0,a.kt)("inlineCode",{parentName:"li"},"dividend"),".\nthe ",(0,a.kt)("inlineCode",{parentName:"li"},"horizontal_bar")," variable already holds this, it just needs to be right-aligned."),(0,a.kt)("li",{parentName:"ul"},"The first line is the result of the division (note the use of integer division), right justified.\nThe ",(0,a.kt)("inlineCode",{parentName:"li"},"result")," variable already holds this, it just needs to be right-aligned.")),(0,a.kt)("p",null,"You may assume both inputs are positive integers and that the ",(0,a.kt)("inlineCode",{parentName:"p"},"dividend")," is a multiple of the ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Hints")),(0,a.kt)("p",null,"The only new formatting tool is string alignment,\nwhich can be found under the ",(0,a.kt)("em",{parentName:"p"},"Padding/aligning strings")," section."),(0,a.kt)("p",null,"Parametrized formats are still relevant."),(0,a.kt)("p",null,"Also, as intuition for the future, note where those variables came from:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We need the result of the division the show on top (",(0,a.kt)("inlineCode",{parentName:"li"},"result"),")."),(0,a.kt)("li",{parentName:"ul"},"We need a horizontal bar as long as the dividend (",(0,a.kt)("inlineCode",{parentName:"li"},"horizontal_bar"),"),"),(0,a.kt)("li",{parentName:"ul"},"thus we need to know the length of the dividend (",(0,a.kt)("inlineCode",{parentName:"li"},"length_dividend"),")."),(0,a.kt)("li",{parentName:"ul"},"Everything needs to be right-aligned to the width (",(0,a.kt)("inlineCode",{parentName:"li"},"width"),"),"),(0,a.kt)("li",{parentName:"ul"},"thus we need to know the length of the dividend and divisor (",(0,a.kt)("inlineCode",{parentName:"li"},"length_divisor"),")."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Testing")),(0,a.kt)("p",null,"As before, just try some calls and see if they look right.\nTry some dividends of various length the make sure the bar on the second line adjusts correctly."),(0,a.kt)("p",null,"Make sure the first input to the function is multiple of the second.\nI would actually pick two ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", get the product,\nand pass that product and an operand to the function. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"num1 = 31\nnum2 = 415\nlong_div(num1 * num2, num2)\n")),(0,a.kt)("p",null,"That way you know what the answer should be and know the ",(0,a.kt)("inlineCode",{parentName:"p"},"divisor")," divides the ",(0,a.kt)("inlineCode",{parentName:"p"},"dividend"),".")),(0,a.kt)("h3",{id:"3-implement-long_addsub-0-points"},(0,a.kt)("strong",{parentName:"h3"},"3. Implement ",(0,a.kt)("inlineCode",{parentName:"strong"},"long_addsub()")," (0 points)")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The overall lab has been deemed too long,\nand this portion has been relegated to being purely extra content.")),(0,a.kt)("p",null,"This function will take two ints, ",(0,a.kt)("inlineCode",{parentName:"p"},"n_top")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"n_bottom")," say (names unimportant),\nand prints a formatted long-addition/subtraction-looking final result.\nA reasonable function prototype might be ",(0,a.kt)("inlineCode",{parentName:"p"},"long_addsub(n_top:int, n_bottom:int) -> None"),"."),(0,a.kt)("p",null,"For example, a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"long_addsub(31415, 926)")," would result in the following being printed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," 99900\n+  314\n------\n100214\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"long_addsub(990, -1000)")," would would result in the following being printed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  990\n-1000\n-----\n-  10\n")),(0,a.kt)("p",null,"There are a lot of constraints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The numbers are right-justified."),(0,a.kt)("li",{parentName:"ul"},"The second number's sign should always be visible and used to indicate addition/subtraction."),(0,a.kt)("li",{parentName:"ul"},"The addition/subtraction symbol should never have a digit from the first number directly over it (it may have a digit from the result under it though)."),(0,a.kt)("li",{parentName:"ul"},"If the result is negative, it's sign is left-justified.")),(0,a.kt)("p",null,"You may assume the both numbers are integers and that the first one is positive."),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Hints")),(0,a.kt)("p",null,"In terms of formatting machinery, this is made possible by abusing some formatting options under the ",(0,a.kt)("em",{parentName:"p"},"Signed numbers")," section."),(0,a.kt)("p",null,"The hardest part of this is figuring out what the width of the formatted region is supposed to be. Here's some more articulation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You need the first number and one more space (for the second number's sign) to fit"),(0,a.kt)("li",{parentName:"ul"},"You need the second number and its sign to fit"),(0,a.kt)("li",{parentName:"ul"},"You need the third number (and it's sign if it is negative) to fit")),(0,a.kt)("p",null,"These length can be a bit trick to obtain, but calling ",(0,a.kt)("inlineCode",{parentName:"p"},"len()")," on formatted f-Strings based on these number will allow you to get length when the sign is always there, for instance."),(0,a.kt)("p",null,"And for ensuring all these guarantees, well, there's always the ",(0,a.kt)("inlineCode",{parentName:"p"},"max()")," function.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,(0,a.kt)("b",null,"Testing")),(0,a.kt)("p",null,"There are enough interesting condition here that we want to make some tests to hit all our cases of concern."),(0,a.kt)("p",null,"Each of those constraints may offer some test cases."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The numbers are right-justified.")),(0,a.kt)("p",null,"Anything can be used to test this, so moving on."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The second number's sign should always be visible and used to indicate addition/subtraction.")),(0,a.kt)("p",null,"This means we want a test where the second number is positive, and a test where it is negative."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The addition/subtraction symbol should never have a digit from the first number directly over it (it may have a digit from the result under it though).")),(0,a.kt)("p",null,"I look at this and see the variable here being how long the first number is relative to the second.\nI would want to test when the first number is longer, where they are the same length,\nand where the second number is longer."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the result is negative, it's sign is left-justified.")),(0,a.kt)("p",null,"In order to check this, you need an example that has a negative result,\nand where that result is small enough in magnitude that the sign would be visibly moved.")),(0,a.kt)("h2",{id:"grading-scale"},"Grading Scale"),(0,a.kt)("p",null,"Below are how many points translate to what level on the 5-point scale."),(0,a.kt)("h3",{id:"1-below-standards-0-1-points"},"1: Below Standards: 0-1 points"),(0,a.kt)("p",null,"This is the number of points gained by only making the file."),(0,a.kt)("h3",{id:"2-approaching-standards-2-points"},"2: Approaching Standards: 2 points"),(0,a.kt)("p",null,"This is the number of points gained by making the file and\ncompleting only half of the first exercise."),(0,a.kt)("h3",{id:"3-meeting-standards-3-4-points"},"3: Meeting Standards: 3-4 points"),(0,a.kt)("p",null,"This is the number of points gained by making the file and\ncompleting the first exercise."),(0,a.kt)("h3",{id:"4-exceeding-standards-5-points"},"4: Exceeding Standards: 5 points"),(0,a.kt)("p",null,"This is the number of points gained by making the file\ncompleting the first and second exercises."))}m.isMDXComponent=!0},22408:(e,t,n)=>{n.d(t,{O:()=>o});var i=n(67294),a=n(52263);const o=e=>{let{lec_src:t}=e;const n=`https://view.officeapps.live.com/op/embed.aspx?src=${(0,a.Z)().siteConfig.url+t}`;return i.createElement("div",{style:{marginBottom:"4rem"}},i.createElement("iframe",{src:n,width:"100%",height:"600px",frameborder:"0"}),i.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"},"Download Powerpoint"))}},38180:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/Lab2_CICS110-8205d988d239ae2166992ab9e7ba95ce.pptx"}}]);