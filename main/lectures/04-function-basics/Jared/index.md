---
title: Section 04 (Jared Yeager)
---

# Functions

:::caution

This is not entirely complete, you may notice some TODOs I have left for myself.

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
"I'm making a function". The header is composed of the *keyword* `def`
(as in "define"), followed by the signature for the function we want to create,
followed by a `:`.

So for the area of a triangle function, this would be
```
def triangle_area(base:float, height:float) -> float:
  # [Add code here]
```

Then we want to add code to this function.
The actual computation of the area, in this case.
**Very important**: Code that is part of a function needs to be indented,
that is how the computer tells it is part of the function.
Updating our function:
```py
def triangle_area(base:float, height:float) -> float:
  area = base * height / 2
  # [Something is still missing]
```

But we are still missing something. Remember the black box view of this.
This function should take in `base` and `height` and give back/return `area`.
We've computed `area`, but we need a specific keyword to tell the function to return it.
This is the `return` keyword. And so our function becomes:
```py
def triangle_area(base:float, height:float) -> float:
  area = base * height / 2
  return area
```
That last line says have "the function output/return `area`".

As a final note, we could actually shorten this.
`return` can work on any expression, not just a pure variable.
For instance:
```py live_py title=Triangle_Area
def triangle_area(base:float, height:float) -> float:
  return base * height / 2 # b * h / 2 is evaluated and returned

print(triangle_area(3, 6))
print(triangle_area(5, 5))
```

## None

Some functions, like `print()`, return nothing. Or at least in essence return nothing.
However, because the mechanics of python demand they technically return something,
they instead return a special object: `None`, of type `NoneType`. This thing represents nothing.
A function the returns None represents a function that "has no return".

Below are examples of cases where a function returns nothing.
Note that while the type is technically `NoneType`,
we still use `-> None` to indicate no return.

The first example case is a function that has no `return` at all.
A practical example of such a function is a function that takes in information
and prints it in an aesthetically pleasing manner.
```py live_py title=No_Return
def no_return() -> None:
  print("I do not return, thus I return nothing (None)")

ret = no_return() # ret = None
print("no_return() returned: " + str(ret))
```

The second example case is a function that has just `return` with nothing after it.
There are cases where the return of the function is not important,
but you want to use `return` when ending the flow of execution.
```py live_py title=Return_Nothing
def return_nothing() -> None:
  print("I return nothing, thus I return nothing (None)")
  return

ret = return_nothing() # ret = None
print("return_nothing() returned: " + str(ret))
```

The third example case is a function that explicitly has `return None` in it.
This is equivalent to the above,
but there is a case where perhaps emphasising the `None` being returned makes sense.
```py live_py title=Return_None
def return_none() -> None:
  print("I return None, thus I return nothing (None)")
  return None

ret = return_none() # ret = None
print("return_none() returned: " + str(ret))
```

The fourth example is mechanically a subset of the third,
a function that returns some expression that evaluates to `None`.
I can't offhandedly think of a case where I would want to do this,
but the world is big.
```py live_py title=Return_Eval_None
def return_eval_none() -> None:
  return print("I return the None returned by print(), thus I return nothing (None)")

ret = return_eval_none() # ret = None
print("return_eval_none() returned: " + str(ret))
```

## Default Parameters

Normally, if a function has, say, two parameters, then when *calling* (using) said function,
you need to specify exactly that many values.
For instance: for the `triangle_area()` function from earlier,
`triangle_area(3, 1)` would be legal,
whereas `triangle_area(3)` and `triangle_area(3, 1, 4)` would not.

But there is a way in python to have functions with optional parameters that have a default values.
So we can make a function for computing the surface area of cube,
that optionally takes a length, otherwise, assumes that length is 1.

The only real change, is to the signature.
A length to surface area function might have the signature:
```py
cube_surface_area(length:float) -> float
```

But we want for `cube_surface_area(3)` and `cube_surface_area()`
to be legal, with the latter effectively being `cube_surface_area(1)`.

We can make that parameter option with a default by adding `=`
followed by a default value after the parameter name and type:
```py
cube_surface_area(length:float=1) -> float
```

From there it can be used in the *body* (code) of the function
like any other parameter:
```py live_py title=Cube_Surface_Area
def cube_surface_area(length:float=1) -> float:
  return 6 * length ** 2

print(cube_surface_area(5))
print(cube_surface_area(3))
print(cube_surface_area())
```

## Variable Scope

Variables can have one of two levels of *scope* (where they are "visible"):
* Global: They are visible (can be references from) everywhere.
* Local: They are visible (can be references from) only within a specific call of a function,
and once that function call ends, they are gone.

A variable's scope depends on where it is *defined* via `x = [something]`.
For each level, global and local (not within and within a function),
the first time an `x = [something]` occurs, `x` is *defined* to be that something
(you can of course ).

```py live_py title=Print_Global_Locally
def print_num() -> None:
  print(num)

num = 2      # defined gloabally

print_num()
# print(num) # no local num, look-up global num, prints 2
```

```py live_py title=Print_Local_Globally
def make_num() -> None:
  num = 2

make_num()
# num = 2  # makes local num
#          # deleted when function ends

print(num) # error, no global num to print
```

When a variable is used within a function, the function first looks locally,
and then globally. So if there is a local `x` and a global `x`, then we the local one
will *shadow* (make effectively invisible to the function) the global one.

```py live_py title=Shadow_Global
def set_num() -> None:
  num = 3
  print(num)

num = 5      # global num = 5

set_num()
# num = 3    # local num = 3, shadows global
# print(num) # looks local first, sees local num, prints 3

print(num)   # looks global, prints 5
```
