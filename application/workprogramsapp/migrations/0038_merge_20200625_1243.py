# Generated by Django 2.2.6 on 2020-06-25 12:43

from django.db import migrations, models


class Migration(migrations.Migration):


    operations = [
        migrations.AddField(
            model_name='workprogramchangeindisciplineblockmodule',
            name='credit_units',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
        migrations.AddField(
            model_name='workprogramchangeindisciplineblockmodule',
            name='code',
            field=models.CharField(blank=True, max_length=1024, null=True),
        ),
    ]
