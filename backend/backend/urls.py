
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('data/users/', include("customuser.urls")),
    path('data/events/', include("event.urls")),
    path('data/posts/', include("post.urls")),
    path('data/topics/', include("tags.urls")),
]
