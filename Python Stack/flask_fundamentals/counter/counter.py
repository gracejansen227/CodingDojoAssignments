from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
# routing rules and rest of server.py below

@app.route('/')
def index():
    return redirect('/show')
# this route will handle our form submission
# notice how we defined which HTTP methods are allowed by this route


@app.route('/show')
def count():
    if session.has_key('counter'):
        session['counter'] += 1
    else:
        session['counter'] = 1

    print session
    #print session['counter']
    return render_template("index.html", counter=session['counter'])

app.run(debug=True) # run our server
