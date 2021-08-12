from django.urls import path
from .views import *
urlpatterns = [
    path('', user_view),
    path('<int:pk>/', user_detail)
]
