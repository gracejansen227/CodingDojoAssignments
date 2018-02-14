from flask import Flask, render_template, request, redirect, session
# import the Connector function
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'full_friends')

@app.route('/')
def index():
    query = "SELECT * FROM friends"
    friends = mysql.query_db(query)
    print friends
    return render_template('index.html', all_friends=friends)

@app.route('/add_friends', methods=['POST'])
def add():


    query = "INSERT INTO friends (name, age, friend_since) VALUES (:name, :age, NOW())"

    data = {
        'name': request.form['name'],
        'age' : request.form['age']
    }

    mysql.query_db(query,data)
    return redirect('/')

app.run(debug=True)
