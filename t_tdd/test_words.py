# Begin tdd

import unittest
import words

class TestDates(unittest.TestCase):

	def test_one(self):
		print("i'm in test_one")

	def test_two(self):
		print("i'm in test_two")

	def test_helloworld(self):
		print("hello world")

	def test_hi(self):
		print("goodbye")

	def test_one(self):
		self.assertEqual('Larry.Shumlich@mail.com', words.email('Larry', 'Shumlich'))
		self.assertEqual('Jack.Ross@mail.com', words.email('Jack', 'Ross'))
		self.assertEqual('Dale.James@mail.com', words.email('Dale', 'James'))
		self.assertEqual('First.Last@mail.com', words.email('Last', 'First'))

	def test_one(self):
		self.assertNotIn('Second Floor Hall', filename.empty_room(booking_date))
		self.assertNotIn('Desk 3rd floor 2', filename.empty_room(booking_date))
		self.assertNotIn('RGO Treehouls (Full)', filename.empty_room(booking_date))