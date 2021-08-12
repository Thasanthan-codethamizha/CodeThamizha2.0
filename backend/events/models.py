
from django.db import models

# Create your models here.
from django.contrib.auth import get_user_model
User = get_user_model()

EVENT_LOCATION = (
    ('Zoom', 'Zoom'),
    ('GoogleMeet', 'GoogleMeet'),
    ('Teams', 'Teams'),
    ('Other', 'Other'),
)


class Event(models.Model):
    Title = models.CharField(max_length=120)
    event_location = models.CharField(max_length=150, choices=EVENT_LOCATION)
    info = models.TextField()
    Description = models.TextField()
    EventLink = models.URLField()
    Points = models.IntegerField()
    teacher = models.ForeignKey(User, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return self.Title


class EventRegistration(models.Model):
    event = models.ForeignKey(
        Event, verbose_name='Event', on_delete=models.CASCADE)
    user = models.ForeignKey(
        User, verbose_name='Attendee', on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = 'Attendee for event'
        verbose_name_plural = 'Attendees for events'
        unique_together = ('event', 'user')
