from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin



class CustomUserManager(BaseUserManager):
    def create_user(self, email,password=None, **extra_fields):
        if not email:
            raise ValueError("you did not entered a valid emails")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email,password, **extra_fields)

        

class CustomUser(AbstractUser, PermissionsMixin):
    username = models.CharField(max_length=20, null=False, blank=True)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_stuff = models.BooleanField(default=False)


    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


    def __str__(self):
        return self.email