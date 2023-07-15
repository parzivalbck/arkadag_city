from .models import Buildings, Buildings_ru, Buildings_en
from .serializers import BuildingsSerializer, Buildings_ruSerializer, Buildings_enSerializer
from rest_framework import generics

class BuildingsListCreate(generics.ListCreateAPIView):
    queryset = Buildings.objects.all()
    serializer_class = BuildingsSerializer

class Buildings_ruListCreate(generics.ListCreateAPIView):
    queryset = Buildings_ru.objects.all()
    serializer_class = Buildings_ruSerializer

class Buildings_enListCreate(generics.ListCreateAPIView):
    queryset = Buildings_en.objects.all()
    serializer_class = Buildings_enSerializer