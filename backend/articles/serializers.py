from rest_framework import serializers
from .models import Article, Article_ru, Article_en

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title','description','image')
    
class Article_ruSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article_ru
        fields = ('id', 'title','description','image')
    
class Article_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article_en
        fields = ('id', 'title','description','image')
    