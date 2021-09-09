from django.urls import path
from .views import *
urlpatterns = [
    path('', user_view),
    path('profile/', current_user),
    path('create/', user_create),
    path('<str:pk>/', user_detail),
    path('<str:pk>/edit/', user_detail_edit),
    path('<str:pk>/following/', following_detail),
    path('<str:pk>/followers/', followers_detail),
]
