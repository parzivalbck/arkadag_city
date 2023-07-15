from django.contrib import admin
from .models import Buildings, Buildings_ru, Buildings_en

admin.site.register(Buildings),
admin.site.register(Buildings_ru),
admin.site.register(Buildings_en)