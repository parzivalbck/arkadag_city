from django.contrib import admin
from .models import Article, Article_ru, Article_en

admin.site.register(Article)
admin.site.register(Article_ru)
admin.site.register(Article_en)