from django.urls import path
from base.views import request_views as views

urlpatterns = [
   path('addRequest/', views.createRequest , name='request_add'),
]
