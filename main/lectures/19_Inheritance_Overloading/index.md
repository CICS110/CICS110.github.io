# Lec 19 Inheritance and Overloading

## Assignment Updates

Stuff due soon:

- HW6 Due Wednesday (Files)
- Participation due Thursday
- Quiz due Thursday
- Lab on Friday
- Capstone Proposal Due Friday

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 1, 6" label="Section 1, 6" default>
    <PowerPoint lec_src={require('./Lecture_19_Cole.pptx').default}/>
  </TabItem>
</Tabs>

## Activities

### Animal Classes Code:
Download: [Animals.py](Animals.py)
```py live_py title=Animals.py
class Animal:
    def __init__(self, age, height):
        self.age = age
        self.height = height

    def eat(self):
        print("I am eating")

    def sleep(self):
        print("ZzzZzzzZzz")


class Dog(Animal):
    def __init__(self, age, height, breed) -> None:
        super().__init__(age, height)
        self.breed = breed

    def bark(self):
        print("Woof!")
```

### Overloading Code:
Download: [Overloading.py](Overloading.py)
```py live_py title=Overloading.py
class Currency:
    def __init__(self, dollars, cents):
        self.dollars = dollars
        self.cents = cents

    def __str__(self):
        return f"${self.dollars}.{self.cents}"

    def __add__(self, other):
        dollars = self.dollars + other.dollars
        cents = self.cents + other.cents
        if cents >= 100:
            dollars += 1
            cents -= 100
        return Currency(dollars, cents)


currency_1 = Currency(5, 50)  # $5.50
currency_2 = Currency(1, 75)  # $1.75
total = currency_1 + currency_2
print(total)  # $7.25
```
