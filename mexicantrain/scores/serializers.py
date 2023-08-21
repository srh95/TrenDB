from rest_framework import serializers
from .models import Players, Games, Rounds, PlayerRounds

class PlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('id', 'first_name', 'last_name')

class CreatePlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = ('first_name')


class GamesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Games
        fields = ('id', 'date')


class RoundsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rounds
        fields = ('id', 'round_num', 'game_id')


class PlayerRoundsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerRounds
        fields = ('id', 'round_num', 'game_id', 'player_id', 'score', 'choochoo')


