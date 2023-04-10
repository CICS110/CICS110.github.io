---
title: Section 04 (Jared Yeager)
---

# File I/O

Files are containers for storing information that live on our computers.
(And I/O just stands for Input/Output.)

That definition isn't very elucidating.
But the ability to store information beyond the life of our programs can be quite useful.

Some things files help with:
* Giving lots of automatic input:
Instead of typing a bunch of input and capturing it with the `input()` function,
we can write all that input in a file and have to program read that file.
* Having non-hard-coded data structures:
Imagine our program has some big lookup table in it.
Instead of hard-coding it in the python script, we can have the information written in a file.
The script could then load and read that file to build the lookup table.
This makes it a lot easier to edit that table in the future,
and makes the code more modular (easier to swap out parts without breaking other parts).
* Saving and loading information:
If you program wants some information to persist
across runs of the program, it can write information to a file
and load it again when re-launched. For instance, saving progress in a video-game.
* Working with new types of stuff:
Files have many different types.
So while we will be exploring text and spreadsheet-like file types,
files give us the ability to work with things like images, audio, and video.

By the way, given that code that uses files needs those files to exist in
a reference-able manner, like with modules, the code examples
for this lecture can't really be made in a web-runnable way.

## Basic I/O

For our purposes, there are 4 basic things we will do with files:
* Open them: We need to open files before we can do anything with them.
* Close them: We should close files when we are done with them.
* Read from them: We may want to read the contents of a file.
* Write to them: We may want to write content to a file.

There are aptly named functions for each of these.

As an example that uses all of these, we'll aim to read a
file named `words.txt`, reverse the lines of that file, and
write those to a file named `rev_words.txt`.

If you want to follow along, I recommend making/opening a sandbox project and
making a file named `words.txt`. The contents of my `words.txt` for testing are:
```
Apple
Banana
Cherry
Durian
```

### `open(file_name, mode)`

The first step when working with files is to open the file.

The function for this is the `open()` function.
This takes in two argument.
The first is a string with name of the file to open.
The second is a string indicating what *mode* to open the file in.

The basic modes (examples will come later):
* `"r"` (read mode): Opens the file for reading.
If the file does not exits, an error occurs.
* `"w"` (write mode): Opens the file for writing.
If the file does not exits, it is created.
If the file already has content, **that content is erased** (or "*truncated*").
* `"a"` (append mode): Opens the file for writing.
If the file does not exits, it is created.
If the file already has content, writing occurs **after** the existing content.

`open()` will return an object of a special type for files.

So, for our example, we want to reverse the lines of `words.txt`
and put that in `rev_words.txt`.
The former is being read from, and the latter being written to
(and we aren't updating it/appending to it),
that's read and write mode respectively.

The code for that so far is (with some extra prints):

```py
read_file = open("words.txt", "r")
print(read_file)

write_file = open("rev_words.txt", "w")
print(write_file)
```

Doesn't do much yet, although it will make an empty `"rev_words.txt"`.
From those prints, we can see we're definitely getting something new type-wise
out of `open()`:

```
<_io.TextIOWrapper name='words.txt' mode='r' encoding='UTF-8'>
<_io.TextIOWrapper name='rev_words.txt' mode='w' encoding='UTF-8'>
```

### `.close()`

Closing files is good practice.

The computer has to do a bit of book-keeping for every open file.
Closing the file frees up the space that was used for the
book-keeping associated with that files.
At our scale it doesn't really matter, but it's good to adopt the instinct early.

This is done with the `.close()` method.

I also recommend closing the file as soon as you can.
With proper and early closing of files, the outline of our code becomes:

```py
read_file = open("words.txt", "r")
# READ FILE
read_file.close()

write_file = open("rev_words.txt", "w")
# WRITE REVERSED LINES
write_file.close()
```

### `.read()`

Let's actually **do** something now.

There are a few different methods for reading from files.

The most generic that will work for all files is `.read()`.
This will just return the whole file as one long string.

```py
read_file = open("words.txt", "r")
text = read_file.read()
read_file.close()

print(text) # 'Apple\nBanana\nCherry\nDurian' 
```

Note that in the example I have for `words.txt`, the last line doesn't have a
newline after it. I deliberately did that so we would need to worry about/think about
the ramifications of that. Often there is a newline after the last line,
but that's not a guarantee we have.

So what are out other options?
A common thing we might want to do is split the file into lines
(which we want to do in our example too).
One of the read methods for text files, `.readlines()`, returns a list of strings,
one string for each line.
The newline characters will still be there, but they can be removed with a comprehension
and the `.strip()` method.

```py
read_file = open("words.txt", "r")
lines = read_file.readlines()
read_file.close()

print(lines)       # ['Apple\n', 'Banana\n', 'Cherry\n', 'Durian']

clean_lines = [line.strip("\n") for line in lines]
print(clean_lines) # ['Apple', 'Banana', 'Cherry', 'Durian']
```

Another option is the `.readline()` (singular) method.
This reads one line from the file each call,
and returns it as string (with the newline character).
It returns `''` when it has reached the end of the file.

```py
read_file = open("words.txt", "r")

while True:
  line = read_file.readline()
  if line == "":
    break
  print(line.strip("\n"))

read_file.close()
```

Finally, forget that, you can straight-up iterate over the file.

```py
read_file = open("words.txt", "r")

for line in read_file:
  print(line.strip("\n"))

read_file.close()
```

That's a lot of options, so what should we use?

If it was a big file and I wanted to process it line-by-line,
I'd go for for the for-loop approach.

If it was a smaller file and I wanted to do something less suited to iteration
(like reversing the order of lines), I would want one of the bulk-read approaches.
I find all the the newline stuff annoying and like to get rid of the whole thing.
For my money, `.read()` combined with the `.splitlines()` method
(turns a string into a list of strings based on newlines)
feels like the nicest way to do it.

So `.read().splitlnes()` it is for reading `words.txt`.
As for reversing that list of lines, slicing is overpowered:

```py
read_file = open("words.txt", "r")
lines = read_file.read().splitlines()
read_file.close()

print(lines)       # ['Apple', 'Banana', 'Cherry', 'Durian']
print(lines[::-1]) # ['Durian', 'Cherry', 'Banana', 'Apple']

write_file = open("rev_words.txt", "w")
# WRITE REVERSED LINES
write_file.close()
```

### `.write(content)`

Finally, writing to a file is done with the `.write()` method.
This takes in a string to write to the file and writes it.

For our reversing lines example, I have the reversed list of lines as strings,
I just need to join them together with newlines to get the final string to
write to `rev_words.txt`.
Well, this is exactly what that weird `.join()` string method does.

This gives us the solution:

```py
read_file = open("words.txt", "r")
lines = read_file.read().splitlines()
read_file.close()

write_file = open("rev_words.txt", "w")
write_file.write("\n".join(lines[::-1]))
write_file.close()
```

There is also a `.writelines()` method for text files.
This takes in an iterable of strings and writes each to the file.
Note: it does not add newlines to these string,
they must have newlines at the end already.

So if we were guaranteed that the last line of the file had a newline at the end of it,
and we wanted the last line of `rev_words.txt` to have a newline it the end of it,
this would be a very elegant solution:

```py
read_file = open("words.txt", "r")
lines = read_file.readlines()
read_file.close()

write_file = open("rev_words.txt", "w")
write_file.writelines(lines[::-1])
write_file.close()
```

### Write vs. Append

I promised some examples on opening in write mode vs append mode.
Write mode and append mode function the same on empty files (they make a new one).
So it suffices to restrict out consideration to when a file already exists.

When writing to a file that already exists, the old content is truncated.

```py
# File is made
write_file = open("more_words.txt", "w")
write_file.write("Long ago,\n")
write_file.write("In a distant land,\n")
write_file.write("I ... \n")
write_file.close()

# File is over-written
over_write_file = open("more_words.txt", "w")
write_file.write("Over-wrote the past.")
write_file.close()
```

When the above code is run, the final content of `more_text.txt` will be:

```
Over-wrote the past.
```

Because, opening up `more_text.txt` in write mode erases
all the stuff that was originally written to it.

When appending to a file that already exists, the old content is left alone,
with new content being added afterwards.

```py
# File is made
write_file = open("more_words.txt", "w")
write_file.write("Long ago,\n")
write_file.write("In a distant land,\n")
write_file.write("I ... \n")
write_file.close()

# File is appended to
append_file = open("more_words.txt", "a")
append_file.write("Astonishingly, did not violate causality.")
append_file.close()
```

When the above code is run, the final content of `more_text.txt` will be:

```
Long ago,
In a distant land,
I ... 
Astonishingly, did not violate causality.
```

Because, opening up `more_text.txt` in append mode
adds new stuff to the existing stuff.

### `with` and `as`

The worrying about closing files business is a tad annoying.
Worse, if some weird error occur while processing the file,
then we may not be able to properly close it
(rather, we'd need try-excepts and error handling to make sure it closes).

There is special syntax that lets us open a file in a way that will automatically close it,
even with error shenanigans:

```py
with open(arguements...) as file_var_name:
  code_block
```

We have:
* The keyword `with`.
* The `open()` call for how we want to open the file.
* The keyword `as`.
* The variable name `file_var_name`, which hold the opened file.
* The colon (`:`).
* The code block (`code_block`), which may make use of the variable `file_var_name`

I think you can probably guess what this does, but: It opens the file, saves it in
`file_var_name`, runs `code_block`, and closes the file at the end (or if an error occurs).

With this, out earlier reverse-file-lines solution can be refactored like so:

```py
with open("words.txt", "r") as read_file:
  lines = read_file.read().splitlines()

with open("rev_words.txt", "w") as write_file:
  write_file.write("\n".join(lines[::-1]))
```

## Files in Other Places

All of this has been based on the idea that the file being opened is in
the same folder as the code you are running. This won't always be the case.

### Directory Hierarchy

We need a brief interlude about the *file system* on computers,
how the system is structured/"where files are"
(in the model, where they actually are is a much more complicated story).

Your computer has *folders* (also called *directories*) and *files*.
There is a top-level/root folder somewhere,
but you won't need to worry about that one beyond the fact that it exists.
Within each folder there may a combination of files and more folders.

In particular, there is some folder that your python script is in, and (for our purposes)
that will serve as the starting location that your code looks for files in.

So here an example of some files somewhere in a file system (explained below):

```
CICS 110
|-- about.txt
|-- notes
|   |-- lecture_01.txt
|-- sandbox <-- ** HERE **
    |-- files
    |   |-- bar
    |   |   |-- baz.txt
    |   |-- foo.txt
    |-- main.py
    |-- words.txt
```

What does all this mean:
* There is a `CICS 110` folder.
* Within that `CICS 110` folder is the file `about.txt` and the folders `notes` and `sandbox`.
* Within that `notes` folder is the file `lecture_01.txt`.
* That `sandbox` folder is the open project in VSCode, for the purposes of this example.
* Within that `sandbox` folder are the files `main.py` (our script) and `words.txt` and
the folder `files`.
* Within that `files` folder is the file `foo.txt` and the folder `bar`.
* Within that `bar` folder is the file `baz.txt`.

[Example from earlier with `words.txt`]

So if we wanted `main.py` to just read and print the contents of the file `words.txt`,
we just do that as before:

```py
with open("words.txt", "r") as read_file:
  contents = read_file.read()
  print(contents)
```

### Children

Running example for reference:

```
CICS 110
|-- about.txt
|-- notes
|   |-- lecture_01.txt
|-- sandbox <-- ** HERE **
    |-- files
    |   |-- bar
    |   |   |-- baz.txt
    |   |-- foo.txt
    |-- main.py
    |-- words.txt
```

What if we wanted `main.py` to open `foo.txt`?
We might try this:

```py
with open("foo.txt", "r") as read_file: # ERROR
  contents = read_file.read()
  print(contents)
```

This throws an error indicating the file doesn't exist.
`main.py` is going to look for a file named `foo.txt` in
it's current directory (`sandbox`), which indeed does not have a `foo.txt` file.

We need to say "go to the `files` folder, and get the file `foo.txt`".
We write that as `files/foo.txt`.

```py
with open("files/foo.txt", "r") as read_file:
  contents = read_file.read()
  print(contents)
```

And these slashes can be chained. So for instance,
"go to `files`, go to `bar`, get `baz.txt`" is `files/bar/baz.txt`.

```py
with open("files/bar/baz.txt", "r") as read_file:
  contents = read_file.read()
  print(contents)
```

### Parent

Running example for reference:

```
CICS 110
|-- about.txt
|-- notes
|   |-- lecture_01.txt
|-- sandbox <-- ** HERE **
    |-- files
    |   |-- bar
    |   |   |-- baz.txt
    |   |-- foo.txt
    |-- main.py
    |-- words.txt
```

So we can go down, but what about up? What if we wanted to
say "go to `CICS 110`, get `about.txt`". Well, since `CICS 110` isn't in
`sandbox` we can't quite do that.

We can say "go **up**, get `about.txt`".
We write that as `../about.txt`,
where the `..` is a special reference for the parent directory.

```py
with open("../about.txt", "r") as read_file:
  contents = read_file.read()
  print(contents)
```

Make sure to use `../about.txt`, and not `./about.txt`.
The single dot is a special reference to the current directory
(so `./words.txt` would be the same file as `words.txt`).

```py
with open("./words.txt", "r") as read_file:
  contents = read_file.read()
  print(contents)
```

And again, chaining is possible. "go up, go to `notes`, get `lecture_01.txt`"
would be `../notes/lecture_01.txt`.

```py
with open("../notes/lecture_01.txt", "r") as read_file:
  contents = read_file.read()
  print(contents)
```
