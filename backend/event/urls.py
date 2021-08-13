from django.urls import path
from .views import *
urlpatterns = [
    path('', event_view),
    path('<int:event_id>/', event_detail),
    path('create/', event_create),
    path('register/', event_registration_view),
]
