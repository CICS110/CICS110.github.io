---
title: Section 04 (Jared Yeager)
---

# Debugging

## Assignment Updates

Stuff due this week:
* Participation 4 **Due Thursday 3/9**
* Quiz 5: **Due Thursday 3/9**
* HW 3: **Due Friday 3/10**
* Lab 5: **Due Friday 3/10**

Stuff due next week:
* Nothing! Enjoy the break!

Finally, HW4 will **not** be due the week of 3/20 to 3/24.
We want to treat the break (3/11 to 3/19) as null time.

## Other Resources

I feel that a fairly strong visual component is necessary
for conversations about "how to use the debugger".

I don't think I can do that in a realistic span of time in this format,
and I don't think I can do it better than has already been done:
* [Getting Unstuck guide](../guides/getting-unstuck)
* [The Slides](.)
* [VSCode Debugging Guide](https://code.visualstudio.com/docs/editor/debugging)

I'll mostly use these notes to pontificate about how I think about debugging.

## Fixing Bugs

Inevitably, you will encounter cases where you run your code
and it either does the wrong thing or explodes. *Bugs* or *errors* occur.

Fixing those is what programming is really about.
It's also where some of the best learning happens.

### Getting a Reproducible Issue

The first step, is to be able to produce the bug/error at will.
Once you can produce it whenever you run the code, you start hunting it down.

With what we currently have and the language we are using,
things are generally *deterministic*;
meaning that the same starting point and inputs lead to the same outcome.
So this step is likely pretty easy.

If you are using some sort of randomness, such as the `random` module,
you may have some cases where the bug occurs and some where it doesn't.
Take the code below as an example. Run it multiple times, by my estimates there
is 27.1% chance of an error occurring on each run.

```py live_py title=Random
import random

def rand_frac():
  num = random.randint(-10,10)
  den = random.randint(0,10)
  return num/den

n1 = rand_frac()
n2 = rand_frac()
n3 = rand_frac()

avg = (n1 + n2 + n3) / 3
print(avg)
```

We want to able to get that error to occur for certain.
True randomness is quite rare in the CS world, and so we frequently use what are
technically *pseudo-random number generators*.
The "random" numbers chosen depend on an initial *seed*.
We can [deliberately seed](https://docs.python.org/3/library/random.html#random.seed)
the random number generator with a fixed seed to remove the randomness.
We then can experiment with the seed until we can get the error to appear.

```py live_py title=Seed
import random

random.seed(2) # impose order of chaos

def rand_frac():
  num = random.randint(-10,10)
  den = random.randint(0,10)
  return num/den

n1 = rand_frac()
n2 = rand_frac()
n3 = rand_frac()

avg = (n1 + n2 + n3) / 3
print(avg)
```

Didn't take me long. Now the error always appears, which makes it a lot easier to hunt down.

### Hunting for Divergence

The next step is find where the error occurs in our code,
where the program first deviates from what we expect.

For errors, python generally gives us a specific line in the error message.
(line 8 in the earlier example, for instance).
Although the root cause of the error may be further back
(that division by 0 happened because of `den` being assigned to 0 earlier).

For non-fatal bugs in the logic or in some calculations, it's more of a hunt.
This is frequently where the debugger comes in, allowing you to step through your code
and see where your expectations of what will happen first depart from what the program is doing.

I'm a bit more of a plebeian myself,
I generally use print statement a lot to just print the values of variables.
If I was really at a loss, I'd probably start by having print statements at the
beginning and end of my functions to show me the arguments values and returns of each function call.

I would then narrow the search and start checking the internal values of functions where
the output isn't what I might expect based on the inputs.

### Understanding the Issue

Once we've found where we deviated from the path,
it's just a matter of making sense of the root issue and fixing it.

It's hard to give general advice on this.
Usually is you've really nailed down where the issue is
(to the point of knowing where within a line of code the issue is),
what the issue is becomes fairly apparent.

But especially when it isn't obvious,
figuring out why something behaves differently than you expect can be a powerful learning moment.

## Testing if There are Bugs

In practice, we often wait until something explodes before beginning the bug hunt.
This is an intrinsically very reactive mode of operation.

If we are anticipating writing a non-trivial amount of code (making a bug harder to hunt),
or if the code does something important
(where we don't want a bug to turn up in something we think is "done"),
then we probably want to be more proactive about hunting bugs.

What does that look like? Testing!

Testing our code comes in a lot of forms. On the formal end there are
*unit tests* and *unit testing frameworks*. In fact, our auto-graders
use python's own [unit testing framework](https://docs.python.org/3/library/unittest.html).

But on the other end are much more casual tests.
Basically just running you code and observing the results/output
on enough different inputs to test it under every condition.
For example, with numbers you might often want to test the positive, zero, and negative case.
For anything involving indexing, you might want to hit the first, last, and middle cases.
For lists: empty, one-element, multi-element lists might be good.
You are trying to find a case where your code doesn't work.

## Programming to Avoid Bugs

While it is impossible to avoid bugs,
we can aim to produce fewer and catch our mistakes earlier.

I think the easiest way to do this is to write code in very small chunks and test as you go.
The moment you write some code who's effect could be seen by printing something out,
you can run it and print those those things out.
You'll often catch minor issues early and not need to go on a big hunt for them later.

