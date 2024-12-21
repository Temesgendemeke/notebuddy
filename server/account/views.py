from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from .serializer import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser as User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken


# @api_view(["POST"])
# @permission_classes([AllowAny])
# def login(request):
#     email = request.data["email"]
#     password = request.data["password"]
#     user = authenticate(request, email=email, password=password)
#     if not user:
#         return Response({"msg": "Invalid email or password. Please try again."}, status=status.HTTP_400_BAD_REQUEST)
#     refresh = RefreshToken.for_user(user)
#     access = refresh.access
#     return Response({'refresh': refresh, 'access':access}, status=status.HTTP_201_CREATED)


@api_view(["POST"])
@permission_classes([AllowAny])
def signupView(request):
    serializer = UserSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        user = User.objects.get(email=request.data["email"])
        user.set_password(request.data["password"])
        user.save()
        refresh = RefreshToken.for_user(user)
        access = refresh.access_token
        return Response({'user':serializer.data, 'token':{'refresh': str(refresh), 'access':str(access)}}, status=status.HTTP_201_CREATED)
    print(serializer.error_messages)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

