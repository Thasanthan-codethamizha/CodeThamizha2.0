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


def tags_view(request):
    tags = Topic.objects.all()
    serializer = TagSerializer(tags, many=True)

    return JsonResponse(serializer.data, safe=False)
