from django.db import models
from django.contrib.auth.models import User
from datetime import *
from taggit.managers import TaggableManager

EVENT_CATEGORIES = (
    ("climate_rally", "Climate Rally"),
    ("tree_planting", "Tree Planting"),
    ("green_workshop", "Green Workshop"),
    ("sustainability_talk", "Sustainability Talk"),
    ("eco_fair", "Eco Fair"),
    ("clean_energy", "Clean Energy"),
    ("environmental_cleanup", "Environmental Cleanup"),
    ("other", "Other"),
)

class Event(models.Model):
    """
    Event model, related to 'owner', i.e. a User instance.
    Default image set so that we can always reference image.url.
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    event_date = models.DateField(blank=False)
    event_time = models.TimeField(blank=True, null=True)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    tags = TaggableManager(blank=True)
    category = models.CharField(
        max_length=50, choices=EVENT_CATEGORIES, default='Other'
    )
    image = models.ImageField(
        upload_to='images/', default='../default_post_npnwpm', blank=True
    )
    going = models.ManyToManyField(User,
        related_name='events_going', blank=True)
    not_going = models.ManyToManyField(User,
        related_name='events_not_going', blank=True)


    class Meta:
        """
        Order events by date of event.
        """
        ordering = ['-event_date']

    def __str__(self):
        return f'{self.id} {self.title}'
