def v1():
    while True:
        name = input("What is your name? ")
        print(f"Hi {name}!")
    
def v2():
    while True:
        name = input("What is your name? ")
        if name == 'quit':
            break
        print(f"Hi {name}!")
        
def v3():
    while True:
        name = input("What is your name? ")
        if name == '':
            print("You didn't enter a name!")
            continue
        if name == 'quit':
            break
        print(f"Hi {name}!")