from django.db import models
from tags.models import Topic

from customuser.models import CustomUser
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=150)
    info = models.TextField()
    content = models.TextField(blank=True, null=True)
    blog_image = models.ImageField(
        upload_to='blog_images/', blank=True, null=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    aproved = models.BooleanField(default=False)
    extra_link = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return "{} posted {}".format(self.user.username, self.title)
