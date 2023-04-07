---
title: Section 04 (Jared Yeager)
---

# Modules and Mutability

This is sort of two mini-lectures.

## Built-in Modules

We already have some exposure to modules, such as the `math` module.

*Built-in* Modules are just modules that come with the official python installation.

These are different from module we create ourselves, which we will see later in this lecture.

These are also different from modules we acquire from the great aether of the internet,
which we will see later in this course.

### Learning to Use New Modules

There are more modules out there than we could conceivably keep track of,
and more function within most modules than we could reasonably remember.

A fundamental skill in programming is the ability to look up information about
modules or functions that you haven't used much or at all before.

When encountering a new function/module or when wanting to use one that we
don't quite remember the details of,
a reasonable first step is searching (via a search engine) for
"python [module/function name]".
(Simply, when encountering a new issue, searching for
"python [issue/problem/question]" makes a lot of sense.)

The [official documentation](https://docs.python.org/3/)
is a good reference for things you've run into before,
and for getting the idea of the content of a new module.
It can have a lot of written technical specifics and details
that may not make enough sense yet though.

When first playing with a new function, I find it really helpful to see some examples.
There a number of websites I see coming up in searches that generally have examples
or example-oriented explanations:
* geeksforgeeks.org
* w3schools.com
* tutorialspoint.com
* realpython.com
* programiz.com

And finally, for more specific questions, stackoverflow.com is basically the forum
I expect to run across while searching.

### Some Common Modules

We've run into a number of built-in modules already.

Here are some common modules that may have been of use so far in this course
or were explored more recently in lectures/slides:
* [`math`](https://docs.python.org/3/library/math.html):
contains a plethora of mathematical operations.
* [`string`](https://docs.python.org/3/library/string.html):
contains collections of "all letters", "all digits", things like that.
* [`random`](https://docs.python.org/3/library/random.html):
useful for random number generation or making random choices.
* [`pprint`](https://docs.python.org/3/library/pprint.html):
useful for printing things in a more aesthetically pleasing manner.
* [`datetime`](https://docs.python.org/3/library/datetime.html):
useful for working with dates and times and the differences between them.

## Importing Modules

We've already done some module importing.
But there are actually a number of fancy import incantations we haven't seen yet.

### `import x`

We can import a module to gain access to it and all therein.

The syntax for this is `import module_name`,
where `module_name` is the name of the module to import.

This is what we are already familiar with, but I note it for completeness.

An example:

```py live_py title=Import
import datetime

now = datetime.datetime.now()
print(f"today        : {now}")

giga_sec = datetime.timedelta(seconds=10**9)
print(f"10^9 secs    : {giga_sec}")

future = now + giga_sec
print(f"1Gs from now : {future}")
```

### `import x as a`

We can import a module and give it a new name.

The syntax for this is `import module_name as new_name`,
where `module_name` is the name of the module to import and `new_name` is what we rename it to.

For example, `datetime` is kind of a long word and I'm lazy,
so I'll rename it to `dt`:

```py live_py title=Import_As
import datetime as dt

now = dt.datetime.now()
print(f"today        : {now}")

giga_sec = dt.timedelta(seconds=10**9)
print(f"10^9 secs    : {giga_sec}")

future = now + giga_sec
print(f"1Gs from now : {future}")
```

### `from x import y,z`

We can import a specific *attribute* (variable, function, class, etc.) from a module.
If we use this to get attribute `y` from module `x`,
we can just use `y` in code instead of `x.y`.

The syntax for this is `from module_name import attribute_name`,
where `module_name` is the name of the module of interest
and `attribute_name` is the attribute we want.

We can also have multiple attributes separated by commas.

For example,
let's get the `datetime` and `timedelta` attributes from `datetime` directly,
and avoid the need to write `datetime.`:

```py live_py title=From_Import
from datetime import datetime,timedelta

now = datetime.now()
print(f"today        : {now}")

giga_sec = timedelta(seconds=10**9)
print(f"10^9 secs    : {giga_sec}")

future = now + giga_sec
print(f"1Gs from now : {future}")
```

### `from x import y as b,z as c`

This allows us to import a specific *attribute* (variable, function, class, etc.)
from a module and give it a new name.

The syntax for this is `from module_name import attribute_name as new_name`,
where `module_name` is the name of the module of interest,
`attribute_name` is the attribute we want, and `new_name` is what we rename it to.

We can also have multiple attributes and new names separated by commas.

For example, to be really confusing,
I'll rename `datetime.datetime` to `dt` and `datetime.timedelta` to `td`:

```py live_py title=From_Import_As
from datetime import datetime as dt,timedelta as td

now = dt.now()
print(f"today        : {now}")

giga_sec = td(seconds=10**9)
print(f"10^9 secs    : {giga_sec}")

future = now + giga_sec
print(f"1Gs from now : {future}")
```

### `from x import *`

I want to mention this exists, and then talk about why **you probably shouldn't do it**.

This is basically `from x import y` for every `y` that exists.
The issue with this is potential name collisions.

For example, `math` and `numpy` (a big non-built-in module) both have a `log()` function
in them. So if both `from math import *` and `from numpy import *` are done,
then `log()` will refer to the later one loaded, obscuring the earlier one loaded.

(I can't demo this particular case because the web-python uses only built-in libraries.)

Moreover, you might have name collisions between variables/functions you load
and variables/functions you have. I can certainly imagine having functions or variables named
`digits`, `match`, or `search`,
those would have collisions with functions and constants in modules I've used quite a bit.

## Making your own Modules

Plot twist: You've been doing this the whole time!
The python scripts you write can be treated as a module and imported into another script.

Since web-python doesn't have obvious scripts, you'll have to follow along in your editor.
I actually do recommend having a sandbox project that you can just go to
in order to play around and test stuff.

For this section, I will assume you have some project/folder with a `foobar.py` and a
`main.py` inside it.

Let the contents of `foobar.py` be:

```py
def foo():
  print("Foo!")

def bar():
  print("Bar!")

print("I'm foobar.py!")
```

If you ran `foobar.py`, you would see the output:

```
I'm foobar.py!
```

However, This file, `foobar.py`, can be treated as a module named `foobar`.
And so we could have the contents of `main.py` be:

```py
import foobar

print("I'm main.py!")
foobar.foo()
foobar.bar()
```

If you ran `main.py`, you would see the output:

```
I'm foobar.py!
I'm main.py!
Foo!
Bar!
```

Those last three lines make sense, but what about the first?
It turns out that when a module is loaded, it is basically run,
so global code is executed.

This load only needs to happen for the first import statement involving that module though
(presumably the module is loaded and stored on the first import,
with subsequent import calls only needing to set some names).

So if the code for `main.py` were:

```py
from foobar import foo
from foobar import bar

print("I'm main.py!")
foo()
bar()
```

You would still only see

```
I'm foobar.py!
I'm main.py!
Foo!
Bar!
```

### `if __name__ == "__main__":`

What if you didn't want a file/module's global code to be run when you import it?

Well, the exact mechanics of why this incantation works are a little goofy and in the weeds but ...
there a condition you can use that will only evaluate to `True` if you are the file/module being run,
and not a file/module being loaded: `__name__ == "__main__"`.

In the module being run `__name__` is `"__main__"`.
In modules being loaded, `__name__` is the module's name (e.g., `"foobar"`).

So if `foobar.py` from earlier was:

```py
def foo():
  print("Foo!")

def bar():
  print("Bar!")

if __name__ == "__main__":
  print("I'm foobar.py!")
```

Running `foobar.py` would still produce:

```
I'm foobar.py!
```

But running `main.py` would now produce only:

```
I'm main.py!
Foo!
Bar!
```

## Mutability

Mutability is one of those "be aware of this" type of issues.
You are not expected to understand the intricacies of what is truly happening,
But just be loosely aware of it in case some issue based on mutability arises. 

What do you need to know?
There are types that are *mutable* and types that are *immutable*,
and if you pass an object of a mutable type to a function,
and change it in that function,
that change may persist outside that function call.

`int`s, for instance, are immutable. Consider (run) the following:

```py live_py title=Mut_int
def mut_int(y):
  print(f"y (in fun, before): {y}")
  y += 1
  print(f"y (in fun, after) : {y}")

x = 5
print(f"x (global, before): {x}")
mut_int(x)
print(f"x (global, after) : {x}")
```

`y` is updated in the function, but that has no bearing on `x` outside the function.

Lists, on the other hand, are mutable. Consider (run) the following:

```py live_py title=Mut_List
def mut_list(lst_f):
  print(f"lst_f (in fun, before): {lst_f}")
  lst_f.append(4)
  print(f"lst_f (in fun, after) : {lst_f}")

lst_g = [3, 1]
print(f"lst_g (global, before): {lst_g}")
mut_list(lst_g)
print(f"lst_g (global, after) : {lst_g}")
```

`lst_f` is updated in the function, and `lst_g` ends up changing as well.

As for **why** you see this difference in behaviour,
the technical stuff is somewhat outside of scope for this class,
so I'll include it in sections below, but a very short overview:
* When you pass a parameter to the function, **it is the same object in memory**
* `y += 1` didn't change the object `int` `5` to `int` `6`,
it set the variable `y` to `int` `6` (and so `y` and `x` no longer referred to the same object).
* `lst_f.append(4)` changed (**mutated**) the object `list` `[3, 1]` to
`list` `[3, 1, 4]` (`lst_f` and `lst_g` still referred to the same object,
and so that change was reflected in `lst_g`).

Stepping through these examples and code in the lecture slides in pythontutor.com
may be helpful in visualising this distinction.

But as for what you need to really remember right now:
If you pass an object of a mutable type to a function,
and change it in that function,
that change may persist outside that function call.

As for what types are mutable, here are the ones we already know:
* Mutable: `list`, `set`, `dict`
* Immutable: `int`, `float`, `bool`, `str`, `tuple`

---

:::caution

Material from here on was not part of the lecture,
but is stuff I think is helpful to note.

It also has be going a bit off script and talking more
a slightly different way in which I conceptualise mutability.

:::

---

### Variables and Addresses

Mutability isn't actually about "if we change the object, does that change persist",
It's about "can we **truly** change the **object itself**,
or do we end up making **clones/new objects**".

Earlier in the semester, we introduced memory diagrams, talked about
objects as value-type bundles, and associated those with variable names
(like `x|6|int` and `y|"Hello"|str`).

That model has some issues. The object bundling is fine,
but the issue is that multiple variable names can be associated with the same object.

So we have our objects (value-type bundles). Every object exists somewhere in the vast
aether-soup of memory. The location where it lives/exists is called its address.
We humans also generally live at addresses, though ours are more complicated.
The object addresses are just numbers, like 12345 (as opposed to 12345 Aether-Soup Lane).

Variables are technically probably more like nicknames for these address than anything else.
We can get the address of the object associated with a variable with the `id()` function.

```py live_py title=Id
x = 31415
y = "Hello"
z = False

print(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")
print(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")
print(f"z referes to the {type(z).__name__:>4} {z} at address {id(z):>11} Aether-Soup Lane")
```

(Why is the web-python giving negative addresses for `int`s?
That makes no sense. This thing is cursed.)

Here's where things get dicey. Two variables can refer to the **same object**,
we'll see this when we pass things to function, but even simple assignment has this effect.

```py live_py title=Id_Equal
x = "Hello"
y = x

print(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")
print(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")
```

Notice, `y = x` doesn't copy `x` to `y`, it makes them reference the
**exact same object in memory**.

And here's where mutability comes in. If a type is immutable,
then no methods or operations associated with that type will change the value of
the object, so no weird issues arise.

```py live_py title=Id_Upper
x = "Hello"
y = x

print(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")
print(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")

print("CAPITALISING")
z = x.upper() # returns a new object

print(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")
print(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")
print(f"z referes to the {type(z).__name__:>4} {z} at address {id(z):>11} Aether-Soup Lane")
```

But for mutable types, some methods or operations may change the value of the object,
and that will be visible to every variable referring to that object.

```py live_py title=Id_Update
x = [3, 1, 4, 1, 5]
y = x

print(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")
print(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")

print("UPDATING")
x[4] = 6 # changes (mutates) an existing object

print(f"x referes to the {type(x).__name__:>4} {x} at address {id(x):>11} Aether-Soup Lane")
print(f"y referes to the {type(y).__name__:>4} {y} at address {id(y):>11} Aether-Soup Lane")
```

### Variables and Passing

When we start passing things to functions,
this issue arises again and feels even more obscured.
The parameter of the function and the variable passed in
both reference the same object.

```py live_py title=Passing_Id
def print_text(text):
  print(f"print_text's text  : (lives at {id(text)}): {text}")

word = "Hello!"

print(f"global word, before: (lives at {id(word)}): {word}")
print_text(word)
print(f"global word, after : (lives at {id(word)}): {word}")
```

And so if a mutable type is passed to a function,
and we update the value of the object passed in,
this change is visible outside the function.

```py live_py title=Passing_Updating
def print_num(nums):
  print(f"print_num's nums, before: (lives at {id(nums)}): {nums}")
  # This updates the object
  nums[4] = 6
  print(f"print_num's nums, after : (lives at {id(nums)}): {nums}")

num_list = [3, 1, 4, 1, 5]

print(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")
print_num(num_list)
print(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")
```

### Mutating Operations

As a final complicating factor, even if a type is mutable, not every operation, method,
or action associated with it will mutate it.

Compare the two below, which actually behave remarkably differently.

```py live_py title=Passing_Append
def print_num(nums):
  print(f"print_num's nums, before: (lives at {id(nums)}): {nums}")
  # This updates the object
  nums += [9]
  print(f"print_num's nums, after : (lives at {id(nums)}): {nums}")

num_list = [3, 1, 4, 1, 5]

print(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")
print_num(num_list)
print(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")
```

```py live_py title=Passing_Add
def print_num(nums):
  print(f"print_num's nums, before: (lives at {id(nums)}): {nums}")
  # This creates a new object from the existing two
  nums = nums + [9]
  print(f"print_num's nums, after : (lives at {id(nums)}): {nums}")

num_list = [3, 1, 4, 1, 5]

print(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")
print_num(num_list)
print(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")
```

So if you want to get really granular, you just need to be careful around the use
of mutating operations/methods.

### Copying the Avoid This

Alright, so what if you want to pass a mutable type,
and mutate it in a function, but not have that alter things outside the function.

Well, you can always pass a copy to the function.
There is, in fact, a module for that: the `copy` module.
In particular, `copy.deepcopy()` should ensure you have a deep enough copy to avoid this issue.

```py live_py title=Passing_Copy
import copy

def print_num(nums):
  print(f"print_num's nums, before: (lives at {id(nums)}): {nums}")
  nums += [9]
  print(f"print_num's nums, after : (lives at {id(nums)}): {nums}")

num_list = [3, 1, 4, 1, 5]

print(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")
print_num(copy.deepcopy(num_list))
print(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")
```

That's it. You could also have the copying done inside the function if you wanted to.
That actually might make more sense since you could forget about the need to do
it once the function is done.

```py live_py title=Making_Copy
import copy

def print_num(nums):
  nums = copy.deepcopy(nums)
  print(f"print_num's nums, before: (lives at {id(nums)}): {nums}")
  nums += [9]
  print(f"print_num's nums, after : (lives at {id(nums)}): {nums}")

num_list = [3, 1, 4, 1, 5]

print(f"global num_list,  before: (lives at {id(num_list)}): {num_list}")
print_num(num_list)
print(f"global num_list,  after : (lives at {id(num_list)}): {num_list}")
```
