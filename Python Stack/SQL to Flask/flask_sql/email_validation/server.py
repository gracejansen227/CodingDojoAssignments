from flask import Flask, render_template, request, redirect, session, flash
from datetime import datetime
from mysqlconnection import MySQLConnector

import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
mysql = MySQLConnector(app,'email_val')

@app.route('/')
def index():

    query = "SELECT * FROM emails"
    emails = mysql.query_db(query)
    print emails
    return render_template('index.html')

@app.route('/email', methods=['POST'])
def add():
    email = request.form['email']
    if not EMAIL_REGEX.match(request.form['email']):
       flash("Invalid Email Address!")
        #sucessEM = 'Please re enter!'
    else:
       flash("The email address you entered {}".format(request.form['email']), "is a VALID email address! Thank you!")
       query = "INSERT INTO emails(email_address, date_created) VALUES (:email, NOW())"
       data = {
        'email': request.form['email']
        }

    mysql.query_db(query,data)
    all_emails = mysql.query_db("SELECT * FROM emails")
    print all_emails
    # can't iterate through long type and long type is throwing an error!!
    return render_template('/success.html', all_emails=all_emails )

app.run(debug=True)
