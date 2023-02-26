---
author: bburns
sidebar_position: 99
---

# The Big List

This is an in-progress list of Python programming practice problems. The problems are roughly categorized by topic, and questions are listed so that a particular question only requires concepts covered before it. For example, questions in the Functions section will not require if-statements.

We will not post solutions to these, and encourage you test your solutions locally! However, we heavily encourage you compare solutions to classmates or come to office hours. If you get stuck, check out the [Getting Unstuck](/main/guides/getting-unstuck) guide.

## Asserts

### `int` assertions

- Given a variable `a` containing an `int`, write a single line of code that asserts that `a` is equal to 3
- Given a variable `count` containing an `int`, write a single line of code that asserts that `count` is greater than or equal to 0.
- Given two variables `a` and `b` containing `int` values, write a single line of code that asserts that `a` is strictly smaller than `b`.
- Given two variables `a` and `b` containing `int` values, write a single line of code that asserts that `a` and `b` are not equal.
- Given a variable `day` containing an int, write a single line of code that asserts that `day` is between 1 and 7 inclusive.

### `String` assertions

- Given a variable `name` containing a String, write a single line of code that asserts that `name` contains the value 'Ben'
- Given a variable `name` containing a String, write a single line of code that asserts that `name` does not contain the value 'John'
- Given a variable `name` containing a String, write a single line of code that asserts that `name` is at most 10 characters long.
- Given a variable `name` containing a String, write a single line of code that asserts that `name` is neither 'Ben' nor 'John'

### `type` assertions

- Given a variable `count`, write a single line of code that asserts `count` contains an `int`
- Given a variable `ratio`, write a single line of code that asserts `ratio` contains a `float`
- Given a variable `name`, write a single line of code that asserts that `name` is a String.
- Given two variables `a` and `b`, write a single line of code that asserts that both `a` and `b` contain `int`s

## Functions

Define parameters in the order they are listed in the prompt.

### Function headers

- Write the function header for a function named `my_function`, which takes in no parameters
- Write the function header for a function named `convert`, which takes in a single parameter named `a`
- Write a function header for a function named `multiply`, which takes in two positional parameters named `a` and `b`
- Write a function header for a function named `get_capacity`, which takes in a single parameter named 'water_level' with default value `0`
- Write a function header for a function named `take_power` which takes in two parameters: `base`, with no default value, and `exponent`, with a default value of 2

### Return statements

- Complete the following function by writing a single line of code that returns the value `3`

```python
def return_three():
```

- Complete the following function by writing a single line of code that returns the value of `result`

```python
def return_variable(a):
    result = a + 3
```

- Complete the following function by writing a single line of code that returns the value of the parameter `a`

```python
def return_parameter(a):
```

- Complete the following function by writing a single line of code that returns the value of the parameter `num` multiplied by `5`

```python
def quintuple(num):
```

- Complete the following function by writing a single line of code that returns the value of the first parameter subtracted by the second parameter

```python
def subtract(a, b):
```

### Full functions

1. Write a function named 'print_hello', which takes in no parameters and prints the String 'Hello!'
2. Write a function named 'add_three', which takes in a single parameter `num`, and returns the value of `num` plus the value `3`.
3. Write a function named 'compare', which takes in two parameters `a` and `b`, which returns `True` if `a` is greater than `b`, and `False` otherwise. This function should be two lines including the header, and should not require the use of if-statements or a ternary!
4. Write a function named 'fifth_power', which takes in a single parameter `num`, which asserts that `num` is an `int`, and then returns `num` raised to the 5th power. This function should be three lines including the header.
