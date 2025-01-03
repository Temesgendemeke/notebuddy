from django.test import TestCase
from rest_framework.test import APITestCase
from .serializer import UserSerializer
from rest_framework import status
# Create your tests here.
class TestViews(TestCase):
    pass


class TestUserSerializer(TestCase):
    def test_serializer_validate_data(self):
        data = {"email":"email@gmail.com", "password":"password"}
        serializer = UserSerializer(data = data)
        self.assertTrue(serializer.is_valid())
    
    def test_serialzier_with_not_validae_data(self):
        # invalid email address
        data = {"email":"email", "password":"password"}
        serializer = UserSerializer(data = data)
        self.assertFalse(serializer.is_valid())

    def test_serializer_With_blank_field(self):
        data = {"email":"email@gmail.com"}
        serializer = UserSerializer(data = data)
        self.assertFalse(serializer.is_valid())

def TestView(APITestCase):
    def test_login(self):
        url = "/token"
        data = {"email":"test@gmail.com", "password":"password123"}
        response = self.client.post(url, data)
        print(response)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)






        