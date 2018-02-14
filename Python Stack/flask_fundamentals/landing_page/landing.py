from flask import Flask, render_template, request
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/ninjas')
def ninjas():
   return render_template("ninjas.html")

@app.route('/dojos')
def dojo():
    return render_template("dojos.html")

app.run(debug=True) # run our server
