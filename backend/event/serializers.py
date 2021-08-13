from rest_framework import serializers
from .models import *


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'


class EventRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventRegister
        fields = '__all__'
