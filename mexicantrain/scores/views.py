from django.shortcuts import render
from .serializers import PlayersSerializer, GamesSerializer, RoundsSerializer, PlayerRoundsSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from .models import (
    Players,
    Games,
    Rounds,
    PlayerRounds,
)

from .forms import (
    AddPlayerForm,
)


class PlayersView(APIView):
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        '''
        List all the players for given requested user
        '''
        # players = Players.objects.filter(user = request.user.id)
        players = Players.objects.all()
        serializer = PlayersSerializer(players, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        '''
        Create the player with given data
        '''
        data = {
            'first_name': request.data.get('first_name'), 
            'last_name': request.data.get('last_name'), 
            # 'user': request.user.id
        }
        serializer = PlayersSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class GamesView(viewsets.ModelViewSet):
    def get(self, request, *args, **kwargs):
        '''
        List all the players for given requested user
        '''
        # players = Players.objects.filter(user = request.user.id)
        players = Games.objects.all()
        serializer = GamesSerializer(players, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def post(self, request, *args, **kwargs):
        '''
        Create the player with given data
        '''
        data = {
            'first_name': request.data.get('first_name'), 
            'last_name': request.data.get('last_name'), 
            # 'user': request.user.id
        }
        serializer = PlayersSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class RoundsView(viewsets.ModelViewSet):
    serializer_class = RoundsSerializer
    queryset = Rounds.objects.all()


class PlayerRoundsView(viewsets.ModelViewSet):
    serializer_class = PlayerRoundsSerializer
    queryset = PlayerRounds.objects.all()










# view for home page
def home(request):
    return render(request, 'scores/home.html')


# add and view players
def add_players(request):
    if request.method == 'POST':
        form = AddPlayerForm(request.POST)
        if form.is_valid():
            database = players.objects.create(
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name'],
            )
            database.save()
    else:
        form = AddPlayerForm()

    player_list = Players.objects.all

    return render(request, 'scores/viewPlayers.html', {'form': form, 'player_list': player_list})


def add_game(request):
    return render(request, 'scores/addGame.html')



