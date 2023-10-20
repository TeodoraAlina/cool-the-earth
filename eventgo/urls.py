from django.urls import path
from eventgo import views

urlpatterns = [
    path('eventgo/', views.GoingList.as_view()),
    path('eventgo/<int:pk>/', views.GoingDetail.as_view()),
]