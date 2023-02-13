---
title: Section 04 (Jared Yeager)
---

# Variables

:::caution

This is not entirely complete, you may notice some TODOs I have left for myself.

I'm still trying to figure out how I want to get diagrams and multi-image diagrams in here

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
* [TODO: Reading?]

## Assignment Workflow

### Making a Folder

### Opening a Folder

### Making a File

### Running a File

## Parts of a Program

A program can be considered in terms of the information is is keeping track of,
and what it is doing with or based on that information.

The information, or *data*, or *object*s, correspond with the memory
part of out model of a computer running a program.

What it does with that, or the *logic*, corresponds to the instructions
part of out model of a computer running a program.

This lecture (and last) focusses on the data/objects portion.

### Proto Memory Diagrams

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
x = -2
print(x)
print(z)
```

So what does each line here do?
* The first 4 lines are the same as before
  * `x` is the `int` `2`
  * `x` is the `float` `1.5`
  * `z` is the `float` `3.5`, which was printed
* `x` is set to the `int` `2`
* `x`, which is now `-2`, is printed (so `-2` is printed)
* `z`, which is still `3.5`, is printed (so `3.5` is printed)

### Legal Names

There are some important rules to remember about variable names:
* Names must be composed of only letters, numbers, and underscores `_`
* Names may not **begin** with a number (must start with letter or `_`)
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
* `print("Hello, " + your_name)` then prints `"Hello, Jared"`.

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

# Making a File
#   [How?]
#   [Link to Guide?]
#   Open Finder/File Navigate
#   Navigate to desired location
#     Could just use desktop

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

