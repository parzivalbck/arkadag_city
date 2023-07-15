# Generated by Django 4.2.1 on 2023-07-01 04:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0019_rename_title_new_name_historie_street'),
    ]

    operations = [
        migrations.AddField(
            model_name='new',
            name='author_image',
            field=models.ImageField(blank=True, upload_to='author_images'),
        ),
        migrations.AddField(
            model_name='new',
            name='author_name',
            field=models.CharField(blank=True, max_length=128),
        ),
        migrations.AddField(
            model_name='new',
            name='views',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
