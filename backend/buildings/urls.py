from django.urls import path
from . import views

urlpatterns = [
    path('api/buildings/tm/', views.BuildingsListCreate.as_view()),
    path('api/buildings/ru/', views.Buildings_ruListCreate.as_view()),
    path('api/buildings/en/', views.Buildings_enListCreate.as_view())
]