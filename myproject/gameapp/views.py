from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


def base(request):
    return render(request, "base.html")

def home(request):
    return render(request, "home.html")

def new_game(request):
    return render(request, "new_game.html")