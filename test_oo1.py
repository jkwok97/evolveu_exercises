import unittest
import oo1


class TestOo1(unittest.TestCase):

	def test_person(self):
		lar = oo1.Person('Larry', 'Shumlich', 29)
		lor = oo1.Person('Lorraine', 'Tkachyk', 27)
		lor.city = 'Calgary'

		self.assertEqual(27, lor.age)
		self.assertEqual(29, lar.age)
		self.assertEqual('Lorraine Tkachyk', lor.name)
		self.assertEqual('Larry Shumlich', lar.name)

		lar.first_name = 'Lars'
		self.assertEqual('Lars', lar.first_name)
		self.assertEqual('Lars Shumlich', lar.name)

		lar.last_name = 'Shumy'
		self.assertEqual('Shumy', lar.last_name)
		self.assertEqual('Lars Shumy', lar.name)

		lar.birthday()
		self.assertEqual(30, lar.age)

		lar.birthday()
		lar.birthday()
		lar.birthday()
		self.assertEqual(33, lar.age)
		self.assertEqual(27, lor.age)

## Major Exercise

class Testoo1_exercise(unittest.TestCase):

	def test_client_list(self):
		client_1 = oo1.Clients('Carri', 'Cordon')
		client_2 = oo1.Clients('Caren', 'Alsop')
		client_3 = oo1.Clients('Sierra', 'Sandoval')
		client_4 = oo1.Clients('Delcie', 'Montalvan')
		client_5 = oo1.Clients('Geri', 'Gallant')
		client_6 = oo1.Clients('Lavera', 'Platter')
		client_7 = oo1.Clients('Soila', 'Cozad')
		client_8 = oo1.Clients('Valeri', 'Miranda')
		client_9 = oo1.Clients('Samira', 'Harlin')
		client_10 = oo1.Clients('Leone', 'Elwell')
		client_11 = oo1.Clients('Marylee', 'Shoener')
		client_12 = oo1.Clients('Annalisa', 'Jansen')
		client_13 = oo1.Clients('Dorathy', 'Koprowski')
		client_14 = oo1.Clients('Denese', 'Askew')
		client_15 = oo1.Clients('Larraine', 'Primrose')
		client_16 = oo1.Clients('Cassie', 'Close')
		client_17 = oo1.Clients('Sherrie', 'Iraheta')
		client_18 = oo1.Clients('Alicia', 'Baskin')
		client_19 = oo1.Clients('Jeramy', 'Beeler')
		client_20 = oo1.Clients('Clarissa', 'Petterson')

		self.assertEqual('Carri Cordon', client_1.name)
		self.assertEqual('Leone Elwell', client_10.name)
		self.assertEqual('Sherrie Iraheta', client_17.name)
		self.assertEqual('Geri Gallant', client_5.name)
