from flask import Flask, render_template
import psycopg2
from sql_exercise_work import Client, Client_july_cred, Client_no_cred, Client_no_client

app = Flask(__name__)

@app.route('/')
def index():
    client_list = Client.get_name()
    return render_template('sql_index.html', clients = client_list)

@app.route('/julycredits')
def julycredits():
    client_list = Client_july_cred.get_julycredits()
    return render_template('sql_julycredits.html', clients = client_list)

@app.route('/nocredits')
def nocredits():
    client_list = Client_no_cred.get_no_credits()
    return render_template('sql_nocredits.html', clients = client_list)

@app.route('/noclients')
def noclients():
    client_list = Client_no_client.get_no_clients()
    return render_template('sql_noclients.html', clients = client_list)

if __name__ == '__main__':
    app.run(debug=True)