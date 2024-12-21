from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)

urlpatterns = [
    path("signup", views.signupView, name="sign"),
    path("token", TokenObtainPairView.as_view(), name="obtain token"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh token"),
]
