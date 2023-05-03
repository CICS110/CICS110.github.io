# Lec 21 Web APIs

## Assignment Updates

Stuff due soon:

- HW7 Due 5/15
- Capstone Project Presentations 5/16 and 5/17
- Quiz due Thursday

## Slides

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { PowerPoint } from '@site/src/components/PowerPoint'

<Tabs>
  <TabItem value="Section 1, 2, 3, 4, 5, 6" label="Section 1, 2, 3, 4, 5, 6" default>
    <PowerPoint lec_src={require('./Lecture_21.pptx').default}/>
  </TabItem>
</Tabs>

## Notes

### APIs

- What is an API?
    - Application Programming Interface: A set of functions exposed by a service that allows you to interact with the service
    - Allows you to interact with a service without having to know how the service works
    - Example: Google Maps API
        - Allows you to get directions, find places, etc.
        - You don't need to know how Google Maps works to use it
        - You just need to know how to use the API
- What is a Web API
    - An API that can be accessed through a URL
    - URL = The address of a website: https://www.google.com/
- How do you use an API?
    - You make a request to the API
    - The API returns a response
    - The response contains the data you requested
- Web APIs
    - APIs that are exposed over the internet
    - You make a request to a URL
    - The response is returned in a format like JSON (python dictionary) usually
    - Example: Google Maps API
        - You make a request to a URL
        - The response is returned in JSON format
        - You can then parse the JSON and use the data
- Example: https://catfact.ninja/#/Facts/getRandomFact
    - This is an API that returns a random cat fact
    - Click the "Try it out" button to get a random cat fact!

### JSON

- The cat fact API returns a response in JSON format
- What is JSON
    - JSON = JavaScript Object Notation
    - It's basically a python dictionary

### URLlib

- How do we make a request to an API?
- One way: `urllib`
    - `urllib` is a builtin python library that allows you to make requests to URLs
- Example:
```py
import urllib.request
url = "https://catfact.ninja/fact"
response = urllib.request.urlopen(url)
print(response.read())
```
- This returns a response in bytes (notice the ***b*** at the front):
```py
b'{"fact":"Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.","length":145}'
```
- We can decode it to a string, and then parse it as JSON using the `json` library:
```py
import urllib.request
import json
url = "https://catfact.ninja/fact"
response = urllib.request.urlopen(url)
response_string = response.read().decode('utf-8')
response_dict = json.loads(response_string)
print(response_dict)
```
- This prints:
```py
{'fact': 'Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.', 'length': 145}
```

### Requests

- Urlib is a little bit clunky
- There is a better library called `requests`
    - `requests` is a third party library that you need to install
    - You can install it with `pip install requests` (or `pip3 install requests`)
- New Code:
```py
import requests
url = "https://catfact.ninja/fact"
response = requests.get(url)
response_dict = response.json()
print(response_dict)
```
- This prints:
```py
{'fact': 'Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.', 'length': 145}
```
- Didn't have to decode the response to a string
- Didn't have to parse the string as JSON
- `requests` does all of this for us

### Activity

- boredapi is an API that returns a random activity
    - https://www.boredapi.com/ is the website
    - https://www.boredapi.com/documentation is the documentation
- Try to use either `urllib` or `requests` to make a request to the boredapi!

### API Keys

Not covered in class, but here if anyone is curious

- Some APIs require an API key
    - An API key is a unique identifier that is used to authenticate you when you make a request to an API
    - It is used to track your usage of the API, and to prevent abuse. Also, it allows the API to charge you if it is a paid API
- If an API requires an API key, you will need to register for one
    - You will need to go to the API's website and register for an API key
    - You will then need to pass the API key in the request
- Example: https://openweathermap.org/api
- We won't cover this in class, but ask chatGPT if you want to know more

