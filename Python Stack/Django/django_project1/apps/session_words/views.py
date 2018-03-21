# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from time import gmtime, strftime
from django.shortcuts import render, redirect, HttpResponse

def index(request):
    return render(request,'session_words/index.html')

def add(request):

    if 'big' in request.POST:
        bigSize = 'big'
    else:
        bigSize = "100%"

    request.session['info'] = {
        'word' : request.POST['word'],
        'color' : request.POST['color'],
        'big' : bigSize,
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime()),
    }

    return redirect('/session_words/result')

def clear(request):
    request.session['info'].clear
    return render(request, 'session_words/index.html')


def result(request):
    return render(request,'session_words/result.html')
