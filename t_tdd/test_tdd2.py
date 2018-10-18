import unittest
import tdd2
import datetime
from openpyxl import Workbook, worksheet

import tdd_excel

class TestDates(unittest.TestCase):

	def test_my_max(self):

		self.assertEqual(5,tdd2.my_max([1,2,3,4,5]))

	def test_my_min(self):

		self.assertEqual(1,tdd2.my_min([1,2,3,4,5]))

	#def test_has_string(self):

		#self.assertEqual(["Mary had"],tdd2.has_string(["Mary had","a little lamb","little lamb","Whose fleece",],"Mary"))

class TestTddExcel(unittest.TestCase):

	def test_to_date(self):

		dt = tdd2.to_date("2010-08-02")
		self.assertIsInstance(dt, datetime.date)
		self.assertEqual(2010,dt.year)
		self.assertEqual(8,dt.month)
		self.assertEqual(2,dt.day)