
class Person:
	
	def __init__ (self, first_name, last_name, age):
		self.first_name = first_name
		self.last_name = last_name
		self.age = age

	@property
	def name(self):
		return '{} {}'.format(self.first_name, self.last_name)

	def birthday(self):
		self.age += 1

## Major Exercise

class Clients:

	client_list = {}

	def __init__ (self, first, last):
		self.first = first
		self.last = last

	@property
	def name(self):
		return '{} {}'.format(self.first, self.last)

	def __iters__(self):
		iters = dict((x,y) for x,y in A.__dict__.items())
		iters.update(self.__dict)
		for x,y in iters.items():
			yield x,y

client_list = A()
print(dict(a))  
