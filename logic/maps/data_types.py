
def play_with_lists():
	print ("I am in play_with_lists")

	#create a list
	my_buds = ['lemi', 'roz', 'larry']

	#printing the length of the list
	print (len(my_buds))

	#printing the list
	print (my_buds)

	#adding a name to the list
	my_buds.append('ryker')

	#printing the new list
	print (my_buds)

	#printg the third value in the list
	print ((my_buds)[2])

	#print the second value in the list
	print ((my_buds)[1])

	#looping through the list to get values on separate lines
	for i in my_buds:
		print (i)

	#switching value in index 1 with index 2
	print ("before switch -" ,(my_buds))
	my_buds[1], my_buds[2] = my_buds[2], my_buds[1]
	print ("after switch -" ,(my_buds))

	#print new list
	print (my_buds)

	#adding a new entry into position 3
	my_buds.insert(2,'jill')
	print (my_buds)

	return None

#creating a new method to add all numbers in a list using tdd

def add_all(list_of_nums):
	total = 0
	for i in list_of_nums:
		total += i
	return total
#	return (sum(list_of_nums))

#creating a new method to get the average of all numbers in a list using tdd
def avg_all(list_of_nums):
	total = 0
	for i in list_of_nums:
		total += i
	return ((total) / len(list_of_nums))
#	return (sum(list_of_nums) / len(list_of_nums))  

def play_with_dict():
	print ("i am in play_with_dict")

#create a dictionary
	my_provs = {'BC':'British Columbia', 'AB':'Alberta', 'SK':'Saskatchewan'}

#printing the dictionary
	print (my_provs)

#printing name of province using code
	for province_name in my_provs:
		provinces = my_provs[province_name]
		print (provinces)

#printing the province to the west of us
	print ("The province to the west of AB is",(my_provs['BC']))

#printing the province to the east of us
	print ("The province to the east of AB is",(my_provs['SK']))

#adding the next province east of SK
	my_provs['MB'] = 'Manitoba'

#printing the dictionary to show added key value
	print (my_provs)

#printing all the different ways to access Manitoba
	print ("The province to the east of SK is",(my_provs['MB']))
	print (my_provs.get('MB'))

#checking if MB is in the dictionary
	print ('MB' in my_provs.keys())

#checking if NL is in the dictionary
	print ('NL' in my_provs.keys())

#using a loop print all the keys of the dictionary on a separate line
	for province_name in my_provs:
		provinces = my_provs[province_name]
		print (provinces)

#using a loop print all the keys and values of the dictionary on a separate line
	for key,val in my_provs.items():
		print (key,":",val)

#print the dictionary nothing fancy just the dictionary
	print (my_provs)

#now that we know how to do loops and access the keys and the values create a new 
#dictionary with the same provincial key that have a value that is = the length 
#of the province name.

	my_provs['BC'] = (len("British Columbia"))
	my_provs['AB'] = (len("Alberta"))
	my_provs['SK'] = (len("Saskatchewan"))
	my_provs['MB'] = (len("Manitoba"))
	print (my_provs)

#loop through the list of provinces with lengths and / 2 and + 10 to each one in
#the list

	for num_prov in my_provs:
		number = (my_provs[num_prov])
		print ((number/2)+10)

#print the dictionary

	print (my_provs)

#add two more provinces to the dictionary of provinces and names
	
	my_provs['ON'] = 'Ontario'
	my_provs['QC'] = 'Quebec'
	print (my_provs)
	
	return None
#play_with_lists()
play_with_dict()




