from rest_framework import serializers
from .models import NewsCategorie, NewsCategorie_ru, NewsCategorie_en, New, New_ru, New_en

class NewsCategorieSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategorie
        fields = ('id', 'name')

class NewsCategorie_ruSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategorie_ru
        fields = ('id', 'name')

class NewsCategorie_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsCategorie_en
        fields = ('id', 'name')

class NewSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', queryset = New.objects)
    class Meta:
        model = New
        fields = ('id', 'name', 'description', 'image','pub_date', 'views', 'author_name', 'author_image', 'category')

class New_ruSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', queryset = New.objects)
    class Meta:
        model = New_ru
        fields = ('id', 'name', 'description', 'image','pub_date', 'views', 'author_name', 'author_image', 'category')

class New_enSerializer(serializers.ModelSerializer):
    category = serializers.SlugRelatedField(slug_field='name', queryset = New.objects)
    class Meta:
        model = New_en
        fields = ('id', 'name', 'description', 'image','pub_date', 'views', 'author_name', 'author_image', 'category')