from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^new', views.new),
    url(r'^create$', views.create),
    url(r'^(?P<number>\d)$', views.show), # need to add the blog number..??
    url(r'^(?P<number>\d)/edit$', views.edit),
    url(r'^(?P<number>\d)/destroy$', views.destroy),
    
  ]
