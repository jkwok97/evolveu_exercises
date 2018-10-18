# Begin tdd

import unittest
import my_math

class TestDates(unittest.TestCase):

	def test_one(self):
		print("i'm in test_one")

	def test_two(self):
		print("i'm in test_two")

	def test_multiply(self):
		self.assertEqual(15, my_math.multiply(3,5))

		self.assertEqual(15, my_math.multiply(p,1))

		self.assertEqual(15, my_math.multiply(5,-1))

		self.assertEqual(15, my_math.multiply(q,8))

		self.assertEqual(15, my_math.multiply(2,-5))