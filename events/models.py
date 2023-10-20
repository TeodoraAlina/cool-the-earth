from django.db import models
from django.contrib.auth.models import User
from datetime import *
from taggit.managers import TaggableManager

EVENT_CATEGORIES = (
    ("Climate Rally", "Climate Rally"),
    ("Tree Planting", "Tree Planting"),
    ("Green Workshop", "Green Workshop"),
    ("Sustainability Talk", "Sustainability Talk"),
    ("Eco Fair", "Eco Fair"),
    ("Clean Energy", "Clean Energy"),
    ("Environmental Cleanup", "Environmental Cleanup"),
    ("Other", "Other"),
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


    class Meta:
        """
        Order events by date of event.
        """
        ordering = ['-event_date']

    def __str__(self):
        return f'{self.id} {self.title}'
