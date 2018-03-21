# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.utils.crypto import get_random_string
from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request,'survey/index.html')

def process(request):
    if 'counter' in request.session:
        request.session['counter'] += 1
    else:
        request.session['counter'] = 1

    request.session['info'] = {
        'name' : request.POST['name'],
        'location' : request.POST['location'],
        'language' : request.POST['language'],
        'comment' : request.POST['comment']
    }

    return redirect('/survey/result')



def result(request):
    return render(request,'survey/result.html')
