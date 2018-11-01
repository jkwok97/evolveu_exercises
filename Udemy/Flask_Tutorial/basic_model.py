# BASIC_MODEL.PY
# CREATE ENTRIES INTO THE TABLES

from models import db,Puppy,Owner,Toy

# Creating two puppies
rufus = Puppy('Rufus')
fido = Puppy('Fido')

# Add puppies to database
db.session.add_all([rufus,fido])
db.session.commit()

# check!
print (Puppy.query.all())

# grab an instance of the database
rufus = Puppy.query.filter_by(name='Rufus').first()

# Create an owner object
jeff = Owner('Jeff',rufus.id)

# Give Rufus some toys
toy1 = Toy('Chew Toy', rufus.id)
toy2 = Toy('Ball',rufus.id)

db.session.add_all([jeff,toy1,toy2])
db.session.commit()

# grab an instance of the database
rufus = Puppy.query.filter_by(name='Rufus').first()
print(rufus)

rufus.report_toys()