# Lec 01 Course Introduction

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./Lecture_1.pptx').default}/>

## Exploring Code Activity

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

```py live_py title=Spirograph
from turtle import *
from math import pi, sin, cos, lcm

R = 100
r = 60
d = 100
steps = 100
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