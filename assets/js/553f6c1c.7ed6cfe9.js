"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(r,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,s(s({ref:t},d),{},{components:n})):a.createElement(h,s({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=c;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={title:"Lab 04: Slicing"},s="Lab 04: Slicing",o={unversionedId:"collections/index",id:"collections/index",title:"Lab 04: Slicing",description:"General Information",source:"@site/main/labs/04-collections/index.md",sourceDirName:"04-collections",slug:"/collections/",permalink:"/main/labs/collections/",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab 04: Slicing"},sidebar:"tutorialSidebar",previous:{title:"Lab 03: Assert",permalink:"/main/labs/assert/"}},r={},p=[{value:"General Information",id:"general-information",level:2},{value:"General Submission Info",id:"general-submission-info",level:4},{value:"Group Submissions",id:"group-submissions",level:4},{value:"Unlimited attempts",id:"unlimited-attempts",level:4},{value:"About",id:"about",level:2},{value:"Learning Objectives",id:"learning-objectives",level:3},{value:"Estimated Size",id:"estimated-size",level:3},{value:"Preamble",id:"preamble",level:2},{value:"Assignment",id:"assignment",level:2},{value:"<strong>0. Set up file named <code>slicing.py</code></strong>",id:"0-set-up-file-named-slicingpy",level:3},{value:"<strong>1. Implement <code>get_first()</code> (1 point)</strong>",id:"1-implement-get_first-1-point",level:3},{value:"<strong>2. Implement <code>get_last()</code> (1 point)</strong>",id:"2-implement-get_last-1-point",level:3},{value:"<strong>3. Implement <code>get_all_but_first_and_last()</code></strong>",id:"3-implement-get_all_but_first_and_last",level:3},{value:"<strong>4. Implement <code>get_all_but_first()</code> (1 point)</strong>",id:"4-implement-get_all_but_first-1-point",level:3},{value:"<strong>5. Implement <code>get_all_but_last()</code> (1 point)</strong>",id:"5-implement-get_all_but_last-1-point",level:3},{value:"<strong>6. Implement <code>get_indices_1_4_7</code> (1 point)</strong>",id:"6-implement-get_indices_1_4_7-1-point",level:3},{value:"<strong>7. Implement <code>get_odd_indices()</code> (1 point)</strong>",id:"7-implement-get_odd_indices-1-point",level:3},{value:"<strong>8. Implement <code>get_even_indices</code> (1 point)</strong>",id:"8-implement-get_even_indices-1-point",level:3},{value:"<strong>9. Implement <code>get_all_but_first_and_last_reversed()</code> (1 point)</strong>",id:"9-implement-get_all_but_first_and_last_reversed-1-point",level:3},{value:"Grading Scale",id:"grading-scale",level:2},{value:"1: Below Standards: 0-2 points",id:"1-below-standards-0-2-points",level:3},{value:"2: Approaching Standards: 3-4 points",id:"2-approaching-standards-3-4-points",level:3},{value:"3: Meeting Standards: 5-7 points",id:"3-meeting-standards-5-7-points",level:3},{value:"4: Exceeding Standards: 8-9 points",id:"4-exceeding-standards-8-9-points",level:3}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-04-slicing"},"Lab 04: Slicing"),(0,i.kt)("h2",{id:"general-information"},"General Information"),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Submitting to the Auto-Grader")),(0,i.kt)("p",null,"For auto-grading homework assignments in the course,\nwe use ",(0,i.kt)("a",{parentName:"p",href:"https://www.gradescope.com"},"Gradescope"),"."),(0,i.kt)("h4",{id:"general-submission-info"},"General Submission Info"),(0,i.kt)("p",null,"When submitting files to Gradescope,\nyou need to submit all the files you want graded at once."),(0,i.kt)("p",null,"You can do this in several ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select all files you want to submit and drag and drop them in the submission area when prompted."),(0,i.kt)("li",{parentName:"ul"},"Browse your files when prompted by Gradescope and select all files you want to submit."),(0,i.kt)("li",{parentName:"ul"},"Directly compress all the files you want to submit into a zip file (zip file name does not matter),\nand submit that zip file via drag-and-drop or browsing for it."),(0,i.kt)("li",{parentName:"ul"},"Compress a folder containing the files you want to submit into a zip file (zip file name does not matter),\nand submit that zip file via drag-and-drop or browsing for it.")),(0,i.kt)("p",null,"Gradescope will look for files with specific names, and those names are case-sensitive.\nSo if in the instructions we ask for a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.py"),",\nthen Gradescope will not recognize ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello.py"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.txt"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"hello.py.txt"),"."),(0,i.kt)("h4",{id:"group-submissions"},"Group Submissions"),(0,i.kt)("p",null,"When a group of people is submitting an assignment,\nonly one person should submit the solution."),(0,i.kt)("p",null,'They should then add the other members to that submission.\nOn the Gradescope page for a submission there should be a\n"+ Add Group Member" button by the name in the upper-right.'),(0,i.kt)("p",null,"This is important because if multiple people submit,\nour similarity checker will see identical submissions and flag that."),(0,i.kt)("h4",{id:"unlimited-attempts"},"Unlimited attempts"),(0,i.kt)("p",null,"You have unlimited attempts for our auto-graded assignments."),(0,i.kt)("p",null,"This means that you should submit early and often in order\nto be confident that code you are writing as you go passes all of our tests.")),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Academic Honesty")),(0,i.kt)("p",null,"All work that is completed in this assignment is your own group's.\nYou may talk to other students about the problems you are to solve,\nhowever, you may not share code in any way, except with your partner(s).\nWhat you submit ",(0,i.kt)("strong",{parentName:"p"},"must be your own group's work"),"."),(0,i.kt)("p",null,"You may not use any code that is posted on the internet. If you are\nnot sure it is in your best interest to contact the course staff.\nWe will be using software that will compare your code to other students in the course\nas well as online resources.\nIt is very easy for us to detect similar submissions and will result in\na failure for the exercise or possibly a failure for the course.\nPlease, do not do this.\nIt is important to be academically honest and submit your work only.\nPlease review the ",(0,i.kt)("a",{parentName:"p",href:"https://www.umass.edu/honesty/"},"UMass Academic Honesty Policy and\nProcedures")," so you are aware of what this means."),(0,i.kt)("p",null,"Copying partial or whole solutions, obtained from other students or elsewhere, is academic dishonesty.\nDo not share your code with your classmates, and do not use your classmates' code.\nIf you are confused about what constitutes academic dishonesty you should re-read the course policies.\nWe assume you have read the course policies in detail and\nby submitting this project you have provided your virtual signature in agreement with these policies.")),(0,i.kt)("h2",{id:"about"},"About"),(0,i.kt)("p",null,"This lab is centered around the sequence data type ",(0,i.kt)("strong",{parentName:"p"},"lists"),".\nYou will practice indexing and slicing lists through 9 short exercises. "),(0,i.kt)("h3",{id:"learning-objectives"},"Learning Objectives"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Practice list indexing."),(0,i.kt)("li",{parentName:"ol"},"Practice list slicing to retrieve sublists.")),(0,i.kt)("h3",{id:"estimated-size"},"Estimated Size"),(0,i.kt)("p",null,"9 functions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each function is 2 lines of code and of the form:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'def function_name(l):\n  length = len(l)\n  return l[...]  # replace "..."\n')),(0,i.kt)("h2",{id:"preamble"},"Preamble"),(0,i.kt)("p",null,"A list is a sequence data type. Sequence data types are designed to store many pieces of data. In particular, lists can store multiple values of the same or various data types in one variable. "),(0,i.kt)("p",null,"For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list = ["cats", 24, "pizza", 8.1, False]\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"random_list")," has 5 values: 2 strings, 1 integer, 1 float, and 1 boolean. We can get the length of ",(0,i.kt)("inlineCode",{parentName:"p"},"random_list")," by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"len()")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"len(random_list)  # 5\n")),(0,i.kt)("p",null,"We can get specific values from the list by ",(0,i.kt)("strong",{parentName:"p"},"indexing"),". To index, square brackets are placed after the list name with an index number between the opening and closing brackets. The leftmost value of a list is at index 0. The index values then increment by 1 from left to right."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list[0]  # "cats"\nrandom_list[1]  # 24\nrandom_list[2]  # "pizza"\nrandom_list[3]  # 8.1\nrandom_list[4]  # False\n')),(0,i.kt)("p",null,"If you try to reference an index that does not exist (i.e., a value greater than or equal to the length of the list), then an ",(0,i.kt)("strong",{parentName:"p"},"IndexError")," will occur. "),(0,i.kt)("p",null,"For instance, the below will cause an IndexError:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"random_list[5]  # IndexError\n")),(0,i.kt)("p",null,"Note that negative values are NOT invalid! In fact, it can be very useful to use negative indexing. For instance, -1 refers to the last index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"random_list[-1]  # False\n")),(0,i.kt)("p",null,"If you want to get a sublist of the original list (i.e., several values), then you can use ",(0,i.kt)("strong",{parentName:"p"},"slicing"),". Similar to indexing, slicing uses square brackets. However, rather than one index value, you will place multiple index values between the brackets, each divided by a colon."),(0,i.kt)("p",null,"For instance, the below will slice from index 1 up to (but not including) index 3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list[1:3]  # [24, "pizza"]\n')),(0,i.kt)("p",null,"If you don't specify a second value, then python will assume you mean all of the remaining values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list[1:]  # [24, "pizza", 8.1, False]\n')),(0,i.kt)("p",null,"Likewise, if you don't specify a first value, then python will assume you mean all values until (but not including) the second value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list[:3]  # ["cats", 24, "pizza"]\n')),(0,i.kt)("p",null,"3's a crowd ... well not when it comes to slicing! You can specify a third value that is the \"step\" value. To demonstrate, let's expand ",(0,i.kt)("inlineCode",{parentName:"p"},"random_list")," to have a length of 8:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list = ["cats", 24, "pizza", 8.1, False, True, "Taco", 7]\nrandom_list[1:6:2]  # [24, 8.1, True]\n')),(0,i.kt)("p",null,"Starting at index 1 and going to (but not including) index 6, the sublist will contain items in increments of step 2. 24 is in index 1 so it's added to the sublist. Then 2 indices down is 8.1, which is added to the sublist. Then 2 indices down is True, which is added to the sublist. And then we're at index 6 so no more values are added."),(0,i.kt)("p",null,"It is valid to have only start and step values (i.e., no stop value):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"random_list[1::3]  # [24, False 7]\n")),(0,i.kt)("p",null,"It is also valid to have a negative step value. A negative step value is useful for stepping backwards through the list, starting at the start index and moving towards the stop value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'random_list[6:1:-2]  # ["Taco", False "pizza"]\n')),(0,i.kt)("p",null,"It's go time! As you go through the lab, ",(0,i.kt)("strong",{parentName:"p"},"use the below print statements to test your functions"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"l = [0,1,2,3,4,5,6,7,8,9]\nprint(get_first(l))                           # 0\nprint(get_last(l))                            # 9\nprint(get_all_but_first_and_last(l))          # [1,2,3,4,5,6,7,8]\nprint(get_all_but_first(l))                   # [1,2,3,4,5,6,7,8,9]\nprint(get_all_but_last(l))                    # [0,1,2,3,4,5,6,7,8]\nprint(get_indices_1_4_7(l))                   # [1,4,7]\nprint(get_odd_indices(l))                     # [1,3,5,7,9]\nprint(get_even_indices(l))                    # [0,2,4,6,8]\nprint(get_all_but_first_and_last_reversed(l)) # [8,7,6,5,4,3,2,1]\n")),(0,i.kt)("h2",{id:"assignment"},"Assignment"),(0,i.kt)("h3",{id:"0-set-up-file-named-slicingpy"},(0,i.kt)("strong",{parentName:"h3"},"0. Set up file named ",(0,i.kt)("inlineCode",{parentName:"strong"},"slicing.py"))),(0,i.kt)("p",null,"You know the drill at this point. This lab is in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"slicing.py")),(0,i.kt)("h3",{id:"1-implement-get_first-1-point"},(0,i.kt)("strong",{parentName:"h3"},"1. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_first()")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_first()")," that takes in a list and returns the first value in the list."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},"apples"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Hint")),(0,i.kt)("p",null,"Indexing starts at 0, not 1.")),(0,i.kt)("h3",{id:"2-implement-get_last-1-point"},(0,i.kt)("strong",{parentName:"h3"},"2. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_last()")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_last()")," that takes in a list and returns the last value in the list."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},"cherries"),". If the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},"dates"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Hint")),(0,i.kt)("p",null,"Lists can vary in size so you don't want to hardcode an index value (e.g., don't do something like this: ",(0,i.kt)("inlineCode",{parentName:"p"},"list[4]"),"). Rather, you should allow the function to be flexible by having it calculate the last index. You can do this by getting the length of the list using ",(0,i.kt)("inlineCode",{parentName:"p"},"len()"),". But be careful of an ",(0,i.kt)("inlineCode",{parentName:"p"},"IndexError: list index out of range")," error. If indexing begins at 0, what would the last index of a list be equal to?")),(0,i.kt)("h3",{id:"3-implement-get_all_but_first_and_last"},(0,i.kt)("strong",{parentName:"h3"},"3. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_all_but_first_and_last()"))),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_all_but_first_and_last()")," that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the first and last values."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["bananas", "cherries", "dates"]'),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Hint")),(0,i.kt)("p",null,"Slicing time! When slicing, you need to specify a range of indices. Remember that the second index (the stop index) is NOT included in the range.")),(0,i.kt)("h3",{id:"4-implement-get_all_but_first-1-point"},(0,i.kt)("strong",{parentName:"h3"},"4. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_all_but_first()")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_all_but_first()")," that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the first value."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["bananas", "cherries", "dates", "eggplant"]'),"."),(0,i.kt)("h3",{id:"5-implement-get_all_but_last-1-point"},(0,i.kt)("strong",{parentName:"h3"},"5. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_all_but_last()")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_all_but_last()")," that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the last value."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates"]'),"."),(0,i.kt)("h3",{id:"6-implement-get_indices_1_4_7-1-point"},(0,i.kt)("strong",{parentName:"h3"},"6. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_indices_1_4_7")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_indices_1_4_7()")," that takes in a list and returns a sublist with the values at indices 1, 4, and 7."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant", "figs", "grapes", "honeydew", "icacina"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["bananas", "eggplant", "honeydew"]'),"."),(0,i.kt)("p",null,"You may assume that the list has at least 8 elements (so indices 1, 4, and 7 all have elements)."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Hint")),(0,i.kt)("p",null,"How are the numbers 1, 4, and 7 related? 1 + ? = 4. 4 + ? = 7. "),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},'"One small step for man, three small steps for get_indices_1_4_7()" - Neil Slicestrong.'))),(0,i.kt)("h3",{id:"7-implement-get_odd_indices-1-point"},(0,i.kt)("strong",{parentName:"h3"},"7. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_odd_indices()")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_odd_indices()")," that takes in a list and returns a sublist with all values in the odd indices of the original list. "),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["bananas", "dates"]'),"."),(0,i.kt)("h3",{id:"8-implement-get_even_indices-1-point"},(0,i.kt)("strong",{parentName:"h3"},"8. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_even_indices")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_even_indices()")," that takes in a list and returns a sublist with all values in the even indices of the original list. "),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "cherries", "eggplant"]'),"."),(0,i.kt)("h3",{id:"9-implement-get_all_but_first_and_last_reversed-1-point"},(0,i.kt)("strong",{parentName:"h3"},"9. Implement ",(0,i.kt)("inlineCode",{parentName:"strong"},"get_all_but_first_and_last_reversed()")," (1 point)")),(0,i.kt)("p",null,"Write a function named ",(0,i.kt)("inlineCode",{parentName:"p"},"get_all_but_first_and_last_reversed()")," that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the first and last values AND it is in reverse order."),(0,i.kt)("p",null,"For example, if the list is ",(0,i.kt)("inlineCode",{parentName:"p"},'["apples", "bananas", "cherries", "dates", "eggplant"]'),", then the output should be ",(0,i.kt)("inlineCode",{parentName:"p"},'["dates", "cherries", "bananas"]'),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,(0,i.kt)("b",null,"Hint")),(0,i.kt)("p",null,"How can a negative step value be used here?")),(0,i.kt)("h2",{id:"grading-scale"},"Grading Scale"),(0,i.kt)("p",null,"Below are how many points translate to what level on the 5-point scale."),(0,i.kt)("h3",{id:"1-below-standards-0-2-points"},"1: Below Standards: 0-2 points"),(0,i.kt)("h3",{id:"2-approaching-standards-3-4-points"},"2: Approaching Standards: 3-4 points"),(0,i.kt)("h3",{id:"3-meeting-standards-5-7-points"},"3: Meeting Standards: 5-7 points"),(0,i.kt)("h3",{id:"4-exceeding-standards-8-9-points"},"4: Exceeding Standards: 8-9 points"))}u.isMDXComponent=!0}}]);