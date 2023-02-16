---
title: "Lab 02: String Formatting"
---

import { PowerPoint } from '@site/src/components/PowerPoint'

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

Labs will generally be designed to either reinforce something from class,
or to teach something that may be useful for you but isn't tested in any way.

This lab is about string formatting.
You will not be tested on this going forward, but it is something that is good to know.

String formatting can help you print information in a way that is more legible or easier to make sense of.

### Learning Objectives

1. Learn about f-Strings
2. Learn to format float decimal places
3. Learn to format floats in scientific notation
4. Learn about variables within formatting
5. Learn about string alignment

### Estimated Size

3 functions:
* The first could reasonably be done with 2 lines, 1 of which is a print statement.
* The second could reasonably be done with 6 lines, 3 of which are print statements.
* The third could reasonably be done with 6 lines, 4 of which are print statements.

## Preamble

String formatting is an umbrella term for techniques and machinery that lets
you print things with a little more control/specificity of how they are printed.

This in generally useful making things more aesthetically pleasing and
thus easier to make sense of at-a-glance.

A reference for a number of formatting options can be found
[here](https://fstring.help/).

Below are some slides with examples of f-Strings:

<PowerPoint lec_src={require('./Lab2_CICS110.pptx').default}/>

## Assignment

### **0.1. Partner up, if you'd like**

Labs and assignments from here on may be done in groups of up to 3.
Only the Python Setup lab had to be done alone,
because we wanted to ensure everyone had the environment set up.

### **0.2. Make a file named `format.py` (1 point)**

Pretty self explanatory. Make a folder for the lab, open it in VSCode, make the file.

Now that you know about functions, most work will be in one file that has multiple functions.
This is hopefully less annoying to write, and definitely easier and faster to test.

The file for this lab's work is `format.py`. And don't forget author comments at the top, e.g.:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

### **1.1. Implement `short_exp()` (1 point)**

This function will take two floats, `base` and `exponent`.
(You may call them whatever you want, I originally just used `f1` and `f2`, but these names are clearer).

The function will print `<base> ^ <exponent> = <result>`, where:
* `<base>` is `base` formatted to always give 2 decimal places
* `<exponent>` is `exponent` formatted to always give 2 decimal places
* `<result>` is `base ** exponent` formatted to always give 2 decimal places
*in scientific notation* (the `'e'` needs to be lower case)
* The `'^'` and `=` should also have space around them.

For example, a call to `short_exp(31.415926, 27.182818)`
should print `31.42 ^ 27.18 = 4.97e+40`.

You may assume that `base` is always positive.

If you would like, you may use this starter code to make sure the spacing is appropriate:
```py live_py title=Short_Exp_Starter
def short_exp(base:float, exponent:float) -> None:
  result = base ** exponent
  print(f"{base} ^ {exponent} = {result}")

short_exp(31.415926, 27.182818)
```

<details>
<summary><b>Hints</b></summary>

Hard to be subtle with hints for this one, so these are almost answers.

Formatting floats in decimal form:
check out the *Padding and truncating numbers* section of the [linked page](https://fstring.help).

Formatting floats in scientific notation:
check out the *Other number representations* section of the [linked page](https://fstring.help).

</details>

<details>
<summary><b>Testing</b></summary>

Stick some calls to `short_exp()` in your file (outside, and below the function)
and click the play/run button in the upper-right, assuming the extensions are installed
(or open VSCode's terminal and run `python3 format.py`).
The outputs should have 2 decimal places each,
and the result should be in scientific notation.

</details>

### **1.2 Modify `short_exp()` (1 point)**

Generalizing functions when you can to make them more flexible can be quite useful.
So let's generalize `short_exp()`.

Modify `short_exp()` to take in a third parameter, `precision`, that is `2` by default.
(You may choose any name, the tests depend in it being the third parameter, not having a specific name.)

Instead of everything having 2 decimal place printed, have `precision` decimal places printed.

For example, a call to `short_exp(31.415926, 27.182818, 3)`
should print `31.416 ^ 27.183 = 4.975e+40`.

You may assume `precision` is a positive int.

<details>
<summary><b>Hints</b></summary>

Check out the *Parametrized formats* section of the [linked page](https://fstring.help).

</details>

<details>
<summary><b>Testing</b></summary>

Same as before, except make sure to try varying values for the `precision` field,
and try some calls without that third field at all (to make sure the default precision is 2).

</details>

### **2. Fix `long_div()` (2 points)**

You a given a function that currently prints long division in only a semi-formatted manner:
```py live_py title=Long_Div_Starter
def long_div(dividend:int, divisor:int) -> None:
  result = dividend // divisor
  length_dividend = len(str(dividend)) # how long the dividend is
  length_divisor = len(str(divisor)) # how long the divisor is
  horizontal_bar = length_dividend * '-'
  width = length_divisor + 1 + length_dividend
  
  print(f"{result}")
  print(f"{horizontal_bar}")
  print(f"{divisor}|{dividend}")

long_div(12865, 415)
```

This function takes two ints, a `dividend` and `divisor`,
and should print out the long-division in a more appropriately formatted manner.

For example, a call to `long_div(12865, 415)` should result in the following being printed:
```
       31
    -----
415|12865
```

You task is to ensure the nicely formatted version is displayed.

There are three lines of output total.
* The last of the three is the `divisor`, followed by a vertical line (`'|'`), followed by the `dividend`.
The length of this line also determines the total width of the area alignment occurs in.
(You may thus find the `width` variable helpful.)
* The second line is a right-justified series of dashes (`'-'`) that covers exactly the `dividend`.
the `horizontal_bar` variable already holds this, it just needs to be right-aligned.
* The first line is the result of the division (note the use of integer division), right justified.
The `result` variable already holds this, it just needs to be right-aligned.

You may assume both inputs are positive integers and that the `dividend` is a multiple of the `divisor`.

<details>
<summary><b>Hints</b></summary>

The only new formatting tool is string alignment,
which can be found under the *Padding/aligning strings* section.

Parametrized formats are still relevant.

Also, as intuition for the future, note where those variables came from:
* We need the result of the division the show on top (`result`).
* We need a horizontal bar as long as the dividend (`horizontal_bar`),
* thus we need to know the length of the dividend (`length_dividend`).
* Everything needs to be right-aligned to the width (`width`),
* thus we need to know the length of the dividend and divisor (`length_divisor`).

</details>

<details>
<summary><b>Testing</b></summary>

As before, just try some calls and see if they look right.
Try some dividends of various length the make sure the bar on the second line adjusts correctly.

Make sure the first input to the function is multiple of the second.
I would actually pick two `int`, get the product,
and pass that product and an operand to the function. For instance:
```py
num1 = 31
num2 = 415
long_div(num1 * num2, num2)
```
That way you know what the answer should be and know the `divisor` divides the `dividend`.

</details>

### **3. Implement `long_addsub()` (3 points)**

This function will take two ints, `n_top` and `n_bottom` say (names unimportant),
and prints a formatted long-addition/subtraction-looking final result.
A reasonable function prototype might be `long_addsub(n_top:int, n_bottom:int) -> None`.

For example, a call to `long_addsub(31415, 926)` would result in the following being printed:
```
 99900
+  314
------
100214
```
`long_addsub(990, -1000)` would would result in the following being printed:
```
  990
-1000
-----
-  10
```

There are a lot of constraints:
* The numbers are right-justified.
* The second number's sign should always be visible and used to indicate addition/subtraction.
* The addition/subtraction symbol should never have a digit from the first number directly over it (it may have a digit from the result under it though).
* If the result is negative, it's sign is left-justified.

You may assume the both numbers are integers and that the first one is positive.

<details>
<summary><b>Hints</b></summary>

In terms of formatting machinery, this is made possible by abusing some formatting options under the *Signed numbers* section.

The hardest part of this is figuring out what the width of the formatted region is supposed to be. Here's some more articulation:
* You need the first number and one more space (for the second number's sign) to fit
* You need the second number and its sign to fit
* You need the third number (and it's sign if it is negative) to fit

These length can be a bit trick to obtain, but calling `len()` on formatted f-Strings based on these number will allow you to get length when the sign is always there, for instance.

And for ensuring all these guarantees, well, there's always the `max()` function.

</details>

<details>
<summary><b>Testing</b></summary>

There are enough interesting condition here that we want to make some tests to hit all our cases of concern.

Each of those constraints may offer some test cases.

> The numbers are right-justified.

Anything can be used to test this, so moving on.

> The second number's sign should always be visible and used to indicate addition/subtraction.

This means we want a test where the second number is positive, and a test where it is negative.

> The addition/subtraction symbol should never have a digit from the first number directly over it (it may have a digit from the result under it though).

I look at this and see the variable here being how long the first number is relative to the second.
I would want to test when the first number is longer, where they are the same length,
and where the second number is longer.

> If the result is negative, it's sign is left-justified.

In order to check this, you need an example that has a negative result,
and where that result is small enough in magnitude that the sign would be visibly moved.

</details>

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0-2 point

This is the number of points gained by making the file and
completing only half of the first exercise.

### 2: Approaching Standards: 3-4 points

This is the number of points gained by making the file and
completing the first exercise.

### 3: Meeting Standards: 5-6 points

This is the number of points gained by making the file
completing the first and second exercises.

### 4: Exceeding Standards: 7-8 points

This is the number of points gained by completing basically all the exercises
(and specifically completing exercises 2 and 3).