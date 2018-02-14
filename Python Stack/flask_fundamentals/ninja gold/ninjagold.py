from flask import Flask, render_template, request, redirect, session
import random
import datetime
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' # you need to set a secret key for security purposes
# routing rules and rest of server.py below

@app.route('/')
def home():
    if 'total' not in session:
        session['total'] = 0
    totalGold = session['total']
    print totalGold
    return render_template("ninjagold.html", totalGold=totalGold)

@app.route('/process_money', methods=['POST'])
def process_money():

    msg = ''

    if request.form['building'] == 'farm':
        farmAdd = random.randint(10,21)
        session['total'] += farmAdd

        msg1 = 'Earned '+ str(farmAdd) +' golds from the farm!'
        session['farmAddMsg'] = msg1

        print session['farmAddMsg']
        print 'What I am adding',farmAdd
        print 'This is the whole total I just added to',session['total']


    elif request.form['building'] == 'cave':

        caveAdd = random.randint(5,11)
        session['total'] += caveAdd

        msg2 = 'Earned '+ str(caveAdd) +' golds from the cave!'
        session['caveAddMsg'] = msg2

        print session['caveAddMsg']

    elif request.form['building'] == 'house':

        houseAdd = random.randint(2,5)
        session['total'] += houseAdd

        msg3 = 'Earned '+ str(houseAdd) +' golds from yo mama\'s house!'
        session['houseAddMsg'] = msg3

        print session['total']

    elif request.form['building'] == 'casino':
        casinoNum = random.randint(-50, 50)

        session['total'] += casinoNum

        if casinoNum < 0:
            casinoNum = abs(casinoNum)
            msg4 = "Entered a casino and lost " + str(casinoNum) + " golds...Ouch.."
            session['casinoLostMsg'] = msg4
        elif casinoNum >= 0:
            msg5 = "Entered a casino and won " + str(casinoNum) + " golds!"
            session['casinoAddMsg'] = msg5


        print session['total']


    return redirect('/')



app.run(debug=True)
