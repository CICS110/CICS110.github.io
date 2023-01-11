---
author: Ben Burns
sidebar_position: 8
---

# Getting Unstuck
When coding, we often either
- Get stuck in the middle of coding a particular section, without knowing how to proceed
- Don't even know how or where to start

Even once we're done with a section, there are three main ways something can go wrong:
- The code isn't doesn't compile or interpret successfully
- The code compiles, but an error is produced while it's running
- The code compiles and runs, but doesn't do what we want it to 

In any case, it can be hard to determine where our problem is or even where to start when making a fix. 
This isn't something that goes away! It's something we continuously learn to manage as programmers.

This guide serves to help you get unstuck. 

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
1. Identify which step you are having trouble with. Are you having trouble figuring out how to solve the problem, or are you stuck on how to translate your algorithm into source code. 
2. Formulate a specific question about what you need help with
3. Make a Piazza post, or ask for help in Office Hours

Step 2 is by far the most helpful for us. If you say "I am stuck on Todo 2", we have to essentially walk you through this process to figure out how to help you. Questions we'd love to answer are
- I'm having trouble with developing an algorithm to solve Todo 2, specifically with `x`.
- I know how to solve Todo 3, but I'm having trouble converting this step of my algorithm into Python code.

## Stuck in the Middle
If you get stuck in the middle of coding a section, there are often two things that can be causing the block:
1. You aren't sure what the next step in your algorithm is 
2. You aren't sure how to convert the next step of your algorithm into code

If you're finding yourself stuck because you don't know the next step in your algorithm, take a break from coding and try to write out your entire algorithm. Psuedocode and control-flow diagrams are both very useful in outlining your full algorithm. In either case, if you're still stuck, see the [Asking for Help](#asking-for-help) section above. 

Another reason you can get stuck in the middle of a section is that you have come up with a solution, but are stuck on how to write an ***efficient*** or "clean" solution. 
Our suggestion here is that you either
1. Finish your current implementation, and then go back and tidy up specific sections.
2. Restart entirely. Run through your algorithm top to bottom before you start to code anything, and look for things you can fix. 

The first suggestion often works better if your algorithm is solid, but you weren't quite sure the best way to implement one part of the algorithm.
The second suggestion is better for cleaning up an inefficient algorithm. 

:::tip
This is not something that goes away! Even as advanced programmers, we will get halfway through coding a section, and think 
> Well, I know how I can finish this function, but it's going to end up really messy. Do I restart, or will this be manageable to tidy up later?

This is a balancing act that you will get better at handling the more complicated problems you tackle.
:::

## Compilation Problems
Once we're done coding, there are two main types of errors we can get, 
- Compilation or interpretation errors: the source code we've written isn't valid Python
- Runtime errors: our source code is valid, but the code performs an unexpected action while running

In VSCode for Python, there is a program called the [linter](https://code.visualstudio.com/docs/python/linting). 
The linter reads through our code, looking for syntax or style issues.

How to fix a problem detected by the linter will obviously depend on the problem, but the linter broadly categorizes problems.
VSCode will display issues detected by the linter by drawing a squiggly line under the problematic code segment.
The color of the squiggly line will change depending on what type of problem was detected:
- A red underline signifies an error. The linter will produce an error if thinks there is a bug in your code. 
- A green underline signifies a warning. Warnings mostly appear under functions names we have misspelled, under variables we declare and never use, or under variables we attempt to use before they are declared.
- A blue underline signifies information. In python, this usually means the code segment will run fine, but is bad practice, or is "old" python.

In any case, if you hover over the underlined code, the error, warning, or information message will appear, often times indicating what you need to fix:

<div style={{textAlign: 'center'}}>
  <img 
    src={require('./error-message.png').default} 
    alt="Example warning message"
  />
</div>

:::info
What your linter considers an error, warning, or information will depend on what linter you install. Find more information on linter messages [here](https://code.visualstudio.com/docs/python/linting#_pylint). The VSCode Python extension uses Pylint by default.
:::

:::tip
The underline colors listed above are the **default** colors. Your theme may change the color of the underlines. 

If you are red-green or green-red color deficient, I highly recommend changing your warning underline color from green to a different color. I use yellow. For a guide on how to do change your warning colors, see the [Change Linter Colors](vscode/linter-colors) guide.
:::


## Unexpected Errors 
this section will still have content of how to parse an error message:
- what file 
- what line
- multiple nested calls
- what's the error
- error message 

See the [Common Errors guide](./common-errors) on how to approach various specific errors. 
## Unexpected Output
See the debugger article, how to logically identify what part of the program has the problem