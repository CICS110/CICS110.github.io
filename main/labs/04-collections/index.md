---
title: "Lab 04: Slicing"
---

# Lab 04: Slicing

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

This lab is centered around the sequence data type **lists**.
You will practice indexing and slicing lists through 9 short exercises. 

### Learning Objectives

1. Practice list indexing.
2. Practice list slicing to retrieve sublists.

### Estimated Size

9 functions:
* Each function is 2 lines of code and of the form:
```
def function_name(l):
  length = len(l)
  return l[...]  # replace "..."
```

## Preamble

A list is a sequence data type. Sequence data types are designed to store many pieces of data. In particular, lists can store multiple values of the same or various data types in one variable. 

For instance:
```
random_list = ["cats", 24, "pizza", 8.1, False]
```

`random_list` has 5 values: 2 strings, 1 integer, 1 float, and 1 boolean. We can get the length of `random_list` by calling the `len()` method:
```
len(random_list)  # 5
```

We can get specific values from the list by **indexing**. To index, square brackets are placed after the list name with an index number between the opening and closing brackets. The leftmost value of a list is at index 0. The index values then increment by 1 from left to right.

```
random_list[0]  # "cats"
random_list[1]  # 24
random_list[2]  # "pizza"
random_list[3]  # 8.1
random_list[4]  # False
```

If you try to reference an index that does not exist (i.e., a value greater than or equal to the length of the list), then an **IndexError** will occur. 

For instance, the below will cause an IndexError:
```
random_list[5]  # IndexError
```

Note that negative values are NOT invalid! In fact, it can be very useful to use negative indexing. For instance, -1 refers to the last index:
```
random_list[-1]  # False
```

If you want to get a sublist of the original list (i.e., several values), then you can use **slicing**. Similar to indexing, slicing uses square brackets. However, rather than one index value, you will place multiple index values between the brackets, each divided by a colon.

For instance, the below will slice from index 1 up to (but not including) index 3:
```
random_list[1:3]  # [24, "pizza"]
```

If you don't specify a second value, then python will assume you mean all of the remaining values:
```
random_list[1:]  # [24, "pizza", 8.1, False]
```

Likewise, if you don't specify a first value, then python will assume you mean all values until (but not including) the second value:
```
random_list[:3]  # ["cats", 24, "pizza"]
```

3's a crowd ... well not when it comes to slicing! You can specify a third value that is the "step" value. To demonstrate, let's expand `random_list` to have a length of 8:
```
random_list = ["cats", 24, "pizza", 8.1, False, True, "Taco", 7]
random_list[1:6:2]  # [24, 8.1, True]
```

Starting at index 1 and going to (but not including) index 6, the sublist will contain items in increments of step 2. 24 is in index 1 so it's added to the sublist. Then 2 indices down is 8.1, which is added to the sublist. Then 2 indices down is True, which is added to the sublist. And then we're at index 6 so no more values are added.

It is valid to have only start and step values (i.e., no stop value):

```
random_list[1::3]  # [24, False 7]
```

It is also valid to have a negative step value. A negative step value is useful for stepping backwards through the list, starting at the start index and moving towards the stop value.
```
random_list[6:1:-2]  # ["Taco", False "pizza"]
```

It's go time! As you go through the lab, **use the below print statements to test your functions**:
```
l = [0,1,2,3,4,5,6,7,8,9]
print(get_first(l))                           # 0
print(get_last(l))                            # 9
print(get_all_but_first_and_last(l))          # [1,2,3,4,5,6,7,8]
print(get_all_but_first(l))                   # [1,2,3,4,5,6,7,8,9]
print(get_all_but_last(l))                    # [0,1,2,3,4,5,6,7,8]
print(get_indices_1_4_7(l))                   # [1,4,7]
print(get_odd_indices(l))                     # [1,3,5,7,9]
print(get_even_indices(l))                    # [0,2,4,6,8]
print(get_all_but_first_and_last_reversed(l)) # [8,7,6,5,4,3,2,1]
```

## Assignment

### **0. Set up file named `slicing.py`**

You know the drill at this point. This lab is in a file named `slicing.py`

### **1. Implement `get_first()` (1 point)**

Write a function named `get_first()` that takes in a list and returns the first value in the list.

For example, if the list is `["apples", "bananas", "cherries"]`, then the output should be `apples`.

<details>
<summary><b>Hint</b></summary>

Indexing starts at 0, not 1.

</details>

### **2. Implement `get_last()` (1 point)**

Write a function named `get_last()` that takes in a list and returns the last value in the list.

For example, if the list is `["apples", "bananas", "cherries"]`, then the output should be `cherries`. If the list is `["apples", "bananas", "cherries", "dates"]`, then the output should be `dates`.

<details>
<summary><b>Hint</b></summary>

Lists can vary in size so you don't want to hardcode an index value (e.g., don't do something like this: `list[4]`). Rather, you should allow the function to be flexible by having it calculate the last index. You can do this by getting the length of the list using `len()`. But be careful of an `IndexError: list index out of range` error. If indexing begins at 0, what would the last index of a list be equal to?

</details>

### **3. Implement `get_all_but_first_and_last()`**

Write a function named `get_all_but_first_and_last()` that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the first and last values.

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant"]`, then the output should be `["bananas", "cherries", "dates"]`.

<details>
<summary><b>Hint</b></summary>

Slicing time! When slicing, you need to specify a range of indices. Remember that the second index (the stop index) is NOT included in the range.

</details>

### **4. Implement `get_all_but_first()` (1 point)**

Write a function named `get_all_but_first()` that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the first value.

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant"]`, then the output should be `["bananas", "cherries", "dates", "eggplant"]`.

### **5. Implement `get_all_but_last()` (1 point)**

Write a function named `get_all_but_last()` that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the last value.

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant"]`, then the output should be `["apples", "bananas", "cherries", "dates"]`.

### **6. Implement `get_indices_1_4_7` (1 point)**

Write a function named `get_indices_1_4_7()` that takes in a list and returns a sublist with the values at indices 1, 4, and 7.

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant", "figs", "grapes", "honeydew", "icacina"]`, then the output should be `["bananas", "eggplant", "honeydew"]`.

You may assume that the list has at least 8 elements (so indices 1, 4, and 7 all have elements).

<details>
<summary><b>Hint</b></summary>

How are the numbers 1, 4, and 7 related? 1 + ? = 4. 4 + ? = 7. 

_"One small step for man, three small steps for get_indices_1_4_7()" - Neil Slicestrong._

</details>

### **7. Implement `get_odd_indices()` (1 point)**

Write a function named `get_odd_indices()` that takes in a list and returns a sublist with all values in the odd indices of the original list. 

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant"]`, then the output should be `["bananas", "dates"]`.

### **8. Implement `get_even_indices` (1 point)**

Write a function named `get_even_indices()` that takes in a list and returns a sublist with all values in the even indices of the original list. 

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant"]`, then the output should be `["apples", "cherries", "eggplant"]`.

### **9. Implement `get_all_but_first_and_last_reversed()` (1 point)**

Write a function named `get_all_but_first_and_last_reversed()` that takes in a list and returns a sublist that is identical to the original list EXCEPT it is missing the first and last values AND it is in reverse order.

For example, if the list is `["apples", "bananas", "cherries", "dates", "eggplant"]`, then the output should be `["dates", "cherries", "bananas"]`.

<details>
<summary><b>Hint</b></summary>

How can a negative step value be used here?

</details>

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0-2 points

### 2: Approaching Standards: 3-4 points

### 3: Meeting Standards: 5-7 points

### 4: Exceeding Standards: 8-9 points
