# Generated by Django 4.2.1 on 2023-07-07 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0024_delete_historie'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article_en',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=128, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(null=True, upload_to='images')),
            ],
            options={
                'verbose_name_plural': 'Main Text',
            },
        ),
        migrations.CreateModel(
            name='Article_ru',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=128, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(null=True, upload_to='images')),
            ],
            options={
                'verbose_name_plural': 'Главные текcта',
            },
        ),
        migrations.AlterModelOptions(
            name='article',
            options={'verbose_name_plural': 'Esasy Maglumatlar'},
        ),
    ]