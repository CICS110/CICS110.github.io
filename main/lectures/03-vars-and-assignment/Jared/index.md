---
title: Section 04 (Jared Yeager)
---

# Variables

:::caution

This is not entirely complete, you may notice some TODOs I have left for myself.

I'm still trying to figure out how I want to get diagrams and multi-image diagrams in here.
But getting assignments out takes priority over that.

:::

## Assignment Updates

Stuff due this week:
* Reading 1: **Due Thursday 2/16**
* Quiz 2: **Due Thursday 2/16**
* Lab 2: **Due Friday 2/17**

Stuff due next week:
* HW 1: **Due Wednesday 2/22**
* Quiz 3: **Due Thursday 2/23**
* Lab 3: **Due Friday 2/23**
* [TODO: Reading? Presumably Thursday.]

## Assignment Workflow

Caveat that this is but one approach.
In the fullness of time,
everyone develops their own preferred workflows and ways of doing things.

But for the purposes of getting started, here is one workflow.

### Making a Folder

A lot of IDEs (Integrated Development Environments, fancy work for editors)
have a sort of built-in assumption that you are working on the project level,
where the project may have multiple files.

So often, the IDE is working in/opening the project folder.
And so we a need a folder on our computer to do work in.

Open your computer's file manage (e.g. Finder on Mac and File Explorer on Windows).

Navigate to where you want to make this new folder.
For example: I might have/make a `school` folder, and within that a `CICS110` folder,
and within that a `HW` folder.

Secondary click (right click on mouse, two-finger click on most trackpads, etc)
in the finder where you want to folder to be to bring up a menu.
Select either `New Folder` or `New > Folder` depending on your operating system.

Give the new folder a name, `1-variables`, for instance.
(You can secondary click on the folder to to bring up a menu that should have a `Rename` option,
if need be.)

### Opening a Folder

We need to open that folder in our editor to do stuff in it
(you can also make files directly, but I'm not demoing that approach specifically).

Launch VSCode.

Select `File > Open Folder`. This notation means,
click the `File` menu and then select `Open Folder` from the dropdown.

This menu is likely in the upper-left area of the application or you entire screen
(depending on your operating system).

### Making a File

Select `File > New File ...`.

VSCode will ask for a name for the file, give it a name ending in `.py`,
e.g., `hello.py`. You need to specify that `.py` extension.

### Running a File

Finally, if you installed the extension packet from the
[VSCode installation guide](../../guides/vscode/installation#installing-python-extensions),
then there should be a play-button-like triangle in the upper-right of the
python file.

Simply click that button and VSCode will open a terminal and run the file for you.

<details>
<summary><b>Extra: Running the File via Terminal</b></summary>

You can deliberately open a terminal in VSCode via the menu
`Terminal > New Terminal`.

In the terminal, typing `python3` followed by a file name will run that file,
e.g., `python3 hello.py`.

</details>

## Parts of a Program

A program can be considered in terms of the information is is keeping track of,
and what it is doing with or based on that information.

The information, or *data*, or *object*s, correspond with the memory
part of out model of a computer running a program.

What it does with that, or the *logic*, corresponds to the instructions
part of out model of a computer running a program.

This lecture (and last) focusses on the data/objects portion.

### Proto Memory Diagrams

[TODO: I really need to figure out diagrams. I just don't have tiiiiiiiiiiime.
Maybe once spring break hits.]

## Variables

Variables are a way to store and track information.

Some people find the analogy of labeled boxes helpful,
where objects are put into boxes labeled by the variable name,
and can then be referenced by that variable name.

For instance:
```py live_py title=Variables
x = 2
y = 1.5
z = x + y
print(z)
```

So what does each line here do?
* `x = 2` *assigns* the `int` `2` to the variable `x`.
* `y = 1.5` assigns the `float` `1.5` to the variable `y`.
* `z = x + y` first evaluate `x + y`, which is `2 + 1.5`,
which is `3.5` (a `float`); and then stores that in `z`.
* `print(z)` prints `z`, which `3.5`.

Importantly, variables can be overwritten.

Take the following:
```py live_py title=Variables_Overwrite
x = 2
y = 1.5
z = x + y
print(z)
x = -3
print(x)
print(z)
```

So what does each line here do?
* The first 4 lines are the same as before.
  * `x` is the `int` `2`.
  * `x` is the `float` `1.5`.
  * `z` is the `float` `3.5`, which is printed.
* `x` is set to the `int` `-3`.
* `x`, which is now `-3`, is printed (so `-3` is printed).
* `z`, which is still `3.5`, is printed (so `3.5` is printed).

### Legal Names

There are some important rules to remember about variable names:
* Names must be composed of only letters, numbers, and underscores `_`.
* Names may not **begin** with a number (must start with letter or `_`).
* Names are case-sensitive. E.g., `Foo` and `foo` are different variables.

Examples of legal variables names:
* `Foo`
* `foo`
* `f00`
* `_foo`
* `foo_bar_42`

Examples of illegal variables names:
* `314_Foo`
* `foo!`

### Good Names

Just because a name is legal doesn't mean is is "good".
You would ideally like variables names to articulate something about how they are used.

For example, say I have a program that takes in a number representing temperature in degrees
Fahrenheit and converts it to degrees Celsius.
I could reasonable name that input variable
`fahrenheit`, `Fahrenheit`, `degrees_F`, or even `F`.
If I named it `foo`, `potatoes_per_cubic_yoctogram`, of `a`, that would be
profoundly unhelpful to anyone subsequently viewing that code, my future self included.

The goal is to try to have that name make sense for the context it is in.

## Memory Diagrams

This is a diagram, go look at the slides for now.

[TODO: Figure out how to import multi-image diagrams]

## The `input()` Function

The `input()` function gets input from the *user*
(i.e. whoever is running the code, generally us in this case).

The `input()` function may optionally take in a string,
which is used as text to display when prompting the user.

The output, or *return*, of the `input()` function is whatever the user typed in,
as a string.

Take for example this program (that perhaps looks familiar):
```py live_py title=Hello_You
your_name = input("Please enter your name: ")
print("Hello, " + your_name)
```

Go ahead and run it on the website. Then run it VSCode.
Notice the different ways you can be prompted for input.

The website pops up a dialogue box,
but the need to enter input into the terminal is less obvious:
```
$ python3 hello.py 
Please enter your name: Jared
Hello, Jared
```
I typed in that "Jared" and hit the return/enter key.

Now see what it looks like without specifying the prompt for the input function.
```py live_py title=Hello_You_Quite
your_name = input()
print("Hello, " + your_name)
```

The website still pops up a dialogue box,
but there is no indication (other than the terminal not prompting for another command)
of the need to enter text into the terminal:
```
$ python3 hello.py 
Jared
Hello, Jared
```

### Looking Back

We haven't explored functions yet,
but with just the idea of function as black boxes taking inputs and giving outputs,
we now have all the pieces to understand this program:
```py
your_name = input("Please enter your name: ")
print("Hello, " + your_name)
```

The first line is `your_name = input("Please enter your name: ")`:
* `"Please enter your name: "` is a string, we pass that the the function `input()`.
* `input("Please enter your name: ")` then uses that string as a prompt to solicit input from the user,
and returns that input.
* `your_name = input("Please enter your name: ")` captures that returned input,
and stores it in the variable `your_name`.
* So if I entered `Jared` as the input, then `your_name` would hold `"Jared"`.

The second line is `print("Hello, " + your_name)`:
* Again, `your_name` contains the string `"Jared"` in this step-through example.
* The expression `"Hello, " + your_name` evaluates to `"Hello, Jared"`.
* `print("Hello, " + your_name)` then prints `Hello, Jared` to the terminal.

---

:::caution

From here on is post-lecture content,
or notes about the lecture but not part of the lecture itself.

:::

---

<details>
<summary><b>Instructor's Outline</b></summary>

This is an outline I had in the replit when demonstrating things.

```py
############################
### Instructor's Outline ###
############################

# Making a Folder
#   Open Finder/File Navigater
#   Navigate to desired location
#     Could just use desktop
#   Seconary Click -> New Folder

# Opening Folder
#   Launch VSCode (or equivalent)
#   Navigate to folder you made

# Makeing a File
#   File -> New File
#   Give it a name ending in .py

# Run Script
#   (Make sure extension is installed)
#   Click the Triangle in the upper-right

# Return to slides

# input() Function
#   Solicits input from user
#   Can take in nothing or a string
#     Optional string is printed when soliciting input
#   Returns whatever user typed in (as a string)
#   Example: Hello, You
#   Example: Repeat n times

# Return to slides
```

</details>

