---
title: "HW 06: Files"
---

# File Handling

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

The aim of this homework assignment is to work with files in Python. Even though we implement functions in Python in this class, the skills developed in this assignment will be relevant for any modern programming language.

A file is a collection of data stored on a disk in one unit identified by a name. The process of file handling pertains to how we store the available data in a file with the help of a computer program. Data can be retrieved from these files and used in any program written in a modern programming language. Files are an essential part of computer systems. File Handling includes operations such as opening existing files and editing them, creating new files, removing existing files among several other operations.

Even though we work with files in this assignment, be aware that you will be required to use the knowledge and skills you have acquired so far to succeed in this assignment. This includes defining functions, evaluating boolean expressions, evaluating arithmetic expressions, taking user input, working with f-strings, working with sequence types including lists and strings, branching, looping, working with modules, and handling exceptions. You may want to review them before you proceed.

### Learning Objectives

1. Practice working with files in Python.
2. Practice writing modular code in Python.
3. Practice throwing and catching exceptions in Python.

### Estimated Size

This assignment consists of $6$ problems. Unlike previous assignments, there is $1$ required problem in this assignment and you cannot attempt remaining problems without successfully completing that problem.

* Each problem specifies a few functions  to implement.
* Each function can be reasonably implemented in at most $10 - 15$ lines of code, though you would find yourself attempting most in $< 10$ lines of code.
* Many functions have simple computations, similar to the previous assignments.
* Some functions require you to use other functions implemented by you in the same file.
* Some functions may require you to create new variables, lists, strings, etc.

### Note

* You do not need to use any assert statements in this assignment.

## **0. Setup**

Make a folder on your computer and open it in VSCode.

You must create $6$ files in this folder. Make sure that you do not rename any of these files.

* `basic_io.py`
* `text_io.py`
* `file_info.py`
* `csv_parse.py`
* `csv_split.py`
* `csv_stats.py`

Remember that for every file you need to have comments indicating the authors at the top. For example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necessary formatting details.

Some copying and pasting here will save you some time and sanity.

Note that these details are necessary for the auto-grader to recognize your solution.

## **1. Implement `basic_io.py` (REQUIRED)**

*Note: You must implement basic_io.py correctly to be able to work on other problems in this assignment. Without correctly implementing all functions in this file, you cannot solve other problems in this assignment since they depend on importing functions from basic_io.py.*

It can be somewhat overwhelming to start working with files. This problem is intended to be a gentle introduction to file handling in Python. The focus is on getting used to the syntax, basic error handling with files and reading as well as writing to and from files.

In this problem, you will implement some simple functions that will help you get comfortable with file handling in Python.

Note that every part of this problem will require an informative error message if there is an exception while opening a file. If you call a function from an earlier part that already catches exceptions, then you should not have to implement an exception handler in the current function. For example, if your ```read_string``` function handles an exception and you call ```read_string``` from ```read_lines```, then your ```read_lines``` function won't require an exception check. Also note that the auto-grader will be looking for the exact error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file.

### **1a. Implement `read_string` (1 point)**

One of the most fundamental tasks in file handling is to open a file and read its contents as a string.

Your task is to implement a function that takes as argument the name of a file `fname`. The function should first attempt to open the file `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, your code should read the contents of the file and return the contents.

The function should have the following signature:

```py
def read_string(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print(read_string('cics110.txt'))
```

you should get as output the following:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

### **1b. Implement `read_lines` (1 point)**

A quick variation is to open a file and read its contents as a string line by line i.e. every line in the file is read one by one. This is in contrast to 1a., where we read the entire file into one string.

Your task is to implement a function that takes as argument the name of a file `fname`. This function should use `read_string` to read the contents of `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, it should return a list containing the lines in the `fname` one by one.

The function should have the following signature:

```py
def read_lines(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```
If you run the following code statement,

```py
print(read_lines('cics110.txt'))
```

you should get as output the following:

```
['CICS 110 students will succeed in their future endeavors.', 'Allison is an instructor for CICS 110.', 'Manan is a TA for CICS 110.', 'Ben is a UCA for CICS 110.']
```

*Hint: Using `read_string`, you can get a string that stores the contents of the file `fname`. Consider splitting this string into a list of strings using a function you have seen in this class before.*

### **1c. Implement `write_string` (1 point)**

Another fundamental task in file handling is to open a file and write `text` into the file, where `text` is some string.

Your task is to implement a function that takes as argument the name of a file `fname` and a string `text`. The function should first attempt to open the file `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, your code should write into the file `text`.

The function should have the following signature:

```py
def write_string(fname, text)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
write_string('cics110.txt', 'CICS 110 is an introductory python class.')
```

`cics110.txt` should contain only the following:

```
CICS 110 is an introductory python class.
```

### **1d. Implement `write_lines` (1 point)**

A quick variation is to open a file and write to it line by line i.e. every string in a provided list is written into the file line by line.

Your task is to implement a function that takes as argument the name of a file `fname` and a list of strings `text`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, this function should use `write_string` to write the elements of `text` into the file `fname` line by line.

The function should have the following signature:

```py
def write_lines(fname, text)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```
If you run the following code statement,

```py
write_lines('cics110.txt', ['Hello,', 'World'])
```

`cics110.txt` should contain only the following:

```
Hello,
World
```

*Hint: The newline character `"\n"` will be useful in this problem. One possible approach could be to use list comprehension to add a `"\n"` to the end of each line in `text`, save in another list, and use `"".join()` to create a string from this new list which can be then written into the file using `write_string`.*

### **1e. Implement `append_string` (1 point)**

A third fundamental task in file handling is to open a file and write contents into it without erasing the existing contents of the file i.e. add new content at the end of the file.

Your task is to implement a function that takes as argument the name of a file `fname` and a string `text`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, your code should write into the file `text` after the existing content of the file.

The function should have the following signature:

```py
def append_string(fname, text)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
append_string('cics110.txt', 'Tanush is also a UCA.')
```

`cics110.txt` should contain the following:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.Tanush is also a UCA.
```

*Hint: This is essentially the same as `write_string` but instead of opening the file in write mode, you need to open it in append mode.*

### **1f. Implement `append_lines` (1 point)**

A quick variation is to open a file and append to it line by line i.e. every string in a provided list is written into the file line by line after the existing content in the file.

Your task is to implement a function that takes as argument the name of a file `fname` and a list of strings `lines`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, the function should use `append_string` to append the elements of `lines` into the file `fname` line by line after the existing content of the file.

The function should have the following signature:

```py
def append_lines(fname, lines)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```
If you run the following code statement,

```py
append_lines('cics110.txt', ['Tanush is a UCA.', 'Lana is a UCA.', 'Dev is a UCA.'])
```

`cics110.txt` should contain the following:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
Tanush is a UCA.
Lana is a UCA.
Dev is a UCA.
```

Notice the difference between the examples in 1e. and 1f. Here, you must add a new line character `\n` before you append `lines` to append beginning at the next line.

*Hint: This is essentially the same as 1d. but instead of write mode, you should open the file in append mode. The hint in 1d. applies for this problem as well.*

## **2. Implement `text_io.py`**

Now that we are comfortable working with basic file handling operations, we will move to some more interesting file operations. Note that you will need to use the functions you implemented in `basic_io.py` so don't forget to import it into `text_io.py`!


### **2a. Implement `echo_to_file` (2 points)**

Remember the `echo_until_quit` function we implemented in the previous homework? Here is a slight variation of that problem with some file handling.

Your task is to implement a function that takes as arguments the name of a file `fname` and a boolean `append` which is `True` if the user wants to append the content to the file `fname` and `False` when the user wants to rewrite the content of the file `fname`. This function should repeatedly ask the user for an input string until the user types the string `quit` and append these strings to the file `fname` if `append` is `True` and rewrite the file `fname` with only the strings entered by the user if `append` is `False`.

*Note: `quit` should not be appended/written into `fname`.*

*Note: Your code should handle `quit` in any case such as `QUIT`, `quit` and `QuiT`.*

The function should have the following signature:

```py
def echo_to_file(fname, append)
```

Example 1:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
echo_to_file('cics110.txt', True)
```
and enter the following sequence of strings in the terminal:

```
Enter line of text or "quit": Hello,
Enter line of text or "quit": World!
Enter line of text or "quit": This
Enter line of text or "quit": is
Enter line of text or "quit": a python program
Enter line of text or "quit": quit
```

`cics110.txt` should contain the following:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
Hello,
World!
This
is
a python program
```

Example 2:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
echo_to_file('cics110.txt', False)
```
and enter the following sequence of strings in the terminal:

```
Enter line of text or "quit": Hello,
Enter line of text or "quit": World!
Enter line of text or "quit": This
Enter line of text or "quit": is
Enter line of text or "quit": a python program
Enter line of text or "quit": quit
```

`cics110.txt` should contain the following:

```
Hello,
World!
This
is
a python program
```

*Hint: Store all inputs in a variable in Python and then use `append_lines` and `write_lines` appropriately.*

### **2b. Implement `print_file` (1 point)**

It can be important in some situations to display the content of a file.

Your task is to implement a function that takes as argument the name of a file `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, the function should print (not return!) the content of the file if the file is non-empty.

The function should have the following signature:

```py
def print_file(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print_file('cics110.txt')
```

you should get the following output:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

### **2c. Implement `copy_file` (1 point)**

It can be important in some situations to duplicate the content from one file into another file.

Your task is to implement a function that takes as arguments the names of two files: `from_fname`, the file whose content you need to copy, and `to_fname`, the file into which you should duplicate the content of the file `from_fname`. This function should read content from the file `from_fname` and write into the file `to_fname`.

The function should have the following signature:

```py
def copy_file(from_name, to_fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

and another file `temp.txt` with the following contents:

```
Kobi is an instructor.
Jared is an instructor.
Tim is the course chair.
```

If you run the following code statement,

```py
copy_file('cics110.txt', 'temp.txt')
```

then `temp.txt` should contain the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```
and `cics110.txt` should remain unchanged.

### **2d. Implement `erase_file` (1 point)**

It can be important in some situations to remove all the content in a file.

Your task is to implement a function that takes as arguments the name of a file `fname`. The function should then remove all the content in the file i.e. the file should be empty after a call to this function. If the file does not exist, the function should create an empty file.

The function should have the following signature:

```py
def erase_file(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
erase_file('cics110.txt')
```

then `cics110.txt` should be an empty file with no content.

*hint: If a file does not exist, then you are making a file. If a file does exist, then you are truncating the file's content. What mode for opening will allow for this logic to happen?*

## **3. Implement `file_info.py`**

Let's move on to some cool applications of files! In this problem, you will implement functions that will analyze the words and characters in a file and report cool statistics such as word counts and character counts.

For the purpose of this problem, we make $2$ assumptions:

* Every sentence ends with a `.`
* Sentences contain only words (all alphabetic characters) or numbers (all digits).

Additionally, you will find the following useful for this problem:

* `string.digits` is the string `'0123456789'`.
* `string.ascii_letters` is the concatenation of `'abcdefghijklmnopqrstuvwxyz'` and `'ABCDEFGHIJKLMNOPQRSTUVWXYZ'`.

You must import both of these from `string` module.

### **3a. Implement `get_info` (3 points)**

Analyzing a file can help us understand the contents of the file better. In this problem, we will report some interesting file statistics.

Your task is to implement a function that takes as argument the name of a file `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, the function should return a dictionary formatted as under reporting the following statistics:

```
{
    lines: LINE_COUNT,
    sentences: SENTENCE_COUNT,
    words: WORD_COUNT,
    numbers: NUMBERS_COUNT,
    letters: LETTERS_COUNT,
    digits: DIGIT_COUNT
}
```
where LINE_COUNT represents the total number of lines of text in the file, SENTENCE_COUNT represents the total number of sentences in the file, WORD_COUNT represents the total number of words in the file, NUMBERS_COUNT represents the total number of numbers in the file, LETTERS_COUNT represents the total number of alphabetic characters in the file, and DIGITS_COUNT represents the total number of digits in the file.

The function should have the following signature:

```py
def get_info(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 is an introduction to computer programming and problem solving using computers.
This course teaches you how real-world problems can be solved computationally using programming constructs and data abstractions of a modern programming language. Concepts and techniques covered include variables, expressions, data types, objects, branching, iteration, functions, classes, and methods.
We will also cover how to translate problems into a sequence of instructions, investigate the fundamental operation of a computational system and trace program execution and memory, and learn how to test and debug programs.
No previous programming experience required. This is a 4 credit class. There are 6 sections being offered in Spring 2023.
```

If you run the following code statement,

```py
print(get_info('cics110.txt'))
```

then you should get the following output:

```
{
    'lines': 4,
    'sentences': 7,
    'words': 102,
    'numbers': 4,
    'letters': 616,
    'digits': 9
}
```

*Hint: Use `read_lines` to read the contents of the file and store it in a variable, say `text`. To count the number of lines, simply take the length of `text`. To count the number of sentences, you can simply count the occurrences of `.`. To count the number of words, split the lines in `text` and take the length of the list(s) so obtained. To count occurrences of numbers, characters and digits, iterate over all words, maintaining and updating counters for each of these. You can identify if a character is a digit using `string.digits`. Likewise, you can identify if a character is an alphabet using `string.ascii_letters`.*

### **3b. Implement `get_info_files` (2 points)**

In the previous problem, we analyzed a single file for statistics such as sentence count, word count, etc. In this problem, we will analyze the same statistics for multiple files.

Your task is to implement a function that takes as argument a list `fname_list` containing names of certain files. If a file in the list cannot be opened, it should be ignored (and an error message should be displayed, but if you're calling ```get_info``` from this function then you shouldn't need to reimplement the error message logic). This function should return a dictionary formatted as under reporting the following statistics:

```
{
    FILE_1_NAME:
    {
        lines: LINE_COUNT,
        sentences: SENTENCE_COUNT,
        words: WORD_COUNT,
        numbers: NUMBERS_COUNT,
        letters: LETTERS_COUNT,
        digits: DIGIT_COUNT
    }
    FILE_2_NAME:
    {
        lines: LINE_COUNT,
        sentences: SENTENCE_COUNT,
        words: WORD_COUNT,
        numbers: NUMBERS_COUNT,
        letters: LETTERS_COUNT,
        digits: DIGIT_COUNT
    }
    .....
}
```
where LINE_COUNT represents the total number of lines of text in the file, SENTENCE_COUNT represents the total number of sentences in the file, WORD_COUNT represents the total number of words in the file, NUMBERS_COUNT represents the total number of numbers in the file, LETTERS_COUNT represents the total number of alphabetic characters in the file, and DIGITS_COUNT represents the total number of digits in the file, FILE_1_NAME refers to the name of the first file in the list, and so on.

The function should have the following signature:

```py
def get_info_files(fname_list)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 is an introduction to computer programming and problem solving using computers.
This course teaches you how real-world problems can be solved computationally using programming constructs and data abstractions of a modern programming language. Concepts and techniques covered include variables, expressions, data types, objects, branching, iteration, functions, classes, and methods.
We will also cover how to translate problems into a sequence of instructions, investigate the fundamental operation of a computational system and trace program execution and memory, and learn how to test and debug programs.
No previous programming experience required. This is a 4 credit class. There are 6 sections being offered in Spring 2023.
```

Assume another file `temp.text` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print(get_info_files(['cics110.txt', 'temp.txt']))
```

then you should get the following output:

```
{
    'cics110.txt': {
                        'lines': 4,
                        'sentences': 7,
                        'words': 102,
                        'numbers': 4,
                        'letters': 616,
                        'digits': 9
                    },
    'temp.txt': {
                        'lines': 4,
                        'sentences': 4,
                        'words': 26,
                        'numbers': 4,
                        'letters': 106,
                        'digits': 12
                }
}

```

*hint: Iterate over the parameter list, call 3a., and add the filename and dictionary to the dictionary if the return of 3a is not None)*

### **3c. Implement `word_and_number_counts` (2 points)**

Analyzing a file can help us understand the contents of the file better. In this problem, you will count the occurrences of words in a given file.

Your task is to implement a function that takes as argument the name of a file `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, the function returns a dictionary that displays each word and number in the file as key and its count in the file as the value.

The function should have the following signature:

```py
def word_and_number_counts(fname)
```

*Note: 'HELLO' and 'hello' are the same words. To deal with this issue, convert the text into lowercase inside the function. *

*Note: You must strip off the `.` wherever present. Consider using `.replace()` to do so.*

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print(word_and_number_counts('cics110.txt'))
```

then you should get the following output:

```
{
    'cics': 4,
    '110': 4,
    'students': 1,
    'will': 1,
    'succeed': 1,
    'in': 1,
    'their': 1,
    'future': 1,
    'endeavors': 1,
    'allison': 1,
    'is': 3,
    'an': 1,
    'instructor': 1,
    'for': 3,
    'manan': 1,
    'a': 2,
    'ta': 1,
    'ben': 1,
    'uca': 1
}
```
Notice that in context of this problem, `110` is considered to be a word and its occurrences are counted. That is, numbers are left in string form so the function is technically counting the occurrences of words and numbers.

*Hint: By now you probably know how to get a list of words after reading a file. If not, take a look at the hint in 3a. Once you have this list, iterate over all the words in this list, adding the word as a key to the dictionary with value 1 if the word is initially not present in the dictionary. Otherwise, if the word is present in the dictionary, increment the value by 1. This is similar to what you did in Lab 7.*

### **3d. Implement `word_and_number_counts_files` (1 point)**

In the previous problem, we analyzed a single file for reporting word counts. In this problem, we will analyze the count of each unique word for multiple files.

Your task is to implement a function that takes as argument a list `fname_list` containing names of certain files. This function returns a nested dictionary that displays the file name as the key and the dictionary representing word counts for that file (the dictionary you computed in 3c.) as the value.

The function should have the following signature:

```py
def word_and_number_counts_files(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
Tim is the course chair.
Students in this class are awesome.
```

and another file `temp.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print(word_and_number_counts_files(['temp.txt', 'cics110.txt']))
```

then you should get the following output:

```
{
    'temp.txt': {
                    'cics': 4,
                    '110': 4,
                    'students': 1,
                    'will': 1,
                    'succeed': 1,
                    'in': 1,
                    'their': 1,
                    'future': 1,
                    'endeavors': 1,
                    'allison': 1,
                    'is': 3,
                    'an': 1,
                    'instructor': 1,
                    'for': 3,
                    'manan': 1,
                    'a': 2,
                    'ta': 1,
                    'ben': 1,
                    'uca': 1
                }
    'cics110.txt': {
                        'cics': 4,
                        '110': 4,
                        'students': 2,
                        'will': 1,
                        'succeed': 1,
                        'in': 2,
                        'their': 1,
                        'future': 1,
                        'endeavors': 1,
                        'allison': 1,
                        'is': 4,
                        'an': 1,
                        'instructor': 1,
                        'for': 3,
                        'manan': 1,
                        'a': 2,
                        'ta': 1,
                        'ben': 1,
                        'uca': 1,
                        'tim': 1,
                        'the': 1,
                        'course': 1,
                        'chair': 1,
                        'this': 1,
                        'class': 1,
                        'are': 1,
                        'awesome!': 1
                    }
}
```

### **3e. Implement `letter_and_digit_counts` (2 points)**

Analyzing a file can help us understand the contents of the file better. In this problem, will count the occurrences of characters in a given file.

Your task is to implement a function that takes as argument the name of a file `fname`. If an exception occurs while opening the file, the function should display the informative error message `Error occurred when opening FNAME to read`, where `FNAME` should be replaced with the actual name of the file, and the function should then return `None`. If an exception does not occur while opening, the function returns a dictionary that displays each character in the file as key and its count in the file as the value. It should return `None` if the file is empty.

The function should have the following signature:

```py
def letter_and_digit_counts(fname)
```

*Note: 'HELLO' and 'hello' have the same characters. To deal with this issue, convert the text into lowercase inside the function. *

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print(letter_and_digit_counts('cics110.txt'))
```

then you should get the following output:

```
{
    'c': 12,
    'i': 12,
    's': 13,
    '1': 8,
    '0': 4,
    't': 7,
    'u': 6,
    'd': 3,
    'e': 8,
    'n': 9,
    'w': 1,
    'l': 4,
    'h': 1,
    'r': 8,
    'f': 4,
    'a': 9,
    'v': 1,
    'o': 6,
    'm': 1,
    'b': 1
}
```

*Hint: By now you probably know how to get a list of words after reading a file. If not, take a look at the hint in 3a. Once you have this list, iterate over all the words in this list character-by-character, adding the character as a key to the dictionary with value 1 if the word is initially not present in the dictionary. Otherwise, if the character is present in the dictionary, increment the value by 1. This is similar to what you did in Lab 7. Another way could be to split every word into characters and simply iterating over these characters maintaining the dictionary in the same way as mentioned above.*


### **3f. Implement `letter_and_digit_counts_files` (1 point)**

In the previous problem, we analyzed a single file for reporting character counts. In this problem, we will analyze the count of each unique character for multiple files.

Your task is to implement a function that takes as argument a list `fname_list` containing names of certain files. This function returns a nested dictionary that displays the file name as the key and the dictionary representing character counts for that file (the dictionary you computed in 3e.) as the value.

The function should have the following signature:

```py
def letter_and_digit_counts_files(fname)
```

Example:

Assume a file `cics110.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
Tim is the course chair.
Students in this class are awesome.
```

and another file `temp.txt` with the following contents:

```
CICS 110 students will succeed in their future endeavors.
Allison is an instructor for CICS 110.
Manan is a TA for CICS 110.
Ben is a UCA for CICS 110.
```

If you run the following code statement,

```py
print(letter_and_digit_counts_files(['temp.txt', 'cics110.txt']))
```

then you should get the following output:

```
{
    'temp.txt': {
                        'c': 12,
                        'i': 12,
                        's': 13,
                        '1': 8,
                        '0': 4,
                        't': 7,
                        'u': 6,
                        'd': 3,
                        'e': 8,
                        'n': 9,
                        'w': 1,
                        'l': 4,
                        'h': 1,
                        'r': 8,
                        'f': 4,
                        'a': 9,
                        'v': 1,
                        'o': 6,
                        'm': 1,
                        'b': 1
                },
    'cics110.txt': {
                        'c': 15,
                        'i': 17,
                        's': 21,
                        '1': 8,
                        '0': 4,
                        't': 12,
                        'u': 8,
                        'd': 4,
                        'e': 14,
                        'n': 11,
                        'w': 2,
                        'l': 5,
                        'h': 4,
                        'r': 11,
                        'f': 4,
                        'a': 13,
                        'v': 1,
                        'o': 8,
                        'm': 3,
                        'b': 1
                    }
}
```

## **4. Implement `csv_parse.py`**
In this problem, you will learn how to parse a CSV file. A CSV file, short for Comma-Separated Values, is a plain text file that contains data in a tabular format, with each row representing a record and each column representing a field. The values in each field are separated by a comma. CSV files can be opened and edited by many different software applications, including spreadsheet programs like Microsoft Excel, and are commonly used for data storage, transfer, and analysis.

Below is an example of ```students.csv```. Each row represents a record for a different student. Each record has 12 values (separated by commas) that correspond to 12 different fields: student name, section, score1, score2, ..., score10. We will work with the following ```students.csv``` for this problem (note that the auto-grader will use a version of ```students.csv``` with more students and sections).
```
Noa Marijus,A,91.4,82.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.7
Christa Maple,B,97.37,80.58,88.78,68.53,88.3,73.72,74.44,79.22,78.09,74.82
Laurelle Cecil,B,92.4,84.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.5
Ryanne Rusty,A,96.2,80.3,88.78,68.53,88.3,73.72,74.44,79.22,78.09,75.32
```

You will need to use the functions you implemented in ```basic_io.py``` here, so be sure to import ```basic_io``` at the top of ```csv_parse.py```.

### **4a. Implement `read_csv` (2 points)**
In order to read a CSV file, we need to read its contents line-by-line. We already created a function that will read a file line-by-line (```read_lines``` in ```basic_io.py```) and we will use this function here. We also want to store the file's contents into a list such that each record of the CSV file is a dictionary element in this list.

The function should have the following signature:

```py
def read_csv(fname)
```

```fname``` is the filename (e.g., 'students.csv'). The function should call ```read_lines``` from ```basic_io.py``` and store the result into a string (let's call it lines). For each line in lines, you need to create a dictionary with the following key-value pairs:
* key = name, value = name of a student (this is always the 1st value in a record)
* key = section, value = section letter (this is always the 2nd value in a record)
* key = scores, value = list of 10 scores (this is always the 3rd to last values in a record and the values are floats)
* key = average, value = average of all scores, rounded to 3 decimal places (this is not a value in the CSV file; you need to calculate this)

Your function should return the list of dictionaries.

Example of returned list of dictionaries:
```
[{'name': 'Noa Marijus', 'section': 'A', 'scores': [91.4, 82.53, 86.52, 84.7, 81.69, 84.11, 86.29, 91.63, 92.42, 94.7], 'average': 87.599},
 {'name': 'Christa Maple', 'section': 'B', 'scores': [97.37, 80.58, 88.78, 68.53, 88.3, 73.72, 74.44, 79.22, 78.09, 74.82], 'average': 80.385},
 {'name': 'Laurelle Cecil', 'section': 'B', 'scores': [92.4, 84.53, 86.52, 84.7, 81.69, 84.11, 86.29, 91.63, 92.42, 94.5], 'average': 87.879},
 {'name': 'Ryanne Rusty', 'section': 'A', 'scores': [96.2, 80.3, 88.78, 68.53, 88.3, 73.72, 74.44, 79.22, 78.09, 75.32], 'average': 80.29}]
```

If ```read_lines``` returns ```None```, then an error occurred when opening the file. It's best to catch this error with an if statement that simply returns ```None``` if ```lines``` is ```None```. This check should happen before creating the dictionary.

*Hint: Since each record of the CSV is a comma-separated string, you can use ```.split(',')``` to split the string into a list. You can then index this list to retrieve specific values. For example, given the string ```txt = "apple,banana,carrot,donut"```, I can split the string by calling ```txt.split(',')``` which will return ```["apple", "banana", "carrot", "donut"]```. I can now get the 1st value by indexing the list at index 0: ```list[0]```. Splitting and indexing can also be done in one line: ```txt.split(',')[0]```.*

### **4b. Implement `write_csv` (1 point)**
We want to write the contents of the CSV file to another file. We already created a function that will write to a file (```write_lines``` in ```basic_io.py```) and we will use this function here.

The function should have the following signature:

```py
def write_csv(fname, student_list)
```

```fname``` is the filename (e.g., 'output.txt') and ```student_list``` is the contents of the CSV file in a list data structure (i.e., the output of ```read_csv```). For each dictionary in students_list, you need to create a string that contains the student name, section, and 10 scores with commas separating each value. That is, the string should be identical to one record in the original CSV file.

Example of ```output.txt```:
```
Noa Marijus,A,91.4,82.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.7
Christa Maple,B,97.37,80.58,88.78,68.53,88.3,73.72,74.44,79.22,78.09,74.82
Laurelle Cecil,B,92.4,84.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.5
Ryanne Rusty,A,96.2,80.3,88.78,68.53,88.3,73.72,74.44,79.22,78.09,75.32
```

Since ```write_lines``` takes a list as the second parameter, we want to store each of these strings in a single list and pass this list to ```write_lines```.

*Hint: Although it can be done, you are highly encouraged to NOT implement this function using only one line of code. Rather, it will be easier to tackle this problem using a loop (e.g., ```for student in student_list```) and using variables for the multiple pieces (e.g., ```name = student['name']```). For getting the scores to print in a comma-separated string, you can use python's ```map``` function to map the scores to a string, and then ```join``` the mapping into a string using a comma as a separator (e.g., ```','.join(...)```).*

## **5. Implement `csv_split.py`**
CSV files can hold a lot of data. For this reason, it is common to want to filter or split on values. In this problem, you will practice both filtering and splitting on section and average. We will continue to work with ```students.csv``` for this problem.

You will need to use the functions you implemented in ```basic_io.py``` and ```csv_parse.py``` here, so be sure to import both at the top of ```csv_split.py```.

### **5a. Implement `filter_section` (1 point)**
We want to be able to filter the CSV records such that only students of a specific section (e.g., section A) are shown. We can use list comprehensions to do this.

The function should have the following signature:

```py
filter_section(student_info, section_string)
```

```student_info``` is the list of all students returned by ```read_csv``` in ```csv_parse```, and ```section_string``` is a string with the section name (e.g., "A"). Using list comprehensions, this function should return every record in which section is equal to ```section_string```.

Example:
```py
filter_section(csv_parse.read_csv("students.csv"), "A")
```
could return:
```
[{'name': 'Noa Marijus', 'section': 'A', 'scores': [91.4, 82.53, 86.52, 84.7, 81.69, 84.11, 86.29, 91.63, 92.42, 94.7], 'average': 87.599},
 {'name': 'Ryanne Rusty', 'section': 'A', 'scores': [96.2, 80.3, 88.78, 68.53, 88.3, 73.72, 74.44, 79.22, 78.09, 75.32], 'average': 80.29}]
```

### **5b. Implement `filter_average` (1 point)**
Similar to ```filter_section```, we want to be able to filter the CSV records such that only students with an average score within some threshold (e.g., 80 <= average < 90) are shown.

The function should have the following signature:

```py
filter_average(student_info, min_inc, max_exc)
```

```student_info``` is the list of all students returned by ```read_csv``` in ```csv_parse```, ```min_inc``` is the minimum value of the threshold (it is inclusive), and ```max_exc``` is the maximum value of the threshold (it is exclusive). Using list comprehensions, this function should return every record in which ```min_inc <= average < max_exc```.

Example:
```py
filter_average(csv_parse.read_csv("students.csv"), 80, 85)
```
could return:
```
[{'name': 'Christa Maple', 'section': 'B', 'scores': [97.37, 80.58, 88.78, 68.53, 88.3, 73.72, 74.44, 79.22, 78.09, 74.82], 'average': 80.385},
 {'name': 'Ryanne Rusty', 'section': 'A', 'scores': [96.2, 80.3, 88.78, 68.53, 88.3, 73.72, 74.44, 79.22, 78.09, 75.32], 'average': 80.29}]
```

### **5c. Implement `split_section` (3 point)**
Splitting refers to splitting the file into multiple, smaller files based on some criteria. We wish to split ```students.csv``` into multiple files, one for each section: ```students_section_A.csv``` and ```students_section_B.csv``` (note that the ```students.csv``` used by the auto-grader will have an unknown number of sections). Each file will contain only records for students belonging to each respective section.

The function should have the following signature:

```py
def split_section(fname)
```

```fname``` is the original filename (e.g., 'students.csv'). Your function should do the following in order:
* Read the CSV file by calling ```read_csv``` in ```csv_parse```. Let's call the output of ```read_csv``` ```students```.
* If ```read_csv``` returns ```None```, then an error occurred when opening the file. It's best to catch this error with an if statement that simply returns ```None``` if ```students``` is ```None```.
* Get a set of sections. DO NOT hardcode a set. Rather, use set comprehensions to find all sections in ```students```. Let's call this set ```sections```.
* For each section in ```sections```, filter the ```students``` by ```section``` and use ```write_csv``` in ```csv_parse``` to write the contents to a file named ```students_section_?.csv```, where ```?``` is the actual section (e.g., ```students_section_A.csv```).

Example of ```students_section_A.csv```:
```
Noa Marijus,A,91.4,82.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.7
Ryanne Rusty,A,96.2,80.3,88.78,68.53,88.3,73.72,74.44,79.22,78.09,75.32
```

### **5d. Implement `split_average` (2 points)**
Similar to ```split_section```, we wish to split ```students.csv``` into multiple files, one for each average score range:
* score 4: 85 <= average
* score 3: 75 <= average < 85
* score 2: 60 <= average < 75
* score 1: average < 60

The function should have the following signature:

```py
def split_average(fname)
```

```fname``` is the original filename (e.g., 'students.csv'). You should follow the same steps as in ```split_section```. Instead of a set of sections, however, you will need a dictionary of scores. You CAN hardcode this dictionary as follows:

```py
scores = {"1": (-1,60), "2": (60,75), "3": (75,85), "4": (85,101)}
```

The output file should be named ```students_score_?.csv```, where ```?``` is the score category (either 1, 2, 3, or 4).

Example of ```students_score_4.csv```:
```
Noa Marijus,A,91.4,82.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.7
Laurelle Cecil,B,92.4,84.53,86.52,84.7,81.69,84.11,86.29,91.63,92.42,94.5
```

In the case that no students belong to a particular score category (e.g., in ```students.csv```, there are no students that have a score of 1), you can do one of two things: (1) do not create a file for that score, or (2) create an empty file for that score category.

*Hint: You'll want to use ```filter_average``` to help you find the the students who belong in each score category.

## **6. Implement `csv_stats.py`**
When working with data, it is common to calculate statistics (e.g., mean, min, max, range, standard deviation) on this data. In this problem, you will practice calculating these stats on the data as well as writing these stats to files. We will continue to work with ```students.csv``` for this problem.

You will need to use the functions you implemented in ```basic_io.py```, ```csv_parse.py```, and ```csv_split``` here, so be sure to import all three at the top of ```csv_stats.py```.

Note: 6a and 6b are recommended helper functions that will not be tested by the auto-grader. You are encouraged to test them locally.

### **6a. Implement `get_stats`**
The first thing we need to do is create a function that will calculate all of the stats we wish to work with. Given a list of numbers called ```num```, we can calculate the mean, min, max, range, and standard deviation by using several built-in python functions:
* ```mean = sum(nums) / len(nums)```
* ```min = min(nums)```
* ```max = max(nums)```
* ```range = max - min```
* ```std_dev = [(num-mean)**2 for num in nums])/len(nums))**(1/2)```

Write a function that returns these stats as a dictionary. The function should have the following signature:

```py
def get_stats(nums)
```

```nums``` is a list of numbers.

Example:
```py
get_stats([69.15, 85.71, 94.65, 93.49, 75.05])
```

should return:
```
{'mean': 83.61, 'std_dev': 10.062516583837263, 'min': 69.15, 'max': 94.65, 'range': 25.5}
```

### **6b. Implement `get_assignment_stats`**
We will now create a function to extract the stats per a field/column of ```students.csv```. More specifically, we will calculate the stats for 11 columns: each of the 10 score columns and the average column.

The function should have the following signature:

```py
def get_assignment_stats(student_info)
```

```student_info``` is the list of all students returned by ```read_csv``` in ```csv_parse```. We can implement this function in three steps:
* Step 1: Map over ```student_info``` to create a list of score lists (let's call it ```scores_per_student```). Each list in ```scores_per_student``` will contain the average value followed by the 10 score values (average must be at index 0, followed by score 1, score 2, ..., score 10). The length of ```scores_per_student``` should equal the length of ```student_info```. Each list in ```scores_per_student``` should have a length of 11.
* Step 2: Transpose this list. Transposing a list of lists essentially means we are 'flipping' the data structure such that the rows become columns and the columns become rows. For example, if Step 1 creates 33 lists, each of length 11, inside ```scores_per_student```, transposing ```scores_per_student``` will flip it such that there are 11 lists, each of length 33. You can transpose the list by creating a new list of 11 empty lists (let's call it ```scores_per_assignment```) and looping over ```scores_per_student```, appending values into ```scores_per_assignment``` (*hint: think nested loops*).
* Step 3: Map ```get_stats``` over ```scores_per_assignment``` and return this mapping.

Example:
```py
get_assignment_stats(csv_parse.read_csv("students.csv"))
```
should return:
```
[{'mean': 84.03825, 'std_dev': 3.702226179949031, 'min': 80.29, 'max': 87.879, 'range': 7.588999999999999},
 {'mean': 94.3425, 'std_dev': 2.502382614629505, 'min': 91.4, 'max': 97.37, 'range': 5.969999999999999},
 {'mean': 81.985, 'std_dev': 1.7020061692015118, 'min': 80.3, 'max': 84.53, 'range': 4.230000000000004},
 {'mean': 87.65, 'std_dev': 1.1300000000000026, 'min': 86.52, 'max': 88.78, 'range': 2.260000000000005},
 {'mean': 76.61500000000001, 'std_dev': 8.085, 'min': 68.53, 'max': 84.7, 'range': 16.17},
 {'mean': 84.995, 'std_dev': 3.3049999999999997, 'min': 81.69, 'max': 88.3, 'range': 6.609999999999999},
 {'mean': 78.91499999999999, 'std_dev': 5.195, 'min': 73.72, 'max': 84.11, 'range': 10.39},
 {'mean': 80.36500000000001, 'std_dev': 5.925000000000004, 'min': 74.44, 'max': 86.29, 'range': 11.850000000000009},
 {'mean': 85.42500000000001, 'std_dev': 6.204999999999998, 'min': 79.22, 'max': 91.63, 'range': 12.409999999999997},
 {'mean': 85.255, 'std_dev': 7.164999999999999, 'min': 78.09, 'max': 92.42, 'range': 14.329999999999998},
 {'mean': 84.835, 'std_dev': 9.76685594242078, 'min': 74.82, 'max': 94.7, 'range': 19.88000000000001}]
```

### **6c. Implement `write_assignment_stats` (3 points)**
We are now ready to write the stats for each assignment to a separate file. The function will look similar to ```split_section``` and ```split_average``` in ```csv_split```, however we are outputting all stats to a single file called ```students_stats.csv```.

The function should have the following signature:

```py
def write_assignment_stats(fname)
```

```fname``` is the original filename (e.g., 'students.csv'). Your function should do the following in order:
* Read the CSV file by calling ```read_csv``` in ```csv_parse```. Let's call the output of ```read_csv``` ```students```.
* If ```read_csv``` returns ```None```, then an error occurred when opening the file. It's best to catch this error with an if statement that simply returns ```None``` if ```students``` is ```None```.
* Get the average stats and assignment stats by calling ```get_assignment_stats```.
* Output each dictionary of stats as a single line to ```students_stats.csv```.
The stats should output in the following order: min, max, range, mean, and std\_dev. The first line should be the stats for average, and the remaining lines should each be the stats for one of the assignments (in order). Thus,  ```students_stats.csv``` should have 11 lines.

Example of the first 3 lines of ```student_stats.csv```:

```
80.29,87.879,7.588999999999999,84.03825,3.702226179949031
91.4,97.37,5.969999999999999,94.3425,2.502382614629505
80.3,84.53,4.230000000000004,81.985,1.7020061692015118
```

### **6d. Implement `write_section_assignment_stats` (3 points)**
Similar to ```write_assginment_stats```, we will write the assignment stats to a separate file. This time, we will write to multiple files, namely one for each section: ```students_section_A_stats.csv``` and ```students_section_B_stats.csv``` (note that the ```students.csv``` used by the auto-grader will have an unknown number of sections).

The function should have the following signature:

```py
def write_section_assignment_stats(fname)
```

```fname``` is the original filename (e.g., 'students.csv'). Your function should be similar to ```write_assginment_stats```. However, you should loop through a set of sections (as in ```split_section```) and only include those records with a matching section letter in your stats calculation (*hint: Use filter_section from csv_split*). Each output file should still have 11 lines.

Example of the first 3 lines of ```students_section_A_stats.csv```:
```
80.29,87.599,7.3089999999999975,83.9445,3.6544999999999987
91.4,96.2,4.799999999999997,93.80000000000001,2.3999999999999986
80.3,82.53,2.230000000000004,81.41499999999999,1.115000000000002
```

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
