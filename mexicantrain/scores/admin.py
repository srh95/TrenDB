from django.contrib import admin

from .models import(
    Players,
    Rounds,
    Games,
    PlayerRounds,
)

admin.site.register(Players)
admin.site.register(Rounds)
admin.site.register(Games)
admin.site.register(PlayerRounds)

