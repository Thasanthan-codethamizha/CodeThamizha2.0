from rest_framework import serializers
from .models import *
from customuser.serializers import UserSerializer
from tags.serializers import TagSerializer


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    topic = TagSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ('title', 'info', 'content',
                  'blog_image', 'user', 'topic', 'aproved', 'extra_link', 'created_at')
