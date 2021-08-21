from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

from .managers import CustomUserManager

# Create your models here.

USER_TYPES = (
    ('Founder', 'Founder'),
    ('Co-Founder', 'Co-Founder'),
    ('Staff', 'Staff'),

    ('Teacher', 'Teacher'),
    ('Moderator', 'Moderator'),
    ('Member', 'Member'),
)


class CustomUser(AbstractUser):
    username = models.CharField(max_length=120, unique=True)
    password = models.CharField(max_length=120, blank=True)
    user_type = models.CharField(
        max_length=13, choices=USER_TYPES, default="Member")
    email = models.EmailField(max_length=120, blank=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    full_name = models.CharField(max_length=120, blank=True)
    points = models.IntegerField(blank=True, null=True, default=0)

    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.username


class Follow(models.Model):
    following = models.ForeignKey(
        'CustomUser', on_delete=models.CASCADE, related_name="following")
    follower = models.ForeignKey(
        'CustomUser', on_delete=models.CASCADE, related_name="follower")
    follow_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "{} follows {}".format(self.follower.username, self.following.username)
