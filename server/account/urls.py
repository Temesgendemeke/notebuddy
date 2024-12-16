from django.urls import path
from . import views

urlpatterns = [
    path("signup", views.signupView, name="sign"),
    path("login", views.login, name="login"),
]
