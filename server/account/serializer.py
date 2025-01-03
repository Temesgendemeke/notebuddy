from rest_framework import serializers
from django.contrib.auth.models import User
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
     password = serializers.CharField(write_only=True)

     def validate_email(self, email):
        if '@' not in email:
            raise serializers.ValidationError("invalid error")
        elif CustomUser.objects.filter(email=email).exists():
            raise serializers.ValidationError("Email already exists.")
        return email

     class Meta:
        model = CustomUser
        fields = ['id', 'email','password']

   
    
    
