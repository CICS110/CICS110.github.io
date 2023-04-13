---
title: Section 04 (Jared Yeager)
---

# CSV Files

This will mostly be an example of a specific kind of file you might work with,
and some built-in machinery specifically for that type of file.

That type of file in question: CSVs.

## What are CSV Files

CSV (short for "*comma-separated value(s)*") files are
effectively the file type for tables and spreadsheets.

So, consider this table of the periodic table of elements below:

| Element | Symbol | Atomic Mass |
| :---: | :---: | :---: |
| Hydrogen | H | 1.00784 |
| Helium | He | 4.0026 |
| Lithium | Li | 6.941 |
| Beryllium | Be | 9.0121 |
| Boron | B | 10.811 |

Look how beautifully it is rendered on this website.

A CSV is basically the pure data/content of that table,
if is much less aesthetically pleasing, but it contains all the
same information:

```csv
Element,Symbol,Atomic Mass
Hydrogen,H,1.00784
Helium,He,4.0026
Lithium,Li,6.941
Beryllium,Be,9.0121
Boron,B,10.811
```

Observe the parallels between the table and the CSV.
Honestly, the CSV just looks like the table but without the formatting
(and with the commas).

The format has a couple characteristics:
* The header row of the table (if it exists) is the first row of the CSV.
* Every non-header row in the table, becomes a line in the CSV, called a *record*.
* Every column in the table represents a *field*,
the values in columns for a given row are separated by commas in the CSV.

A CSV may not have a header row,
and what each column represents may just need to be known to the programmer or user.
For instance, I could have a file named `elements.csv` that just has:

```csv
Hydrogen,H,1.00784
Helium,He,4.0026
Lithium,Li,6.941
Beryllium,Be,9.0121
Boron,B,10.811
```

Why cut of the header? Because it is annoying one-off row to deal with.
Why keep the header? Because it contains useful information about what the file
means/represents.
There are arguments both ways.

I'll use `elements.csv` without the header for the simplicity of the example code.

## Normal I/O

We can work with a CSV with all the file I/O machinery we already have
and some string manipulation technology.

As a motivating example, let's start with the following CSV, named `elements.csv`:

```csv
Hydrogen,H,1.00784
Helium,He,4.0026
Lithium,Li,6.941
Beryllium,Be,9.0121
Boron,B,10.811
```

Our goal will be go from this "element name, periodic symbol, atomic mass"
layout to a layout of "atomic number, periodic symbol, element name, atomic mass".
The will be done by swapping the element name and periodic symbol for each row,
and sticking the atomic number at the front.

As a first step, let's open the file, read the contents, and split it into lines.
Nothing new here over last lecture. I'll be using the `.read().splitlines()`
approach:

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()

pprint.pprint(elem_rows)
```

The above code will produce the output below.

```
['Hydrogen,H,1.00784',
 'Helium,He,4.0026',
 'Lithium,Li,6.941',
 'Beryllium,Be,9.0121',
 'Boron,B,10.811']
```

Now, we have a list containing each row of the CSV as a string filled with commas.
We can break up these row-strings with the `.split()` string method.
Which takes in a *delimiter* to split on/at.

For instance:
```py live_py title=Split
row_1 = 'Hydrogen,H,1.00784'
row_1_split = row_1.split(",")
print(row_1)       # "Hydrogen,H,1.00784" 
print(row_1_split) # ['Hydrogen', 'H', '1.00784']
```

Now, we need to do that **for every row in the list**.
And when you need to perform some transformation on every element in a list,
comprehension are a good way to go.

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]

pprint.pprint(elem_table)
```

The above code will produce the output below.

```
[['Hydrogen', 'H', '1.00784'],
 ['Helium', 'He', '4.0026'],
 ['Lithium', 'Li', '6.941'],
 ['Beryllium', 'Be', '9.0121'],
 ['Boron', 'B', '10.811']]
```

So now we have a list of lists, the big outer list being the rows,
the inner lists being the values within a row.
This is basically our table in 2D-list form.
Now we can start manipulating it.

I'll run a for loop over each row,
reference that row with a helper variable (`row`),
use slices to swap the first two values/fields/columns,
and then insert the atomic number at the start.

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]

for i in range(len(elem_table)):
  row = elem_table[i]     # updates to row will affect elem_table (mutability)
  row[:2] = row[1::-1]    # Swap Symbol and Name entry of row
  row.insert(0, str(i+1)) # Add number (as string) to start of row

pprint.pprint(elem_table)
```

<details>
<summary><b>Extra: How I'd actually do it</b></summary>

Let's not kid ourselves, my code is not that coherent.
We are transforming each row again, you bet I'd use a comprehension.

Oh, I need what index in the list something is?
That's what we have `enumerate()` for.

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_file.read().splitlines()]

elem_table = [[str(i+1)] + r[1::-1] + [r[-1]] for i,r in enumerate(elem_table)]

pprint.pprint(elem_table)
```

Actually ... The honest truth is I'd do something even worse...

</details>

The above code will produce the output below.

```
[['1', 'H', 'Hydrogen', '1.00784'],
 ['2', 'He', 'Helium', '4.0026'],
 ['3', 'Li', 'Lithium', '6.941'],
 ['4', 'Be', 'Beryllium', '9.0121'],
 ['5', 'B', 'Boron', '10.811']]
```

Note that I made the atomic numbers strings,
because now we are going to need to pack everything back up into a string
and write to a new CSV.

We've used `"".join()` before, to just directly stick strings together.
Now, for each row, we want to stick the elements of the row together,
but with commas between them.
`",".join()` does that. And since that is a per-row transformation,
a comprehension it is:

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]

for i in range(len(elem_table)):
  row = elem_table[i]     # updates to row will affect elem_table (mutability)
  row[:2] = row[1::-1]    # Swap Symbol and Name entry of row
  row.insert(0, str(i+1)) # Add number (as string) to start of row

new_elem_rows = [",".join(row) for row in elem_table]

pprint.pprint(new_elem_rows)
```

The above code will produce the output below.

```
['1,H,Hydrogen,1.00784',
 '2,He,Helium,4.0026',
 '3,Li,Lithium,6.941',
 '4,Be,Beryllium,9.0121',
 '5,B,Boron,10.811']
```

Almost there, we just need to join these row-strings together with newlines
and write that out to a new CSV.

```py
with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]

for i in range(len(elem_table)):
  row = elem_table[i]     # updates to row will affect elem_table (mutability)
  row[:2] = row[1::-1]    # Swap Symbol and Name entry of row
  row.insert(0, str(i+1)) # Add number (as string) to start of row

new_elem_rows = [",".join(row) for row in elem_table]

with open("updated_elements.csv", "w") as new_elem_file:
  new_elem_file.write("\n".join(new_elem_rows))
```

And that will do it. After running that code,
the contents of the file `updated_elements.csv` will be:

```
1,H,Hydrogen,1.00784
2,He,Helium,4.0026
3,Li,Lithium,6.941
4,Be,Beryllium,9.0121
5,B,Boron,10.811
```

Another approach would be to have newlines on the end of each row,
and that would give the last line in the CSV a trailing newline,
which I believe is more appropriate.

```py
with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]

for i in range(len(elem_table)):
  row = elem_table[i]     # updates to row will affect elem_table (mutability)
  row[:2] = row[1::-1]    # Swap Symbol and Name entry of row
  row.insert(0, str(i+1)) # Add number (as string) to start of row

# Newlines added to each row when we join them back together
new_elem_rows = [",".join(row)+"\n" for row in elem_table]

with open("updated_elements.csv", "w") as new_elem_file:
  # Final write is then a pure join
  new_elem_file.write("".join(new_elem_rows))
```

After running that code, the contents of the file `updated_elements.csv` will be:

```
1,H,Hydrogen,1.00784
2,He,Helium,4.0026
3,Li,Lithium,6.941
4,Be,Beryllium,9.0121
5,B,Boron,10.811

```

The same as before, but with a trailing newline.

<details>
<summary><b>Very Extra: How I'd actually do it</b></summary>

:::warning

Risk of inflicting psychic damage.

:::

Ok, the truth? The truth is I'd probably do this:

```py
with open("elements.csv", "r") as rfd:
  with open("updated_elements.csv", "w") as wfd:
    wfd.write("".join([",".join([str(i+1)]+(r:=l.split(","))[1::-1]+[r[-1]])+"\n" for i,l in enumerate(rfd.read().splitlines())]))
```

The walrus operator (`:=`) allow you to assign to variables mid-evaluation.

Do not grow up to write code like me.

</details>

## CSV Module

CSVs introduce the need to do that initial split on commas or
the later join on commas (depending on if we need to read from or write to a CSV).

This stuff is kind of annoying.
As an alternative,
there is some machinery that handles it for us in the built-in `csv` module.

For reading, `csv.reader(FILE_OBJECT)` returns a CSV Reader,
which is an iterable and thus can be converted directly to a list.
Each element of this CSV Reader will be a row already split up on the commas:

```py
import csv
import pprint

with open("elements.csv", "r") as elem_file:
  reader = csv.reader(elem_file)
  elem_table = list(reader)

pprint.pprint(elem_table)
```

The above code will produce the output below.

```
[['Hydrogen', 'H', '1.00784'],
 ['Helium', 'He', '4.0026'],
 ['Lithium', 'Li', '6.941'],
 ['Beryllium', 'Be', '9.0121'],
 ['Boron', 'B', '10.811']]
```

Look how much it does for us. Nice.

Now for writing. `csv.writer(FILE_OBJECT)` return a CSV Writer.
For our purposes, I think the useful method here is the
`.writerows()` method. Which takes an iterable of iterables (I think),
such as our 2D list (aka table), and writes it to the file:

```py
import csv

with open("elements.csv", "r") as elem_file:
  reader = csv.reader(elem_file)
  elem_table = list(reader)

for i in range(len(elem_table)):
  row = elem_table[i]  # updates to row will affect elem_table (mutability)
  row[:2] = row[1::-1] # Swap Symbol and Name entry of row
  row.insert(0, i+1)   # Add number to start of row

with open("updated_elements.csv", "w") as new_elem_file:
  writer = csv.writer(new_elem_file)
  writer.writerows(elem_table)
```

The above code will produce the output below.
Notice how we don't need to convert that atomic number to a string.
The CSV Writer does that for us. Good stuff.

```
1,H,Hydrogen,1.00784
2,He,Helium,4.0026
3,Li,Lithium,6.941
4,Be,Beryllium,9.0121
5,B,Boron,10.811

```

Also notice that it actually properly stuck a trailing newline on the last line.
