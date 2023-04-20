# Lab 10: Recursion

## Overview

This week's lab focuses on recursion, primarily on

- identifying the components of a recursive function
- writing the base case for a recursive problem
- converting a recursive procedure into an iterative procedure

Refer to lecture 17 for examples of recursion and recursive functions.

## How big is this lab?

The lab contains 4 questions. If you have questions about the expected level of detail in the explanation for question 1, please ask your lab staff.

## Assignment

### 1. Identifying base case and recursive step (1 point)

Consider the following recursive function that takes in a list of numbers and computes the sum of all the elements in the list:

```py
def sum_list(lst):
    if len(lst) == 0:
        return 0
    else:
        return lst[0] + sum_list(lst[1:])
```

Identify the base case and the recursive step. Your answer should be two code snippets from the above function. No explanation is needed, but please clearly indicate which snippet is the base case and which snippet is the recursive step.

### 2. Coming up with base case (1 point)

Recall that base case terminates our recursion by return a specific value without making a new recursive call. Let's assume we have a recursive function that takes in an integer $$n$$ and counts the number of digits $$n$$ has. A partial implementation of the function is shown below:

```py
def digit_count(n):
    # <TODO: Write a base case>

    else:
        return 1 + digit_count(n // 10)
```

For example, `digit_count(100)` returns `3`, and `digit_count(1234567)` returns `7`. Write a single base case to complete the function above. Your submission should be up to two lines of code.

### 3. Returning woes (1 point)

Consider the following recursive function that takes in two nonnegative integers $$a$$ and $$b$$, and computes the quantity $$a ^ b$$:

```py
def exponentiation(a, b):
    if b == 0:
        return 1
    
    a * exponentiation(a, b-1)
```

Unfortunately, our implementation has a problem: sometimes the function works, but other times our function returns nothing or even crashes! Briefly explain what is causing this issue, and provide a (short) code snippet of how you would fix this problem. (if you want, you can explain why this function can crash, but it is not required)

### 4. Converting from recursion to iteration (1 point)

In lecture 17 we saw a way to implement the factorial function recursively:

```py
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)
```

Convert the recursive implementation

## Grading Scale

Below are how many points are required for each level on the 5-point scale.

### 1: Below Standards: 0 point

### 2: Approaching Standards: 2 points

### 3: Meeting Standards: 3 points

### 4: Exceeding Standards: 4 points
