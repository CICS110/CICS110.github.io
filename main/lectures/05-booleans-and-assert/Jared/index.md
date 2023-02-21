---
title: Section 04 (Jared Yeager)
---

# Booleans and Assert

:::caution

This is not entirely complete, you may notice some TODOs I have left for myself.

:::

## Assignment Updates

Stuff due this week:
* HW 1: **Due Wednesday 2/22**
* Quiz 3: **Due Thursday 2/23**
* Lab 3: **Due Friday 2/24**
* [TODO: Reading? Presumably Thursday.]

Stuff due next week:
* HW 2: **Due Wednesday 3/1**
* Quiz 4: **Due Thursday 3/2**
* Lab 4: **Due Friday 3/3**
* [TODO: Reading? Presumably Thursday.]

## Booleans

So far we've learned about types for numbers (whole and decimal),
text, and even nothingness itself.

Now comes our final fundamental type: *booleans* (`bool`s), the type for truth.

There are only two possible values for `bool`s: `True` and `False`.

### Comparisons

So what can give us these booleans values?
First and foremost, comparison between numbers. Some operators:
`x == y`: returns `True` if `x` equals `y`, otherwise `False`.
`x != y`: returns `True` if `x` does not equal `y`, otherwise `False`.
`x < y`: returns `True` if `x` is strictly less than `y`, otherwise `False`.
`x > y`: returns `True` if `x` is strictly greater than `y`, otherwise `False`.
`x <= y`: returns `True` if `x` is less than or equal to `y`, otherwise `False`.
`x >= y`: returns `True` if `x` is greater than or equal to `y`, otherwise `False`.

```py live_py title=Number_Comparisons
print(3 == 5)  # False
print(3 != 5)  # True
print(3.5 > 5) # False
print(5 <= 5)  # True
```

Funnily enough, you can use all these operators on strings too.
The less than vs greater than become lexicographical ordering,
with earlier strings being "less"
(all capital letters are less than all lower case letters).

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
you can check the absolute value of the difference against a tolerance or use `math.isclose()`
```py live_py title=Float_Tolerance
import math
print(.1 + .2 == .3)             # False
print(abs(.1 + .2 - .3) < .001)  # True
print(math.isclose(.1 + .2, .3)) # True
```

:::caution

Below code is throwing an error on the website,
but not is run in isolation in a file.
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
* `x or y`: returns `True` if either `x` or `y` is `True`, otherwise returns `False`.
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
* Then `not`
* Then `and`
* Then `or`

So for instance:
```py live_py title=Precedence
# 3 ** 3 == 1 and 6 - 7 < 0 or not 1 % 2 == 0
#     27 == 1 and    -1 < 0 or not     1 == 0
#     False   and    True   or not     False
#     False   and    True   or True
#     False                 or True
#     True
print(3 ** 3 == 1 and 6 - 7 < 0 or not 1 % 2 == 0)
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

[TODO: Truth Tables]

</details>

<details>
<summary><b>Extra: Distributive Laws</b></summary>

[TODO]

</details>
<details>
<summary><b>Extra: Short Circuiting</b></summary>

[TODO]

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
# If int_exp was mis-implemented, we might trigger the asert below.
assert type(z) == int, "int_exp() produced illegal return"
print(z)
```

## Conversions and Truthy/Falsy Values

Lets talk about how booleans interact with type conversion.
Converting **from** booleans we can demonstrate exhaustively:
```py live_py title=From_Bool
print(int(True))    # 1
print(int(False))   # 0
print(float(True))  # 1.0
print(float(False)) # 0.0
print(str(True))    # "True" 
print(str(False))   # "False" 
```

Converting to booleans is more interesting story.
Every value is either "Truthy" (converts to true) or "Falsy" (coverts to false).
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
