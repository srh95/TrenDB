
from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('players/', index),
    path('games/addGame/', index),
    path('games/', index),
    path('stats/', index),
    path('login/', index),
    path('createAccount/', index),
]
