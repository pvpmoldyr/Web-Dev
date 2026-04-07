from django.urls import path, include
from api import views

urlpatterns = [
    path('', include('api.urls_others')),
]
