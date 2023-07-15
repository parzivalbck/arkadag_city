from .models import Article, Article_ru, Article_en
from .serializers import ArticleSerializer, Article_ruSerializer, Article_enSerializer
from rest_framework import generics

class ArticleListCreate(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

class Article_ruListCreate(generics.ListCreateAPIView):
    queryset = Article_ru.objects.all()
    serializer_class = Article_ruSerializer

class Article_enListCreate(generics.ListCreateAPIView):
    queryset = Article_en.objects.all()
    serializer_class = Article_enSerializer

