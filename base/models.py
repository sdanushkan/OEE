from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Request(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phoneNumber = models.IntegerField(null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    europeCountry = models.CharField(max_length=255, null=True, blank=True)
    about = models.TextField(null=True, blank=True)

    def __str__(self):
        return str(self.email)