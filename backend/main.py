from flask import Flask, render_template, flash, redirect, url_for
from flask import jsonify
from flask import request
import mysql.connector
import json
import datetime

from flask_mysql_connector import MySQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

# enter username and password
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_PORT'] = '3306'
app.config['MYSQL_DATABASE'] = 'post_office'
mysql = MySQL(app)

EXAMPLE_SQL = 'SELECT * from post_office.package'


# cursor = mysql.connector.cursor()

@app.route('/new_cursor')
def new_cursor():
    # cur = mysql.new_cursor(dictionary=True)
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


@app.route('/profile', methods=['GET', 'POST'])
def profile():
    cur = mysql.connection.cursor()

    if request.method == 'POST':
        if profile.validate():

            fname = request.form.get('fname')
            lname = request.form.get('lname')
            street_address = request.form.get('street_address')
            city = request.form.get('city')
            state = request.form.get('state')
            zipcode = request.form.get('zipcode')
            email = request.form.get('email')
            password = request.form.get('password')
            existing_user = cur.execute('SELECT * FROM customer WHERE email = ?', (email,)).fetchone()
            if existing_user is None:
                cur.execute("INSERT INTO customer(fname, lname, street_address, city, state, zipcode, password, "
                            "email) VALUES (%s, %s, %s, %s, %s, %s, %s, %s", (fname, lname, street_address, city,
                                                                              state, zipcode, generate_password_hash(
                                                                                password), email))
                return 'success'
            flash('A user exists with that email address.')
            return redirect(url_for('auth.login'))  # make sure this is correct
    return render_template('/login')  # not sure if this is correct either


@app.route('/order_history', methods=['GET', 'POST'])
def order_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form.get('tracking_id')
        cur.execute('SELECT * FROM delivers WHERE tracking_id = ?', (tracking_id,)).fetchone()
        # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return str(output)


if __name__ == '__main__':
    app.run(debug=True)
