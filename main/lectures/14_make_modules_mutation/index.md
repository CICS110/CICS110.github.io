# Lec 14 Making Modules

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
  <TabItem value="Section 1, 2, 3, 4, 5, 6" label="Section 1, 2, 3, 4, 5, 6" default>
    <PowerPoint lec_src={require('./Lecture_14.pptx').default}/>
  </TabItem>
</Tabs>

## Activities

### Starter code for the date_printing module

Download: [date_printing.py](date_printing.py)

```py live_py title=date__printing.py
import datetime

formats = ["nice", "slashes"]


def get_date_nice(date: datetime.date) -> str:
    year = date.year
    month = date.strftime("%B")
    day = date.day
    return f"{month} {day}, {year}"


def get_with_slashes(date: datetime.date) -> str:
    year = date.year
    month = date.month
    day = date.day
    return f"{month}/{day}/{year}"


def print_date(date: datetime.date, format: str) -> None:
    if format == "nice":
        print(get_date_nice(date))
    elif format == "slashes":
        print(get_with_slashes(date))
    else:
        raise ValueError("Unknown format")
```