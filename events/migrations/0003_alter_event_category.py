# Generated by Django 3.2.21 on 2023-10-19 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20231008_1330'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='category',
            field=models.CharField(choices=[('Climate Rally', 'Climate Rally'), ('Tree Planting', 'Tree Planting'), ('Green Workshop', 'Green Workshop'), ('Sustainability Talk', 'Sustainability Talk'), ('Eco Fair', 'Eco Fair'), ('Clean Energy', 'Clean Energy'), ('Environmental Cleanup', 'Environmental Cleanup'), ('Other', 'Other')], default='Other', max_length=50),
        ),
    ]
