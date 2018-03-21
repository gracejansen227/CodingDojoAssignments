# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from time import gmtime, strftime
from django.shortcuts import render, redirect, HttpResponse

def index(request):
    if 'currenttotal' not in request.session:
        request.session['currenttotal'] = 0
    if 'currentquantity' not in request.session:
        request.session['currentquantity'] =0
    return render(request,'amadon/index.html')

def buy(request):
    checkout_product_id = request.POST['product_id']
    request.session['checkout_quantity'] = int(request.POST['quantity'])

    product_prices = [{'1' : 19.99}, {'2' : 29.99}, {'3' : 4.99}, {'4':49.99}]
    for product in product_prices:
        for product_id in product:
            if checkout_product_id == product_id:
                request.session['product_price'] = request.session['checkout_quantity']*(product[product_id])
                request.session['currenttotal'] += (product[product_id] * request.session['checkout_quantity'])
                request.session['currentquantity'] += request.session['checkout_quantity']

    return redirect('/amadon/checkout')

def goback(request):
    request.session['currenttotal'].clear()
    request.session['currentquantity'].clear()
    return render(request, 'amadon/index.html')


def checkout(request):
    return render(request,'amadon/checkout.html')
