---
title: "HW 01: Variables and Expressions"
---

# Variables and Expressions

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

Gradecope will look for files with specific names, and those names are case-sensitive.
So if in the instructions we ask for a file named `hello.py`,
then Gradescope will not recognise `Hello.py`, `hello.txt`, or `hello.py.txt`.

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

This purpose of this homework is to practice variable assignment and expressions.

### Learning Objectives

1. Learn to use the `input()` function
2. Practice using variables to store information
3. Practice basic expressions

### Estimated Size

11 small files:
* Each will have 1 to 4 calls to `input()`
* Each will have 1 to 3 `print()` statements.
* Each will have some reasonably short computations.

### Due Date: Wednesday, Febuary 22

## Preamble

The `input()` and `print()` function will be integral to this assignment.

`input()` prompts the user for input, and returns that as a string.
The `input()` function optionally takes a string to use as flavor text when prompting the user.

So the command `s = input("Enter Input: ")` would print out
`Enter Input: ` to terminal, wait for the user to type in something and hit return/enter,
and then store the text the user entered as a string in the variable `s`.

`print()` takes in pretty much anything, and prints it to the terminal.

So `print("Received: " + s)` (assuming `s` is a string). Would print `Received: ` followed by the contents of `s`.

If you wanted to print a number `n`, `print(n)` will work.

If you wanted to print a number `n` with some flavor-text in front, `print("n: " + str(n))` will work
(note the use of a string concatenation expression as an argument to `print()`).

**You do not need to know or use this, but:**
A final note, if you want some flavor text but find the concatenation bothersome: there is something called f-Strings.
`f"n: {n}"` would be the same as `"n: " + str(n)`.
You have that `f` outside the quotation marks,
and then you can place expression within the `{}` within the string to have those expressions
resolved and filled in when the string is used.

## Assignment

### **0. Setup**

Make a folder on your computer and open it in VSCode.

Remember that for every file you need to have comments indicating the author(s) at the, for example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necesary formating detail.

Some copying and pasting will save you some sanity. Apologies for the tedium. In the future (once we have functions), you'll probably only need to make one file per assignment.

### **1. Implement `echo.py` (1 point)**

Whenever playing with something new, in this case `input()` and `print()` (and variables), it is helpful to make a minimal working use-case as a sanity-check.

This program will get input from the user, and print that input back out exactly as is.

Running a correct implementation of this program could look like:
```
$ python3 echo.py 
Enter input: Hello, World!    
Hello, World!
```

You may use whatever prompt you like, all that matters that the last line perfectly echo the input typed by the user (what is returned by the `input()` function).

The specific prompt, if any, the you provide to the `input()` function is up to your discretion.

<details>
<summary><b>Hints</b></summary>

The commands to accomplish this are pretty much given in the [Preamble](#preamble) section, 
except you don't want the `"Received: "` part.

</details>

<details>
<summary><b>Testing</b></summary>

Run it, play with it. That's pretty much true for all of these.

</details>

### **2. Implement `aba.py` (1 point)**

New program. This one should read in two inputs from the user. It should then print the first, concatenated with/followed by the second, concatenated with/followed by the first again.

So if input 1 was `"a"` and input 2 was `"b"`, then `"aba"` would be printed.

Running a correct implementation of this program could look like:
```
$ python3 aba.py 
Enter first string: on
Enter second string: i
onion
```

<details>
<summary><b>Hints</b></summary>

We learned about an operator for concatenating/combining strings.

</details>

### **3. Implement `round.py` (1 point)**

Time for some numbers.

This program will ask for input that may be a whole or decimal number. It will then print that number rounded to the nearest int (there is `round()` function that takes a float and return the nearest int).

Running a correct implementation of this program could look like:
```
$ python3 round.py 
Enter a number: 3.14159265358979323
3.141592653589793 rounds to 3
```

**The last number of the last line** must be the solution, you may add flavor text or have no flavor text at all (you could just print the rounded number).

<details>
<summary><b>Hints</b></summary>

Note that `input()` will return a string.
That will then need to be turned into (cast/converted to) a number.
`int()` will cause an error if the number is formatted like a decimal number,
which only leaves one numeric type option...

Then, you can `round()`.

</details>

### **4. Implement `liters.py` (2 points)**

This program will ask for input that should represent a whole number (an int) of liters.

It should then convert that to cubic centimeters and print the converted value.

There are 1000 cubic centimetres per liter.

Running a correct implementation of this program could look like:
```
$ python3 liters.py
Enter a number: 314
314 litres is 314000 cubic centimetres
```

(Or you could infer the conversion factor from the example...)

Like before, **the last number of the last line** must be the solution. The output should be a **whole number**.

### **5. Implement `miles.py` (2 points)**

This program will ask for input that should represent a whole number (an int) of miles.

It should then convert that to yards and to feet and print the converted values on seperate lines.

There are 1760 yards per mile and 3 feet per yard.

Running a correct implementation of this program could look like:
```
$ python3 miles.py
Enter a number: 314
314 miles is:
552640 yards
1657920 feet
```

Formatting details:
* The last number on the second-to-last line must be the number of yards, as a whole number.
* The last number on the last line must be the number of feet, as a whole number.
* No other lines of text or additional formatting is necessary

### **6. Implement `kilos.py` (2 points)**

This program will ask for input that should represent a whole or decimal number (a float) of kilograms.

It should then convert that to pounds and print the converted value.

For the purposes of this assignment, there are `2.205` pounds per kilogram.

Running a correct implementation of this program could look like:
```
$ python3 kilos.py 
Enter a number: 314.15
314.15 kilograms is 692.701 pounds
```

The last number on the last line must be the conversion, no other lines of text or additional formatting is necessary.

### **7. Implement `temp.py` (2 points)**

This program will ask for input that should represent a whole or decimal number (a float) temperature in degrees Fahrenheit.

It should then convert that to Celsius and Kelvin.

For the purposes of this assignment:
* Converting the temperature from Fahrenheit to Celcius can be done by subtracting 32 from the temperature in Fahrenheit and then multiplying the result by 5 / 9.
* Converting the temperature from Celcius to Kelvin can be done by adding 273.15 to the temperature in Celcius.

Running a correct implementation of this program could look like:
```
$ python3 temp.py 
Enter temperature in Fahrenheit: 31.41
31.41 degrees Fahrenheit is equivalent to:
-0.3277777777777777 degrees Celsius
272.8222222222222 degrees Kelvin
```

Formatting details:
* The last number on the second-to-last line must be the Celcius conversion.
* The last number on the last line must be the Kelvin conversion.
* No other lines of text or additional formatting is necessary

<details>
<summary><b>Extra</b></summary>

If you'd like,
f-String allow for formatting options that can round floats to a number of decimal places (e.g. `f"{num:.3f}"`).
This can make the output look nicer.
I believe the tolerance for this test is being within `.02`,
so you can safely truncate or round to the nearest thousandth or hundredth.

</details>

### **8. Implement `cube.py` (2 points)**

This program will ask for input that is a whole number (an int) representing the length of the side of a cube.

It should then compute the volume and surface area of the cube, and print the computed values on seperate lines.

For a given length:
* The volume is the length cubed
* The surface area is 6 times the length squared (6 sides)

Running a correct implementation of this program could look like:
```
$ python3 cube.py 
Enter the length of the cube: 5
A cube with length 5 has:
Volume of 125
Surface area of 150
```

Formatting details:
* The last number on the second-to-last line must be the volume as a whole number.
* The last number on the last line must be the surface area as a whole number.
* No other lines of text or additional formatting is necessary

### **9. Implement `seconds.py` (3 points)**

This program will ask for input that is a whole number (an int) representing a number of seconds.

It will then convert that to a total number of days, hours, minutes, and seconds such that hours < 24, minutes < 60, and seconds < 60.

Running a correct implementation of this program could look like:
```
$ python3 seconds.py 
Enter a number of seconds: 314159
314159 seconds can be broken up into:
3 days,
15 hours,
15 minutes, and
59 seconds.
```

Formatting details:
* The last number on the forth-to-last line must be the number of days involved.
* The last number on the third-to-last line must be the remaining number of hours involved.
* The last number on the second-to-last line must be the remaining number of minutes involved.
* The last number on the last line must be the remaining number of seconds involved.
* No other lines of text or additional formatting is necessary

<details>
<summary><b>Hints</b></summary>

This is the integer/floor division and remainder/module operatior challenge.

</details>

### **10. Implement `quadratic.py` (3 points)**

This program will ask for input that is a whole number (an int) representing the `a` `b` and `c` in the standard form of a quadratic equation `a x^2 + b x + c = 0`.

It will then solve for the roots (`x` such that the equation equals `0`) and print them on seperate lines.

There is a [quadratic equation](https://en.wikipedia.org/wiki/Quadratic_equation) that gives the roots:

$$
x = \frac{-b\pm\sqrt{b^2-4ac}}{2a}
$$

Running a correct implementation of this program could look like:
```
$ python3 quadratic.py 
Enter a: 1
Enter b: -2
Enter c: 1
1 * x^2 + -2 * x + 1 has roots:
1.0
1.0
```

Formatting details:
* While the answers are designed to always be whole numbers, you may safely print them out as floats. (If you want to convert to an int, I suggest using `round()` and not `int()` due to how `int()` simply truncates.)
* The roots may be in any order, they just need to be on separate lines.
* If there is 1 root with a multiplicity of 2, you should still print 2 lines, they will just both have the same root.
* The numbers on the last two lines must be the roots.
* Nothing beyond 2 lines with numbers is necessary, flourish as you please.

<details>
<summary><b>Hints</b></summary>

If you use `import math` you will have access to `math.sqrt()`,
but `n ** (1/2)` actually works just fine.

</details>

### **11. Implement `weave.py` (3 points)**

This program requests 4 inputs in order:
* A string, referred to as `A` here
* A whole number, referred to as `m` here
* A string, referred to as `B` here
* A whole number, referred to as `n` here

It will then print an "interweaving" of `m` copies of `A` with `n` copies of `B`. So the final result will end up looking something like either `ABABAAA` or `ABABBBB` depending on `m` and `n`.

Running a correct implementation of this program could look like:
```
$ python3 weave.py 
Enter first string: on
Enter first number: 2
Enter second string: i
Enter second number: 1
onion
```

last line needs to be exactly the interweaving.

<details>
<summary><b>Hints</b></summary>

We haven't used string-int multiplication yet.

You can think of the resultant string as `AB` a bunch of times followed by `A` a bunch of times or `B` a bunch of times. This in turn can be `AB` `n1` times, followed by `A` `n2` times, followed by `B` `n3` times; where `n2` or `n3` ends up being `0`.

As for how many times to do both, that depends on the lesser of the two numbers, which there is a mathematical function to obtain.

</details>

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0-3 points

This is the number of points gained by completing only the initial exercises.

### 2: Approaching Standards: 4-12 points

This is the number of points gained by completing the initial exercises
and only some of the middle batch of exercises.

### 3: Meeting Standards: 13-19 points

This is the number of points gained by completing all the
initial and middle exercises, but not all of the final exercises.

### 4: Exceeding Standards: 20-22 points

This is the number of points gained by completing basically all the exercises
(and specifically completing all the final exercises).
