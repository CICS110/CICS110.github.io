---
title: Section 04 (Jared Yeager)
---

# Functions

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

## Black Box Functions

There are several ways to look at what functions are.
Up to now, we have been treating functions as "black boxes",
meaning we view them as a sort of magical device that we feed input to
and that we get output from,
without needing to know how they work or what's happening inside.

In the view, we care about things that interact with the function:
* *input*/*parameters*: what goes in to the function. Syntactically,
we put inputs in between the parentheses that come after the function name.
E.g., `314.159` is the input in `round(314.159)`.
* *output*/*return*: This is what the function call evaluates to, or gives back.
E.g., `round(314.159)` outputs `314`. So `x = round(314.159)`
would evaluate to `x = 314`.
* *side effects*: Functions in programming language may affect or interact with
the broader world in some way. For instance: printing to a terminal.

Here is how that view relates so some functions we've already seen.

`int(42.67)`:
* function: `int()`.
* input: `42.67`, of type `float`.
* output: `42`, of type `int`.
* side effects: none.

`print("Hello, World")`:
* function: `print()`.
* input: `"Hello, World"`, a `str`.
* side effects: prints `Hello, World` to terminal.
**Note:** this is "output" in program sense, but not in the within-program function sense.
After all, if I had `x = print(Hello, World)`, what would `print(Hello, World)`
evaluate to? What would be store in `x`? That's the function output.
* output: (We'll come back to this, but:)`None`, of type `NoneType`.

For now, thing of `None` as a special object that represents nothing.
In essence, the function returns nothing, or doesn't return anything.

`input("Please enter a number: ")`:
* function: `input()`.
* input: `"Please enter a number: "`, a `str`. This is the input in the function sense.
* side effects: prints `"Please enter a number: "` to terminal.
Blocks the program until we enter something (input in the use-program-interaction sense).
Say we enter `314`.
* output: `"314"` (what we typed in), of type `str`.

### Hello, You, One More Time

With all this, let us once more behold our second program:
```py live_py title=Hello_You
your_name = input("Please enter your name: ")
print("Hello, " + your_name)
```

With out understanding of functions as black boxes,
I want to untangle two interwoven notions of input and output in this program.
There is input (parameters) and output (returns) in the function sense.
But there is also input and output in the user-program-interaction sense.

What happens on each line:
* Run `your_name = input("Please enter your name: ")`
  * Evaluate `input("Please enter your name: ")`
    * function name: `input()`
    * function input/parameter: `"Please enter your name: "`, of type `str`
    * function side effects:
      * prints `Please enter your name: ` to Terminal (user-interaction output)
      * has program wait until we enter user-interaction input
      * reads input, say `Jared`
    * function output/return: `"Jared"`, of type `str`
  * Line effectively reduces to `your_name = "Jared"`
  * Assign `your_name` to be `"Jared"`, of type `str`
* Run `print("Hello, " + your_name)`
  * Evaluate `"Hello, " + your_name`
    * Lookup `your_name`, currently `"Jared"`, of type `str`
    * Reduces to `"Hello, " + "Jared"`
    * Evaluates to `"Hello, Jared"`, of type `str`
  * Line effectively reduces to `print("Hello, Jared")`
  * Evaluate `print("Hello, Jared")`
    * function name: `print()`
    * function input/parameter: `"Hello, Jared"`, of type `str`
    * function side effects: prints `Hello, Jared` to Terminal (user-interaction output)
    * function output/return: `None`
  * Line effectively reduces to `None`
  * Nothing is done with value `None`

## Functions as Code

Viewing functions as black boxes is fine for calling them.
But there are times we want to build a "black box" that does something like,
say, compute the area of a triangle.

What functions are, and what we would be making, is a reusable piece of code.
A named piece of code that depends on some *parameters* (e.g., base and height) and
produces some *return* (e.g., area).

### Function Signatures

Function *signatures* are a condensed way of representing the parameter and return
information if a function.

For instance: `round(number:float) -> int`
* The name of the function, `round` is the first thing.
* Then within the parentheses you have the *parameters* or *arguments* the function takes in
  * These are each given a name, e.g., `number`
  * These can optionally have expected types, `:`, then type, e.g., `float`
* Then optionally at the end, an `->` followed by the output type, e.g., `int`

So a function signature for the area of a triangle function might be:
`triangle_area(base:float, height:float) -> float`.

### Making Functions

So how do we make a function?

First we make what is called the function *header*, basically saying
"I'm making a function". The header is composed of the `def` (as in define)
keyword followed by the signature for the function we want to create,
followed by a `:`.
```py

```

## None

## Default Parameters

## Variable Scope

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

```

</details>

