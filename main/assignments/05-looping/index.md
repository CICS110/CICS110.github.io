---
title: "HW 05: Looping"
---

# Looping

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

The aim of this homework assignment is to practice loops. The focus is on getting comfortable working with `for` and `while` loops. Even though we implement functions in Python in this class, the skills developed in this assignment will be relevant for any modern programming language.

In computer programming, a loop is a sequence of instructions that is continually repeated until a certain condition is reached. Along with branching, looping is one of the most important constructs in programming. Programs generally run sequentially, starting from the first instruction and then moving to the next instruction. Looping is used to introduce repetitive behaviour in more complex ways.

Once again, be aware that you will be required to use the knowledge and skills you have acquired so far to succeed in this assignment. This includes defining functions, evaluating boolean expressions, evaluating arithmetic expressions, taking user input among others, working with f-strings, working with sequence types including lists and strings, and branching. You may want to review them before you proceed.

### Learning Objectives

1. Practice loops (for, while).
2. Implement some simple applications using skills acquired so far.

### Estimated Size

This assignment requires you to implement $5$ Python files.

* Each file will have a few functions to implement.
* Each function can be reasonably implemented in at most $10 - 15$ lines of code, though you would find yourself attempting most in $< 10$ lines of code.
* Many functions have simple computations, similar to the previous assignments.
* Some functions require you to use other functions implemented by you in the same file.
* Some functions may require you to create new variables, lists, strings, etc.

### Note

* You do not need to use any assert statements in this assignment.
* You do not need to do any type checking, sanity checking or input validity checking in this assignment.

## **0. Setup**

Make a folder on your computer and open it in VSCode.

You must create five files in this folder. Make sure that you do not rename any of these files.

* `loops.py`
* `fizzbuzz.py`
* `loop_math.py`
* `guess_number.py`
* `tic-tac-toe.py`

Remember that for every file you need to have comments indicating the authors at the top, for example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necessary formatting details.

Some copying and pasting here will save you some time and sanity.

Note that these details are necessary for the autograder to recognize your solution.

## **1. Implement `loops.py`**

Loops can be tricky to work with! This problem is intended to be a gentle introduction to looping. In this problem, you will implement some simple functions that will help you get comfortable with loops.

### **1a. Implement `print_1_to_n_while` (1 point)**

Your task is to implement a function that prints (not return!) the numbers $1$ through $n$ (both inclusive) where $n$ is the argument passed by the user using a `while` loop. DO NOT use a `for` loop for this problem.

The function should have the following signature:

```py
def print_1_to_n_while(n)
```

Examples:
```py
print_1_to_n_while(4)
```

```
1
2
3
4
```

```py
print_1_to_n_while(6)
```

```
1
2
3
4
5
6
```

### **1b. Implement `print_1_to_n_for` (1 point)**

Your task is to implement a function that prints (not return!) the numbers $1$ through $n$ (both inclusive) where $n$ is the argument passed by the user using a `for` loop. DO NOT use a `while` loop for this problem.

The function should have the following signature:

```py
def print_1_to_n_for(n)
```

Examples:
```py
print_1_to_n_for(4)
```

```
1
2
3
4
```

```py
print_1_to_n_for(6)
```

```
1
2
3
4
5
6
```


### **1c. Implement `echo_until_quit` (1 point)**

Your task is to implement a function with the following signature:

```py
def echo_until_quit():
```

This function should repeatedly ask the user for input and print (not return!) the specified input until the user enters `quit` (your code should work for uppercase, lowercase or mixed case) when the program ends. Note that `quit` should not be printed whenever it is provided as input.

Examples:
```py
echo_until_quit()
```
The terminal interaction could look like this:

```
Please enter a word: Manan
Manan
Please enter a word: Jared
Jared
Please enter a word: Kobi
Kobi
Please enter a word: Allison
Allison
Please enter a word: quit
```

### **1d. Implement `multiple_words` (1 point)**

Your task is to implement a function with the following signature:

```py
def multiple_words(s)
```

This function should take as argument a string `s` and returns `True` if the string is comprised of multiple words and `False` otherwise. Here, a word is any sequence of characters that does not include a space.

Example:
```py
multiple_words('Hello')                                       # This should return False
multiple_words('Hello, World!')                               # This should return True
multiple_words("it's")                                        # This should return False
multiple_words('misspelledd woords arre stilll woords')       # This should return True
```
*Hint: Consider using `.split()` function to do this without using a loop*

### **1e. Implement `count_multiple_word_titles` (1 point)**

Your task is to implement a function with the following signature:

```py
def count_multiple_word_titles(titles)
```

This function should take as argument a list `titles` that contains book titles and it should return the number of book titles that have more than one word.

Example:
```py
count_multiple_word_titles(["Ulysses", "Don Quixote", "The Great Gatsby"])    # This should return 2
count_multiple_word_titles(["Ulysses", "Don Quixote", "Hamley", "Hamlet"])    # This should return 1
```

*Hint: Use 1d.*

## **2. Implement `fizzbuzz.py`**

Have you heard of LeetCode? LeetCode is a social platform for preparing technical interviews for companies in the IT industry. LeetCode-style problems are prevalent in coding interviews at companies such as Google, Amazon and Meta.

In this problem, we will introduce you to one such problem to get you started with your interview preparation!

### **2a. Implement `fizzbuzz` (1 point)**

Your task is to implement a function with the following signature:

```py
def fizzbuzz(n)
```

This function takes as argument an integer `n`. If `n` is divisible by $3$, it should return (not print!) "fizz". If `n` is divisible by $5$, it should return (not print!) "buzz". If `n` is divisible by $3$ and $5$, it should return (not print!) "fizzbuzz". Otherwise, it should simply return (not print!) `n`.

Example:
```py
fizzbuzz(6)     # This should return "fizz"
fizzbuzz(5)     # This should return "buzz"
fizzbuzz(15)    # This should return "fizzbuzz"
fizzbuzz(1)     # This should return 1
```

### **2b. Implement `first_n_fizzbuzz` (1 point)**

Your task is to implement a function with the following signature:

```py
def first_n_fizzbuzz(n)
```

This function takes as argument an integer `n`. It should return a list comprising of outputs obtained by calling `fizzbuzz(n)` from $2a.$ on the numbers $1$, $2$, $\dots$ $n$.

Example:
```py
first_n_fizzbuzz(6)     # This should return [1, 2, 'fizz', 4, 'buzz', 'fizz']
first_n_fizzbuzz(8)     # This should return [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8]
```

## **3. Implement `loop_math.py`**

In this problem, you will implement some mathematical formulations. Any background you may need is provided for your reference.

### **3a. Implement `is_prime` (2 points)**

A prime number is a whole number greater than $1$ that is not a product of two smaller whole numbers. For example, $5$ is prime because the only ways of writing it as a product, $1 \times 5$ or $5 \times 1$, involve $5$ itself. However, $4$ is not prime because it is a product $2 \times 2$ in which both numbers are smaller than $4$.

A simple but slow method to check if a given number $n$ is prime is to test whether $n$ is a multiple of any integer between $2$ and $\sqrt {n}$.

For instance, if we want to check if $9$ is prime, it is sufficient to check if $9$ is divisible by $2$ and $3$. Since $9$ is divisible by $3$, $9$ is not a prime.

Likewise, we can check if $17$ is a prime by checking if it is divisible by $2$, $3$, and $4$. Since $17$ is divisible by none of these, it is a prime.

Your task is to implement a function with the following signature:

```py
def is_prime(n)
```

The function takes a positive whole number `n` and returns whether `n` is a prime or not using the method described above.

Example:
```py
is_prime(9)    # This should return False
is_prime(17)   # This should return True
```

Hint: Run a loop from $2$ to $\sqrt{n}$ and check if `n` is divisible by any of these. If that is case, return `False`. Otherwise, return `True`.

Hint: $\sqrt{n}$ may always not be an integer! `math.ceil()` function from `math` will be helpful to mitigate this issue. Add the following statement to the top of your file (below the author comments) to import `math`:

```py
import math
```

### **3b. Implement `first_n_primes` (1 point)**

Your task is to implement a function with the following signature:

```py
def first_n_primes(n)
```

The function takes an integer `n` and returns the first `n` prime numbers as a list.

Example:
```py
first_n_primes(4)    # This should return [2, 3, 5, 7]
first_n_primes(6)    # This should return [2, 3, 5, 7, 11, 13]
```

Hint: Starting with $2$, check if each number is a prime number using 3a. and append it to a list. Return this list when the number of elements in this list is equal to `n`.

### **3c. Implement `next_collatz_number` (1 point)**

Given a positive integer, the next Collatz number is defined by two very simple rules:

* If the integer is even, divide it by two.
* If the integer is odd, triple it and add one.

Your task is to implement a function with the following signature:

```py
def next_collatz_number(n)
```

The function takes a positive integer `n` and returns the $n$-th Collatz number.

Example:
```py
next_collatz_number(10)    # This should return 5
next_collatz_number(17)    # This should return 52
```

### **3d. Implement `collatz_sequence` (1 point)**

A famous unsolved conjecture in math says that if you start with any positive integer and form a sequence by performing the two operations defined in the previous problem repeatedly taking the result at each step as the input at the next, you will eventually reach $1$.

For example: Starting with $12$, you first get $12/2 = 6$ , then $6/2 = 3$, then $3(3) + 1 = 10$, then $10/2 = 5$, then $3(5) + 1 = 16$, then $16/2 = 8$, then $8/2 = 4$, then $4/2 = 2$ and finally $2/2 = 1$.

So, the Collatz sequence starting with $12$ is $12$, $6$, $3$, $10$, $5$, $16$, $8$, $4$, $2$, $1$.

Your task is to implement a function with the following signature:

```py
def collatz_sequence(n)
```

The function takes a positive integer `n` and returns the Collatz sequence starting at `n` as a list.

Example:
```py
collatz_sequence(3)    # This should return [3, 10, 5, 16, 8, 4, 2, 1]
collatz_sequence(7)    # This should return [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
```

Hint: Starting at $n$, repeatedly call the `next_collatz_number` on the number returned till you reach $1$ and store this sequence in a list. Return this list

### **3e. Implement `first_n_collatz_sequences` (1 point)**

Your task is to implement a function with the following signature:

```py
def first_n_collatz_sequences(n)
```

The function takes a positive integer `n` and returns a list that stores the Collatz sequences starting at $1$, $2$, $\dots$, $n$ as a list.

Example:
```py
first_n_collatz_sequences(3)    # This should return [[1], [2, 1], [3, 10, 5, 16, 8, 4, 2, 1]]
first_n_collatz_sequences(5)    # This should return [[1], [2, 1], [3, 10, 5, 16, 8, 4, 2, 1], [4, 2, 1], [5, 16, 8, 4, 2, 1]]
```

Hint: Starting at $1$, repeatedly call the `collatz_sequence` till you reach $n$ and store these lists returned in another list. Return that list

## **4. Implement `guess_number.py`**

I'm thinking of a number between 0 and 10. Can you guess the number?

In this problem, you will be implementing a guessing game. The program will randomly select a number and the player will then have to guess that number within so many tries.

### **4a. Implement `choose_solution` (1 point)**

We first need to randomly come up with a number/solution. Your task is to implement a function with the following signature:

```py
def choose_solution(min, max)
```

The function takes in two integers, `min` and `max`, that represent the range in which the random number must fall. The range is inclusive, meaning the random number can be equal to `min` or `max`.

Example:
```py
choose_solution(0, 10)    # This should output a random number from the list [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

Hint: Use `range()` to create a list from `min` to `max` (remember, the list should be inclusive) and use `random.choice()` to select a number from that list. Add the following statement to your file to import `random`:

```py
import random
```

### **4b. Implement `get_legal_guess` (2 points)**

We now need to let the player make guesses. Your task is to implement a function with the following signature:

```py
def get_legal_guess(min, max)
```

Once again, the function takes in two integers, `min` and `max`, that represent the range of numbers in which the player should guess from. The function should ask the player to enter a number (i.e., integer) within this range and then check if the number is actually within the range. If the guess is in the range, return the guess. Otherwise, the player should be told that their guess was not in the range again and then they should be asked again to  input a guess that is within the range.

Example 1:
```
Please enter a number between 0 and 10: 5
```

Example 2:
```
Please enter a number between 0 and 10: 11
Guess was not between 0 and 10.
Please enter a number between 0 and 10: 13
Guess was not between 0 and 10.
Please enter a number between 0 and 10: -9
Guess was not between 0 and 10.
Please enter a number between 0 and 10: 3
```

In Example 1, the player enters $5$, which is in the range $0$ to $10$, so the function returns $5$. In Example 2, the player first enters $11$, which is not in the range. The player is then told that their guess is not in range and asked to guess again. This repeats until they finally enter a valid guess, $3$, and the function returns $3$.

### **4c. Implement `compare` (1 point)**

We now need to compare the player's guess to the actual solution. Your task is to implement a function with the following signature:

```py
def compare(solution, guess)
```

The function should print "Too High" and return `False` if the guess is greater than the solution, "Too Low" and return `False` if the guess is less than the solution, and "That's It!" and return `True` if the guess is equal to the solution.

Example:
```py
compare(5, 7)   # Should print "Too High" and return False
compare(5, 2)   # Should print "Too Low" and return False
compare(5, 5)   # Should print "That's It!" and return True
```

### **4d. Implement `play_game` (2 points)**

Time to play! Your task is to implement a function with the following signature:

```py
def play_game(min, max, guess_limit)
```

Once again, `min` and `max` represent the range. `guess_limit` is the number of guess attempts that the player is allowed to make. The function should start by getting a solution. It should then repeatedly ask the player to guess until the player has either guessed correctly or reached the `guess_limit`. If they guess correctly before running out of guesses, they've won the game. Otherwise, you must tell them that they are out of guesses and tell them the correct number.

Example 1:
```py
play_game(0, 10, 5)
```

```
Please enter a number between 0 and 10: 4
Too High
Please enter a number between 0 and 10: 2
Too High
Please enter a number between 0 and 10: 1
That's It!
```

Example 2:
```py
play_game(0, 100, 3)
```

```
Please enter a number between 0 and 100: 50
Too High
Please enter a number between 0 and 100: 25
Too Low
Please enter a number between 0 and 100: 35
Too High
Out of guesses, answer was: 31
```

Hint: You should be calling all functions from 4a to 4c here.

## **5. Implement `tic-tac-toe.py`**

In this problem, you will be implementing the classic tic-tac-toe game. The game is played between two people on a 3x3 grid. Player 1 is X and Player 2 is O. Each player (starting with Player 1) takes turns marking an empty square on the board. The first player to get three marks in a row (either horizontally, vertically, or diagonally) wins the game. It is possible for games to end in a tie, where no one wins.

Player 1 (X) wins:
```
 X | O | O
---+---+---
 O | X |
---+---+---
 X |   | X
```

Tie (i.e., no one wins):
```
 X | X | O
---+---+---
 O | O | X
---+---+---
 X | O | X
```

### **5a. Implement `make_empty_board` (1 point)**

Since the game begins with an emtpy board, our first step is to create an empty board. Your task is to implement a function with the following signature:

```py
def make_empty_board()
```

The function uses nested lists to represent the board. That is, the first index of the list (index 0) holds a list of strings of size 3 (this represents row 1). The second index of the list holds another list of strings of size 3 (this represents row 2). And the last index of the list holds a final list of strings of size 3 (this represents row 3). Thus, we have a 3x3 grid created using nested lists. All strings should be blank (i.e., " ") since no players have marked the board yet.

Example:
```py
make_empty_board()  # This should return: [[" ", " ", " "],[" ", " ", " "],[" ", " ", " "]]
```

### **5b. Implement `print_board` (2 points)**

While 5a created a structure for storing the Xs and Os of our board using nested lists, we want a more visually pleasing way to see the board. Your task is to implement a function with the following signature:

```py
def print_board(board)
```

`board` is the 3x3 nested list structure. This function should print (not return) the board like in the examples in the `tic-tac-toe.py` description above. At this point, you can test your function on an empty board, like in Example 1, as well as a hard-coded board, like in Example 2.

Example 1:
```py
board = make_empty_board()
print_board(board)
```
```
   |   |
---+---+---
   |   |
---+---+---
   |   |
```

Example 2:
```py
board = [[" ", "X", " "],[" ", " ", " "],["O", " ", " "]]
print_board(board)
```
```
   | X |
---+---+---
   |   |
---+---+---
 O |   |
```

Hint: You may wish to use f-strings here.

### **5c. Implement `get_legal_row_or_col_num` (2 points)**

Now that we have a board, we're ready to start asking the players to mark the board. We need to ask the players where they would like to put their X or O. Your task is to implement a function with the following signature:

```py
def get_legal_row_or_col_num()
```

The function should prompt the player to enter a row/column number between 0 and 2 (inclusive). Why 0 and 2? Because 0 represents row/column 1, 1 represents row/column 2, and 2 represents row/column 3. Anything else would be off the grid. If the player enters an invalid row/column, they should be told that the number was not in range and then be asked to enter another number.

Example:
```
Please enter a row/column number: 5
Guess was not between 0 and 2.
Please enter a row/column number: -4
Guess was not between 0 and 2.
Please enter a row/column number: 1
```

Hint: Your implementation here should be very similar to `get_legal_guess` from `guess_number.py`.

### **5d. Implement `space_empty` (1 point)**

When a player enters a row and column, we need to make sure the square/location at (row, column) is emtpy. Your task is to implement a function with the following signature:

```py
def space_empty(board, loc)
```

`board` is the 3x3 nested list structure. `loc` is a tuple with two integers: row and column. The function should simply return `True` if `board` at `loc` equals " ". Otherwise, the function should return false.

Example 1:
```py
board = make_empty_board()
loc = (0,0)
space_empty(board, loc)         # This should return True
```

Example 2:
```py
board = [[" ", " ", " "],[" ", "X", " "],[" ", " ", " "]]
loc = (0,1)
space_empty(board, loc)         # This should return True
```

Example 3:
```py
board = [[" ", "X", " "],[" ", " ", " "],[" ", " ", " "]]
loc = (0,1)
space_empty(board, loc)         # This should return False
```

Hint: To index our nested list, we need to specify not 1 but 2 indexes (i.e., row and column). For example, if I wanted to print the element at row 0 and column 0 of ```list = [["a", "b"], ["c", "d"]]```, I would need to do ```print(list[0][0])```. This will output ```a```.

### **5e. Implement `get_legal_coordinate` (2 points)**

Now we're ready to get the actual location from the player. Your task is to implement a function with the following signature:

```py
def get_legal_coordinate(board)
```

The function should ask the player to select a row number (hint: call `get_legal_row_or_col_num()`), ask the player to select a column number (hint: call `get_legal_row_or_col_num()` again), and check if the location is empty (hint: call `space_empty()`). If the location is empty, return the row and column as a tuple (i.e., `(row, column)`). Otherwise, tell the user that the space is not empty and then repeat until they've input an empty location.

Example:
```py
board = [[" ", "X", " "],[" ", " ", " "],[" ", " ", " "]]
get_legal_coordinate(board)
```

```
Please enter a row number: 0
Please enter a column number: 1
That space is not empty.
Please enter a row number: 1
Please enter a column number: 1
```

Hint: `get_legal_row_or_col_num()` does NOT require a parameter (in fact, the autograder requires `get_legal_row_or_col_nums()` to work without any parameters). However, if you want to specify to the user when they should enter a row versus a column (like in the example above), you can tweak `get_legal_row_or_col_num()` to accept a string `prompt` with a default value (e.g., `get_legal_row_or_col_nums(prompt="Please enter a row/column number: )`). Then, in `get_legal_coordinate()`, you could pass either "Please enter a row number" or "Please enter a column number" as the prompt to overwrite the default prompt. This is not a requirement, but will make your program more user-friendly.

### **5f. Implement `update_board` (1 point)**

When a player marks the board, we need to update the board to contain this new marking. Your task is to implement a function with the following signature:

```py
def update_board(board, loc, player)
```

`board` is the 3x3 nested list structure and `loc` is a (row, column) tuple. `player` is a string that equals "X" for Player 1 and "O" for Player 2. This function should mark `loc` of `board` with `player` and return `board`.

Example:
```
board = make_empty_board()
loc = (0,0)
player = "X"
update_board(board, loc, player)
print_board(board)
```

```
 X |   |
---+---+---
   |   |
---+---+---
   |   |
```

Hint: This function should look similar to `space_empty`.

### **5g. Implement `has_won` (2 points)**

There are three ways to win: horizontally, vertically, or diagonally. This function should check all three ways of winning. Your task is to implement a function with the following signature:

```py
def has_won(board, player)
```

`board` is the 3x3 nested list structure and `player` is a string that equals "X" or "O". This function return `True` if any one of the following are true:
* the 1st row has all the same strings
* the 2nd row has all the same strings
* the 3rd row has all the same strings
* the 1st column has all the same strings
* the 2nd column has all the same strings
* the 3rd column has all the same strings
* the diagonal from top left to bottom right has all the same strings
* the diagonal from bottom left to top right has all the same strings

Otherwise, the function should return `False`.

Example 1:
```py
board = [["X", "O", "O"],["O", "X", " "],["X", " ", "X"]]
has_won(board, "X")        # This returns True
has_won(board, "O")        # This returns False
```

Example 2:
```py
board = [["X", "X", "O"],["O", "O", "X"],["X", "O", "X"]]
has_won(board, "X")        # This returns False
has_won(board, "O")        # This returns False
```

### **5h. Implement `get_winner` (1 point)**

While `has_won` checks if there is a winner, `get_winner` returns who won. Your task is to implement a function with the following signature:

```py
def get_winner(board)
```

The function should return 1 if Player 1 ("X") wins, return 2 if Player 2 ("0") wins, or 0 if no one wins.

Example 1:
```py
board = [["X", "O", "O"],["O", "X", " "],["X", " ", "X"]]
get_winner(board)       # This returns 1
```

Example 2:
```py
board = [["X", "X", "O"],["O", "O", "X"],["X", "O", "X"]]
get_winner(board)       # This returns 0
```

### **5i. Implement `one_turn` (1 point)**

We will now use the functions above to allow for one turn of play. Your task is to implement a function with the following signature:

```py
def one_turn(board, player)
```

The function should do the following (sequentially):
* Determine if the current player is Player 1 ("X") or Player 2 ("O"). That is, create some variable (let's call it `pnum`) and set it equal to 1 if `player` equals "X" or 2 if `player` equals "O".
* Print whose move it is (e.g., "Player 1 move:" or "Player 2 move:").
* Get the location of the board where the player will mark.
* Mark/update the board.
* Print the board.
* Return the game board and winner as a tuple.

Example:
```py
board = [["X", "O", "O"],["O", " ", " "],["X", " ", "X"]]
one_turn(board, "X")  # This returns ([['X', 'O', 'O'], ['O', 'X', ' '], ['X', ' ', 'X']], 1) if Player 1 enters row 1 and column 1 like below
```

```
Player 1 move:
Please enter a row number: 2
Please enter a column number: 2
 X | O | O
---+---+---
 O | X |
---+---+---
 X |   | X
```

### **5j. Implement `play_game` (2 points)**

Finally, it's time to play! Your task is to implement a function with the following signature:

```py
def play_game()
```

The function should start by creating an emtpy board. While there are still free spaces on the board and a winner has not been found, a turn of tic-tac-toe should be played. If there are no more free spaces and a winner has not been found, then "Tie!" should be outputted.

Example:
```
Player 1 move:
Please enter a row number: 1
Please enter a column number: 1
   |   |
---+---+---
   | X |
---+---+---
   |   |

Player 2 move:
Please enter a row number: 2
Please enter a column number: 1
   |   |
---+---+---
   | X |
---+---+---
   | O |

Player 1 move:
Please enter a row number: 1
Please enter a column number: 0
   |   |
---+---+---
 X | X |
---+---+---
   | O |

Player 2 move:
Please enter a row number: 1
Please enter a column number: 2
   |   |
---+---+---
 X | X | O
---+---+---
   | O |

Player 1 move:
Please enter a row number: 0
Please enter a column number: 0
 X |   |
---+---+---
 X | X | O
---+---+---
   | O |

Player 2 move:
Please enter a row number: 2
Please enter a column number: 2
 X |   |
---+---+---
 X | X | O
---+---+---
   | O | O

Player 1 move:
Please enter a row number: 2
Please enter a column number: 0
 X |   |
---+---+---
 X | X | O
---+---+---
 X | O | O

Player 1 Wins!
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
