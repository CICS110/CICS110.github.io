---
title: Section 04 (Jared Yeager)
---

# Exception Handling

:::info

The part of this lecture that is on modules I will to "making modules" lecture notes.

:::

Sometimes things go wrong in the code,
sometimes even due to things somewhat beyond our control.

For example, say we ask for a number from a user and try to convert it to a float.
If they enter something illegal, and we directly try to convert that to a float,
there will be an error.

```
user_str = input("Please enter a number:")
user_num = float(user_str) # Error on illegal inputs.
```

At the moment,
we can try to guard against illegal arguments by using conditions to see if they are kosher.

```
user_str = input("Please enter a number:")
while is_illegal(user_str): # What EXACTLY is the is_illegal check?
  print("Illegal input was entered.")
  user_str = input("Please enter a number:")
user_num = float(user_str)
```

But sometimes it is really hard or impossible to tell if an argument will be illegal
before actually using it.
In the above example, what exactly `is_illegal` should be is hard to specify.
I would be hard-pressed to give the exact boolean specification
for what strings can and can not be converted into floats safely.

In these cases, we would like the ability to try something, and if it goes wrong,
abort/try again/recover/something.
That will be ability gained from the machinery of today's lecture.

## Error Types

First, lets explore a brief taxonomy of the the types of errors we can encounter.

### Syntactic Errors

In non-compiled languages like python the line between these and the next blur a little, but:
These are errors stemming from illegal syntax.

For example, if you put semicolons instead of commas between elements of a list:

```py live_py title=List_Syntax_Error
nums = [1; 2; 3; 4; 5] # ERROR
print(nums)
```

Or if you mistyped a keyword:

```py live_py title=Typo_Syntax_Error
import random
num = random.randint(0,1)
if num % 2 == 0:
  print(f"{num} is even")
esle: # ERROR
  print(f"{num} is odd")
```

VSCode should yell at you about this stuff (via red squiggly underlines) before you even run the code.
So by the point where you are running your code, you should have cleaned these up.

### Runtime Errors

These are fatal errors that occur when the code is run and something illegal happens.

The motivating example from earlier was about converting an illegal input:

```py live_py title=Input_Runtime_Error
user_str = "abc" # pretend a user typed "abc" when prompted
user_num = float(user_str) # ERROR
```

Division by 0 is a classic math example:

```py live_py title=Division_Runtime_Error
nums = []
avg = sum(nums)/len(nums) # ERROR
```

These are the types of errors we are really interested in and able to address with
the promised new machinery.

### Logical Errors

These are what I would probably more colloquially call "bugs".
These are when the code does what you are telling it to do (as code does),
but not what you meant.

For example:

```py live_py title=Parity_Logic_Error
import random
num = random.randint(0,1)
if num % 2 == 1: # This 1 should be a 0
  print(f"{num} is even")
else:
  print(f"{num} is odd")
```

The code is totally legal, but just does the wrong thing.

These are most stealthy of all issues, and are what we design tests for.

## Exception Handling

*Exception handling* is the ability to *try* to execute some code,
*catch* any *exceptions* that arise (errors are all exceptions),
and *handle* them in some way.

### `try` and `except`

The basic syntax for this is:
```py
try:
  try_block_code
except:
  except_block_code
```

By now this keyword-colon style is probably familiar. Here are the components:
* The keyword `try` (with `:`).
* The "try block", `try_block_code`.
This code is executed like normal until an exception occurs.
If an exception occurs, no further code in this block will be executed.
* The `except` keyword (with `:`).
* The "except block", `except_block_code`.
This code runs if, and only if, an exception occurs in the try-block.

So we can put that input-to-float conversion inside a try block in case something
bad happens during the conversion.
And then we can have an error message print in the except block.
And so that `user_num` is not undefined,
we can have `user_num` set to 0 in the except block.

```py live_py title=Convert_Try_Except
try:
  user_str = input("Please enter a number:")
  user_num = float(user_str)
  print("Thank you for the legal input")
except:
  print("Illegal input recieved")
  user_num = 0
print(f"user_num set to {user_num}")
```

Try running the above code with both legal and illegal inputs.
We could also use this in order to create a loop that repeatedly
tries to convert input and resets if the input causes an error.

```py live_py title=Get_Input_Try_Except
while True:
  try:
    user_str = input("Please enter a number:")
    user_num = float(user_str)
  except:
    print("Illegal input recieved")
    continue
  break
print(f"user_num set to {user_num}")
```

<details>
<summary><b>Extra: `except Exception` </b></summary>

We can specify a specific type of exception for `except` to handle.

The syntax is simply to use `except exception_type:` instead of `except:`,
where `exception_type` is some exception type.
There are [lists of exception types online](https://www.w3schools.com/python/python_ref_exceptions.asp).
We can also use `Exception` as a generic catch-most type
(It catches all errors, the stuff it doesn't catch, you probably don't want to catch).

```py live_py title=Convert_Try_Except_Specific
try:
  user_str = input("Please enter a non-zero number: ")
  user_num = float(user_str)
  inv_num = 1 / user_num
  print("Thank you for the legal input")
except ValueError:
  print("Illegally formatted input recieved")
  inv_num = 0
print(f"inv_num set to {inv_num}")
```

In this above code, only `ValueError`s are handled.
So an illegal input to `float()`, like `"foo"`, would be handled;
but a legal input that causes a different error,
like `"0"`, causing a `ZeroDivisionError`, would not.

We can specify multiple specific errors via a tuple (or at least a tuple-looking thing).

```py live_py title=Convert_Try_Except_Multiple_Specific
try:
  user_str = input("Please enter a non-zero number: ")
  user_num = float(user_str)
  inv_num = 1 / user_num
  print("Thank you for the legal input")
except (ValueError, ZeroDivisionError):
  print("Illegally input recieved")
  inv_num = 0
print(f"inv_num set to {inv_num}")
```

Why does this ability to specify what exception(s) to handle help us?
Because we can have multiple `except` clauses.
This allows us to handle different types of errors differently.

```py live_py title=Convert_Try_Except_Cases
try:
  user_str = input("Please enter a non-zero number: ")
  user_num = float(user_str)
  inv_num = 1 / user_num
  print("Thank you for the legal input")
except ValueError:
  print("Illegally formatted input recieved")
  inv_num = 0
except ZeroDivisionError:
  print("Zero recieved as input")
  inv_num = 0
except: # will catch any remaining Exceptions
  # E.g., EOFError could be trigger via control-D (on unix-based systems) when asked for input
  print("Unknown error encountered")
  inv_num = 0
print(f"inv_num set to {inv_num}")
```

</details>

<details>
<summary><b>Extra: `except Exception as var_name` </b></summary>

We can store the exception as a variable in order to
more readily extract some information from it
(Exceptions are objects too, so can be stored in variables).

The syntax is simply to use `except exception_type as var_name:`,
where `exception_type` is again some exception type and `var_name` is a choice of variable name.
Again, a [list of exception types](https://www.w3schools.com/python/python_ref_exceptions.asp).

An example of using this to get some information out of the exception:

```py live_py title=Convert_Try_Except_As
try:
  user_str = input("Please enter a non-zero number: ")
  user_num = float(user_str)
  inv_num = 1 / user_num
  print("Thank you for the legal input")
except Exception as err: # will catch any remaining Exceptions
  print("Exception occured!")
  print(f"Exception type: {type(err)}")
  print(f"Exception args: {err.args}")
  print(f"Exception print:\n{err}")
  inv_num = 0
print(f"inv_num set to {inv_num}")
```

</details>

### `else`

There are a couple of additional types of blocks that can be added to this structure.
The first is an else block, that is run if no exception occurs.

The basic syntax for this is:
```py
try:
  try_block_code
except:
  except_block_code
else:
  else_block_code
```

The new components:
* The keyword `else` (with `:`).
* The else-block, `else_block_code`.
This code runs if, and only if, an try-block is completed without an exception occurring.

The input example from before could be refactored to look like this:

```py live_py title=Get_Input_Else
while True:
  try:
    user_str = input("Please enter a number:")
    user_num = float(user_str)
  except:
    print("Illegal input recieved")
  else:
    break
print(f"user_num set to {user_num}")
```

That said, I'm pretty sure that try-except-else could just be accomplished with a
try-except like so:

```py
try:
  try_block_code
  else_block_code # only run on non-error in try block either way
except:
  except_block_code
```

### `finally`

Finally, there is a finally block. This block always runs and is the last to run.

The basic syntax for this is:
```py
try:
  try_block_code
except:
  except_block_code
# else and else block here if desired
finally:
  finally_block_code
```

The new components:
* The keyword `finally` (with `:`).
* The finally-block, `finally_block_code`.
This code always runs, and it runs after the try-block, except-block (if relevant),
and else-block (if relevant) have been run.

The earlier example about converting the input or defaulting to 0
could be refactored to look like this:

```py live_py title=Convert_Finally
try:
  user_str = input("Please enter a number:")
  user_num = float(user_str)
  print("Thank you for the legal input")
except:
  print("Illegal input recieved")
  user_num = 0
finally:
  print(f"user_num set to {user_num}")
```

That said, I'm pretty sure that most **normal** uses of try-except-finally
could just be accomplished with a try-except like so (may I'm missing something):

```py
try:
  try_block_code
  # else_block_code if it exists
except:
  except_block_code
finally_block_code # will be run after all try-except code
```

<details>
<summary><b>Extra: `finally` control flow </b></summary>

:::warning

This could do damage to your psyche and possibly sow more confusion than understanding.

:::

When I said the finally block always runs, I mean it **always** runs.
This has terrifying implications.
And when I said "**normal**" uses could be done with a try-except,
I meant cases not deliberately abusing that fact.

Below are two examples if `finally` winning over the control flow of `break`
and `continue`.

```py live_py title=Finally_Break
while True:
  try:
    cursed_number = 0 / 0
  except:
    print("Illegal Math")
    break
  finally:
    print("Oh, hey there.")
    print("I see that you're breaking out of this infinite loop.")
    print("I hope you don't mind me sneaking in here and doing my thing first.")
```

```py live_py title=Finally_Continue
while True:
  try:
    user_str = input("Please enter a number:")
    user_num = float(user_str)
  except:
    print(f"Illegal input recieved: {user_str}")
    continue
  finally:
    print("Oh, hey there.")
    print("I'm just doing my thing, regardless of your continuing.")
  break
print(f"user_num: {user_num}")
```

But the most terrifying part of all is that if `finally`
does a different control flow command, it wins.
And yes, `except` blocks are technically optional.

```py live_py title=Finally_Override_Break
count = 0
while count < 10:
  try:
    break
  finally:
    print("Not this time")
    count += 1
    continue
print(f"count: {count}")
```

```py live_py title=Finally_Override_Continue
count = 0
while count < 10:
  try:
    count += 1
    continue
  finally:
    print("Breathe in. Focus. Let's bring an end to this")
    break
print(f"count: {count}")
```

`finally` can supersede and override `return`

```py live_py title=Finally_Return
def get_num():
  try:
    return 0
  finally:
    print("How about I return 1?")
    return 1
print(f"num: {get_num()}")
```

```py live_py title=Finally_Void_Return
def no_escape():
  count = 0
  while count < 10:
    try:
      return -1
    finally:
      print("You live under the illusion of control. Abandon the fight. It is written.")
      count += 1
      continue
  return count

print(f"num: {no_escape()}")
```

`finally` can supersede `exit()`

```py
# exit() doesn't quite behave in the web-python, so try it locally.
try:
  exit()
finally:
  print("Excuse me, let me just do something real quickly ...")
```

```py live_py title=Finally_Void_Exit
def no_escape():
  count = 0
  while count < 10:
    try:
      exit()
    finally:
      print("You're too impulsive. This is my time, my space. Your escape will fail")
      count += 1
      continue
  print(f"count: {count}")

no_escape()
```

Only the "terminate this program right now, no cleanup, no nothing, just DIE!"
version of exit wins over `finally`.

```py
# os._exit() doesn't quite behave in the web-python, so try it locally.
import os
try:
  os._exit(0)
finally:
  print("Wait, how did you ... ?")
```

</details>

---

:::caution

Material from here on was not part of the lecture,
but is stuff I think is related and worth mentioning.

:::

---

## `raise`

You can always trigger an error/exception at will.
This is called *raising* or *throwing* an exception
(we similarly may talk about try-except as *catching* exceptions).

This is done with the `raise` keyword.

```py live_py title=Raise
user_str = input("Please enter word: ")
if not user_str.isalpha():
  raise Exception(f"Illegal input from user: '{user_str}'")
print(f"Recieved: {user_str}")
```

Try the above on purely letters (e.g., "Foo") and something else (e.g., "314").
Notice that we get to set error message.

Specific types of errors can be raised, for example, the above could have been:

```py live_py title=Raise_Value_Error
user_str = input("Please enter word: ")
if not user_str.isalpha():
  raise ValueError(f"Illegal input from user: '{user_str}'")
print(f"Recieved: {user_str}")
```

Now illegal inputs result in a `ValueError`, not a generic `Exception`.
It is good practice to choose an appropriate error type to use.
A list of common built-in errors can be found
[here](https://www.w3schools.com/python/python_ref_exceptions.asp).
