# Generated by Django 4.2.1 on 2023-06-27 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0018_alter_historie_second_description_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='new',
            old_name='title',
            new_name='name',
        ),
        migrations.AddField(
            model_name='historie',
            name='street',
            field=models.CharField(max_length=300, null=True),
        ),
    ]