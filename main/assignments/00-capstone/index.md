# Capstone Project

## About

During the semester, you utilized programming fundamentals to solve various real-world problems. Now, it is your chance to select a real-world problem that you find interesting and solve it by applying everything you have learned throughout the semester. To complete this capstone project, you will work in **groups of 2-3 students**. While you are free to choose any project you desire, your implementation must satisfy the following **16 requirements**.

### Requirements:

* Implemented in Python.
* In addition to the usual header comments (authors, emails, and spire IDs), include comments throughout the code to explain what the code is doing. You don't need a comment for every line of code, but you should add a comment for every function and every large chunk of code (e.g., loops, branching, etc.).
* Include variables of various data types (e.g., integers, floats, sequence data types, etc.). You must use at least one of the following sequence data types: list, tuple, or set.
* Include a dictionary and retrieve a value by key from the dictionary.
* Include expressions that involve operators, variables, and constants (e.g., x >= 10).
* Use at least 2 of the following: logical and, logical or, or logical not.
* Include casting between data types (e.g., int(user_response), where user_response is a string).
* Create and use a module (i.e., rather than having one giant python file, your code should be organized into modules such that there is a main file that imports modules).
* Code should be able to handle reasonable invalid inputs (e.g., inputting text instead of numbers, files in the wrong format, etc.) You may wish to use a try/except to do this.
* Include at least 5 functions that you have created and called elsewhere in the code.
* Include branching logic. You must use at least one if-elif-else statement.
* Use assert statements to test your branching logic.
* Include looping. You must use at least one for loop AND at least one while loop. The while loop must include a break statement and/or a continue statement inside the loop.
* Include a comprehension for at least one of the following: mapping or filtering.
* Include logic for working with a file You must read from and/or write to a file. The file could be a text file or a csv file.
* Create and use a class with at least two methods (*we will discuss classes in lecture soon*).

## Assignment

There are **6 steps** to this project. Below is a timeline for all parts. **All deadlines are hard deadlines, meaning tokens cannot be used and no late submissions will be accepted**.

### Submission Timeline

* **Project Proposal & Plan:** April 28th (11:59pm) via Gradescope
* **Implementation:** May 10th (11:59pm) via Moodle
* **Poster Presentation:** submissions are due May 15th (11:59pm) via Moodle; presentations are during the last class (May 16th if you’re in a Tu/Th section or May 17th if you’re in a Mo/We section)
* **Reflection:** May 19th (11:59pm) via Moodle
* **Peer Grading:** May 19th (11:59pm) via Moodle

### Step 1. Select a Real-World Problem

By no means do we expect you to solve life’s biggest challenges. You don’t have to find a cure for cancer or dominate the AI chatbot race. The key here is to select a problem that is interesting to you and **IS MANAGEABLE TO SOLVE BEFORE THE CAPSTONE DUE DATE**. You must also be able to solve your problem using **ALL** of the required concepts/skills listed above. We highly encourage you to discuss your project idea with your instructor and/or lab TA. **You must propose your project idea by April 28th (11:59pm) via Gradescope**. 

Here are some example project ideas:
* Calendar application for scheduling meetings (similar to YouCanBook.me)
* Gradebook system for tracking deadlines, student grades, token usage, etc.
* Item finder on a coordinate system (along the lines of the Battleship game)

### Step 2. Make a Plan

Before you start programming, you should plan out your solution. You don’t have to create a sophisticated plan, and your plan doesn’t have to be flawless (you should expect to face some hurdles during implementation). Rather, you should list the main steps you will need to take to solve the problem. For example, each homework question that you solved this semester was broken down into several parts (a, b, …). Each part was one step to solving the main problem. In doing this, we turned a large problem (like “implement Wordle”) into several smaller and more manageable problems (like “get guess” and “complete one turn”). You should think about what steps you will need to take and what functions you will need to create to complete those steps. **When you propose your project idea on Gradescope on April 28th (11:59pm), you will be asked to include your plan**.

Below is an example project plan for Wordle. Note how we tried to flag the main functions, loops, branchings, try/excepts, etc. **You don’t have to have every item in the requirements list flagged in your project plan, however, you should aim to have most items in there** (see Grading Scale below). You must have all requirements in your final implementation. In your plan, **you must also include at least one decision tree diagram** that reflects a core branching component of your project.

#### Project Plan Example

```
Group Members (and section #):
Allison Poh (section 5)
Tim Richards (section 5)

Project Title:
Wordle Clone

Project Idea:
We want to recreate Wordle to allow players to play multiple games in one day.

Project Plan:
We expect our implementation to have 6 functions:
1. A function for generating a solution that randomly selects a 5-letter word. We will create a list of 5-letter words by searching on the Web. We will use python’s built-in module random to randomly select one of these words from the list.
2. A function for getting user input that asks the user to enter a 5-letter guess. We will use the input function and a try/except to make sure their input is valid. If the input is invalid, the user will need to enter another guess, so we will also use a loop here.
3. A function for printing a guess back to the user. Printing involves turning all letters to capitalization and adding a space between each letter for better readability.
4. A function for comparing a guess to the solution. The function should compare the two words letter-by-letter. This will require a loop. Branching will be used in the loop to determine what symbol to print based on if the letters are correct or incorrect (green = correct, red = incorrect).
5. A function that calls all of the above functions, imitating one turn of the game. 
6. A function that calls the one turn function up to 6 times (because there are 6 attempts allowed). The function will additionally check if the game should be over (i.e., if a player won).

Decision Tree Diagram:
<you are required to have at least one decision tree diagram in this write-up>

Group Member Roles:
Allison will work on functions for generating a solution, getting user input, and printing a guess back to the user
Tim will work on a function for comparing a guess to a solution
We will then work together to create a function for one turn, and a function for calling one turn up to 6 times
```

Use the following template for your project plan: [Project Proposal and Plan Template](https://docs.google.com/document/d/1y7_xBo04OH3TemiqWVUKlNjVqWmQox0DDe6-JZQs8Rg/edit?usp=sharing). You need to replace all of the red text. Before submitting, be sure to change the font color back to black.

#### Project Plan Grading Scale

* **1: Below Standards:** Project Plan is incomplete and mentions very few requirements
* **2: Approaching Standards:** Project Plan mentions at least **25%** of the requirements
* **3: Meeting Standards:** Project Plan mentions at least **50%** of the requirements and **includes at least one decision tree diagram**
* **4: Exceeding Standards:** Project Plan mentions at least **80%** of the requirements and **includes at least one decision tree diagram**

### Step 3. Implement a Solution Using Python

**Start early and collaborate often**. If you get stuck, first ask your group members for help. You can visit any course staff’s office hours for additional help, but do note that we do not have the solution to every problem in the world. We can help you conceptually, but we won’t be able to answer “Why doesn’t this work?” without any context. **Implementation is due May 10th (11:59pm) via Moodle**.

Pair programming can be challenging to manage, but there are several tools that can help your group work effectively. The simplest version control tool that we can offer you is Gradescope. As many of you know, Gradescope saves your submission history, allowing you to jump back to past submissions (i.e., versions) of your code. If you tag your group members for each submission, then all group members should be able to see the full version history. You can use **Capstone Project Sandbox** in Gradescope for this purpose. A more conventional approach to version control is using [Github](https://github.com/). This is definitely a more advanced and sophisticated version control technique than Gradescope, but it's worth checking out if you want to learn a widely used tool. Github can be integrated with VSCode (see [Working with GitHub in VSCode](https://code.visualstudio.com/docs/sourcecontrol/github)). **You are not required to use either of these techniques.**

### Step 4. Present

**You will present your project during the last class (May 16th if you’re in a Tu/Th section or May 17th if you’re in a Mo/We section)**. The presentation is **MANDATORY**; only those with an extenuating circumstance (documentation required) may be excused. Your group will create one poster that shows off the most important details about your project. A poster can be created in PowerPoint or Google Slides, but IT IS NOT A SLIDE SHOW. Rather, a poster is a visual aid that explains your project using text, screenshots, diagrams, etc., in one condensed slide. In academic conferences, posters are printed on large paper and displayed on boards or walls for researchers to present. Although we aren’t going to print the posters, you are still required to create the poster as if we were to print them (that is, no more than one slide). See this example poster for the Wordle problem: [Wordle Poster Presentation](https://docs.google.com/presentation/d/1UvUEwaWcnwyteh_3mMN1XzQ8O_FNTVNQrvArtZomnF0/edit?usp=sharing). You may use this poster as a template if you wish.

During the last class, you are expected to have your poster and project code ready on your laptop (remember to charge your laptop if you’re in a classroom with few outlets). Groups will walk around the room and listen to other groups present their projects. In this way, you will not be standing in front of the entire class and presenting. Rather, you will be presenting multiple times to different groups in a less formal and more conversational manner. We expect the listeners to ask questions and engage with the presenters. All groups will both present and listen to other groups throughout the poster presentation session. **Every student will grade 3 peer projects during the poster presentations** (see Peer Grade below).

### Step 5. Peer Grade

You will **INDIVIDUALLY** grade 3 randomly assigned peer projects. The grading rubric can be found at the end of this page. During the poster presentations, you will be given a handout to record your thoughts about peer projects. You will not know which groups you are grading beforehand so be sure to listen and record notes for all groups. You will then need to transcribe your thoughts into Moodle for 3 randomly assigned groups (note: you will be able to see the code files for the groups your grading on Moodle). The Moodle submission should be completed immediately after the poster presentations (while things are fresh in your mind) but **we’ll accept submissions until May 19th (11:59pm)**.

### Step 6: Reflect

The reflection is **INDIVIDUAL**. It is required but will be graded based on completion and thoroughness. Do not tell us what you *think* we want to hear. Rather, give your *honest reflection* on your project. The reflection questionnaire will become available on Moodle after the poster presentations and will be **due by May 19th (11:59pm)**.


## Grading Scale
Each person will individually grade 3 peer projects during the poster presentations. The grading rubric will be added here by April 21st.