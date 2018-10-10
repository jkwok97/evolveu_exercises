
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

