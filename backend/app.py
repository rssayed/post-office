from flask import Flask, render_template, flash, redirect, url_for
from flask import jsonify
from flask import request
import json
import datetime
from flask_mysqldb import MySQL
from werkzeug.security import generate_password_hash, check_password_hash
import yaml
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# app.config['MYSQL_DB'] = 'mainschema'
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_PORT'] = 3306
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'password'

app.config['MYSQL_DB'] = 'post_office'
app.config['MYSQL_HOST'] = 'aws-snailmail.c2s7bdbtbg0f.us-east-2.rds.amazonaws.com'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'Heartless1234'

# db = yaml.load(open('db.yaml'))
# app.config['MYSQL_DB'] = db['mysql_db']
# app.config['MYSQL_HOST'] = db['mysql_host']
# app.config['MYSQL_PORT'] = db['mysql_port']
# app.config['MYSQL_USER'] = db['mysql_user']
# app.config['MYSQL_PASSWORD'] = db['mysql_password']

mysql = MySQL(app)


@app.route('/backend/profile', methods=['GET', 'POST'])
def profile():
    cur = mysql.connection.cursor()

    if request.method == 'POST':
        # customer_id = request.form.get('customer_id')
        # fname = request.form.get('fname')
        # lname = request.form.get('lname')
        # street_address = request.form.get('street_address')
        # city = request.form.get('city')
        # state = request.form.get('state')
        # zipcode = request.form.get('zipcode')
        # email = request.form.get('email')
        # customer_password = request.form.get('customer_password')
        customer_id = request.get_json['customer_id']
        fname = request.get_json()['fname']
        lname = request.get_json()['lname']
        street_address = request.get_json()['street_address']
        city = request.get_json()['city']
        state = request.get_json()['state']
        zipcode = request.get_json()['zipcode']
        email = request.get_json()['email']
        customer_password = request.get_json()['customer_password']
        cur.execute('''UPDATE customers SET fname=%s, lname=%s, street_address=%s, city=%s, state=%s, zipcode=%s, 
        email=%s, customer_password=%s WHERE customer.customer_id=%s''',
                    (fname, lname, street_address, city, state, zipcode,
                     email, generate_password_hash(customer_password),
                     customer_id))
        mysql.connection.commit()

    profile_query = cur.fetchall()
    return jsonify(profile_query)
    # return render_template('/profile.js')  # Documentation shows rendering a .html file, not sure if this is correct


@app.route('/backend/orderHistory', methods=['GET', 'POST'])
def order_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        # tracking_id = request.form.get('tracking_id')
        # customer_id = request.form.get('customer_id')
        tracking_id = request.get_json()['tracking_id']
        first_between_date = request.get_json()['first_between_date']
        second_between_date = request.get_json()['second_between_date']
        cur.execute(
            '''SELECT DISTINCT package.tracking_id, deliver_to, shipping_date, expected_delivery, post_office.facility_id 
        FROM package, receiver, orders, customer, delivers, post_office
        WHERE package.tracking_id=%s AND delivers.is_delivered='Yes' AND
        customer.customer_id=orders.customer_id AND orders.tracking_id=package.tracking_id AND 
        delivers.tracking_id=orders.tracking_id AND delivers.facility_id=post_office.facility_id
        AND shipping_date BETWEEN %s AND %s''', (tracking_id, first_between_date, second_between_date))
    # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return jsonify(output)


@app.route('/backend/Tracking_history', methods=['GET', 'POST'])
def tracking_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form.get('tracking_id')
        # tracking_id = request.get_json()['tracking_id']
        cur.execute('''SELECT DISTINCT delivers.time_in, delivers.time_out, delivers.is_delivered, post_office.street_address, post_office.city, post_office.state, post_office.zipcode
        FROM post_office, delivers
        WHERE delivers.tracking_id=%s AND delivers.facility_id=post_office.facility_id''', (tracking_id,))
        # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return jsonify(output)


@app.route('/backend/Update_Package', methods=['GET', 'POST'])
def update_package():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        # tracking_id = request.form['tracking_id']
        # post_office_id = request.form['facility_id']
        # time_in = request.form['time_in']
        # time_out = request.form['time_out']
        # delivery_status = request.form['is_delivered']
        tracking_id = request.get_json()['tracking_id']
        post_office_id = request.get_json()['facility_id']
        time_in = request.get_json()['time_in']
        time_out = request.get_json()['time_out']
        delivery_status = request.get_json()['is_delivered']

        cur.execute('''INSERT INTO delivers
                        VALUES(%s,%s,%s,%s,%s)''',
                    (time_in, time_out, delivery_status, tracking_id, post_office_id))
        mysql.connection.commit()

    update_query = cur.fetchall()
    return jsonify(update_query)
    # return render_template('/Update_Package.js')


@app.route('/backend/CreatePackage', methods=['GET', 'POST'])
def create_package():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        # shipping_date = request.form['shipping_date']
        # shipping_type = request.form['type']
        # weight = request.form['weight']
        # customer_id = request.form['customer_id']
        # name = request.form['name']
        # street_address = request.form['street_address']
        # city = request.form['city']
        # state = request.form['state']
        # zipcode = request.form['zipcode']
        shipping_date = request.get_json()['shipping_date']
        shipping_type = request.get_json()['type']
        weight = request.get_json()['weight']
        customer_id = request.get_json()['customer_id']
        name = request.get_json()['name']
        street_address = request.get_json()['street_address']
        city = request.get_json()['city']
        state = request.get_json()['state']
        zipcode = request.get_json()['zipcode']

        # not sure if these will be valid as it doesn't fulfill all of the fields for creating each one of these
        cur.execute('''INSERT INTO package(shipping_date, type, weight, deliver_to)
                    VALUES (%s, %s, %s, %s)''', (shipping_date, shipping_type, weight, name))
        cur.execute('''INSERT INTO receiver(name, street_address, city, state, zipcode)
                    VALUES (%s, %s, %s, %s, %s)''', (name, street_address, city, state, zipcode))
        cur.execute('''INSERT INTO orders(customer_id)
                    VALUES (customer_id)''', customer_id)
        mysql.connection.commit()

        # not sure how to return these multiple queries just yet
    return render_template('/CreatePackage.js')


@app.route('/backend/login', methods=['GET', 'POST'])
def login():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur.execute('''SELECT customer_id FROM customer''')
        customerUsernames = cur.fetchall()
        cur.execute('''SELECT employee_id FROM employee''')
        employeeUsernames = cur.fetchall()
        cur.execute(
            '''SELECT employee_id FROM employee, post_office WHERE employee.employee_id = post_office.po_manager_eid''')
        managerUsernames = cur.fetchall()
        for i in customerUsernames:
            if username == i:
                cur.execute('''SELECT customer_password FROM customer WHERE customer_id=%s''', (username))
                customerPW = cur.fetchall()
                if password == customerPW:
                    return redirect('/profile')
                return ('Incorrect password')
        for i in managerUsernames:
            if username == i:
                cur.execute('''SELECT employee_password FROM employee WHERE employee_id=%s''', (username))
                managerPW = cur.fetchall()
                if password == managerPW:
                    return redirect('/profile')
                return ('Incorrect password')
        for i in employeeUsernames:
            if username == i:
                cur.execute('''SELECT employee_password FROM employee WHERE employee_id=%s''', (username))
                employeePW = cur.fetchall()
                if password == employeePW:
                    return redirect('/profile')
                return ('Incorrect password')
        return ("login again")


@app.route('/backend/delete', methods=['GET', 'POST'])
def delete():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form['tracking_number']
        tracking_id = request.get_json()['tracking_id']
        orders = cur.execute('''SELECT tracking_id FROM orders''')
        for i in orders:
            if tracking_id == i:
                cur.execute('''DELETE FROM package WHERE tracking_id=%s''', (tracking_id))
                mysql.connection.commit()
                return ('Sucessfully deleted package')
            else:
                return ('Package not found')
        return ('tracking id not found')
    # return('working')
    output = cur.fetchall()
    return jsonify(output)


@app.route('/')
def home():
    cur = mysql.connection.cursor()  # <<<<<< testing for mysql connection
    # mysql.connection.commit()

    # return '/ route working'


if __name__ == '__main__':
    app.run(debug=True)
