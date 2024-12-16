from django.db import models
from account.models import CustomUser as User

# Create your models here.
class Note(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=200, default="No title", null=True, blank=True)
    content = models.TextField()
    image = models.ImageField(upload_to="note_images", null=True, blank=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title