import sys
from openpyxl import load_workbook
from datetime import datetime

def my_max(largest_number):

	largest_number.sort()
	return (largest_number[-1])

def my_min(smallest_number):

	smallest_number.sort()
	return (smallest_number[0])

#def has_string(show_string):
	#come back to this
	#return show_string

def to_date(dt):
    return datetime.strptime(dt, "%Y-%m-%d").date()
