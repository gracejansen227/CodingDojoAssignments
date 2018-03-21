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
mysql = MySQLConnector(app,'wall')

# def validateInput():
#     #check first __name, letters only, atleast 2 characters, that it was submitted
#     first_name = request.form['first_name']
#     first_name = str(first_name)
#     if len(first_name) < 2:
#        flash("First name cannot be empty!")
#        #sucessFN = 'Please re enter!'
#     elif str.isalpha(first_name) == False:
#        flash("First name cannot have numbers!")
#       # sucessFN = 'Please re enter!'
#     else:
#        flash("Success! Your first name is {}".format(request.form['first_name']))
#        session['first_name'] = request.form['first_name']
#     last_name = request.form['last_name']
#     last_name = str(last_name)
#     if len(last_name) < 2:
#        flash("Last name cannot be empty!")
#       # sucessLN = 'Please re enter!'
#     elif str.isalpha(last_name) == False:
#        flash("Last name cannot have numbers!")
#        #sucessLN = 'Please re enter!'
#     else:
#        flash("Success! Your last name is {}".format(request.form['last_name']))
#        session['last_name'] = request.form['last_name']
#
#     email = request.form['email']
#
#     if len(email) < 1:
#        flash("Email cannot be empty!")
#       # sucessEM = 'Please re enter!'
#     elif not EMAIL_REGEX.match(request.form['email']):
#         flash("Invalid Email Address!")
#         #sucessEM = 'Please re enter!'
#     else:
#        flash("Success! Your email is {}".format(request.form['email']))
#        session['email'] = register.form['email']
#
#
#     pw = request.form['pw']
#
#     if len(pw) < 1:
#        flash("Password cannot be empty!")
#     elif len(pw) < 8:
#        flash("Password must be longer than 8 characters!")
#     else:
#        flash("Success! Password is valid")
#        session['pw'] = register.form['pw']
#
#
#     confirmpw = request.form['confirmpw']
#
#     if len(confirmpw) < 1:
#        flash("Please confirm password!")
#     elif confirmpw != password:
#        flash("Passwords do not match!")
#     else:
#        flash("Success! Passwords match!")
#        session['confirmpw'] = register.form['confirmpw']


@app.route('/')
def index():
    if 'first_name' not in session:
        session['first_name'] = ''
    if 'last_name' not in session:
        session['last_name'] = ''
    if 'email' not in session:
        session['email'] = ''
    if 'pw' not in session:
        session['pw'] = ''
    if 'confirmpw' not in session:
        session['confirmpw'] = ''
    return render_template("index.html")

@app.route('/register', methods=['POST'])
def register():
    #print "needs to print session here",session

    registered = 0
    errors = 0
    first_name = request.form['first_name']
    first_name = str(first_name)

    if len(first_name) < 2:
        flash("First name cannot be empty!")
        errors += 1
           #sucessFN = 'Please re enter!'
    elif str.isalpha(first_name) == False:
        flash("First name cannot have numbers!")
          # sucessFN = 'Please re enter!'
        errors += 1
    else:
        flash("Success! Your first name is {}".format(request.form['first_name']))
        session['first_name'] = request.form['first_name']
        registered += 1

    last_name = request.form['last_name']
    last_name = str(last_name)
    if len(last_name) < 2:
        flash("Last name cannot be empty!")
        errors += 1
          # sucessLN = 'Please re enter!'
    elif str.isalpha(last_name) == False:
        flash("Last name cannot have numbers!")
        errors += 1
           #sucessLN = 'Please re enter!'
    else:
        flash("Success! Your last name is {}".format(request.form['last_name']))
        session['last_name'] = request.form['last_name']
        registered += 1

    email = request.form['email']

    if len(email) < 1:
        flash("Email cannot be empty!")
        errors += 1
          # sucessEM = 'Please re enter!'
    if email in session:
        flash("Email already exists!")
        errors += 1
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
            #sucessEM = 'Please re enter!'
    else:
        flash("Success! Your email is {}".format(request.form['email']))
        session['email'] = request.form['email']
        registered += 1


    pw = request.form['pw']
    #print pw

    if len(pw) < 1:
        flash("Password cannot be empty!")
        errors += 1
    elif len(pw) < 8:
        flash("Password must be longer than 8 characters!")
        errors += 1
    else:
        flash("Success! Password is valid")
        # pw = md5.new(request.form['password']).hexdigest()
        session['pw'] = request.form['pw']
        #print request.form['pw'], "request form pw"
        registered += 1


    confirmpw = request.form['confirmpw']

    if len(confirmpw) < 1:
        flash("Please confirm password!")
        errors += 1
    elif confirmpw != request.form['pw']:
        flash("Passwords do not match!")
        errors += 1
    else:
        flash("Success! Passwords match!")
        session['confirmpw'] = request.form['confirmpw']
        registered += 1

    if ( registered == 5 ):
        registered == True

    hashed_pw = md5.new(pw).hexdigest()

    query = "INSERT INTO users(first_name, last_name, email, password) VALUES (:first_name, :last_name, :email, :hashed_pw)"

    data = {
        'first_name' : request.form['first_name'],
        'last_name' : request.form['last_name'],
        'email' : request.form['email'],
        'hashed_pw' : hashed_pw
    }

    mysql.query_db(query, data)

    all_emails = mysql.query_db("SELECT * FROM users")
    # print all_emails
    if ( errors > 0):
        return redirect('/')
    else:
        logged_in == True
        return render_template('wall.html')

@app.route('/login', methods=['POST'])
def login():
    logged_in = 0
    email = request.form['loginemail']
    # print email
    pw_match = mysql.query_db("SELECT password FROM users WHERE email = email")

    first_name_loggedin = mysql.query_db("SELECT first_name FROM users WHERE email = email")
    # print pw_match[0]

    last_name_loggedin = mysql.query_db("SELECT last_name FROM users WHERE email = email")
    inputed_pw = request.form['loginpw']
    pw_match =  pw_match[0]['password']
    inputed_pw = md5.new(inputed_pw).hexdigest()
    # print inputed_pw
    # print pw_match

    session['email'] = request.form['loginemail']
    session['first_name'] = first_name_loggedin[0]['first_name']
    session['last_name'] = last_name_loggedin[0]['last_name']

    if inputed_pw != pw_match:
        flash('Incorrect Password! Try Again!')
        return redirect('/')
    else:
        logged_in == True
        session['loginpw'] = inputed_pw
    print logged_in
    session['logged_in'] = logged_in
    return redirect('/wall')

@app.route('/wall')
def wall():
    if not 'logged_in' in session:
        flash("log in")
        return redirect('/')

    all_messages = mysql.query_db("SELECT users.first_name, users.last_name, messages.created_at, messages.message, messages.id FROM messages LEFT JOIN users ON users.id = messages.user_id ORDER BY messages.created_at DESC")

    comments = mysql.query_db("SELECT comments.message_id, comments.comment, comments.created_at FROM comments LEFT JOIN messages ON messages.id = comments.message_id ORDER BY comments.created_at DESC")

    return render_template('wall.html', all_messages=all_messages, comments=comments)

@app.route('/message', methods=['POST'])
def message():
    message = str(request.form['message'])

    email = session['email']
    print email
    user_id =  mysql.query_db("SELECT id FROM users WHERE email = email")
    print user_id
    user_id = user_id[0]['id']
    print user_id

    query2 = "INSERT INTO messages(user_id, message, created_at, updated_at) VALUES (:user_id, :message, NOW(), NOW() )"

    data = {
            'user_id' : user_id,
            'message' : request.form['message'],
        }

    mysql.query_db(query2, data)


    return redirect('/wall')

@app.route('/comment/<message_id>', methods=['POST'])
def comment(message_id):
    comment = str(request.form['comment'])

    email = session['email']
    print email
    user_id =  mysql.query_db("SELECT id FROM users WHERE email = email")
    user_id = user_id[0]['id']
    print user_id

    ##GET MESSAGE_ID

    query3 = "INSERT INTO comments(comment, created_at, updated_at, message_id, user_id) VALUES (:comment, NOW(), NOW(),:message_id, :user_id )"

    data = {
            'comment' : request.form['comment'],
            'message_id' : message_id,
            'user_id' : user_id
        }

    mysql.query_db(query3, data)

    print message_id
    comments_message_id = mysql.query_db("SELECT message_id FROM comments WHERE comments.message_id = message_id")
    print comments_message_id


    return redirect('/wall')

@app.route('/logout', methods=['POST'])
def logout():
    session.clear()

    return redirect('/')


app.run(debug=True)
