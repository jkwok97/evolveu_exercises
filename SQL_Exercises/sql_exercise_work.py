
import psycopg2

conn = psycopg2.connect('dbname=postgres')
cur = conn.cursor()

class Client():

    def __init__ (self, list):
        self.id, self.name, self.email, self.city, self.birthyear = list

    def get_name():
        cur.execute('Select * from clients')
        client_list = cur.fetchall()
        client_objects = []

        for clients in client_list:
            client_objects.append(Client(clients))
        return client_objects

class Client_july_cred():

    def __init__ (self, list):
        self.name, self.month, self.credits = list

    def get_julycredits():
        cur.execute("select name, month, credits from clients full join credits on clients.client_id = credits.client_id where month = '2018-07'")
        client_list = cur.fetchall()
        julycredits_objects = []

        for clients in client_list:
            julycredits_objects.append(Client_july_cred(clients))
        return julycredits_objects    

class Client_no_cred():

    def __init__ (self, list):
        self.name, self.credits = list

    def get_no_credits():
        cur.execute("select name, credits from clients full join credits on clients.client_id = credits.client_id where credits is null")
        client_list = cur.fetchall()
        no_credits_objects = []

        for clients in client_list:
            no_credits_objects.append(Client_no_cred(clients))
        return no_credits_objects

class Client_no_client():

    def __init__ (self, list):
        self.name, self.credits = list

    def get_no_clients():
        cur.execute("select name, credits from clients full join credits on clients.client_id = credits.client_id where name is null")
        client_list = cur.fetchall()
        no_clients_objects = []

        for clients in client_list:
            no_clients_objects.append(Client_no_client(clients))
        return no_clients_objects

# conn.close()