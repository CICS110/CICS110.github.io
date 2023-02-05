---
title: "Lab 01: Python Setup"
---

# Hello, World!

## About

Almost as a tradition, the first program someone learning to write code is likely to write is some variation of a [Hello World program](https://en.wikipedia.org/wiki/%22Hello%2C_World!%22_program). 

So that's what you're doing! The real "assignment" here is more about installing things, setting up a programming envoronment, learning about the autograder, et cetera.

### Learning Objectives

1. Install Python
2. Set up Integrated Development Environment (IDE)
3. Write first program in python
4. Become more familiar with Gradescope

### Estimated Size

One file, with one line of code and three lines of comments.

## Assignment

We're going to really break this one up into pieces.

For this--and only this--assignment, you must work alone.
You are totally welcome to talk to people nearby, everyone just needs to make their own submissions
We want everyone to have everything installed and in working order,
and to know the the Gradescope process looks like.

### **0.1. Install Python**

Follow [the relevant guide](../guides/installing-python) on the website to install Python.

### **0.2. Set up VSCode**

Follow [these guides](../guides/vscode) on the website to install and set of the editor, VSCode.

### **1. Make a file named `hello.py`**

Now the actual assignment can begin.

Make a folder for this assignment somewhere of your choosing.

Open that folder in VSCode (Open VSCode and select `File > Open Folder`, navigate to that folder you made and select it).

Make a new file named `hello.py` (select `File > New File`, and name it when prompted).

### **2. Add author information to `hello.py`**

We want you to put your name, UMass email, 
and who you worked with at the top of all assignments
so that we know who wrote each file (when working in groups)
and to help us connect each student with their email on Gradescope
(sometimes non-UMass emails are used,
and it's difficult to find the UMass one in that case)

That can be done with *comments*. Comments are lines that are ignored by the computer.

You start a comment (in python) with the `#` character.
Anything on that line after that character is ignored.

So specifically, we want:
* `# Author` or `# Authors` to be the start of the first line of the file.
* `# Email` or `# Emails` to be the start of the second line of the file.
* `# Spire ID` or `# Spire IDs` to be the start of third line of the file.
* each of the above followed by the relevant information.

For example, the first three lines of a file may look like this:
```py
# Author: Jared Yeager
# Email: jyeager@cs.umass.edu
# Spire ID: 31415926
```



**Note**: this is expected of every file going forward.

### **3. Add `print()` statement to `hello.py`**

Finally, the actual code.

After the comments from earlier add the line
```
print("Hello, World!")
```

`print()`, as you may have guessed, is a command that prints the input (to the terminal). The input is surrounded by parentheses.

The quotes around the input, `"Hello, World!"`, indicate it is text (a string, more technically).

**Note:** When showing code in general, we will use a mono-spaced font. When talking about "commands" like `print()`, we will have the `()` afterward to denote that it is a command. (Technically, these are called "functions", but that lecture is next week.)

<details>
<summary><b>Testing</b></summary>

While we have autograded tests for you, we don't want to encourage dependence on the autograder. We want to try and impart testing and debugging skills so that you are equipped in any circumstance.

To that end, we will have testing recommendations/suggestions where we can, so that you can test your code.

In this case, running the code and making sure "Hello, World!" is printed is the natural thing to do. Running code and making sure it does what you expect is the essence of testing. (Finding out where it first deviates from what you expect is the essence of debugging)

To run the code, open the built-in terminal (select `Terminal > New Terminal`) and type in `python3 hello.py` in the terminal.

You should now see:
```
$ python3 hello.py
Hello, World!
```

This `$` sign notation is not literal, it represents lines you entered input on.

</details>

### **4. Submit `hello.py` to Gradescope**

Log in to [Gradescope](https://www.gradescope.com), select the relevant assignment, and submit `hello.py`

Gradescope has [a guide](https://help.gradescope.com/article/ccbpppziu9-student-submit-work) on submitting
[assignments like this](https://help.gradescope.com/article/ccbpppziu9-student-submit-work#submitting_code).

**Note**: in general, you will submit all `.py` files for a relevant assignment at once.

## Extra Details

There will be some times where we like to provide extra details or information--stuff that may not be covered in the course itself or that will be covered later. **None of this is necessary to know at this point**.

### The Code

It's all well and good to have you write `print("Hello, World!")`, but what do the pieces of this mean?

`print()` is a "function". We will learn more about functions next week. But for some intuition: you can think of them as commands; you can think of them as ways to invoke re-usable, named snippets of code; or you can think of them as black boxes that take inputs (like functions in math), spit out outputs (like functions in math), and have side effect (*un*-like function in math). In this last view, `print()` takes in something to print, returns nothing, and has the side-effect of printing the input.

`"Hello, World!"` is a "string". We should have already learned about them (but in case not...). But for some intuition: there is a notion of numbers and text as different "types", strings are the text-like type. To indicate something is text, we wrap it in quotation mark. **Note:** these are straight quotation marks. `"text"` will work, `'text'` will also work; the following will not work: `` `text` ``, `“text”`, and `‘text’`. No back-ticks, nothing that curls.

And so `print("Hello, World!")` passes the string (text) `"Hello, World!"` to the function `print()`, which prints it.

### The Terminal

What is the terminal?

The terminal is an interface to out computers that allows us to give it commands through text, which it will make a program to accomplish. It also allows us to give those programs input, and for those programs to give us output.

It is a tool for us to run and interact with programs.

### Running the Code

What does the terminal command `python3 hello.py` mean?

The `python3` part is a command that says "run the [python 3 interpreter](https://docs.python.org/3/tutorial/interpreter.html)".

The `hello.py` part is giving the file `hello.py` to the python 3 interpreter to, well, interpret.

The command can be read as "run `python3` with input `hello.py`.
