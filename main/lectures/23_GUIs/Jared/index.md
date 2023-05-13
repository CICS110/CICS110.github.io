---
title: Section 04 (Jared Yeager)
---

# Events and GUIs

I've never really made a GUI (Graphic User Interface),
much less worked with Python's tkinter module.
So while the first half of these notes will be pontifications about the
abstract notion of events, the second half is going to be more of a travel log
following my attempt to learn the basics of tkinter.

## Events

Consider the following snippet of code.
Run it, interact with it a bit, and feel how it responds/reacts to you.

```py
while True:
  inp = input(">>> ")
  if inp == "quit":
    break
  print(f"Text: {inp}\n")
```

When we, not as programmers, but as casual users, interact with programs;
there is this abstract view of that interaction as "us doing something,
and the program reacting/responding".

For example:
* In that above program: we enter some text, and then it is repeated back to us.
* In video games: we press buttons on a controller, the character moves.
* My writing this in a text-editor: I press a butting on my keyboard,
a letter appears in my text editor.
* We swipe a mouse or a finger across a track pad, a cursor moves.

There are so many cases where a computer/program waits for us to do something,
we do something, and the computer/program responds/reacts.
* We talk about the "doing something" as an *event*
* We talk about the reacting as *handling* the event,
* And we talk about the process of doing this over-and-over as an *event loop*.

And this outlook of "we do a thing, the computer/program reacts" is
the view we want to have in mind when trying to think about *graphic user interfaces*
(GUIs).

## GUIs

A *graphic user interface* (GUI) is a more aesthetically pleasing (graphic)
presentation of the program for the user to interact with (an interface).

After all, when we use programs in our everyday life, we don't do it through a terminal,
we have some sort of GUI presented to us.
GUIs are essential for a more user-friendly presentation of the program,
but they are something of a dragon for us to wrestle with and to get to a pleasing state.

We'll look at a sometimes-built-in Python module for making primitive GUIs,
tkinter, to get the of what making a GUI can look like.
We'll give our GUI some simple functionality,
bearing in mind the notion that ultimately we want
the user to be able to do something/*trigger* an event (e.g., click a button in the GUI),
and the program to react to/handle that event (e.g., increase a counter).

### tkinter module

We'll be working with Python's tkinter module.
So let's start where we always should, with the smallest possible working example.

GUIs have a notion of *windows*,
a displayed region presenting information and functionality for the program.
The *front-end* we like to say (as opposed to the *back-end* or guts of the program/app).

So the most minimal GUI would be an empty window. Code for that will be:

```py
from tkinter import Tk

window = Tk()

window.mainloop()
```

This code imports the `Tk` class, which is then used to make a window.
It then calls the `mainloop()` method, which displays/pops-up the window.

There is a lot that can be done to customise the window
(far more than I know, see official documentation or deeper guides).
But for our purposes, we'll just give it a title and set the size.

```py
from tkinter import Tk

window = Tk()
window.title("My App")
window.geometry("640x480")

window.mainloop()
```

The `title()` method sets the title, note the "My App" name on the title bar.

The `geometry("640x480")` method call sets the size of the window (excluding the title bar).
It seems to take in a string of the form `"WIDTH_IN_PIXELSxHEGHT_IN_PIXELS"`.
*Pixels* are a sort of "smallest element of an image".

### Labels

Next step, let's display some information.
For the sake of making small working examples, let's go for a "Hello, World!" in GUI land.

In tkinter world, labels seem to be the text-based entity. So we can make and place a label:

```py
from tkinter import Tk, Label

window = Tk()
window.title("My App")
window.geometry("640x480")

label = Label(text="Hello World!", font=("Helvetica", 64, "bold"))
label.place(x=320, y=100, anchor="center")

window.mainloop()
```

The label constructor can take many things, but we use:
* `text`, the text we want displayed
* `font`, information about the font of the text being displayed

That defines the label, but we still need to place it in our window.
This is done with the `place()` method.

The coordinate system needs some explanation.
In the world of graphics,
it is common to see the upper-left corner be considered $(0,0)$ (the origin).
This intuition comes from what it would look like if you printed a 2D `n`-by-`m` list:
* `lst[0][0]` would be in upper-left
* `lst[0][m-1]` would be in upper-right
* `lst[n-1][0]` would be in lower-left
* `lst[n-1][m-1]` would be in lower-right

So placing at `x=320, y=100` is placing at 320 pixels from the left,
and 100 pixels down from the top.
And this is where the anchor (in this case the centre) of the label is placed
(the default anchor is upper-left corner of a rectangle around the text).

### Buttons

Finally, we can start trying to make this application something the user can interact with.
We'll start by adding a button, the basics of which parallel adding the label.

The eventual goal of the button will be to increase a counter.
So we'll create something to track that counter (I'll explain why a dictionary later),
and change the label accordingly.

```py
from tkinter import Tk, Label, Button

window = Tk()
window.title("My App")
window.geometry("640x480")

state = {"count": 0}

label = Label(text=f"Count: {state['count']}", font=("Helvetica", 64, "bold"))
label.place(x=320, y=100, anchor="center")

button =  Button(text="Increase Count", font=("Helvetica", 32))
button.place(x=320, y=300, anchor="center")

window.mainloop()
```

Now, The button exists and is clickable, but it doesn't actually do anything.
Considering the event-based worldview, clicking the button is an event,
and what we need to do is set an event handler for that event.

We do this by defining a function that is to be run when the button is clicked and
then specifying that function as the event handler in the `Button()` constructor.

```py
from tkinter import Tk, Label, Button

window = Tk()
window.title("My App")
window.geometry("640x480")

state = {"count": 0}

label = Label(text=f"Count: {state['count']}", font=("Helvetica", 64, "bold"))
label.place(x=320, y=100, anchor="center")

def increase_count():
  state['count'] += 1
  label["text"] = f"Count: {state['count']}"

button =  Button(text="Increase Count", font=("Helvetica", 32), command=increase_count)
button.place(x=320, y=300, anchor="center")

window.mainloop()
```

The reason that a `state` dictionary was used was so that fields of it (e.g., count)
could be edited in the `increase_count()` function without risk of shadowing the variable.

But there it is, a sort of minimal GUI application, that can handle events from a user
and can display information to that user.
