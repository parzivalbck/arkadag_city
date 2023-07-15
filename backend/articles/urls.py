from django.urls import path
from . import views

urlpatterns = [
    path('api/article/tm/', views.ArticleListCreate.as_view()),
    path('api/article/ru/', views.Article_ruListCreate.as_view()),
    path('api/article/en/', views.Article_enListCreate.as_view()),
]