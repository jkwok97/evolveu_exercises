
import sys
from openpyxl import load_workbook
from datetime import datetime

def find_tab(wb, date_s):
	for sheet in wb:
		if sheet.title == date_s[0:7]:
			return sheet
		return None

def cell_has_value(ws, row, col):
	if row > ws.max_row:
		return False
	if col > ws.max_column:
		return False
	if not ws.cell(row=row, column=col).value:
		return False
	if not ws.cell(row=row, column=col).value.strip():
		return False
	return True

def lookup(dictionary, key_value):
	if key_value in dictionary.values():
		return True
	return False

class Clients:

	client_list = {}

	def __init__ (self, first, last):
		self.first = first
		self.last = last

	@property
	def name(self):
		return '{} {}'.format(self.first, self.last)

	def __iters__(self):
		iters = dict((x,y) for x,y in client_list.__dict__.items())
		iters.update(self.__dict)
		for x,y in iters.items():
			yield x,y

client_list = client_list()
print(dict(a))