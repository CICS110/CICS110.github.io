# Python Live Code Blocks

### Hello World you can run

- To make a runnable code block, add `live_py` to the code block
- The code block will have a play button in the top right corner, click it to run the code
- The code can be edited and run again on the website
    - No need to change any source code
- I don't know why the subtitles are in german

```py live_py
print('Hello World')
```

### Hello World Not Runnable

- For Reference, here is a code block that is not runnable

```py
print('Hello World')
```

### Adding a title

- To add a title to the code block, add `title=My_Title` to the code block
- If you want a space in the title, use `_` or `-` instead of a space
- If you want an '_' or '-' in the title, use `__` or `--` instead of a single one

```py live_py title=Hello-World,-with-a-title
print('Hello World, with a title')
```

### Hello World "slim"

- The slim version is a little smaller
- Doesn't display the title
- Play button is inline
- To make a slim code block, add `slim` to the code block

```py live_py slim title=can't_see_me
print('Hello World slim')
```

### You can use a turtle too:

- Can import turtle and use it
- Can save the drawings to a file 
    - the download button is in the top right of the turtle window

```py live_py title=turtle_example
from turtle import *
color('red', 'yellow')
begin_fill()
while True:
    forward(200)
    left(170)
    p = pos()
    if abs(p[0]) < 1 and abs(p[1]) < 1:
        break
end_fill()
done()
```

### Importing Default Libraries

- Can import and use various libraries that are included by default
    - Link to standard library: https://docs.python.org/3/library/index.html
- Warning: This has a large output

```py live_py title=fetching_json
from urllib.request import urlopen
import json
# A Url that returns JSON data (without requiring authentication)
url = "https://pokeapi.co/api/v2/pokemon/ditto"
with urlopen(url) as response:
    body = response.read()

body_parsed = json.loads(body)
print(json.dumps(body_parsed, indent=2))
```