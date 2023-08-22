
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('players/', index),
    path('games/addGame/', index),
    path('login/', index),
    path('createAccount/', index),
]