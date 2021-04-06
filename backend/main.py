from flask import Flask, render_template
from flask import jsonify
from flask import request
import mysql.connector
import json
import datetime

from flask_mysql_connector import MySQL

app = Flask(__name__)

# enter username and password
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_PORT'] = '3306'
app.config['MYSQL_DATABASE'] = 'post_office'
mysql = MySQL(app)

EXAMPLE_SQL = 'SELECT * from post_office.package'


#cursor = mysql.connector.cursor()

@app.route('/new_cursor')
def new_cursor():
    #cur = mysql.new_cursor(dictionary=True)
    cur = mysql.connection.cursor()
    cur.execute(EXAMPLE_SQL)
    output = cur.fetchall()

    return str(output)


@app.route('/connection')
def connection():
    conn = mysql.connection
    cur = conn.cursor()
    cur.execute(EXAMPLE_SQL)
    output = cur.fetchall()

    return str(output)

@app.route('/order_history')
def order_history():
    cur = mysql.connection.cursor()
    cur.execute('''SELECT delivers(tracking_id), time_in, time_out, facility_id 
                    FROM delivers, package 
                    WHERE package(tracking_id) = delivers(tracking_id)''')
    output = cur.fetchall()
    return str(output)


if __name__ == '__main__':
    app.run(debug=True)