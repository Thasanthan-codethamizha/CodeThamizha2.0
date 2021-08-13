from rest_framework import serializers
from rest_framework.authtoken.views import Token
from .models import *
from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email',
                  'user_type', 'full_name', 'points']

        extra_kwargs = {'password': {
            'write_only': True,
            'required': True
        }}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


class FollowingSerializer(serializers.ModelSerializer):
    follows = UserSerializer(many=True)

    class Meta:
        model = Following
        fields = ['user', 'follows']
