---
title: Section 04 (Jared Yeager)
---

# Lists, Tuples, and Strings

## Lists, Tuples, ... and Strings

We have covered various types (`int`, `float`, `str`, `bool`) up to now.
And we have used variables to store and access objects of these types.
But there is a weakness in our ability to hold information.
We don't have a good way to hold, say, 100 `int`s. And wanting to take an average of
100 numbers is not an unreasonable goal.

We now turn our focus to some of the many *collection type*s or *collection*s in python.
These are types that exist to store a bunch of information.
Within those are *sequence type*s, types that store a bunch of information **in some order**.

### Lists

One such sequence type is *list*s.

You can make a lists explicitly with an opening square bracket/brace (`[`),
followed by comma-separated *elements* (values or variables),
followed by a closing square bracket/brace (`]`). For example:
```py live_py title=Make_List
list_1 = [3, 1, 4, 1, 5]
list_2 = ["a", 1, 1.0, True] # can contain a mix of types
list_3 = []                  # can be empty
print(list_1)                # [3, 1, 4, 1, 5]
print(list_2)                # ['a', 1, 1.0, True]
print(list_3)                # []
```

Once you have a list, you'll want to be able to access elements of it.
This is done with the list, followed by `[`, followed by an *index* to access,
followed by `]`.
**Note: indexing starts at 0.**
So the first element in the list has index `0`, second has index `1`, ...,
last element has index `length-1` (where `length` is the length of this list,
generally obtained via the `len()` function).

```py live_py title=Index_List
l = [3, 1, 4, 1, 5]
print(l)           # [3, 1, 4, 1, 5]
print(l[0])        # 3
print(l[1])        # 1
print(l[len(l)-1]) # 5
```

Finally, you can change the element at a given in index of the list.

```py live_py title=Edit_List
l = [3, 1, 4, 1, 5]
print(l)        # [3, 1, 4, 1, 5]
l[0] = 5        # 3 -> 5
l[len(l)-1] = 3 # 5 -> 3
print(l)        # [5, 1, 4, 1, 3]
```

### Tuples

Tuples are much the same as lists mechanically. But there are some differences.

Most visibly, they are created with pair of parentheses (`(`, and `)`),
not square brackets.

```py live_py title=Make_Tuple
tup_1 = (3, 1, 4, 1, 5)
tup_2 = ("a", 1, 1.0, True) # can contain a mix of types
tup_3 = (0,)                # singletons need a comma
tup_4 = ()                  # can be empty
print(tup_1)                # (3, 1, 4, 1, 5)
print(tup_2)                # ('a', 1, 1.0, True)
print(tup_3)                # (0,)
print(tup_4)                # ()
```

Indexing is exactly the same.

```py live_py title=Index_Tuple
t = (3, 1, 4, 1, 5)
print(t)           # (3, 1, 4, 1, 5)
print(t[0])        # 3
print(t[1])        # 1
print(t[len(t)-1]) # 5
```

However, you can not change the elements of a tuple.
We say a tuple is *immutable*, whereas a list is *mutable*:

```py live_py title=Edit_Tuple
t = (3, 1, 4, 1, 5)
print(t) # (3, 1, 4, 1, 5)
t[0] = 5 # Error
```

### Strings

Plot twist: string are also a kind of sequence type.
Or at least enough so that they support indexing.
That said, when you index into a string you just get a string of length 1.

```py live_py title=Index_String
s = "Hello, World!"
print(s[2])  # "l"
print(s[4])  # "o"
print(s[10]) # "l" 
```

Like tuples however, they are immutable (you can not edit them).

```py live_py Edit_String
s = "Hello, World!"
print(s[12]) # "!"
s[12] = "?"  # Error
```

### When to use What

Strings are for text, pretty clear. You want text? Strings.
But lists vs tuples?
The mechanical difference is just that lists are mutable and tuples aren't.

In terms of actual use:
I tend to think of tuples as bundling associated information together into a bigger whole,
almost making a new "type" out of "sub-types". For instance, bundling an x-coordinate and
a y-coordinate to get a 2D point.
Lists to me are more for working with bulk, many of the same type of thing.
If I need to store a long list of numbers to later get some stats about,
I'd generally use a list.
But maybe that's just me. I tend to just default to lists in general,
partly because they are more flexible, but partly because they are more like
"arrays" in other languages and so feel more "canonical" to me.

## Methods

### What Are Methods?

*Methods* are a weird kind of function associated with certain types.
For example lists have an `append()` method, but only lists can use it.
And you need some variable/object of the relevant type to use a method.

For example, again, `append(element)` is a method for lists. So if you have a list `l`,
you can invoke the `append()` method like so: `l.append(3)`
(this will append the element `3` to the end of list `l`).

We've seen the dot `.` before in a different context.
My intuition is that `foo.bar` Is saying something like
"get the `bar` attribute/variable/function/whatever from `foo`":
* `math.sqrt()` is "get the `sqrt()` function from the `math` module (library)".
* `math.pi` is "get the `pi` constant from the `math` module (library)".
* `l.append()` is "get the `append()` method from `l`". And if `l` is list,
it has an append method associated with it.

You might see this method written as `list.append()` in
[documentation](https://docs.python.org/3/tutorial/datastructures.html)

### List Methods

Here are a few useful
[list methods](https://docs.python.org/3/tutorial/datastructures.html):
* `list.append(x)`: appends `x` to the end of the list.
* `list.insert(i, x)`: inserts `x` at index `i`,
for `i` between `0` and list length (inclusive).
* `list.pop(i)`: removes and returns the element at index `i`,
if `i` is unspecified defaults to last element in the list.
* `list.remove(x)`: removes the first occurrence of `x` in the list.

```py live_py title=List_Methods
ones = [True, 1.0] # [True, 1.0]
ones.append("one") # [True, 1.0, "one"]
ones.remove(1.0)   # [True, "one"]
ones.insert(0, 1)  # [1, True, "one"]
ones.pop(1)        # [1, "one"]
print(ones)        # [1, "one"]
```

**Notice that the `ones` used to invoke these method changes as a result of them.**

### String Methods

Here are a few useful
[string methods](https://docs.python.org/3/library/stdtypes.html#string-methods):
* `str.lower()`: returns a lower-case copy of the string.
* `str.upper()`: returns a upper-case copy of the string.
* `str.replace(old, new)`: returns a copy of the string
with all occurrences of substring `old` replaced by `new`.

```py live_py title=String_Methods
Hi = "Hello, World!"
hi = Hi.lower()
HI = Hi.upper()
H1 = Hi.replace("o", "0").replace("l", "1").replace("e", "3") # Chaining!
print(Hi) # Hello, World!
print(hi) # hello, world!
print(HI) # HELLO, WORLD!
print(H1) # H3110, W0r1d!
```

**Notice that the `Hi` used to invoke these method was unchanged.**

This behaviour is remarkably different from lists.
Methods **can** change the thing used to call them, but they may not.
For immutable types, a new copy must be returned.
For mutable types, I would heuristically expect the invoking instance to be mutated,
but that isn't guaranteed.
The only real way to know is to read the documentation, or better yet,
play around and test them in a REPL or some-such.

This is a subtlety that is easy to get tripped up on,
so I want to hang on it a bit more.
We can consider methods from the black-box function perspective,
where the invoking instance (such as `Hi` in `Hi.upper()`) can be viewed
either as input or as being baked in
(i.e., `Hi.upper()` is a distinct function for each value of `Hi`).

<details>
<summary><b>Extra: Which is it?</b></summary>

:::caution

This is peaking behind the curtain quite a bit prematurely.
We will come back to this point in the fullness of time
(i.e., when we get to classes).

:::

Since we are applying a model, on some level it really is just a matter of perspective.
But, as a fun technical detail, `list.append()` and `str.upper()` are the base functions.
`[True, 1.0].append()` and `"Hello, World!".upper()`
are functions based on them with the invoking instance built in.

```py live_py title=True_Functions
print(list.append)
print(str.upper)
print()
print([True, 1.0].append)
print("Hello, World!".upper)
```

These base/type-level functions can be used directly,
by providing what would be the invoking instance as the first argument.

```py live_py title=Calling_True_Functions
ones = [True, 1.0]
list.append(ones, "one")
print(ones) # [True, 1.0, "one"]
Hi = "Hello, World!"
hi = str.upper(Hi)
print(hi)   # HELLO, WORLD!
```

</details>

<details>
<summary><b>Extra: Currying</b></summary>

:::caution

This is about mathematics far outside the scope of this course.

:::

This whole concept of making a new functions by baking in an argument
is related to the mathematical idea of *currying* functions.
This starts getting into lambda calculus and other very alien looking things,
but the idea isn't too crazy with some examples.
If I had the function $$f(x,y) = 2x^2 + xy + 3y^2$$, I could say let
$$f_x(y) = 2x^2 + xy + 3y^2$$ be a family of functions for all possible values of
$$x$$. Now I can have functions $$f_1(y) = 2 + y + 3y^2$$ and
$$f_{\pi}(y) = 2\pi^2 + \pi y + 3y^2$$ that have "baked in" specific values for $$x$$.

We are talking about this same idea,
just with programming functions instead.
`list.append(ones, "one")` is analogous to using $$f(x, y)$$,
`ones.append("one")` is analogous to using $$f_x(y)$$.

</details>

Compare the following in this framework.

`[True, 1.0].append("one")`:
* Function: `[True, 1.0].append()`
  (or `list.append()`, depending on perspective).
* Input: `"one"` (and maybe also `[True, 1.0]`, depending on respective perspective).
* Side Effect: the list object in memory originally with value `[True, 1.0]`
  becomes `[True, 1.0, "one"]`
  (and so without some variable to reference the list, it would be lost).
* Output: `None`.

`"Hello, World!".upper()`:
* Function: `"Hello, World!".upper()`
  (or `str.upper()`, depending on perspective).
* Input: none (or maybe `"Hello, World!"`, depending on respective perspective).
* Side Effect: none.
* Output: `"HELLO, WORLD!"`.

```py live_py title=Updated_VS_New
ones = [True, 1.0]
on3s = ones.append("one")
print(ones) # [True, 1.0, "one"]
print(on3s) # None
print()
Hi = "Hello, World!"
hi = Hi.upper()
print(Hi)   # Hello, World!
print(hi)   # HELLO, WORLD!
```

For my part, I prefer the methods that return a new object,
as that is closer to the more pure mathematical intuition of functions.
Moreover, you can readily chain such methods together, such as the `.replace()` chain
in the string methods example.

---

:::caution

Material from here on was not part of the lecture,
but is stuff I think is quite useful to know about.

:::

---

## Operators

Remember how `+` and `*` work on strings?
Well they do the same thing to lists and tuples:
```py live_py title=Repeat_And_Concatenate
print("Foo" + "Bar")   # FooBar
print(3 * "Foo")       # FooFooFoo
print([1,5] + [3,7,9]) # [1, 5, 3, 7, 9]
print(5 * [0])         # [0, 0, 0, 0, 0]
print((1,2,3) + (8,9)) # (1, 2, 3, 8, 9)
print(2 * ("a","b"))   # ('a', 'b', 'a', 'b')
```

## Unpacking/Destructuring

Imagine you had a reasonably-short
tuple that you know you wanted to work with all of its elements,
like adding together two points in 2D space:
```py live_py title=2D_Add
# Assume these were set in the past somewhere
point1 = (3,1)
point2 = (4,1)
# ...
# Now we want to add them
point_add = (point1[0]+point2[0], point1[1]+point2[1])
print(point_add) # (7, 2)
```

You might find using the tuple name and indices repeatedly bothersome or unclear,
especially if, say, `point1[0]` showed up multiple times in a calculation.
You could use helper variables to diminish that to some extent.

```py live_py title=2D_Add_Variables
# Assume these were set in the past somewhere
point1 = (3,1)
point2 = (4,1)
# ...
# Now we want to add them
a = point1[0]
b = point1[1]
x = point2[0]
y = point2[1]
point_add = (a+x, b+y)
print(point_add)       # (7, 2)
```

I find this more visually clear,
especially if those variables are used multiple times each,
but the initial assignment isn't the nicest.
Python has special machinery to do this a little more nicely though.

```py live_py title=2D_Add_Unpacking
# Assume these were set in the past somewhere
point1 = (3,1)
point2 = (4,1)
# ...
# Now we want to add them
a, b = point1          # (a, b) = (3, 1)
x, y = point2          # (x, y) = (4, 1)
point_add = (a+x, b+y)
print(point_add)       # (7, 2)
```

This is known as *unpacking* or *destructuring*. The tuple `(3, 1)` is unpacked into
the variables `a` and `b` for more convenient access.

### Discarding

What if we want to unpack a tuple for convenience,
but we don't need all the elements,
and don't want to make up variable names for the ones we don't need.

For instance: computing the width (x-distance) between two points.
We only care about the first elements in the tuple.

We can use an underscore (`_`) instead of a variable name if we don't
care about tracking that value and don't want to make up a name.

```py live_py title=Width_Unpacking
# Assume these were set in the past somewhere
point1 = (3,1)
point2 = (4,1)
# ...
# Now we want to get the x-distance
a, _ = point1      # (a, _) = (3, 1) # a = 3
x, _ = point2      # (x, _) = (4, 1) # x = 4
width = abs(a - x)
print(width)       # 1
```

## Negative Indexing

You may want the last element in a list/tuple/string, or the second-last, etc.
This can be done by taking the length of the list minus 1.

```py live_py title=Last_Element
l = [0,1,2,3,4]    # 5 elements, indices 0 to 4 (inclusive)
length = len(l)    # 5
print(l[length-1]) # prints 4
```

You could also write `l[len(l)-1]`. This is ... kind of gross.
It turns out there is shortcut for this: `l[-1]`.

```py live_py title=Negative_Indices
l = [0,1,2,3,4]
print(l[len(l)-1]) # 4
print(l[-1])       # 4
print(l[len(l)-2]) # 3
print(l[-2])       # 3
print(l[len(l)-3]) # 2
print(l[-3])       # 2
```

You get the idea. A negative index is basically
"index 'length of list minus this number'".

## Slicing

You can do way more than just indexing,
you can extract sub-lists/tuples/strings called *slices*.

For a list (or tuple or string) `l`,
you can get the element at an index `index` via `l[index]`.
There is a generalised indexing form though: `l[from:to:step]`.
This gets you a sub-list/tuple/string based on the indices from `from` (inclusive) to
`to` (exclusive) in increments of `step`.

In fact, any of these three can be left blank (as long as the `:`s are still there).
`step` defaults to `1`.
`from` and `to` default to the limits of the list
(`step` may be negative, so `from` could be the end of the list when unspecified).

This really is best seen with examples.

```py live_py title=Slicing
l = [0,1,2,3,4,5,6,7,8,9]
t = (0,1,2,3,4,5,6,7,8,9)
s = "0123456789"
print(l[3:7])      # [3, 4, 5, 6]
print(t[:4])       # (0, 1, 2, 3)
print(s[6:])       # 6789
print(l[-3:])      # [7, 8, 9]
print(t[:-8])      # (0, 1)
print(s[-8:-2])    # 234567
print(l[1:-1:2])    # [1, 3, 5, 7]
print(t[9:1:-2])   # (9, 7, 5, 3)
print(s[-1:-9:-2]) # 9753
print(l[1::3])     # [1, 4, 7]
print(t[:9:3])     # (0, 3, 6)
print(s[::2])      # 02468
```

And yes, you **can** assign to a slice.

```py live_py title=Slice_Assignment
l = [0,1,2,3,4,5]
print(l)          # [0,1,2,3,4,5]
l[::2] = l[1::2]
print(l)          # [1,1,3,3,5,5]
l = l[::-1]
print(l)          # [5,5,3,3,1,1]
```

## Conversions

Like `int()`, `float()`, `str()`, etc; there are `list()` and `tuple()` functions.

So we can (sort of) use `str()`, `list()`,
and `tuple()` to convert between these sequence types.

### To List/Tuple

Converting to lists and tuples from any of the others works how you might hope,
direct conversion between tuples and lists, strings becoming list/tuples of the
one-letter strings.

```py live_py title=To_List
t = (3,1,4,1,5)
s = "92653"
lt = list(t) # [3, 1, 4, 1, 5]
ls = list(s) # ['9', '2', '6', '5', '3']
print(lt)
print(ls)
```

```py live_py title=To_Tuple
l = [3,1,4,1,5]
s = "92653"
tl = tuple(l) # (3, 1, 4, 1, 5)
ts = tuple(s) # ('9', '2', '6', '5', '3')
print(tl)
print(ts)
```

### To String

Converting to strings just puts the list/tuple in string form,
it does not make a string out of the elements in the list.

```py live_py title=To_String
l = [3,1,4,1,5]
t = ("3","1","4","1","5")
sl = str(l) # "[3, 1, 4, 1, 5]"
st = str(t) # "('3', '1', '4', '1', '5')"
print(sl)
print(st)
```

If you want to convert a list/tuple of strings intro a string by
effectively concatenating everything in the list/tuple together,
you probably want to use the `str.join()` method.
The invoking string should be whatever you want to appear between each element of the list/tuple,
the glue, so to speak.
For pure concatenation this is `""`, but you can get pretty exotic with it.
This can be a very powerful tool for printing lists of things with nice formatting.

```py live_py title=Join
l = ["3","1","4","1","5"]
t = ("9","2","6","5","3")
print("".join(l))               # "31415"
print("".join(t))               # "92653"

print("+".join(l))              # "3+1+4+1+5"
print(" * ".join(l))            # "3 * 1 * 4 * 1 * 5"
print("[" + ", ".join(l) + "]") # "[3, 1, 4, 1, 5]" 
```

## Checking Containment

We can check if some value is in a list/tuple/string (any collection generally)
with the `in` keyword.
`value in collection` evaluates to `True` if `value` is in `collection` and `False` otherwise.

```py live_py title=In
print("3 in [1,2,3]:", 3 in [1,2,3])         # True
print("0 in (1,2,3):", 0 in (1,2,3))         # False
print("'H' in 'Hello':", 'H' in 'Hello')     # True
print("'h' in 'Hello':", 'h' in 'Hello')     # False

# For strings, in can work for sub-string
print("'Hel' in 'Hello':", 'Hel' in 'Hello') # True
```

### Non-containment

There are actually two ways to check if `value` is **not** in `collection`.
Since `value in collention` returns a boolean, `not (value in collention)`
would get the negation.
(`not value in collention` is equivalent,
but the parentheses are good for clarity if you don't really know the precedence of operators.)
But as a more english-intuitive option, we also have `value not in collection`.

```py live_py title=Not_In
value = 0
collection = [1,2,3]

print(value in collection)         # False
print(not value in collection)     # True
print(value not in collection)     # True
print(not value not in collection) # False
```
