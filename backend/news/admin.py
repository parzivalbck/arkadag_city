from django.contrib import admin
from .models import NewsCategorie, NewsCategorie_ru, NewsCategorie_en, New, New_ru, New_en

admin.site.register(NewsCategorie)
admin.site.register(NewsCategorie_ru)
admin.site.register(NewsCategorie_en)
admin.site.register(New)
admin.site.register(New_ru)
admin.site.register(New_en)