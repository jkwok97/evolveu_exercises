import unittest
import tdd

class TestDates(unittest.TestCase):

	def test_add_five(self):

		self.assertEqual(8,tdd.add_five(3))
		self.assertEqual(9,tdd.add_five(4))
		self.assertEqual(10,tdd.add_five(5))
		self.assertEqual(2,tdd.add_five(3))
 