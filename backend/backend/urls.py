
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import obtain_auth_token
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('admin/', admin.site.urls),
    path('data/users/', include("customuser.urls")),
    path('data/events/', include("event.urls")),
    path('data/posts/', include("post.urls")),
    path('data/topics/', include("tags.urls")),
    path('auth/', obtain_auth_token)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
