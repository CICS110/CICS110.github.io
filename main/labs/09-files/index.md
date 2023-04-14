# Lab 09: Files

## Overview

This week's lab focuses on files, primarily on

- file opening and closing syntax
- the three file modes
- some examples of utilizing files to solve problems involving larger collections of data.

This lab is meant to be an introduction to files, and act as practice for the concepts and skills necessary to complete homework 6. Refer to lecture 15 for example operations (i.e., open, read, write, append) on files.

## How big is this lab?

There are 4 questions, with five parts in total.

- Questions 1 and 4.1 are purely coding questions
- Questions 2, 3, and 4.2 require describing an algorithm or explaining a syntax fix in words.

If you have questions about the expected level of detail on questions asking for a description or explanation, please ask the staff in your lab.

## Assignment

### 1. Reading Syntax (1 point)

This question is just a refresher on file access syntax. Write a three line program that opens the file `instructions.txt`, reads out its contents, stores them in a variable named `text`, and closes the file.

Your submission should consist of only 3 lines of Python code. No explanation is needed. You may assume that `instructions.txt` is in the same directory as your Python file.

### 2. Write vs. Append (1 point)

Recall that file accessing has three modes: read (`'r'`), write (`'w'`), and append (`'a'`). Briefly explain the difference between writing to a file opened in **write** mode and writing to a file opened in **append** mode. Name one real life example where it would make more sense to use append, and another where it would make more sense to use write.

### 3. Water Logged (1 point)

In an effort to drink more water, I've started to track my daily water intake. I have a single file in my Documents folder that tracks my water intake. Rather than finding the file, opening it, and manually logging my water every time, I've written a simple Python script to do it for me:

```py
my_log = open('~/Documents/water-intake.txt', 'w')
text = input("How much water did you drink today?")
my_log.write(text)
my_log.close()
```

After 3 weeks of logging my water intake and one hundred total entires, I open the file to find, much to my dismay, a single entry. Explain why my file has one entry rather than 100 entires, and state what (very small) fix I should make to my code to fix this issue.

### 4. More Books (2 points)

I own *lots* of books, so many that I can't remember all their names, much less where they all are in my house. Instead, I keep a single file named `books.txt` that contains a list of the title of every book, each on its own line. The first few lines of the file are shown below:

```plaintext
Ender's Game
Behave
All the Light We Cannot See
Curious George
1984
...
```

#### 4.1 Get Titles (1 point)

Write a function `get_titles` that takes in the file path as its single parameter, reads in all the titles from the file, and returns a set of all the book titles listed in the file. Make sure you close the file before you return.

Your submission should consist of only Python code. No explanation is needed. You can assume the file path parameter is a valid path, and the file is safe to open.

#### 4.2 Removing Duplicates (1 point)

I'm worried my `books.txt` file has lots of duplicate titles. Describe in words how I can use `get_titles` to rewrite the contents of `books.txt` and remove all the duplicates. What mode should I be in when I write?

As a hint, your solution should not involve any reading of the input file outside the reading done by `get_titles`.

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0 points

### 2: Approaching Standards: 2 points

### 3: Meeting Standards: 3 points

### 4: Exceeding Standards: 4 points
