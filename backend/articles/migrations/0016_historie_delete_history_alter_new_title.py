# Generated by Django 4.2.1 on 2023-06-27 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0015_history'),
    ]

    operations = [
        migrations.CreateModel(
            name='Historie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('image', models.ImageField(upload_to='history_images')),
                ('history_title', models.CharField(max_length=200)),
                ('history_description', models.TextField()),
                ('history_image', models.ImageField(upload_to='history_images')),
            ],
        ),
        migrations.DeleteModel(
            name='History',
        ),
        migrations.AlterField(
            model_name='new',
            name='title',
            field=models.CharField(max_length=200),
        ),
    ]