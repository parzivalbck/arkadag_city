# Generated by Django 4.2.1 on 2023-06-24 03:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0006_article_descriptioon_article_key'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='descriptioon',
            new_name='description',
        ),
    ]
