---
title: Section 04 (Jared Yeager)
---

# Ternary Operator and Comprehensions

This lecture is **pure syntax sugar**. Not a thing here will be necessary.
Not a thing here will be tested on a programming assignment
(I'm not crawling your abstract syntax trees to figure out **how** you solved something).
Comprehensions don't even exist outside of python.
And yet, these things can be incredibly useful and powerful tools in the arsenal
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

A basic mathematical example is the "indicator function",
which takes in an element $x$ and a set $A$, and returns 1 if $x$ is in $A$ and 0 if not.

Just isolating the check and variable assignment (not making this into a python function),
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
structure shows up quite frequently.

The syntax sugar for this is: `value_t if condition else value_f`.
We call this the *ternary operator*,
I guess because there are 3 operands (`value_t`, `condition`, and `value_f`).

The way to read this is that if `condition` is/evaluate to true,
the ternary expression evaluates to `value_t`,
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

A 4-line if-else statement has become a 1-line ternary operator.

## Mapping and Comprehensions

### Setting: Mapping

Often we find ourselves wanting to performs some operation, function,
or transformation on every element in a collection.
We call this *mapping* a operation/function/transformation over the collection,
and it is a very frequent thing to do.

For example, say I wanted a list of the first 10 square numbers.
This could be done by taking a list of the numbers 1 to 10, and squaring all of them.
That "squaring all of them" is a on operation (squaring) being performed on all
elements in the collection. That is mapping.

Code for that could look like:
```py live_py title=Squares_Iteration
squares = []
for i in range(1, 11):
  squares.append(i ** 2)
print(squares)
```

Abstractly: I am mapping the squaring over the range, and storing the result.

### Syntax Sugar: Comprehensions

We can get that list `squares` in 3 fairly straightforward lines,
**but we can do better**.

*Comprehensions* are a way to create a collection based on iterating over
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
We call this *filtering* the collection based on some property/criteria,
and it is also a very frequent thing to do.

For example, say I have a list of numbers and wanted only the even numbers in that list.
I could use a conditional to add only the elements I want to my list of evens, like so:

```py live_py title=Evens_Iteration
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

The nesting out-to-in of the for loop and if statement becomes the
exact same statements written left-to-right, with the expression brought to the front
(and surrounded by square brackets to indicate this is to be a list).

Another example, where the `expression` part is non-trivial.
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

Again, notice how the looping+branching portion is just flattened (out->in to left->right),
with the expression for the new element being brought to the front of the comprehension.

And one more, maybe for a given number, we want to get
all factors of that number (all numbers that divide it).

```py live_py title=Factors
num = 60 # play with this value
print(f"number: {num}")

# Iterative Approach
factors_iter = []
for i in range(1,num):
  if num % i == 0:
    factors_iter.append(i)
print(f"factors_iter: {factors_iter}")

# Comprehension
factors_comp = [i for i in range(1,num) if num % i == 0]
print(f"factors_comp: {factors_comp}")
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

For showing off the comprehension syntax,
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
*generators*, which I am not going to get into.
If you were curious, searches for "generators", "yield", and "generator comprehension"
would probably get you that stuff.

And in fact, I think that bootleg tuple comprehension from earlier is technically
just casting a generator to a tuple.

```py live_py title=Generator_Comprehension
squares = (i ** 2 for i in range (1, 11))
print(squares)
squares = tuple(squares)
print(squares)
```

</details>

## Chaining

### Ternary Operators

You can chain ternary operators, sort of like an if-elif-else statement.
And seeing the intuition for that comes from transforming an if-elif-else statement.

Imagine, as a motivating example, you have a number `num`,
and want to get its sign (-1 for negative numbers, 0 for 0, and 1 for positive numbers).
You could do this with an if-elif-else.

```py
if num > 0:
  sign = 1
elif num < 0:
  sign = -1
else:
  sign = 0
```

The if-elif-else is equivalent to an if-else with another if-else in the outer else block.
It looks worse now, but we can start introducing ternary operators.

```py
if num > 0:
  sign = 1
else:
  if num < 0:
    sign = -1
  else:
    sign = 0
```

We can transform the inner if-else into a ternary operator.

```
if num > 0:
  sign = 1
else:
  sign = -1 if num < 0 else 0
```

And by taking `-1 if num < 0 else 0` as its own expression,
we can replace the outer if-else with a ternary operator.

```
sign = 1 if num > 0 else -1 if num < 0 else 0
```

This reduces a 6-line if-elif-else to a 1-line ternary operator chain.
Runnable code below:

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

This idea that the comprehension is just "the flattened-out for-if structure with
the final expression brought to the front" generalises to arbitrary for loop nesting.

Consider this iterative approach to flattening a list of lists
(making a list out of all the inner-list elements):
```py live_py title=Flatten_Iteration
ll = [[1,2,3], [4,5], [6,7,8,9]]

# Iterative Approach
flat_iter = []
for l in ll:
  for i in l:
    flat_iter.append(i)
print(flat_iter)
```

Those nested for loops can both be used in a comprehension,
with the outer loop going before the inner.

```py live_py title=Flatten_Comprehension
ll = [[1,2,3], [4,5], [6,7,8,9]]

# Comprehension
flat_comp = [i for l in ll for i in l]
print(flat_comp)
```

Outer-to-inner in iteration land becomes left-to-right in comprehension land,
with the expression being brought to the front.

Another example of this, imagine you wanted to get all integer 2D coordinates that lie
within some circle of a given radius centred at the origin.

```py live_py title=Circle
r = 3

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

Outer-to-inner to left-to-right, expression brought to the front.

## Apotheosis (More Exotic Examples)

Combining all these things can allow you to do some incredibly complex tasks in remarkably dense code.
When fundamentals are cemented and you start incorporating these sorts of things,
you find yourself spending more time thinking "how am I going to write this code"
than writing code.
But when a something you've spent the time to schemingly craft works, it feels really good.

I'll have some examples of more complicated things here as I think of them.

In the following I have a list of adjectives and nouns,
and I want to get all combinations, with the correct article too.
For instance, "red" and "house" would produce "a red house".
```py live_py title=Adj_Noun
adjs = ["red", "orange", "blue", "enormous", "small", "awful", "scary"]
nouns = ["fruit", "house", "snake", "fate"]
adj_nouns = {f"{'an' if adj[0] in 'aeiou' else 'a'} {adj} {noun}" for adj in adjs for noun in nouns}
print("\n".join(adj_nouns))
```
There are chained for loops and an f-string expression with a ternary inside.
For densities sake, I'm doing `"\n".join()` for prints instead of a for loop.

In the following, instead of a list of factors for a number like earlier,
I want a dictionary with numbers as keys and sets of factors as values.
```py live_py title=Factors_Dict
nums = [12, 25, 50, 60, 100]
factor_dict = {num:{i for i in range(1,num) if num % i == 0} for num in nums}
print("\n".join([f"{num:>3d}: {factors}" for num,factors in factor_dict.items()]))
```
There is a set comprehension inside the dictionary comprehension
(since the value is a set of factors).
As for the print: I could have have done a for loop like a sane person,
but I can also do `.join()` on a list comprehension.
This print list comprehension also leverages destructuring for convenience.

The following was code I made to display a circle based on the points in said circle.
I chose to cut off the most extreme points (so displaying from $-(r-1)$ to $(r-1)$ inclusive).
```py live_py title=Print_Circle
r = 20
points = [(x,y) for x in range(-r, r+1) for y in range(-r, r+1) if x ** 2 + y ** 2 <= r ** 2]
print("\n".join([" ".join([("•" if (x,y) in points else " ") for x in range(-r+1, r)]) for y in range(r-1, -r, -1)]))
```
There is a `.join()` on a list comprehension, whose expression is itself
a `.join()` on a list comprehension, whose expression is a ternary operator.
