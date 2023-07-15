from rest_framework import serializers
from .models import Buildings, Buildings_ru, Buildings_en

class BuildingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buildings

class Buildings_ruSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buildings_ru

class Buildings_enSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buildings_en

