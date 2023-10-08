from django.contrib.auth.models import User
from .models import Post
from .models import Comment
from rest_framework import status
from rest_framework.test import APITestCase


class CommentsListViewTests(APITestCase):
    """
    Tests for the Comment model list view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="pass")
        post_a = Post.objects.create(owner=sophie, description="a post")

    def test_can_list_comments(self):
        sophie = User.objects.get(username="sophie")
        post_a = Post.objects.get(id=1)
        Comment.objects.create(owner=sophie, post=post_a, content="a comment")
        response = self.client.get("/comments/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_out_user_cant_create_comment(self):
        post_a = Post.objects.get(id=1)
        response = self.client.post(
            "/comments/", {"post": post_a, "content": "comment"}
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        count = Comment.objects.count()
        self.assertEqual(count, 0)

    def test_logged_in_user_can_post_comment(self):
        self.client.login(username="sophie", password="pass")
        post_a = Post.objects.get(id=1)
        current_user = User.objects.get(username="sophie")
        response = self.client.post(
            "/comments/", {"owner": current_user, "post": 1, "content": "comment"}
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class CommentsDetailViewTests(APITestCase):
    """
    Tests for the Comment model detail view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="pass")
        stefan = User.objects.create_user(username="stefan", password="pass")
        post_a = Post.objects.create(owner=sophie, description="a post")
        post_b = Post.objects.create(owner=stefan, description="a post")

    def test_cant_retrieve_comment_using_invalid_id(self):
        response = self.client.get("/comments/999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
