# Kobi's Design Doc for CICS 110

Preface: I made this as a way to organize my thoughts and to help me plan out the course. This was done primarily as an exercise so I can better understand the course content. I have no notion that any of this stuff is good, but it can be used if it seems helpful.


## Units:

### 1. Foundation of programming
#### Notes:
Learn Modules in a Lab? I think it would be a good lab assignment to learn how to use the math or the random library.
#### Goals:
- Introduce the course and instructor
- The model of a computer
- Computational thinking
- The basics of python
#### Content:
0. Introduction to the course and instuctor
1. Model of a computer
2. Computational thinking (how to read a program)
3. Literals - ints, floats, strings
4. Expressions (arithmetic only: +, -, *, /, //, %, **, parenthesis)
    - Order of operations
    - int vs float
5. Variables
6. Methods on all literals+variables - type, id
7. Methods on specific literal types (str, int, float)

### 2. Data types
#### Goals:
- Sequence types
- other types (dictionaries, sets but not Booleans or None)
- Mutability and Ordering and what this means on a lower level (memory/model of computer)
- Basic operations on these types
#### Content:
1. Sequence Types: Lists, Tuples, Strings
3. Indexing, len, +, *, slicing
2. Mutability in the global frame - related to the model of a computer
4. List and String methods
4. Dictionaries and Sets, and their operations

### 3. Conditional Control flow
#### Notes:
- For all pieces of control flow, there will need to be multiple practice assignments involving going to/from diagrams. This is in addition to practice problems.
#### Goals:
- Introduce boolean logic
- Introduce if elif else statements
- Understanding Control Flow Diagrams
    1. Go from problem to control flow diagram
    2. Go from control flow diagram to program
    3. Go from program to control flow diagram
    4. Go from control flow diagram to problem in words
#### Content:
1. Booleans - True, False, and, or, not
2. Comparison operators - ==, !=, <, >, <=, >=
3. Other ways to make booleans - is, is not, in, not in
4. If statements - if, elif, else (nested if statements)
5. Detecting ranges of values - if 0 <= x <= 10
5. Making Control Flow Diagrams

### 4. Looping Control Flow
#### Notes:
- For all pieces of control flow, there will need to be multiple practice assignments involving going to/from diagrams. This is in addition to practice problems.
#### Goals:
- While and for loops (with nesting)
- Understanding Control Flow Diagrams
    1. Go from problem to control flow diagram
    2. Go from control flow diagram to program
    3. Go from program to control flow diagram
    4. Go from control flow diagram to problem in words
- Break and Continue and how they relate to control flow diagrams
- Common Mistakes with Loops
    - Infinite loops
    - Forgetting to increment/decrement
    - Forgetting to change the condition
- List and Dictionary Comprehensions
#### Content:
1. While loops - Extension of if statements
    - Do not go over else for while loops
2. Break and Continue (in the context of while loops)
3. For loops - for, range, in
    - Do not go over else for loops
    - Go over break and continue in the context of for loops
4. Comprehensions
    - List Comprehensions
    - Dictionary Comprehensions
    - Ternary Operator for Comprehensions
5. Miscellaneous 
    - Zip, Enumerate

### 5. Files and Modules
#### Goals:
- What is a module and how to import it
- Understand standard modules
- Introduce the idea of files and how they relate to the model of a computer
- Get students to write and read text from files
- What are csv files, and how to read and write them using the csv module
#### Content:
1. Importing a module
2. Using more complex modules (time, os, sys)
2. What is a file
3. Opening and Closing a file
4. Reading and Writing to a file
5. csv module
    - Reading and Writing to a csv file
    - DictReader and DictWriter

### 6. Functions
#### Goals:
- Understand that a function is a self contained piece of logic (high level)
- Understand that a function is a block of code that can be called multiple times (low level) and that it can save time while programming
- Understand that a function can take in parameters and return a value
- Understand None and how it relates to functions
- Basics of recursion (base case and recursive case)
- Understanding Control Flow Diagrams
    1. Go from problem to control flow diagram
    2. Go from control flow diagram to program
    3. Go from program to control flow diagram
    4. Go from control flow diagram to problem in words
- Introduce Making a Module and importing it
- Introduce concept of main python file

#### Content:
1. High level analogy of a function
2. Defining a function that receives no parameters and only prints
    - Calling a function
3. Defining a function that returns a value
    - difference between print and return
    - Returning tuples as a way to return multiple values
        - Unpacking tuples
4. None
    - What is it - a special value that represents nothing
    - How it relates to functions - functions that do not return anything return None
    - Why it is important - it is important to understand that functions always return something
    - How to check if a function returns None or a value is None
5. Defining a function that receives parameters
    - Positional parameters
    - Keyword parameters (Not sure if needed)
    - Default parameters
    - Variable number of parameters (Not sure if needed)
6. Making a module
    - What is a module
    - How to make a module
    - Main python file concept
6. Function documentation
    - Documenting the type of parameters
    - Documenting the type of return value
    - DocStrings in general
    - How to access the documentation of a function (in vscode for example)
    - How to read function documentation
6. Recursion (basics only)
    - Base case
    - Recursive case
    - Control Flow


### 7. Miscellaneous
#### Notes:
- This unit will be a catch all for anything that is not covered in the previous classes
- Likely 1 class period each (except classes which will be 2-3), and an associated practice assignment
#### Goals:
- Object Oriented Programming
    - Introduce the concept of a class
    - What is a class conceptually (high level)
    - What is a method
    - What is an attribute
- Event Driven Programming
    - Not sure what this is yet. Need to discuss with Tim. If event driven programming is async...await, see next note. Otherwise I will need to research this.
    - Note: Some languages have a built in concept of events, like js's promises. Python does not have this. But, there are libraries like asyncio, must be pip installed, that can be used for async...await keywords. 
- Introduce the concept of a library
    - What is a library
    - Pip and how to install a library
    - How to import a library
    - How to use a library
- Exceptions
    - What is an exception
    - How to handle an exception (try catch)
    - Common exceptions

#### Content:
1. Object Oriented Programming
    1. High level analogy of a class (object)
    2. Defining a class
    3. Instantiating a class and \_\_init__ method
    4. Defining and accessing attributes
    5. Defining and calling methods
    6. Overriding built in methods (str, mul, etc)
2. Event Driven Programming
    - See notes in goals section
3. Libraries
    1. What is a library
    2. Pip and installing a basic library (matplotlib maybe?)
    3. Importing a library
    4. Using a library
    5. Looking up documentation for a library
4. Exceptions
    1. What is an exception
    2. How to handle an exception (try except)
    3. Common exceptions

---

## What I'm Currently not covering 
#### (Unfinished, need ZyBooks chapters 7-13)
- String Aritmetic
    - Stuff like string concatenation, string multiplication, etc. I think this would be good for an introductory Lab or assignment to get them used to looking things up
- Type Casting
    - I think I might want to include this, but I forgot about it initially. It might be good for a lab, but I might just shove it in in lecture 3 or 4
- f-strings
    - Another good thing for an introductory lab or assignment. Students didn't really use this (and usually forgot about it) so I think it would be good to have them use it in a lab or assignment to practice it/ hopefully remember it.
- Compound Operators (zybooks 2.6)
    - I'll cover this in the while loop section, but not when it comes in the zybooks (unit 2)
    - This is stuff like +=, -=, etc. It seems like another thing I could mention in class, but I'll already be overwhelming them with new stuff at that point. I think it would be good for a lab or assignment, or as a trick they learn after they write ```z = z + 2``` a bunch of times.
- The number representation of a character (zybooks 2.10)
    - This seems really cool, but it would just be another thing I'm throwing at them. The biggest complaint I got last semester was that there were too many things thrown at them, and they forgot a bunch because they never used them. I think this would be good for a lab or throughout a big assignment, but not in class.
- named tuples (zybooks 3.3)
    - I've never used this. My friends who work with python every day have never used this. I don't think we should include this. Can we just skip it?
- Binary Numbers (zybooks 3.9)
    - I think this is too much detail for an intro class. This would never be needed in python realistically. We could expose it for a lab assignment or exercise, but if I include it in class students will just forget about it. It also doesn't really fit in with the rest of the unit, and we didn't cover it last semester.
- Comparison Chaining (zybooks 4.4)
    - Just found out about this while looking at the ZyBooks. It's pretty cool, apparently you can do `5 < x < 10` and it will check if `5 < x` and `x < 10`. I think this would be good for a lab or assignment, but it's just another forgettable detail.
- For in strings (zybooks 5.5)
    - I think this is a good thing to include in a lab or assignment, but I don't think it's necessary to include in class. It's just another thing to throw at them.

---

## What I'm covering but definitely needs to be practiced 
#### (Unfinished, need ZyBooks chapters 7-13)

- Everything!
    - Well not really, but here are a few things that I think need to be practiced a lot more than I can in class
- Basic Datatype methods (Methods on Strings, ints, floats, Sets, Lists, Dictionaries, Tuples)
    - I think we should have a lab or assignment where students have to look up and use a bunch of string, int, and float methods. I think this would be good practice for them to get used to looking things up. Also, introducing a grid of them in a class doesn't really help them remember them.
    - There are some basic things that will be included (indexing for example) but there are a bunch of string methods that they will only see in a grid of string methods, and they will forget about them unless they need to use them in practice.
- Floats vs Ints
    - They will need practice on this. Just teaching them the difference isn't enough. They need to practice it.
- Lists and Modulo
    - Modulo is useful for indexing lists so you don't index out of bounds. This would be good for an exercise
- Using the math and random modules
    - I expose them to this in the first week, but then don't touch it for a while. It would be good to use them occasionally in excercises so they don't forget about them.
- Boolean Arithmetic
    - I cover and, or, not and stuff, but in practice (especially for the problems they see which are introductory) they don't ususally need them. We should either have the excercises require complex boolean arithmetic, or have them straight up write code that matches a boolean arithmetic expression or something.
- While loops
    - All sorts of while loops with different step conditions.
- For loops
    - Looping through Lists I will expose in class, but dictionaries, sets, tuples, strings, and other things will need to be practiced. Lists should also be heavily, if not the most heavily, practiced.
- Reinforce How Range works
    - This is important to reinforce
- Comprehensions
    - This is a really useful feature, please give them a lot of practice with this. They shouldn't just practice list comprehensions, they should practice dictionary and set comprehensions as well. But, probably not generator comprehensions since that's a weird can of worms.
- Enumerate and Zip
    - I'll cover, but they are pretty useful (especially enumerate) so they should be practiced a lot.
- Nested Loops
    - Needs practice before they can understand.
- Designing function signatures
    - Students struggled with identifying what parameters a function should take in. They need practice with this.
    - They should also use docstrings to document their functions so they can list the return type and parameter types.
    - Or at least whatever this is called: (I think this is called a function signature, but the docstring is the documentation)
    ```python
    def is_num_and_str(num: int, string: str) -> bool:
    ```
    - Expose them to function stubs (the above syntax) so they can write the function signature before they write the function body too. This will help them design the function signature.
- Print Vs Return
    - Need to practice. Or, more likely, realize when they are printing and need to return

---

## Class timeline + Overview:

Budgeting 21 classes (1 class = 75 minutes) underbudgeting so things can be moved around if needed.

Note: Units 3 and 4 will need a **LOT** of practice work so the content can sink in.

| \# | Unit | Content |
| --- | --- | --- |
1|1| Intro + Model of Computer + Computational Thinking |
2|1| Literals + Hardcoded Expressions|
3|1| Variables + Object functions + Literal Methods|
4|2| Lists/Tuples/Strings + Operations + Mutability|
5|2| Dicts/Sets + Operations + Practice|
6|3| Booleans + if|
7|3| if..elif..else + Control Flow |
8|3| Practice Day: Control Flow + Debugger|
9|4| While loops + Break/Continue + Control Flow |
10|4| For Loops + Control Flow + Practice|
11|4| Comprehensions + Enumerate/Zip + Practice|
12|5| Importing modules + Standard Module Practice|
13|5| What is a file + Opening/Closing + Writing/Reading Text|
14|5| What is a csv file + csv module/DictReader + practice|
15|6| What is a function + Why + Functions without parameters + None|
16|6| Functions with Parameters + Control Flow + Practice|
17|6| Custom Modules + Documentation + Recursion |
18|7| OOP philosophy + Class analogy + Class with constructor + attributes/accessing/dictionary comparison |
19|7| Methods + Overloading + Practice |
20|7| What is Pip + Installing a library + Using the library + looking up documentation |
21|7| What is an Exception + Exception Vs Error + Types of Exceptions + Try/Except |

---


## Labs and Assignments

Note: I do not know what Labs/Assignments should look like. These are just my preconceived notions of what I expect them to be (mainly so I remember to ask in a meeting if these are accurate/require any changes).

### Assignments

I imagine there will be weekly assignments. Each assignment will contain:
1. 5 Exercises
    - These will be pretty straightforward (5-15 lines of code each)
    - They will have documentation for each exercise, and may introduce a simple concept or method on a data type. For example, there may be an exercise that introduces the string method: .toLower() which makes all letters lowercase.
2. 2 Challenges
    - These will be more complex (20+ lines of code, or using multiple concepts layered etc.)
    - Will have documentation and likely will
        - introduce a more complex method
        - Require a complex control flow
    - These should also feel (more so than the exercises) to be a meaningful task. I imagine some exercises will just be do X, without the context of why they are doing X. The challenges should have context, and should be a meaningful task.

### Labs

Each week will have a lab unless there is an exam (do we have exams?)

What I imagine a lab is:
1. Introduces a new concept:
    - Should be a new concept that is not directly covered in class. I want this because there are a bunch of concepts that I want to cover, but if I were to introduce them briefly in class only students will forget them. It will also make class periods more confusing to cover one-off methods or concepts, but they could totally be learned in the lab.
2. Collaboration:
    - Students should work in teams of 2 (3 if there is an odd number of people). According to people in 121, 4 is too many, so defiantly split to 2 groups of 2.
    - There should be periodic times in the lab where students should check in with a TA or UCA in the lab. This is to:
        1. Make sure they are on the right track
        2. Make sure all group members know whats going on
        3. Encourage discussion (hearing people talk also encourages discussion)

---

## Exam(s)

This is just my thoughts:

We had exams in the fall. However, I'm not sure about the value of exams. The purpose of an exam, from my understanding, is to verify how much each student understands about the topic.

Students will have weekly assignments, and will have a lab every week. I think that the assignments and labs will be a better indicator of how much each student understands. Students who don't understand a concept will struggle with that week's exercises, challenges, and Lab. This lack of understanding will therefore be present in the grade.

Additionally, most of the exam questions we had in the fall were very pinpointed. There were many questions on specific edge cases. This is what most CS exams end up with since a question needs to be specific to have a multiple choice answer. However, this also means that grades on the exam are very dependent on the student's ability to memorize edge cases. I don't think this is not a good indicator of how much the student understands the topic.

On the other hand, having a lab I think is a better environment to evaluate this. In a lab, students write a program. This program is a good indicator of how much the student understands the topic. This is because the program is a direct result of the student's understanding of the topic. If the student doesn't understand the topic, they will struggle to write the program. If they do understand the topic, they will be able to write the program.

A worry that could exist with this is that we are testing the group of 2-3 student's knowledge instead of an individual student. However, I think this is a good thing. In the real world, students will be working in groups. This is a good way to prepare them for that. Additionally, if we feel that the groups are inhibiting our ability to determine how much students understand, we can just make the lab sections that would have been exams, into labs without groups.

---

## The Website

Note: This is just my thoughts on the website (mainly so I don't forget). This just reflects my understanding of what we want on the website. So if something should be here, let me know because I probably forgot. Also, if something should not be here, let me know because there is probably a misunderstanding on my part.

1. Schedule
    - I wanted the office hours on the website so it was easy to view
        - Potentially with a react calendar component
    - I wanted the class schedule with topics for each class period
        - So students could get an understanding of what we were going to cover
2. Slides + In class content
    - I wanted the slides on the website so students could view them at home
        - Embedded PowerPoint slides or google slides
    - Code used in class
        - Doesn't need to be the result of live coding in class (but that would be cool)
        - Could be prepared in advance (an answer key for in-class activities basically)
        - Want to add functionality to run python code in the website. Doesn't look that bad and would be cool. For Me: Lookup live-brython again
3. Assignments: Exercises + Challenges
    - Should have the documentation on the website
    - Should store the base code (if there is any) on the website
4. Labs
    - Should have the documentation on the website
    - Should store the base code (if there is any) on the website
5. Guides
    - Wanted to address common issues (like how to install python) with guides on the website
    - Wanted to go over topics (like how to define a function) with guides on the website so it was easy for students to reference
6. People
    - Wanted to have a page with information on the instructors, TAs, and UCA's
        - Picture, name, email, office hours, etc.
7. Course Information
    - Wanted to have a page with information on the course
        - Course description, course goals, Unit overviews, etc.
    - Syllabus
8. Helpful Resources
    - Wanted to have a page with helpful resources outside of the course
        - Information on SI sessions, helpful youtube channels, tutoring from CICS 298A, etc.
9. Announcements
    - Wanted to have a page with announcements
        - Important announcements, reminders, etc.
10. Forms
    - Wanted to have a page with forms
        - Feedback form, Extension form, etc.



---

## Each Week: (Unfinished)

---

### Class 1:

#### Prior: N/A
#### Goal: Introduction, Introduce the Model of a Computer, First Program Demo

Content:
1. Introduction - Introduce Instructor
2. Syllabus
3. Course Goals
4. Model of a Computer
   - Goal: Build up to understanding each line of the first program
   - Has 5 Parts: Instructions, Memory, Input, Output, and Processor
5. Introduce Computational Thinking
   - Goal: Build up to understanding how to read the first program
   - Introduce how to read a program (top to bottom)
   - Analogy that a program is like a recipe
6. First Program Demo
    - Goals: 
       1. Identify how each line of the program relates to the model of a computer. 
       2. Understand how to read a program.
    - Program: Takes in user's name, stores it, and then prints out hello, {name}
    - Students should not understand the code entirely. Specifically, they won't understand the storage of the name in memory. Tell them that we will go over the details more later, and just brush over it saying that it is storing the name in memory, and it can be referenced with the variable (think math relation).

---

### Class 2:

#### Prior: Students should have downloaded and installed Python
#### Goal: Expressions with literals, a program to do hardcoded math

Note: I want to do expressions before variables. I had many students that struggled to realize that variables stored the result of an evaluated expression. I want to introduce variables after expressions with the goal of having the students understand why they might want to store the outputs of lines of code.

Content:
1. Review the first program
   - Goal: Reinforce the idea that a program is a recipe and that each line of code interacts with the model of a computer
   - Have students identify the parts of the model of a computer that each line of code interacts with, and walk through the program line by line again
2. Literals
    - Goal: Introduce the idea of literals to build up to using them in hardcoded expressions
    1. Starting from a model of a computer: Introduce the idea of a literal as a value that is not stored in memory
    2. Give examples of literals: 1,2,3 "hello"
       - Don't introduce types yet (overcomplicates things and not needed for goal)
    3. Diagram of literals in memory
3. Activity: Printing Literals
    - Goal: Get students used to making a file and coding in it. Have them print out literals
    1. Have students make a file (have them each pick their own name)
    2. Have them print out a literal for their name
    3. Have them print out a literal for their favorite food
    3. Have them print out a literal for their favorite number
    4. Have them print out a literal for their hobby (what they like to do in their free time)
    5. After they have done this, and have it working, have them show their neighbors to foster discussion and as an icebreaker
4. Hardcoded Expressions
    - Goal: Introduce Operators to form hardcoded math expressions
    1. Introduce operators: +, -, *, /, ** (don't do modulo or floor division yet so they can draw parallels to math)
    2. Introduce parenthesis, and how they can be used to change the order of operations
    2. Live Code: Instructor writes out hardcoded expressions and evaluates them. Things like 1 + 2, 1 + 2 * 3, 1 + 2 * 3 / 4, etc.
5. Closing Activity: Evaluating a complex math problem
    - Goal: Teach students that python can be used to evaluate complex math problems
    1. Put 2-3 complex math problems on the board with 5 digit numbers and stuff like that
    2. Have students evaluate the problems, tell them they can do it by hand, or with python (they will quickly realize it will be easier to do it with python)
    3. Have them compare their answers with a neighbor to make sure they are accurate
    4. Go over the problems and live code the solutions

---

### Class 3:
#### Prior: Students should understand literals and expressions
#### Goal: Introduce variables, assignment, input, then have them make write a program that stores and uses input

Content:
1. Review Hardcoded Math Expressions
    - Goal: Reinforce the idea that python can be used to evaluate complex math problems
    1. Have students evaluate new problems, tell them they can do it by hand, or with python (they will quickly realize it will be easier to do it with python)
    2. Have them compare their answers with a neighbor to make sure they are accurate
    3. Go over the problems and live code the solutions
2. Variables
    - Goal: Introduce the idea of variables as a way to store the result of an expression. Introduce how variables are stored in memory (Model of a Computer)
    1. 




---

## Concepts: (Unfinished)

#### Model of a Computer
- Has 5 Parts: Instructions, Memory, Input, Output, and Processor
- Students should be able to identify how each line of code interacts with the model of a computer

#### Computational Thinking
- Students should be able to identify how to read a program (top to bottom)