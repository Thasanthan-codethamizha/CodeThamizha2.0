from django.urls import path
from .views import *
urlpatterns = [
    path('', event_view),
    path('<str:event_name>/', event_detail),
    path('create/', event_create),
    path('register/', event_registration_view),
]
