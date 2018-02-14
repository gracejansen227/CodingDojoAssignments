from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")



@app.route('/changeColor', methods=['POST'])
def change_color():
    print "Changing Color"

    blue = request.form['blue']
    red = request.form['red']
    green = request.form['green']


    return render_template("index.html", blue=blue, red=red, green=green)

app.run(debug=True) # run our server
