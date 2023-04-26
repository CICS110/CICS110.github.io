class Animal:
    def __init__(self, age, height):
        self.age = age
        self.height = height

    def eat(self):
        print("I am eating")

    def sleep(self):
        print("ZzzZzzzZzz")


class Dog(Animal):
    def __init__(self, age, height, breed) -> None:
        super().__init__(age, height)
        self.breed = breed

    def bark(self):
        print("Woof!")
