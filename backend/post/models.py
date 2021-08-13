from django.db import models
from tags.models import Topic

from customuser.models import CustomUser
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=150)
    info = models.TextField()
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)

    def __str__(self):
        return "{} posted {}".format(self.user.username, self.title)
