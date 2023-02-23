---
title: Section 04 (Jared Yeager)
---

# Lists, Tuples, and Strings

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

## Tuples, Lists, ... and Strings

We have covered various types (`int`, `float`, `str`, `bool`) up to now.
And we have used variables to store and access objects of these types.
But there is a weakness in out ability to hold information,
we don't have a good way to, say, hold 100 `int`s. And wanting to take an average of
100 numbers is not an unreasonable goal.

## List Methods

### What Are Methods?

*Methods* are a weird kind of function associated with instances of given types.
And you need an instance of that type to use that method.

For example, `append(element)` is a method for lists. So if you have a list `l`,
you can invoke the `append()` method like so: `l.append(3)`.

We've seen the dot `.` before in a different context.
My intuition is that `foo.bar` Is saying something like
"get the `bar` attribute/variable/function/something from `foo`":
* `math.sqrt()` is "get the `sqrt()` function from the `math` module (library)".
* `math.pi` is "get the `pi` constant from the `math` module (library)".
* `l.append()` is "get the `append()` method from `l`". And if `l` is list,
it has an append method associated with it.

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

## Slicing

You can do way more than just indexing,
you can extract sub-list/tuple/strings called *slices*.

For a list (or tuple or string) `l`,
you can get the element at an index `index` via `l[index]`.
There is a generalised indexing form though `l[from:to:step]`.
This gets you a sub-list/tuple/string based on the indices from `from` (inclusive) to
`to` (exclusive) in increments of `step`.

This really is best seen with examples:
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

And yes, you **can** assign to a slice:
```py live_py Slice_Assignment
l = [0,1,2,3,4,5]
print(l)          # [0,1,2,3,4,5]
l[::2] = l[1::2]
print(l)          # [1,1,3,3,5,5]
l = l[::-1]
print(l)          # [5,5,3,3,1,1]
```
