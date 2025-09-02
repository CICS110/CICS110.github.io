---
title: Section 04 (Jared Yeager)
---

# Looping (For)

I suspect this is mostly going to be an example dump.

Any sort of looping you want to do can be accomplished with a while loop.
But, as is often the case in the programming world,
we have special machinery for some sub-cases.
*for loop*s are not different in kind from while loops,
they are just more convenient for some cases.

## Iterating over Something

So what is the case we want to address with for loops?
The "problem we want to solve"?

The while loop is most natural when your mental framing of a problem is
"I want to do X while/as long as Y" or "I want to do X until Y".
The for loop is for "I want to do X for each/every Z":
* "For every/each element in this list"
* "For every/each element in this tuple"
* "For every/each letter in this string"
* "For every/each number in this range" (this also captures "do something W times")

The countdown ("10 ... 9 ... ... 1 ... Blastoff!") example from last time is an example of this,
it has us printing ("doing X") every number from 10 to 1 ("the range 10 to 1").

## For Loops

Let's see some explicit syntax. For loops are of the form:

```py
for variable_name in iterable:
  code # that may use variable_name
```

We have the keyword `for`, a variable name (`variable_name`) of our choice,
the keyword `in`, something that can be iterated over (`iterable`), a `:`,
and some **indented** block of `code` (can be multiple lines)
that may use `variable_name` in it.

For every element in `iterable`, `variable_name` is set to that element,
and `code` is run.
A way to think about that, is that you are running `code` for every possible
assignment of `variable_name` such that
[`variable_name in iterable`](../lists-tuples-strings/Jared#checking-containment) is true.

If `iterable`'s elements have some sort of canonical ordering,
`variable_name` will be assigned and `code` run based on that ordering
(so lists go in the order you probably expect, for instance).
This'll be clearer with some examples.

As for what can be iterated over/what is an *iterable*:
* That we already know:
  * lists
  * tuples
  * strings
* That we will see in this lecture:
  * ranges
* That we will see soon:
  * dictionaries
  * sets
* That we'll later:
  * maps
  * filters
* That I don't know when/if we'll see:
  * zips
  * enumerations
* That we probably won't see:
  * generators

Quite a lot! Hence, examples to come.

### On Lists

Here's an example that prints a bunch of elements in a list:

```py live_py title=Print_List
# a list of not all strings that we want to print
ones = [True, 1, 1.0, "One"]
for elem in ones:
  print(elem)
```

`elem` hold the values `True`, `1`, `1.0`, and `"one"`, in that order.

### On Tuples

Here's an example that prints whether the days of the week are weekdays or weekends.

```py live_py title=Get_Type
for day in ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"):
  if day == "Saturday" or day == "Sunday":
    print(f"{day}: Weekend!")
  else:
    print(f"{day}: Weekday")
```

### On Strings

Here is an example that inverts capitalisation in a string.

```py live_py title=Reverse_Capitalisation
text = input("Please enter some text: ")

text_reverse_case = ""
for letter in text:
  if letter.isupper():
    letter_reverse_case = letter.lower()
  elif letter.islower():
    letter_reverse_case = letter.upper()
  else: # for punctuation and the like
    letter_reverse_case = letter
  text_reverse_case += letter_reverse_case

print(text_reverse_case)
```

## Ranges

Say you want to iterate a specific number of times, maybe even doing something
based on the iteration number, then ranges are probably what you want to use as the iterator.

The `range()` function takes 1 to 3 arguments:
* `range(stop)`
* `range(start, stop)`
* `range(start, stop, step)`

This works a lot like slicing in that the range starts at and includes `start` (default 0),
stops at and does not include `stop`, and has a step size of `step`.

It is important to note that ranges are their own thing, of type `range`.
So if you wanted to print one to see what values it has,
you would need to convert it into a list or something first.

```py live_py title=Range_Type
# Displaying the range as a range
nums_range = range(10)
print(f"nums_range     : {nums_range}")
print(f"nums_range type: {type(nums_range)}")

# Displaying the range as a list
nums_list = list(nums_range)
print(f"nums_list      : {nums_list}")
print(f"nums_list type : {type(nums_list)}")
```

With that noted, examples of making ranges of each type
(and converting them to lists to print):

```py live_py title=Range_Arguments
print(list(range(10)))       # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list(range(5, 15)))    # [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
print(list(range(5, 55, 5))) # [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
```

However, ranges are iterable,
so we don't need to convert them to a list if we want to use them in a for loop.
Here's how we could have used a `range()` to do the blastoff example from before.

```py live_py title=Blastoff
for i in range(10,0,-1):
  print(f"{i}...")
print("Blastoff!")
```

## Nesting

We can have loops inside loops, we refer to this an *nesting*.
We need an additional level of indentation for every level of nesting.
(We've already seen this with branching and while-looping,
perhaps I was supposed to hide that until now, whoops.)

```py live_py title=Nesting
for x in range(3):
  print(f"Start of x loop (x = {x})")
  for y in range(3):
    print(f"  Start of y loop (y = {y})")
    print(f"    (x, y, x+y): ({x}, {y}, {x+y})")
    print(f"  End of y loop (y = {y})")
  print(f"End of x loop (x = {x})")
```

Stepping through this code in a debugger
could be helpful if it's unclear why the print order is what it is.

### Breaking and Continuing

`break` and `continue` work with for loops in the same way as with while loops
(note that continue moves on to the **next** value in the iterable).
Both interact with nested loops in the same way as well:
they affect the inner-most loop that they are in.

Here's an example of triple loop over `x`, `y`, and `z` that skips when the sum of the three
is odd and ends the middle loop when the sum of `x` and `y` is 3 or more.
You can uncomment the `break` and `continue` prints to see more information.

```py live_py title=Break_and_Continue
for x in range(3):
  for y in range(3):
    if (x + y) >= 3:
      print(f"Breaking!   (x, y)   : ({x}, {y})")
      break
    for z in range(3):
      if (x + y + z) % 2 == 0:
        # print(f"Continuing! (x, y, z): ({x}, {y}, {z})")
        continue
      print(f"(x, y, z; x+y, x+y+x): ({x}, {y}, {z}; {x+y}, {x+y+z})")
```

This is something that would be much easier to follow if stepping through in a debugger.
The hope would be that from a given state in the code (given line and `x`, `y`, `z` values)
you can correctly anticipate what the program will do next.

---

:::caution

Material from here on was not part of the lecture,
but is stuff I think is quite useful to know about.

:::

---

## Unpacking/Destructuring

I had [basic unpacking/destructuring](../lists-tuples-strings/Jared#unpackingdestructuring)
as extra stuff in an earlier set of notes.

You can do that in the `for`-`in` line of a for loop,
in a case where you had something like a list of tuples.

```py live_py title=Unpacking
points = [(3,1), (4,1), (5,9), (2,6), (5,3)]
xs = []
ys = []

for x, y in points:
  xs += [x] # xs = xs + [x], i.e. append
  ys += [y] # ys = ys + [y], i.e. append

print(xs)
print(ys)
```

## Zipping

There is a function called `zip()` that takes in any number of iterables and returns
something of type `zip`.
This `zip` object can be cast to a list/tuple or iterated over directly with a for loop.

The first element in a `zip` object is a tuple containing the first elements of all
arguments to the `zip()` function. The second a tuple of all the second arguments.
And so on.

So for example, I can do the inverse of the previous example:

```py live_py title=Packing
xs = [3, 1, 2, 3, 9]
ys = [1, 5, 6, 5, 7]
zs = [4, 9, 5, 8, 9]

# List conversion of zip
print(list(zip(xs, ys, zs)))

# Logically equivalent loop-over-zip approach
points = []
for xyz in zip(xs, ys, zs):
  points += [xyz]
print(points)
```

Naturally, if you actually wanted the zip to be a list, you'd do the `list(zip(...))`
approach, the loop is there to show it works.

As for an example where the loop over a zip is more natural,
there was a point in an auto-grader for a guess a number game
where I wanted a bunch of minima, maxima, and random guesses in those ranges
nicely bundled together to run tests on.

```py live_py title=Guess_a_Number
import random
rounds = 10 # how many rounds I want to do this for

# get rounds (10) random minima and maxima
mins = random.choices(range(0,10), k=rounds)
maxs = random.choices(range(10,100), k=rounds)

# get a bunch of guesses in the respective min to max range
guesses = []
for min_num, max_num in zip(mins, maxs):
  guess = random.choice(range(min_num, max_num+1)) # min to max (inclusive)
  guesses += [guess]

# print full lists
print("mins    :",mins)
print("guesses :",guesses)
print("maxs    :",maxs)
print()

# print respetive values
for min_num, guess, max_num in zip(mins, guesses, maxs):
  # Here I could do some work with paired up guesses and their ranges
  print(f"{min_num} <= {guess} <= {max_num}")
```

## Enumerating

Sometimes you do actually want the index and the element, maybe for pretty printing.
Certainly by iterating over indices you can get both (for you can get elements from indices)

```py live_py title=Indices
points = [(3, 1, 4), (1, 5, 9), (2, 6, 5), (3, 5, 8), (9, 7, 9)]

for i in range(len(points)):
  x, y, z = points[i] # normal destructuring
  print(f"Point {i+1}: x = {x}, y = {y}, z = {z}")
```

But having to do that `points[i]` thing is such a bother (it's really not that bad),
and so there is fancy machinery to save us from this one line.

We have `enumerate()`, which takes any iterable and generates something of type `enumerate`.
The `enumerate` can either be iterated over in a loop (or used anywhere else a iterator can be)
or turned into a list or such.

The first element in an `enumerate` object is a tuple containing `0` (the first index) and
the first element of the argument to the `enumerate()` function.
The second a tuple of `1` and the second element of the argument.
And so on.

Behold the power of that, and nested destructuring:

```py live_py title=Enumerate
points = [(3, 1, 4), (1, 5, 9), (2, 6, 5), (3, 5, 8), (9, 7, 9)]

for (i, (x, y, z)) in enumerate(points):
  print(f"Point {i+1}: x = {x}, y = {y}, z = {z}")
```
