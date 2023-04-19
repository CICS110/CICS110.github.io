---
title: Section 04 (Jared Yeager)
---

# Recursion

Recursion is different in nature from the other things we've done so far.

We previously looked at comprehensions,
which was new machinery with little by way of new concepts.
Recursion is the opposite: absolutely no new machinery,
but a new concept and way to use existing machinery.
In fact, the machinery for recursion is just functions.

In other words, recursion is not a piece of machinery, it is a technique.

## Acts of Mad Science

Programming is a lot like trying to solve a puzzle,
where we have all these tools/techniques as possible pieces to the puzzle.

In order to really explore the full power of a given tool,
and see all the kinds of places it can fit in to the broader puzzle,
it is necessary to experiment and try pushing the limits of what we can do with something.
Trying to guess how things might behave in a weird case,
and make experiments to test that hypothesis
(stepping through them in the debugger or pythontutor) can be enlightening.

This helps us both see what the tool is capable of,
but also improve our understanding of the mechanics of it.

In this case, let's look at functions. What are some thing we know about them:
1. We can define/make them.
2. We can call them.
3. They can take in arguments.
4. They can return something (or `None`).

And what have we told you about variable scope:
* Variables are local or global in scope.
* Assigning to a variable in a function's scope creates a local variable.
* Referencing a variable in a function's scope first looks locally then globally.

So just looking at those function rules,
we can experiment with weird combinations or interactions,
try to see what is possible beyond the beaten path.
**None of the following examples you need to remember or understand,
but interrogating them until they make sense might grant a deeper understand of
a core programming concept**

**We could ask**: Given rule 1 and rule 1, can we define a function within a function definition?

```py live_py title=Def_Fun_In_Fun
def foo():
  def bar():
    print("bar")
  print("foo")
  bar()

foo()
```

Yes, it appears that we can.
As a side effect,
we get many questions about how this interacts with the concept of scope
(something I spent a solid amount of time exploring in pythontutor myself).
It turns out that those scope rules we presented you are ... a simplification
(though they are correct for 1 level of definition,
and the spirit of them provides guidance for deeper levels).

But look at all the questions and exploration that comes out of just that example.

**We could ask**: Given rule 1 and rule 2, can we call a function inside another function?

```py live_py title=Fun_Call_In_Fun
def foo():
  print("foo")

def bar():
  foo()
  print("bar")

bar()
```

Yes, and we actually do that quite frequently (and also did in the prior example).

**We could ask**: Given rule 1 and rule 2, can we call a function inside another function,
if the function we are calling hasn't been defined yet?

```py live_py title=Fun_Call_In_Fun_Rev
def bar():
  foo() # foo is not defined when bar is defined
  print("bar")

# what if bar() was here 

def foo():
  print("foo")

bar()
```

Understanding this would force us to cement some understanding of scoping rules.
`foo()` is not called when `bar()` is defined (a function is not run when it is defined).
When `bar()` is called (and run), `foo()` has been defined globally,
so the `foo()` within the `bar()` call can be found (when the code looks globally).

If the global `bar()` call was before `foo()` was defined, this would not work.

**We could ask**: If a function can call a function that has not yet been defined,
can a function ... call itself?

(Run this one locally in a sandbox project so that you can kill it with control-c)
```py
def foo():
  print("foo")
  foo()

foo()
```

So, uh, yeah, you totally can!
Seems like a dangerous power though, so let's figure out how to do that safely.

<details>
<summary><b>Extra: Baba is You</b></summary>

If you like this idea of experimenting with a set of tools/abilities you are given
to try and learn what they really do and pushing them to their limits in contrived ways,
then I can't recommend enough the puzzle video-game Baba is You.

</details>

## Recursion

Recursion is a technique wherein a function calls itself.

There are some cases where this is a surprisingly natural to do. Take for example,
the definition of factorial: $0! = 1$ and $n! = n*(n-1)!$
That is a recursive definition. Factorial is defined in terms of itself.
And we'll use the factorial as a motivating example.

But we can't just have a function call itself recklessly.
As that earlier example showed, if function calls itself, which then calls itself,
which then calls itself, ad infinitum, there is a risk of infinite recursion.
So we want to avoid that.

So when thinking about recursion,
we need to separately consider two types of cases:
bases cases, and inductive/recursive cases.
It is also especially prudent to consider illegal cases.

### Base Case(s)

*Base Cases* are the cases where the function has a specific return.

In the factorial case, this is 0, since $0! = 1$ is the sort of "fixed solution".

Because our function returns on these cases,
we have no risk of infinite recursion from them.

A function with just that that base case looks like this:

```py live_py title=Factorial_Base
def factorial(n):
  # 0! = 1
  if n == 0:
    return 1

print(f"factorial(0)  : {factorial(0)}")  # None
```

### Inductive/Recursive Cases

*Inductive/Recursive Cases* are the spicy cases,
where our function calls itself in some way.

It is extremely important that the function call itself with a
**different argument than it received**, in particular,
it should call itself only on arguments that are
**closer to a base case** in some way.

In the factorial case, our recursive case is all the whole numbers $n$ such that $n > 0$.
And note that factorial of $n$ depends on factorial of $n-1$, and $n - 1$ is closer to $0$
than $n$ is.

If the function only calls itself on inputs that approach a base case,
then we say it is *well founded*, and it will not have an issue of infinite recursion.

For instance: the $n = 3$ case will depend on $n-1 = 2$,
which will depend on $(n-1)-1 = 1$, which will depend on $((n-1)-1)-1 = 0$,
which is a base case.

A properly defined recursion should always eventually reach a base case.

Sticking that recursive case in gets us this:

```py live_py title=Factorial_Recur
def factorial(n):
  # 0! = 1
  if n == 0:
    return 1

  # n! = n * (n-1)!
  return n * factorial(n-1)

print(f"factorial(0)  : {factorial(0)}")  # 1
print(f"factorial(1)  : {factorial(1)}")  # 1
print(f"factorial(5)  : {factorial(5)}")  # 120
```

(You could use `if`-`else` if you preferred,
but because of the return in the base case,
it is not necessary.)

### Illegal Cases

*Illegal cases* are the cases where our inputs are something that the function
shouldn't be run on.

In the factorial case, negative numbers, fractions, non-numbers,
etc. would all be illegal cases.

To properly guard our function, we should weed these cases out.
Because if we have our function deal with these cases via an error/abort,
then there is no risk of infinite recursion from these cases
(since the function terminates on that call).

The risk of an illegal input triggering an infinite recursion is the only reason
I feel compelled to specifically flag these cases.
(After all, almost any function runs the risk of illegal inputs,
but they generally trigger errors, not infinite looping like in recursion.)

In code, guarding against illegal inputs for factorial could look like:

```py live_py title=Factorial_Illegal
def factorial(n):
  # Weed out illegal arguements
  if type(n) != int or n < 0:
    print(f"Illegal argument: {n}");
    return # or raise TypeError or ValueError

  # 0! = 1
  if n == 0:
    return 1

  # n! = n * (n-1)!
  return n * factorial(n-1)

print(f"factorial(-1)  : {factorial(-1)}")  # None
print(f"factorial(2.3) : {factorial(2.3)}") # None
print(f"factorial('A') : {factorial('A')}") # None
```

(You could use `if`-`elif`-`else` if you preferred,
but because of the return in the illegal and base cases,
it is not necessary.)

### What is Necessary

All of these are necessary to **ensure** safe recursion for **any** function call.
But if you can be confident that the function has no risk of receiving illegal inputs,
then only the base case and inductive cases are truly necessary.

If you miss the base case, you
will either get infinite recursion or an error/wrong result if you reduce to an error case:

```py live_py title=Factorial_Sans_Base
def factorial(n):
  if type(n) != int or n < 0:
    print(f"Illegal argument: {n}");
    return # or raise TypeError or ValueError
  return n * factorial(n-1)

print(f"factorial(5) : {factorial(5)}") # Error from 0 * None
```

If you miss the recursive case, well, you'll get a ton of wrong results:

```py live_py title=Factorial_Sans_Recur
def factorial(n):
  if type(n) != int or n < 0:
    print(f"Illegal argument: {n}");
    return # or raise TypeError or ValueError
  if n == 0:
    return 1

print(f"factorial(1) : {factorial(1)}") # None (should be 1)
print(f"factorial(5) : {factorial(5)}") # None (should be 120)
```

But more importantly, if your recursion isn't well founded,
you will get infinite recursion.

```py
def factorial(n):
  if type(n) != int or n < 0:
    print(f"Illegal argument: {n}");
    return # or raise TypeError or ValueError
  if n == 0:
    return 1
  return n * factorial(n) # Oops

print(f"factorial(1) : {factorial(1)}") # Runs Forever/Stack Overflow Error
print(f"factorial(5) : {factorial(5)}") # Runs Forever/Stack Overflow Error
```

If you miss the illegal cases,
you may be safe if the function is never called with illegal input,
but that absolute insurance is gone:

```py
def factorial(n):
  if n == 0:
    return 1
  return n * factorial(n-1)

print(f"factorial(-1) : {factorial(-1)}") # Runs Forever/Stack Overflow Error
```

**You need these**:
* Base case(s)
* **Well founded** recursive case(s)

**You should really address**:
* Illegal case(s)

## More Examples

Let's look at some more examples.

### Fibonacci

The Fibonacci sequence is a famous example of recursion despite ...
\**sigh*\* table that thought for now.

Let $F_n$ denote the $n$th Fibonacci number, the sequence is defined as below:
* $F_0 = 0$
* $F_1 = 1$
* $F_n = F_{n-1} + F_{n-2}$, for $n\ge 2$

Our bases cases are thus $n = 0$ and $n = 1$,
which should yield $0$ and $1$ respectively.

Our recursive case is the $n \ge 2$ case,
where we recur on $n-1$ and $n-2$, and add those together.

Our recursive case is well-founded because for every $n$ such that
$n\ge 2$, $n-1$ and $n-2$ are both closer to $0$ and $1$ than $n$ is.

And putting this into code looks like (I'm leaving out the error checking for simplicity):

```py live_py title=Fibonacci_Recursion
def fib(n):
  if n == 0:
    return 0
  if n == 1:
    return 1
  return fib(n-1) + fib(n-2)

for i in range(10):
  print(f"fib({i}) : {fib(i)}")
```

<details>
<summary><b>Extra: That Tabled Thought</b></summary>

This ... is a terrible thing to do.

Consider what a sort "call tree" (not that you have any reason to know what to is)
for `fib(5)` looks like:

```
fib(5) = 5
|-- fib(4) = 3
|   |-- fib(3) = 2
|   |   |-- fib(2) = 1
|   |   |   | -- fib(1) = 1
|   |   |   | -- fib(0) = 0
|   |   |-- fib(1) = 1
|   |-- fib(2) = 1
|   |   | -- fib(1) = 1
|   |   | -- fib(0) = 0
|-- fib(3) = 2
    |-- fib(2) = 1
    |   | -- fib(1) = 1
    |   | -- fib(0) = 0
    |-- fib(1) = 1
```

It turns out all the redundant calls lead to exponential blowup
in the number of function calls necessary for this approach.
So for `fin(n)` it takes "on the order of"
$2^n$ steps for this function to compute that. Quite horrendous at scale.

There is a whole programming technique called *dynamic programming*
while is about turning these kinds of recursions into iterative approaches
that effective cache/save the results of previous function calls.

Applying that technique her could lead to something like:
```py live_py title=Fibonacci_Iteration
def fib(n):
  # fib_list effectively stores/caches what would be
  #   the function returns for each possible call.
  # So calls are replaced with lookups,
  #    and calculations only done the first time.
  fib_list = [0,1]
  while len(fib_list) <= n:
    fib_list.append(fib_list[-1] + fib_list[-2])
  return fib_list[n]

for i in range(10):
  print(f"fib({i}) : {fib(i)}")
```

So for `fin(n)` this now takes "on the order of" $n$ steps.

As a bonus, there is actually a **constant time**
way to calculate the fibonacci sequence.

```py live_py title=Fibonacci_Constant
rt5 = 5 ** (1/2)
φ = (1 + rt5) / 2
ψ = (1 - rt5) / 2

def fib(n):
  return round((φ**n - ψ**n) / rt5)

for i in range(10):
  print(f"fib({i}) : {fib(i)}")
```

</details>

### $3n+1$ Sequence

Consider a sequence of number based on these rules:
* You start at some positive number (our input).
* You stop when the sequence gets to 1.
* For even $n$, the next number is $\frac{1}{2}n$
* For odd $n$ (s.t. $n > 1$), the next number is $3n+1$

A lot of sequence generations can be recursive. Here,
generating a sequence starting at $n$ can become $n$
followed by generating the sequence starting at the number after $n$.
Where each time we are getting "closer to the end of the sequence".

Our base case is when the sequence ends, which is when $n = 1$.
The return for $n = 1$ should be `[1]` (the entire sequence starting at 1).

Our recursive case is when $n \ge 2$.
Recurring on the next number in the sequence (`n//2 if n%2==0 else 3*n+1`)
would get us the entire sequence after $n$.
If we stick $n$ on the front of that, we're done.

Is this well founded? Well ... nobody knows!
But since this a famous mathematical problem that nobody has found a non-terminating-at-1
instance of, it's probably safe to use this on most inputs you would want to.
But, if you wanted to be proper, you probably shouldn't do this.

And putting this into code looks like:

```py live_py title=Collatz
def collatz_seq(n):
  if n == 1:
    return [1]
  return [n] + collatz_seq(n//2 if n%2==0 else 3*n+1)

for i in range(1,10):
  print(f"collatz_seq({i}) : {collatz_seq(i)}")
```

### Sum Arbitrarily Nested Lists

The previous examples could all reasonably be solved with an iterative approach.
But sometimes a structure is annoying enough that a recursive approach ends up working
out more nicely.

For instance, imagine that we a had a list,
whose elements are either ints or lists,
whose elements are either ints or lists,
whose elements are either ints or ... you get the idea.
Some weird nested int list data structure, like `[1,[2,[3,[4,5],6],7],8,[[9]]]`.

And maybe we want the sum of all these numbers.
That ... is not pleasant to do iteratively.

You may find this example rather contrived. And it is.
But it isomorphic/structurally equivalent to a quite common structure:
[a tree](https://en.wikipedia.org/wiki/Tree_(data_structure))
(albeit with values only at the leaves).
So the structure of it is not so far afield from something that may exist.

So we want a nested list summation function.
How could a nested list summation function on "other inputs" help us write a
nested list summation function?
If we mapped such a function over our input nested list, we would have a list of
numbers, which normal `sum()` can take care of.
For example, `[1,[2,[3,[4,5],6],7],8,[[9]]]` would become `[1,27,8,9]`,
which can then be summed to `45`. And when we recur,
we are "reducing how deep we need to go".

Our base case is, "when we have no deeper we can go".
This is when we don't even have a list, just an int.
At which point the sum is the solitary int.

Our recursive case is otherwise, when we have a list.
We can recur on each element of the list to get its sum,
getting us a list of ints that we can then sum together.

Our recursion here is well founded because by iterating over each element
of the list, we are iterating on things with a smaller maximum depth,
which brings us closer to the non-list base case.

And putting this into code looks like:

```py live_py title=Sum
def nested_list_sum(nested_list):
  # If it's not a nested list
  if type(nested_list) != list:
    return nested_list
  # Recur on each element
  sum_list = [nested_list_sum(l) for l in nested_list]
  return sum(sum_list)

nested_list = [1,[2,[3,[4,5],6],7],8,[[9]]]
print(f"Sum: {nested_list_sum(nested_list)}") # 45
```
