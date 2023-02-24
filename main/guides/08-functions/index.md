---
author: erfan, bburns
---

# Functions

This is an all purpose guide on how to write functions in Python.

## What is a function?

A function in Python is a block of code designed to perform a specific task that can be reused multiple times without the need to rewrite it. By breaking down a problem into smaller, specific tasks, functions allow programmers to write more organized and efficient code.

### Parts of a function

All functions have two main parts:

1. The **function header** defines the function's name, what inputs it can expect, if any, and what we can expect it to `return` if anything. There are 4 main parts to a function header:
   1. The `def` keyword will appear at the beginning of the function header, signifying to `python` that "Hey! This line is the definiton of a new function!"
   2. The **function name** is simply the name of the function. For example, `print()`'s function name is 'print', and `math.pow(a, b)`'s name is 'pow'. The function name is what you use to call the function, much like how you use a variable's name to use the value of a variable. The function name will always be followed by a set of parenthesis: `()`
   3. **Parameters**, also known as **arguments**, are the inputs that are passed to the function. Parameters are optional, since in some cases you may not want your function to take in any values. Parameters are defined as a series of parameter names separated by commas, written in the parenthesis following the function name.
   4. At the end of the function header, you will always find a colon (`:`) followed by a new line.
2. The **function body** is the code that is executed when the function is called. The function body starts on the first line after the function header. (right after the `:`)

## Defining a new function

To define a function in Python, we first write our function header. For the sake of example, let's say I want to write a function that takes in one value `a`, triples it, and prints the result out.

First, we write the `def` keyword to signify we're defining a new function. Then, we write the function's name. Function names are important! You want it to be clear what a function does from its name. In this case, we'll name our function 'triple'. Following our function name, we insert a set of parenthesis, followed by a colon.

This is our bare bones function header:

```python
def triple():
```

While this will work, we also want our function to take in arguments: we can't triple `a` if we don't let the programmer provide us `a`!. Therefore we define a single parameter named `a` by simple inserting `a` in the parenthesis:

```python
def triple(a):
```

Now that we have written the function header, we can write the body. The function body must be indented one level more than the function header. In this case, we simply want to calculate the value `3 * a` and print the result, so our function body will simply be

```python
print(3 * a)
```

Adding this to our function header, we have

```python
def triple(a):
    print(3 * a)
```

Here is an example that shows the general structure of a function in Python:

```python
/* code before the function */
def function_name (parameters)):
    /* 
        function body 
    */
```

It's important that, when we go to write the next line of code in our program after a function, we write the new code *outside* the function. The way python tells where the function body stops is by indentation. It's easiest to see this in examples. In the above example, if I wanted to write a line of code that prints the string `'Done.'` after the definition of the `triple()` function, but not *in* the function, I would write the line on the same level of indentation as the function *header*, rather than the function *body*:

```python
def triple(a):
    print(3 * a)

print('Done.')
```

If I didn't unindent this new line, python would see it as apart of the function definition.

## Calling a function in Python

Once the function is defined, you can call it in your code by invoking the function name, followed by parentheses. For example, if I wanted to call the built-in print function, I would just write

```python
print('This is me printing!')
```

The same goes for functions we define. If I want to call the triple function with input value `3`, I would write

```python
triple(3)
```

It is important that we pass a parameter to the triple function. If I were to simply make a call to `triple()` with no parameter, python would look for a function named triple with no parameters. Think of this like if you call a restaurant to order food. You tell them you want to place an order, they ask what you would like, and then you hang up. The restaurant doesn't know what to do, it needs extra information to do its job. The `triple()` function is the same way here, it needs a single parameter to do its job.

## Types of parameters

So far our functions have had a single parameter. To define multiple parameters, we simply write a list of parameter names separated by commas.

### Positional parameters

Take the following `sum()` function as an example:

```python
def sum(a, b):
    result = a+b
    print(result)    
```

This function expects two parameters: `a` and `b`, so to call sum I would need to pass two values. For example, if I call `sum(2, 3)`, the function assigns `a` to be `2`, since `a` appears first in the function definition and `2` is the first value passed, and `b` is assigned to be `3`. For this reason, `a` and `b` are called *positional parameters*, since they are assigned to the value passed in their position. If we were to call `sum(3, 2)`, then `a` would be `3` and `b` would be `2`.

### Default parameter values

We can also define our parameters to have default values. Take the following name age function as an example, which takes in two positional parameters `name` and `age`, and prints a formatted string:

```python
def name_age(name, age):
    print(f"{name} is {age} years old.")
```

Let's say most people whose names we're printing are 18 years old, with a few expections that are older or younger. We don't want to have to pass `18` as a second parameter every time, we just want to specify when age *isn't* 18. Therefore, we give `age` a default value of `18`:

```python
def name_age(name, age=18):
    print(f"{name} is {age} years old.")
```

If a value is not provided for these parameters when the function is called, the default value is used. For example, if I call `name_age('John')`, the function will use `age`'s default value of `18`. If we call the function with both `name` and `age` parameters, the provided value is used.

In this case, we can pass two positional parameters, like `name_age('John', 20)`. However, in some cases you might have 20 parameters with default values, and you only want to specify one. In this case, you would specify you want to change `age` in your call: `name_age('John', age=20)`.

### Type annotations

In some cases, we want to specify what type of value we expect to be passed to a parameter. In this case, we use the `:` operator to specify the type of each parameter. Type annotations are optional, but can help with code readability. For example, our `triple()` function from before is expecting a single number, so we can add a type annotation to the `a` parameer that we're expecting a `float`. If we want our `sum()` function to expect two `int` parameters, we can specify that as well:

```python
def triple(a: float):
    print(3 * a)

def add(a: int, b: int):
    result = a+b
    print(result)
```

We can also do this for functions with default parameters:

```python
def name_age(name: str, age=18: int):
    print(f"{name} is {age} years old.")
```

## Return statements

All of our previous examples here have computed some value and passed the result to the print function. This might be useful for us, since it shows us the result in the terminal, but it isn't very useful for the program itself. Compare `sum()` to the `2 + 3` operator. `sum(2, 3)` will print out the value `5` to the terminal, where as `2+3` computes `5` "in place", it's a value that the python program can use. For example, if we do

```python
value_1 = 2 + 3
value_2 = sum(2, 3)
```

The first line performs addition `2 + 3`, which "returns" a value of `5`, which is then stored in `value_1`. The second line does the same addition, but the `sum()` function only prints the value, it doesn't evaluate to `5` the same way that `2+3` does. Therefore the "output" of `sum(2, 3)` is `None`, since it returns nothing to the program. Some functions do return a value though. For example, `math.pow(2, 3)` calculates `2` to the 3rd power, which is 8, and returns back `8`.

To make our function return values, we use the `return` keyword, followed by the value we'd like to return. This specifies the value or values that the function returns after completing its operation. Returning a value is optional. To change our `sum()` function so that it returns a value, we can add the return keyword, followed by the value we want to return, `result`.

```python
def add(a: int, b: int):
    result = a+b
    print(result)
    return sum
```

Notice that we didn't have to get rid of the print statement. Printing and returning are not "mutually exclusive", a function that prints can still return a value, and vice versa. Printing is useful for us, since it lets us see what the program is doing as it runs, but it doesn't provide the program with any additional features. `return` is what lets us use functions to perform calculations.

:::warning
Once a function executes a `return` statement, the function will stop running. Any code written in the function body that can only be reached after a `return` statement will never be executed, because the function will stop on the return. This is sometimes referred to as "dead code", line `print('Dead code :(')` in the following example.
:::

```python
def dead_code_example():
    return 3
    print('Dead code :(') # this code will never execute
```

### Return annotations

Similar to type annotations for parameters, we can annotate what type we expect a function to return. This is done by adding `->` after the parameters in our function header, followed by a type. This is known as function annotation. Function annotations are optional, but they can be helpful for providing clarity and documentation for the code. For example:

```python
def sum(a: int, b: int) -> int:
    sum=a+b
    return sum
```

This defined intuitively, so that reading across the function header, we have "we're defining a function called `sum`, which takes in two `int` values, `a` and `b`, and returns an `int`. This way, we don't have to read the whole function body to figure out what the function's going to return

## Function examples

Write a function to print “Hello World”:

```python
def hello_world():
    print(“hello world”)
```

Write a function to print the user’s name:

```python
def name(user_name):
    print(user_name)
```

Write a function to add 1 to the given number and print the result:

```python
def add_one(n):
    increased_n=n+1
    print(increased_n)
```

Write a function to calculate the sum of two numbers:

```python
def add_numbers(a, b):
    sum=a+b
    return sum
```

Now let's look at a more complex example and try to implement the complete code:

Write a program to prompt the user to enter their first name, last name, and age. Then, define a function to print this information

```python
def print_info(first_name, last_name, age):
    print(f"First Name: {first_name}\nLast Name: {last_name}\nAge: {age}")

first_name = input("Enter your first name: ")
last_name = input("Enter your last name: ")
age = input("Enter your age: ")

print_user_info(first_name, last_name, age)
```

Write a program that takes two numbers as input from the user and uses a function to calculate their addition, subtraction, multiplication, and modulus, and then returns these values. Finally, print these values.

```python
def operations(num1, num2):
    add = num1 + num2
    sub = num1 - num2
    mul = num1 * num2
    mod = num1 % num2
    return (add, sub, mul, mod)

num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))

addition, subtraction, multiplication, modulus = operations(num1, num2)

print(f"The sum of {num1} and {num2} is {addition}.")
print(f"The difference of {num1} and {num2} is {subtraction}.")
print(f"The product of {num1} and {num2} is {multiplication}.")
print(f"The modulus of {num1} and {num2} is {modulus}.")
```

Write a program that takes three numbers as input, finds and returns the biggest number among them, and then prints the biggest number

```python
def find_max(a, b, c):
    max_num = a
    if b > max_num:
        max_num = b
    if c > max_num:
        max_num = c

    return max_num


num1 = input("Enter the first number: ")
num2 = input("Enter the second number: ")
num3 = input("Enter the third number: ")

max_num = find_max(num1, num2, num3)

print("The maximum number is:", max_num)
```
