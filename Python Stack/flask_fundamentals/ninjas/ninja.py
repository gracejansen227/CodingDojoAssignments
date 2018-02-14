from flask import Flask, render_template, request, redirect
app = Flask(__name__)
# our index route will handle rendering our form
@app.route('/')
def index():
  return render_template("index.html")
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route
@app.route('/ninjas')
def showAllNinja():
   print "show all ninjas"
   # we'll talk about the following two lines after we learn a little more

   return render_template('ninjas.html')


@app.route('/ninjas/<color>')
def show_color_ninja(color):
    print color
    if color == 'orange':
        source = 'michelangelo.jpg'
    elif color == 'red':
        source = 'raphael.jpg'
    elif color == 'purple':
        source = 'donatello.jpg'
    elif color == 'blue':
        source = 'leonardo.jpg'
    else:
        source = 'notapril.jpg'

    return render_template("color.html", source=source)

app.run(debug=True) # run our server
