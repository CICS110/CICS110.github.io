---
title: "HW 03: Sequence Types"
---

# Functions and Booleans

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

The aim of this homework assignment is to practice working with sequence types. The focus in on getting comfortable working with strings, lists, and tuples.

Be aware that you will be required to use the knowledge and skills you have acquired so far to succeed in this assignment. This includes defining functions, evaluating boolean expressions, evaluating arithmetic expressions, taking user input among others. 

### Learning Objectives

1. Practice working with strings.
2. Practice working with lists and tuples.
3. Practice working with python string methods.

### Estimated Size

This assignment requires you to implement $5$ Python files.

* Each file will have a few functions to implement.
* Each function can be reasonably implemented in $1 - 5$ lines of code.
* Many functions have simple computations, similar to the first assignment.
* Some functions require you to use other functions implemented by you in the same file. 

### Note

* You do not need to use any assert statements in this assignment. 
* You do not need to do any type checking, sanity checking or input validity checking in this assignment.  

## Preamble

We are trying a sort of new approach to the homework assignments.

You will be presented with a bunch of options of things to work on and can choose what seems
reasonable to try and work toward the point totals you want.

**We do not expect you to do everything.** Note that the exceeding threshold is at
18+ points, whereas there are 37 total points to possibly gain.

## **0. Setup**

Make a folder on your computer and open it in VSCode.

You must create five files in this folder. Make sure that you do not rename any of these files.

* `stats.py`
* `str_checks.py`
* `rps.py`
* `tup_frac.py`
* `cipher.py`

Remember that for every file you need to have comments indicating the authors at the, for example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necessary formatting details.

Some copying and pasting here will save you some time and sanity.

Note that these details are necessary for the auto-grader to recognize your solution.

## **1. Implement `stats.py`**

This problem is a revisit to elementary statistics, and you will implement functions to operate on collections of data to understand certain quantities of interest.

### **1a. Implement Minimum (1 point)**

The minimum value in a collection of data is the value with the smallest magnitude. 

Your task is to implement a function with the following signature:

```py
def list_min(l)
```
This function should take as input a list `l` and returns the minimum value in `l`.

Example:
```py
list_min([1, 2, 3])           # This should return 1
list_min(['bb', 'cb', 'abc']) # This should return abc
```

*Hint: Consider using the Python `min()` function.*

### **1b. Implement Maximum (1 point)**

The maximum value in a collection of data is the value with the largest magnitude. 

Your task is to implement a function with the following signature:

```py
def list_max(l)
```
This function should take as input a list `l` and returns the maximum value in `l`.

Example:
```py
list_max([1, 2, 3])           # This should return 3
list_max(['bb', 'cb', 'abc']) # This should return 'cb'
```

*Hint: Consider using the Python `max()` function.*

### **1c. Implement Range (1 point)**

The range of a collection of data is defined as the difference between the maximum value and the minimum value. 

Your task is to implement a function with the following signature:

```py
def list_range(l)
```
This function should take as input a list `l` and returns the range of `l`.

Example:
```py
list_range([1, 2, 3])           # This should return 2
list_range([20, 40, 1, 3, 400]) # This should return 399
```

*Hint: Consider using 1a. and 1b. to simplify your work.*

### **1d. Implement Mean (1 point)**

The mean of a collection of data is defined as the sum of the values in the collection divided by the total number of values in the collection.  

Your task is to implement a function with the following signature:

```py
def list_mean(l)
```
This function should take as input a list `l` and returns the mean of `l`.

Example:
```py
list_mean([1, 2, 3])           # This should return 2
list_mean([5, 5, 4, 4])        # This should return 4.5
```

*Hint: Consider using the Python `sum()` function.*


### **1e. Implement Median (1 point)**

The median of a collection of data is the middle-most value in the sorted collection.  

Your task is to implement a function with the following signature:

```py
def list_median(l)
```
This function should take as input a list `l` and returns the median of `l`. You may assume that `l` always contains an odd number of elements.   

Example:
```py
list_median([1, 2, 3])           # This should return 2
list_median([5, 5, 4, 4, 6])     # This should return 5
list_median(['abc', 'ab', 'bc']) # This should return 'abc'
```

*Hint: Consider using the Python `sorted()` function.*


## **2. Implement `str_checks.py`**

In this problem, you will use functions to perform some simple checks on strings. Any  background information that you may need is provided to you.

### **2a. Palindrome Strings (2 points)**

Palindromes are strings that read the same backwards as forwards. For example, `madam` and `racecar`. 

Your task is to implement a function with the following signature:

```py
def is_palindrome(s) 
```

The function should take as input a string `s` and returns if `s` is a palindrome or not.

Example:
```py
is_palindrome('foo')   # This should return False
is_palindrome('madam') # This should return True
```

### **2b. Anagrams (2 points)**

A string is said to be an anagram of another string if it can be created by rearranging the letters of the other string. For example, `fried` is an anagram of `fired` and vice versa. Another example is `listen` and `silent`.

Your task is to implement a function with the following signature:

```py
def is_anagram(s, t)
```

The function should take as input two strings `s` and `t` and return if the two strings are anagrams of each other.

Example:
```py
is_anagram('fired', 'fried')   # This should return True
is_anagram('fired', 'silent')  # This should return False
```

### **2c. 'Same' Strings (2 points)**

For this problem, we define two strings to be 'same' if they have the same alphabets in the same order irrespective of whether the letters are in upper or lower case. For example, `foo`, `Foo`, `fOO`, `FoO` are all 'same' strings.  

Your task is to implement a function with the following signature:

```py
def same_word(s, t)
```

The function should take as input two strings `s` and `t` and returns whether the two strings are 'same' or not.

Example:
```py
same_word('foo', 'Foo') # This should return True
same_word('foo', 'bar') # This should return False
```

*Hint: Consider using the Python String `.lower()` function.*


## **3. Implement `rps.py`**

Do you remember playing Rock, Paper, Scissors? Here's a quick reminder: At the same time, two players display one of three symbols - a rock, paper, or scissors. A rock beats scissors by destroying it, scissors beat paper by cutting it, and paper beats rock by covering it. 

In this problem, you will implement functions to simulate this game using a python program. 

Btw, this problem will involve using boolean expressions! You might want to refresh your knowledge before moving ahead. 

### **3a. Get input from the user (2 points)**

Your task is to implement a function with the following signature:

```py
def get_input()
```

The function does not take any argument. It should ask the user for an input string (which would be either `rock`, `paper` or `scissors`) and return the user's choice in lower case. 

Example:
```py
get_input() # If the user types 'rock' when prompted, this should return 'rock'
get_input() # If the user types 'PaPeR' when prompted, this should return 'paper'
```

### **3b. Check if player 1 wins (1 point)**

Your task is to implement a function with the following signature:

```py
def p1_wins(p1, p2)
```

The function should take as input two strings `p1` and `p2` corresponding to the choices of player 1 and player 2 respectively (This means they could be either `rock`, `paper` or `scissors`). It should return whether player 1 wins or not based on `p1` and `p2`. 

Example:
```py
p1_wins('rock', 'scissors')  # This should return True
p1_wins('paper', 'scissors') # This should return False
```

### **3c. Check if player 2 wins (1 point)**

Your task is to implement a function with the following signature:

```py
def p2_wins(p1, p2)
```

The function should take as input two strings `p1` and `p2` corresponding to the choices of player 1 and player 2 respectively (This means they could be either `rock`, `paper` or `scissors`). It should return whether player 2 wins or not based on `p1` and `p2`. 

Example:
```py
p2_wins('rock', 'scissors')  # This should return False
p2_wins('paper', 'scissors') # This should return True
```

### **3d. Check for a tie (1 point)**

Your task is to implement a function with the following signature:

```py
def tie(p1, p2)
```

The function should take as input two strings `p1` and `p2` corresponding to the choices of player 1 and player 2 respectively (This means they could be either `rock`, `paper` or `scissors`). It should return if there is a tie based `p1` and `p2`. 

Example:
```py
tie('paper', 'paper')      # This should return True
tie('paper', 'rock')       # This should return False
```

### Play the game!

You can play your game to test it. Use the following code snippet after implementing $3a. - 3d.$

```py
import random

p1 = get_input()
p2 = random.choice(["rock", "paper", "scissors"])

print(f"Player 1: {p1}")
print(f"Player 2: {p2}")
print(f"P1 Winner : {p1_wins(p1, p2)}")
print(f"P2 Winner : {p2_wins(p1, p2)}")
print(f"No Winner : {tie(p1, p2)}")
```

## **4. Implement `tup_frac.py`**

Do you remember fractions from pre-calculus? In this problem, we will implement some basic operations on fractions. Don't worry if you don't remember! We will reintroduce the operations for your assistance. 

All the necessary mathematical background you may need is provided below.

### **4a. Simplify fractions (1 point)**

To simplify a fraction, we divide the top and bottom by the highest number that can divide into both numbers exactly i.e. the greatest common divisor (gcd). For example, $\frac{2}{10}$ in simplified form is $\frac{1}{5}$.  

Your task is to implement a function with the following signature:

```py
def simplify(frac)
```
The function take as argument a tuple `frac` that stores the top as the first element and bottom as the second element. It should simplify the fraction and return a tuple with the first element as the simplified top and the second element as the simplified bottom. 

Example:
```py
simplify((2, 10))  # This should return (1, 5)
simplify((5, 13))  # This should return (5, 13)
```

*Hint: Consider using the Python `math.gcd()` function.*


### **4b. Create Fractions (1 point)**

Your task is to implement a function with the following signature:

```py
def make_fraction(top, bottom)
```
The function take as argument two integers `top` and `bottom`. Note that `bottom` cannot be negative. It should return a simplified fraction created from `top` and `bottom` as a tuple. 

Example:
```py
make_fraction(1, 5)   # This should return (1, 5)
make_fraction(2, 10)  # This should return (1, 5)
```

### **4c. Addition of Fractions (1 point)**

Addition of two fractions $\frac{a}{b}$ and $\frac{c}{d}$ involves several steps: 
* Step $1$: Find the least common multiple of $b$ and $d$. Let's call this $l$. This is the bottom of the sum of the two fractions.  
* Step $2$: Multiply $a$ by $\frac{l}{b}$
* Step $3$: Multiply $c$ by $\frac{l}{d}$
* Step $4$: Add the two numbers obtained in Step $2$ and Step $3$. This is the top of the sum of the two fractions.
* Step $5$: Simplify the fraction.

Your task is to implement a function with the following signature:

```py
def add(frac1, frac2)
```
The function take as argument two fractions stored as tuples `frac1` and `frac2` where the first element of the tuple stores the top and the second element stores the bottom. It should add the two fractions according to the steps described above and return the new fraction as a tuple where the first element of the tuple stores the top and the second element stores the bottom.

Example:
```py
add((1, 5), (3, 5))  # This should return (4, 5)
add((1, 6), (3, 4))  # This should return (11, 12)
```

*Hint: Consider using the Python `math.lcm()` function.*


### **4d. Negate Fractions (1 point)**

The negation of a fraction $\frac{a}{b}$ is the fraction $\frac{-a}{b}$. 

Your task is to implement a function with the following signature:

```py
def negate(frac)
```
The function take as argument a fraction stored as a tuple `frac` where the first element of the tuple stores the top and the second element stores the bottom. It should return the negation of `frac` as a tuple where the first element of the tuple stores the top and the second element stores the bottom.

Example:
```py
negate((1, 5))   # This should return (-1, 5)
negate((-1, 5))  # This should return (1, 5)
```

### **4e. Subtraction of Fractions (1 point)**

Subtraction of two fractions follows almost the same procedure as addition. The only difference is that in Step $4$, instead of adding we subtract the number obtained in Step $3$ from that obtained in Step $2$.

Your task is to implement a function with the following signature:

```py
def sub(frac1, frac2)
```
The function take as argument two fractions stored as tuples `frac1` and `frac2` where the first element of the tuple stores the top and the second element stores the bottom. It should subtract `frac2` from `frac1` according to the steps described above and return the new fraction as a tuple where the first element of the tuple stores the top and the second element stores the bottom.

Example:
```py
sub((3, 5), (1, 5))  # This should return (2, 5)
sub((3, 4), (1, 6))  # This should return (7, 12)
```
*Hint: There exists a one/two line solution for this problem by using 4c. and 4d.*

### **4f. Multiplication of Fractions (1 point)**

Multiplication of two fractions $\frac{a}{b}$ and $\frac{c}{d}$ involves several steps: 
* Step $1$: Multiply $a$ by $c$. This becomes the new top.
* Step $2$: Multiply $b$ by $d$. This becomes the new bottom.
* Step $3$: Simplify the fraction.

Remember that multiplying a negative number with another negative number results in a positive number.

Your task is to implement a function with the following signature:

```py
def mul(frac1, frac2)
```
The function take as argument two fractions stored as tuples `frac1` and `frac2` where the first element of the tuple stores the top and the second element stores the bottom. It should multiply `frac1` by `frac2` according to the steps described above and return the new fraction as a tuple where the first element of the tuple stores the top and the second element stores the bottom.

Example:
```py
mul((3, 5), (1, 5))  # This should return (3, 25)
mul((3, 4), (1, 6))  # This should return (1, 8)
```

### **4g. Multiplicative Inverse of Fractions (2 points)**

The multiplicative inverse of a fraction $\frac{a}{b}$ is the fraction $\frac{b}{a}$. 

Your task is to implement a function with the following signature:

```py
def inverse(frac)
```
The function take as argument a fraction stored as a tuple `frac` where the first element of the tuple stores the top and the second element stores the bottom. It should return the multiplicative inverse of `frac` as a tuple where the first element of the tuple stores the top and the second element stores the bottom.

Example:
```py
inverse((3, 4))   # This should return (4, 3)
inverse((-3, 4))  # This should return (-4, 3)
```

*Hint: Remember that the top of the input fraction can be negative. When calculating the multiplicative inverse, the new bottom should not be negative. You must take into account the sign of the top and handle it so the sign is preserved and the new bottom is not negative.*

*Hint: Consider using the Python `abs()` function.*


### **4h. Division of Fractions (2 points)**

Dividing a fraction $\frac{a}{b}$ by $\frac{c}{d}$ is equivalent to multiplying $\frac{a}{b}$ by $\frac{d}{c}$. 

Your task is to implement a function with the following signature:

```py
def div(frac1, frac2)
```
The function take as argument two fractions stored as tuples `frac1` and `frac2` where the first element of the tuple stores the top and the second element stores the bottom. It should divide `frac1` by `frac2` according to the steps described above and return the new fraction as a tuple where the first element of the tuple stores the top and the second element stores the bottom.

Example:
```py
div((3, 5), (4, 5))  # This should return (3, 4)
div((3, 4), (1, 6))  # This should return (9, 2)
div((3, 5), (-1, 6)) # This should return (-18, 5)
```

*Hint: There exists a one/two line solution for this problem by using 4f. and 4g.*

## **5. Implement `cipher.py`**

Ciphers are programs for encrypting and decrypting data. A cipher converts a message, called plaintext, into ciphertext. This process is called encryption. The process to obtain plaintext from ciphertext reverses the encryption and is called decryption. 

In this problem, you will implement encryption and decryption schemes for the ciphers specified below. All information you need is provided. 

### l337 Cipher 

The l337 cipher encoding scheme is defined as below:

| Character    | Encoding    |
| -----------  | ----------- |
| O            | 0           |
| I            | 1           |
| E            | 3           |
| A            | 4           |
| S            | 5           |
| T            | 7           |
| B            | 8           |

For example, `EAT` would be encoded as `347` and `MANAN` will be encoded as `M4N4N`.

### **5a. l337 Encryption (2 points)**

Your task is to implement a function with the following signature:

```py
def l337_encrypt(s)
```
The function take as argument a string `s` that represents a message and replaces each of the characters described in the table above (if it occurs in the string) with the corresponding encoding and returns the encoding as a string. 

Example:
```py
l337_encrypt('EAT')    # This should return '347'
l337_encrypt('MANAN')  # This should return 'M4N4N'
```
*Hint: Consider using String `.replace()` function.*

### **5b. l337 Decryption (2 points)**

Your task is to implement a function with the following signature:

```py
def l337_decrypt(s)
```
The function take as argument a string `s` that represents an encoding and replaces each of the encoded characters described in the table above (if it occurs in the string) with the corresponding character and returns the original message as a string. 

Example:
```py
l337_decrypt('347')    # This should return 'EAT'
l337_dncrypt('M4N4N')  # This should return 'MANAN'
```
*Hint: Consider using String `.replace()` function.*

### Odd-Even Cipher

This cipher creates two substrings from the message:
* $s_1$: It comprises of all the characters at odd indices
* $s_2$: It comprises of all the characters at even indices. 
It then joins (concatenates) the $s_2$ to $s_1$. This is the required encoding. 

For example, `abcd` generates the substrings `bd` and `ac` and thus, the encoding is `bdac`. Likewise, `abcdef` is encoded as `bdface`. 

The decryption scheme is rather more involved. 
* Step $1$: Convert the encoded string into a list. Now, you can access each letter in the encoded string. 
* Step $2$: Read the first half of the encoded string. Access each letter in the string and store these letters at odd positions in the list. 
* Step $3$: Read the second half of the encoded string. Access each letter in the string and store these letters at even positions in the list. 
* Step $4$: Convert the list into a string. This string represents the original message.

### **5c. Odd-Even Encryption (2 points)**

Your task is to implement a function with the following signature:

```py
def odd_even_encrypt(s)
```
The function take as argument a string `s` that represents a message and performs the encoding process described above and returns the encoding as a string. 

Example:
```py
odd_even_encrypt('abcd')    # This should return 'bdac'
odd_even_encrypt('MANAN')  # This should return 'AAMNN'
```

### **5d. Odd-Even Decryption (3 points)**

Your task is to implement a function with the following signature:

```py
def odd_even_decrypt(s)
```
The function take as argument a string `s` that represents an encoding and reverses the encoding process described above and returns the original message as a string. 

Example:
```py
odd_even_decrypt('bdac')    # This should return 'abcd'
odd_even_decrypt('AAMNN')  # This should return 'MANAN'
```

*Hint: For Step $4$, you can use the following where $l$ is the name of the list.*

```py
''.join(l)
```

### l337 and two-shuffle cipher

Finally, let's use the two ciphers above to generate our own cipher! This cipher first encodes a message using the l337 scheme and then two times using the odd-even scheme.  

*Fun Fact: For the following two problems, you exclusively need to use 5a. - 5d.*


### **5e. Encryption (1 point)**

Your task is to implement a function with the following signature:

```py
def cipher_encrypt(s)
```
The function take as argument a string `s` that represents a message and performs the encoding process described above and returns the encoding as a string. 

Example:
```py
cipher_encrypt('abcd')    # This should return 'dcba'
cipher_encrypt('MANAN')  # This should return '4N4MN'
```

### **5f. Decryption (1 point)**

Your task is to implement a function with the following signature:

```py
def cipher_decrypt(s)
```
The function take as argument a string `s` that represents an encoding and reverses the encoding process described above and returns the original message as a string. 

Example:
```py
cipher_decrypt('dcba')    # This should return 'abcd'
cipher_decrypt('4N4MN')  # This should return 'MANAN'
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
