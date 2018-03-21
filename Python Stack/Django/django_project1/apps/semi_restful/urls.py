from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new),
    url(r'^(?P<user_id>\d+)/edit$', views.edit),
    url(r'^(?P<user_id>\d+)/delete$', views.delete),
    url(r'^(?P<user_id>\d+)/show$', views.show),
    url(r'^(?P<user_id>\d+)/showedit$', views.showedit),
    url(r'^create$', views.create),
  ]
