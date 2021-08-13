from django.urls import path
from .views import *
urlpatterns = [
    path('', user_view),
    path('<int:pk>/', user_detail),
    path('<int:pk>/edit/', user_detail_edit),
    path('<int:pk>/following/', following_detail)
]
