---
title: "Lab 07: Sets and Dictionaries"
---

# Lab 07: Sets and Dictionaries

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

Data structures are an essential concept in computer science and are used to organize and store data efficiently. For example, sets can be used for data deduplication, identifying common elements in two datasets, or generating unique IDs. Dictionaries can be used for caching data, storing metadata, or implementing custom data structures like graphs and trees. Overall, sets and dictionaries are powerful tools for storing, accessing, and manipulating data in a fast and efficient way. 

In this lab we will explore the application and implementation of sets and dictionaries to solve problems. This will allow you to understand how sets and dictionaries could be used to solve problems. You will also learn to master the syntax of sets and dictionary.

### Learning Objectives

1. Discuss and explore the application of data structures.
2. Describe sets and dictionaries operation.
3. Solve problems using data structures.
4. Implement sets and dictionaries on Python.

### Estimated Size

There are $2$ questions:

- A multi-part question about dictionary
- A multi-part question about sets
- An optional challenge problem

## Preamble

In lectures $6$ and $11$, you have seen different examples of lists, sets, and dictionaries. For instance, you have recently seen this `set` example:

```py live_py title=Set
fruits = {"apple", "banana", "orange"}
fruits.add("grape")
print(f"after : {fruits}")
```

In the above snippet, the `set` fruits consists of $3$ unique elements. Using the `add()` method, you could add more elements into the existing `set` fruits. 

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

This time we see that using the `update()` method, you can not only modify the existing key-value pair - in this case "apple": "red" to "apple": "green", you can also add new key-value pair into the dictionary. Similarly, if you want to update multiple items together, you can pass a list of tuples to the `update()` method.

Below is an aggregated example of using lists, sets, and dictionary together

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

The example created a dictionary of student name and grade as key-value pairs. The `max` method found the highest grade out of $75$, $80$, $95$, and $85$. For each pair, the `for` loop attempted to find which students have the highest grade. Once found, their names are added into a list. If a grade is also above a particular threshold, the student's name is also added into a set.

## Assignment

### 1. Counting Word Frequency (7 points) (40 minutes)

Counting word frequency is interesting and helpful because it provides valuable insights into the patterns and themes present in a piece of text. By analyzing the frequency with which words appear, we can gain a deeper understanding of the author's style, tone, and message.

1. Understanding the topic: By looking at the frequency of words related to a specific topic, we can gain insights into what the text is about. For example, if we count the frequency of words like "climate change" or "global warming" in a news article, we can quickly understand that the article is about environmental issues.

2. Identifying key themes: The frequency of certain words or phrases can help us identify key themes in a piece of text. For example, if we count the frequency of words like "love," "romance," and "heartbreak" in a novel, we can identify that the main theme of the novel is likely to be relationships.

3. Measuring sentiment: Counting the frequency of positive and negative words in a piece of text can help us gauge the overall sentiment of the text. For example, if we count the frequency of words like "happy," "joyful," and "pleased" versus words like "sad," "angry," and "disappointed" in a set of customer reviews, we can understand the general sentiment towards a product or service.

4. Improving language skills: Counting word frequency can also be helpful for improving language skills. By analyzing the frequency of words in a particular text, we can identify new words to add to our vocabulary and gain a better understanding of how words are used in context.

In this exercise, you will implement an algorithm to count words frequency stored in a list using dictionaries.

#### 1.1 A FIRST ATTEMPT (3 points)

```py live_py title=Word Count
# The following story was created using ChatGPT

text = "Once upon a time, there was a little girl named Lily who loved to explore. \
        One day, she stumbled upon a magical garden filled with colorful flowers and \
        butterflies. As she walked through the garden, she noticed a tiny fairy with \
        shimmering wings. The fairy thanked Lily for visiting and gave her a special \
        flower as a gift. Lily promised to visit the garden every day and soon became \
        friends with the fairy. They had many adventures together and shared lots of \
        laughter and joy. And even though Lily grew up and moved away, she never forgot \
        her magical friend or the special gift she received in the enchanted garden."

word_list = text.split()
new_list=[]
for word in word_list:
    if not word in new_list:
        new_list.append(word)
        new_list.append(1)
    else:
        idx = new_list.index(word)
        new_list[idx+1]+=1
print(new_list)
```

<ol type="a">
    <li> Do you think the specified implementation works? (1 point)(4 minutes) </li>
    <li> Describe in words what the snippet of code provided does. (1 point)(4 minutes) </li>
    <li> What are some disadvantages of this implementation? (1 point)(2 minutes) </li>
</ol>


#### 1.2 DICTIONARIES TO THE RESCUE (2 points)

<ol type="a">
    <li> Can you propose a solution (in words) to this problem that uses dictionaries? (1 point)(7 minutes) </li>
    <li> What are some advantages of your proposed solution over the primitive solution in 1.1? (1 point)(3 minutes) </li>
</ol>

#### 1.3 DEVELOPING AN IMPLEMENTATION (2 points)

```py live_py title=Your Word Count
# The following story was created using ChatGPT

text = "Once upon a time, there was a little girl named Lily who loved to explore. \
        One day, she stumbled upon a magical garden filled with colorful flowers and \
        butterflies. As she walked through the garden, she noticed a tiny fairy with \
        shimmering wings. The fairy thanked Lily for visiting and gave her a special \
        flower as a gift. Lily promised to visit the garden every day and soon became \
        friends with the fairy. They had many adventures together and shared lots of \
        laughter and joy. And even though Lily grew up and moved away, she never forgot \
        her magical friend or the special gift she received in the enchanted garden."

word_list = text.split()

# Start your code here!

```
<ol type="a">
    <li> Try implementing Python code for your proposed solution in 2A. (1 point)(5 minutes) </li>
    <li> Share your code with your teammates and review their code. What are some similarities? What are some differences? Discuss and refine your code! (1 point)(5 minutes) </li>
</ol>

### 2. Organizing Books (3 points) (10 minutes)

Let's say we have a pile of books on a table, and we want to see if a particular book is in the pile. How can I solve this problem iteratively? As we discussed last week in Lab 6, we can iteratively search through the pile of books until we either find it and stop searching or we reach the end of the pile and can conclude we are unable to find the book.

Now, suppose that we have a stack of books we want to analyze, but first, we want to organize the books. So, we want to figure out which authors wrote the books we own. One idea could be to iterate through the books, and append the author of each book to a running list of authors (here, "list" refers to the list data structure, like a python list). 

Here is one way to go about this problem. Say I have $13$ books on my bookshelf. I follow the steps described above, and end up with a list has $13$ strings. I conclude that I have books written by $13$ different authors. 

<ol type='a'>
    <li> Explain the problem with my conclusion. (1 point) (2 minutes)</li>
    <li> Is there a data structure I can use instead of a list that solves this problem? Name the data structure and briefly explain how it solves this problem. (1 point) (4 minutes) </li>
    <li> Use the following code to implement your solution. (1 point) (4 minutes) </li>
</ol>

```py live_py title=Your Book Count
listOfBooks = [{'title':'Harry Potter', 'Author':'J.K. Rowling'}]
listOfBooks.append({'title':'Fantastic Beasts & Where to Find Them', 'Author':'J.K. Rowling'})
listOfBooks.append({'title':'Quidditch Through the Ages', 'Author':'J.K. Rowling'})
listOfBooks.append({'title':'The Girl With the Dragon Tattoo', 'Author':'Steven T Murray'})
listOfBooks.append({'title':'A Little Life', 'Author':'Hanya Yanagihara'})
listOfBooks.append({'title':'Thinking, Fast and Slow', 'Author':'Daniel Kahneman'})
listOfBooks.append({'title':'Noise', 'Author':'Daniel Kahneman'})
listOfBooks.append({'title':'The Ice Queen', 'Author':'Steven T Murray'})
listOfBooks.append({'title':'The Hobbit', 'Author':'J. R. R. Tolkien'})
listOfBooks.append({'title':'A Game of Trones', 'Author':'George R. R. Martin'})

# Printing the title of the first book
print(listOfBooks[0]['Author'])

#Your code starts here

```

### 3. (Optional Challenge) Lists of Email Addresses (0 point)

You are given two lists of email addresses. There are two tasks. First task is the remove all the duplicated email addresses. Second task is to find email addresses that are common in both lists.

For example:

```py
willContact = ["krishna@mathworks.com", "jim_clark@umass.edu", "ming@ibm.com", "hao@facebook.com", "danielle@emsu.edu"]
kobiContact = ["jim_clark@umass.edu", "hao@facebook.com", "jim_clark@umass.edu", "mark@vt.edu", "dbrown@gmail.com"]
```

Describe in words how you will solve these two tasks.

Hint: Since you are given two lists, you might want to first convert the two lists into sets first.

## Grading Scale

Below are how many points translate to what level on the 5-point scale.

### 1: Below Standards: 0 points

### 2: Approaching Standards: 1 point

### 3: Meeting Standards: 2 points

### 4: Exceeding Standards: 3 points
