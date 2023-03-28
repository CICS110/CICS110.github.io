---
title: Section 04 (Jared Yeager)
---

# Sets and Dictionaries

This is mostly going to be a syntax and useful methods dump,
with a bit of the abstract intuition more up-front.

## What Are Sets and Dictionaries

We have already learned about some collection types: lists, tuples, and strings.
These notably all have some sort of canonical ordering for their elements.

Today we will be considering some **un-ordered** collection types.

### Sets

*Sets* are a pure collection of **unique** elements. Any given value is either in the set or not.

Sets can be declared with squiggly brackets (`{}`) with comma-separated values.
Empty sets must be created with the `set()` function (`{}` alone makes an empty dictionary).

```py live_py title=Make_Set
empty_set = set()
non_empty_set = {"apple", "banana", "cherry", "durian"}

print(empty_set)
print(non_empty_set)
```

They are un-ordered, and un-indexable.
Attempts to index a set will lead to an error.

```py live_py title=Index_Set
fruits = {"apple", "banana", "cherry", "durian"}

print(fruits[0]) # Throws Error
```

The real thing you would do with a set is check membership.

```py live_py title=In_Set
fruits = {"apple", "banana", 314, "cherry", "durian", 3.14}

print("apple" in fruits)     # True
print("pineapple" in fruits) # False
```

### Dictionaries

*Dictionaries* are almost a generalisation of a lists in a way.
Lists are a collection of indexed elements, the indices are 0 to length minus 1 (inclusive).
These indices impose a natural ordering on the elements in the list.

Dictionaries replace indices with arbitrary **unique** *keys*, and these keys map to *values*
(as opposed to indices mapping to elements.).
Using keys to index into the dictionary is what forces them to need to be unique.
These keys can be anything, and so there is no clear ordering.

This is really useful if you want to track categorical information about something.
So a dictionary with information about person maybe has `"age"`, `"height"`, `"hair colour"`
as keys, for instance.

Dictionaries can be declared with squiggly brackets (`{}`) with comma-separated `key:value` pairs.
Empty dictionaries can be created with via `{}`.

```py live_py title=Make_Dict
empty_dict = {}
non_empty_dict = {"apple": "pie", 3: 14, 3.14: "pie"}

print(empty_dict)
print(non_empty_dict)
```

Indexing for a dictionary is visually the same as a list,
`dictionary[key]` will give you the `value` associated with that `key`.

```py live_py title=Index_Dict
Jared = {"age": 26, "job": "TO", "height": (6, 1), "hobby": "origami"}
print(f"Jared: {Jared}")
print(f"Jared['age']: {Jared['age']}")       # 26
print(f"Jared['job']: {Jared['job']}")       # TO
print(f"Jared['height']: {Jared['height']}") # (6, 1)
print(f"Jared['hobby']: {Jared['hobby']}")   # origami
print(f"Jared['name']: {Jared['name']}")     # Error!
```

If the key does not exist on an access attempt, and error occurs (setting is fine though).
This can be used to retrieve `value`s (as above), update values for a given `key`, and
make new `keys` and set the associated `value`.

```py live_py title=Edit_Dict
Jared = {"age": 26, "job": "TO", "height": (6, 1), "hobby": "origami"}

# I haven't done origami in a while, should update that
Jared["hobby"] = "video games"
print(f"Jared: {Jared}")

# I suppose my NAME is probably relevant, should add that
Jared["first name"] = "Jared"
Jared["last name"] = "Yeager"
print(f"Jared: {Jared}")
```

Finally, `in`. Checks if a `key` is a key in the dictionary.

```py live_py title=In_Dict
Jared = {"age": 26, "job": "TO", "height": (6, 1), "hobby": "origami"}
print("age" in Jared)       # True
print(26 in Jared)          # False
print(("age", 26) in Jared) # False
```

## Useful Methods

Naturally, the official documentation has the full list of methods for all of these types.
I want to flag a few that might be useful now so they you know such things exist.
You don't need to memorise these, knowing they exist in order
to be able to look them up in the future is the real goal.

Official documentation:
* [strings](https://docs.python.org/3/library/stdtypes.html#string-methods)
* [lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)
* [sets](https://docs.python.org/3/library/stdtypes.html#set)
* [dictionaries](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)

Non-official documentation:
* [strings](https://www.w3schools.com/python/python_ref_string.asp)
* [lists](https://www.w3schools.com/python/python_ref_list.asp)
* [tuples](https://www.w3schools.com/python/python_ref_tuple.asp)
* [sets](https://www.w3schools.com/python/python_ref_set.asp)
* [dictionaries](https://www.w3schools.com/python/python_ref_dictionary.asp)

### Sets

Some general methods:
* `.add(x)`: adds `x` to the set
* `.discard(x)`: removes `x` from the set 
  (the `.remove(x)` method does the same, but throws an error if `x` is not in the set)
* `.pop()` removes and returns a random element from the set

```py live_py title=Set_Add
fruits = {"apple", "banana", "orange"}
print(f"before: {fruits}")
fruits.add("grape")
print(f"after : {fruits}")
```

```py live_py title=Set_Discard
fruits = {"apple", "banana", "orange"}
print(f"before: {fruits}")
fruits.discard("banana")
print(f"after : {fruits}")
```

```py live_py title=Set_Pop
fruits = {"apple", "banana", "orange"}
print(f"before: {fruits}")
fruit = fruits.pop()
print(f"after : {fruits}")
print(f"popped: {fruit}")
```

Some methods for common set operations:
* `.intersection(s)` returns a set of elements both in the invoking set and `s`
* `.union(s)` returns a set of elements in either the invoking set or `s`
* `.difference(s)` returns a set of elements in the invoking set but not in `s`
* `.symmetric_difference(s)` returns a set of elements in either the invoking set or `s`, but not both

```py live_py title=Set_Ops
fruits = {"apple", "banana", "orange"}
colours = {"orange", "yellow", "green"}
print(f"inter   : {fruits.intersection(colours)}")
print(f"union   : {fruits.union(colours)}")
print(f"diff    : {fruits.difference(colours)}")
print(f"sym diff: {fruits.symmetric_difference(colours)}")
```

### Dictionaries

Some general methods:
* `.update(d)`: adds key-value pair from dictionary-like object (iterable with key-value pairs) `d` to the dictionary
* `.pop(k)` removes and key-value pair for key `k` and returns the associated value

```py live_py title=Dict_Update
fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}
print(fruit_colours)
# Update with a dict
fruit_colours.update({"apple": "green", "orange": "orange"})
print(fruit_colours)
# Update with a list of key-value tuples
fruit_colours.update([("apple", "yellow"), ("grape", "purple")])
print(fruit_colours)
```

```py live_py title=Dict_Pop
fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}
print(f"before: {fruit_colours}")
fruit_color = fruit_colours.pop("apple")
print(f"after : {fruit_colours}")
print(f"popped: {fruit_color}")
```

Some methods for extracting all keys/values of a dictionary:
* `.keys()`: returns an iterable of the keys
* `.values()`: returns an iterable of the values
* `.items()`: returns an iterable of key-value tuples

```py live_py title=Dict_Keys
fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}
print(f"dict: {fruit_colours}")
print(f"keys: {fruit_colours.keys()}")
```

```py live_py title=Dict_Values
fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}
print(f"dict  : {fruit_colours}")
print(f"values: {fruit_colours.values()}")
```

```py live_py title=Dict_Items
fruit_colours = {"apple": "red", "banana": "yellow", "cherry": "red"}
print(f"dict : {fruit_colours}")
print(f"items: {fruit_colours.items()}")
```

## Conversions

### To Sets

Conversion from strings, lists, and tuples to sets is a lot like
conversions to lists/tuples, except duplicates will be lost
(since sets are collections of unique elements).

```py live_py title=To_Set
str_to_set = set("Hello, World")
print(str_to_set)

list_to_set = set([3, 1, 4, 1, 5])
print(list_to_set)

tuple_to_set = set([9, 2, 6, 5, 3, 5])
print(tuple_to_set)
```

### From Sets

Converting from a set to a list/tuple basically just creates an ordering,
but you really have no guarantees about that ordering.

```py live_py title=From_Set_List_Tuple
fruits = {"apple", "orange", "banana"}
set_to_list = list(fruits)
print(set_to_list)

set_to_tuple = tuple(fruits)
print(set_to_tuple)
```

You can directly convert to a string,
but like with list/tuples to strings, it will just be the printable form.
You can use the string `.join()` method like with list/tuples,
but no ordering guarantees.

```py live_py title=From_Set_String
fruits = {"apple", "orange", "banana"}
set_to_string = str(fruits)
print(set_to_string)

# Only works if all keys are strings
set_to_string = " ".join(fruits)
print(set_to_string)
```

### From Dicts

Converting from a dict to almost anything else is like the values don't exist.
Iteration is done purely over the keys for dicts.

```py live_py title=From_Dict
fruits = {"apple": "red", "orange": "orange", "banana": "yellow"}
dict_to_set = set(fruits)
print(dict_to_set)

dict_to_list = list(fruits)
print(dict_to_list)

dict_to_tuple = tuple(fruits)
print(dict_to_tuple)

dict_to_string = str(fruits)
print(dict_to_string)

# Only works if all keys are strings
dict_to_string = " ".join(fruits)
print(dict_to_string)
```

If you explicitly want the key-value pairs, you may want to convert
the iterable returned by the `.items()` method.

```py live_py title=From_Dict_Items
fruits = {"apple": "red", "orange": "orange", "banana": "yellow"}
fruit_kv_pairs = fruits.items()

dict_to_set = set(fruit_kv_pairs)
print(dict_to_set)

dict_to_list = list(fruit_kv_pairs)
print(dict_to_list)

dict_to_tuple = tuple(fruit_kv_pairs)
print(dict_to_tuple)

dict_to_string = str(fruit_kv_pairs)
print(dict_to_string)

# dict_items is an iterable of tuples (not strings), so .join() fails
dict_to_string = " ".join(fruit_kv_pairs)
print(dict_to_string)
```

### To Dicts

Converting **to** a dictionary basically requires a set/list/tuple of key-value pairs
(stings can't be element-wise paired like this).

```py live_py title=To_Dict
fruits = {"apple": "red", "orange": "orange", "banana": "yellow"}
set_to_dict = dict({('apple', 'red'), ('banana', 'yellow'), ('orange', 'orange')})
print(set_to_dict)

list_to_dict = dict([('apple', 'red'), ('banana', 'yellow'), ('orange', 'orange')])
print(list_to_dict)

tuple_to_dict = dict((('apple', 'red'), ('banana', 'yellow'), ('orange', 'orange')))
print(tuple_to_dict)
```

<details>
<summary><b>Extra: Zips</b></summary>

You might imagine a case where you have a collection of keys and a collection of values,
and want to turn them into a dictionary.
You would first need to bundle the key and value elements together into pairs
before `dict()` can work. This is exactly what `zip()` does.

```py live_py title=To_Dict_Zip_List_Tuple
k = ["apple", "orange", "banana"]
v = ["red", "orange", "yellow"]
lists_to_dict = dict(zip(k, v))
print(lists_to_dict)

k = ("apple", "orange", "banana")
v = ("red", "orange", "yellow")
tuples_to_dict = dict(zip(k, v))
print(tuples_to_dict)
```

You don't have guarantees about the order in which elements of the set get zipped,
and zipping string will give pairing of letters, but both of these work mechanically.

```py live_py title=To_Dict_Zip_Set_String
k = {"apple", "orange", "banana"}
v = {"red", "orange", "yellow"}
sets_to_dict = dict(zip(k, v))
print(sets_to_dict)

k = "abcde"
v = "12345"
strings_to_dict = dict(zip(k, v))
print(strings_to_dict)
```

You can also zip two different collections together.

```py live_py title=To_Dict_Zip_Mix
k = "abcd"
v = ["apple", "orange", "banana", "durian"]
mix_to_dict = dict(zip(k, v))
print(mix_to_dict)
```

</details>

## For Loops

Both sets and dictionaries are iterables, as so we can use for loops over them.
"For every element in this set ..." seems like a reasonable thing to do/say.

```py live_py title=For_Set
fruits = {"apple", "orange", "banana"}
for fruit in fruits:
  print(f"{fruit}s are fruits")
```

The default iteration over dictionaries is over their keys.

```py live_py title=For_Dict_Key
fruit_colours = {"apple": "red", "orange": "orange", "banana": "yellow"}
# "for fruit in fruit_colours.keys()" would do the same thing
for fruit in fruit_colours:
  print(f"{fruit}s may be {fruit_colours[fruit]}")
```

But it may be totally reasonable use the `.items()` method in order to
iterate over key-value pairs.

```py live_py title=For_Dict_Key_Value
fruit_colours = {"apple": "red", "orange": "orange", "banana": "yellow"}
for (fruit,colour) in fruit_colours.items():
  print(f"{fruit}s may be {colour}")
```

And maybe in some cases you don't care about the keys at all,
you could use the `.values()` method to iterate over the values alone.

```py live_py title=For_Dict_Value
fruit_colours = {"apple": "red", "orange": "orange", "banana": "yellow"}
for colour in fruit_colours.values():
  print(f"I forget what fruits may be {colour}")
```

## Deletion (`del`)

There is a key word, `del`,
that allows you to delete values and effectively un-assign variables.

```py live_py title=Del_Var
x = 31415
print(f"x: {x}")
del x
print(f"x: {x}") # Error, because x has no value
```

This can be used to delete an entire collection.

```py live_py title=Del_Collection
d = {0: 3, 1: 1, 2: 4, 3: 1, 4: 5}
print(f"d: {d}")
del d
print(f"d: {d}") # Error, because d has no value
```

However, it can also be used to delete **elements** from a
**mutable and indexable** collection (e.i., lists and dicts).

```py live_py title=Del_Elem
list_var = [3,1,4,1,5]
dict_var = {"a": "apple", "b": "banana", "c": "cherry"}

print(f"list: {list_var}")
print(f"dict: {dict_var}")

del list_var[2]
del dict_var["b"]

print(f"list: {list_var}")
print(f"dict: {dict_var}")
```

You can also delete entire slices in this way.

```py live_py title=Del_Slice
l = [3,1,4,1,5]
print(f"l: {l}")
del l[1::2]
print(f"l: {l}")
```
