# Generated by Django 4.2.4 on 2023-08-12 14:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='request',
            old_name='comment',
            new_name='subject',
        ),
    ]
