from django.http.response import HttpResponse, JsonResponse
from django.shortcuts import render
from .serializers import *
from .models import *
from rest_framework.permissions import IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
User = get_user_model()


def user_view(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'POST'])
def user_create(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def user_detail(request, pk):
    user = User.objects.all().get(id=pk)
    serializer = UserSerializer(user, many=False)

    return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication, TokenAuthentication, ])
def user_detail_edit(request, pk):
    try:
        user = User.objects.all().get(id=pk, username=request.user.username)
    except User.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = UserSerializer(user, many=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, many=False)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)


def following_detail(request, pk):
    followings = Follow.objects.all().get(user=request.user)
    serializer = FollowingSerializer(followings, many=False)

    return JsonResponse(serializer.data, safe=False)
