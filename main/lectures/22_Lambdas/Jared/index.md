---
title: Section 04 (Jared Yeager)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Map, Filter, and Lambda Functions

In a [previous lecture](../looping-patterns/Jared) we learned about mapping and filtering.
* Mapping is transforming every element in a collection.
* Filtering is getting every element in a collection that satisfies some condition.

We learned about these in the context of comprehensions,
and how comprehensions let us do these things fairly succinctly.

Now we introduce special functions for an alternative way to do these things,
and in the process, introduce the concept of "higher-order functions".

## Map and Filter

### Going Meta (Higher-Order Functions)

:::info

This sub-section is actually outside the scope of what you really need to know,
but it is what underlies our ability to have the `map()` and `filter()` functions
at all.

I don't feel comfortable not addressing the elephant in the room
that we will be standing on for the rest of the lecture.

:::

Consider a couple of different mapping examples:
* Converting a list of strings to ints
* Converting a list of ints to strings
* Square rooting a list of numbers
* Squaring a list of numbers

<Tabs>
<TabItem value="str_to_int" label="String to Int" default>

```py live_py title=String_to_Int
l = ["3","1","4","1","5","9","2"]
new_l = []
for x in l:
  new_l.append(int(x))
print(new_l)
```

</TabItem>
<TabItem value="int_to_str" label="Int to String">

```py live_py title=Int_to_String
l = [3,1,4,1,5,9,2,6]
new_l = []
for x in l:
  new_l.append(str(x))
print(new_l)
```

</TabItem>
<TabItem value="sqrt" label="Square Root">

```py live_py title=_Square_Root
from math import sqrt

l = [3,1,4,1,5,9,2,6]
new_l = []
for x in l:
  new_l.append(sqrt(x))
print(new_l)
```

</TabItem>
<TabItem value="square" label="Square">

```py live_py title=Square
l = [3,1,4,1,5,9,2,6]
new_l = []
for x in l:
  new_l.append(x ** 2)
print(new_l)
```

</TabItem>
</Tabs>

In all of these, the core mapping as always of the form:

```py
new_list = []
for element in COLLECTION:
  new_list.append(MAP_FUNCTION(element))
```

And in that view, these mappings are all the same except for our choices of
* `COLLECTION`, the collection we want to transform, and
* `MAP_FUNCTION`, the transformation in question.

If you ever find yourself thinking "all of these things are the same except for ..."
The you probably want to extract the similarities into a function
and have those differences be the parameters.

You might think there is a catch here, in that one of our two parameters-to-be,
`MAP_FUNCTION`, is a **function**.
But, in Python, we can totally just pass functions to functions.
We call functions that take in (or return) functions *higher-order functions*,
and we say "Python supports higher-order functions".

And so we can make this general mapping function:

```py live_py title=Meta_Map
from math import sqrt

def my_map(fun, itr): # map() is taken, as we will soon see
  new_list = []
  for element in itr:
    new_list.append(fun(element))
  return new_list

def square(x):
  return x ** 2

ints = my_map(int, ["3","1","4","1","5","9","2"])
strs = my_map(str, [3,1,4,1,5,9,2,6])
sqrts = my_map(sqrt, [3,1,4,1,5,9,2,6])
squares = my_map(square, [3,1,4,1,5,9,2,6])
print(ints)
print(strs)
print(sqrts)
print(squares)
```

Notice how I needed to make a function for `square` in order to be able to pass it in,
we'll come back to this later.

### Map

We've just re-invented the wheel.
Python already has a function, `map()`, that takes in a function for the transformation and
a collection to map the function over. `map()` returns a special `map` object,
which can be converted to a list or other collection type in the usual manner.

```py live_py title=Map
to_nums = map(int, ["3","1","4","1","5","9","2"])
print(to_nums)
print(list(to_nums))
```

This is generalised higher-order mapping function,
so great for applying functions to a whole collection.

```py live_py title=Map_
from math import sqrt

def square(x):
  return x ** 2

ints = map(int, ["3","1","4","1","5","9","2"])
strs = map(str, [3,1,4,1,5,9,2,6])
sqrts = map(sqrt, [3,1,4,1,5,9,2,6])
squares = map(square, [3,1,4,1,5,9,2,6])
print(list(ints))
print(list(strs))
print(list(sqrts))
print(list(squares))
```

### Filter

Analogously to before, the core portion of a filtering operation looks like:

```py
new_list = []
for element in COLLECTION:
  if CONDITION(element):
    new_list.append(element)
```

We can see the only variables are:
* `COLLECTION`, the collection we want to filter, and
* `CONDITION`, a function that checks if we want to keep an element or not.

So we could imagine a sort of "general filter" function.

```py live_py title=Meta_Filter
def my_filter(cond, itr): # filter() is taken, as you may imagine
  new_list = []
  for element in itr:
    if cond(element):
      new_list.append(element)
  return new_list

def is_even(x):
  return x % 2 == 0

def is_odd(x):
  return x % 2 == 1

l = [3,1,4,1,5,9,2,6]
evens = my_filter(is_even, l)
odds = my_filter(is_odd, l)
print(evens)
print(odds)
```

But like before,
Python has a function, `filter()`, that takes in a function for the condition we want and
a collection to filter based on that condition being true.
`filter()` returns a special `filter` object,
which can be converted to a list or other collection type in the usual manner.

```py live_py title=Filter
def is_even(x):
  return x % 2 == 0

def is_odd(x):
  return x % 2 == 1

l = [3,1,4,1,5,9,2,6]
evens = filter(is_even, l)
odds = filter(is_odd, l)
print(list(evens))
print(list(odds))
```

## Lambdas

Remember how in order to map squaring across a list I needed to make a `square()` function
to give to the `map()` function?

```py live_py title=Square_Fun
def square(x):
  return x ** 2

squares = map(square, [3,1,4,1,5,9,2,6])
print(list(squares))
```

That's kind of annoying, or at least **I** don't like that.

Well, conveniently enough for us,
python has machinery for creating nameless, purely expression-based functions
on the fly.

These functions are known as lambda functions.
(The name comes from [lambda calculus](https://en.wikipedia.org/wiki/Lambda_calculus),
a very elegant, function-based model of computation.)
The python syntax for making such a function is:

```py
lambda COMMA_SEPARATED_VARIABLES: EXPRESSION_FOR_RETURN
```

The pieces are:
* The keyword `lambda`
* 0 or more variable names for parameters separated by commas
* A colon (`:`)
* An expression, that may use the parameters, for computing a return.

Some things to note:
* There is no return keyword, yet the thing to the right of the colon is always returned
* The function can only have an expression, no control flow stuff

As an example, `lambda x, y: 2*x + y` would be a nameless function that takes in
two variables, and returns twice the first plus the second.

And so we can do the map square from before as:

```py live_py title=Square_Fun_Lambda
squares = map(lambda x: x**2, [3,1,4,1,5,9,2,6])
print(list(squares))
```

Here are some more examples with filtering,
where the lambda function is used to invoke the methods:

```py live_py title=Filter_Lambda
l = ["Hello", "bye", "3.14159", "2178", "foo", "42"]
numbers = filter(lambda s: s.isdigit(), l)
words = filter(lambda s: s.isalpha(), l)
lowers = filter(lambda s: s.islower(), l)
print(list(numbers))
print(list(words))
print(list(lowers))
```

---

:::caution

Material from here on was not part of the lecture,
but is stuff that I think is necessary to complete the story.

:::

---

## When to Use What

We've seen that we can accomplish mapping and filtering both with comprehensions
and with the `map()` and `filter()` functions
(including with lambda functions if need be).

There is no "right way" to do things, but I want to offer my thinking about
where it makes sense to me to use each of these.

### `map()` and `filter()`

If we have a specific named function that we wish to map or filter with,
then I lean toward `map()` and `filter()` over comprehensions,
for example, mapping `int()` to convert a bunch of strings to ints, as below.

```py live_py title=Direct_Map_VS
l = ["3","1","4","1","5","9","2"]
print([int(x) for x in l])
print(list(map(int, l)))
```

If we want to map something **and then** filter the results
(other way around is a different story),
a comprehension isn't really a natural way to do that (you need a weird nested thing),
so `map()` and `filter()` are more natural to me.

Consider an example where we convert a bunch of strings to ints or `None`s (on error),
and then filter out the things we couldn't convert to ints.

```py live_py title=Map_Then_Filter_VS
def safe_int(s):
  try:
    return int(s)
  except:
    return None

l = ["314", "Hello", "foo", "42", "17.5", "2718", "bar"]
print([x for x in [safe_int(s) for s in l] if x is not None])
print(list(filter(lambda x: x is not None, map(safe_int, l))))
```

<details>
<summary><b>Extra: Well, Actually ...</b></summary>

That's assuming what we've taught you.
However, I would actually abuse the walrus operator
(`:=`, mid-expression assignment) and the order in which things are evaluated to
get a more viable comprehension.

```py live_py title=Map_Then_Filter_Walrus
def safe_int(s):
  try:
    return int(s)
  except:
    return None

l = ["314", "Hello", "foo", "42", "17.5", "2718", "bar"]
print([x for s in l if (x := safe_int(s)) is not None])
print([x for x in [safe_int(s) for s in l] if x is not None])
print(list(filter(lambda x: x is not None, map(safe_int, l))))
```

</details>

### Comprehensions

Where mapping and filtering are more abstractly concerned, comprehensions are my default.

If I need to make a lambda function in order to use `map()` or `filter()`,
I'll probably just do a comprehension. Such as the squaring from before.

```py live_py title=Square_VS
l = [3,1,4,1,5,9,2,6]
print([x**2 for x in l])
print(list(map(lambda x: x**2, l)))
```

If we want some sort of nesting, either of the loops generating/mapping the collection(s)
or of the resultant collection, I find comprehensions more natural to use.

Two examples below:
* Making a 1D collection of 2D points based on nested looping
(only really doable with comprehensions, I think)
* Making a 2D collection of 2D points based on nested mapping

```py live_py title=Nested_Mapping_VS
# 1D list can only really be done this way with comprehensions
print([(i,j) for i in range(3) for j in range(3)])
# 2D grid is grosser to do with lambdas
print([[(i,j) for j in range(3)] for i in range(3)])
print(list(map(lambda i: list(map(lambda j: (i,j), range(3))), range(3))))
```

Comprehensions are also much more natural in the case where you want to filter
**and then** map. For instance: getting all even numbers and then dividing those by two.

```py live_py title=Filter_Then_Map_VS
l = [3,1,4,1,5,9,2,6]
print([x//2 for x in l if x % 2 == 0])
print(list(map(lambda x: x//2, filter(lambda x: x % 2 == 0, l))))
```

### Lambdas

You may have noticed that my take is effectively:
if we want to use `map()` or `filter()` and need a lambda function,
we might as well use a comprehension.

So then where do lambdas fit in? Well, uh, the entire next optional section, but ...
basically any other time you want to give a function a pure-expression function
that isn't worth making a more permanent function.
Basically any time you want to avoid defining a more permanent function.

It just so happens that in Python mapping and filtering are already
really well covered by comprehensions.

But as an example, if I had a function that computed an approximate definite integral
(approximate bounded area under a curve),
I would pass in functions for things like $x^2$ or $x^3 + x$ as lambda functions.

```py live_py title=integral
def approx_integral(f, x_min, x_max, rects):
  width = (x_max - x_min) / rects
  return sum([width*f(x_min+i*width) for i in range(rects)])

print(approx_integral(lambda x: x, 0, 1, 250))
print(approx_integral(lambda x: x**2, 0, 1, 250))
print(approx_integral(lambda x: x**3 + x, 0, 1, 250))
```

## Reduce

We've talked now in two lectures about mapping and filtering,
but there is a third common idiom often spoken of in the same context: reducing.

Often we find ourselves wanting to take every element in a collection
and aggregate them together in some way. This is called *reducing*.

Some examples include:
* summation (adding every element in a collection together)
* multiplying every element in a collection together
* counting how many elements are in a collection
* getting the minimal or maximal element in a collection

Some more exotic example include:
* even sorting can be done by reducing
* even mapping and filtering can be done by reducing

Now that we have lambda functions, we can do mapping, filtering, and reducing
(comprehensions only have machinery for mapping and filtering)

### Iterative Form

Let's run with adding and multiplying together everything in our list as a
pair of examples.

Iteratively, we might do these:

```py live_py title=Sum_Itr
l = [3,1,4,1,5,9,2,6]
total = 0
for x in l:
   total += x
print(total)
```

```py live_py title=Prod_Itr
l = [3,1,4,1,5,9,2,6]
total = 1
for x in l:
   total *= x
print(total)
```

The core reduction is always of the form:

```py
accumulator = INITIAL_VALUE
for element in COLLECTION:
   accumulator = ACC_FUNCTION(accumulator, element)
```

We can see the variables are:
* `INITIAL_VALUE`, the initial value our accumulator is set to,
* `COLLECTION`, the collection we want to reduce, and
* `ACC_FUNCTION`, a function that folds an element of the collection into the accumulation.

Thus, a general function based on these is quite imaginable.

### Python Function

Lo and behold, the built-in module `functools` has a `reduce()` function.

`reduce()` takes in `ACC_FUNCTION`, `COLLECTION`, and an optional `INITIAL_VALUE`,
in that order.
* If the initial value is not provided,
the first element of the collection is used as the initial value,
and all subsequent elements folded in.
* If there is only one element (`COLLECTION` is empty and `INITIAL_VALUE` specified **or** `COLLECTION`
has one element and `INITIAL_VALUE` is unspecified), then `reduce()` returns that one element.
(Thus I like to set `INITIAL_VALUE` as a default if possible.)
* If there are no elements (`COLLECTION` is empty and `INITIAL_VALUE` is unspecified),
then an error occurs.

So our summation and product from earlier become:

```py live_py title=Sum_Reduce
from functools import reduce

l = [3,1,4,1,5,9,2,6]
total = reduce(lambda x, y: x + y, l, 0)
print(total)
```

```py live_py title=Prod_Reduce
from functools import reduce

l = [3,1,4,1,5,9,2,6]
prod = reduce(lambda x, y: x * y, l, 1)
print(prod)
```

Let's just get exotic with some more examples.
Factorial is just a specific product (1 to n), right?

```py live_py title=Factorial_Reduce
from functools import reduce

def factorial(n):
  return reduce(lambda x, y: x * y, range(1,n+1), 1)

for i in range(10):
  print(f"{i}! = {factorial(i)}")
```

Here's an example of computing the minimum and maximum,
this is a case where we don't really have of a good default to start with.

Note that ternary operators are kosher in lambda functions.

```py live_py title=Min_Max_Reduce
from functools import reduce

l = [3,1,4,1,5,9,2,6]
minimum = reduce(lambda x, y: x if x < y else y, l)
maximum = reduce(lambda x, y: x if x > y else y, l)
print(minimum)
print(maximum)
```

Counting is an example of a reduction problem where the actual elements
of the collection don't matter.
The underscore (`_`) is basically a "I'm not even naming this variable" character.

```py live_py title=Count_Reduce
from functools import reduce

l = [3,1,4,1,5,9,2,6]
count = reduce(lambda n, _: n + 1, l, 0)
print(count)
```

Finally, as promised, mapping and filtering.
The thing being aggregated is a now a list, with the initial value being the empty list.

```py live_py title=Map_Reduce
from functools import reduce

def my_map(f, lst):
  return reduce(lambda l, e: l + [f(e)], lst, [])

l = [3,1,4,1,5,9,2,6]
squares_map = map(lambda x: x ** 2, l)
squares_red = my_map(lambda x: x ** 2, l)
print(list(squares_map))
print(squares_red)
```

```py live_py title=Filter_Reduce
from functools import reduce

def my_filter(cond, lst):
  return reduce(lambda l, e: l + ([e] if cond(e) else []), lst, [])

l = [3,1,4,1,5,9,2,6]
evens_filt = filter(lambda x: x % 2 == 0, l)
evens_red = my_filter(lambda x: x % 2 == 0, l)
print(list(evens_filt))
print(evens_red)
```
