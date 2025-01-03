from rest_framework.decorators import api_view, permission_classes
from .serializer import UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser as User
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken



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
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

