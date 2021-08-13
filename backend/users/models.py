from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

from .managers import CustomUserManager

# Create your models here.

USER_TYPES = (
    ('Founder', 'Founder'),
    ('Co-Founder', 'Co-Founder'),
    ('Staff', 'Staff'),
    ('Moderator', 'Moderator'),
    ('Member', 'Member'),
)


class CustomUser(AbstractUser):
    username = models.CharField(max_length=120, unique=True)
    password = models.CharField(max_length=120, blank=True)
    user_type = models.CharField(max_length=13, choices=USER_TYPES)
    email = models.EmailField(max_length=120, blank=True)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    full_name = models.CharField(max_length=120, blank=True, null=True)
    points = models.IntegerField(blank=True, null=True)

    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.username


class Following(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE)
    follows = models.ManyToManyField(CustomUser, related_name="Following")
