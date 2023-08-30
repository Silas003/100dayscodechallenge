from django.db import models

class Counter(models.Model):
    name=models.CharField(max_length=100)
    words=models.TextField(default='')
    counter=models.PositiveIntegerField()

