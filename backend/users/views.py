from django.http.response import JsonResponse
from django.shortcuts import render

from .serializers import UserSerializer
from .models import *
from django.contrib.auth import get_user_model
User = get_user_model()


def user_view(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)


def user_detail(request, pk):
    user = User.objects.all().get(id=pk)
    serializer = UserSerializer(user, many=False)

    return JsonResponse(serializer.data, safe=False)
