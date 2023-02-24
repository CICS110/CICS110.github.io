---
title: "HW 02: Functions and Booleans"
---

# Functions and Booleans

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

The aim of this homework assignment is to practice writing functions and working with booleans.

As our skillset continues to expand,
you should keep in mind that programming is a fairly cumulative process and as such
you would want to refresh concepts introduced so far to succeed in this assignment.

**You may find [this guide](../guides/functions) on functions useful as a reference.**

### Learning Objectives

1. Practice defining functions.
2. Practice function compositions.
3. Practice boolean operations.
4. Sanity check code using assert.

### Estimated Size

This assignment requires you to implement 5 Python files.

* Each file will have 4 to 6 functions to implement.
* Each function can be reasonably implemented in 1 - 5 lines of code.
* Many functions have simple computations, similar to the first assignment.
* Some functions require you to use other functions implemented by you in the same file.

## Assignment

### **0. Setup**

Make a folder on your computer and open it in VSCode.

You must create five files in this folder. Make sure that you do not rename any of these files.

* `logic.py`
* `fun_math.py`
* `units.py`
* `lines.py`
* `quadratic.py`

Remember that for every file you need to have comments indicating the authors at the, for example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necesary formating detail.

Some copying and pasting here will save you some time and sanity.

Note that these details are necessary for the autograder to recognize your solution.

### **1. Implement `logic.py`**

This problem is a gentle introduction to boolean algebra, a branch of algebra in which computations are expressed in terms of `True` and `False` instead of numbers.

Boolean logic is a key ingredient in all programming languages. Remember that at the most basic level, a computer is a machine that can understand only two states: `ON (True)` and `OFF(False)`. Therefore, boolean algebra can be used to represent computations.

Similar to addition, subtraction, multiplication and division, boolean algebra has its own set of operations. This problem invites you to explore these operations and implement them. The three most fundamental boolean operations that you will need to use in this assignment are described below:

* `and`: Given two booleans `A` and `B`, `A and B` is `True` if and only if both `A` and `B` are `True` and `False` otherwise. The truth table for `and` is described below for your reference.

    | A    | B    | A and B|
    | ---  | ---  | ---    |
    | True | True | True   |
    | True | False| False  |
    | False| True | False  |
    | False| False| False  |

* `or`: Given two booleans `A` and `B`, `A or B` is `True` if either or both of `A` and `B` are `True` and `False` only when both `A` and `B` are `False`. The truth table for `or` is described below for your reference.

    | A    | B    | A or B |
    | ---  | ---  | ---    |
    | True | True | True   |
    | True | False| True   |
    | False| True | True   |
    | False| False| False  |

* `not`: Given a boolean `A`, `not A` is `True` if `A` is `False` and `False` if `A` is `True`. The truth table for `not` is described below for your reference.

    | A    | Not A |
    | ---  | ---   |
    | True | False |
    | False| False |

If you revisit Lecture 5, you will notice that Python comes with `and`, `or` and `not` operators. In fact, these are all what you really need for this problem!

There are several other complex boolean operations in boolean algebra. Interestingly, many of those operations can be constructed using `and`, `or` and `not`. In this problem, we provide to you descriptions of certain boolean operations. Your task is to implement the specified boolean operations using any combination of `and`, `or` and `not`, using one or more of these operations.

### **1a. Implement NAND (1 point)**

`NAND` is an operation that takes as input two booleans `A` and `B` and returns `False` only if both `A` and `B` are `True`. The truth table for `NAND` is described below for your reference.

| A    | B    | A nand B|
| ---  | ---  | ------  |
| True | True | False   |
| True | False| True    |
| False| True | True    |
| False| False| True    |

Your task is to implement a function with the following signature:

```py
def nand(a:bool, b:bool) -> bool
```
This function should take as input two booleans `a` and `b` and return the value of `a nand b`.

Example:
```py
nand(True, True)  # This should return False
nand(False, True) # This should return True
```

### **1b. Implement IMPLIES (1 point)**

`Implication` is an operation that takes as input two booleans `A` and `B` and returns `False` only when `A` is `True` and `B` is `False` and `False` otherwise. The truth table for `IMPLIES` is described below for your reference.

| A    | B    | A implies B|
| ---  | ---  | ------     |
| True | True | True       |
| True | False| False      |
| False| True | True       |
| False| False| True       |

Your task is to implement a function with the following signature:

```py
def implies(a:bool, b:bool) -> bool
```
This function should take as input two booleans `a` and `b` and return the value of `a implies b`.

Example:
```py
implies(True, True)  # This should return True
implies(True, False) # This should return False
```

### **1c. Implement IFF (1 point)**

`If and only if (Iff)` is an operation that takes as input two booleans `A` and `B` and returns `True` only when `A` and `B` are either both `True` or both `False` and `False` otherwise. The truth table for `IFF` is described below for your reference.

| A    | B    | A iff B|
| ---  | ---  | ------ |
| True | True | True   |
| True | False| False  |
| False| True | False  |
| False| False| True   |

Your task is to implement a function with the following signature:

```py
def iff(a:bool, b:bool) -> bool
```
This function should take as input two booleans `a` and `b` and return the value of `a iff b`.

Example:
```py
iff(True, True)  # This should return True
iff(True, False) # This should return False
```

### **1d. Implement XOR (1 point)**

`Exclusive or (xor)` is an operation that takes as input two booleans `A` and `B` and returns `False` when `A` and `B` are either both `True` or both `False` and `True` otherwise. The truth table for `XOR` is described below for your reference.

| A    | B    | A xor B|
| ---  | ---  | ------ |
| True | True | False  |
| True | False| True   |
| False| True | True   |
| False| False| False  |

Your task is to implement a function with the following signature:

```py
def xor(a:bool, b:bool) -> bool
```
This function should take as input two booleans `a` and `b` and return the value of `a xor b`.

Example:
```py
xor(True, True)  # This should return False
xor(True, False) # This should return True
```

### **2. Implement `fun_math.py`**

In this problem, you will use functions to perform some simple mathematical computations. Any mathematical background or information that you may need is provided to you.

### **2a. Generate Cullen Numbers (2 points)**

Cullen numbers are integers of the form $n \cdot 2^n + 1$ where $n$ is an integer.

Your task is to implement a function with the following signature:

```py
def cullen(n:int) -> int
```

The function should take as input an integer `n` and return the corresponding Cullen Number.

Example:
```py
cullen(1) # This should return 3
cullen(5) # This should return 161
```

### **2b. Generate Woodall Numbers (2 points)**

Woodall numbers are integers of the form $n \cdot 2^n - 1$ where $n$ is an integer.

Your task is to implement a function with the following signature:

```py
def woodall(n:int) -> int
```

The function should take as input an integer `n` and return the corresponding Woodall Number.

Example:
```py
woodall(1) # This should return 1
woodall(5) # This should return 159
```

### **2c. Generate Fermat Numbers (2 points)**

Fermat Numbers are integers of the form $2^{2^n} + 1$ where $n$ is an integer.

Your task is to implement a function with the following signature:

```py
def fermat(n:int) -> int
```

The function should take as input an integer `n` and return the corresponding Fermat Number.

Example:
```py
fermat(1) # This should return 5
fermat(2) # This should return 17
```

### **2d. Divisibility (2 points)**

An integer `a` is said be divisible by another integer `b` if `a` when divided by `b` leaves no remainder. For instance, $12$ is divisible by $3$ but not by $5$.

Your task is to implement a function with the following signature:

```py
def divides_evenly(dividend:int, divisor:int) -> bool
```

The function should take as input two integers, the `dividend` and the `divisor` and returns whether the `dividend` is divisible by the `divisor` or not.

Example:
```py
divides_evenly(10, 5) # This should return True
divides_evenly(10, 3) # This should return False
```

### **2e. Square Numbers (3 points)**

A square number or perfect square is an integer that is the product of some integer with itself. For instance, $9$ is a square number since $3^2 = 9$ but $5$ is not.

Your task is to implement a function with the following signature:

```py
def is_square(n:int) -> bool
```

The function should take as input an integer `n` and returns whether the `n` is a square number or not.

Example:
```py
is_square(100) # This should return True
is_square(97)  # This should return False
```

### **3. Implement `units.py`**

Do you remember fluid unit conversions from middle school? If not, here's a quick recap:

```
1 US fluid ounce = 8 US fluid drams
1 US liquid quart = 32 US fluid ounces
1 US liquid gallon = 4 US liquid quarts
```

In this problem, you will implement functions to convert fluid quantities from one unit to another. All the conversion factors that you need have been specified above for your reference. This problem will demonstrate how you can use functions to break a complex problem into smaller sub-problems.

### **3a. Convert ounces to drams (2 points)**

Your task is to implement a function with the following signature:

```py
def ounces_to_drams(ounces:float) -> float
```

The function should take as input a float `ounces` and return the corresponding quantity in `drams`.

Example:
```py
ounces_to_drams(8)   # This should return 64
ounces_to_drams(2.5) # This should return 20
```

### **3b. Convert drams to ounces (2 points)**

Your task is to implement a function with the following signature:

```py
def drams_to_ounces(drams:float) -> float
```

The function should take as input a float `drams` and return the corresponding quantity in `ounces`.

Example:
```py
drams_to_ounces(8)      # This should return 1
drams_to_ounces(120.84) # This should return 15.105
```

### **3c. Convert quarts to ounces (2 points)**

Your task is to implement a function with the following signature:

```py
def quarts_to_ounces(quarts:float) -> float
```

The function should take as input a float `quarts` and return the corresponding quantity in `ounces`.

Example:
```py
quarts_to_ounces(8)   # This should return 256
quarts_to_ounces(2.5) # This should return 80
```

### **3d. Convert ounces to quarts (2 points)**

Your task is to implement a function with the following signature:

```py
def ounces_to_quarts(ounces:float) -> float
```

The function should take as input a float `ounces` and return the corresponding quantity in `quarts`.

Example:
```py
ounces_to_quarts(64)     # This should return 2
ounces_to_quarts(120.84) # This should return 3.77625
```

### **3e. Convert gallons to quarts (2 points)**

Your task is to implement a function with the following signature:

```py
def gallons_to_quarts(gallons:float) -> float
```

The function should take as input a float `gallons` and return the corresponding quantity in `quarts`.

Example:
```py
gallons_to_quarts(64)     # This should return 256
gallons_to_quarts(120.84) # This should return 483.36
```

### **3f. Convert quarts to gallons (2 points)**

Your task is to implement a function with the following signature:

```py
def quarts_to_gallons(quarts:float) -> float
```

The function should take as input a float `quarts` and return the corresponding quantity in `gallons`.

Example:
```py
quarts_to_gallons(72)     # This should return 18
quarts_to_gallons(120.84) # This should return 30.21
```

### **3g. Convert gallons to drams (2 points)**

Your task is to implement a function with the following signature:

```py
def gallons_to_drams(gallons:float) -> float
```

The function should take as input a float `gallons` and return the corresponding quantity in `drams`.

Example:
```py
gallons_to_drams(12)    # This should return 12288
gallons_to_drams(0.078) # This should return 79.872
```

*Hint: Re-use the functions in 3a. - 3f.*

### **3h. Convert drams to gallons (2 points)**

Your task is to implement a function with the following signature:

```py
def drams_to_gallons(drams:float) -> float
```

The function should take as input a float `drams` and return the corresponding quantity in `gallons`.

Example:
```py
drams_to_gallons(250)  # This should return 0.244141
drams_to_gallons(2999) # This should return 2.928711
```

*Hint: Re-use the functions in 3a. - 3f.*

### **4. Implement `lines.py`**

In this problem, you will write functions to characterize lines and find the point of intersection of two lines if it exists. Let's consider a two-dimensional space. Given two lines:
$$
y = m_1x + b_1
$$
$$
y = m_2x + b_2
$$
three possibilities may arise:
* The two lines are the same i.e. they are coincident
* The two lines are parallel
* The two lines intersect at a unique point

All the necessary mathematical background you may need is provided below.

### **4a. Parallel Lines (3 points)**

The two lines are parallel if $m_1 = m_2$ and $b_1 \neq b_2$.

Your task is to implement a function with the following signature:

```py
def are_parallel(m1:float, b1:float, m2:float, b2:float) -> bool
```
The function take as argument four floats `m1`, `m2`, `b1`, `b2` as described above and returns whether the two lines defined by the specified parameters are parallel or not.

Example:
```py
are_parallel(0.75, 1, 0.75, 2) # This should return True
are_parallel(1, 2.5, 3.5, 2.5) # This should return False
```

### **4b. Coincident Lines (3 points)**

The two lines are the same (coincident) if $m_1 = m_2$ and $b_1 = b_2$.

Your task is to implement a function with the following signature:

```py
def are_same(m1:float, b1:float, m2:float, b2:float) -> bool
```
The function take as argument four floats `m1`, `m2`, `b1`, `b2` as described above and returns whether the two lines defined by the specified parameters are coincident or not.

Example:
```py
are_same(0.75, 1, 0.75, 1) # This should return True
are_same(0.75, 1, 0.75, 2) # This should return False
```

### **4c. Lines with Unique Intersection (3 points)**

The two lines intersect at a unique point if $m_1 \neq m_2$.

Your task is to implement a function with the following signature:

```py
def have_unique_intesection(m1:float, b1:float, m2:float, b2:float) -> bool
```
The function take as argument four floats `m1`, `m2`, `b1`, `b2` as described above and returns whether the two lines defined by the specified parameters intersect at a unique point or not.

Example:
```py
have_unique_intersection(1, 2.5, 3.5, 2.5) # This should return True
have_unique_intersection(0.75, 2, 0.75, 4) # This should return False
have_unique_intersection(0.75, 2, 0.75, 2) # This should return False
```

### **4d. Intersecting Lines (3 points)**

Two lines are said to intersect either if they have a unique intersection point or they are coincident.

Your task is to implement a function with the following signature:

```py
def have_intesection(m1:float, b1:float, m2:float, b2:float) -> bool
```
The function take as argument four floats `m1`, `m2`, `b1`, `b2` as described above and returns whether the two lines defined by the specified parameters intersect or not.

Example:
```py
have_intersection(1, 2.5, 3.5, 2.5) # This should return True
have_intersection(0.75, 1, 0.75, 1) # This should return True
have_intersection(0.75, 2, 0.75, 4) # This should return False
```

### **4e. Point of intersection**

For two lines that have a unique intersecting point, we can easily determine this point. Since we are working with lines in a two dimensional plane, this point is an ordered pair of the form $(x,y)$.

### **Part I: Determining the $x$ coordinate (3 points)**

A well established result states that $x = -\frac{(b_1 - b_2)}{m_1 - m_2}$.

Your task is to implement a function with the following signature:

```py
def x_intersect(m1:float, b1:float, m2:float, b2:float) -> float
```
The function takes as arguments four floats `m1`, `m2`, `b1`, `b2` as described above and returns the x-coordinate of the point of intersection. The function should only return an output if the lines specified have a unique point of intersection, otherwise give an error.

*Hint: For the error, use an `assert` statement with one of the functions 4a. - 4d.*

Example:
```py
x_intersect(1, 2.5, 3.5, 2.5)   # This should return 0
x_intersect(3.5, 2.5, 3.5, 7.5) # This should give an ERROR!
x_intersect(3.5, 2.5, 3.5, 2.5) # This should give an ERROR!
```

### **Part II: Determining the $y$ coordinate (3 points)**

Notice that once we determine $x$, we can use direct substitution into the equations of the lines to calculate $y$. Therefore, given $x$, we can calculate y as either of the following:
$$
y = m_1x + b_1
$$
$$
y = m_2x + b_2
$$

Your task is to implement a function with the following signature:

```py
def y_intersect(m1:float, b1:float, m2:float, b2:float) -> float
```
The function takes as arguments four floats `m1`, `m2`, `b1`, `b2` as described above and returns the y-coordinate of the point of intersection. The function should evaluate $y$ using the two equations specified above, verify that both the equations yield the same value of $y$ and return an output if the lines specified have a unique point of intersection, otherwise give an error.

*Hint: For the error, use an `assert` statement with one of the functions 4a. - 4d.*

Example:
```py
y_intersect(1, 2.5, 3.5, 2.5)   # This should return 2.5
y_intersect(3.5, 2.5, 3.5, 7.5) # This should give an ERROR!
y_intersect(3.5, 2.5, 3.5, 2.5) # This should give an ERROR!
```

### **5. Implement `quadratic.py`**

In this problem, we revisit the problem of solving quadratic equations from Homework 1. You will be writing functions to characterize the solutions of quadratic equations in the standard form $ax^2 + bx + c = 0$ and find real solutions, if they exist.

### **5a. Determining the Discriminant (3 points)**

The discriminant of a quadratic equation is the quantity $d = b^2-4ac$. The discriminant determines the nature of roots of a quadratic equation.

Your task is to implement a function with the following signature:

```py
def discriminant(a:float, b:float, c:float) -> float
```
The function takes as arguments three floats `a`, `b`, `c`, as described above and returns the discriminant of the quadratic equation described by the specified parameters.

Example:
```py
discriminant(6, 10, -1) # This should return 124
discriminant(1, -3, 4)  # This should return -7
```

### **5b. Check for the existence of real roots (3 points)**

A well known result in mathematics states that a quadratic equation has real roots if and only if the discriminant is strictly greater than 0 i.e. $d \geq 0$.

Your task is to implement a function with the following signature:

```py
def has_real_root(a:float, b:float, c:float) -> bool
```
The function takes as arguments three floats `a`, `b`, `c`, as described above and returns the if the quadratic equation described by the specified parameters has real roots or not.

Example:
```py
has_real_root(6, 10, -1) # This should return True
has_real_root(1, -3, 4)  # This should return False
```

*Hint: Reuse 5a. to calculate the discriminant.*

### **5c. Calculate a real root (3 points)**

Using the discriminant, we can write the roots of the quadratic equation as $x_1 = \frac{-b + \sqrt{d}}{2a}$ and $x_2 = \frac{-b - \sqrt{d}}{2a}$.

Your final task (Yay!) is to implement a function with the following signature:

```py
def get_any_real_root(a:float, b:float, c:float) -> float
```
The function takes as arguments three floats `a`, `b`, `c`, as described above and returns any one root of the the quadratic equation described by the specified parameters. It should return a root only if the equation specified by the parameters has real roots otherwise should give an error.

*Hint: For the error, use an `assert` statement with one of the functions 5a. - 5b.*

Example:
```py
get_any_real_root(1, -7, 10) # This should return 2 or 5
```

## Grading Scale

Note that points may be obtained from anywhere,
you do not need to try or complete work in any particular order
(except where a function depends on another function).

### 1: Below Standards: 0-15 points

This is the number of points that demonstrates proficiency equivalent to completing `logic.py` and `fun_math.py`.

### 2: Approaching Standards: 16-31 points

This is the number of points that demonstrates proficiency equivalent to completing through `units.py`.

### 3: Meeting Standards: 32-49 points

This is the number of points that demonstrates proficiency equivalent to completing through `lines.py`.

### 4: Exceeding Standards: 50-58 points

This is the number of points that demonstrates proficiency equivalent to completing almost the entire assignment.
