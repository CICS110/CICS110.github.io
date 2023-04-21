# Lab 08: Modules and Exceptions


## Overview
Modules are an essential part of the Python programming language as they provide a way to organize and reuse code. A module is a file containing Python code that defines functions, classes, variables, and other objects that can be reused in different programs. 

Here are some of the reasons why modules are important in Python:

<ol type="a">
  <li> Code Reusability: Modules allow developers to write code once and use it multiple times in different programs. This saves time and effort and makes the development process more efficient. </li>
  <li> Organization: Modules allow developers to organize their code into logical units, making it easier to read and understand. </li>
  <li> Modularity: Modules allow developers to break down complex programs into smaller, more manageable pieces, making it easier to debug and test. </li>
  <li> Extensibility: Python comes with a large number of built-in modules and libraries that provide a wide range of functionalities. Additionally, third-party modules can be easily installed and used to extend the capabilities of Python. </li>
</ol>

On the other hand, exceptions are an important part of programming in general because they allow developers to handle unexpected and exceptional situations that may occur during program execution. Exceptions provide a way for programs to recover from errors, continue execution, and provide meaningful feedback to the user about the cause of the error.


## Learning Objectives
Upon completion of this lab, you will be able to:

1. Read documentation 
2. Implement exception handling
3. Understand the try catch finally statement
4. Describe and create modules in python
5. Work with the built-in Python modules


## How big is this lab?
There are $3$ questions:

- One question is to discussion with your peers.
- Second question is to use exceptions as safe guard.
- Third question is to create your own module.


## Preamble
Errors happen and things go wrong. In lecture $13$, different types of errors and exceptions were covered.

For example, doing the followings might lead to runtime errors:

```py live_py title=Runtime_error
user_str = input("Please enter a number:")
user_num = float(user_str)
```

The reason is that if the user inputs something other than a number such as `abc`, it will not make sense to convert `abc` to a decimal number. The result will lead to a crash.

One way to keep this kind of runtime error from happening is to use safeguard such as `try`, `except`, and `else`. For example:

```py live_py title=Try_except_else
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

The above block of codes will keep prompting the user as long as the input is not a number - and print out an error from the `except` clause. Once an acceptable number is entered and converted into a decimal. The `else` clause will take over and break out of the `while` loop.

Now, let's do a refresh on modules. Also covered in lecture $13$, a module "...is a collection of code you can use." One module you might already be familiar with is `math`. Using `math`, you can do `math.log` etc.

For example:

```py live_py title=Math_module
import math
x = int(input('Enter a number: '))
print(f'Log is {math.log(x)}')
print(f'Square root is {math.sqrt(x)}')
print(f'Pi is {math.pi}')
```

You can also create your own module. For example, let's create a new file called `mymath.py` as the followings:

```py title="My math module"
def add(a, b):
    return a + b

def sub(a, b):
    return a - b

def exp(a, b):
    return a ** b

def div(a, b):
    if b == 0:
        raise ValueError("Division by zero is not possible.")

    return a / b
```

Let's also create a second file called `main.py` as the followings:

```py title="Use my math module"
import mymath

a = 100
b = 0

print("Addition from mymath: ", mymath.add(a, b))
print("Subtraction from mymath: ", mymath.sub(a, b))
print("Exponent from mymath: ", mymath.exp(a, b))
```

What the above showed is that in `main.py`, I pull in the codes from `mymath.py` using the `import`. From there, I could call any of the methods defined in `mymath.py` such as `.add()` or `.subtract()` etc. So using modules, you can organize your codes nicely! Do note that in order for `main.py` to pull in your codes from `mymath.py`, both files need to be located in the same location or directory for them to find each other.


## Assignment
Let's say you are writing a program that reads data from a file and performs some calculations. One of the calculations involves dividing two numbers read from the file. You don't know what type of data the file may contain characters, so it's possible that you accidently read in two letters and attempt to divide them, leading to a `ValueError` exception. Additionally, it's possible that we successfully read in two numbers, but the denominator we read is a zero, so that when we divide we get a `ZeroDivisionError`. In this lab, you will write an algorithm that handles these exceptions to prevent your program from crashing. 


### 1. Documentation (2 points)

#### 1.1 Use the following documentation
https://docs.python.org/3/tutorial/errors.html 

#### 1.2 Discuss with your team how to use the try-except block to capture the ZeroDivisionError and ValueError exceptions

#### 1.3 Provide two code examples that capture ZeroDivisionError and ValueError exceptions


### 2. Exceptions (2 points)
Create a Python script called division.py and write a function called divide(a, b) that takes two arguments, a and b. Use a try block to perform the division a / b. If b is zero, catch the ZeroDivisionError and print "Cannot divide by zero". If a or b is not a number, catch the ValueError and print "Both inputs must be numbers". Return the result if the division is successful. Test the function with different arguments to ensure it raises the correct exceptions.

#### 2.1 Work with your team and write an algorithm to solve the problem. Decompose the problem in at least six steps

#### 2.2 Implement your algorithm in Python


### 3. Modules (2 points)
Here, the task is to create a Python script called main.py that contains a function called calculate_sum(numbers). This function takes a list of numbers as an argument and returns the sum of the numbers. The division module created in Part $2$ should be imported.

In the calculate_sum function, a for loop iterates over the numbers in the list. For each number, the divide function from the division module is called. If an exception is raised, an error message is printed to the console and the next number in the list is processed. If the division is successful, the result is added to a running total.

After all the numbers have been processed, the calculate_sum function returns the running total. Testing should be done with different lists of numbers to ensure it handles exceptions properly.

#### 3.1 Work with your team and write an algorithm to solve the problem. Decompose the problem in at least nine steps

#### 3.2 Implement your algorithm in Python


## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0 point

### 2: Approaching Standards: 2 points

### 3: Meeting Standards: 3 points

### 4: Exceeding Standards: 4 points
