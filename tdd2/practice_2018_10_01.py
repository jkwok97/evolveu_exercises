#
# This was practice from session
#

def two_numbers(num1, num2):
	return (num1 + num2)

def two_div_numbers (num3, num4):
	return (num3 / num4)

def final_pay (rate, hours):
	return (rate * hours)

def how_many (occurences):
	num_count = {}
	for i in occurences:
		if i in num_count:
			num_count[i] += 1
		else:
			num_count[i] = 1
	return (num_count)

#	return (dict((i,occurences.count(i)) for i in set(occurences)))

def welcome_province (province, prov_map):
	if province in prov_map:
		key_value = province.get(province)
		key_value = ('Welcome to ' + key_value)
		return (key_value)

#	if province == 'AB':
#		return ('Welcome to ' + str(prov_map['AB']))
#	elif province == 'BC':
#		return ('Welcome to ' + str(prov_map['BC']))
#	elif province == 'SK':
#		return ('Welcome to ' + str(prov_map['SK']))
#	elif province == 'MB':
#		return ('Welcome to ' + str(prov_map['MB']))
#	else:
#		return ('sorry, you are outside western canada')


#	return ('Welcome to ' + str(prov_map['AB']))

	