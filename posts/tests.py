from django.contrib.auth.models import User
from .models import Post
from rest_framework import status
from rest_framework.test import APITestCase


class PostListViewTests(APITestCase):
    def setUp(self):
        User.objects.create_user(username="sophie", password="pass")

    def test_can_list_posts(self):
        sophie = User.objects.get(username="sophie")
        Post.objects.create(owner=sophie, description="test description")
        response = self.client.get("/posts/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        print(response.data)
        print(len(response.data))

    def test_user_not_logged_in_cant_create_post(self):
        response = self.client.post("/posts/", {"description": "test description"})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)


class PostDetailViewTests(APITestCase):
    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="pass")
        stefan = User.objects.create_user(username="stefan", password="pass")
        Post.objects.create(owner=sophie, description="test description")
        Post.objects.create(owner=stefan, description="test description")

    def test_can_retrieve_post_using_valid_id(self):
        response = self.client.get("/posts/1/")
        self.assertEqual(response.data["description"], "test description")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_post_using_invalid_id(self):
        response = self.client.get("/posts/999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_cant_update_another_users_post(self):
        self.client.login(username="sophie", password="pass")
        response = self.client.put("/posts/2/", {"description": "new test description"})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)