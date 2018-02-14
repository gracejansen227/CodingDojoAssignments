from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
# routing rules and rest of server.py below

@app.route('/')
def index():

    right_answer = random.randrange(0, 101)
    session['right_answer'] = right_answer
    print right_answer
    print session
    return render_template("index.html", right_answer=session['right_answer'])

@app.route('/guess', methods=['POST'])
def guess():

    print "user guesses here"
    guess = request.form['guess']
    guess = int(guess)
    right_answer = session['right_answer']
    print "Guess is",guess
    print "Right answer is",right_answer

    msg1 = ''

    if 'msg1' in session:
        session.pop('msg1')

    if guess > right_answer:
        msg1 = "Too high!"
        session['msg1'] = msg1
        print 'The message should be', msg1
    elif guess < right_answer:
        msg1 = "Too low!"
        session['msg1'] = msg1
        print 'The message should be', msg1
    elif guess == right_answer:
        msg1 = "You got it right!"
        print msg1
        session['msg1'] = msg1

        print session
    #session['msg'] = msg
    return render_template("index.html", msg1=session['msg1'], guess =guess)


@app.route('/reset', methods=['POST'])
def reset():
    return render_template('index.html')

app.run(debug=True)
