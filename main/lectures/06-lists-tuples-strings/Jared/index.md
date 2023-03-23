---
title: Section 04 (Jared Yeager)
---

# Lists, Tuples, and Strings

## Assignment Updates

Stuff due this week:
* Participation 3 **Due Thursday 3/2**
* Quiz 4: **Due Thursday 3/2**
* HW 2: **Due Friday 3/3**
* Lab 4: **Due Friday 3/3**

Stuff due next week:
* (Presumably) Participation 4 **Due Thursday 3/9**
* (Presumably) Quiz 5: **Due Thursday 3/9**
* HW 3: **Due Friday 3/10**
* Lab 5: **Due Friday 3/10**

## Lists, Tuples, ... and Strings

We have covered various types (`int`, `float`, `str`, `bool`) up to now.
And we have used variables to store and access objects of these types.
But there is a weakness in out ability to hold information.
We don't have a good way to hold, say, 100 `int`s. And wanting to take an average of
100 numbers is not an unreasonable goal.

And so we have a number of *collection type*s or *collection*s in python.
These are types that exists to store a bunch of information.
Within those are *sequence type*s, types that store a bunch of things in some order.

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
generally obtained via `len()` function).

```py live_py title=Index_List
l = [3, 1, 4, 1, 5]
print(l)           # [3, 1, 4, 1, 5]
print(l[0])        # 3
print(l[1])        # 1
print(l[len(l)-1]) # 5
```

Finally, you can change the elements at an in index of the list.

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
print(t)        # (3, 1, 4, 1, 5)
t[0] = 5        # Error
```

### Strings

Plot twist: string are also a kind of sequence type.
Or at least enough so that they support indexing.
That said, when you index into a string you just get a string of length 1.

```py live_py title=Index_String
s = "Hello, World!"
print(s[2])         # "l"
print(s[4])         # "o"
print(s[10])        # "l"
```

Like tuples however, you can not edit them.

```py live_py Edit_String
s = "Hello, World!"
s[12]               # "!"
s[12] = "?"         # Error
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
partly because they are more flexible, but partly because other languages have list
analogues more than they do tuple analogues.

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
"get the `bar` attribute/variable/function/something from `foo`":
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
H1 = Hi.replace("o", "0")
print(Hi) # Hello, World!
print(hi) # hello, world!
print(HI) # HELLO, WORLD!
print(H1) # Hell0, W0rld!
```

**Notice that the `Hi` used to invoke these method was unchanged.**

This behaviour is remarkable different from lists.
Methods **can** change the thing used to call them, but they may not.
The only real way to know is to read the documentation, and better yet:
play around and test them in a REPL or some such.

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
especially of say `point1[0]` showed up multiple times in a calculation.
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
especially if those variables are used multiple times each.

The initial assignment isn't the nicest.
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
It turns out, there is shortcut for this: `l[-1]`.

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
There is a generalised indexing form though `l[from:to:step]`.
This gets you a sub-list/tuple/string based on the indices from `from` (inclusive) to
`to` (exclusive) in increments of `step`.

In fact, and of these three can be left blank (as long as the `:` are still there).
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
generally this `""`.

```py live_py title=Join
l = ["3","1","4","1","5"]
t = ("9","2","6","5","3")
sl = "".join(l) # "31415"
st = "".join(t) # "92653"
print(sl)
print(st)
```

## Checking Containment

We can check if some value is in a list/tuple/string (any collection generally)
with the `in` keyword.
`value in collection` evaluate to `True` if `value` is in `collection` and `False` otherwise.

```py live_py title=In
print("3 in [1,2,3]:", 3 in [1,2,3])
print("0 in (1,2,3):", 0 in (1,2,3))
print("'H' in 'Hello':", 'H' in 'Hello')
print("'h' in 'Hello':", 'h' in 'Hello')

# For strings, in can work for sub-string
print("'Hel' in 'Hello':", 'He' in 'Hello')
```

