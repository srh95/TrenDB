from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from scores import views as sviews
from user_api import views as uviews
# from user_api import views

# app_name = 'scores'

# router = routers.DefaultRouter()
# router.register(r'players', sviews.PlayersView, 'Players')
# router.register(r'Games', sviews.GamesView, 'Games')
# router.register(r'Rounds', sviews.RoundsView, 'Rounds')
# router.register(r'PlayerRounds', sviews.PlayerRoundsView, 'PlayerRounds')
# router.register(r'register', uviews.UserRegister, 'Register'),
# router.register(r'login', uviews.UserLogin, 'Login'),
# router.register(r'logout', uviews.UserLogout, 'Logout'),
# router.register(r'user', uviews.UserView, 'User'),


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('api/', sviews.PlayersView.as_view(), name='Players'),
    # path('api/', include(router.urls)),
    # path('api/', include('user_api.urls')),
    # path('.', include('django.contrib.auth.urls'))
]
