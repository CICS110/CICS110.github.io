--- 
author: Ben Burns
sidebar_position: 9
---

# Common Errors
## `IndexError`
`IndexError` means we are trying to access an element of an indexed collection, like a String or list, but that index is outside the range of the collection. 

For example, if I have the String `'test'`, `e` is the 2nd character at index 1. However, if I try to access index 4, that would mean accessing the 5th character of the String, which doesn't exist. Therefore attempting to access index 4 will result in an `IndexError`:
```python
>>> 'test'[4]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: string index out of range
```

## `EOFError`
`EOF` stands for "end of file". If the Python interpreter unexpectedly reads through the end of a file, it returns an `EOFError`. This typically happens in one of two ways:
1. The Python interpreter hits the end of your Python source file unexpectedly. This can happen if you write a loop with no content in it (more recent python versions return an `IndentationError`, but zyBooks will often return `EOFError`. If you'd like to know why, make a Piazza post asking about it `:D`)
2. Your Python tries to read more input than it is given. For example, say your python code checks the first 5 lines of a file. If the file has 4 lines total, Python tries to read the 5th line and sees the `EOF` character. This is unexpected behavior, so it returns an `EOFError`.