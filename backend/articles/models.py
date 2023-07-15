from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=128, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images', null=True)

    class Meta:
        verbose_name_plural = "Esasy Maglumatlar"    
    def __str__(self):
        return self.title
    
class Article_ru(models.Model):
    title = models.CharField(max_length=128, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images', null=True)

    class Meta:
        verbose_name_plural = "Главные текcта"
    def __str__(self):
        return self.title
    
class Article_en(models.Model):
    title = models.CharField(max_length=128, null=True, blank=True)
    description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='images', null=True)

    class Meta:
        verbose_name_plural = "Main Text"
    def __str__(self):
        return self.title
    
    
