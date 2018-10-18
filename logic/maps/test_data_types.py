
import unittest
import data_types

class TestDates(unittest.TestCase):

	def test_add_all(self):
		self.assertEqual(15,data_types.add_all([1,2,3,4,5]))

	def test_avg_all(self):
		self.assertEqual(3,data_types.avg_all([1,2,3,4,5]))