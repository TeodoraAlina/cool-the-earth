from rest_framework import generics, permissions
from drf_api.permissions import IsOwnerOrReadOnly
from eventgo.models import Going
from eventgo.serializers import GoingSerializer


class GoingList(generics.ListCreateAPIView):
    """
    List attendances or create an attendance if logged in.
    """

    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = GoingSerializer
    queryset = Going.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class GoingDetail(generics.RetrieveDestroyAPIView):
    """
    Retrieve a bookmark or delete it by id if you own it.
    """

    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = GoingSerializer
    queryset = Going.objects.all()
