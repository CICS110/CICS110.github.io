---
title: Section 04 (Jared Yeager)
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CSV Files

This will mostly be an example of a specific kind of file you might work with,
and some built-in machinery specifically for that type of file.

That type of file in question: CSVs.

## What are CSV Files

CSV (short for "*comma-separated value(s)*") files are
effectively the file type for tables and spreadsheets.

So, consider this table of elements (in the "periodic table of elements" sense):

| Element | Symbol | Atomic Mass |
| :---: | :---: | :---: |
| Hydrogen | H | 1.00784 |
| Helium | He | 4.0026 |
| Lithium | Li | 6.941 |
| Beryllium | Be | 9.0121 |
| Boron | B | 10.811 |

Look how beautifully it is rendered on this website.

A CSV is basically the pure data/content of that table,
it is much less aesthetically pleasing, but it contains all the
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
so what each column represents may just need to be known to the programmer or user.
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

## Direct CSV Handling (Lists of Lists)

We'll look at unpacking, manipulating, and re-packaging a CSV
both will only the machinery we already have (basic I/O and string methods)
and with machinery provided by the `csv` module.

For both of these, we will be starting with the file `elements.csv`
with the following contents:

```csv
Hydrogen,H,1.00784
Helium,He,4.0026
Lithium,Li,6.941
Beryllium,Be,9.0121
Boron,B,10.811
```

Our goal will be go from this "element name, periodic symbol, atomic mass"
layout to a layout of "atomic number, periodic symbol, element name, atomic mass".
This will be done by swapping the element name and periodic symbol for each row,
and sticking the atomic number at the front.

The updated table will be written to `updated_elements.csv`.

### Normal I/O

So here is an approach with all the stuff we already have,
broken up across these tabs to reduce the horizontal space consumed.

<Tabs>
<TabItem value="read" label="Read" default>

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

</TabItem>
<TabItem value="split" label="Split">

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

</TabItem>
<TabItem value="modification" label="Modify">

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

</TabItem>
<TabItem value="join_cols" label="Join Per Row">

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

</TabItem>
<TabItem value="join_rows" label="Join Rows and Write">

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

</TabItem>
<TabItem value="newline" label="Last Newline">

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

</TabItem>
</Tabs>

---

### CSV Module: Reader and Writer

CSVs introduce the need to do that initial split on commas or
the later join on commas (depending on if we need to read from or write to a CSV).

This stuff is kind of annoying.
As an alternative,
there is some machinery that handles it for us in the built-in `csv` module.

<Tabs>
<TabItem value="read" label="Read" default>

For reading, the `csv` module provides us with Readers.
These are created with `csv.reader(FILE_OBJECT)`,
where `FILE_OBJECT` is an opened file.
**Not a file name, but the opened file object.**
This function returns an iterable of the desired broken-up rows (each row as a list),
which can in turn be cast to a list of these row-lists.

Behold how we get the entire 2D-list construction with just this:

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

</TabItem>
<TabItem value="modify" label="Modify">

Using the `csv` module helps with the loading/reading and saving/writing for the CSV.
All that internal work, however, is going to be the same.
So the modification of the list of lists is the same.

```py
import csv
import pprint

with open("elements.csv", "r") as elem_file:
  reader = csv.reader(elem_file)
  elem_table = list(reader)

for i in range(len(elem_table)):
  row = elem_table[i]  # updates to row will affect elem_table (mutability)
  row[:2] = row[1::-1] # Swap Symbol and Name entry of row
  row.insert(0, i+1)   # Add number to start of row

pprint.pprint(elem_table)
```

The above code will produce the output below.

```
[[1, 'H', 'Hydrogen', '1.00784'],
 [2, 'He', 'Helium', '4.0026'],
 [3, 'Li', 'Lithium', '6.941'],
 [4, 'Be', 'Beryllium', '9.0121'],
 [5, 'B', 'Boron', '10.811']]
```

</TabItem>
<TabItem value="write" label="Write">

For writing, the `csv` module provides us with Writers.
These are created with `csv.writer(FILE_OBJECT)`,
where `FILE_OBJECT` is an opened file.
**Not a file name, but the opened file object.**

The Writer has a few methods for writing.
For our purposes, I think the useful method here is the
`.writerows()` method (there is also a `.writerow()` method).
`.writerows()` takes an iterable of iterables like our 2D-list
(`.writerow()` just takes a row-iterable), and writes it to the file:

Behold how the entire 2D-list structure is written to the file with just this:

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

After running that code, the contents of the file `updated_elements.csv` will be:

```
1,H,Hydrogen,1.00784
2,He,Helium,4.0026
3,Li,Lithium,6.941
4,Be,Beryllium,9.0121
5,B,Boron,10.811

```

Notice how we don't need to convert that atomic number to a string.
The CSV Writer does that for us.

Also notice that it actually properly stuck a trailing newline on the last line.

</TabItem>
</Tabs>

---

:::caution

Material from here on was not part of the lecture,
but is stuff I think is related and worth mentioning.

:::

---

## Handling CSVs as Lists of Dictionaries

Each row/entry/record in the CSV has columns that represent fields.
The location/order of the fields is often more incidental or aesthetic
(it doesn't change the informational content).

In order words, a dictionary (where the field names are the keys)
is actually often a more appropriate way to represent a given record.
And a list thereof a better way to represent the informational content of the CSV.

### Normal I/O

As before, everything can be done with basic I/O, string manipulation,
and some comprehensions.

<Tabs>
<TabItem value="read" label="Read" default>

The actual reading in of the CSV isn't different at first,
in that we still do need to break the input into rows and values
(in order to store values in the dictionaries).

For each row (which has been broken up into values),
we need to repackage those values into a dictionary.
An operation over every row is ... a comprehension!

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]
  elem_dicts = [{"Element":row[0], "Symbol":row[1], "Atomic Mass":row[2]} for row in elem_table]

pprint.pprint(elem_dicts)
```

The above code will produce the output below.

```
[{'Atomic Mass': '1.00784', 'Element': 'Hydrogen', 'Symbol': 'H'},
 {'Atomic Mass': '4.0026', 'Element': 'Helium', 'Symbol': 'He'},
 {'Atomic Mass': '6.941', 'Element': 'Lithium', 'Symbol': 'Li'},
 {'Atomic Mass': '9.0121', 'Element': 'Beryllium', 'Symbol': 'Be'},
 {'Atomic Mass': '10.811', 'Element': 'Boron', 'Symbol': 'B'}]
```

</TabItem>
<TabItem value="modify" label="Modify">

Modifying the row-dictionaries doesn't require any sort of swapping,
as dictionaries are intrinsically unordered.
We only need to set every row's `"Atomic Number"` key.

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]
  elem_dicts = [{"Element":row[0], "Symbol":row[1], "Atomic Mass":row[2]} for row in elem_table]

for i in range(len(elem_dicts)):
  row = elem_dicts[i]        # updates to row will affect elem_table (mutability)
  row["Atomic Number"] = i+1 # Add number to row at the appropriate field

pprint.pprint(elem_dicts)
```

The above code will produce the output below.

```
[{'Atomic Mass': '1.00784',
  'Atomic Number': 1,
  'Element': 'Hydrogen',
  'Symbol': 'H'},
 {'Atomic Mass': '4.0026',
  'Atomic Number': 2,
  'Element': 'Helium',
  'Symbol': 'He'},
 {'Atomic Mass': '6.941',
  'Atomic Number': 3,
  'Element': 'Lithium',
  'Symbol': 'Li'},
 {'Atomic Mass': '9.0121',
  'Atomic Number': 4,
  'Element': 'Beryllium',
  'Symbol': 'Be'},
 {'Atomic Mass': '10.811',
  'Atomic Number': 5,
  'Element': 'Boron',
  'Symbol': 'B'}]
```

</TabItem>
<TabItem value="join" label="Join">

The "swapping" from the non-dictionary example manifests as
a specific order of fields when we convert the rows back to strings in this
dictionary-centric approach. (I'm doing the newlines here as well.)

Again, joining/turning the dictionaries into row-string is per-row operation,
so a comprehension is a natural fit.
In order to get the desired order, I'm using an f-String
(which also allows me to not need to explicitly convert the atomic number to a string).

```py
import pprint

with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]
  elem_dicts = [{"Element":row[0], "Symbol":row[1], "Atomic Mass":row[2]} for row in elem_table]

for i in range(len(elem_dicts)):
  row = elem_dicts[i]        # updates to row will affect elem_table (mutability)
  row["Atomic Number"] = i+1 # Add number to row at the appropriate field

new_elem_rows = [f"{row['Atomic Number']},{row['Symbol']},{row['Element']},{row['Atomic Mass']}\n" for row in elem_dicts]

pprint.pprint(new_elem_rows)
```

The above code will produce the output below.

```
['1,H,Hydrogen,1.00784\n',
 '2,He,Helium,4.0026\n',
 '3,Li,Lithium,6.941\n',
 '4,Be,Beryllium,9.0121\n',
 '5,B,Boron,10.811\n']
```

</TabItem>
<TabItem value="write" label="Write">

At this point, writing that back is just as before in the non-dictionary example.

```py
with open("elements.csv", "r") as elem_file:
  elem_rows = elem_file.read().splitlines()
  elem_table = [row.split(",") for row in elem_rows]
  elem_dicts = [{"Element":row[0], "Symbol":row[1], "Atomic Mass":row[2]} for row in elem_table]

for i in range(len(elem_dicts)):
  row = elem_dicts[i]        # updates to row will affect elem_table (mutability)
  row["Atomic Number"] = i+1 # Add number to row at the appropriate field

new_elem_rows = [f"{row['Atomic Number']},{row['Symbol']},{row['Element']},{row['Atomic Mass']}\n" for row in elem_dicts]

with open("updated_elements.csv", "w") as new_elem_file:
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

</TabItem>
</Tabs>

---

### CSV Module: DictReader and DictWriter

This dictionary packing and unpacking is annoying.
As an alternative,
there is some machinery that handles it for us in the built-in `csv` module.

<Tabs>
<TabItem value="read" label="Read" default>

Instead of a Reader, we now have a DictReader.
This is created with `csv.DictReader(FILE_OBJECT, FIELDNAME_LIST)`,
where `FILE_OBJECT` is as in `scv.reader()` and `FIELDNAME_LIST`
is a list of the field names, in the order they are read.
(We'll later see that we don't need `FIELDNAME_LIST` if the CSV has a header row.)
This function returns an iterable of the desired row-dictionaries,
which can in turn be cast to a list.

Behold how we get the entire dictionary construction with just this:

```py
import csv
import pprint

with open("elements.csv", "r") as elem_file:
  reader = csv.DictReader(elem_file, ["Element","Symbol","Atomic Mass"])
  elem_table = list(reader)

pprint.pprint(elem_table)
```

The above code will produce the output below.

```
[{'Atomic Mass': '1.00784', 'Element': 'Hydrogen', 'Symbol': 'H'},
 {'Atomic Mass': '4.0026', 'Element': 'Helium', 'Symbol': 'He'},
 {'Atomic Mass': '6.941', 'Element': 'Lithium', 'Symbol': 'Li'},
 {'Atomic Mass': '9.0121', 'Element': 'Beryllium', 'Symbol': 'Be'},
 {'Atomic Mass': '10.811', 'Element': 'Boron', 'Symbol': 'B'}]
```

</TabItem>
<TabItem value="modify" label="Modify">

Modification is exactly the same. As before,
the fancy machinery buys us convenience on the loading/reading and saving/writing,
not the manipulation in between.

```py
import csv
import pprint

with open("elements.csv", "r") as elem_file:
  reader = csv.DictReader(elem_file, ["Element","Symbol","Atomic Mass"])
  elem_table = list(reader)

for i in range(len(elem_table)):
  row = elem_table[i]        # updates to row will affect elem_table (mutability)
  row["Atomic Number"] = i+1 # Add number to row at the appropriate field

pprint.pprint(elem_table)
```

The above code will produce the output below.

```
[{'Atomic Mass': '1.00784',
  'Atomic Number': 1,
  'Element': 'Hydrogen',
  'Symbol': 'H'},
 {'Atomic Mass': '4.0026',
  'Atomic Number': 2,
  'Element': 'Helium',
  'Symbol': 'He'},
 {'Atomic Mass': '6.941',
  'Atomic Number': 3,
  'Element': 'Lithium',
  'Symbol': 'Li'},
 {'Atomic Mass': '9.0121',
  'Atomic Number': 4,
  'Element': 'Beryllium',
  'Symbol': 'Be'},
 {'Atomic Mass': '10.811',
  'Atomic Number': 5,
  'Element': 'Boron',
  'Symbol': 'B'}]
```

</TabItem>
<TabItem value="write" label="Write">

Instead of a Writer, we now have a DictWriter.
This is created with `csv.DictWriter(FILE_OBJECT, FIELDNAME_LIST)`,
where `FILE_OBJECT` is as in `scv.writer()` and `FIELDNAME_LIST`
is a list of the field names, in the order we want them written.

Behold how the entire dictionary structure is written in an order of our choice
with just this:

```py
import csv

with open("elements.csv", "r") as elem_file:
  reader = csv.DictReader(elem_file, ["Element","Symbol","Atomic Mass"])
  elem_table = list(reader)

for i in range(len(elem_table)):
  row = elem_table[i]        # updates to row will affect elem_table (mutability)
  row["Atomic Number"] = i+1 # Add number to row at the appropriate field

with open("updated_elements.csv", "w") as new_elem_file:
  writer = csv.DictWriter(new_elem_file, ["Atomic Number","Symbol","Element","Atomic Mass"])
  writer.writerows(elem_table)
```

After running that code, the contents of the file `updated_elements.csv` will be:

```
1,H,Hydrogen,1.00784
2,He,Helium,4.0026
3,Li,Lithium,6.941
4,Be,Beryllium,9.0121
5,B,Boron,10.811

```

</TabItem>
</Tabs>

---

### CSV Module with Header Row

There is one more thing to show off about DictReader and DictWriter.

Consider a CSV with a header row. So imagine `elements.csv` was:

```
Element,Symbol,Atomic Mass
Hydrogen,H,1.00784
Helium,He,4.0026
Lithium,Li,6.941
Beryllium,Be,9.0121
Boron,B,10.811
```

If we don't specify the field names for DictReader, it will use the first row in the CSV.

For the DictWriter, it always needs the field names given.
But we get a `.writeheader()` method that writes
that list of field names as the header of the csv.

So if the CSV we were reading had a header row,
and we wanted to write a header row in the transformed CSV,
we could do this:

```py
import csv

with open("elements.csv", "r") as elem_file:
  reader = csv.DictReader(elem_file)
  elem_table = list(reader)

for i in range(len(elem_table)):
  row = elem_table[i]        # updates to row will affect elem_table (mutability)
  row["Atomic Number"] = i+1 # Add number to row at the appropriate field

with open("updated_elements.csv", "w") as new_elem_file:
  writer = csv.DictWriter(new_elem_file, ["Atomic Number","Symbol","Element","Atomic Mass"])
  writer.writeheader()
  writer.writerows(elem_table)
```

After running that code, the contents of the file `updated_elements.csv` would be:

```
Atomic Number,Symbol,Element,Atomic Mass
1,H,Hydrogen,1.00784
2,He,Helium,4.0026
3,Li,Lithium,6.941
4,Be,Beryllium,9.0121
5,B,Boron,10.811

```
