from django.urls import path
from .views import *

urlpatterns = [
    path('', posts_view),
    path('<int:pk>/', posts_detail),
    path('<int:pk>/edit', posts_detail_edit),
    path('following/', followinguser_posts),
    path('<str:topic>/', topic_posts),

]
