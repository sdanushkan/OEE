from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Request(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)
    phoneNumber = models.IntegerField(null=True, blank=True)
    subject = models.TextField(null=True, blank=True)
    category = models.CharField(max_length=255, null=True, blank=True)
    companyName = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return str(self.user)