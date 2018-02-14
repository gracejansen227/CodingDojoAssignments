from flask import Flask, render_template, request, redirect, session, flash
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
   name = request.form['name']
   if len(name) < 1:
       flash("Name cannot be empty!")
   else:
       flash("Success! Your name is{}".format(request.form['name']))


   location = request.form['location']
   language = request.form['language']
   comment = request.form['comment']
   if len(comment) <1:
       flash("Comment cannot be empty!")
   elif len(comment) > 120:
       flash("Comment cannot be longer than 120 characters!")
   else:
       flash("Wahoo! You entered a comment")

   # redirects back to the '/' route
   return render_template("result.html", name=name, location=location, language=language,comment=comment)

app.run(debug=True) # run our server
