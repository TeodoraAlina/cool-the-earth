# Generated by Django 3.2.21 on 2023-10-19 13:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_alter_event_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='going',
        ),
        migrations.RemoveField(
            model_name='event',
            name='not_going',
        ),
    ]
