# Getting Unstuck
When coding, we often either
- Get stuck in the middle of coding a particular section, without knowing how to proceed
- Don't know where to start

Even once we're done with a section, there are three main ways something can go wrong:
- The code isn't doesn't compile or interpret correctly
- The code compiles, but an error is produced while it's running
- The code compiles and runs, but doesn't do what we want it to 

In any case, it can be hard to determine where our problem is or where to even start when making a fix. 
This isn't something that goes away! It's something we continuously learn to manage as programmers.

This guide servers to help you get unstuck. 

## How to start
Sometimes the hardest part of coding, especially when we're learning a language for the first time, is figuring out where to even start. There are two main steps to writing successful code: 
1. Developing an algorithm to solve the problem
2. Figuring out how to code our algorithm

### Example
Let's say I give you three numbers, and ask you which of the three is the smallest. For example, I give you the numbers `[3,7,1]`, and you need to determine somehow that 1 is the smallest. 

First, we develop an algorithm: 
1. Compare the first two numbers, and keep the smaller of the two. 
2. Compare the two remaining numbers, and tell me the smaller of the two. 

With our `[3,7,1]` example, we first compare 3 and 7. 3 is smaller, so we throw out 7. Then we compare 3 and 1, and say "1 is smallest."

Now that we've developed an algorithm, we just have to translate our algorithm into Python code. The easiest way to do this is to take the algorithm you've written, and put it in your source file as comments:
```python
# 1. Compare the first two numbers, and keep the smaller of the two. 
# 2. Compare the two remaining numbers, and tell me the smaller of the two.
```
and then writing our code in between the comments:
```python
# 1. Compare the first two numbers, and keep the smaller of the two. 
smaller = min(number1, number2)
# 2. Compare the two remaining numbers, and tell me the smaller of the two.
our_min = min(smaller, number3)
print(f'{our_min} is smallest.')
```

### Asking for help
If you are stuck with how to start, 
1. identify which step you are having trouble with. Are you having trouble figuring out how to solve the problem, or are you stuck on how to translate your algorithm into source code. 
2. Formulate a specific question about what you need help with
3. Make a Piazza post, or ask for help in Office Hours

Step 2 is by far the most helpful for us. If you say "I am stuck on Todo 2", we have to essentially walk you through this process to figure out how to help you. Questions we'd love to answer are
- I'm having trouble with developing an algorithm to solve Todo 2, specifically with `x`.
- I know how to solve Todo 3, but I'm having trouble converting this step of my algorithm into Python code.

## Common Errors
### `IndexError`
`IndexError` means we are trying to access an element of an index collection, like a String or list, but that index is outside the range of the collection. 

For example, if I have the String `'test'`, `e` is the 2nd character at index 1. However, if I try to access index 4, that would mean accessing the 5th character of the String, which doesn't exist. Therefore attempting to access index 4 will result in an `IndexError`:
```python
>>> 'test'[4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
```

### `EOFError`
`EOF` stands for "end of file". Your computer stores all of its files in binary, and your hard drive is just a continuous String of 1s and 0s. So your computer to know where one file ends and another starts, there is a special character called the "end of file character" or `EOF`. 

If the Python interpreter reads an `EOF` character in a place it doesn't expect, it returns an `EOFError`. This typically happens in one of two ways:
1. The Python interpreter hits the end of your Python source file unexpectedly. This can happen if you write a loop with no content in it (more recent python versions return an `IndentationError`, but zyBooks will often return `EOFError`. If you'd like to know why, make a Piazza post asking about it `:D`)
2. Your Python tries to read more input than it is given. For example, say your python code checks the first 5 lines of a file. If the file has 4 lines total, Python tries to read the 5th line and sees the `EOF` character. This is unexpected behavior, so it returns an `EOFError`.