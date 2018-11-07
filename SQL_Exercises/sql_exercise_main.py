from flask import Flask, render_template, request, json, jsonify
import psycopg2
import sql_exercise_work

app = Flask(__name__)
# json = FlaskJSON(app)

@app.route('/')
def index():
    client_list = sql_exercise_work.Client.get_name()
    return render_template('sql_index.html', clients = client_list)

@app.route('/practice')
def practice():
    return render_template('basic_practice.html')

@app.route('/data/<client_id2>')
def data(client_id2):
    client_result = sql_exercise_work.client_data(client_id2)

    print(json.dumps(client_result)) 
    return json.dumps(client_result)

@app.route('/julycredits')
def julycredits():
    client_list = sql_exercise_work.Client_cred.get_julycredits()
    return render_template('sql_julycredits.html', clients = client_list)

@app.route('/nocredits')
def nocredits():
    client_list = sql_exercise_work.Client_cred.get_no_credits()
    return render_template('sql_nocredits.html', clients = client_list)

@app.route('/noclients')
def noclients():
    client_list = sql_exercise_work.Client_cred.get_no_clients()
    return render_template('sql_noclients.html', clients = client_list)

if __name__ == '__main__':
    app.run(debug=True)