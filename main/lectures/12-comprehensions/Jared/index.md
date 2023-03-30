---
title: Section 04 (Jared Yeager)
---

# Ternary Operator and Comprehensions

This lecture is **pure syntax sugar**. Not a thing here will be necessary.
Not a thing here will be tested on a programming assignment
(I'm not crawling your abstract syntax trees to figure out **how** you solved something).
Comprehensions don't even exist outside of python.
And yet, these things can be an incredibly useful a powerful tools in the arsenal
once the fundamentals are cemented.

### Syntax Sugar

What is *syntax sugar*?

Syntax sugar is my crippling addiction.
It is syntax that allows you to express certain common tasks in a denser/more concise form.

Sufficient mastery of syntax sugar can allow one to convert some tasks from a multi-line
nested looping/branching statement, to a one-line eldritch monstrosity.
Doing this gives me a kind of rush that I can't describe and continually crave.
It has made me what some would call a "degenerate", a "monster", or a "psychopath".
But I don't care. There is beauty in the horror and horror in the beauty.
And I am beholden to the madness that emanates therefrom.

## Ternary Operators

### Setting: Conditional Assignment

There are cases where you want to set a value based on a condition.
A famous mathematical example can be found in the
[Collatz conjecture](https://en.wikipedia.org/wiki/Collatz_conjecture),
where you a making a sequence of numbers.
For a given $n$, if it is odd, then the next number is $3n+1$,
if it is even, then the next number is $n/2$.

A simpler example is the "indicator function",
which takes in an element $x$ and a set $A$, and returns 1 if $x$ is in $A$ and 0 if not.

Just isolating the check and variable setting (not making this into a python function),
we could accomplish the indicator checking like so:

```py live_py title=Indicator
x = 0 # you can change this value around
A = {1,2,3,4,5}

if x in A:
  indicator_x_A = 1
else:
  indicator_x_A = 0

print(f"indicator function of x and A: {indicator_x_A}")
```

### Syntax Sugar: Ternary Operator

This "if `condition` is true then this value, else this other value"
structure shows up quite readily.

The syntax sugar for this is: `value_t if condition else value_f`.
We call this the *ternary operator*,
I guess because there are 3 operands (`value_t`, `condition`, and `value_f`).

The way to read this is that if `condition` is/evaluate to true, it evaluates to `value_t`,
if `condition` is/evaluate to false, it evaluates to `value_f`.

Behold the earlier example using this:
```py live_py title=Indicator_Ternary
x = 0
y = 3
A = {1,2,3,4,5}

indicator_x_A = 1 if x in A else 0
indicator_y_A = 1 if y in A else 0

print(f"indicator function of x and A: {indicator_x_A}")
print(f"indicator function of y and A: {indicator_y_A}")
```

## Mapping and Comprehensions

### Setting: Mapping

Often we find ourselves wanting to performs some operation, function,
or transformation on every element in a collection.
We call this *mapping* a operation/function/transformation over something,
and it is a very frequent thing to do.

For example, say I wanted a list of the first 10 square numbers.
This could be done by taking a list of the numbers 1 to 10, and squaring all of them.
That "squaring all of them" is a on operation (squaring) being performed on all
elements in the collection.

Code for that could look like:
```py live_py title=Squares
squares = []
for i in range(1, 11):
  squares.append(i ** 2)
print(squares)
```

### Syntax Sugar: Comprehensions

We can get that list `squares` in 3 fairly straightforward lines,
**but we can do better**.

*Comprehensions* are a way to define/create a collection based on iterating over
some other collection.

The syntax sugar for list comprehensions is: `[expression for var_name in collection]`.
Every element in `collection` is iterated over and assigned to `var_name` in turn
(the for `for var_name in collection` is exactly like a for loop).
`expression` may make use of the variable named `var_name`, and is evaluated for each
element in `collection`. And the results are bundled together in a list.

Behold the earlier example using this:
```py live_py title=List_Comprehension
squares = [i ** 2 for i in range (1, 11)]
print(squares)
```

Note the congruences with the earlier less-sugary version.
* The `[]` are necessary to note we are making a list.
* The `for i in range(1, 11)` is exactly the same.
* The `.append(i ** 2)` becomes the `i ** 2` at the front in the comprehension.

## Filtering and Comprehensions

### Setting: Filtering

Often we find ourselves wanting to select only the elements of a collection
that satisfy some property.
We call this *filtering* something based on some property/criteria,
and it is also a very frequent thing to do.

For example, say I have a list of numbers and wanted only the even numbers in that list.
I could use a conditional to add only the elements I want to my list of evens, like so:

```py live_py title=Evens
nums = list(range(10,55,3))
print(f"nums : {nums}")
evens = []
for i in nums:
  if i % 2 == 0:
    evens.append(i)
print(f"evens: {evens}")
```

### Syntax Sugar: More Comprehensions

We can get that list `evens` in 4 fairly straightforward lines,
but again, **we can do better**.

Comprehensions also have built in filtering.
This gives us more general list comprehensions of the from:
`[expression for var_name in collection if condition]`.

This is just like before, except now `expression` is only considered
for elements where `condition` is true (`condition` may make use of `var_name`).

Behold the earlier example using this:
```py live_py title=Evens_Comprehension
nums = list(range(10,55,3))
print(f"nums : {nums}")
evens = [i for i in nums if i % 2 == 0]
print(f"evens: {evens}")
```

Note the congruences with the earlier less-sugary version.
* The `[]` for the list.
* The `for i in nums` is exactly the same.
* The `if i % 2 == 0` is exactly the same.
* The `.append(i)` becomes the `i` at the front in the comprehension.

And another example, where the `expression` part is non-trivial.
We could get all halves of even numbers in a list.

```py live_py title=Divide_Evens
nums = list(range(10,55,3))
print(f"nums       : {nums}")

# Iterative Approach
halves_iter = []
for i in nums:
  if i % 2 == 0:
    halves_iter.append(i // 2)
print(f"halves_iter: {halves_iter}")

# Comprehension
halves_comp = [i//2 for i in nums if i % 2 == 0]
print(f"halves_comp: {halves_comp}")
```

Again, notice how the looping+branching portion is just flattened,
with the expression for the new element being brought to the front of the comprehension.

And one more, maybe for a given number, we want to get all 
All factors of that number (all numbers that divided it). The long form:

```py live_py title=Factors
num = 60 # play with this value

# Iterative Approach
factors_iter = []
for i in range(1,num):
  if num % i == 0:
    factors_iter.append(i)
print(factors_iter)

# Comprehension
factors_comp = [i for i in range(1,num) if num % i == 0]
print(factors_comp)
```
---

:::caution

Material from here on was not part of the lecture,
but I'm not done with the madness yet.
I must corrupt more, I must twist more.
**I must write unintelligible code!!!**

:::

---

## More Comprehension Types

For showing of the comprehension syntax,
it is sufficient to only talk about list comprehensions.
But there are other structure this exists for.

There are also set comprehensions, which are much the same except for `{}` on the outside.

```py live_py title=Set_Comprehension
squares = {i ** 2 for i in range (1, 11)}
print(squares)
```

There are also dictionary comprehensions,
which are much the same except for `{}` on the outside and the `expression`
needs be of the form `key:value`.

```py live_py title=Dictionary_Comprehension
squares = {i:i ** 2 for i in range (1, 11)}
print(squares)
```

There is not exactly tuple comprehension, but you can do something that feels like it.

```py live_py title=Tuple_Comprehension
squares = tuple(i ** 2 for i in range (1, 11))
print(squares)
```

in practice, you are generally going to do list comprehension and not
bootleg tuple comprehension.

<details>
<summary><b>Extra: What About Just Parentheses?</b></summary>

You might be wondering why wrapping the `i ** 2 for i in range (1, 11)`
in parentheses isn't tuple comprehension.

The answer is basically that that syntax is already used for something called
*generators*, why I am not going to get into.

And in fact, I think that bootleg tuple comprehension from earlier is technically
just casting a generator to a tuple.

```py live_py title=Generator_Comprehension
squares = (i ** 2 for i in range (1, 11))
print(squares)
squares = tuple(squares)
print(squares)
```

</details>

## Nesting

### Ternary Operators

sign: -1,0,1

```py
if num > 0:
  sign = 1
elif num < 0:
  sign = -1
else:
  sign = 0
```

```py
if num > 0:
  sign = 1
else:
  if num < 0:
    sign = -1
  else:
    sign = 0
```

```
if num > 0:
  sign = 1
else:
  sign = -1 if num < 0 else 0
```

```
sign = 1 if num > 0 else -1 if num < 0 else 0
```

```py live_py title=Sign
def sign(num):
  return 1 if num > 0 else -1 if num < 0 else 0

print(f"sign(12) : {sign(12):>2d}")
print(f"sign(4)  : {sign(4):>2d}")
print(f"sign(0)  : {sign(0):>2d}")
print(f"sign(-2) : {sign(-2):>2d}")
print(f"sign(-7) : {sign(-7):>2d}")
```

### Comprehensions

This idea that the comprehension is just the flattened-out for-if structure with
the final expression brought to the front generalises to arbitrary for loop nesting.

Consider two ways of flattening a list of lists
(making a list out of all the inner-list elements).
```py live_py title=Flatten
ll = [[1,2,3], [4,5], [6,7,8,9]]

# Iterative Approach
flat_iter = []
for l in ll:
  for i in l:
    flat_iter.append(i)
print(flat_iter)

# Comprehension
flat_comp = [i for l in ll for i in l]
print(flat_comp)
```


All lattice points in a circle
```py live_py title=Circle
r = 2

# Iterative Approach
points_iter = []
for x in range(-r, r+1):
  for y in range(-r, r+1):
    if x ** 2 + y ** 2 <= r ** 2:
      points_iter.append((x,y))
print(points_iter)

# Comprehension
points_comp = [(x,y) for x in range(-r, r+1) for y in range(-r, r+1) if x ** 2 + y ** 2 <= r ** 2]
print(points_comp)
```

## Apotheosis

dict num to set of factors
all co-primes less than a number
a/an adj noun
