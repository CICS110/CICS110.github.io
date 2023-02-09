---
title: Section 04 (Jared Yeager)
---

# Types and Operations

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

Computers formalise this with a notion of *types*. All data has type associated with it.
Everything is something, maybe a number, maybe text, and later on, maybe weirder things.

There are 3 types we care about at the moment:
* Integers (`int`): these are the whole numbers of python,
e.g.: `0`,`1`,`6`,`-7`
* Floating point numbers (`float`): these are the whole decimal numbers of python,
e.g.: `0.0`,`-1.67`,`4e23`
* Strings (`str`):

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

### Learning Something's Type

If you want to know what something's type is, you can use the `type()` function.
This take in anything and return the type, e.g., in the REPL
(the first line is what I typed in, which is what the `>>>` represents):
```
>>> type("Hello, World!")
<class 'str'>
```

</details>

## Arithmetic Operations

### Order of Operations

### Operands' and Result's Types

## String Operations

## Converting Types (Casting)

## Math Module

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

