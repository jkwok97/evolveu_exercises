
import unittest
import jar_jar
from dateutil import parser

class TestDates(unittest.TestCase):

    def test_emptyRooms(self):
        booking_date = ""
        self.assertNotIn('Desk 3rd floor 4', jar_jar.empty_room(booking_date))
        self.assertNotIn('Desk 3rd floor 8', jar_jar.empty_room(booking_date))
    
    def test_yearMonth(self):

        self.assertEqual('2018-08', jar_jar.get_year_month('2018-08-30'))
        self.assertEqual('2019-08', jar_jar.get_year_month('2019-08'))
 
    def test_getSheetName(self):
        self.assertIn('2018-07', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('2018-08', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('2018-09', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('2018-10', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('2018-11', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('Clients', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('Facilities', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        self.assertIn('Rates', jar_jar.getSheetName('cSpace_Bookingv1.xlsx'))
        

    def test_getymd(self):
    	self.assertEqual(parser.parse('2018-08-01'), jar_jar.get_ymd('2018-08-01'))
    	self.assertEqual('=A2+1', jar_jar.get_ymd('2018-08-02'))


    def test_getrooms(self):
        self.assertIn('First Floor Hall', jar_jar.getrooms('2018-07-16'))
        self.assertNotIn('Desk 3rd floor 7', jar_jar.getrooms('2018-07-16'))
        self.assertNotIn('Second Floor Hall', jar_jar.getrooms('2018-08-05'))
        self.assertNotIn('Desk 3rd floor 2', jar_jar.getrooms('2018-09-02'))
        self.assertNotIn('Second Floor Hall', jar_jar.getrooms('2018-10-18'))
        self.assertNotIn('Desk 3rd floor 8', jar_jar.getrooms('2018-11-24'))
