from flask import Flask, render_template, flash, redirect, url_for
from flask import jsonify
from flask import request
import mysql.connector
import json
import datetime

from flask_mysql_connector import MySQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'super secret key' # lets cookies work so flash() can work

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
        customer_id = request.form.get('customer_id')
        fname = request.form.get('fname')
        lname = request.form.get('lname')
        street_address = request.form.get('street_address')
        city = request.form.get('city')
        state = request.form.get('state')
        zipcode = request.form.get('zipcode')
        email = request.form.get('email')
        customer_password = request.form.get('customer_password')
        cur.execute("""UPDATE customers SET fname=%s, lname=%s, street_address=%s, city=%s, state=%s, zipcode=%s, 
        email=%s, customer_password=%s WHERE customer_id=%s""", (fname, lname, street_address, city, state, zipcode,
                                                                 email, generate_password_hash(customer_password),
                                                                 customer_id))
        mysql.connection.commit()

    return render_template('/profile')  # Documentation shows rendering a .html file, not sure if this is correct

    # leaving this original code I did commented out in case it is helpful for the login page

    #     if profile.validate():
    #
    #         fname = request.form.get('fname')
    #         lname = request.form.get('lname')
    #         street_address = request.form.get('street_address')
    #         city = request.form.get('city')
    #         state = request.form.get('state')
    #         zipcode = request.form.get('zipcode')
    #         email = request.form.get('email')
    #         customer_password = request.form.get('customer_password')
    #         existing_user = cur.execute('SELECT * FROM customer WHERE email = ?', (email,)).fetchone()
    #         if existing_user is None:
    #             cur.execute("INSERT INTO customer(fname, lname, street_address, city, state, zipcode, password, "
    #                         "email) VALUES (%s, %s, %s, %s, %s, %s, %s, %s", (fname, lname, street_address, city,
    #                                                                           state, zipcode, generate_password_hash(
    #                                                                             customer_password), email))
    #             return 'success'
    #         flash('A user exists with that email address.')
    #         return redirect(url_for('auth.login'))  # make sure this is correct. Want to try to redirect to the login page if user already exists
    # return render_template('/login')  # not sure if this is correct either. Documentation usually renders a static html file


@app.route('/orderHistory', methods=['GET', 'POST'])
def order_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form.get('tracking_id')
        customer_id = request.form.get('customer_id')

        cur.execute(
            """SELECT package.%s, deliver_to, receiver.street_address, receiver.city, receiver.zipcode, 
            shipping_date, expected_delivery 
            FROM package, receiver, orders, customer'
            WHERE customer.%s = orders.%s AND orders.%s = package.%s""",
            (tracking_id, customer_id, customer_id, tracking_id, tracking_id))
        # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return str(output)


@app.route('/Tracking_history', methods=['GET', 'POST'])
def tracking_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form.get('tracking_id')
        cur.execute('SELECT * FROM delivers WHERE tracking_id = %s', (tracking_id,)).fetchone()
        # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return str(output)


@app.route('/login', methods=['GET', 'POST'])
def login():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        customerUsernames = cur.execute("SELECT mobile_number FROM customer")
        employeeUsernames = cur.execute("SELECT employee_email FROM employee")
        for i in customerUsernames
            if username == i
                customerPW = cur.execute("SELECT customer_password FROM customer WHERE mobile_number=%s",(username))
                if password == customerPW
                    return redirect('/profile')
                return('Incorrect password')
        for i in employeeUsernames
            if username == i
                employeePW = cur.execute("SELECT employee_password FROM employee WHERE employee_email=%s",(username))
                if password == employeePW
                    return redirect('/profile')
                return('Incorrect password')
        return ("login again")

    mysql.connection.commit()
    # cur.close() ?
    return render_template('login.html') # example template for testing, change later


@app.route('/delete', methods=['GET', 'POST'])
def delete():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form['tracking_number']
        orders = cur.execute("SELECT tracking_id from orders")
        for i in orders
            if tracking_id == i
                cur.execute("DELETE FROM orders WHERE tracking_id=%s",(tracking_id))
                return('Sucessfully deleted package')
                # flash('Sucessfully deleted package')
                # return render_template('delete.html')
            else
                return('Package not found')
                # flash('Package not found')
                # return render_template('delete.html')
        return('tracking id not found')

    mysql.connection.commit()
    # cur.close() ?
    return render_template('DeletePackage.js') # replace with actual one


# @app.route('/')
# def home():
#     return ("hello world") # render_template('home.html') # snailmail homepage here


if __name__ == '__main__':
    app.run(debug=True)
