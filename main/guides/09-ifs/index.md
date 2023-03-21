---
authors: Emerson, Erfan
---

# If Statements

When writing code, it's important to be able to translate your logic and problem-solving skills into code that a computer can understand. One common tool for this is the "if statement," which allows you to execute different blocks of code depending on a specific condition. In this guide, we'll cover how to take your logical thinking and turn it into if statements that can be used in your code.

## Motivation

Up until this point, our programs are a linear recipe: do `x`, then do `y`, and so on. This is great for some tasks, but sometimes we don't always want a certain procedure to run. For example, let's say I wanted to pack my backpack for the day. A program to pack my backpack might look something like the following:

```python
pack_laptop()
replace_snacks()
pack_umbrella()
refill_water()
```

But what happens if I don't *always* want to pack the same things? Maybe I only need to pack snacks if it's a Monday, when I have a bunch of classes, and not on a Tuesday when I have more free time? Maybe I only want to bring my umbrella if I think it's going to rain and it's not too windy, and if it's windy and raining I pack a raincoat?

This is the goal of a *conditional statement*, also refered to as an *if statement*. Conditionals let us mark a section of code and say "only run this if condition `x` is true". So for example, if it is Monday, replace my snacks.

## Writing an If Statement

**Step 1: Identify the condition.** The first step in converting logic into if statements is to identify the condition or situation that needs to be checked. For example, if you're trying to determine whether a user has entered a valid password, the condition might be whether the password contains at least one uppercase letter, one lowercase letter, and one number.

**Step 2: Determine the action(s).** Once you've identified the condition, you need to determine what action(s) should be taken if the condition is true or false. For example, if the user has entered a valid password, you might allow them to log in to their account. If the password is invalid, you might display an error message and prompt them to enter a new password.

**Step 3: Write the if statement.** Now that you have identified the condition and actions, it's time to write the if statement. The basic syntax for an if statement is as follows:

```python
if (condition):
    # code that only runs if condition is True
# more code that runs independent of if condition is True of False
```

## Multiple Conditions

In some cases, you may need to check multiple conditions in order to make a decision. For example, I might want to pack an umbrella if I have class today and it's raining outside. I only want to pack my umbrella if *both conditions* are true. In these cases, you can use logical operators such as `and` and `or` to combine conditions:

```python
if is_raining and has_class:
    pack_umbrella()
```

## Else Statements

It's fairly common to want to make a "this-or-that" type decision. For example, let's say I just got out of class. If I'm hungry, I'll go to the dining hall, otherwise I'll head to the library. This is the utility of the *else* statement:

```python
if hungry:
    go_to_woo()
else:
    go_to_du_bois()
```

<!-- ## Nesting If Statements and Branching

## Elif statements -->

## If statement examples

Below are some practice problems using branching code. Below each problem we have included an example solution, which walks through the logical approach to the problem and how to convert that solution into code.

> Problem 1: Write a function that takes in floats representing the length and width of a rectangle, and prints “square” if it is a square, or prints “not square” if it is not a square.

The first step here is to find important details in the problem. You can often find the different branches you’ll need in the prompt itself. Here we can see two cases, either

1. print “square” if it is a square
2. print “not square” if it is not a square

We can take the language of the prompt and directly turn it into psuedocode:

```psuedocode
if it is a square:
    print “square”
if it is not a square:
    print “not square”
```

Now, given the length and width, how do we know if the rectangle we're given is a square? If the length and width are equal! And we have operators for that, “==” and “!=”.

```pseudocode
if length == width:
    print(“square”)
elif length != width:
    print(“not square”)
```

Finally, note that `length == width` and `length != width` are opposite cases, we can can just use an if else statement rather than an elif:

```pseudocode
if length == width:
    print(“square”)
else:
    print(“not square”)
```

> Problem 2: A school has following rules for grading system:
>
> - below 60 - F
> - 60 to 69 - D
> - 70 to 79 - C
> - 80 to 89 - B
> - Above 90 - A
>
> Ask the user to enter their number grade, print out their corresponding letter grade.

Let's rewrite the problem statement, with the conditions we want to check in bold, and the corresponding code we want to run in italics.

A school has following rules for grading system:

- **below 60** - *(print) F*
- **60 to 69** - *(print) D*
- **70 to 79** - *(print) C*
- **80 to 89** - *(print) B*
- **Above 90** - *(print) A*

Ask the user to enter their number grade and print the corresponding letter.

In other words, we want to make a conditional check on the user's grade, and then print that letter. We can check the various letters in any order, but the two ways that make the most sense are to go in ascending or descending order.

Here’s the pseudocode, again using language pulled directly from the problem:

```pseudocode
if(number grade is below 60):
    print F
elif(number grade is 60 to 69):
    print D
elif(number grade is 70 to 79):
    print C
elif(number grade is 80 to 89):
    print B
elif(number grade is above 90):
    print A
```

We’ll need to find the right comparison operators to use here. Which ones check if a number is greater than or less than another number? `>` and `<`. We’ll also need a variable to actually compare against the threshold grades, which we know from the problem is an input from the user. I’ll call it `user_grade`.

```python
user_grade = int(input(“what’s your grade?”))

if user_grade < 60:
    print(“F”):
elif user_grade < 70:
    print(“D”):
elif user_grade < 80:
    print("C")
elif user_grade < 90):
    print("B")
else:
    print(“A”)
```

A good question to ask is, why don't we need to check both sides of the range when we're checking `B`, `C`, and `D`? For example, why don't we check `(user_grade >= 60 and user_grade < 70)` for “D”?

The reason being is, if we have gotten to the first `elif` statement, the condition in the `if` must have been `False`. So, by the time we get to “D”, we know that the first if didn’t pass, so `user_grade` must not be less than 60. Therefore we know that, if we are checking the condition on the fifth line, `user_grade` must be greater than or equal to 60. It wouldn’t be wrong to include the extra check, but this ends up much neater.
