
import unittest
import major_exercise
import datetime
from openpyxl import Workbook, worksheet, load_workbook


class TestTddExcel(unittest.TestCase):

	def test_find_tab(self):
		wb = load_workbook('cSpace_Bookingv1.xlsx')
		entered_date = '2018-07'

		ws = tdd2.find_tab(wb, entered_date)
		self.assertIsInstance(ws, worksheet.Worksheet)
		self.assertEqual(entered_date[0:7], ws.title)

		self.assertIsNone(tdd2.find_tab(wb, '2011-07'))

	def test_cell_has_value(self):
		wb = Workbook()
		ws = wb.active

		self.assertFalse(tdd2.cell_has_value(ws, 1, 1))

		ws.cell(row=1, column=1).value = ''
		self.assertFalse(tdd2.cell_has_value(ws, 1, 1))

		ws.cell(row=1, column=1).value = 'Room a'
		self.assertTrue(tdd2.cell_has_value(ws, 1, 1))

		ws.cell(row=1, column=1).value = '   '
		self.assertFalse(tdd2.cell_has_value(ws, 1, 1))

		self.assertFalse(tdd2.cell_has_value(ws, 100, 100))
		self.assertFalse(tdd2.cell_has_value(ws, 1, 100))
		self.assertFalse(tdd2.cell_has_value(ws, 100, 1))

	def test_verify_name(self):
		self.assertTrue(True, tdd2.lookup({'client_1':'Carri', 'client_2':'Sherrie', 'client_3':'Geri'} , 'Carri'))
