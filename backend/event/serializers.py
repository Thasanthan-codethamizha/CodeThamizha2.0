from rest_framework import serializers
from .models import *
from customuser.serializers import UserSerializer


class EventSerializer(serializers.ModelSerializer):
    teacher = UserSerializer(read_only=True)

    class Meta:
        model = Event
        fields = ('Title', 'event_poster', 'event_date', 'event_location',
                  'info', 'Description', 'EventLink', 'Points', 'teacher', 'price')


class EventRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegister
        fields = '__all__'
