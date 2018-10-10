#
#Jeff Kwok
#Sept, 14, 2018
#This program will display clients name and issues from cSpace Booking worksheet
#
import openpyxl
wb = openpyxl.load_workbook('cSpace_Booking.xlsx')
sheets = wb['Clients']

names = []
issues = []
for c in sheets.rows:
	names.append(c[0].value)
	issues.append(c[5].value)
del names[0]
for count, name in enumerate (names,1):
	print (name.split()[0], name.split()[1], issues[count])