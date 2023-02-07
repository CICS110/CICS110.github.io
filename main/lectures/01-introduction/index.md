# Lec 01 Course Introduction

## Reading / Participation

- [Read Chapter 1 Introduction to Programming in CICS 110 - Foundations of Programming on zyBooks](https://learn.zybooks.com/) (note, you will first need to purchase the book)
- Complete [Participation 1](/main/assignments/#participation) in zyBooks

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 2, 3, 4, 5" label="Section 2, 3, 4, 5" default>
    <PowerPoint lec_src={require('./Lecture_1.pptx').default} />
  </TabItem>
  <TabItem value="Section 1, 6" label="Section 1, 6">
    <PowerPoint lec_src={require('./Lecture_1_Cole.pptx').default} />
  </TabItem>
</Tabs>

## Additional Resources

- [Learn Python with Socratica](https://youtu.be/bY6m6_IIN94) (Socratica)
- [Hello World in Python](https://youtu.be/KOdfpbnWLVo) (Socratica)

## Exploring Code Activity

### Guess the Number

Try to guess the hidden number. The number changes every minute.

```py live_py title=Guess_the_number
from datetime import datetime

now = datetime.now()
cur_time = now.strftime("%I:%M %p")
num = ((now.hour * 60 + now.minute)*17 + 27) % 100

print("Try to guess the number between 0 and 100")
print("The number changes every minute")
print(f"This is the number for: {cur_time}")
guess = int(input("Enter a number: "))

if guess == num:
    print("You guessed it!")
elif guess > num:
    print("Too high")
else:
    print("Too low")
```

### Spirograph

This piece of code generates a Spirograph. a spirograph is a drawing that is formed by placing a pen in a gear, and then
rolling that gear around inside a larger gear. The pen traces out a curve that is the shape of the gear teeth.

<img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Spiograph_Animation.gif' style={{width:200}}/>

```py live_py title=Spirograph
from turtle import *
from math import pi, sin, cos, lcm

R = 100 # Radius of the outer (larger) gear
r = 60 # Radius of the inner (smaller) gear
d = 100
steps = 100 # Number of steps to take (increase for more detail)
d_theta = (1 / steps) * 2 * pi * lcm(R, r) / R
theta = 0

hideturtle()
color("blue")

penup()
goto(R - r + d, 0)
pendown()

for i in range(steps):
    theta += d_theta
    x = (R - r) * cos(theta) + d * cos(theta * (R - r) / r)
    y = (R - r) * sin(theta) - d * sin(theta * (R - r) / r)
    goto(x, y)
```

### Cafe Wall Illusion

The Cafe Wall illusion has lines that look like they are slanted, but they are actually straight. Take a look!

```py live_py title=Cafe_Wall_Illusion
from turtle import *
from math import sin

def move(x,y):
    penup()
    goto(x,y)
    setheading(0)
    pendown()

def fill_rect(width, height, color):
    fillcolor(color)
    for fun in [begin_fill, end_fill]:
        fun()
        for dist in 2 * [width,height]:
            forward(dist)
            left(90)

def fill_row(x, y, width, height, offset, rects):
    move(x,y)
    forward(width - offset)
    fill_rect(width, height, "black")
    for _ in range(rects-1):
        forward(2 * width)
        fill_rect(width, height, "black")
    forward(width + offset)

hideturtle()
speed(11)
color("grey")
pensize(1)

xmin = -250
xmax = 250
ymin = -250
ymax = 250

rows = 25
cols = 10

move(xmin,ymin)
fill_rect(xmax-xmin,ymax-ymin,"white")
for i in range(rows):
    dx = (xmax-xmin) / (2*cols)
    dy = (ymax-ymin) / rows
    y0 = ymin + i * dy
    offset = dx / 2 + (dx / 5) * sin((10 / cols) * i)
    fill_row(xmin, y0, dx, dy, offset, cols)
done()
```

### Koch Snowflake

The Koch Snowflake is a fractal that is formed by starting with an equilateral triangle, and then repeatedly
replacing the middle of each side with a smaller equilateral triangle. Try playing with the length and depth!

```py live_py title=Koch_Snowflake
from turtle import *
from math import sin

def koch_forward(distance, depth):
    if depth == 0:
        forward(distance)
    else:
        koch_forward(distance/3, depth-1)
        right(60)
        koch_forward(distance/3, depth-1)
        left(120)
        koch_forward(distance/3, depth-1)
        right(60)
        koch_forward(distance/3, depth-1)

# Play with these!
length = 250 # Length of a side
depth = 4 # Level of recursion

hideturtle()
speed(8)
color('blue', 'white')

penup()
goto(- length / 2, - 3**(1/2) * length / 6)
pendown()

begin_fill()
for _ in range(3):
    koch_forward(length, depth)
    left(120)
end_fill()
done()
```