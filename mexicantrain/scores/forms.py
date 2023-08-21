from django import forms
from .models import(
    Players,
)

class AddPlayerForm(forms.Form):
    first_name = forms.CharField(label='firstname', max_length=20, required=True)
    last_name = forms.CharField(label='lastname', max_length=20, required=True)

