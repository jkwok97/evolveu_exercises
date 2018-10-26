
from basic_sql import db,Puppy

#CREATE A NEW INSTANCE OF THE DATABASE
my_puppy = Puppy('Rufus', 5)

db.session.add(my_puppy)
db.session.commit()

#READ AN INSTANCE OF THE DATABASE

all_puppies = Puppy.query.all() #list of puppies object in the table!

print(all_puppies)

#SELECT BY ID

puppy_one = Puppy.query.get(1)
print(puppy_one.name)

#FILTERS
#THIS WILL PRODUCE SQL CODE!
puppy_frankie = Puppy.query.filter_by(name='Frankie') #FILTERS OUT ALL NAMES WITH FRANKIE
print(puppy_frankie.all()) #PRINTS ALL INSTANCES IN DATABASE WITH NAME FRANKIE

#UPDATE
first_puppy = Puppy.query.get(1) #GRABBING FIRST INSTANCE
first_puppy.age = 10 #CHANGING AGE OF PUPPY IN FIRST INSTANCE
db.session.add(first_puppy) #ADDING IT BACK INTO THE DATABASE
db.session.commit() #COMMITING THE CHANGE TO THE DATABASE

#DELETE

second_pup = Puppy.query.get(2) #GRABBING SECOND INSTANCE
db.session.delete(second_pup) #DELETING SECOND INSTANCE
db.session.commit() #COMMIT THE CHANGE TO THE DATABASE

#PRINT
all_puppies = Puppy.query.all()
print(all_puppies)


