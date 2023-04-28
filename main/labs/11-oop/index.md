# Lab 11: Object Oriented Programming

## Overview

This week's lab focuses on object oriented programming, primarily on

- familiarizing yourself with the syntax and organization of classes
- getting comfortable with creating objects or instances of a class
- understanding the concepts of methods
- using methods to manipulate properties of a class

Refer to lecture 18 for examples of Python objects and methods.

## How big is this lab?

The lab contains 5 questions. If you have questions about the expected level of detail for any of the questions, please ask your lab staff.

## Assignment

### 1. Create an instance of a class (1 point)

This question is just a refresher on class and object syntax. Consider the following `Student` class:

```py live_py title=Student_starter
class Student:
    def __init__(self, name, courses):
        self.name = name
        self.courses = courses
```

Write one line of Python code which initializes a new student object with its `name` property set to "Ben Burns" and its `courses` property set to `{"CICS 110", "MATH 131"}`.

As a reminder, the `__init__()` method is called the *Constructor*m it is the Python method that runs every time we want to make a new instance of the `Student` class. You should not be calling `__init__()` directly, refer back to the slides if needed for examples.

### 2. Course Enrollment (1 point)

Now that we have our `Student` class set up, we want to allow our students to enroll in new courses. Here, we're going to add a method to the `Student` class to help our students enroll in a single new course.

Write a new method for a `Student` class named `enroll`, which takes in a string `new_course` and adds it to the `Student`'s `course` property. For example, if we run the following code

```py live_py title=Student_enroll
bburns = Student("Ben Burns", {"CICS 110"})
bburns.enroll("MATH 131")
```

the `name` property of `bburns` should be set to `"Ben Burns"`, and the value of the `courses` property should be `{"CICS 110", "MATH 131"}`.

### 3. Course Adjustment (1 point)

Similarly, we also would like to allow our students to drop courses. The goal is to add another method to the `Student` class so our students can drop a course.

Write a new method for a `Student` class named `drop`, which takes in a string `course` and attempts to remove it from the `Student`'s `course` property. For example, if we run the following code

```py live_py title=Student_drop
bburns = Student("Ben Burns", {"CICS 110", "MATH 131"})
bburns.drop("CICS 110")
```

the value of the `courses` property should now become `{"MATH 131"}`

Hint: Use `.discard()` for removing an item from a set. This ensures no exception will occur if a non-existent item is removed from a set.

### 4. Discussion (1 point)

In questions 2 and 3, you created two different methods within the `Student` class. Now, consider you do not have any methods defined within the `Student` class. Instead, you only have a single function called `enroll_student(Student, new_course)` defined <ins>outside</ins> the `Student` class to perform the enrollment operation. Discuss with your peers why do you need methods? What are the advantages and disadvantages of having methods?

Hint: Review Lecture 18 slides 7-11 and section 12.1 in zyBooks.

### 5. (Challenge) Dictionaries vs. Classes (1 point)

I don't know about you, but I personally find objects to be very confusing, especially all this `self` and `__init__()` syntax. However, I am *really comfortable* with dictionaries, including how to define a dictionary, how to work with key-value pairs, and how to use dictionaries in functions.

To my surprise, classes and dictionaries are actually extremely similar. In fact, an object's properties and their values are actually stored (under the hood) as a dictionary! That being said, why might I want to use a dictionary instead of a class? Why I might want to use a class instead of a dictionary?

## Grading Scale

Below are how many points are required for each level on the 5-point scale.

### 1: Below Standards: 0 point

### 2: Approaching Standards: 2 points

### 3: Meeting Standards: 3 points

### 4: Exceeding Standards: 4 points
