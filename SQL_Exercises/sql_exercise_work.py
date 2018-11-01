
import psycopg2
from flask import request,jsonify

conn = psycopg2.connect('dbname=postgres')
cur = conn.cursor()

class Client():

    def __init__ (self, list):
        self.client_id, self.name, self.email, self.city, self.birthyear = list

    def get_name():
        cur.execute('select * from clients')
        client_list = cur.fetchall()
        client_objects = []

        for clients in client_list:
            client_objects.append(Client(clients))
        return client_objects

def client_data(client_id2): 
    conn = psycopg2.connect('dbname=postgres')
    cur = conn.cursor()
    query = "select * from clients where client_id=(%s)"

    cur.execute(query, (client_id2,))
    client_result = cur.fetchone()
    
    conn.close()
    print (jsonify(client_result))
    client_result = {'id': client_result[0], 'name': client_result[1], 'email': client_result[2], 'city': client_result[3], 'birth year': client_result[4]}

    return (client_result) 
       

class Client_cred():

    def __init__ (self, list):
        self.name, self.month, self.credits = list

    def get_julycredits():
        cur.execute("select name, month, credits from clients full join credits on clients.client_id = credits.client_id where month = '2018-07'")
        client_list = cur.fetchall()
        julycredits_objects = []

        for clients in client_list:
            julycredits_objects.append(Client_cred(clients))
        return julycredits_objects 

    def get_no_credits():
        cur.execute("select name, month, credits from clients full join credits on clients.client_id = credits.client_id where credits is null")
        client_list = cur.fetchall()
        no_credits_objects = []

        for clients in client_list:
            no_credits_objects.append(Client_cred(clients))
        return no_credits_objects

    def get_no_clients():
        cur.execute("select name, month, credits from clients full join credits on clients.client_id = credits.client_id where name is null")
        client_list = cur.fetchall()
        no_clients_objects = []

        for clients in client_list:
            no_clients_objects.append(Client_cred(clients))
        return no_clients_objects

# conn.close()