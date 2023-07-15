# Generated by Django 4.2.1 on 2023-06-26 17:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0013_newcategory_new'),
    ]

    operations = [
        migrations.CreateModel(
            name='NewCategorie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=100)),
                ('description', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.AlterField(
            model_name='new',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='articles.newcategorie'),
        ),
        migrations.DeleteModel(
            name='NewCategory',
        ),
    ]
