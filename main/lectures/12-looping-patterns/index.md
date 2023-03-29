# Lec 12 Looping Patterns

## Assignment Updates

Stuff due this week:

- Participation 6 due Thursday
- Quiz 6 due Thursday
- Lab on Friday
- HW 4 due Wednesday

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 2, 3, 4, 5" label="Section 2, 3, 4, 5" default>
    <PowerPoint lec_src={require('./Lecture_12.pptx').default}/>
  </TabItem>
  <TabItem value="Section 1, 6" label="Section 1, 6">
    <PowerPoint lec_src={require('./Lecture_12_Cole.pptx').default}/>
  </TabItem>
</Tabs>

## Code for Activities

For the final activity:
```py live_py title=Foods
food_dict = [
    {'name': 'hamburger', 'restaurant': 'The Grill', 'price': 10.99},
    {'name': 'Chicken and Fries Basket', 'restaurant': 'The Grill', 'price': 8.99},
    {'name': 'Burrito', 'restaurant': 'Tamales', 'price': 9.99},
    {'name': 'Salad', 'restaurant': 'Tamales', 'price': 6.99},
    {'name': 'Sushi', 'restaurant': 'Wasabi', 'price': 12.99},
    {'name': 'Ham and Cheese Sandwich', 'restaurant': 'Deli Delish', 'price': 5.99},
    {'name': 'Turkey and Cheese Sandwich', 'restaurant': 'Deli Delish', 'price': 5.99},
    {'name': 'Roast Beef Sandwich', 'restaurant': 'Deli Delish', 'price': 5.99},
    {'name': 'Cookie', 'restaurant': 'Yum Bakery', 'price': 1.99}
]
```