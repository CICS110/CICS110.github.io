---
title: "HW 04: Branching"
---

# Branching

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

The aim of this homework assignment is to practice branching. The focus is on getting comfortable working with if, else and elif statements. Even though we implement functions in Python in this class, the skills developed in this assignment will be relevant for any modern programming language.

At its core, branching allows us to evaluate an expression and execute instructions depending on the outcome of the evaluation. Branching is one of the most important constructs in programming. Programs generally run sequentially, starting from the first instruction and then moving to the next instruction. Branching is used to allow some decision-making and controlling this flow in more complex ways.

Once again, be aware that you will be required to use the knowledge and skills you have acquired so far to succeed in this assignment. This includes defining functions, evaluating boolean expressions, evaluating arithmetic expressions, taking user input among others, working with f-strings and working with sequence types including lists and strings. You may want to review them before you proceed.

### Learning Objectives

1. Practice branching (if, else, elif).
2. Implement some simple applications using skills acquired so far.

### Estimated Size

This assignment requires you to implement $4$ Python files.

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

You must create four files in this folder. Make sure that you do not rename any of these files.

* `triangle.py`
* `wordle.py`
* `chipotle.py`
* `grade.py`

Remember that for every file you need to have comments indicating the authors at the, for example:
```py
# Authors   : Jared Yeager,         Tim Richards
# Emails    : jyeager@cs.umass.edu, richards@cs.umass.edu
# Spire IDs : 31415926,             27182818
```

The `# Author`/`# Authors`, `# Email`/`# Emails`, and `# Spire ID`/`# Spire IDs` are the only really necessary formatting details.

Some copying and pasting here will save you some time and sanity.

Note that these details are necessary for the auto-grader to recognize your solution.

## **1. Implement `triangle.py`**

In this problem, you will create functions that check the validity and type of triangles based on their side lengths and angle sizes. No worries if you don't remember the properties of triangles; we'll teach you what you need to know below.

### **1a. Implement `legal_triangle_angles`** (1 point)

A triangle has exactly three angles, and the sum of those angles is exactly 180 degrees. Your task is to implement a function that determines if a triangle is legal based on its three angles.

The function should have the following signature:

```py
def legal_triangle_angles(angle_A, angle_B, angle_C)
```

This function should return "triangle" if the angles create a valid triangle, and "not a triangle" otherwise. You may assume that each angle is an integer greater than 0.

Example:
```py
legal_triangle_angles(90, 55, 35)  # This should return "triangle"
legal_triangle_angles(90, 10, 20)  # This should return "not a triangle"
```

### **1b. Implement `legal_triangle_sides`** (1 point)

A triangle has exactly three sides and no side can be larger than the sum of the other two sides. For example, let's call the sides of a triangle a, b, and c. A triangle is legal if:
* a < b + c
* b < a + c
* c < a + b

Your task is to implement a function with the following signature:

```py
def legal_triangle_sides(side_a, side_b, side_c)
```

This function should return "triangle" if the sides create a valid triangle, and "not a triangle" otherwise. You may assume that each side is an integer greater than 0.

Example:
```py
legal_triangle_sides(3, 4, 5)   # This should return "triangle"
legal_triangle_sides(10, 4, 5)  # This should return "not a triangle"
```

### **1c. Implement `triangle_angle_type`** (1 point)

A triangle can be right, obtuse, or acute based on its angles.  A **right** triangle has an angle of 90 degrees. An **obtuse** triangle has an angle that's greater than 90 degrees. An **acute** triangle only has angles less than 90 degrees.

Your task is to implement a function with the following signature:

```py
def triangle_angle_type(angle_A, angle_B, angle_C)
```

This function should return the type of triangle based on its angles. Specifically, it should return one of "obtuse", "right" or "acute". You may assume that each angle is an integer greater than 0 and that the triangle is legal (i.e. all  angles sum to 180 degrees).

Example:
```py
triangle_angle_type(20, 90, 70)  # This should return "right"
triangle_angle_type(110, 35, 35) # This should return "obtuse"
triangle_angle_type(65, 55, 60)  # This should return "acute"
```

*Hint: A triangle is either right, obtuse, or acute. This is because of the property explained in `legal_triangle_angles`: the sum of all angles is exactly 180 degrees. The largest angle alone can tell you whether the triangle is right, obtuse, or acute.*

### **1d. Implement `triangle_side_type`** (1 point)

A triangle can be equilateral, isosceles, or scalene based on its sides.  An **equilateral** triangle has exactly three sides of equal size. An **isosceles** triangle has exactly two sides of equal size. A **scalene** triangle has all different side sizes.

Your task is to implement a function with the following signature:

```py
def triangle_side_type(side_a, side_b, side_c)
```

This function should return the type of triangle based on its sides. You may assume that each side is an integer greater than 0 and that the triangle is legal (i.e. no side is larger than the sum of the other two sides).

Example:
```py
triangle_side_type(2, 9, 7)     # This should return "scalene"
triangle_side_type(3, 3, 6)     # This should return "isosceles"
triangle_side_type(10, 10, 10)  # This should return "equilateral"
```

## **2. Implement `wordle.py`**

Anyone else addicted to Wordle? We are! And so is Google (try Googling Wordle and watch the Google logo change). If you've never played Wordle before, here's the rundown:

Wordle is a game of guessing words. You get 6 chances to guess a 5-letter word. If a letter is highlighted green, then that letter is in the word and in the correct spot. If a letter is highlighted yellow, then that letter is in the word but in the wrong spot. If a letter is highlighted grey, then that letter is not in the word in any spot.

For this task, you will create functions for building the Wordle game.

### **2a. Implement `get_guess`** (1 point)

The player will guess the correct word up to 6 times. Thus, we need a function that we can call each time we need the player to input a new guess.

Your task is to implement a function with the following signature:

```py
def get_guess()
```

The function should ask the player to input a guess. The inputted guess should then be converted to uppercase letters (hint: use `.upper()`) and returned. You may assume the player will input a word with at least 5 letters. However, in the case that the player was mistaken and inputted a word with more than 5 letters, you should "safeguard" the program such that the function only returns the first 5 characters (hint: think slicing).

Example:
If the player inputs "horse", "HORSE" should be returned.
If the player inputs "horse " (note the space at the end), "HORSE" should be returned.

### **2b. Implement `print_word`** (1 point)

The game should print back to the player the word in which they inputted. You may assume that `get_guess` has already converted the word to uppercase and made sure it is 5 letters in length. The `print_word` function should simply print (note that's print and not return) the word with spaces between each letter.

Example:
```py
print_word("HORSE")  # This should print "H O R S E"
print_word("TACOS")  # This should print "T A C O S"
```

Implement the function with the following signature:

```py
def print_word(word)
```

### **2c. Implement `exact_match_compare`** (2 points)

Now it's time to compare the guess to the correct word, letter-by-letter. Although Wordle flags letters that are in the word but not in the right spot, we will simplify the game for this assignment. We are only concerned about exact matches. That is, if a letter is in the word and in the correct spot (green), or if a letter is not in a word at all (grey). However, instead of using the color grey, we're going to use the color red to flag no match.

Your task is to implement a function with the following signature:

```py
def exact_match_compare(soln, guess)
```

It's best to start with an example before explaining. Below is an example of a player-terminal interaction.

```
Enter a guess:
horse
H O R S E
🔴🟢🔴🔴🔴
```

`get_guess` asked the player to enter a guess and `print_word` printed their guess in a more easily readable manner. `exact_match_compare` then compares the guess to the solution. The solution in this case is COULD (but obviously the player does not know this or else they would've guessed the word could). Comparing letter-by-letter, if two letters match, then the match is represented by a green circle. Otherwise, a red circle represents no match.

In the above example, C does not equal H so a red circle represents no match. O equals O so a green circle represents a match. U does not equal R so a red circle represents no match. And so on.

The function should return (not print) a string of red and green circles. The circles are nothing fancy - you can simply copy-and-paste them from the example above into your code. Remember to put the circles in quotes as they are strings.

*Testing: Use the following code to test the three functions you've created thus far. The output should be identical to the one shown above. Be sure to remove these lines before submitting as they may "break" the auto-grader.*
```py
solution = "COULD"
guess = get_guess()
print_word(guess)
print(exact_match_compare(solution, guess))
```

### **2d. Implement `one_turn`** (2 points)

In 2c, we gave you a snippet of code to test your functions thus far. A better idea would be to create a function that we can use to call these methods for us. Let's do that.

Your task is to implement a function with the following signature:

```py
def one_turn(soln)
```

Parameter `soln` is the solution. In addition to the function calls in the test snippet from `exact_match_compare`, you must also check if the player won the game. The player wins if their guess is equal to the solution. If the player wins, print "Congratulations" and call `exit()`, which will ensure that the program is done executing.

*Testing: Test your function by calling `one_turn("COULD")`. The output should be identical to the example in 2c.*

### **2e. Implement `make_solution`** (1 point)

So far, we've only tested our functions on one solution: COULD. We will now make a function that will randomly select a common 5 letter word as a solution.

Your task is to implement a function with the following signature:

```py
def make_solution()
```

The functions should randomly select a 5 letter word as the solution. To start off, you can use the following list of common five letter words:
```py
# https://www.unscramblerer.com/common-five-letter-words/
options = ["Which", "Their", "There", "Would", "Other", "These", "About", "First", "Could", "After"]
  ```

The function should randomly select a word from this list and return it in uppercase letters.

*Hint: Python has a `random` module that you can use. Import `random` at the top of your program after your heading comments. Then, you can use the `choice` method from `random` to randomly select an element from the list.*

*Testing: Test your function by playing the game! Use the code below for testing:*
```py
soln = make_solution()
one_turn(soln)
one_turn(soln)
one_turn(soln)
one_turn(soln)
one_turn(soln)
one_turn(soln)
print(f"Word was \"{soln}\", better luck next time.")
```

## **3. Implement `chipotle.py`**

We all love Chipotle, don't we? Have you ever ordered your favorite bowl or burrito from Chipotle? Have you wondered what the code behind the seemingly sophisticated-looking food ordering apps and websites is? Ask no more!

In this problem, you will implement a simple chipotle order processing script that will generate invoices for specified orders.

Note that this is probably the first time many of you will implement an 'application' in the sense that your code will solve a real-world problem. You will need to apply the skills acquired so far to implement this script. It may seem intimidating at a first glance, but you will definitely enjoy the process and hopefully embrace the power and utility of programming!

Let's first understand the setup of this problem. Think about how you would go about placing an order at Chipotle. We want customers to place an order by building their bowl/burrito. Then, we must calculate the price of the customer's order based on the ingredients they have selected. Customers may have discount codes, so we want to provide discounts based on the code the customer specifies in their order. We assume that the orders are for delivery, so we would want to provide the customers an estimate of when their order would be ready for pick up based on their location. Finally, we want to generate an invoice that includes all these details.

To make your job a little easier, we do not require you to build the orders. Instead, we will provide you a description of what an order looks like.

We represent an order using a Python list. Each element of the list represents a specific component in the order, as described below:

| Element      | Description         |
| -----------  | -----------         |
| 1            | Customer Name       |
| 2            | Customer Location   |
| 3            | Discount Code       |
| 4            | Choice of Protein   |
| 5            | Choice of Rice      |
| 6            | Choice of Beans     |
| 7            | Choice of Burrito   |
| 8 & beyond   | Choices of Toppings |

* All the elements are Strings except `7: Choice of Burrito` which is a boolean.
* Note that `''` is a valid list element and means that the customer did not request that element and so they should not be charged for that particular element.
* `Choice of Burrito` is `True` if the order is a burrito and `False` if the order is a bowl.
* Additionally, `3: Discount code` is always uppercase and may be `''` when the customer does not specify a discount code.

We provide you two sample orders to test your code.

```py
order1 = ['manan', 'holyoke', 'FLAT3', 'chicken', 'white', 'pinto', False, 'queso blanco', 'cheese', 'fajita veggies', 'sour cream']
order2 = ['allison', 'greenfield', 'MAGIC', 'carnitas', 'brown', 'black', True, 'cheese', 'fajita veggies', 'sour cream', 'guacamole', 'tomato salsa']
```
The examples provided below in the parts of this problem will reference these sample orders. Further, these sample orders DO NOT cover all possible test cases and hence, you must test your functions with your self-developed examples to make sure your code works as desired.

### **3a. Calculate price of the Protein** (1 point)

In this problem, you must determine the price of the protein in the order. The price list is described below:

| Protein   | Price |
| -------   | ----- |
| chicken   | $2.5  |
| steak     | $3.5  |
| barbacoa  | $3.5  |
| carnitas  | $3.0  |
| veggies   | $2.5  |
| no protein| $0    |

Your task is to implement a function with the following signature:

```py
def get_protein(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should return the price of the protein in `order`.

Example:
```py
get_protein(order1)    # This should return 2.5
get_protein(order2)    # This should return 3
```

### **3b. Calculate price of the Rice** (1 point)

In this problem, you must determine the price of the rice in the order. The price list is described below:

| Rice      | Price |
| -------   | ----- |
| white     | $2.5  |
| brown     | $3.5  |
| no rice   | $0    |

Your task is to implement a function with the following signature:

```py
def get_rice(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should return the price of the rice in `order`.

Example:
```py
get_rice(order1)    # This should return 2.5
get_rice(order2)    # This should return 3.5
```

### **3c. Calculate price of the Beans** (1 point)

In this problem, you must determine the price of the beans in the order. The price list is described below:

| Beans     | Price |
| -------   | ----- |
| black     | $2.5  |
| pinto     | $2.5  |
| no beans  | $0    |

Your task is to implement a function with the following signature:

```py
def get_beans(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should return the price of the beans in `order`.

Example:
```py
get_beans(order1)    # This should return 2.5
get_beans(order2)    # This should return 2.5
```

### **3d. Check if the order is a Burrito/Bowl** (1 point)

In this problem, you must determine if the customer wants a burrito or a bowl and charge them appropriately.

| Burrito   | Price |
| -------   | ----- |
| Yes       | $2.0  |
| No        | $0    |

Your task is to implement a function with the following signature:

```py
def is_burrito(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should return the price charged for the burrito in `order`.

Example:
```py
is_burrito(order1)      # This should return 0
is_burrito(order2)      # This should return 2
```

### **3e. Calculate price of the Toppings** (2 points)

In this problem, you must determine the price of the toppings in the order. Note that there may be any number of toppings in an order. The price list is described below:

| Topping                    | Price |
| -------------------------- | ----- |
| guacamole                  | $2.75 |
| tomato salsa               | $2.5  |
| chili corn salsa           | $1.75 |
| tomatillo green chili salsa| $2    |
| tomatillo red chili salsa  | $2    |
| sour cream                 | $2.5  |
| fajita veggies             | $2.5  |
| cheese                     | $2    |
| queso blanco               | $2.75 |
| no toppings                | $0    |

However, there are some things to note:

* If the protein in `order` is `veggies`, then `guacamole` (if requested) is free!
*  If the protein in `order` is `veggies`, then `fajita veggies` (if requested) is free!
* You can be assured that a specific topping won't be repeated in `order` i.e. you will not have the same topping more than once in `order`.

Your task is to implement a function with the following signature:

```py
def get_toppings(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should return the total price of all the toppings in `order`.

Example:
```py
get_toppings(order1)    # This should return 9.75
get_toppings(order2)    # This should return 12.25
```

*Hint: Consider using `in` to check if an element exists in a list. Look at the example below for reference.*
```py
print(1 in [1, 2, 3])                          #prints True
print('manan' in ['jared', 'kobi', 'allison']) #prints False
```

### **3f. Calculate Discount** (1 point)

In this problem, you must determine the discounted price if applicable. The codes list is described below:

| Code        | Discount              |
| ------------| --------              |
| MAGIC       | 5% off on total       |
| SUNDAYFUNDAY| 10% off on total      |
| FLAT3       | $3 off on total       |

Your task is to implement a function with the following signature:

```py
def apply_discount(order, total)
```

The function takes as arguments `order` which is a list as described in the problem statement and `total` which is the sum of the prices of all elements in the burrito/bowl (we usually call this subtotal). It should return the total price after the discount has been applied.

Example:
```py
apply_discount(order1, 17.25)  # This should return 14.25
apply_discount(order2, 23.25)  # This should return 22.0875
```

### **3g. Calculate Approximate Time** (1 point)

In this problem, you must determine the approximate time for order pick-up. Since this branch of Chipotle is located in Hadley, we have the following approximates:

| Location      | Time (min)            |
| ------------  | --------              |
| amherst       | 15                    |
| north amherst | 15                    |
| south amherst | 15                    |
| hadley        | 15                    |
| northampton   | 30                    |
| south hadley  | 30                    |
| belchertown   | 30                    |
| sunderland    | 30                    |
| holyoke       | 45                    |
| greenfield    | 45                    |
| deerfield     | 45                    |
| springfield   | 45                    |


Your task is to implement a function with the following signature:

```py
def approximate_time(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should return the approximate pick-up time for the order.

Example:
```py
approximate_time(order1)  # This should return 45
approximate_time(order2)  # This should return 45
```

### **3h. Generate Invoice** (2 points)

In this problem, you must generate an invoice based on the customer's order.

Your task is to implement a function with the following signature:

```py
def generate_invoice(order)
```

The function takes an argument `order` which is a list as described in the problem statement. It should print the order invoice (not return!) with the following specifications:

```
Welcome to Chipotle Mexican Grill Hadley, CUSTOMER_NAME.
Your invoice is displayed below:
Protein: PROTEIN - $PROTEIN_PRICE
Rice: RICE rice - $RICE_PRICE
Beans: BEANS beans - $BEANS_PRICE
Burrito: YES/NO - $BURRITO_PRICE
Toppings: TOPPING_1, TOPPING_2, TOPPING_3, .... TOPPING_N - $TOPPINGS_PRICE
Subtotal: $SUM_OF_ALL_ELEMENTS
Discount Code: CODE_NAME
Total: $PRICE_AFTER_DISCOUNT
You Save: $MONEY_SAVED
Your order will be ready for pickup in APPROX_TIME minutes."
Enjoy your meal and have a good day!
```

The words in CAPITALS must be substituted using `order` and functions created in $3a. - 3g.$

*Hint: Consider using f-strings here.*

*Hint: SUM_OF_ALL_ELEMENTS = PROTEIN_PRICE + RICE_PRICE + BEANS_PRICE + BURRITO_PRICE + TOPPINGS_PRICE*

*Hint: MONEY_SAVED = SUM_OF_ALL_ELEMENTS - PRICE_AFTER_DISCOUNT.*

*Hint: As suggested in assignment 3, you can use `", ".join()` to convert a list into a comma separated string.*

*Please adhere to the formatting guidelines. The auto-grader will fail if the formatting is not identical to the specified guidelines.*

To better understand this scheme, check out the following examples and trace on a paper what value is being substituted for each of the words in CAPITAL.

Example:
```py
generate_invoice(order1)
```

```
Welcome to Chipotle Mexican Grill Hadley, manan.
Your invoice is displayed below:
Protein: chicken - $2.5
Rice: white rice - $2.5
Beans: pinto beans - $2.5
Burrito: No - $0
Toppings: queso blanco, cheese, fajita veggies, sour cream - $9.75
Subtotal: $17.25
Discount Code: FLAT3
Total: $14.25
You Save: $3.0
Your order will be ready for pickup in 45 minutes.
Enjoy your meal and have a good day!
```

```py
generate_invoice(order2)
```

```
Welcome to Chipotle Mexican Grill Hadley, allison.
Your invoice is displayed below:
Protein: carnitas - $3
Rice: brown rice - $3.5
Beans: black beans - $2.5
Burrito: Yes - $2
Toppings: cheese, fajita veggies, sour cream, guacamole, tomato salsa - $12.25
Subtotal: $23.25
Discount Code: MAGIC
Total: $22.0875
You Save: $1.1625000000000014
Your order will be ready for pickup in 45 minutes.
Enjoy your meal and have a good day!
```

## **4. Implement `grade.py`**

Have you ever noticed the gradebook section on Moodle? How do you think the grades are determined for a class as big as CICS110? Think about how tedious this task can potentially be if we were to do it manually.

In this problem, you will implement a simple grade determination script that will calculate the final grade of a student, given their scores in different components of the class and instructor determined curve weights.

*Fun Fact: With some clever modifications, you can actually use this script to write another (perhaps simpler) script that can help you calculate your grade in this class!*

Let's first understand the setup of this problem.

Imagine a hypothetical iteration of CICS110. We specify the following requirements, with their overall contribution to the total grade.

| Component       | Total Number | Contribution |
| --------------- | ------------ | ------------ |
| Quizzes         |       10     |      10%     |
| Midterm         |        1     |      15%     |
| Final           |        1     |      15%     |
| Weekly HW       |       10     |      20%     |
| Project         |        3     |      20%     |
| Labs            |       10     |      10%     |
| Participation   |       10     |      10%     |

This should be interpreted as below:

* There are 10 quizzes worth 10% of your final grade.
* There is a project with 3 milestones worth 20% of your grade.
* And so on.

Here are some assumptions to simplify the problem:
* All Quizzes are equally weighted and no quiz is dropped.
* All HWs are equally weighted and no HW is dropped.
* All Project milestones are equally weighted and no milestone is dropped.
* All Labs are equally weighted and no lab is dropped.
* All Participation activities are equally weighted and no activity is dropped.

In addition, this iteration of CICS110 also follows the 4-point scale like we do!

| Grade           |         Description         |
| --------------- | --------------------------- |
| 1               |       Below Standards       |
| 2               |       Approaching Standards |
| 3               |       Meeting Standards     |
| 4               |       Exceeding Standards   |

To simplify this problem, we do not require you to build the gradebook. Instead, we provide you the scores. You simply need to calculate the weighted cumulative score and the final grade.

We represent a student using a Python list. Each element of the list represents a specific component, as described below:

| Element      | Description              |
| -----------  | -----------              |
| 1            | Student Name             |
| 2            | Student ID               |
| 3            | All Quiz Scores          |
| 4            | Midterm Score            |
| 5            | Final Score              |
| 6            | All HW Scores            |
| 7            | All Project Scores       |
| 8            | All Lab Scores           |
| 9            | All Participation Scores |

Here is how to interpret this:

* Student Name is a string.
* Student ID is an int.
* All Quiz Scores is a list of size $10$ containing ints each representing the score obtained in an individual quiz out of $100$ points.
* Midterm Score is an int representing the score obtained in the midterm exam out of $100$ points.
* Final Score is an int representing the score obtained in the final exam out of $100$ points.
* All HW Scores is a list of size $10$ containing ints each representing the score obtained in an individual HW out of $100$ points.
* All Project Scores is a list of size $3$ containing ints each representing the score obtained in an individual milestone of the project out of $100$ points.
* All Participation Scores is a list of size $10$ containing ints each representing the score obtained in an individual participation activity out of $100$ points.

We provide you with one sample student to test your code.

```py
student = ['Manan', 1, [100, 100, 50, 100, 100, 50, 100, 50, 50, 50], 75, 90, [100, 100, 50, 100, 100, 50, 100, 50, 50, 50], [75, 75, 100], [100, 100, 50, 100, 100, 50, 100, 50, 50, 50], [100, 100, 50, 100, 100, 50, 100, 50, 50, 50]]
```

The examples provided below in the parts of this problem will reference these sample orders. Further, these sample orders DO NOT cover all possible test cases and hence, you must test your functions with your self-developed examples to make sure your code works as desired.

### **4a. Compute 4-point score for Quizzes** (1 point)

In this problem, you must determine the 4-point Quizzes score of the student. You must aggregate the scores across all quizzes and then follow the points distribution below:

| Total Score in Quizzes | 4-point Score |
| ---------------------- | --------      |
| 0 - 250                | 1             |
| 251 - 500              | 2             |
| 501 - 750              | 3             |
| 751 - 1000             | 4             |


Your task is to implement a function with the following signature:

```py
def compute_quizzes(quiz_scores)
```

The function takes as an argument `quiz_scores` which is a list of size 10 containing ints each representing the score obtained in an individual quiz out of $100$ points. It should return the 4-point score of the student in Quizzes.

Example:
```py
compute_quizzes([100, 100, 50, 100, 100, 50, 100, 50, 50, 50])  # This should return 3
compute_quizzes([0, 0, 50, 100, 100, 50, 0, 50, 0, 50])  # This should return 2
```

### **4b. Compute 4-point score for the Midterm** (1 point)

In this problem, you must determine the 4-point Midterm score of the student. The points distribution is described below:

| Total Score in Midterm | 4-point Score |
| ---------------------- | --------      |
| 0 - 20                 | 1             |
| 21 - 45                | 2             |
| 46 - 80                | 3             |
| 81 - 100               | 4             |


Your task is to implement a function with the following signature:

```py
def compute_midterm(midterm_score)
```

The function takes as an argument `midterm_score` which is an int representing the score obtained in the midterm exam out of $100$ points. It should return the 4-point score of the student on the Midterm.

Example:
```py
compute_midterm(50)  # This should return 3
compute_midterm(87)  # This should return 4
```

### **4c. Compute 4-point score for the Final** (1 point)

In this problem, you must determine the 4-point Final score of the student. The points distribution is described below:

| Total Score in Final   | 4-point Score |
| ---------------------- | --------      |
| 0 - 25                 | 1             |
| 26 - 50                | 2             |
| 51 - 75                | 3             |
| 76 - 100               | 4             |


Your task is to implement a function with the following signature:

```py
def compute_final(final_score)
```

The function takes as an argument `final_score` which is an int representing the score obtained in the final exam out of $100$ points. It should return the 4-point score of the student on the Final.

Example:
```py
compute_final(50)  # This should return 2
compute_final(87)  # This should return 4
```

### **4d. Compute 4-point score for HWs** (1 point)

In this problem, you must determine the 4-point HWs score of the student. You must aggregate the scores across all HWs and then follow the points distribution below:

| Total Score in HWs     | 4-point Score |
| ---------------------- | --------      |
| 0 - 330                | 1             |
| 331 - 440              | 2             |
| 441 - 650              | 3             |
| 651 - 1000             | 4             |


Your task is to implement a function with the following signature:

```py
def compute_homework(hw_scores)
```

The function takes as an argument `hw_scores` which is a list of size 10 containing ints each representing the score obtained in an individual HW out of $100$ points. It should return the 4-point score of the student in HWs.

Example:
```py
compute_homework([100, 100, 50, 100, 100, 50, 100, 50, 50, 50])  # This should return 4
compute_homework([0, 0, 50, 100, 100, 50, 0, 50, 0, 50])  # This should return 2
```

### **4e. Compute 4-point score for Project** (1 point)

In this problem, you must determine the 4-point Project score of the student. You must aggregate the scores across all Project milestones and then follow the points distribution below:

| Total Score in Milestones | 4-point Score |
| ----------------------    | --------      |
| 0 - 150                   | 1             |
| 151 - 210                 | 2             |
| 211 - 270                 | 3             |
| 271 - 300                 | 4             |


Your task is to implement a function with the following signature:

```py
def compute_project(proj_scores)
```

The function takes as an argument `proj_scores` which is a list of size $3$ containing ints each representing the score obtained in an individual Project milestone out of $100$ points. It should return the 4-point score of the student in Project.

Example:
```py
compute_project([75, 75, 100]) # This should return 3
compute_project([0, 75, 100])  # This should return 2
```

### **4f. Compute 4-point score for Labs** (1 point)

In this problem, you must determine the 4-point Labs score of the student. You must aggregate the scores across all Labs and then follow the points distribution below:

| Total Score in Labs       | 4-point Score |
| ----------------------    | --------      |
| 0 - 250                   | 1             |
| 251 - 500                 | 2             |
| 501 - 750                 | 3             |
| 751 - 1000                | 4             |

Your task is to implement a function with the following signature:

```py
def compute_lab(lab_scores)
```

The function takes as an argument `lab_scores` which is a list of size 10 containing ints each representing the score obtained in an individual Lab out of $100$ points. It should return the 4-point score of the student in Labs.

Example:
```py
compute_lab([100, 100, 50, 100, 100, 50, 100, 50, 50, 50]) # This should return 3
compute_lab([0, 0, 50, 100, 100, 50, 0, 50, 0, 50])  # This should return 2
```

### **4g. Compute 4-point score for Participation** (1 point)

In this problem, you must determine the 4-point Participation score of the student. You must aggregate the scores across all Participation activities and then follow the points distribution below:

| Total Score in Milestones | 4-point Score |
| ----------------------    | --------      |
| 0 - 250                   | 1             |
| 251 - 400                 | 2             |
| 401 - 600                 | 3             |
| 601 - 1000                | 4             |

Your task is to implement a function with the following signature:

```py
def compute_participation(part_scores)
```

The function takes as an argument `part_scores` which is a list of size 10 containing ints each representing the score obtained in an individual Participation Activity out of $100$ points. It should return the 4-point score of the student in Participation Activities.

Example:
```py
compute_lab([100, 100, 50, 100, 100, 50, 100, 50, 50, 50]) # This should return 4
compute_lab([0, 0, 50, 100, 100, 50, 0, 50, 0, 50])  # This should return 2
```

### **4h. Compute Weighted Cumulative Score** (2 points)

In this problem, you must determine the weighted cumulative score of the student across all components of the course.

Your task is to implement a function with the following signature:

```py
def get_cumulative(student)
```

The function takes as an argument `student` which is a list of lists representing a student and their scores in all components of the class as described in the problem statement (Please check how the list is formatted in the setup section). It should return weighted cumulative score of the student.

*Hint: For quizzes, weighted_score_quizzes = (4-point-score-quizzes/4) * weight_quizzes_in_final_grade. You need to do this for each component.*

*Hint: cumulative_weighted_score = weighted_score_quiz + weighted_score_labs + weighted_score_HWs + weighted_score_midterm + weighted_score_final + weighted_score_Project + weighted_score_Participation*

Example:
```py
get_cumulative(student) #This should return 86.25
```

### **4i. Compute Final Grade** (2 points)

In this problem, you must determine the final grade of the student using the cumulative score and grade scale.

Your task is to implement a function with the following signature:

```py
def determine_grade(cumulative_score, weights)
```

The function takes as arguments `cumulative_score` which is a float that stores the weighted cumulative score of the student and `weights` which is a list that stores the thresholds for grade boundaries. It should return the final grade of the student based on the specified grade boundaries.

We format `weights` as follows:

| Element      | Description              |
| -----------  | -----------              |
| 1            | Lower boundary for A     |
| 2            | Lower boundary for A-    |
| 3            | Lower boundary for B+    |
| 4            | Lower boundary for B     |
| 5            | Lower boundary for B-    |
| 6            | Lower boundary for C+    |
| 7            | Lower boundary for C     |
| 8            | Lower boundary for C-    |
| 9            | Lower boundary for D     |

Otherwise, the student gets an 'F'.

To test, we specify the following grade boundaries:

```
weights_1 = [93, 90, 87, 84, 80, 77, 74, 70, 66]
weights_2 = [97, 94, 91, 88, 85, 82, 79, 76, 73]
```

As an example, we can interpret `weights_1` as follows: Anything $\geq$ 93 should get a 'A', anything $< 93$ but $\geq 90$ should get an 'A-' and so on. Notice that this will vary according to the values in the argument `weights` and so your code should not hard-code values, but perform these comparisons in terms of the indices of the elements of `weights`.

Example:
```py
get_cumulative(86.25, weights_1) #This should return 'B'
get_cumulative(86.25, weights_2) #This should return 'B-'
```

### **4j. Print Grade Report** (1 point)

Finally, you must print the grade report for the user.

Your task is to implement a function with the following signature:

```py
def print_report(student, weights)
```

The function takes as arguments `student` which is a list of lists representing a student and their scores in all components of the class as described in the problem statement (Please check how the list is formatted in the setup section) and `weights` which is a list that stores the thresholds for grade boundaries. It should print (not return!) the following:

```
Name: STUDENT_NAME
Cumulative: WEIGHTED_CUMULATIVE_SCORE
Final Grade: FINAL_GRADE
```

The words in CAPITALS must be substituted using `student` and functions created in $4a. - 4i.$

*Hint: Consider using f-strings here.*

To test, we specify the following grade boundaries:

```
weights_1 = [93, 90, 87, 84, 80, 77, 74, 70, 66]
weights_2 = [97, 94, 91, 88, 85, 82, 79, 76, 73]
```

Example:
```py
print_report(student, weights_1)
```
```
Name: Manan
Cumulative: 86.25
Final Grade: B
```
```py
print_report(student, weights_2)
```
```
Name: Manan
Cumulative: 86.25
Final Grade: B-
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
