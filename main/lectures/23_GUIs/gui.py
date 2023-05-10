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

# Starts the GUI and listens for events
window.mainloop()