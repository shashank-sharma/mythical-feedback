# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2019-03-17 13:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autocall', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='surveyresponse',
            name='question_id',
            field=models.CharField(default='abcd', max_length=80),
            preserve_default=False,
        ),
    ]
