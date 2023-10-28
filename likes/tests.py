from django.contrib.auth.models import User
from .models import Post
from .models import Like
from rest_framework import status
from rest_framework.test import APITestCase


class LikeListViewTests(APITestCase):
    """
    Tests for the Like model list view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="password")
        post_a = Post.objects.create(owner=sophie, content="a post")

    def test_can_list_like(self):
        sophie = User.objects.get(username="sophie")
        post_a = Post.objects.get(id=1)
        Like.objects.create(owner=sophie, post=post_a)
        response = self.client.get("/likes/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class LikeDetailViewTests(APITestCase):
    """
    Tests for the Like model detail view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="password")
        stefan = User.objects.create_user(username="stefan", password="password")
        post_a = Post.objects.create(owner=sophie, content="a post")
        post_b = Post.objects.create(owner=stefan, content="another post")
        Like.objects.create(owner=sophie, post=post_a)
        Like.objects.create(owner=stefan, post=post_b)

    def test_cant_retrieve_like_using_invalid_id(self):
        response = self.client.get("/likes/999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_can_retrieve_like_using_valid_id(self):
        response = self.client.get("/likes/1/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
