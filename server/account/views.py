from django.contrib.auth import authenticate
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from .serializer import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser as User


@api_view(["POST"])
def login(request):
    email = request.data["email"]
    password = request.data["password"]
    user = authenticate(request, email=email, password=password)
    if not user:
        return Response({"msg": "not found"}, status=status.HTTP_404_NOT_FOUND)
    token, created = Token.objects.get_or_create(user=user)

    return Response({"token": token.key, "user": user.email})


@api_view(["POST"])
def signupView(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(email=request.data["email"])
        user.set_password(request.data["password"])
        user.save()
        token = Token.objects.create(user=user)
        return Response({"token": token.key, "user": serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

