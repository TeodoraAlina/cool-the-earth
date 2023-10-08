from django.contrib.auth.models import User
from .models import Event
from rest_framework import status
from rest_framework.test import APITestCase


class EventListViewTests(APITestCase):
    """
    Tests for the Event model list view
    """

    def setUp(self):
        User.objects.create_user(username="sophie", password="pass")

    def test_can_list_events(self):
        sophie = User.objects.get(username="sophie")
        Event.objects.create(owner=sophie, title="event title", event_date="2024-04-01")
        response = self.client.get("/events/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_logged_out_user_cant_create_event(self):
        response = self.client.post("/events/", {"title": "a title"})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        count = Event.objects.count()
        self.assertEqual(count, 0)


class EventDetailViewTests(APITestCase):
    """
    Tests for the Event model detail view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="pass")
        stefan = User.objects.create_user(username="stefan", password="pass")
        Event.objects.create(
            owner=sophie,
            title="a title",
            description="sophie's event",
            tags="tag",
            event_date="2024-04-01",
        )
        Event.objects.create(
            owner=stefan,
            title="another title",
            description="stefan's content",
            tags="tag",
            event_date="2025-04-01",
        )

    def test_can_retrieve_event_using_valid_id(self):
        response = self.client.get("/events/1/")
        self.assertEqual(response.data["title"], "a title")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_cant_retrieve_event_using_invalid_id(self):
        response = self.client.get("/events/999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_user_cant_update_someone_elses_event(self):
        self.client.login(username="sophie", password="pass")
        response = self.client.put("/events/2/", {"title": "an edited title"})
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_user_can_delete_their_own_event(self):
        self.client.login(username="sophie", password="pass")
        response = self.client.delete("/events/1/")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_user_cant_delete_someone_elses_event(self):
        self.client.login(username="sophie", password="pass")
        response = self.client.delete("/events/2/")
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
