---
title: Section 04 (Jared Yeager)
---

# Types and Operations

:::caution

This is not entirely complete, you may notice some TODOs I have left for myself.
(There are probably a ton of typos too.)

But it is 1pm and I have class at 2:30, so I'm throwing up what I have.

:::

## Assignment Updates

Short week 1 tasks:

* Sign up for Piazza: **Due Friday 2/7**
* Sign up for Gradescope: **Due Friday 2/7**
* Sign up for Zybooks: **Due Friday 2/7**
* Quiz 1: **Due Thursday 2/6**

Lab this week is meeting your TA and making sure all the relevant software is installed.

## replit

For this lecture,
it will be convenient to have [replit](https://replit.com/languages/python3) open.

replit is quite cool. On the left-hand side,
you can type python code and run it with the big, green "Run" button.
Go ahead and try it with `print("Hello, World")`.

But we will be using the right-hand side today.
On the right hand side you can put code/expressions (e.g. arithmetic)
one line at a time, they will be evaluated,
and the results will be displayed.

The distinction is subtle.
It may by more useful to think of the right-hand side a "python calculator" of sorts.

<details>
<summary><b>Extra: REPLs</b></summary>

This calculator-like thing is more formally know as a
[read-eval-print loop REPL](https://en.wikipedia.org/wiki/Read–eval–print_loop)

It reads an expression from the user, evaluates it, prints the result, and repeats (loops).

</details>

<details>
<summary><b>Extra: Python's built-in REPL</b></summary>

replit's python REPL is presumably a wrapper around python's built-in REPL.

If you are in a terminal or powershell and python 3 is installed,
then you can start up the built in REPL with the command `python3`
(if you have installed python, it is almost surely python 3).
That's it, just `python3` with no file name after it.

To get out of the REPL, you can use the `exit()` function,
of you can hit control-d (it might be something else on Windows).

</details>

## Types

We as humans understand the difference between numbers and words.
Even within numbers, we have whole numbers, fractions, and decimals, for instance.

Computers formalise this with a notion of *types*. All data has some type associated with it.
Everything is something, maybe a number, maybe text, and later on, maybe weirder things.

There are 3 types we care about at the moment:
* Integers (`int`): these are the whole numbers of python,
e.g.: `0`,`1`,`6`,`-7`.
* Floating point numbers (`float`): these are the whole decimal numbers of python,
e.g.: `0.0`,`-1.67`,`4e23`.
* Strings (`str`): these are the "text" type of python. e.g.: `"Hello, World!"`.

When we want to make a string out of verbatim text in code,
we surround it with quotation marks so that the computer knows it is text, not code.
We may use `"` or `'`. **Note**, these are both straight quotes.
Curvy quotes like `“`, `”`, `‘`, and `’` do **not** work.

<details>
<summary><b>Extra: Infinity and NaN</b></summary>

There are some special `float`s to mention exist:
* Infinity (prints as `inf`): hard to deliberately make show up,
but anything more than `1.8e308` or so is too big and thus "infinite".
Why that specific number is much longer story.
* Negative Infinity (prints as `-inf`): Much like `inf`, but negative.
* Not a Number (prints as `nan`):
Sometimes when you do illegal math you get an error (such as dividing by 0).
Sometimes, lake with `1.8e308 - 1.8e308` (`inf` - `inf`) you get "Not a Number"

</details>

<details>
<summary><b>Extra: Escaping Strings</b></summary>

[TODO: extra information on escape characters]

</details>

### Learning Something's Type

If you want to know what something's type is, you can use the `type()` function.
This take in anything and return the type, e.g., in the REPL
(the first line is what I typed in, which is what the `>>>` represents):
```
>>> type("Hello, World!")
<class 'str'>
```

Ignore the `class` thing. We are being told is a string (`str`)

## Arithmetic Operations

We have a notion of *expressions* in the computer science world.
The formal definitions can be a tad complex, by they are effectively
**things that evaluate to something**.
For instance, the expression `7 + 3 * 2` evaluates to `13`.

You are hopefully familiar with operations (as in "order of operations")
in the math sense. If we have the expression `7 + 8`, we call `7` and `8`
*operands*, and `+` the *operator*.

The basic arithmetic operators in python:
* `+`: Addition
* `-`: Subtraction
* `*`: Multiplication
* `/`: Division
* `**`: Exponentiation

There are two more arithmetic operators in python.
They both have to do with the concept of whole number division with a remainder.
So for instance, while you could say 17 divided by 5 is 3.4, you could also say
17 divided by 5 is 3 with a remainder of 2 (because 5 * 3 + 2 = 17).

The first approach is captured in python by `/`, the second with the following:
* `//`: Integer Division/Floor Divisions. `17 // 5` would give `3`, the whole number
of times to operator on the right can be taken out of the operator on the left.
* `%`: Modulo/Remainder. `17 % 5` would give `2`, what remain of the operator on the left
after the operator on the right is taken out of it as many times as possible.

### Order of Operations

With any luck, the phrase "order of operation" or "PEMDAS" is ingrained deep in your memory.
If not, the idea is that in longer arithmetic expressions,
some operations are done before others.

The order:
* `()`: Expressions in **P**arentheses have highest priority.
* `**` : **E**xponentiation is the tightest binding operator.
* `*`,`/`,`//`,`%`: **M**ultiplication, **D**ivision, and the like come next.
* `+`, `-`: **A**ddition and **S**ubtraction are last.

Some examples of results by using parentheses to change the order of evaluation:
```
>>> 5 ** 4 * 3 + 2
1877
>>> 5 ** 4 * (3 + 2)
3125
>>> 5 ** (4 * 3) + 2
244140627
>>> 5 ** (4 * 3 + 2)
6103515625
>>> 5 ** (4 * (3 + 2))
95367431640625
```

And within a level of *precedence*, the order of evaluation goes from left to right.
A demonstrated below:
```
>>> 2 - 3 + 4
3
>>> (2 - 3) + 4
3
>>> 2 - (3 + 4)
-5
```

### Operands' and Result's Types

Since `int`s and `floats` are both numbers,
you python lets you have operations with both in them:
```
>>> 2 * 3.1415
6.283
```

The type of the result depends on the type of the operands
(and if the operation is division or not).
```
>>> type(1 + 1)
<class 'int'>
>>> type(1 + 1.0)
<class 'float'>
>>> type(1.0 + 1)
<class 'float'>
>>> type(1.0 + 1.0)
<class 'float'>
>>> type(1 / 1)
<class 'float'>
```

If either operand is a `float`, or the operation is `/`, the result will be a `float`.
Otherwise (If both operands are `int` and the operation is **not** `/`), it will be an `int`.

## String Operations

We can work with more than numbers in python though. We also have text, aka strings (`str`).

Turns out, there are some handy operations we can perform on strings:
* `+`: Concatenation. Combines 2 strings together, e.g., `"Hello" + " " + "World"`
evaluates to `"Hello World"`
* `*`: Repeat. This taken as operands a string and and an integer, in either order,
and repeats the string that many times. E.g., `5 * "ha"` evaluates to `"hahahahaha"`

## Converting Types (Casting)

Finally, we can convert between these types if we so desire.
For example, if we have the string `"125"`, we may want to convert it to the
integer `125`.

Conversion function are conveniently named after their types:
* `int()`: attempts to convert something to an `int`.
E.g., `int("125")` evaluates to `125`.
* `float()`: attempts to convert something to an `float`
E.g., `float("125")` evaluates to `125.0`.
* `str()`: attempts to convert something to an `str`.
E.g., `str(-0.12)` evaluates to `"-0.12"`.

I say "attempts", because some things are illegal and will fail:
```
>>> int("3.14")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '3.14'
```

Finally, a warning about converting `float`s to `int`s,
the `int()` function truncates (chops off) the decimal part.
You may find it more appropriate to use the `round()` function.
```
>>> int(126.9999999999)
126
>>> round(126.9999999999)
127
```

<details>
<summary><b>Extra: It's Technically not Conversion</b></summary>

[TODO: write this]

</details>

## Math Module

[TODO: Ramble about the math module]

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

# types:
#   int      (whole numbers)
#   float    (decimal point numbers)
#   string   (text)

# type() function

# Familiar Math Operations:
#   Addition:        +
#   Subtraction:     -
#   Multiplication:  *
#   Division:        /
#   Exponentiation:  **

# order of operations

# types in vs types out
#    1. floats dominate
#    2. division outputs floats

# String Operations:
#   Concatination:   +
#   Repeat:          *

# Casting
#    int(), float(), str()
#    use round() for float -> int

# Less-Familiar Math Operations:
#   Floor Division:  //
#   Modulo:          %

# Math Library (import math)
#   math.pi
#   math.sqrt()
#   https://docs.python.org/3/library/math.html
```

</details>

