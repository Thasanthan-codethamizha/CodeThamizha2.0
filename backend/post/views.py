
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
# Create your views here.
from django.contrib.auth import get_user_model
User = get_user_model()


@api_view(['GET'])
def posts_view(request):
    posts = Post.objects.all().filter(aproved=True)
    serializer = PostSerializer(posts, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def posts_detail(request, pk):
    post = Post.objects.all().get(title=pk)
    serializer = PostSerializer(post, many=False)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication, TokenAuthentication, ])
def posts_detail_edit(request, pk):
    try:
        post = Post.objects.all().filter(aproved=True).get(username=pk, user=request.user)
    except Post.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = PostSerializer(post, many=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        serializer = PostSerializer(post, many=False)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, safe=False)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        post.delete()
        return HttpResponse(status=status.HTTP_204_NO_CONTENT)

    serializer = PostSerializer(post, many=False)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication, TokenAuthentication, ])
def followinguser_posts(request):

    posts = Post.objects.all().filter(
        user__following__follower=request.user, aproved=True)
    serializer = PostSerializer(posts, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET'])
def topic_posts(request, topic):
    posts = Post.objects.all().filter(topic__topic=topic, aproved=True)
    serializer = PostSerializer(posts, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication, TokenAuthentication, ])
def aprove_post(request, pk):
    """if request.user.user_type"""
