from django.db import models


# primary key player_id
class Players(models.Model):
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)

    def _str_(self):
        return self.first_name


# primary key game_id
class Games(models.Model):
    date = models.DateField()


# primary keys round_num and game_id
# primary key is round id,
class Rounds(models.Model):
    round_num = models.IntegerField()
    game_id = models.ForeignKey(Games, on_delete=models.CASCADE)

    class Meta:
        unique_together = ("round_num", "game_id")


# primary keys player_id, game_id, round_num
class PlayerRounds(models.Model):
    player_id = models.ForeignKey(Players, on_delete=models.CASCADE)
    game_id = models.ForeignKey(Games, on_delete=models.CASCADE)
    round_num = models.ForeignKey(Rounds, on_delete=models.CASCADE)
    score = models.IntegerField()
    choochoo = models.BooleanField()

    class Meta:
        unique_together = ("player_id", "round_num", "game_id")

