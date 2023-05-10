from tkinter import Tk, Label, Button

class Stopwatch:
    """A simple stopwatch GUI app."""  
      
    def __init__(self):
        # Sets the background color of the main window (to white)
        self.BACKGROUND = '#ffffff'
        BACKGROUND = self.BACKGROUND 
        # Create the main window: 400x250 pixels, titled 'Stopwatch'
        ws = Tk()
        ws.geometry('400x250')
        ws.title('Stopwatch')
        ws.config(bg=BACKGROUND)
        ws.resizable(False, False)

        # Lbl is the label that displays the count
        lbl = Label(ws, text="00:00", fg="black",
                    bg=BACKGROUND, font="Verdana 40 bold")
        
        lap_lbl = Label(ws,text="00:00",fg='black',bg=BACKGROUND, font="Verdana 20")

        # start_btn is the button that starts the stopwatch
        start_btn = Button(ws, text='Start', width=15, command=self.StartTimer)
        
        # stop_btn is the button that stops the stopwatch
        stop_btn = Button(ws, text='Stop', width=15,
                          state='disabled', command=self.StopTimer)
        
        # reset_btn is the button that resets the stopwatch
        reset_btn = Button(ws, text='Reset', width=15,
                           state='disabled', command=self.ResetTimer)

        lap_btn = Button(ws, text="Lap", width=10,state='disabled', command=self.LapTimer)

        # Moves the buttons and label to the correct position
        lbl.place(x=120, y=60)
        lap_lbl.place(x=165, y=125)
        start_btn.place(x=30, y=200)
        stop_btn.place(x=150, y=200)
        reset_btn.place(x=270, y=200)
        lap_btn.place(x=169,y=169)

        # Count keeps track of the time elapsed
        self.count = 0
        # Running keeps track of if the stopwatch is running
        self.running = None
        #lap keeps track of last time elapsed
        self.lap = -1
        # Elements in the GUI
        self.ws = ws
        self.lbl = lbl
        self.lap_lbl = lap_lbl
        self.start_btn = start_btn
        self.stop_btn = stop_btn
        self.reset_btn = reset_btn
        self.lap_btn = lap_btn

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
        self.lap_btn['state'] = 'normal'

    def StopTimer(self):
        """Stops the stopwatch. Does not reset the count."""
        
        # Cancels the event calling Count
        self.running = self.ws.after_cancel(self.running)
        
        # Enables and disables the correct buttons
        self.start_btn['state'] = 'normal'
        self.stop_btn['state'] = 'disabled'
        self.reset_btn['state'] = 'normal'
        self.lap_btn['state'] = 'normal'

    def ResetTimer(self):
        """Resets the stopwatch. Also stops the stopwatch."""    
        
        # Cancels the event calling Count and resets the count    
        self.running = None
        self.count = 0
        self.lap = -1
        # Resets the label and enables/disables the correct buttons
        self.lbl['text'] = '00:00'
        self.lap_lbl['text'] = '00:00'
        self.start_btn['state'] = 'normal'
        self.stop_btn['state'] = 'disabled'
        self.reset_btn['state'] = 'disabled'
        self.lap_btn['state'] = 'disabled'
        self.lap_lbl['bg'] = self.BACKGROUND
    
    def LapTimer(self):
        '''Laps the stopwatch, count resets to zero and last time is temporarily saved'''
        
        self.running = self.ws.after_cancel(self.running)
        old_count = self.lap
        self.lap = self.count
        self.count = 0
        secs = int(self.lap % 60)
        mins = int(self.lap // 60)
        self.lap_lbl['text'] = f'{mins:02}:{secs:02}'
        self.lbl['text'] = '00:00'
        self.running = self.ws.after(1000, self.Count)

        if(old_count>self.lap):
            self.lap_lbl['bg'] = 'green'
        else:
            self.lap_lbl['bg'] = 'red'



# Creates the stopwatch
Stopwatch()