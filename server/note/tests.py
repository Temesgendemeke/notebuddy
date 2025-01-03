from django.test import TestCase
from .serializer import NoteSerializer
from account.serializer import UserSerializer
from account.models import CustomUser
from rest_framework.test import APIRequestFactory
# Create your tests here.
class TestViews(TestCase):
    pass


class TestUserSerializer(TestCase):
    def setUp(self):
        data = {"email":"test@gmail.com", "password":"password123"}
        self.user = CustomUser(data)
        return super().setUp()
    def test_serializer_validate_data(self):
        data = {"title":"note title", "content":"note content", "user": self.user}
        serializer = NoteSerializer(data=data)
        print(serializer.error_messages)
        print(serializer)
        self.assertTrue(serializer.is_valid())
    
    def test_serializer_With_blank_field(self):
        data = {}
        serializer = NoteSerializer(data = data)
        self.assertFalse(serializer.is_valid())


class TestViews(TestCase):
    def setup(self):
        self.factory = APIRequestFactory()

    def test_list_all_notes(self):
        request = self.factory.get('/note')