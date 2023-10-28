from django.contrib.auth.models import User
from .models import Event
from .models import Going
from rest_framework import status
from rest_framework.test import APITestCase


class GoingListViewTests(APITestCase):
    """
    Tests for the Going model list view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="pass")
        event_a = Event.objects.create(
            owner=sophie, title="an event", event_date="2030-04-01"
        )

    def test_can_list_going(self):
        sophie = User.objects.get(username="sophie")
        event_a = Event.objects.get(id=1)
        Going.objects.create(owner=sophie, event=event_a)
        response = self.client.get("/eventgo/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)



class GoingDetailViewTests(APITestCase):
    """
    Tests for the Going model detail view
    """

    def setUp(self):
        sophie = User.objects.create_user(username="sophie", password="pass")
        stefan = User.objects.create_user(username="stefan", password="pass")
        event_a = Event.objects.create(
            owner=sophie, title="an event", event_date="2030-04-01"
        )
        event_b = Event.objects.create(
            owner=stefan, title="another event", event_date="2030-04-01"
        )
        Going.objects.create(owner=sophie, event=event_a)
        Going.objects.create(owner=stefan, event=event_b)

    def test_cant_retrieve_going_using_invalid_id(self):
        response = self.client.get("/eventgo/999/")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_can_retrieve_going_using_valid_id(self):
        response = self.client.get("/eventgo/1/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)