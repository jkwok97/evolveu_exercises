
import psycopg2

conn = psycopg2.connect('dbname=postgres')
cur = conn.cursor()

cur.execute('Select * from clients')

client_list = cur.fetchall()

class Client():

    def __init__ (self, list):
        self.id, self.name, self.email, self.city, self.birthyear = list

client_objects = []

for clients in client_list:
    client_objects.append(Client(clients))

for clients in client_objects:
    print(clients.id, clients.name)

conn.close()
