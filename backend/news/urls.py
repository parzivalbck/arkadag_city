from django.urls import path
from . import views

urlpatterns = [
    path('api/news/tm/', views.NewListCreate.as_view()),
    path('api/news/ru/', views.New_ruListCreate.as_view()),
    path('api/news/en/', views.New_enListCreate.as_view())
]