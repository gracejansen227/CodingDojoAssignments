# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from time import gmtime, strftime
from django.shortcuts import render, redirect, HttpResponse
import random
import datetime



def index(request):
    if 'total' not in request.session:
        request.session['total'] = 0
    totalGold = request.session['total']
    print totalGold
    return render(request,'ninja/index.html')

def process_money(request):
    timestamp = datetime.datetime.now()
    msg = ''
    if 'farmAddMsg' not in request.session:
        request.session['farmAddMsg'] = []
    if 'caveAddMsg' not in request.session:
        request.session['caveAddMsg'] = []
    if 'houseAddMsg' not in request.session:
        request.session['houseAddMsg'] = []
    if 'casinoAddMsg' not in request.session:
        request.session['casinoAddMsg'] = []
    if 'casinoLostMsg' not in request.session:
        request.session['casinoLostMsg'] = []

    if request.POST['building'] == 'farm':
        farmAdd = random.randint(10,21)
        request.session['total'] += farmAdd

        msg1 = 'Earned '+ str(farmAdd) +' golds from the farm! Added at ' + str(timestamp) + '.'

        request.session['farmAddMsg'].append(msg1)
        print request.session['farmAddMsg'], "just appended"
        #request.session['farmAddMsg'] += request.session['farmAddMsg']
        print request.session['farmAddMsg']


        print 'What I am adding',farmAdd
        print 'This is the whole total I just added to',request.session['total']


    elif request.POST['building'] == 'cave':

        caveAdd = random.randint(5,11)
        request.session['total'] += caveAdd

        msg2 = 'Earned '+ str(caveAdd) +' golds from the cave! Added at ' + str(timestamp) + '.'

        request.session['caveAddMsg'].append(msg2)
        request.session['caveAddMsg'] = request.session['caveAddMsg']

        print request.session['caveAddMsg']

    elif request.POST['building'] == 'house':

        houseAdd = random.randint(2,5)
        request.session['total'] += houseAdd

        msg3 = 'Earned '+ str(houseAdd) +' golds from yo mama\'s house! Added at ' + str(timestamp) + '.'

        request.session['houseAddMsg'].append(msg3)
        request.session['houseAddMsg'] = request.session['houseAddMsg']

        print request.session['total']

    elif request.POST['building'] == 'casino':
        casinoNum = random.randint(-50, 50)

        request.session['total'] += casinoNum

        if casinoNum < 0:
            casinoNum = abs(casinoNum)
            msg4 = "Entered a casino and lost " + str(casinoNum) + " golds...Ouch.. Added at " + str(timestamp) + '.'

            request.session['casinoLostMsg'].append(msg4)
            request.session['casinoLostMsg'] = request.session['casinoLostMsg']

        elif casinoNum >= 0:
            msg5 = "Entered a casino and won " + str(casinoNum) + " golds! Added at " + str(timestamp) + '.'

            request.session['casinoAddMsg'].append(msg5)
            request.session['casinoAddMsg'] = request.session['casinoAddMsg']


        print request.session['total']


    return redirect('/ninja/home')

def home(request):
    return redirect('/ninja')
