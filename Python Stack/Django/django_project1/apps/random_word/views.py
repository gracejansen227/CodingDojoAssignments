# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.utils.crypto import get_random_string
from django.shortcuts import render, redirect, HttpResponse

def index(request):
    if 'attempts' not in request.session:
        request.session['attempts'] = 1
    context = {
    "random_word": get_random_string(length=14)
    }

    return render(request, 'random_word/index.html', context)

def generate(request):
    if request.method == "POST":
        request.session['attempts'] += 1
        context = {
        "random_word": get_random_string(length=14),
        }
        return render(request,'random_word/index.html', context)

def create(request):
    return HttpResponse('hello')
