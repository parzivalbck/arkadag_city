from django.db import models
from django.utils import timezone

class NewsCategorie(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "Täzelikler kategoriýasy"

    def __str__(self):
        return self.name
    
class NewsCategorie_ru(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
       verbose_name_plural = "Категорий новоcтей"

    def __str__(self):
        return self.name
    
    

class NewsCategorie_en(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "News category"

    def __str__(self):
        return self.name
    
class New(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='news_images', blank=True)
    pub_date = models.DateField(default=timezone.now)
    views = models.PositiveIntegerField(default=0)
    author_name = models.CharField(max_length=128, blank=True)
    author_image = models.ImageField(upload_to='author_images', blank=True)
    category = models.ForeignKey(to=NewsCategorie, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Täzelikler"

    def __str__(self):
        return self.name
    
class New_ru(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='news_images', blank=True)
    pub_date = models.DateField(default=timezone.now)
    views = models.PositiveIntegerField(default=0)
    author_name = models.CharField(max_length=128, blank=True)
    author_image = models.ImageField(upload_to='author_images', blank=True)
    category = models.ForeignKey(to=NewsCategorie, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Новоcти"

    def __str__(self):
        return self.name    
    
class New_en(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='news_images', blank=True)
    pub_date = models.DateField(default=timezone.now)
    views = models.PositiveIntegerField(default=0)
    author_name = models.CharField(max_length=128, blank=True)
    author_image = models.ImageField(upload_to='author_images', blank=True)
    category = models.ForeignKey(to=NewsCategorie, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "News"

    def __str__(self):
        return self.name    