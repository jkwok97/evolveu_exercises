
# what is a function? 
# a function is a subroutine or procedure used to utilize code in mulitple places in a program
# two things you can do with a function is define and call
# python knows a function is started with a def statement and ends when indentation returns to original place

# how do you execute a function?
# you call the function

# a test is code to test the functionality of your product code
# a test can be used to test a function (assert statements) or run a function (see what the code is doing/runs)

# pytest is a software test framework which finds tests you've written, runs the tests and reports results
# pytest will look for a test file, product file, functions and methods written inside each

# creating a function / tests
# 1. create a stub
# 2. create a test of the stub, make it fail test
# 3. re-write the stub for functionality, re-write the test to pass

# math operators in python
# 1. + - addition
# 2. - - subtraction
# 3. * - multiplication
# 4. / - division
# 5. % - modulus (remainder of the division of left operand by the right)
# 6. // - Floor division (division that results into whole number adjusted to the left in the number line)
# 7. ** - Exponent (left operand raised to the power of right) (x**y - x to the power of y)

def dummy_math(a,b):
	addition = a + b
	subtraction = a - b
	multiplication = a * b
	division = a / b
	modulus = a % b
	floor_division = a // b
	exponent = a ** b

def modulus(a,b):
	return a % b

def floor_division(a,b):
	return a // b

def exponent(a,b):
	return a ** b

def largest_num(a,b,c):
	if (a > b) and (a > c):
		return a
	elif (a < b) and (b > c):
		return b
	else:
		return c

def largest_num2(a,b,c):
	if a > b:
		if a > c:
			return a
	elif a < b:
		if b > c:
			return b
		else:
			return c

# range function
# a function that generates a list of numbers thats used to iterate over with for loops
# ex. for i in range(3,6)
# output 3,4,5
#range([start], stop[, step])

def range_for(a,b):
	my_range = []
	for item in range(a,b):
		my_range.append(item)
	return (my_range[1:])

def range_while(a,b):
	my_range = []
	item = a
	while item in range(a,b):
		my_range.append(item)
		item = item + 1
	return (my_range[1:])

def range_for_odd(a,b):
	my_range = []
	for item in range(a,b):
		if item % 2 != 0:
			my_range.append(item)
	return (my_range[1:])

def range_while_odd(a,b):
	my_range = []
	item = a
	while item in range(a,b):
		if item % 2 != 0:
			my_range.append(item)
		item = item + 1
	return (my_range[1:])

# comparison operators
# == equal to
# != not equal to
# < less than
# > greater than
# <= less than or equal to
# >= greater than or equal to

def dummy_operators(a,b):
	equal = a == b
	print (equal)
	not_equal = a != b
	print (not_equal)
	less = a < b
	print (less)
	greater = a > b
	print (greater)
	less_equal = a <= b
	print (less_equal)
	greater_equal = a >= b
	print (greater_equal)

def print_list(list_of_teams):
	full_list = list_of_teams
	print (','.join(full_list))

def my_max(largest_number):
	if largest_number != []:
		largest = largest_number[0]
		for large in largest_number:
			if large > largest:
				largest=large
		return largest
	else:
		return None

def long_string(list_of_strings):
	count = 0
	for item in list_of_strings:
		if len(item) > count:
			count = len(item)
			word = item
	return word

def read_print_file(file):
	file = open('my_text_file.txt')
	lines = file.readlines()
	print (lines)








