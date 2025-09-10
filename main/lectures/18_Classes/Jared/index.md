---
title: Section 04 (Jared Yeager)
---

# Classes and Object-Oriented Programming

We've managed to dodge around this subject long enough,
but the time has come to face the final demon at the heart of the python language's design:
classes.

## What are Classes?

Types.

### No, Really?

Yeah, types. In python, classes and types are the same thing.

<details>
<summary><b>Extra: In Python ... ?</b></summary>

There are other language, such as Java, where there are
"primitive types" (such as `int` and `bool`, if memory serves)
and "classes" as two distinct things.
The difference between the two is roughly that classes can have methods and fields of other types,
and primitive types do not.

There are languages like C, where there are no classes as all.
C pretty much just has the primitive types and bundles thereof.

Some languages like SML have this cool datatype machinery for
making new compound types.

But in python, types and classes are the same thing.
It might be more technically accurate to say that all types are classes in python,
as classes in python match the more inter-language notion of classes,
whereas the types in python are not like the primitive types elsewhere.

</details>

Look at the return of the `type()` function:

```py live_py title=Type
print(f"type of 31415 : {type(31415)}") # <class 'int'>
print(f"type of None  : {type(None)}")  # <class 'NoneType'>
print(f"type of 'foo' : {type('foo')}") # <class 'str'>
```

Notice how the prints all contain the word **class**?
Python itself certainly doesn't seem to feel there is an appreciable difference.
The existence of the two different terms has more to do with history and the
mechanics of other languages.

## What are Objects?

Specific **things** of some type.

### But, Actually?

Objects are to classes what a `5` living in memory is to `int`.
Objects are specific *instances* of a type/class.

If we take the class `int`, then specific ints like `4`, `-345`, `0`, etc.
that live and exist in memory are objects.
If we take the class `list`,
then specific lists like `[3, 6, -1]`, `["foo", "bar"]`, `[]`, etc.
that live and exist in memory are objects.

## What is Object-Oriented Programming?

Object oriented programming is a language design paradigm and a programming paradigm
that centres around classes and objects.
That main characters and considerations are the objects.
The objects are able to change/be changed by their methods.
Objects and methods serve as the main nouns and verbs (respectively) of OOP.

There are class-specific functions called *methods*,
which require a specific object to invoke them via `object_var_name.method_name(args)`.
There are class-specific variables called *fields*,
which require a specific object to reference them via `object_var_name.field_name`.
It's all about the object, its *attributes* (methods and fields),
and using the methods to alter the fields.

A lot of stuff we've done could be done in a more object-oriented programming-y manner.
For example, a game of tic-tac-toe could have a `TicTacToeGame` class,
with a specific instance/object representing a single game.
Each object would have its own board (the class would have a board field),
and there would be methods to do things like update the board and check the state of it.

The class is basically a blueprint for internals of the objects,
determining what they have information-wise (what fields/variables they have)
and what they can do (what methods they have).

## Making Classes

So, how do we make one of these classes?
As a running example,
we'll first make a "dog" that "barks" and give it a name.

A class is declared like so:

```py
class ClassName:
  METHODS
```

The `class` keyword, followed by a name for the class
(I'll be using a camel-case convention for class names, though that is not necessary),
followed by a `:`, followed by code (which will be explored in subsequent sections).

Once a class has been declared, you can make an object of that class with the
function call `ClassName()`. (Remember creating empty sets with `set()`? Same deal.)

So a rudimentary class declaration for our dog class could look like:

```py live_py title=Dog
class Dog:
  pass # a do-nothing for now

spot = Dog()
print(f"Spot is a {type(spot).__name__}")        # Dog
print(f"Spot is a dog? {isinstance(spot, Dog)}") # True
```

## Making Methods

We want our objects to be able to **do things**.
We want `spot.bark()` to make `spot` "bark".

Making a method is almost exactly like making a function,
except it is inside the class declaration,
and the first argument must be a special argument that is used to refer
to the object that invoked the method
(`spot` is the invoking instance in our above example).
This argument is generally named `self`.

That needs an example before we can start digesting it.
So here's the `Dog` class from earlier except with a `bark()` method.

```py live_py title=Dog_Bark
class Dog:
  def bark(self):
    print("Woof!")

spot = Dog()
spot.bark()    # object perspective, "self" is implicitly spot
Dog.bark(spot) # class perspective, "self" is explicitly spot
```

The `bark()` method takes in `self`, which won't be used yet. But what **is** self.
Well, when we call `spot.bark()`, then `bark()` is run with `self` as `spot`.
If we did `fido.bark()`, then `bark()` would be run with `self` as `fido`.

This can be made more explicitly visible by writing `spot.bark()` in what I assume
is closer to its true form: `Dog.bark(spot)`, which now needs the "invoking instance"
specified explicitly.

## Initialisation

There are number of special method names that have special meanings/roles.
The only one we must contend with in this lecture is `__init__`.
This is special method know as the *constructor*,
and governs how the object is initialised.
If we want to initialise a class in any way other than the default manner,
we can implement the `__init__()` method.

We can have the `__init__()` method take any arguments we want as well.
For example, the name of the dog.
Any arguments that `__init__()` takes (beyond `self`)
will need to be provided to the `Dog()` call.

For example:

```py live_py title=Dog_Init
class Dog:
  # Constructor takes in name
  def __init__(self, name):
    print(f"Hello {name}!")

  def bark(self):
    print("Woof!")

# Name provided to constructor
spot = Dog("Spot") # __init__ run here
spot.bark()
```

## Instance Variables

That's cute and all,
but it would be good if the name could be more permanently associated with the dog.
Well, objects can have instance variables,
so something like `spot.name` would give us the name associated with `spot`.

But in the internals of the class definition, how do we reference and alter `spot.name`?
Well, whenever `spot` is the invoking instance of a method,
`self` is `spot` in the method call.
It turns out that `self.name` thus works to affect that instance's `name` field.

```py live_py title=Dog_Name
class Dog:
  def __init__(self, name):
    # save the name on initialisation
    self.name = name

  def bark(self):
    # print name on bark for our sake
    print(f"Woof! (I'm {self.name}!)")

spot = Dog("Spot")
fido = Dog("Fido")
# We can reference the field directly from the objects
print(f"spot.name: {spot.name}")
print(f"fido.name: {fido.name}")
# The field can also be used in other methods
spot.bark()
fido.bark()
```

So finally: we have our class/type `Dog`. It's objects will have an instance variable `name`,
which is set by the constructor. We also have a method that lets the dog `bark()`.
And this sort of encapsulates all of the core machinery for making classes.

<details>
<summary><b>Extra: Class Variables</b></summary>

:::warning

This is really quite subtle and confusing.

:::

There is another concept called a class variable.
The way that class variables behave is much more subtle.

They are associated with the **class itself**.

Moreover, in a scope-y way,
objects can reference a class variable and shadow it with instance variables.
It functions almost like a default, shared between instances.

This is something to probably steer clear from unless you feel quite comfortable that
you know what you are doing.

Here is the code I use to experiment and see how it all works:

```py live_py title=Class_Variable
class A:
  val = 0

  def update(self, v):
    self.val = v

x = A()
y = A()
z = A()
# x, y, and z all see the class variable
print(f"A.val: {A.val} lives at {id(A.val)}")
print(f"x.val: {x.val} lives at {id(x.val)}")
print(f"y.val: {y.val} lives at {id(y.val)}")
print(f"z.val: {z.val} lives at {id(z.val)}")
print("*** UPDATE: x,y ***")
# x and y get instance variables that shadow the class variable
x.val = 2
y.update(3)
print(f"A.val: {A.val} lives at {id(A.val)}")
print(f"x.val: {x.val} lives at {id(x.val)}")
print(f"y.val: {y.val} lives at {id(y.val)}")
print(f"z.val: {z.val} lives at {id(z.val)}")
print("*** UPDATE: A ***")
# class variable changes, z still sees class variable
A.val = 5
print(f"A.val: {A.val} lives at {id(A.val)}")
print(f"x.val: {x.val} lives at {id(x.val)}")
print(f"y.val: {y.val} lives at {id(y.val)}")
print(f"z.val: {z.val} lives at {id(z.val)}")
```

```py live_py title=Class_Variable_Mut
class A:
  val = []

  def update(self, v):
    self.val.append(v)

x = A()
y = A()
z = A()
# x, y, and z all see the class variable
print(f"A.val: {A.val} lives at {id(A.val)}")
print(f"x.val: {x.val} lives at {id(x.val)}")
print(f"y.val: {y.val} lives at {id(y.val)}")
print(f"z.val: {z.val} lives at {id(z.val)}")
print("*** UPDATE: x,y,z ***")
# x and y update the class variable
x.val.append(3)
y.update(1)
# z gets an instance variable that shadows the class variable
z.val = [3, 1, 4]
print(f"A.val: {A.val} lives at {id(A.val)}")
print(f"x.val: {x.val} lives at {id(x.val)}")
print(f"y.val: {y.val} lives at {id(y.val)}")
print(f"z.val: {z.val} lives at {id(z.val)}")
print("*** UPDATE: A ***")
# class variable changes, x and y still see class variable
A.val = [2, 7, 1]
print(f"A.val: {A.val} lives at {id(A.val)}")
print(f"x.val: {x.val} lives at {id(x.val)}")
print(f"y.val: {y.val} lives at {id(y.val)}")
print(f"z.val: {z.val} lives at {id(z.val)}")
```

</details>

## Examples

I presume a couple more examples would be beneficial, or at least not detrimental.

### Tally Counter

A [tally counter](https://en.wikipedia.org/wiki/Tally_counter) class
would be a fairly minimal example that uses all of these pieces.

We would need to track an internal counter (call it `counter`),
and we would want that counter initialised to `0`.
We would also want to be able to increment the counter
(call that method `click()`, as though we are clicking the button).

That could look like this:

```py live_py title=Tally_Counter
class TallyCounter:
  def __init__(self):
    self.counter = 0

  def click(self):
    self.counter += 1

clicker = TallyCounter()
clicker.click()
clicker.click()
clicker.click()
print(f"count: {clicker.counter}")
```

### Tic Tac Toe Game

For an example that is much more plausible in code we might actually write,
but a tad more complex, let's look at tic tac toe.

As far is internal information we want to store, the board itself seems appropriate.

As far as initialisation goes, the board should be empty.

There are no shortage of possible useful methods,
but for the purposes of making in minimal working example
I'll just do printing and updating the board.

```py live_py title=Tic-Tac-Toe
class TicTacToeGame:
  def __init__(self):
    self.board = [[" "," "," "],[" "," "," "],[" "," "," "]]

  def print_board(self):
    b = self.board
    print("+---+---+---+")
    print(f"| {b[0][0]} | {b[0][1]} | {b[0][2]} |")
    print("+---+---+---+")
    print(f"| {b[1][0]} | {b[1][1]} | {b[1][2]} |")
    print("+---+---+---+")
    print(f"| {b[2][0]} | {b[2][1]} | {b[2][2]} |")
    print("+---+---+---+")

  def update_board(self, loc, player):
    self.board[loc[0]][loc[1]] = player

game = TicTacToeGame()
print("Turn 0:")
game.print_board()

game.update_board((1,1), "X")
print("\nTurn 1:")
game.print_board()
```
