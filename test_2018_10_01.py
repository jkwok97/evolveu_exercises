
import unittest
import practice_2018_10_01

class TestDates(unittest.TestCase):

	def test_add_numbers(self):
		self.assertEqual(12,practice_2018_10_01.two_numbers(8,4))
		self.assertEqual(22,practice_2018_10_01.two_numbers(11,11))
		self.assertEqual(56,practice_2018_10_01.two_numbers(50,6))
		self.assertEqual(101,practice_2018_10_01.two_numbers(50,51))

	def test_divide_numbers(self):
		self.assertEqual(4,practice_2018_10_01.two_div_numbers(12,3))
		self.assertEqual(12,practice_2018_10_01.two_div_numbers(36,3))
		self.assertEqual(10,practice_2018_10_01.two_div_numbers(100,10))
		self.assertEqual(8,practice_2018_10_01.two_div_numbers(24,3))

	def test_pay(self):
		self.assertEqual(600,practice_2018_10_01.final_pay(15,40))
		self.assertEqual(200,practice_2018_10_01.final_pay(10,20))
		self.assertEqual(250,practice_2018_10_01.final_pay(25,10))
		self.assertEqual(375,practice_2018_10_01.final_pay(5,75))

	def test_occur(self):
		self.assertEqual({1:4, 2:1, 3:1, 5:1},practice_2018_10_01.how_many([1,2,3,1,5,1,1]))
		self.assertEqual({1:1, 2:4, 3:1, 5:1},practice_2018_10_01.how_many([2,1,3,2,5,2,2]))
		self.assertEqual({1:1, 2:1, 3:1, 5:4},practice_2018_10_01.how_many([5,2,3,5,5,5,1]))
		self.assertEqual({1:1, 2:1, 3:4, 5:1},practice_2018_10_01.how_many([3,2,3,1,5,3,3]))

	def test_province(self):
		self.assertEqual("Welcome to Alberta",practice_2018_10_01.welcome_province('AB',{'BC':'British Columbia', 'AB':'Alberta', 'SK':'Saskatchewan', 'MB':'Manitoba'}))
		self.assertEqual("Welcome to British Columbia",practice_2018_10_01.welcome_province('BC',{'BC':'British Columbia', 'AB':'Alberta', 'SK':'Saskatchewan', 'MB':'Manitoba'}))
		self.assertEqual("Welcome to Saskatchewan",practice_2018_10_01.welcome_province('SK',{'BC':'British Columbia', 'AB':'Alberta', 'SK':'Saskatchewan', 'MB':'Manitoba'}))
		self.assertEqual("Welcome to Manitoba",practice_2018_10_01.welcome_province('MB',{'BC':'British Columbia', 'AB':'Alberta', 'SK':'Saskatchewan', 'MB':'Manitoba'}))

