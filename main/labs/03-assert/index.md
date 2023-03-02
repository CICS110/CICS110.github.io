---
title: "Lab 03: Assert"
---

# Lab 03: Booleans and Assert

## General Information

<details>
<summary><b>Submitting to the Auto-Grader</b></summary>

For auto-grading homework assignments in the course,
we use [Gradescope](https://www.gradescope.com).

#### General Submission Info

When submitting files to Gradescope,
you need to submit all the files you want graded at once.

You can do this in several ways:
* Select all files you want to submit and drag and drop them in the submission area when prompted.
* Browse your files when prompted by Gradescope and select all files you want to submit.
* Directly compress all the files you want to submit into a zip file (zip file name does not matter),
and submit that zip file via drag-and-drop or browsing for it.
* Compress a folder containing the files you want to submit into a zip file (zip file name does not matter),
and submit that zip file via drag-and-drop or browsing for it.

Gradescope will look for files with specific names, and those names are case-sensitive.
So if in the instructions we ask for a file named `hello.py`,
then Gradescope will not recognize `Hello.py`, `hello.txt`, or `hello.py.txt`.

#### Group Submissions

When a group of people is submitting an assignment,
only one person should submit the solution.

They should then add the other members to that submission.
On the Gradescope page for a submission there should be a
"+ Add Group Member" button by the name in the upper-right.

This is important because if multiple people submit,
our similarity checker will see identical submissions and flag that.

#### Unlimited attempts

You have unlimited attempts for our auto-graded assignments.

This means that you should submit early and often in order
to be confident that code you are writing as you go passes all of our tests.

</details>

<details>
<summary><b>Academic Honesty</b></summary>

All work that is completed in this assignment is your own group's.
You may talk to other students about the problems you are to solve,
however, you may not share code in any way, except with your partner(s). 
What you submit **must be your own group's work**.

You may not use any code that is posted on the internet. If you are
not sure it is in your best interest to contact the course staff.
We will be using software that will compare your code to other students in the course
as well as online resources.
It is very easy for us to detect similar submissions and will result in
a failure for the exercise or possibly a failure for the course.
Please, do not do this.
It is important to be academically honest and submit your work only.
Please review the [UMass Academic Honesty Policy and
Procedures](https://www.umass.edu/honesty/) so you are aware of what this means.

Copying partial or whole solutions, obtained from other students or elsewhere, is academic dishonesty.
Do not share your code with your classmates, and do not use your classmates' code.
If you are confused about what constitutes academic dishonesty you should re-read the course policies.
We assume you have read the course policies in detail and
by submitting this project you have provided your virtual signature in agreement with these policies.

</details>

## About

This lab has you making some boolean expressions and practicing the use of `assert`s.

This lab has you use `assert` both to ensure the functions have received legal arguments,
and as a means of checking that the result returned by a function is reasonable.

### Learning Objectives

1. Practice building up boolean expressions
2. See a 2+ variable truth table
3. Practice using asserts as a sanity check

### Estimated Size

4 functions:
* A one-liner with two `assert`s
* Another one-liner, with three `assert`s
* Another one-liner, though could be broken up more. Has one `assert`.
* A function with 3 `assert`s

## Preamble

This lab centers around boolean expressions and `assert` statements.

Remember that `assert` is not a function, it takes an expression to assert is true,
and optionally a string to print if the assertion is violated.

For instance:
```
assert 0 <= x, "x is negative"
```

If `x` were `-5` in the above example,
the program would terminate with an error message `AssertionError: x is negative`.

This can be used to ensure the arguments passed to a function are legal.
Imagine you had a function that would perform some arithmetic,
you could use `assert` to ensure the arguments are numbers:
```py
def do_some_math(x:float, y:float) -> float:
  assert type(x) == int or type(x) == float
  assert type(y) == int or type(y) == float
  # do something mathematical
```

These asserts would trigger if illegal arguments were passed to the function.
In a finished working version of the code, they would hopefully not ever trigger.

You can also use asserts to create "tests" or "validation functions".
Imagine you had a function that gave you a random number in a range.
You could make a validation function full of asserts to ensure it is working correctly, for instance:
```py
def validate_get_number_in_range(lower_bound:int, upperbound:int, number:int) -> None:
  # (return is None, because it will either throw an error or do nothing)
  assert lower_bound <= number
  assert number <= upper_bound

# ... later in code
# Some function we want to use:
x = get_number_in_range(lower_bound, upper_bound)
# Making sure/testing it satisfies some criteria:
validate_get_number_in_range(lower_bound, upper_bound, x)
# Do something with x
```

In a working version of the code, this would never trigger,
but while writing code it can help catch bugs (like in the `get_number_in_range()` function above).

## Assignment

### **0. Set up file named `school.py` (1 point)**

Make a file named `school.py`,
all your work should be in that file and that is what you will submit to Gradescope.

Don't forget author comments at the top, e.g.:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

### **1.1. Implement `different_names()` (1 point)**

Write a function named `different_names()` that takes in two strings, and returns `True` if they are *different* and `False` if they are the same.

Capitalization matters, `"Joe"` is not the same as `"joe"`, for this function. And they are not the same in terms of string comparison with `==` (so you basically don't need to worry about it).

<details>
<summary><b>Hints</b></summary>

Boolean expressions will be useful here.

Just like arithmetic expressions and values, you can store boolean values and the results of boolean expressions in variables, e.g., `in_range_01 = 0 <= x and x <= 1`.

</details>

<details>
<summary><b>Testing</b></summary>

Call the function, get the output, print the output. Try it with names that are the same, try it with names that are different.

</details>

### **1.2. Add `assert`s to `different_names()` (1 point)**

`assert` allows you to force a guarantee about the state of your code beyond a point (by terminating the program if that guarantee is not met).

We can use this for testing, but we can also use to it to reject illegal inputs to a function.

We want to ensure that the inputs to the `different_names()` are both strings (type equal to `str`). So can add asserts requiring this to be so. This way, if the inputs are not strings, then you get a clear termination of the program with an error message and not have less clear error or quiet misbehavior.

So add `asserts` to this function to ensure the inputs are of type `str`. These should be at the beginning of the function, like in the second code block in the [preamble](#preamble) section.

**Note: You are editing the existing function, not making a new one.**

<details>
<summary><b>Hints</b></summary>

If it hasn't come up, there is function called `type()` that gives you the type of something.

And the result of that can be compared against something like `int`, `float`, or `str`.

See the preamble for an example.

</details>

### **2.1. Implement `three_unique_names()` (1 point)**

Write a function named `three_unique_names()` that takes in three strings, and returns `True` if they are *all different from each other* and `False` if *any two are the same*.

Capitalization still matters (e.g., "Joe" and "joe" are different in the eyes of this function and the `==` operator).

<details>
<summary><b>Hints</b></summary>

You can use your implementation of `different_names()` if you'd like.

</details>

<details>
<summary><b>Testing</b></summary>

To cover all the cases, you'd want to test when all names are the same, every passible combination of two names is the same and one is different (3 ways this can happen), and when all 3 names are different.

</details>

### **2.2. Add `assert`s to `three_unique_names()` (1 point)**

Add `assert`s to this function to ensure the inputs are of type `str`. You want to ensure an assertion error is any of the three inputs are not of type `str`.

These should be at the beginning of the function, like in the second code block in the [preamble](#preamble) section.

**Note: You are editing the existing function, not making a new one.**

<details>
<summary><b>Extra</b></summary>

Depending on how you implemented this function, you may not need to add asserts at all because of the asserts in `different_names()`.

But, be warned, if you have function calls in an `and` or `or` statement, then they may not be called due to "short circuiting".
This is where the expression on the left of an `and` evaluates to `False`, and so the computer knows the whole thing is `False` and thus doesn't check the expression on the right.
Ditto the left expression of an `or` evaluating to `True`.

</details>

### **3.1. Implement `school_open()` (2 points)**

Write a function named `school_open()` that takes in variables (that I will call) `day`, `is_holiday`, `is_snowy`, and `is_plowed`:
* `day` is an int in the range of 1 to 7 (inclusive). 1 represents Sunday, 2 Monday, ..., 7 Saturday.
* `is_holiday` is a boolean that is `True` if and only if today is a holiday.
* `is_snowy` is a boolean that is `True` if and only if there is snow.
* `is_plowed` is a boolean that is `True` if and only if any snow has been plowed. If `is_snowy` is `False`, then this variable may be either `True` or `False` and it doesn't matter.

This function should return `True` if and only is school is open.

School can't be open on a weekend (Saturday or Sunday). School can't be open on a holiday. School can't be open if it has snowed and not been plowed. Otherwise, school is open.

But forget words, have a big ol' truth table:

|`is_weekday`|`is_holiday`|`is_snowy`|`is_plowed`|`is_open`|
|:---:|:---:|:---:|:---:|:---:|
|True|True|True|True|False|
|True|True|True|False|False|
|True|True|False|True|False|
|True|True|False|False|False|
|True|False|True|True|True|
|True|False|True|False|False|
|True|False|False|True|True|
|True|False|False|False|True|
|False|True|True|True|False|
|False|True|True|False|False|
|False|True|False|True|False|
|False|True|False|False|False|
|False|False|True|True|False|
|False|False|True|False|False|
|False|False|False|True|False|
|False|False|False|False|False|

<details>
<summary><b>Hints</b></summary>

The challenge of this is translating the words to code, and it's hard to give hints for that.

Perhaps a starting point might be asking "is school open if `A and B and C and ...` or if `A or B or C or ...`, and then trying to figure out what those `A`, `B`, `C`, et cetera are in code.

Also, if you like the `is_weekday` value, then make you want a helper function that takes in a day as return True if (and only if) it is a weekday.

</details>

<details>
<summary><b>Testing</b></summary>

\*Sigh\*, my actual recommendation involves a for loop and printing out your empirical truth table, but we don't have loops yet.

When you can't check *every* case, you can still test a collection of representative cases, and maybe also a bunch of random cases.

For representative cases, you want to test the variable factors (weekend, holiday, and plowing stuff). As a control, I would start with some weekday, no holiday, no snow, no plow; make sure that's true.
Then test toggling the day, the holiday, then snow, and the plow given snow. Basically, this slice of the truth table:

|`is_weekday`|`is_holiday`|`is_snowy`|`is_plowed`|`is_open`|
|:---:|:---:|:---:|:---:|:---:|
|True|False|False|False|True|
|False|False|False|False|False|
|True|True|False|False|False|
|True|False|True|False|False|
|True|False|True|True|True|

(I'd also want play around with the `day` a bit to catch if I've messed up computing the helper variable `is_weekday`)

I'd even go as far as making a helper function that takes the inputs for `school_open()`, passes those to `school_open()`, saves the output, and prints a line of the truth table in an aesthetically pleasing manner.

For doing random sample testing, `import random`, and then `random.randint(1,7)` and multiple uses of `random.choice([True,False])` would allow you to generate a random case.

</details>

### **3.2. Add `assert`s to `school_open()` (2 points)**

Add an `assert` to `school_open()` to ensure that the `day` parameter is in the 1 to 7 range.
And think for a bit about how your solution would have treated a number outside the range. It would probably have run without issues, but something wrong would be happening in some sense without us being aware of it.

This should be at the beginning of the function, like in the second code block in the [preamble](#preamble) section.

(If you want, feel free to ensure that the other values are all of type `bool`)

**Note: You are editing the existing function, not making a new one.**

### **4. Implement `verify_school_open()` (2 points)**

Another way to test the above function is with a sanity check/validation test using `assert`.

This approach is demonstrated in the third code block in the [preamble](#preamble) section.

When you pass `day`, `is_holiday`, `is_snowy`, and `is_plowed` to the `school_open()` function, you get back a result; call it `is_open`.

There are several things that should be true about these variables:
* You *should not* have a case where `day` represents a weekend (`is_weekday` is `False`) and `is_open` is `True`
* You *should not* have a case where `is_holiday` is `True` and `is_open` is `True`
* You *should not* have a case where `is_snowy` is True, `is_plowed` is `False`, and `is_open` is `True`

These will become the `asserts` for the validation function.

Make a function with the signature
```py
verify_school_open(day, is_holiday, is_snowy, is_plowed, is_open)
```

This function should `assert` the three things above. This will allow you to run code of the form:
```py
is_open = school_open(day, is_holiday, is_snowy, is_plowed)
verify_school_open(day, is_holiday, is_snowy, is_plowed, is_open)
```
Here, an incorrect implementation of `school_open()` has a chance of triggering the `assert`s in `verify_school_open()`.

(Naturally, the implementation of `verify_school_open()`) may not be correct, but figuring out why there is a contradiction between the two can still be informative.)

<details>
<summary><b>Extra</b></summary>

So where did those assertions come from.

Here are the original instructions:
* School can't be open on a weekend (Saturday or Sunday).
* School can't be open on a holiday.
* School can't be open if it has snowed and not been plowed.
* Otherwise, school is open.

In logic terms the first three are respectively equivalent to:
* not weekday implies not open
* holiday implies not open
* snowed and not plowed implies not open

"A implies B" is logically equivalent to "(not A) or B":
* weekday or not open
* (not holiday) or not open
* not (snowed and not plowed) or not open

Pulling the not out via reverse DeMorgans:
* not (not weekday and open)
* not (holiday and open)
* not (snowed and not plowed and open)

Note that since I only translated 3 conditions, there are some illegal combinations that can get through the asserts. Violations of the "otherwise school is open" rule. False *closures* are completely missed.

</details>

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0-3 points

### 2: Approaching Standards: 4-7 points

### 3: Meeting Standards: 8-9 points

### 4: Exceeding Standards: 10-11 points
