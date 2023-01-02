# Timeline

## 🗓️ Week 01 - Introduction to Programming

### 📖 Reading

- Chapter 1: Introduction to Programming

### 📚 Primary Topics

- Course administration
  - Moodle (where deadlines and submission instructions are)
  - Website (where information is - guides, assignments, etc.)
  - Communication (Piazza, Trello - email)
  - Grades (how we compute grades)
  - Collaboration policy (collaborate, submit as groups, annotate with names)
  - Gradescope (how to submit - link to guide)
  - Tokens and how they work
  - Submission policy
    - Submit to Gradescope or Moodle
    - Accommodation students fit into submission (1 day, no penalty)
  - Extensions (email to Trello - be explicit about what is acceptable)
- What is programming (computer/software organization overview)
- Programming with Python
- Development environment and setup (this is a demonstration)
  - VSCode
  - Basic I/O
  - Python shell
  - Writing a program
  - Running a program
  - What is an error and what does it look like
- Demonstrate a program that uses a GUI using `tkinter`. The purpose of this is to excite students that they will be able to write a similar program.

### 🧶 Thread

- Nothing during the first week.

### 🧱 Lectures

- **01 Introduction**: introduction to the course, administrative details, submission policy, collaboration, tokens, Gradescope, Moodle, website, an example of a Python program using a GUI.
- **02 Programming and Python**: basics of a Python program, what is a source file, how do you open/create one in VSCode, basic I/O, how to write a program from scratch, what is an error, identifying errors, what is an algorithm, basics of writing a program to solve a problem.

### 🧪 Lab

- Python setup and writing a program from scratch to solve a problem.
- Explain what an editor like VSCode is and why it is useful for the programmer.
- Explain how to create a folder, create a Python file, start coding.

### 📝 Notes

- Only use `print`, nothing fancy
- Only use `input`, nothing fancy

## 🗓️ Week 02 - Variables and Expressions

### 📖 Reading

- Chapter 2: Variables and Expressions

### 📚 Primary Topics

- Variables and assignments
- Identifiers
- Objects
- Numeric types
- Arithmetic expressions
- Python expressions
- Division and modulo
- Module basics
- Math module`
- Representing text
- GUI

### 🧶 Thread

- `assert` is introduced here, this will be a common thread. Use it to prove everything that is introduced. `assert a == 4`.
- Control flow diagrams are introduced, this will continue forward
- Memory trace diagrams are introduced, this will continue forward
- Basic GUI modals are introduced using [tkinter.simpledialog](https://docs.python.org/3/library/dialog.html#module-tkinter.simpledialog).

### 🧱 Lectures

- **03 Arithmetic Expressions**: arithmetic expressions and various operators. Spend some time on modulo - students often are confused about this.
- **04 Variables and Assignments**: cover variables, assignments, identifiers. Introduce control flow diagrams and memory traces. Introduce `assert` to prove a variable contains a value. This will require the `==` operator. This is ok. Explain what equivalence means here. Two values are equivalent, two variables referencing the same value are equivalent. Variables do not hold values, they refer to places in memory that hold values. Introduce a module (Math) explain how it is used. Introduce `tkinter` and show how we can get input using a GUI.

### 🧪 Lab

- How to use `assert` with basic variables and their values
- How to use VSCode effectively
- How to use the VSCode debugger with basic variables and their values
  - Step, step over, step in, etc.
  - Watching variables and their values
  - Do not talk about the stack (to early for that, wait until functions)
- Broken programs and invalid variable names - exercise: fix these
- Complete an exercise using `assert` and the debugger

### 📝 Notes

- Transition students form basic I/O to GUI. Explain the difference and remind them that both are very important to know about in future classes. They must be able to run a Python program from the command line as well as from within VSCode.

## 🗓️ Week 03 - Types

### 📖 Reading

- Chapter 3: Types

### 📚 Primary Topics

- String basics
- List basics
- Tuple basics
- Set basics
- Dictionary basics
- Type conversions
- Binary numbers
- String formatting

### 🧶 Thread

- Use memory diagram to show the different representations of data types.
- Use control flow diagrams to explain any code that is written
- Use `assert` to prove the code that is written.
- Use GUI modals from `tkinter` for I/O.
- Use console I/O to show an alternative to GUI.
- Show how to use the VSCode debugger.

### 🧱 Lectures

- **05 Data Types**: covers the string and list data types. Demonstration programs that use them, show control flow and memory diagrams, use GUI modals for I/O along with console examples.
- **06 Representation**: Show the representation of types, how to convert from one to another (string to int/float), binary numbers, and the formatting of strings. Again, use control flow diagrams and memory diagrams to demonstrate how execution works and how the data is organized in memory. Use GUI modals for I/O along with console examples.

### 🧪 Lab

- How to use `assert` effectively
- How to use VSCode effectively
- How to use the VSCode debugger
- Complete an exercise using `assert` and the debugger

### 📝 Notes

- It is important to emphasize to students the control flow diagram and memory trace diagrams to gain understanding on how programs flow and what data structures look like in memory. This is an important developmental part of creating a mental model of computation. This should not be underestimated. You **must** demonstrate control flow and memory diagrams at this stage. It will provide the necessary scaffolding for the next topic.
- Use the debugger to trace through the code. Connect it with the control flow and memory diagram. Show them the basics of understanding the code through the debugger. Connect the changes in program state to what is displayed in the debugger.

## 🗓️ Week 04 - Branching

### 📖 Reading

- Chapter 4: Branching

### 📚 Primary Topics

- Basics of if/else branches
- What are "equal" values
- Detecting equal values with branches
- Detecting ranges with branches
- Detecting ranges using *logical operators*
- Detecting ranges with gaps
- Detecting multiple features with branches
- Comparing data types with common errors
- Membership and identity operators
- Order of evaluation
- Code blocks and indentation
- Conditional expressions

### 🧶 Thread

- Control flow diagrams! This topic should start with control flow diagrams! Before any code is written, a control flow diagram should be introduced and displayed for students. Students must understand the concept of *decision* and how it changes execution.
- Equality is an important concept. What does it mean for one thing to be equal to another? There must be a discussion of equality - is a string `"1"` equal to the integer `1`? Why or why not? This must be hammered into their heads.
- Logical operators must be demonstrated through the use of control flow diagrams. What does it mean for one object to be less than another? How does this impact the flow of control in a program? Diagrams are critical here!
- The `assert` statement must be used as part of the presentation to demonstrate that we are proving that variables contain the values we expect. Examples should include branching that is predictable and values that should be held in variables at the end of program.

### 🧱 Lectures

- **07 Branching Basics with Equality**: Making decisions in an algorithm. Control flow diagrams demonstrating branching and what it looks like. Use simple I/O (input/print) to write a program along with a control flow diagram. Discuss equality and what it means. How are objects equal? How are they not equal? Demonstrate all of this with a control flow diagram and memory trace.
- **08 Conditional Branching with Inequality**: Making decisions in an algorithm. Control flow diagrams demonstrating branching with inequality. How does this relate to ranges and gaps in decisions. Demonstrate this with a program in Python, a control flow diagram, and a memory trace. Discuss various predicates such as equality, inequality, membership and identity with `in`. Demonstrate a program detecting multiple features along with a control flow diagram, memory trace, and the Python code that goes along with it.

### 🧪 Lab

- What do you do when your code doesn't work?
- Demonstrate debugging a program with a broken conditional
  - Use print statements
  - Use the VSCode debugger
- What do you do when you are stuck? Use the "Getting Unstuck Guide" guide to show students what to do when they are not sure what is wrong.
- Complete a debugging exercise.

### 📝 Notes

- It is imperative that students become very familiar with control flow diagrams at this state. They will be required to use them to answer questions in tests.
- It is critical that students understand completely memory tracing and how it works so they can understand how a program changes state. They will need to know this to complete exams.
- Students must be using `assert` for everything they write
- Students must be comfortable with the debugger at this stage. Debugging conditional statements is a critical skill.

## 🗓️ Week 05 - Loops

### 📖 Reading

- Chapter 5: Loops

### 📚 Primary Topics

- Loops (general)
- While loops
- Counting
- For loops
- The `range()` function
- While vs for loops
- Nested loops
- Developing programs incrementally
- Break and continue
- Loop else (special to Python - perhaps cover this in lab?)
- The `enumerate()` function

### 🧶 Thread

- Control flow diagrams! This topic should start with control flow diagrams! Before any code is written, a control flow diagram should be introduced and displayed for students. Students must understand the concept of *looping* and how it changes execution.
- The `assert` statement must be used as part of the presentation to demonstrate that we are proving that variables contain the values we expect. Examples should include looping that is predictable and values that should be held in variables at the end of program.
- Present pre/post conditions of the loop and the concept of a *loop invariant*. Show students how to use `assert` to prove properties of a loop before and after each iteration of a loop.
- Introduce the notion of architectural design of programs. Although these are simple programs at the moment, introducing an element of design and thinking about a program as a physical artifact is important so students become aware of decisions they make in their design. Think before you code!

### 🧱 Lectures

- **09 Looping Basics**: Present this material using a control flow diagram for a loop (before any code is written). Explain how the basic looping mechanism works and how it is executed by a machine. Introduce a while loop using Python and show how it works using a control flow diagram and memory trace.
- **10 Looping Details**: Introduce the for loop and the `range()` function as an alternative to the while loop. Explain how they are different and when each should be used. Discuss incremental development of a program and the importance of program design before implementation using control flow diagrams and architectural drawings. These diagrams will be simple at this stage, but it will start students off on the right foot by thinking before coding. This is something that should be emphasized through out the rest of the course.

### 🧪 Lab

- What do you do when your loop is broken?
- How to debug a loop with prints.
- How to debug a loop with the VSCode debugger.
- When you are stuck, what do you do? Review the "Getting Unstuck Guide"
- Complete a debugging exercise

### 📝 Notes

- Again, control flow diagrams and memory tracing! Super important for students to understand completely. They need a mental model for program execution. Design, draw, and explain before coding. Students should not code until they understand the design. This should be emphasized.
- Continue to emphasize `assert` with everything that is presented. We must ensure that students know how to "prove" that their code works.
- Debugging is crucial - use the VSCode debugger liberally with examples and demonstrations. Make sure to use `print` to show students how to see how their program is changing state.
- Reiterate what to do when a student is stuck and point them to the "Getting Unstuck Guide".

## 🗓️ Week 06 - Branching and Loops

### 📖 Reading

- Chapter 8: More on Strings, Lists, and Dictionaries

### 📚 Primary Topics

- Advanced branching and loop examples
- Nested data types (arrays in arrays, dictionaries of dictionaries of arrays)
- Debugging branching and loops
- Counting how many steps a loops takes (intuitive efficiency) with branches
- When to use which kind of loop and/or branch
- When to use `break` and `continue`
- Loops for processing input (loop until some condition user inputs)
  - branches nested in loops (command line / input processing)
- Loops for processing data (loop until end of data)
  - branches evaluating that data
- Nested loops for processing nested objects (an array of strings).
- Command line arguments
- List comprehensions

### 🧶 Thread

- Control flow diagrams and state tracing is a must here. Students will need to fully understand how to look at Python code and translate it into a control diagram and trace it. Likewise, they will need to be able to translate a control flow diagram into Python code.
- Focusing on `assert` and loop invariants is a must. Every loop should have a comment indicating the invariant(s) and an assert testing the invariant. We want students to understand what an invariant is so they are prepared for future theoretical courses.
- Pre/post conditions for loops.
- Students must have an intuitive sense of how many steps a loop takes to complete. This week should focus on the steps of a nested loop and develop some simple formulas to quantify the number of steps taken to complete a loop given some input. Do not discuss Big-O here, but develop an intuitive notion.

### 🧱 Lectures

- **11 Nested Data Types**: This lecture focuses on nested data types. Lists of lists, dictionaries of dictionaries, dictionaries of lists, lists of dictionaries, etc. Memory diagrams are a must here. Students must have a visual of what this looks like in memory. Examples of why nested data types are important.
- **12 Nested Iteration**: Advanced examples of iterating over nested data types. Use control flow diagrams and memory tracing to help students see the what is going on. Discuss the number of steps it takes to complete a loop intuitively. Demonstrate an application that uses nested iteration using a GUI.

### 🧪 Lab

- An in-depth look at the various methods available to the different data types.
- String methods
- List methods
- Dictionary methods
- Examples of how they are used
- Complete an exercise using a selection of data type methods

### 📝 Notes

- We want students to be confident in their ability to use loops and conditionals. To do that we need to make sure that they have ownership of the material. This requires lots of exercises. They should complete many exercises involving loops and branching.
- There are many methods associated with built-in data types. They should be presented in the context of examples rather than just a list of what exists (boring). Solid examples that exemplify the associated data type methods is important to provide context and clarity for the **why** and not just the **how**.

## 🗓️ Week 07 - Functions and Files

### 📖 Reading

- Chapter 6: Functions
- Chapter 10: Files

### 📚 Primary Topics

- User-defined functions
- Top-down design / bottom-up design
- Dynamic typing
- Reasons for defining functions
- Mathematical functions and function stubs
- Functions with branches and loops
- Function arguments
- Keyword arguments and default parameter values
- Common errors
- Arbitrary argument lists
- Multiple return values
- Documenting functions
- Interacting with file systems
- Reading files
- Writing files
- Binary data
- Command-line arguments
- The `with` statement
- Comma separated value files (CSV)

### 🧶 Thread

- Using `assert` to test function parameter values
- Drawing control flow diagrams for a function
- Memory tracing with functions (separate memory for now, a stack for recursion)
- Use the debugger to trace through a program
- Use Python Tutor to demonstrate memory tracing

### 🧱 Lectures

- **13 Functions**: Introduce the basics of functions. Focus on top-down design and how to decompose a problem into smaller parts. Define functions for the smaller parts. How input/output to functions work. What does all of this look like in a control flow diagram?
- **14 Functions and Files**: Keyword arguments, multiple return values, documenting functions. Combine this with reading/writing files. Introduce CSV files and why they are important and how are they used. Relate this to data science and the built-in library for processing CSV files.

### 🧪 Lab

- How do you debug a function? Demonstrate how to debug a function using print statements as well as the VSCode debugger. Show students how to see the values of parameters and local variables and how to set break points in a function and how to step through and into a program with functions.
- An in-depth look at the CSV module. Explore how CSV file are read and written to. Look at how to process them. Look at how to read a CSV file into a dictionary and process the information in that format.
- Complete an exercise using the CSV module where students need to write several functions extracting information from the CSV data after it has been read in. After manipulation, the data is written to a different CSV file. Students should draw control flow diagrams and state diagrams for their functions.

### 📝 Notes

- At this point in the class we want students to have a firm grasp of programming using the basic primary constructs of the language: branching, loops, and functions. We also want them to know how to evaluate a problem and solve it using a programming language. We want them to be able to break that problem down into smaller parts and write functions. We also want them to be capable of using the built-in types and functions to solve those problems.
- Students should know how to proceed when they are stuck. They should have the tools from the previous 6 weeks that will help them debug a program and determine where the problem is. We should probably have a rule that they can't ask a question unless they can narrow the scope of the issue to 5 lines of code.

## 🗓️ Week 08 - Functions, Modules, and Event Loops

### 📖 Reading

- Chapter 7: Function Scope, Function Objects, and Modules

### 📚 Primary Topics

- Scope of variables and functions
- Namespaces and scope resolution
- Functions are objects
- Modules
- Finding modules
- Importing specific names form modules
- Executing modules as scripts
- Reloading modules
- Packages
- Standard library
- Event loops

### 🧶 Thread

- Using `assert` to test function parameter values
- Drawing control flow diagrams for a function and emphasize scope
- Memory tracing with functions (separate memory for now, a stack for recursion)
- Use the debugger to trace through a program
- Use Python Tutor to demonstrate memory tracing

### 🧱 Lectures

- **15 Variable Scope and Function Objects**: Discuss variable scope and what that means. How does variable scope change in the context of functions? What is a namespace and why is that an important aspect of software engineering?
- **16 Modules and Event Loops**: What is a module and why are they important? How do you use a module? How do you write a module? What is an interface to that module? How does this differ from the standard library? What is an event loop and how does it relate to a GUI? Write a GUI that uses an event loop.

### 🧪 Lab

- Design a module with an interface for creating a GUI.
- Write a module confirming to the interface that uses an event loop and GUI.
- How do you debug that module and GUI?
- Where can you use print statements? How do you use the debugger?

### 📝 Notes

- Introduce event loops with `tkinter` here
- Connect function objects to event handlers in `tkinter`.
- Combine functions, event handlers, loops, branching, and files into a single example that demonstrates all of them.

## 🗓️ Week 09 - Modules and Recursion

### 📖 Reading

### 📚 Primary Topics

### 🧶 Thread

### 🧱 Lectures

### 🧪 Lab

### 📝 Notes

## 🗓️ Week 10 - Recursion

### 📖 Reading

### 📚 Primary Topics

### 🧶 Thread

### 🧱 Lectures

### 🧪 Lab

### 📝 Notes

## 🗓️ Week 11 - Strings, Lists, and Dictionaries

### 📖 Reading

### 📚 Primary Topics

### 🧶 Thread

### 🧱 Lectures

### 🧪 Lab

### 📝 Notes

## 🗓️ Week 12 - Classes

### 📖 Reading

### 📚 Primary Topics

### 🧶 Thread

### 🧱 Lectures

### 🧪 Lab

### 📝 Notes

## 🗓️ Week 13 - Classes and Exceptions

### 📖 Reading

### 📚 Primary Topics

### 🧶 Thread

### 🧱 Lectures

### 🧪 Lab

### 📝 Notes
