---
title: "HW 07: OOP"
---

# Object Oriented Programming

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

The aim of this homework assignment is to introduce Object Oriented Programming (OOP) and a bit of recursion. This assignment serves as a natural transition from CICS110 to CICS160 where you will study these fundamental programming constructs in much more detail. Remember that even though we implement code in Python in this class, the skills developed in this assignment will be relevant for any modern programming language.

Even though we work with OOP and Recursion in this assignment, be aware that you will be required to use the knowledge and skills you have acquired so far to succeed in this assignment. This includes defining functions, evaluating boolean expressions, evaluating arithmetic expressions, taking user input, working with f-strings, working with sequence types including lists and strings, branching, looping, working with modules, and handling exceptions. You may want to review them before you proceed.

### Learning Objectives

1. Practice modelling real world scenarios in code using OOP techniques.
2. Practice defining classes in Python.
3. Practice instantiating objects in Python.
4. Practice breaking a larger problem into simpler sub-problems.
5. Practice defining recursive methods.

### Estimated Size

This assignment consists of $5$ problems.

* Each problem specifies a class to implement. This means you get to implement your own user defined data-types!
* Each class would contain both some attributes as well some methods.
* Unlike the previous assignments where you were explicitly told what to implement, in this assignment we leave it up to you to decide the specifics of classes that you write. This means that while we describe a situation that your code should model, it is up to you to decide what features and methods you would need to implement.
* Many methods inside these classes have simple computations, similar to the previous assignments.
* Some methods require you to use recursion.

### Note

* You do not need to use any assert statements in this assignment.
* You do not need to use any files in this assignment.

### OOP Primer

Object Oriented Programming (OOP) relies on the concept of classes and objects. The underlying idea is to structure software into simple, reusable pieces of code (called classes) which serve as templates and are used to create individual instances (called objects). Modern programming languages such as JavaScript, C++, Java, and Python provide support for OOP.

Classes are essentially user-defined data types. In this sense, a class is an abstract blueprint. Classes contain fields for attributes and methods for behaviors. Objects are more specific and concrete entities which are instantiated from classes.

To understand the advantage of OOP, let's consider how a real world situation can be modelled using a class. Think about how we can represent cars in software. All cars have a model name, a colour, a year in which the car was manufactured, an engine size and so on. We can, therefore, write a class with these attributes common to all cars. Cars also have behaviors including acceleration and braking. These behaviors can be incorporated into our class using methods (functions!). As a consequence, this class provides a general blueprint to create different kinds of cars.

But we also know that there are so many different cars. How can we represent each car specifically? Since each car has all the features and behaviors specified in the class we defined above, for every new car we use, we could use an instance of this class. For example, we can have a 2019 Blue BMW or a 2017 Red Audi. In each instance we would reuse the code contained in the original object by instantiating an object of this class and specifying necessary details within the object. Therefore, while the class can represent any car, an instance of the class represents a specific car.

### Recursion Primer

A common algorithm design tactic is to divide a bigger problem into sub-problems of the same type as the original, solve those sub-problems, and combine the results. Recursion is used to solve problems by dividing it into smaller sub-problems.

At its core, recursion is the act of a function calling itself. A recursive function has two components: a base case (which ends recursion) and a recursive case (which resumes recursion). In Lab $10$, we worked with recursive functions. You may want to review it before you proceed.

## **0. Setup**

Make a folder on your computer and open it in VSCode.

You must create $5$ files in this folder. Make sure that you do not rename any of these files.

* `shapes.py`
* `frac.py`
* `sequences.py`
* `vending.py`
* `marbles.py`

Remember that for every file you need to have comments indicating the authors at the top. For example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necessary formatting details.

Some copying and pasting here will save you some time and sanity.

Note that these details are necessary for the auto-grader to recognize your solution.

## **1. Implement `shapes.py`**

In this problem, you will practice creating geometry-based classes, instantiating those classes (i.e., creating objects), and calling methods from those classes. You will create 7 classes: Shape, Triangle, IsoscelesTriangle, EquilateralTriangle, Quadrilateral, Rectangle, and Square. Note that:
* Triangle and Quadrilateral are both subclasses of Shape
* IsoscelesTriangle is a subclass of Triangle
* EquilateralTriangle is a subclass of IsoscelesTriangle
* Rectangle is a subclass of Quadrilateral
* Square is a subclass of Rectangle

If ClassB is a subclass of ClassA, then ClassB inherits all of the attributes and methods of ClassA. It is a common practice in OOP to create a subclass that inherits from a parent class in order to reuse code and add additional functionality.

### **1a. Implement the `Shape` class (1 point)**

`Shape` is a simple class. It has no attributes and no methods. We will simply use `Shape` to create subclasses `Triangle` and `Quadrilateral`. Create a class called `Shape` that has one line of code in it: `pass`.

### **1b. Implement the `Triangle` class (1 point)**

`Triangle` is a subclass of `Shape`. In order to show this relationship, we will add `Shape` enclosed in parentheses in the class signature:

```py
class Triangle(Shape):
```

`Triangle` should have a constructor that takes in three parameters, one for each side of a triangle (you can assume that the sides create a valid triangle). `Triangle` should also have two methods: `perimeter()` and `get_sides()`, neither of which take in a parameter (besides `self`). `perimeter()` should return the sum of all of the sides, while `get_sides()` should return a tuple of the sides. It is up to you to determine how you'd like to implement this class.

Example:
```py
tri = Triangle(2,3,4)
print(tri.get_sides())  # output (2,3,4)
print(tri.perimeter())  # output 9
```

### **1c. Implement the `IsoscelesTriangle` class (1 point)**

`IsoscelesTriangle` is a subclass of `Triangle`. Thus, `IsoscelesTriangle` will inherent all attributes and methods of `Triangle`. Since `IsoscelesTriangle` will have 2 sides that are of equal length, we really only need the constructor to take in two values: the doubled side and the other side (in that order). In this class, you need to write the constructor such that it takes in only two parameters. DO NOT rewrite the methods `perimeter()` and `get_sides()` in this class - these are already inherited from `Triangle`. That is, the only thing in this class should be a constructor.

Example:
```py
isotri = IsoscelesTriangle(2,5)
print(isotri.get_sides())  # output (2, 5, 5)
print(isotri.perimeter())  # output 12
```
*Hint: You can use Python's super() function to refer to the parent class explicitly. That is, super() in `IsoscelesTriangle` will refer to `Triangle`. You can use this to call `Triangle`'s `__init__()` method (e.g., `super().__init__()`).*


### **1d. Implement the `EquilateralTriangle` class (1 point)**

`EquilateralTriangle` is a subclass of `IsoscelesTriangle`. Thus, `IsoscelesTriangle` will inherent all attributes and methods of `Triangle`. Since `EquilateralTriangle` will have 3 sides of equal length, we really only need the constructor to take in one value. Write `EquilateralTriangle` such that the constructor only accepts one parameter.

Example:
```py
eqitri = EquilateralTriangle(4)
print(eqitri.get_sides())  # output (4, 4, 4)
print(eqitri.perimeter())  # output 12
```

### **1e. Implement the `Quadrilateral` class (1 point)**

`Quadrilateral` is a subclass of `Shape`. It should have a constructor that takes in four parameters, one for each side of a quadrilateral. `Quadrilateral` should also have two methods: `perimeter()` and `get_sides()`, neither of which take in a parameter (besides `self`). Similar to `Triangle`, `perimeter()` should return the sum of all of the sides, while `get_sides()` should return a tuple of the sides. It is up to you to determine how you'd like to implement this class.

Example:
```py
quad = Quadrilateral(2,3,4,5)
print(quad.get_sides())  # output (2,3,4,5)
print(quad.perimeter())  # output 14
```

### **1f. Implement the `Rectangle` class (1 point)**

`Rectangle` is a subclass of `Quadrilateral`. Thus, `Rectangle` will inherent all attributes and methods of `Quadrilateral`. Since `Rectangle` will have 2 pairs of sides of equal length, we really only need the constructor to take in two values: length and width. Similar to `IsoscelesTriangle`, write `Rectangle` such that the constructor only accepts two parameters.

You should also create one more function inside `Rectangle` that is not part of `Quadrilateral` and that function is `area`. `area` does not take in any parameters (besides `self`) and simply returns the area of the rectangle (calculated by length*width).

Example:
```py
rec = Rectangle(3,5)
print(rec.get_sides())  # output (3,5,3,5)
print(rec.perimeter())  # output 16
print(rec.area())       # output 15
```

### **1g. Implement the `Square` class (1 point)**

`Square` is a subclass of `Rectangle`. Thus, `Square` will inherent all attributes and methods of `Rectangle`. Since `Square` will have all sides of equal length, we really only need the constructor to take in one value. Write `Square` such that the constructor only accepts one parameter.

Example:
```py
square = Square(5)
print(square.get_sides())  # output (5,5,5,5)
print(square.perimeter())  # output 20
print(square.area())       # output 25
```

## **2. Implement `frac.py`**

In this part, we implement a Python class named `Frac` that defines a fraction object.
The `Frac` constructor takes three parameters:
`sign`, `num`, and `den`, representing the sign, numerator, and denominator of a fraction, respectively.
The class provides methods for arithmetic operations,
such as addition, subtraction, multiplication, and division, between two fractions.
The purpose of this class is to provide a way to handle fraction calculations in Python with a simplified and optimized approach.
As a quick reminder, defining features for a class involves implementing special methods,
also known as dunder methods.
These methods allow you to add specific functionality to your class by defining how it behaves in different scenarios.

### **2a. Constructor**

Similar to the previous examples, you will need to initialize the class attributes using a constructor.
Attributes represent the properties of the entity.
In this case, you need to write the constructor that takes in three parameters: `sign`, `num`, and `den`.
The `sign` parameter represents the sign of the fraction,
and `num` and `den` represent the numerator and denominator of the fraction respectively.

### **2b. Implementing the `get_sign_num_den()` method (1 point)**

Write a method called `get_sign_num_den()` for the `Frac` class that returns
a representation of a fraction in simplified form as a tuple of
the sign (`-1`, `0`, or `1`), numerator, and denominator respectively.

Examples:

```py
frac1 = Frac(1, 15, 20)
print(frac1.get_sign_num_den())  # prints (1, 3, 4) because 15/20 simplifies to 3/4

frac2 = Frac(-1, 3, 5)
print(frac2.get_sign_num_den())  # prints (-1, 3, 5) this represents -3/5

frac3 = Frac(0, 0, 1)
print(frac3.get_sign_num_den())  # prints (0, 0, 1) this represents 0
```

*Extra: We highly encourage you to implement the `__str__` method at this point.
For the purposes of presenting examples, from here on,
we will assume a `__str__` method that turns the fraction into a string with
a negative sign at the front if `sign` is negative, followed by `NUM / DEN`,
where `NUM` and `DEN` are the simplified forms of the numerator and denominator respectively.*

### **2c. Negation of a Fraction (1 point)**

Implement the `__neg__()` method in order to enable fraction negation.
This method should take in only `self` and return a new fraction object representing "`-self`".

Example:

```py
a = Frac(1,1,2)
print(-a)  #  print: - 1 / 2
```

### **2d. Addition of Two Fractions (1 point)**

Implement the `__add__()` method in order to enable fraction addition.
This method should take in `self` and `other`,
and return a new fraction object representing "`self + other`".

Example:

```py
a = Frac(1, 15, 20)
b = Frac(-1, 3, 7)
print(a + b)  #  print: 9 / 28
```

### **2e. Subtraction of Two Fractions (1 point)**

Implement the `__sub__()` method in order to enable fraction subtraction.
This method should take in `self` and `other`,
and return a new fraction object representing "`self - other`".

Example:

```py
a = Frac(1, 15, 20)
b = Frac(-1, 3, 7)
print(a - b)  #  print: 33 / 28
```

### **2f. Multiplication of Two Fractions (1 point)**

Implement the `__mul__()` method in order to enable fraction multiplication.
This method should take in `self` and `other`,
and return a new fraction object representing "`self * other`".

Example:

```py
a = Frac(1, 15, 20)
b = Frac(-1, 3, 7)
print(a * b)  #  print: - 9 / 28
```

### **2g. Division of Two Fractions (1 point)**

Implement the `__truediv__()` method in order to enable fraction division.
This method should take in `self` and `other`,
and return a new fraction object representing "`self / other`".

Example:

```py
a = Frac(1, 15, 20)
b = Frac(-1, 3, 7)
print(a / b)  #  print: - 7 / 4
```

## **3. Implement `sequences.py`**

Sequences are one of the most interesting topics in mathematics. Many sequences are recursive by their definition i.e. the next value depends on one or more previous values of the sequence.

In this problem, we will generate some interesting recursive sequences using a simple sequence generator class.

*Important: The first term of a sequence is actually the Oth term. So, for instance, if we have a list of Fibonacci numbers, say [0, 1, 1, 2, 3, 5, 8], then the 0 is the 0th Fibonacci number, 1 is the 1st, 2 is the 2nd and so on.*


### **3a. Implement the `Sequence` class**

In this problem, you will create a class that generates recursive sequences using recursive functions. Your class should have two components:

* An attribute that stores a function (Yes, an attribute can be a function!)
* A method `generate_sequence` that takes as argument an integer $n$ and returns a list obtained by calling the function on numbers $0$, $1$, $\dots$ $n$.

This class is a template for generating different sequences. In the following problems, we will specify functions that will be used in instances of this class to generate specific sequences.

### **3b. Factorial (1 point)**

The factorial of a number $n$ is the product of all positive integers less than or equal to $n$. Thus, factorial of seven is written $7!$ and is equal to $1 × 2 × 3 × 4 × 5 × 6 × 7$.

As a convention, the factorial of $0$ is defined as equal to $1$.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the factorial of $n$.

It should have the following signature:

```py
def factorial(n)
```

Example:

```py
print(factorial(5)) #This should print 120
```

Use this function to generate the Factorial sequence using the `Sequence` class.

Example:

```py
factorial_sequence = Sequence(factorial)
print(factorial_sequence.generate_sequence(10))
```

Output:

```
[1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]
```

### **3c. Fibonacci numbers (1 point)**

The Fibonacci sequence is one of the most important sequences in mathematics. It is the sequence $0$, $1$, $1$, $2$, $3$, $5$, $8$, $13$, $\dots$. Can you see a trend here? Starting with $0$ and $1$, each successive number is the sum of the previous two numbers. In mathematical notation, we denote this as:

$$F_n = F_{n-1} + F_{n-2}$$

where $F_n$ is the $n$-th Fibonacci number and $n \geq 2$.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the $n$-th Fibonacci number.

It should have the following signature:

```py
def fibonacci(n)
```

Example:

```py
print(fibonacci(5)) #This should print 5
```

Use this function to generate the Fibonacci sequence using the `Sequence` class.

Example:

```py
fibonacci_sequence = Sequence(fibonacci)
print(fibonacci_sequence.generate_sequence(10))
```

Output:

```
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
```

### **3d. Tribonacci numbers (1 point)**

The Tribonacci sequence is a generalization of the Fibonacci sequence. It is the sequence $0$, $1$, $1$, $2$, $4$, $7$, $13$, $24$, $\dots$. Can you see a trend here? Starting with $0$, $1$, and $1$ each successive number is the sum of the previous three numbers. In mathematical notation, we denote this as:

$$T_n = T_{n-1} + T_{n-2} + T_{n-3}$$

where $T_n$ is the $n$-th Tribonacci number and $n \geq 3$.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the $n$-th Tribonacci number.

It should have the following signature:

```py
def tribonacci(n)
```

Example:

```py
print(tribonacci(5)) #This should print 4
```

Use this function to generate the Tribonacci sequence using the `Sequence` class.

Example:

```py
tribonacci_sequence = Sequence(tribonacci)
print(tribonacci_sequence.generate_sequence(10))
```

Output:

```
[0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81]
```

### **3e. Lucas numbers (1 point)**

The Lucas sequence is the sequence $2$, $1$, $3$, $4$, $7$, $11$, $18$, $29$, $\dots$. Can you see a trend here? Starting with $2$ and $1$, each successive number is the sum of the previous two numbers. In this sense, Lucas numbers follow the same rule as Fibonacci numbers but start at different integers.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the $n$-th Lucas number.

It should have the following signature:

```py
def lucas(n)
```

Example:

```py
print(lucas(5)) #This should print 11
```

Use this function to generate the Lucas sequence using the `Sequence` class.

Example:

```py
lucas_sequence = Sequence(lucas)
print(lucas_sequence.generate_sequence(10))
```

Output:

```
[2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123]
```

### **3f. Padovan numbers (1 point)**

The Padovan sequence is the sequence $1$, $1$, $1$, $2$, $2$, $3$, $4$, $5$, $7$, $\dots$. Can you see a trend here? Starting with $1$, $1$, and $1$, each successive number is the sum of the two numbers before the previous number. In mathematical notation, we denote this as:

$$P_n = P_{n-2} + P_{n-3}$$

where $P_n$ is the $n$-th Padovan number and $n \geq 2$.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the $n$-th Padovan number.

It should have the following signature:

```py
def padovan(n)
```

Example:

```py
print(padovan(5)) #This should print 3
```

Use this function to generate the Padovan sequence using the `Sequence` class.

Example:

```py
padovan_sequence = Sequence(padovan)
print(padovan_sequence.generate_sequence(10))
```

Output:

```
[1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12]
```

### **3g. Pell numbers (1 point)**

The Pell numbers are the sequence $0$, $1$, $2$, $5$, $12$, $29$, $70$, $169$, $408$, $\dots$. Can you see a trend here? Starting with $0$ and $1$, each successive number is the sum of the two times the previous number and the second previous number. In mathematical notation, we denote this as:

$$P_n = 2 (P_{n-1}) + P_{n-2}$$

where $P_n$ is the $n$-th Pell number and $n \geq 2$.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the $n$-th Pell number.

It should have the following signature:

```py
def pell(n)
```

Example:

```py
print(pell(5)) #This should print 29
```

Use this function to generate the Pell sequence using the `Sequence` class.

Example:

```py
pell_sequence = Sequence(pell)
print(pell_sequence.generate_sequence(10))
```

Output:

```
[0, 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378]
```

### **3h. Jacobsthal numbers (1 point)**

The Jacobsthal numbers is the sequence $0$, $1$, $1$, $3$, $5$, $11$, $21$, $43$, $85$, $\dots$. Can you see a trend here? They are very similar to the Pell numbers. Starting with $0$ and $1$, each successive number is the sum of the previous number and two times the second previous number. In mathematical notation, we denote this as:

$$J_n = J_{n-1} + 2(J_{n-2})$$

where $J_n$ is the $n$-th Jacobsthal number and $n \geq 2$.

Your task is to write a recursive function that takes as argument an integer $n$ and returns the $n$-th Pell number.

It should have the following signature:

```py
def jacobsthal(n)
```

Example:

```py
print(jacobsthal(5)) #This should print 11
```

Use this function to generate the Jacobsthal sequence using the `Sequence` class.

Example:

```py
jacobsthal_sequence = Sequence(jacobsthal)
print(jacobsthal_sequence.generate_sequence(10))
```

Output:

```
[0, 1, 1, 3, 5, 11, 21, 43, 85, 171, 341]
```

## **4. Implement `vending.py` (12 points total)**

Have you ever purchased some snacks from a Vending Machine? Think about the different steps involved in this process. You start by viewing the selection of snacks and deciding what you would like to purchase. Then, you make a selection, load money into the machine and purchase the item you desire. At this point, you may either request change or you may continue purchasing more items until you have no balance left.

In this problem, you will use create a class `VendingMachine` that represents a Vending Machine. We will provide a simple Application Programming Interface (API) to describe the requirements of this class, but you are free to decide attributes within the class.

### **4a. Implement the constructor**

Remember that you must initialize the attributes of the class using a constructor. Attributes represent properties of the entity. In this case, what are the different properties you might want to maintain for a Vending Machine? You may take inspiration from the description above. Feel free to add whatever attributes you think are appropriate. If you realize later on that you may need a new attribute, feel free to add it later!

### **4b. Display list of snacks and their quantities**

A vending machine should be able to display the snacks, their cost and quantities to the customer. Your class should have a method `list_items` that prints (not returns) a list of snacks with their respective quantities in the following format sorted alphabetically based on the item name:

```
ITEM ($COST): NUM available
```

*Hint: Python's `sorted()` function can be used to get a sorted list of keys from a dictionary. For example:*

```py
vowel_counts = {'u':0, 'a':3, 'i':1, 'e':4, 'o':2}
sorted_vowels = sorted(vowel_counts)
print(sorted_vowels)  # prints ['a', 'e', 'i', 'o', 'u']
```

### **4c. Add items to the vending machine**

At some point, the vending machine may run out of snacks. One might want to restock the vending machine or add a new snack. Your class should implement a method `add_item` that takes item name, price and quantity as arguments and adds the item to the vending machine. When successfully added, it should print the following:

```
QUANTITY ITEM_NAME(s) added to inventory
```

### **4d. Insert money into the vending machine**

In order to make a purchase, the user must be able to add money to their balance in the vending machine. Your class should implement a method `insert_money` that takes an amount as argument, checks if it is either \$1, \$2 or \$3 and if so adds the amount to their customer's balance. The balance should be rounded to $2$ decimal places. When successfully added, it should print the following:

```
Balance: BALANCE
```

If not successful, it should display the following message:

```
Invalid amount
```

### **4e. Purchase a snack from the vending machine**

Perhaps the most important aspect of a vending machine is to be able to purchase snacks. Your class should implement a method `purchase` that takes an item as argument. If the item is not in the vending machine, it should print the following informative message:

```
Invalid item
```

If the item is in the vending machine, it should check if it is in stock and the customer has sufficient balance.

If the item is out of stock, it should print the following informative message:

```
Sorry ITEM is out of stock
```

If the customer does not have enough balance, it should print the following informative message:

```
Insufficient balance. Price of ITEM is PRICE
```

Otherwise, the purchase can be made successfully. The quantity of the item should be decreased by $1$ in the vending machine and the amount of the item should be deducted from the customer's balance (rounded to $2$ decimal places). Lastly, the total sale of the vending machine should be incremented by the amount of the item sold (rounded to $2$ decimal places).


### **4f. Give back the customer change**

After a purchase is complete, the machine may need to return to the user change. Your class should include a method `display_change` that prints (not returns) the change that should be given back to the user. It should then set the user's balance to $0$ since this amount has been given back to the user.

```
Change: CHANGE
```

If the user does not have any change, it should print the following informative message:

```
No change
```

### **4g. Get the price of an item in the vending machine**

The user may want to check the price of an item before purchasing. Your class should include a method `get_item_price` that takes as argument an item name and returns (not prints) the price of that item.

If the item does not exist in the vending machine, it should print the following informative message:

```
Invalid item
```

### **4h. Empty the vending machine**

The owner may want to empty the vending machine by removing all items from it for cleaning or for other purposes. Your class should include a method `empty_inventory` that removes all items from the vending machine. It should print the following informative message:

```
Inventory cleared
```

### **4i. Get total sale of the vending machine**

The owner may want to see the total sales of the vending machine. Your class should include a method `get_total_sales` that returns (not prints) the total sales of the vending machine.

### **4j. Get the quantity of an item in the vending machine**

The owner may want to check the quantity of an item to decide if it needs to be restocked. Your class should include a method `get_item_quantity` that takes as argument an item name and returns (not prints) the quantity of that item.

If the item does not exist in the vending machine, it should print the following informative message:

```
Invalid item
```

### **4k. Remove an item from the vending machine**

The owner may want to remove an item (from the possible selection) if they decide that a product is not selling well. Your class should include a method `remove_item` that takes as argument an item and removes all of that item. If successful, it should print the following message:

```
ITEM removed from inventory
```

If the item does not exist in the vending machine, it should print the following informative message:

```
Invalid item
```

### **Test your Code**

Your code should work as the example below.

```py
# Create a new vending machine
vending_machine = VendingMachine()

# Add some items to the inventory
vending_machine.add_item('Soda', 1.50, 5)
vending_machine.add_item('Chips', 0.75, 10)
vending_machine.add_item('Candy', 0.50, 15)

# Show the available items
vending_machine.list_items()

# Insert some coins
vending_machine.insert_money(1.00)
vending_machine.insert_money(1.00)

# Purchase an item
vending_machine.purchase('Soda')

# Get the price of an item
print(vending_machine.get_item_price('Chips'))

# Purchase another item
vending_machine.purchase('Chips')

# Get the total sales
print(vending_machine.get_total_sales())

# Remove an item
vending_machine.remove_item('Candy')

# Show the available items again
vending_machine.list_items()

# Get the quantity of an item
print(vending_machine.get_item_quantity('Gum'))

# Empty the inventory
vending_machine.empty_inventory()

# Show the available items again
vending_machine.list_items()
```

```
5 Soda(s) added to inventory
10 Chips(s) added to inventory
15 Candy(s) added to inventory
Available items:
Candy ($0.5): 15 available
Chips ($0.75): 10 available
Soda ($1.5): 5 available
Balance: 1.0
Balance: 2.0
Purchased Soda
Balance: 0.5
0.75
Insufficient balance. Price of Chips is 0.75
1.5
Candy removed from inventory
Available items:
Chips ($0.75): 10 available
Soda ($1.5): 4 available
Invalid item
None
Inventory cleared
No items in the vending machine
```

## **5. Implement `marbles.py`**

Do people still play with marbles? Imagine you found a bag of marbles in your parents' attic that has been collecting dust for years. You shake the dust off, close your eyes, and pick out a marble. What color marble did you pull out?

In this problem, you will create the class `MarbleBag` and functions for taking out a marble, adding a marble, and calculating the permutations of marbles.

### **5a. Implement the `MarbleBag` constructor**

To get started, create the `MarbleBag` class with one constructor that takes in three parameters (besides `self`): number of red marbles, number of green marbles, and number of blue marbles. These should be stored collectively in some data structure such that you can reference them again.

*Hint/Extra: So far, you've learned about `__init__`, which is the default constructor. Another default method is `__str__` which is called when you print an object. You can override the default `__str__` by adding function `__str__(self)` in your class and returning a string that you want printed. This is not necessary for the assignment, but will be very helpful in verifying the properties of an object (i.e., in verifying the contents of the marble bag). For example, you could have `__str__(self)` return an f-string of the counts of red, green, and blue marbles like the example below:*

```py
bag = MarbleBag(1, 2, 3)
print(bag)  # may print: The marble bag has 1 red, 2 green, and 3 blue marbles.
```

### **5b. Implement the `get_contents` method (1 point)**

We need a function that let's us easily see all the contents in the marble bag. Create a function called `get_contents` that takes in no parameters (besides self, of course) and returns a dictionary with marble color counts.

Example:

```py
bag = MarbleBag(1, 2, 3)
print(bag.get_contents())  # prints {'red': 1, 'green': 2, 'blue': 3}
```

### **5c. Implement the `take_marble()` method (1 point)**

Taking a marble out of the marble bag is random. For this method, you will need to import the random module in order to randomly select a marble to take out of the bag (i.e., randomly select red, green, or blue marble). When a marble is removed from the bag, the count of marbles for that particular color must be decremented by 1. The return for this method must be the marble taken from the bag ("red", "green", or "blue"). If there are no marbles to be removed from the bag, return `None`. Note that, since selection for taking out is random, this function does not require a parameter (besides `self`).

### **5d. Implement the `add_marbles()` method (1 point)**

Adding marbles to the marble bags involves adding red, green, and/or blue marbles all at the same time. Thus, this function must take in three parameters: number of red marbles to add, number of green marbles to add, and number of blue marbles to add. The function should add those marbles to the bag.

### **5e. Implement the `all_permutations()` method (3 points)**

A permutation is a way in which a set of things can be ordered. This function requires you to find all permutations of the marbles in the bag. For example:

If the marble bag has 1 red, 1 green, and 1 blue, then there are 6 permutations (each permutation is represented as a tuple):
* ('red', 'blue', 'green')
* ('red', 'green', 'blue')
* ('green', 'blue', 'red')
* ('green', 'red', 'blue')
* ('blue', 'red', 'green')
* ('blue', 'green', 'red')

If the marble bag has 2 red, 1 green, and 1 blue, then there are 12 permutations. If the marble bag has 3 red, 2 green, and 1 blue, then there are 60 permutations. As you can see, the larger the inputs the larger the number of permutations. Thus, this example can be solved **recursively** by solving smaller problems in order to solve the larger problem. We highly suggest you create a helper function (you can call it `permutations_helper()`) for this function. In `all_permutations()`, you can call `permutations_helper()`. Inside `permutations_helper()` is where the recursive calls happen to `permutations_helper()`. It is common practice to use a helper function when doing recursion. The function should return a set of permutations (a set is helpful here as we have no use for duplicate permutations), where each permutation is a tuple.

Example:

```py
bag = MarbleBag(1, 2, 1)
print(bag.all_permutations())
```

Output:

```
{('blue', 'red', 'green', 'green'), ('red', 'blue', 'green', 'green'), ('green', 'blue', 'red', 'green'), ('green', 'green', 'red', 'blue'), ('green', 'red', 'green', 'blue'), ('green', 'red', 'blue', 'green'), ('green', 'green', 'blue', 'red'), ('red', 'green', 'green', 'blue'), ('blue', 'green', 'green', 'red'), ('red', 'green', 'blue', 'green'), ('green', 'blue', 'green', 'red'), ('blue', 'green', 'red', 'green')}
```

*Hint: First, think about the base case. When do we want to stop permutating? ... That is, when are we unable to continue permutating? ... What are the counts of each marble color when we can no longer permutate? Next, think about the recursive cases. We want to recursively shrink the problem into smaller problems. Let's say we have 6 marbles (1 red, 2 green, 3 blue). There's 60 permutations total. But, what if we remove one of those marbles, say red? We now have 5 marbles (0 red, 2 green, 3 blue), which only has 10 permutations! What if we remove a green instead of a red? We have 5 marbles (1 red, 1 green, 3 blue), which only has 20 permutations. What if we remove a blue instead of green? We would have 5 marbles (1 red, 2 green, 2 blue), which only has 30 permutations. 10+20+30=60! By removing one marble from each color and combining those results, we were able to find all permutations for the original 6 marbles.*

## Grading Scale

Note that points may be obtained from anywhere,
you do not need to try to complete work in any particular order.

There is also an abundance of possible points to obtain,
giving you options in what you want to work on
in order to get your total points within the desired range.

### 1: Below Standards: 0-5 points

### 2: Approaching Standards: 6-11 points

### 3: Meeting Standards: 12-17 points

### 4: Exceeding Standards: 18+ points
