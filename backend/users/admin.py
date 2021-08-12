from django.contrib import admin
from .models import *
from django.contrib.auth.admin import UserAdmin
from .forms import CustomUserCreationForm, CustomUserChangeForm

# Register your models here.

admin.site.register(Following)


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser
    list_display = ['email', 'username', ]
    fieldsets = (
        (
            (('User'), {
                'fields': ('username', 'password', 'user_type', 'email', 'phone_number', 'full_name', 'points')
            }),
            (('Permissions'), {
                'fields': ('is_active', 'is_staff', 'is_superuser')
            }),
        ))


admin.site.register(CustomUser, CustomUserAdmin)
