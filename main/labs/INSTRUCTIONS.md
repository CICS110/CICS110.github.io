# Lab 07: Lists, Sets, and Dictionaries Comprehension 

## Overview

This lab will ask you to describe in English to solve problems related to lists, sets, and/or dictionaries.

This lab's focus is on understanding the concepts of using, querying, and navigating through these data structures.

## Learning Objectives

1. hello
2. 

## How big is this lab?

4 questions:

- 

## Preamble

In lectures 6 and 11, you have seen different examples of lists, sets and, dictionaries. For instance, you have recently seen this `set` example:

```py live_py title=Set
fruits = {"apple", "banana", "orange"}
fruits.add("grape")
print(f"after : {fruits}")
```

In the above snippet, the `set` fruits consists of 3 unique elements. Using the `add()` method, you could add more elements into the existing `set' fruits. 

An example of using a `dictionary`:

```py live_py title=Dictionary
fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}
print(fruit_colours)
# Update with a dict
fruit_colours.update({"apple": "green", "orange": "orange"})
print(fruit_colours)
# Update with a list of key-value tuples
fruit_colours.update([("apple", "yellow"), ("grape", "purple")])
print(fruit_colours)
```

This time we see that using the `update()` method, you can not only modify the existing key-value pair - in this case "apple": "red" to "apple": "green", you can also add new key-value pair into the dictionary. Similarly, if you want to update multiple itmes together, you can pass a list of tuples to the `update()` method.

Below is an aggregrated example of using lists, sets, and dictionary together

```py live_py title=Combine
studentGrades = {
    'Jimmy': 95,
    'Will': 80,
    'Joe': 95,
    'Emily': 85
}

studentsHighestGrades = []

threshold = 80
setAboveThreshold = set()

highestGrade = max(studentGrades.values())
for aStudentName, aGrade in studentGrades.items():
    if aGrade == highestGrade:
        studentsHighestGrades.append(aStudentName)
    if aGrade > threshold:
        setAboveThreshold.add(aStudentName)

print(f"The top-scoring student(s) are: {', '.join(studentsHighestGrades)}")
print(f"{len(setAboveThreshold)} students scored above the threshold of {threshold}.")
```

The example created a dictionary of student name and grade as key-value pairs. The `max` method found the highest grade out of 75, 80, 95, and 85. For each pair, the `for` loop attempted to find which students have the highest grade. Once found, their names are added into a list. If a grade is also above a particular threshold, the student's name is also added into a set.


## Assignment

### 0. Example Problem

Let's say we have a pile of books on a table, and we want to see if a particular book is in the pile. How can I solve this problem iteratively? At the beginning of the lab, your course staff will walk through a solution to this problem. You do not have to submit anything.

### 1. Solving bookshelf problem

I have 13 books on my bookshelf. I follow the steps described above, and end up with a list has 13 strings. I conclude that I have books written by 13 different authors. Explain the problem with my conclusion. Is there a data structure I can use instead of a list that solves this problem? Name the data structure and briefly explain how it solves this problem.

### 2. Re-design a phone book/contact list problem

Let's say you are given this snippet of codes:

```py
myContactList = [
    ["Francie", "690-456-7890"],
    ["Amy", "614-597-8901"],
    ["Laurie", "508-678-9012"],
    ["Rach", "978-546-0123"],
    ["Will", "561-890-7812"]
]
```

Describe how can you re-design it such that when I use a key to query a particular contact, the phone number will return to me?

### 3. Describe how to store authors and their popularity

Given a list of authors, describe how you would iteratiely populate and return a dictionary with the author names as keys and the number of times as the   author appears in the list as the values. 

### 4. 

You are given 5 different Python `list`s. Assume all 5 `list`s have the same number of elements. In other words, they have the same length. The goal is to convert these 5 `list`s into a dictionary. Describe an iterative approach to do this conversion.

For example:

```py
keys = ["Francie", "Amy", "Laurie", "Rach", "Will"]
age = [15, 45, 5, 62, 105]
weight = [290, 105, 180, 96, 113]
k12Level = [6, 10, 4, 8, 8]
ssn = ["409278902", "109170005", "209278904", "311458766", "005233402"]

Hint: You can assume one of the lists contains all the `key`s.
