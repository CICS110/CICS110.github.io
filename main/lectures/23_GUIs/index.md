# Lec 23 GUIs

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
    <PowerPoint lec_src={require('./Lecture_23_Cole.pptx').default}/>
  </TabItem>
  <TabItem value="Section 2, 3, 4, 5" label="Section 2, 3, 4, 5" default>
    <PowerPoint lec_src={require('./Lecture_23.pptx').default}/>
  </TabItem>
</Tabs>

## Resources

- [TKinter Documentation](https://docs.python.org/3/library/tkinter.html)
- [TKinter Tutorial](https://www.tutorialspoint.com/python/python_gui_programming.htm)
- Download [gui.py](./gui.py)
    - This code is a simple GUI that displays a label and a button using TKinter
- Download [event.py](./event.py)
    - This code has a button that triggers an event when clicked
- Download [stopwatch.py](./stopwatch.py)
    - This code is a stopwatch that counts up when you click the start button
- Download [stopwatch_lap.py](./stopwatch_lap.py)
    - This code is a stopwatch that counts up when you click the start button. It also has a lap button that records the current time and displays it in a list

## Notes

### Topics

- GUIs
- Events
- TKinter

### GUIs

- GUI = Graphical User Interface
    - A GUI is a program that has a window with buttons, text boxes, etc.
    - Example: A web browser is a GUI

### TKinter

- TKinter is a Python library for creating GUIs
- We can use TKinter to create a GUI
    - We can create a window
    - We can add buttons to the window
    - We can add text boxes to the window
    - We can add other widgets to the window
- How do we do this?
    - First, we need to import the TKinter library
    - Then, we need to create a window
    - Then, we need to add widgets to the window
    - Finally, we need to start the main loop
        - The main loop is a loop that runs forever
- Example:
```py
from tkinter import Tk, Label, Button

# Create the main window: 400x250 pixels, titled 'My App'
window = Tk()
window.title("My App")
window.geometry("400x250")

button = Button(
    text="Click Me!", # Text to display on the button
    width=25, # Width 
    height=5, # Height 
    bg="blue", # Button color
    fg="yellow", # Text color
)

# adds the button to the window
button.place(x=180, y=100)

label = Label(
    text="Hello World!", # Text to display
    font=("Arial", 24, "bold") # Font (font, size, style)
)

# Adds the label to the window
label.place(x=180, y=50)

# Starts the GUI
window.mainloop()
```

### Events

- On a GUI, when you click a button, something happens
    - Currently, we write code that immediately executes
    - How do we write code that executes when something happens?
- We can do this with events
    - An event is something that happens
        - Clicking a button is an event
        - Pressing a key is an event
    - We can write code that executes when an event happens
        - The code that executes when an event happens is called an event handler
        - Examples:
            - Code that executes when a button is clicked
            - Code that executes when a key is pressed
- How do we do this?
    - First, we need an way to create an event
        - Example: A button that can be clicked
    - Then, we need to write code that executes when the event happens
        - This is the event handler
        - Example: A print statement that prints 'Button clicked'
- Example:
```py
from tkinter import Tk, Button

# Create the main window: 400x250 pixels, titled 'A Button', white background
ws = Tk()
ws.geometry('400x250')
ws.title('A Button')
ws.config(bg='#ffffff')

# A function that prints 'Button clicked' to the console
def button_clicked():
    print('Button clicked')
    
# Create a button that calls the button_clicked function when clicked
# In this case, the event of clicking the button is handled by the 
# button_clicked function
btn = Button(ws, text='Click Me!', command=button_clicked)

# Place the button in the main window
btn.place(x=180, y=100)

# Starts the GUI and listens for events
ws.mainloop()
```

### Stopwatch

- We can use events to create a stopwatch
    - A stopwatch is a program that counts the number of seconds that have passed
    - It has a start button, a stop button, and a reset button
    - When the start button is clicked, the stopwatch starts counting
    - When the stop button is clicked, the stopwatch stops counting
    - When the reset button is clicked, the stopwatch resets to 0
- Example:
```py
from tkinter import Tk, Label, Button

class Stopwatch:
    """A simple stopwatch GUI app."""  
      
    def __init__(self):
        # Sets the background color of the main window (to white)
        BACKGROUND = '#ffffff'
        
        # Create the main window: 400x250 pixels, titled 'Stopwatch'
        ws = Tk()
        ws.geometry('400x250')
        ws.title('Stopwatch')
        ws.config(bg=BACKGROUND)
        ws.resizable(False, False)

        # Lbl is the label that displays the count
        lbl = Label(ws, text="00:00", fg="black",
                    bg=BACKGROUND, font="Verdana 40 bold")
        
        # start_btn is the button that starts the stopwatch
        start_btn = Button(ws, text='Start', width=15, command=self.StartTimer)
        
        # stop_btn is the button that stops the stopwatch
        stop_btn = Button(ws, text='Stop', width=15,
                          state='disabled', command=self.StopTimer)
        
        # reset_btn is the button that resets the stopwatch
        reset_btn = Button(ws, text='Reset', width=15,
                           state='disabled', command=self.ResetTimer)

        # Moves the buttons and label to the correct position
        lbl.place(x=120, y=60)
        start_btn.place(x=30, y=200)
        stop_btn.place(x=150, y=200)
        reset_btn.place(x=270, y=200)

        # Count keeps track of the time elapsed
        self.count = 0
        # Running keeps track of if the stopwatch is running
        self.running = None
        
        # Elements in the GUI
        self.ws = ws
        self.lbl = lbl
        self.start_btn = start_btn
        self.stop_btn = stop_btn
        self.reset_btn = reset_btn

        # Starts the GUI
        ws.mainloop()

    def Count(self):
        """Adds one second to the count and updates the label. Runs every second."""
        
        # If the stopwatch is not running, don't do anything        
        if self.running is None:
            return
        
        # Updates the count and label
        self.count += 1
        secs = int(self.count % 60)
        mins = int(self.count // 60)
        self.lbl['text'] = f'{mins:02}:{secs:02}'
        
        # Sets an event to call Count again after 1 second
        self.running = self.ws.after(1000, self.Count)

    def StartTimer(self):
        """Starts the stopwatch."""
        
        # Creates an event to call Count after 1 second        
        self.running = self.ws.after(1000, self.Count)
        
        # Enables and disables the correct buttons
        self.start_btn['state'] = 'disabled'
        self.stop_btn['state'] = 'normal'
        self.reset_btn['state'] = 'normal'

    def StopTimer(self):
        """Stops the stopwatch. Does not reset the count."""
        
        # Cancels the event calling Count
        self.running = self.ws.after_cancel(self.running)
        
        # Enables and disables the correct buttons
        self.start_btn['state'] = 'normal'
        self.stop_btn['state'] = 'disabled'
        self.reset_btn['state'] = 'normal'

    def ResetTimer(self):
        """Resets the stopwatch. Also stops the stopwatch."""    
        
        # Cancels the event calling Count and resets the count    
        self.running = None
        self.count = 0
        
        # Resets the label and enables/disables the correct buttons
        self.lbl['text'] = '00:00'
        self.start_btn['state'] = 'normal'
        self.stop_btn['state'] = 'disabled'
        self.reset_btn['state'] = 'disabled'

# Creates the stopwatch
Stopwatch()
```