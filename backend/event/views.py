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


@api_view(['GET'])
def event_view(request):
    events = Event.objects.all()
    serializer = EventSerializer(events, many=True)
    return JsonResponse(serializer.data, safe=False)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication, TokenAuthentication, ])
def event_detail(request, event_id):
    try:
        event = Event.objects.all().get(id=event_id)
    except Event.DoesNotExist:
        return HttpResponse(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = EventSerializer(event, many=False)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        if request.user.user_type == "Founder" or request.user.user_type == "Co-Founder" or request.user.user_type == "Teacher":
            serializer = EventSerializer(event, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, safe=False)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({"message": "You are not allowed to create event"})
    elif request.method == 'DELETE':
        if request.user.user_type == "Founder" or request.user.user_type == "Co-Founder" or request.user.user_type == "Teacher":
            event.delete()
            return HttpResponse(status=status.HTTP_204_NO_CONTENT)
        else:
            return JsonResponse({"message": "You are not allowed to create event"})


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
@authentication_classes([SessionAuthentication, TokenAuthentication, ])
def event_create(request):
    if request.method == 'POST':
        if request.user.user_type == "Founder" or request.user.user_type == "Co-Founder" or request.user.user_type == "Teacher":
            serializer = EventSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return JsonResponse({"message": "You are not allowed to create event"})


@ api_view(['GET', 'POST'])
@ permission_classes([IsAuthenticated])
@ authentication_classes([SessionAuthentication, TokenAuthentication, ])
def event_registration_view(request):
    if request.method == 'POST':
        if request.user.user_type == "Founder" or request.user.user_type == "Co-Founder" or request.user.user_type == "Teacher":
            eventregistrations = EventRegister.objects.all()
            serializer = EventRegisterSerializer(eventregistrations, many=True)
            return JsonResponse(serializer.data, safe=False)
        else:
            return JsonResponse({"message": "You are not allowed to create event"})
    elif request.method == 'GET':
        if request.user.user_type == "Founder" or request.user.user_type == "Co-Founder":
            eventregistrations = EventRegister.objects.all()
        elif request.user.user_type == "Teacher":
            eventregistrations = EventRegister.objects.all().filter(
                teacher=request.user)
        else:
            return JsonResponse({"message": "You are not allowed to VIEW REGISTERED GUYS"})
        serializer = EventRegisterSerializer(eventregistrations, many=True)
        return JsonResponse(serializer.data, safe=False)
