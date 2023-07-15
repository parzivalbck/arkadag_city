# Generated by Django 4.2.1 on 2023-06-24 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0007_rename_descriptioon_article_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, null=True)),
                ('description', models.CharField(max_length=600, null=True)),
                ('key', models.CharField(max_length=50, null=True)),
                ('image', models.ImageField(upload_to='news_images')),
            ],
        ),
        migrations.AlterField(
            model_name='article',
            name='key',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
