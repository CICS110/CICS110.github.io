# Lec 22 Lambdas

## Assignment Updates

Stuff due soon:

- HW7 Due 5/15
- Capstone Project Presentations 5/16 and 5/17

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 1, 6" label="Section 1, 6">
    <PowerPoint lec_src={require('./Lecture_22_Cole.pptx').default}/>
  </TabItem>
  <TabItem value="Section 2, 3, 4, 5" label="Section 2, 3, 4, 5" default>
    <PowerPoint lec_src={require('./Lecture_22_Will.pptx').default}/>
  </TabItem>
</Tabs>

## Notes

### Topics

- Lambdas
- Map (top level)
- Filter (top level)

### Map

- What we know:
    - To map over a collection is to apply a function to each element in the collection
    - The result of the map is a new collection of the same size as the original
    - The new collection is the result of applying the function to each element in the original collection
    - Example: (Applies square function to each element in the list)
    ```py
    def square(x):
        return x * x
    my_list = [1, 2, 3, 4, 5]
    map_result = []
    for num in my_list:
        map_result.append(square(num))
    ```
- This is kindof bulky, and we can shrink it with a list comprehension:
    ```py
    def square(x):
        return x * x
    my_list = [1, 2, 3, 4, 5]
    map_result = [square(num) for num in my_list]
    ```
- Another way to write this is to use the `map()` function
    - `map()` takes two arguments: a function and a collection
    - Example:
    ```py
    def square(x):
        return x * x
    my_list = [1, 2, 3, 4, 5]
    map_result = map(square, my_list)
    ```
    - It returns a map object, to get a list we need to cast it to a list
    ```py
    def square(x):
        return x * x
    my_list = [1, 2, 3, 4, 5]
    map_result = list(map(square, my_list))
    ```

### Lambdas

- The Map function takes a function as its first argument
    - We currently have to define a function and then pass it in
    - But, is there a way to define a function and pass it in without having to define it above?
    - Yes, we can use a lambda function
- A lambda function is an anonymous function
    - anonymous = It is a function without a name
    - It is a function that is defined inline
    - Example:
    ```py
    my_list = [1, 2, 3, 4, 5]
    map_result = list(map(lambda x: x * x, my_list))
    ```
- How do you write it?
    - First, you write the keyword `lambda`
    - Second, you write the arguments: `lambda x, y, z:` (followed by a colon)
    - Finally, you write the body of the function: `lambda x, y, z: x + y + z`
        - The body of the function is a single expression
        - The result of the expression is the return value of the function
    - Example: (lambda function that takes two arguments and returns their sum)
    ```py
    lambda x, y: x + y
    ```
    - Activity: Write a lambda function that takes a number and returns it doubled
        - Answer: `lambda x: x * 2`
- Why use a lambda function?
    - It's more readable (sometimes)
    - Can be defined inline (no need to define it above)
- Activity: Use `map()` and a `lambda` to map each number in a list to that number plus 1
    - Answer: `list(map(lambda x: x + 1, my_list))`

### Filter

- Like map, filter is a top level function
    - It takes a function and a collection
    - It returns a new collection
    - The new collection is the result of applying the function to each element in the original collection. If the function returns True, the element is included in the new collection. If the function returns False, the element is not included in the new collection
- Example: (Filters out all even numbers)
```py
my_list = [1, 2, 3, 4, 5]
filter_result = list(filter(lambda x: x % 2 == 1, my_list))
```
- NOTE: Filter returns a filter object (like `map`), so we need to cast it to a list
- Activity: Use `filter()` and a `lambda` to filter out all numbers greater than 3
    - Answer: `list(filter(lambda x: x <= 3, my_list))`

### Layering Map and Filter

- We can layer map and filter to do more complex operations
- Example: (Filters out all even numbers and squares the remaining numbers)
```py
my_list = [1, 2, 3, 4, 5]
res = list(map(lambda x: x * x, filter(lambda x: x % 2 == 1, my_list)))
```
- This can get disgusting... so we can use list comprehensions instead
- Example: (Filters out all even numbers and squares the remaining numbers)
```py
my_list = [1, 2, 3, 4, 5]
res = [x * x for x in my_list if x % 2 == 1]
```
- Depending on the situation, one may be more readable than the other
- Activity: Given a list of numbers, get all numbers greater than 3 and make them negative
    - Answer: `[x * -1 for x in my_list if x > 3]`
    - Answer: `list(map(lambda x: x * -1, filter(lambda x: x > 3, my_list)))`
    - Answer: 
    ```py
    my_list = [1, 2, 3, 4, 5]
    res = []
    for num in my_list:
        if num > 3:
            res.append(num * -1)
    ```
    - All of these are valid, but some are more readable than others. Pick whichever one you like best! (but be careful of readability)