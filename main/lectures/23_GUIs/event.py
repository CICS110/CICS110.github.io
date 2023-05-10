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