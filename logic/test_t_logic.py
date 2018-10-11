
import unittest
import t_logic

class Test_t_logic_exercise(unittest.TestCase):

	def test_dummy_math(self):
		t_logic.dummy_math(8,3)

	def test_modulus(self):
		self.assertEqual(2,t_logic.modulus(8,3))
		self.assertEqual(1,t_logic.modulus(21,10))
		self.assertEqual(3,t_logic.modulus(45,6))

	def test_floor_division(self):
		self.assertEqual(3,t_logic.floor_division(15,4))
		self.assertEqual(1,t_logic.floor_division(11,8))
		self.assertEqual(5,t_logic.floor_division(32,6))

	def test_exponent(self):
		self.assertEqual(8,t_logic.exponent(2,3))
		self.assertEqual(27,t_logic.exponent(3,3))
		self.assertEqual(64,t_logic.exponent(4,3))

	def test_largest_num(self):
		self.assertEqual(15,t_logic.largest_num(5,10,15))
		self.assertEqual(-1,t_logic.largest_num(-1,-9,-15))
		self.assertEqual(200,t_logic.largest_num(200,-50,10))

	def test_largest_num2(self):
		self.assertEqual(15,t_logic.largest_num2(5,10,15))
		self.assertEqual(-1,t_logic.largest_num2(-1,-9,-15))
		self.assertEqual(200,t_logic.largest_num2(200,-50,10))

	def test_range_for(self):
		self.assertEqual([6,7,8],t_logic.range_for(5,9))
		self.assertEqual([-4,-3,-2],t_logic.range_for(-5,-1))

	def test_range_while(self):
		self.assertEqual([6,7,8],t_logic.range_while(5,9))
		self.assertEqual([-4,-3,-2],t_logic.range_while(-5,-1))

	def test_range_for_odd(self):
		self.assertEqual([7],t_logic.range_for_odd(5,9))
		self.assertEqual([-3],t_logic.range_for_odd(-5,-1))
		self.assertEqual([3,5,7,9],t_logic.range_for_odd(1,10))

	def test_range_while_odd(self):
		self.assertEqual([7],t_logic.range_while_odd(5,9))
		self.assertEqual([-3],t_logic.range_while_odd(-5,-1))
		self.assertEqual([3,5,7,9],t_logic.range_while_odd(1,10))

	def test_dummy_operators(self):
		t_logic.dummy_operators(8,3)

	def test_print_list(self):
		t_logic.print_list(["flames", "oilers", "canucks", "jets", "leafs", "senators", "canadians"])

	def test_my_max(self):
		self.assertEqual(5,t_logic.my_max([1,2,3,4,5]))
		self.assertEqual(50,t_logic.my_max([5,10,20,50]))
		self.assertEqual(None,t_logic.my_max([]))
		self.assertEqual(-1000,t_logic.my_max([-1000,-2000,-3000,-4000]))

	def test_long_string(self):
		self.assertEqual('canadians',t_logic.long_string(["flames", "oilers", "canucks", "jets", "leafs", "senators", "canadians"]))
		self.assertEqual('123456789',t_logic.long_string(["1", "123", "1235", "12345", "1234567", "12345678", "123456789"]))

	def test_read_print_file(self):
		t_logic.read_print_file('file')


