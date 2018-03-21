# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from models import *

def index(request):
    return render(request,'semi_restful/index.html', {'users' : User.objects.all()})

def new(request):
    return render(request,'semi_restful/new.html')

def create(request, methods="POST"):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    email = request.POST['email']

    User.objects.create(first_name = first_name, last_name = last_name, email = email)

    user_id = User.objects.filter(first_name = first_name)
    context = {
    "user_id" : user_id,
    "first_name" : first_name,
    "last_name" : last_name,
    "email" : email,
    }

    return redirect('/semi_restful', context)

def show(request, user_id):
    this_user = User.objects.get(id=user_id)
    context = {
        "user_id" : user_id,
        "first_name" : this_user.first_name,
        "last_name" : this_user.last_name,
        "time" : this_user.created_at,
    }
    return render(request, 'semi_restful/show.html', context)

def showedit(request, user_id):
    return render(request,'semi_restful/edit.html', {'user_id' : user_id})

def edit(request, user_id, methods="POST"):
    edit_user = User.objects.get(id=user_id)
    new_fn = request.POST['first_name']
    new_ln = request.POST['last_name']
    new_email = request.POST['email']


    edit_user.first_name = new_fn
    edit_user.last_name = new_ln
    edit_user.email = new_email
    edit_user.save()

    context = {
    "user_id" : user_id,
    "first_name" : edit_user.first_name,
    "last_name" : edit_user.last_name,
    "email" : edit_user.email
    }

    return redirect('/semi_restful/show', context)

def delete(request, user_id):
    delete_user = User.objects.get(id=user_id)
    delete_user.delete()

    return redirect( '/semi_restful')
