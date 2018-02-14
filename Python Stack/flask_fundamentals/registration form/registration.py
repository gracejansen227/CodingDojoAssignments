from flask import Flask, render_template, request, redirect, session, flash

import re
# create a regular expression object that we can use run operations on
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/info', methods=['POST'])
def create_user():
   print "get Info"
   # we'll talk about the following two lines after we learn a little more
   # about forms
   first_name = request.form['first_name']
   first_name = str(first_name)
   if len(first_name) < 1:
       flash("First name cannot be empty!")
       #sucessFN = 'Please re enter!'
   elif str.isalpha(first_name) == False:
       flash("First name cannot have numbers!")
      # sucessFN = 'Please re enter!'
   else:
       flash("Success! Your first name is {}".format(request.form['first_name']))
      # successfn = request.form['first_name']

   last_name = request.form['last_name']
   last_name = str(last_name)
   if len(last_name) < 1:
       flash("Last name cannot be empty!")
      # sucessLN = 'Please re enter!'
   elif str.isalpha(last_name) == False:
       flash("Last name cannot have numbers!")
       #sucessLN = 'Please re enter!'
   else:
       flash("Success! Your last name is {}".format(request.form['last_name']))
      # successLN = request.form['last_name']

   email = request.form['email']

   if len(email) < 1:
       flash("Email cannot be empty!")
      # sucessEM = 'Please re enter!'
   elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid Email Address!")
        #sucessEM = 'Please re enter!'
   else:
       flash("Success! Your email is {}".format(request.form['email']))
       #successEM = request.form['email']


   password = request.form['pw']

   if len(password) < 1:
       flash("Password cannot be empty!")
   elif len(password) < 8:
       flash("Password must be longer than 8 characters!")
   else:
       flash("Success! Password is valid")


   confirmpw = request.form['checkpw']

   if len(confirmpw) < 1:
       flash("Please confirm password!")
   elif confirmpw != password:
       flash("Passwords do not match!")
   else:
       flash("Success! Passwords match!")


   # redirects back to the '/' route
   return render_template("result.html", email=email, last_name=last_name, first_name=first_name)

app.run(debug=True) # run our server
