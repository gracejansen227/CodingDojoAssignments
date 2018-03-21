from flask import Flask, render_template, request, redirect, session, flash
from datetime import datetime
from mysqlconnection import MySQLConnector
import md5
import re
import datetime
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
mysql = MySQLConnector(app,'friendship')


@app.route('/')
def index():
    all_users = mysql.query_db("SELECT first_name, last_name , user_id, created_at FROM users ORDER BY user_id")

    return render_template("users.html", all_users=all_users)



@app.route('/users/new')
def newuser():
    return render_template('new.html')

@app.route('/users/create', methods=['POST'])
def createuser():

    query1 = "INSERT INTO users(first_name, last_name, created_at) VALUES (:first_name, :last_name, NOW() )"

    data = {
            'first_name' : request.form['first_name'],
            'last_name' : request.form['last_name']
        }

    mysql.query_db(query1, data)

    return redirect('/')


@app.route('/users/<user_id>')
def showuser(user_id):
    print user_id
    print int(user_id)

    query = "SELECT first_name, last_name , user_id, created_at FROM users WHERE user_id = :user_id"
    data = {
        'user_id': user_id
    }
    user = mysql.query_db(query, data)

    print user
    first_name = user[0]['first_name']
    last_name = user[0]['last_name']
    created_at = user[0]['created_at']
    print first_name
    print last_name

    return render_template('show.html', user=user, user_id=user_id, first_name=first_name, last_name=last_name, created_at=created_at)

@app.route('/users/<user_id>/showedit')
def showedituser(user_id):

    return render_template('edit.html', user_id=user_id)



@app.route('/users/<user_id>/edit', methods=['POST'])
def edituser(user_id):
    first_name = request.form['first_name']
    last_name = request.form['last_name']

    print user_id
    query2 = "UPDATE users SET first_name = :first_name, last_name = :last_name, created_at = NOW() WHERE user_id = :user_id"

    data = {
            'first_name' : request.form['first_name'],
            'last_name' : request.form['last_name'],
            'user_id' : user_id
        }

    user = mysql.query_db(query2, data)

    return redirect('/')

@app.route('/users/<user_id>/delete')
def deleteuser(user_id):


    query3 = "DELETE FROM users WHERE user_id = :user_id"

    data = {
            'user_id' : user_id
        }

    mysql.query_db(query3, data)

    return redirect('/')


app.run(debug=True)
