# Lec 13 Errors and Modules

## Assignment Updates

Stuff due soon:

- HW5 due April 12th (next Wednesday)
- Participation 7 due Thursday
- Quiz 8 due Thursday
- Lab on Friday

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 2, 3, 4, 5" label="Section 2, 3, 4, 5" default>
    <PowerPoint lec_src={require('./Lecture_13.pptx').default}/>
  </TabItem>
  <TabItem value="Section 1, 6" label="Section 1, 6">
    <PowerPoint lec_src={require('./Lecture_13_Cole.pptx').default}/>
  </TabItem>
</Tabs>

## Activities

### Identify the Error

Activity: Categorize and fix the errors in the code below. There may be no error. If there is an error, what is it and how can you fix it?

```py live_py title=Block_1
# Goal: Get 33Hello
x = 33
y = "Hello"
print(x + y)
```

```py live_py title=Block_2
# Goal Add the 2 entered numbers together: 12 + 13 = 25
x = input("Enter a number: ")
y = input("Enter another number: ")
print(x + y)
```

```py live_py title=Block_3
# Goal: Sum 1x and 2x and print the total
1x = 33
2x = 0
total = 1x + 2x
print(total)
```

```py live_py title=Block_4
# Goal: Print the product of the 2 numbers entered
num1 = input("Enter a number: ")
num2 = input("Enter another number: ")
product = int(num1) * int(num2)
print(product)
```

### Using Documentation
Great resources include:
- [w3schools.com](https://www.w3schools.com/python/default.asp)
- [docs.python.org](https://docs.python.org/3/)
- [geeksforgeeks.org](https://www.geeksforgeeks.org/python-programming-language/)
- [stackoverflow.com](https://stackoverflow.com/questions/tagged/python)
- [tutorialspoint.com](https://www.tutorialspoint.com/python/index.htm)
- [google.com](https://www.google.com)

Try to find the answer to the activity in the slides using these resources (or others)