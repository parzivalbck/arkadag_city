from .models import New, New_ru, New_en, NewsCategorie, NewsCategorie_ru, NewsCategorie_en
from .serializers import NewSerializer, New_ruSerializer, New_enSerializer, NewsCategorieSerializer, NewsCategorie_ruSerializer, NewsCategorie_enSerializer
from rest_framework import generics

class NewsCategoryListCreate(generics.ListCreateAPIView):
    queryset = NewsCategorie.objects.all()
    serializer_class = NewsCategorieSerializer

class NewsCategory_ruListCreate(generics.ListCreateAPIView):
    queryset = NewsCategorie_ru.objects.all()
    serializer_class = NewsCategorie_ruSerializer
    
class NewsCategory_enListCreate(generics.ListCreateAPIView):
    queryset = NewsCategorie_en.objects.all()
    serializer_class = NewsCategorie_enSerializer

class NewListCreate(generics.ListCreateAPIView):
    queryset = New.objects.all()
    serializer_class = NewSerializer

class New_ruListCreate(generics.ListCreateAPIView):
    queryset = New_ru.objects.all()
    serializer_class = New_ruSerializer

class New_enListCreate(generics.ListCreateAPIView):
    queryset = New_en.objects.all()
    serializer_class = New_enSerializer

