from django.db import models

class Buildings(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='history_images')
    second_description = models.TextField(null=True, blank=True)
    history_title = models.CharField(max_length=200)
    history_description = models.TextField()
    history_image = models.ImageField(upload_to='history_images')
    second_history_desctiption = models.TextField(null=True, blank=True)
    street = models.CharField(max_length=300, null=True)

    class Meta:
        verbose_name_plural = "Binalar"

    def __str__(self):
        return self.title
    
class Buildings_ru(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='history_images')
    second_description = models.TextField(null=True, blank=True)
    history_title = models.CharField(max_length=200)
    history_description = models.TextField()
    history_image = models.ImageField(upload_to='history_images')
    second_history_desctiption = models.TextField(null=True, blank=True)
    street = models.CharField(max_length=300, null=True)

    class Meta:
        verbose_name_plural = "Здания"

    def __str__(self):
        return self.title
    
class Buildings_en(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='history_images')
    second_description = models.TextField(null=True, blank=True)
    history_title = models.CharField(max_length=200)
    history_description = models.TextField()
    history_image = models.ImageField(upload_to='history_images')
    second_history_desctiption = models.TextField(null=True, blank=True)
    street = models.CharField(max_length=300, null=True)

    class Meta:
        verbose_name_plural = "Buidings"

    def __str__(self):
        return self.title