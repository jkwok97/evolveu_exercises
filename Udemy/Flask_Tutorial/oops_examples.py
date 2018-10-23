#basic syntax of OOP programming
#
#class NameOfClass():
#   def __init__(self, param1, param2):
#       self.param1=param1
#       self.param2=param2
#
#   def some_method(self):
#       #perform some action
#       print(self.param1)

class Dog():

    species = 'mammal'

    def __init__(self, breed, name):
        self.breed = breed
        self.name = name

sam = Dog('Huskie', 'Sammy')
new_dog = Dog('Golden', 'Cindy')

print (sam.breed)
print (sam.name)
print (sam.species)
print (new_dog.species)

#new example

class Circle():

    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius * self.radius * self.pi

    def circumference(self):
        return 2 * self.pi * self.radius

mycircle = Circle(10)
print(mycircle.radius)
print(mycircle.area())
print(mycircle.circumference())

#new example

class Animal():

    def __init__(self,fur):
        self.fur = fur
        print('Animal Created!')

    def report(self):
        print('Animal')

    def eat(self):
        print('Eating!')

class Cat(Animal):
    
    def __init__(self,fur):
        Animal.__init__(self,fur)
        print('Cat Created')

    def report(self):
        print('I am a cat!')

c = Cat('fuzzy')
c.eat()
c.report()
print(c.fur)

a = Animal('orange')
a.eat()
a.report()

#new example

class Book():

    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __repr__(self):
        return f"Title: {self.title}, Author: {self.author}"

    def __len__(self):
        return self.pages

mybook = Book('Python Rocks', 'Jeff', '205')
length_book = len(mybook)

print(mybook)
print(length_book)

