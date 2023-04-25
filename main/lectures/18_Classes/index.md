# Lec 18 Classes

## Assignment Updates

Stuff due soon:

- HW6 Due Wednesday (Files)
- Participation due Thursday
- Qui due Thursday
- Lab on Friday
- Capstone Proposal Due Friday

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 2, 3, 4, 5" label="Section 2, 3, 4, 5" default>
    <PowerPoint lec_src={require('./Lecture_18.pptx').default}/>
  </TabItem>
  <TabItem value="Section 1, 6" label="Section 1, 6" default>
    <PowerPoint lec_src={require('./Lecture_18_Cole.pptx').default}/>
  </TabItem>
</Tabs>

## Activities

### Counter Code:
Download: [Counter.py](Counter.py)
```py live_py title=Counter.py
class Counter:
    def __init__(self, start):
        self.count = start
    def inc(self):
        self.count += 1

my_counter = Counter(5)
print(my_counter.count)

my_counter.inc()
print(my_counter.count)
```

### Undo Code:
Download: [Undo.py](Undo.py)
```py live_py title=Undo.py
# This class is a blueprint for an object that can be used to store a value that can be changed and undone
class Undo:

    # This is the constructor (it is called when the object is created)
    def __init__(self, start_value=0):
        # History is a list of values that have been set previously
        self.history = [start_value]
        # History index stores the index of the current value that is being used
        self.history_index = 0

    # This method sets the value of the object (in a way that can be undone)
    def set(self, new_value):
        # If we have undone some changes, and we want to make a new change, we need to delete the changes that we have undone
        # To do this, we remove everything after the current index (using slicing)
        self.history = self.history[:self.history_index + 1]
        self.history.append(new_value)
        self.history_index += 1

    # This method returns the current value of the object
    def get(self):
        return self.history[self.history_index]

    # This method undoes the last change to the object (if possible)
    def undo(self):
        if self.history_index > 0:
            self.history_index -= 1
        return self.history[self.history_index]

    # This method redoes the last change to the object (if possible)
    def redo(self):
        if self.history_index < len(self.history) - 1:
            self.history_index += 1
        return self.history[self.history_index]
```
