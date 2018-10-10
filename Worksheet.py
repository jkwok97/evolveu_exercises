#
# Jeff Kwok
# Sept 14, 2018
# This program is display worksheet tabs for the cSpace booking assignment

import openpyxl
wb = openpyxl.load_workbook('cSpace_Booking.xlsx')
sheets = wb.sheetnames
for i in sheets:
    print (i)
