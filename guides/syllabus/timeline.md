# Timeline

## Week 01 - Introduction to Programming

### Primary Topics

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

### Thread

- Nothing during the first week.

### Lectures

- **01 Introduction**: introduction to the course, administrative details, submission policy, collaboration, tokens, Gradescope, Moodle, website, an example of a Python program using a GUI.
- **02 Programming and Python**: basics of a Python program, what is a source file, how do you open/create one in VSCode, basic I/O, how to write a program from scratch, what is an error, identifying errors, what is an algorithm, basics of writing a program to solve a problem.

### Lab

- Python setup and writing a program from scratch to solve a problem.
- Explain what an editor like VSCode is and why it is useful for the programmer.
- Explain how to create a folder, create a Python file, start coding.

### Notes

- Only use `print`, nothing fancy
- Only use `input`, nothing fancy

## Week 02 - Variables and Expressions

### Primary Topics

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

### Thread

- `assert` is introduced here, this will be a common thread. Use it to prove everything that is introduced. `assert a == 4`.
- Control flow diagrams are introduced, this will continue forward
- Memory trace diagrams are introduced, this will continue forward
- Basic GUI modals are introduced using [tkinter.simpledialog](https://docs.python.org/3/library/dialog.html#module-tkinter.simpledialog).

### Lectures

- **03 Variables and Assignments**: cover variables, assignments, identifiers. Introduce control flow diagrams and memory traces. Introduce `assert` to prove a variable contains a value. This will require the `==` operator. This is ok. Explain what equivalence means here. Two values are equivalent, two variables referencing the same value are equivalent. Variables do not hold values, they refer to places in memory that hold values.
- **04 Arithmetic Expressions**: arithmetic expressions and various operators. Spend some time on modulo - students often are confused about this. Show an example of a program with a control flow diagram and memory diagram. Introduce a module (Math) explain how it is used. Introduce `tkinter` and show how we can get input using a GUI.

### Notes

- Transition students form basic I/O to GUI. Explain the difference and remind them that both are very important to know about in future classes. They must be able to run a Python program from the command line as well as from within VSCode.

## Week 03 - Types

### Primary Topics

- String basics
- List basics
- Tuple basics
- Set basics
- Dictionary basics
- Type conversions
- Binary numbers
- String formatting

### Thread

- Use memory diagram to show the different representations of data types.
- Use control flow diagrams to explain any code that is written
- Use `assert` to prove the code that is written.
- Use GUI modals from `tkinter` for I/O.
- Use console I/O to show an alternative to GUI.
- Show how to use the VSCode debugger.

### Lectures

- **05 Data Types**: covers the string and list data types. Demonstration programs that use them, show control flow and memory diagrams, use GUI modals for I/O along with console examples.
- **06 Representation**: Show the representation of types, how to convert from one to another (string to int/float), binary numbers, and the formatting of strings. Again, use control flow diagrams and memory diagrams to demonstrate how execution works and how the data is organized in memory.

### Lab

- How to use `assert` effectively
- How to use VSCode effectively
- How to use the VSCode debugger
- Complete an exercise using `assert` and the debugger

### Notes

- It is important to emphasize to students the control flow diagram and memory trace diagrams to gain understanding on how programs flow and what data structures look like in memory. This is an important developmental part of creating a mental model of computation. This should not be underestimated. You **must** demonstrate control flow and memory diagrams at this stage. It will provide the necessary scaffolding for the next topic.
- Use the debugger to trace through the code. Connect it with the control flow and memory diagram. Show them the basics of understanding the code through the debugger. Connect the changes in program state to what is displayed in the debugger.

## Week 04 - Branching

### Primary Topics

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

### Thread

- Control flow diagrams! This topic should start with control flow diagrams! Before any code is written, a control flow diagram should be introduced and displayed for students. Students must understand the concept of *decision* and how it changes execution.
- Equality is an important concept. What does it mean for one thing to be equal to another? There must be a discussion of equality - is a string `"1"` equal to the integer `1`? Why or why not? This must be hammered into their heads.
- Logical operators must be demonstrated through the use of control flow diagrams. What does it mean for one object to be less than another? How does this impact the flow of control in a program? Diagrams are critical here!
- The `assert` statement must be used as part of the presentation to demonstrate that we are proving that variables contain the values we expect. Examples should include branching that is predictable and values that should be held in variables at the end of program.

### Lectures

- **07 Branching Basics with Equality**: Making decisions in an algorithm. Control flow diagrams demonstrating branching and what it looks like. Use simple I/O (input/print) to write a program along with a control flow diagram. Discuss equality and what it means. How are objects equal? How are they not equal? Demonstrate all of this with a control flow diagram and memory trace.
- **08 Conditional Branching with Inequality**: Making decisions in an algorithm. Control flow diagrams demonstrating branching with inequality. How does this relate to ranges and gaps in decisions. Demonstrate this with a program in Python, a control flow diagram, and a memory trace. Discuss various predicates such as equality, inequality, membership and identity with `in`. Demonstrate a program detecting multiple features along with a control flow diagram, memory trace, and the Python code that goes along with it.

### Lab

- What do you do when your code doesn't work?
- Demonstrate debugging a program with a broken conditional
  - Use print statements
  - Use the VSCode debugger
- What do you do when you are stuck? Use the "Getting Unstuck Guide" guide to show students what to do when they are not sure what is wrong.
- Complete a debugging exercise.

### Notes

- It is imperative that students become very familiar with control flow diagrams at this state. They will be required to use them to answer questions in tests.
- It is critical that students understand completely memory tracing and how it works so they can understand how a program changes state. They will need to know this to complete exams.
- Students must be using `assert` for everything they write
- Students must be comfortable with the debugger at this stage. Debugging conditional statements is a critical skill.

## Week 05 - Loops

### Primary Topics

- Loops (general)
- While loops
- Counting
- For loops
- The `range()` function
- While vs for loops
- Nested loops
- Developing programs incrementally
- Break and continue
- Loop else
- The `enumerate()` function

### Thread

- Control flow diagrams! This topic should start with control flow diagrams! Before any code is written, a control flow diagram should be introduced and displayed for students. Students must understand the concept of *looping* and how it changes execution.
- The `assert` statement must be used as part of the presentation to demonstrate that we are proving that variables contain the values we expect. Examples should include looping that is predictable and values that should be held in variables at the end of program.
- Present pre/post conditions of the loop and the concept of a *loop invariant*. Show students how to use `assert` to prove properties of a loop before and after each iteration of a loop.
- Introduce the notion of architectural design of programs. Although these are simple programs at the moment, introducing an element of design and thinking about a program as a physical artifact is important so students become aware of decisions they make in their design. Think before you code!

### Lectures

- **09 Looping Basics**: Present this material using a control flow diagram for a loop (before any code is written). Explain how the basic looping mechanism works and how it is executed by a machine. Introduce a while loop using Python and show how it works using a control flow diagram and memory trace.
- **10 Looping Details**: Introduce the for loop and the `range()` function as an alternative to the while loop. Explain how they are different and when each should be used. Discuss incremental development of a program and the importance of program design before implementation using control flow diagrams and architectural drawings. These diagrams will be simple at this stage, but it will start students off on the right foot by thinking before coding. This is something that should be emphasized through out the rest of the course.

### Lab

- What do you do when your loop is broken?
- How to debug a loop with prints.
- How to debug a loop with the VSCode debugger.
- When you are stuck, what do you do? Review the "Getting Unstuck Guide"
- Complete a debugging exercise

### Notes

- Again, control flow diagrams and memory tracing! Super important for students to understand completely. They need a mental model for program execution. Design, draw, and explain before coding. Students should not code until they understand the design. This should be emphasized.
- Continue to emphasize `assert` with everything that is presented. We must ensure that students know how to "prove" that their code works.
- Debugging is crucial - use the VSCode debugger liberally with examples and demonstrations. Make sure to use `print` to show students how to see how their program is changing state.
- Reiterate what to do when a student is stuck and point them to the "Getting Unstuck Guide".

## Week 06 - Branching and Loops

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 07 - Files and Functions

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 08 - Functions and Modules

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 09 - Modules and Recursion

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 10 - Recursion

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 11 - Strings, Lists, and Dictionaries

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 12 - Classes

### Primary Topics

### Thread

### Lectures

### Lab

### Notes

## Week 13 - Classes and Exceptions

### Primary Topics

### Thread

### Lectures

### Lab

### Notes
