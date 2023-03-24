---
title: "Lab 06: Looping"
---

# Lab 06: Looping

## General Information

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

This lab will ask you to 1) construct control flow diagrams from specific loop requirements,
2) describe in English how to solve particular iterative problems,
and 3) trace through snippets of loop related code to answer questions.

This lab's focus is on understanding the concept of iteration,
and mastering the syntax of `while` and `for` loops.

### Learning Objectives

1. Practice creating control flow diagrams to solve iterative problems
2. Practice understanding and mastering loops in Python

### Estimated Size

4 questions:

- Two description questions
- A control flow diagram question
- A loop tracing question
- A challenge question

## Preamble

This lab centers around creating control flow diagrams of iterative processes, and tracing through `while` and `for` loops.

For instance, you have recently seen [this](../lectures/while-loops/Jared#shifting-the-loop) `while` loop example in the online lecture notes:

```py live_py title=While
nums = []
inp = input("Please enter a number or 'done'")
while inp.lower() != "done":
    num = int(inp)
    nums.append(num)
    inp = input("Please enter a number or 'done'")
total = sum(nums)
print(f"Sum of {nums}: {total}")
```

In the above snippet, the `while` loop keeps appending a number to the list `nums` until the user inputs the string `"done"`. At that point, all the numbers in the list will be added together and the sum will be printed.

An example of using a `for` loop is:

```py live_py title=For
prices = [12.75, 2.50, 4.99, 7.50]
sum = 0.0
avg = 0.0
for price in prices:
    sum += price

avg = sum / len(prices)
print(f"Average of {prices}: {avg}")
```

This time we see that we iterate through a list of floats using a `for` loop. We iterate through the list of prices, and add each `price` to `sum`. When the `for` loop has gone through all the item in the list, we calculate the average and print it out.

## Assignment

### 0. Example Problem

Let's say we have a pile of books on a table, and we want to see if a particular book is in the pile. How can I solve this problem iteratively? At the beginning of the lab, your course staff will walk through a solution to this problem. You do not have to submit anything.

### 1. Solving iterative problems

We are given a string `my_string` and a character `char`. In words, describe an iterative solution that determines if the `char` appears somewhere in `my_string`. For example, if the given string is "Hello" and the target character is '6', we would want to return `False`. If our character was 'H', we would want to return `True`.

### 2. Counting Digits

You are given a line of text. In words, describe an iterative solution that determines how many characters in the line of text are digits. The goal is to count the number of digits in the line of text. For example, the line of text
> Let’s 86 those \*&^% spam cans with dates 12-30-1997 and 9-19-1976."

contains 17 digits, so your solution should return `17`.

You can assume there is some process that determines if a single character is a digit, like the python `isDigit()` function.

### 3. Drawing Control Flow Diagrams

Recall the example stack-of-books problem:

> Let's say we have a pile of books on a table, and we want to see if a particular book is in the pile. How can I solve this problem iteratively?

Draw a control flow diagram of an iterative solution that returns `True` if the book is in the pile, and `False` otherwise. If you want an example of control flow diagrams, see the slides from [lecture 9](../lectures/while-loops). You are welcome to choose any ways to construct control flow diagrams, such as with PowerPoint, a Google Doc, or paper and pencil. You will upload your drawings (either as a PDF or picture) to Gradescope.

### 4. Tracing through loops

Consider the following code snippet:

```py
base = 5
exponent = 15
final = 1
while exponent > 0:
    final = base * final
    exponent -= 1
```

What are the values of the variables `exponent`, `final`, and `base` after the 3rd iteration of the `while` loop? What about after the 5th iteration? The 10th? How many times will the `while` loop execute?

### 5. (Challenge) Greatest Common Divisor

For any two integers $a$ and $b$, we define the greatest common divisor to be the largest positive number that divides both $a$ and $b$. For example, if $a = 20$ and $b = 24$, $a$ is divisible by 1, 2, 4, 5, 10, and 20, and $b$ is divisible by 1, 2, 3, 4, 6, 8, 12 and 24. Therefore, the largest number that divides both $a$ and $b$ is 4.

Describe an iterative solution that, given $a$ and $b$, computes their greatest common divisor. Here, we can assume the user gives two positive integers (In other words, two whole numbers strictly greater than zero).

Hint: Perhaps the easiest way to do this is to just test all the numbers that can possibly divide both $a$ and $b$. What is the first number we should check? What's the last number we should check?

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: ???

### 2: Approaching Standards: ???

### 3: Meeting Standards: ???

### 4: Exceeding Standards: ???
