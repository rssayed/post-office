# !/usr/bin/env python
# -*- coding: utf-8 -*-
import pymysql

host = 'aws-snailmail.c2s7bdbtbg0f.us-east-2.rds.amazonaws.com'
user = 'admin'
password = 'Heartless1234'
database = 'aws-snailmail'

connection = pymysql.connect(host, user, password, database)
with connection:
    cur = connection.cursor()
    cur.execute("SELECT VERSION()")
    version = cur.fetchone()
    print("Database version: {} ".format(version[0]))
