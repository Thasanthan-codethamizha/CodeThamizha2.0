from django.urls import path
from .views import *

urlpatterns = [
    path('', tags_view)
]
