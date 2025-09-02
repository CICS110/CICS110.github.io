---
title: Section 04 (Jared Yeager)
---

# Booleans and Assert

## Booleans

So far we've learned about types for numbers (whole and decimal),
text, and even nothingness itself.

Now comes our final fundamental type: *booleans* (`bool`s), the type for truth.

There are only two possible values for `bool`s: `True` and `False`.

### Comparisons

So what can give us these booleans values?
First and foremost, comparison between numbers. Some operators:
* `x == y`: returns `True` if `x` equals `y`, otherwise `False`.
* `x != y`: returns `True` if `x` does not equal `y`, otherwise `False`.
* `x < y`: returns `True` if `x` is strictly less than `y`, otherwise `False`.
* `x > y`: returns `True` if `x` is strictly greater than `y`, otherwise `False`.
* `x <= y`: returns `True` if `x` is less than or equal to `y`, otherwise `False`.
* `x >= y`: returns `True` if `x` is greater than or equal to `y`, otherwise `False`.

```py live_py title=Number_Comparisons
print(3 == 5)  # False
print(3 != 5)  # True
print(3.5 > 5) # False
print(5 <= 5)  # True
```

Funnily enough, you can use all these operators on strings too.
The less than vs greater than become lexicographical ordering,
with earlier strings being "less"
(all capital letters are less than/before all lower case letters).

```py live_py title=String_Comparisons
print("Foo" == "Foo")  # True
print("Foo" != "foo")  # True
print("Foo" < "foo")   # True
print("Fool" <= "Foo") # False
```

### Float Representation Error

There is a dangerous pitfall lurking in checking if `floats` are equal:
```py live_py title=Float_NE
print(.1 + .2 == .3) # False
```

Why is `.1 + .2` not `.3`.
Forcing them to be be more thoroughly displayed we see something interesting
```py live_py title=Float_Representation
print(f"{.1    : .17f}") # 0.10000000000000001
print(f"{.2    : .17f}") # 0.20000000000000001
print(f"{.1+.2 : .17f}") # 0.30000000000000004
print(f"{.3    : .17f}") # 0.29999999999999999
```

The same way that we can not represent 1/3 perfectly in decimal form,
there are plenty of values the computer can not represent perfectly,
and so slight arithmetic errors can appear.

If we want to see if two floats are equal,
we can check the absolute value of the difference against a tolerance or use `math.isclose()`
```py live_py title=Float_Tolerance
import math
print(.1 + .2 == .3)             # False
print(abs(.1 + .2 - .3) < .001)  # True
print(math.isclose(.1 + .2, .3)) # True
```

:::caution

Below code is throwing an error on the website,
but not if run in isolation in a file.
Still working on that.

:::

Yet even within these, beware.
`math.isclose()` defaults to using a tolerance based on the two arguments,
so there will be an issue if one of the two values is `0.0`.
There is a way to specify an absolute tolerance to get around this:
```py live_py title=IsClose_Tolerance
import math
print(math.isclose(.1 + .2 - .3, 0))                # False
print(math.isclose(.1 + .2 - .3, 0, abs_tol=0.001)) # True
```

## Logical Operators

There are new operators that work on booleans:
* `x and y`: returns `True` if `x` and `y` are both `True`, otherwise returns `False`.
* `x or y`: returns `True` if either `x` or `y` is `True` (this includes if both are `True`),
  otherwise returns `False`.
* `not x`: returns `True` if `x` is `False` and returns `False` if `x` is `True`.

```py live_py title=Logic
print(5 < 6 and 6 < 7)  # True
print(5 >= 6 or 6 >= 7) # False
print(not 1 == 5)       # True
```

### Precedence

As there is an order of operations for math, so there is for logic.
* Parentheses always win
* Evaluation of math is done first (`**`,then `*`,`/`,`//`,`%`, then `+`,`-`)
* Then comparisons `==`, `!=`, `<=`, `>=`, `<`, `>`
* Then `not`, which is almost like the negative sign in math
* Then `and`, which is almost like multiplication in math
  (if `True` was `1` and `False` was `0`)
* Then `or`, which is almost like addition in math
  (if `True` was `1` or more and `False` was `0`)

So for instance:
```py live_py title=Precedence
# 3 ** 3 == 1 and 6 - 7 < 0 or not 1 % 2 == 0
# 27     == 1 and -1    < 0 or not 1     == 0
# False       and True      or not False
# False       and True      or True
# False                     or True
# True
print(3 ** 3 == 1 and 6 - 7 < 0 or not 1 % 2 == 0) # True
```

That said, using parentheses for some visual clarity is advised.

### Misc

<details>
<summary><b>Extra: DeMorgan's Laws</b></summary>

A fancy name for a set of logical rules.
DeMorgen's Laws tell us that:
* `not (x and y)` is equivalent to `not x or not y`
* `not (x or y)` is equivalent to `not x and not y`

You can fairly easily convince yourself this is true via some truth tables.
The idea of a "proof by truth table" is that you just organise a
proof by cases into a nice table form. Here I have one row for each
possible value combination of `x` and `y`, with intermediate results also shown.
Starting with `not` over `and`:

| `x` | `y` | `not x` | `not y` | `x and y` | `not (x and y)` | `not x or not y` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `False` | `False` | `True` | `True` | `False` | `True` | `True` |
| `False` | `True` | `True` | `False` | `False` | `True` | `True` |
| `True` | `False` | `False` | `True` | `False` | `True` | `True` |
| `True` | `True` | `False` | `False` | `True` | `False` | `False` |

`not` over `or` is much the same:

| `x` | `y` | `not x` | `not y` | `x or y` | `not (x or y)` | `not x and not y` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `False` | `False` | `True` | `True` | `False` | `True` | `True` |
| `False` | `True` | `True` | `False` | `True` | `False` | `False` |
| `True` | `False` | `False` | `True` | `True` | `False` | `False` |
| `True` | `True` | `False` | `False` | `True` | `False` | `False` |

</details>

<details>
<summary><b>Extra: Distributive Laws</b></summary>

Analogously to the distributive law in math ($$x * (y + z) = x * y + x * z$$),
there are distributive laws in logic:
* `x and (y or z)` is equivalent to `(x and y) or (x and z)`
* `x or (y and z)` is equivalent to `(x or y) and (x or z)`

These also can be shown by proof tables.
(If we had looping yet I could just give you code with a triple for-loop, but alas.)
First is the table for distributing `and` over `or`. Since `and` is multiplication-y
and `or` is addition-y, this also matches the math distribution rule's intuition nicely.

| `x` | `y` | `z` | `x and y` | `x and z` | `y or z` | `x and (y or z)` | `(x and y) or (x and z)` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `False` | `False` | `False` | `False` | `False` | `False` | `False` | `False` |
| `False` | `False` | `True` | `False` | `False` | `True` | `False` | `False` |
| `False` | `True` | `False` | `False` | `False` | `True` | `False` | `False` |
| `False` | `True` | `True` | `False` | `False` | `True` | `False` | `False` |
| `True` | `False` | `False` | `False` | `False` | `False` | `False` | `False` |
| `True` | `False` | `True` | `False` | `True` | `True` | `True` | `True` |
| `True` | `True` | `False` | `True` | `False` | `True` | `True` | `True` |
| `True` | `True` | `True` | `True` | `True` | `True` | `True` | `True` |

The more surprising result
(or at least the one less in sync with the mathematical intuition)
is that `or` also distributes nicely over `and`.

| `x` | `y` | `z` | `x or y` | `x or z` | `y and z` | `x or (y and z)` | `(x or y) and (x or z)` |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `False` | `False` | `False` | `False` | `False` | `False` | `False` | `False` |
| `False` | `False` | `True` | `False` | `True` | `False` | `False` | `False` |
| `False` | `True` | `False` | `True` | `False` | `False` | `False` | `False` |
| `False` | `True` | `True` | `True` | `True` | `True` | `True` | `True` |
| `True` | `False` | `False` | `True` | `True` | `False` | `True` | `True` |
| `True` | `False` | `True` | `True` | `True` | `False` | `True` | `True` |
| `True` | `True` | `False` | `True` | `True` | `False` | `True` | `True` |
| `True` | `True` | `True` | `True` | `True` | `True` | `True` | `True` |

<details>
<summary><b>Very Extra: Hello Belphegor, My Old Friend</b></summary>

:::warning

We have not gotten to this material yet. Give it maybe 7 lectures.
Consider this more of a glimpse of the kind of power you will come to have.

:::

One of the great motivating spirits of programming is cutting down on time
for tedious or repetitive tasks. Not only are such tasks horribly dull,
but the numbness of the repetition can lull us into making silly mistakes.
For example, I sure didn't want to fill out two 8 by 8 truth tables
and do all the markdown (the language the backend of this website uses)
formatting for them; and it would have been easy to have some
copy and paste that I forgot to edit, or to mess up a boolean computation.
So, I wrote code the generate the markdown for the tables for me.

```py live_py title=Generate_And_Or_Distibution_Table
cols = ["x", "y", "z", "x and y", "x and z", "y or z", "x and (y or z)", "(x and y) or (x and z)"]
print("| `" + "` | `".join(cols) + "` |")
print("|" + len(cols) * " :---: |")
for x in [False, True]:
  for y in [False, True]:
    for z in [False, True]:
      row = [x, y, z, x and y, x and z, y or z, x and (y or z), (x and y) or (x and z)]
      print("| `" + "` | `".join(map(str,row)) + "` |")
```

```py live_py title=Generate_Or_And_Distibution_Table
cols = ["x", "y", "z", "x or y", "x or z", "y and z", "x or (y and z)", "(x or y) and (x or z)"]
print("| `" + "` | `".join(cols) + "` |")
print("|" + len(cols) * " :---: |")
for x in [False, True]:
  for y in [False, True]:
    for z in [False, True]:
      row = [x, y, z, x or y, x or z, y and z, x or (y and z), (x or y) and (x or z)]
      print("| `" + "` | `".join(map(str,row)) + "` |")
```

</details>

</details>

<details>
<summary><b>Extra: Short Circuiting</b></summary>

In the nascent days of computers and programming,
time and space (memory) were precious things
(so I hear, I was born in '96).
This informs functionality of languages in the present.
As a motivating scenario, say we wanted to evaluate `LHS and RHS`,
where both sides are arbitrary expressions,
which could be quite long or contain function calls.
We start be evaluating the left hand side (LHS).
Say that evaluates to `False`. At this point we have
`False and RHS`. The right hand side doesn't matter, the whole thing
will be `False`. So we can just *short circuit*, call the whole thing `False`,
and save some time.

This is what Python does. `False and WHATEVER` short circuits to `False`,
`True or WHATEVER` short circuits to `True`.
This can be seen by effectively sticking some print statements in the operands.

```py live_py title=Shortcircuit_And
def ptrue(opnum):
  print(f"Operand {opnum}: True")
  return True

def pfalse(opnum):
  print(f"Operand {opnum}: False")
  return False

print(ptrue(1) and ptrue(2))  # True, True  -> True
print(ptrue(1) and pfalse(2)) # True, False -> False
print(pfalse(1) and ptrue(2)) # False       -> False
```

```py live_py title=Shortcircuit_Or
def ptrue(opnum):
  print(f"Operand {opnum}: True")
  return True

def pfalse(opnum):
  print(f"Operand {opnum}: False")
  return False

print(pfalse(1) or pfalse(2)) # False, False -> False
print(pfalse(1) or ptrue(2))  # False, True  -> True
print(ptrue(1) or pfalse(2))  # True         -> True
```

Most of the time, this is just a convenience that you don't think about.
But there are some cases where you can explicitly leverage this.
I tend to do this for multi-part checks where one part depends on another.
For example, say I want to check if something is a natural number, i.e.,
a positive `int`. I would first check that it is an `int` at all
before checking the positivity,
since checking positivity for a non-`int` could cause an error.

```py live_py title=Nat_Check
def is_nat(n):
  # We can use == for type comparison
  return type(n) == int and n >= 0

print(is_nat(5))   # True
print(is_nat(-5))  # False
print(is_nat(5.0)) # False
print(is_nat("5")) # False
```

```py live_py title=Nat_Check_Error
def is_nat(n):
  # We can use == for type comparison
  return n >= 0 and type(n) == int

print(is_nat(5))   # True
print(is_nat(-5))  # False
print(is_nat(5.0)) # False
print(is_nat("5")) # ERROR
```

</details>

## Assert

`assert` is a special command that takes a boolean (or something that evaluatse to a boolean)
and an error message in string form; it checks the condition, and throws an error if
the condition is not met.

This can be used as a sort of gate/checkpoint to prevent illegal states (such as illegal input),
the idea being that an explicit error is easier to notice and address than
something wrong/unexpected but not illegal going on in a more invisible manner.

Below is an example of exponentiation where we may want the result to always be an int.

```py live_py title=Interger_Exp
def int_exp(x:int, y:int):
  # We can use == for type comparison, don't want floats if we want an int result
  assert type(x) == int, "Illegal type for x"
  assert type(y) == int, "Illegal type for y"
  return x ** y

z = int_exp(3, -1)
# something triggering this assert would tell us improvements can be made
assert type(z) == int, "int_exp() produced illegal return"
print(z)
```

That last error message could clue us in to a missed case.
That can then be fixed:

```py live_py title=Interger_Exp_Fixed
def int_exp(x:int, y:int):
  # We can use == for type comparison
  assert type(x) == int, "Illegal type for x"
  assert type(y) == int, "Illegal type for y"
  assert y >= 0, f"Illegal value for y (y is {y})"
  return x ** y

# z = int_exp(3.0, 5) # AssertionError: Illegal type for x
# z = int_exp(3, .5)  # AssertionError: Illegal type for y
# z = int_exp(3, -1)  # AssertionError: Illegal value for y (y is -1)

z = int_exp(3, 5)
# If int_exp was mis-implemented, we might trigger the assert below.
assert type(z) == int, "int_exp() produced illegal return"
print(z)
```

## Conversions and Truthy/Falsy Values

Let's talk about how booleans interact with type conversion.
Converting **from** booleans we can demonstrate exhaustively:
```py live_py title=From_Bool
print(int(True))    # 1
print(int(False))   # 0
print(float(True))  # 1.0
print(float(False)) # 0.0
print(str(True))    # "True" 
print(str(False))   # "False" 
```

Converting to booleans is a more interesting story.
Every value is either "Truthy" (converts to `True`) or "Falsy" (coverts to `False`).
The general rule is, for a given type, the "empty"-or-"zero"-like values are falsy,
and everything else is truthy.
```py live_py title=To_Bool
import math
print(bool(0))         # False
print(bool(0.0))       # False
print(bool(-0.0))      # False
print(bool(math.nan))  # False, interestingly enough
print(bool(""))        # False
print(bool(None))      # False
print()
print(bool(1))         # True
print(bool(-57))       # True
print(bool(1.0))       # True
print(bool(-math.inf)) # True
print(bool("foo"))     # True
print(bool("False"))   # True, which might surprise you
```

## Misc: More Built-In Functions

Python is a fairly well developed language. So for a lot of really basic properties
of numbers and strings, there is some sort of built-in or library function to
compute/check said property.

It is impossible to memorise all the functions that exist, but there is also no need to.
In practice, if you wanted to know something like the length of the string you
would search the internet for "python string length function".
And you would presumably find the `len()` function and some examples online.

Some example "signatures" of such functions:
* `len(s)`: gets the length of a string.
* `min(n1, n2, n3, ...)`: gets the minimum number in a list.
* `max(n1, n2, n3, ...)`: gets the maximum number in a list.
* `round(number, ndigits=None)`: rounds a number to `ndigits` digits,
the default is to round to the nearest whole number.
* `abs(x)`: gets the absolute value of a number.
