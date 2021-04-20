from flask import Flask, render_template, flash, redirect, url_for
from flask import jsonify
from flask import request
import mysql.connector
import json
import datetime
import backend.connection

from flask_mysql_connector import MySQL
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'super secret key'  # lets cookies work so flash() can work

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
        cur.execute("""UPDATE customers SET fname=%s, lname=%s, street_address=%s, city=%s, state=%s, zipcode=%s, 
        email=%s, customer_password=%s WHERE customer.customer_id=%s""",
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
        customer_id = request.get_json()['customer_id']

        cur.execute(
            """SELECT DISTINCT package.tracking_id, deliver_to, shipping_date, expected_delivery, post_office.facility_id 
            FROM package, receiver, orders, customer, delivers, post_office
            WHERE tracking_id=%s AND customer_id=%s AND
            customer.customer_id=orders.customer_id AND orders.tracking_id=package.tracking_id AND 
            delivers.facility_id=post_office.facility_id""",
            (tracking_id, customer_id))
        # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return jsonify(output)


@app.route('/backend/Tracking_history', methods=['GET', 'POST'])
def tracking_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        # tracking_id = request.form.get('tracking_id')
        tracking_id = request.get_json()['tracking_id']
        cur.execute('SELECT * FROM delivers WHERE delivers.tracking_id = %s', (tracking_id,)).fetchone()
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

        cur.execute("""UPDATE delivers 
                        SET time_in=%s, time_out=%s, is_delivered=%s
                        WHERE package.tracking_id=%s AND post_office.facility_id=%s AND 
                        orders.tracking_id=package.tracking_id AND orders.customer_id=customer.customer_id""",
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
        cur.execute("""INSERT INTO package(shipping_date, type, weight, deliver_to)
                    VALUES (%s, %s, %s, %s)""", (shipping_date, shipping_type, weight, name))
        cur.execute("""INSERT INTO receiver(name, street_address, city, state, zipcode)
                    VALUES (%s, %s, %s, %s, %s)""", (name, street_address, city, state, zipcode))
        cur.execute("""INSERT INTO orders(customer_id)
                    VALUES (customer_id)""", customer_id)
        mysql.connection.commit()

        # not sure how to return these multiple queries just yet
    return render_template('/CreatePackage.js')


@app.route('/backend/login', methods=['GET', 'POST'])
def login():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        customerUsernames = cur.execute("SELECT customer_id FROM customer")
        employeeUsernames = cur.execute("SELECT employee_id FROM employee")
        managerUsernames = cur.execute(
            "SELECT employee_id FROM employee, post_office WHERE employee.employee_id = post_office.po_manager_eid")
        for i in customerUsernames:
            if username == i:
                customerPW = cur.execute("SELECT customer_password FROM customer WHERE customer_id=%s", (username))
                if password == customerPW:
                    return redirect('/profile')
                return ('Incorrect password')
        for i in managerUsernames:
            if username == i:
                customerPW = cur.execute("SELECT employee_password FROM employee WHERE employee_id=%s", (username))
                if password == customerPW:
                    return redirect('/profile')
                return ('Incorrect password')
        for i in employeeUsernames:
            if username == i:
                employeePW = cur.execute("SELECT employee_password FROM employee WHERE employee_id=%s", (username))
                if password == employeePW:
                    return redirect('/profile')
                return ('Incorrect password')
        return ("login again")

    mysql.connection.commit()
    # cur.close() ?
    return render_template('login.html')  # example template for testing, change later


@app.route('/backend/delete', methods=['GET', 'POST'])
def delete():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        # tracking_id = request.form['tracking_number']
        tracking_id = request.get_json()['tracking_id']
        orders = cur.execute("SELECT tracking_id FROM orders")
        for i in orders:
            if tracking_id == i:
                cur.execute("DELETE FROM package WHERE tracking_id=%s", (tracking_id))
                return ('Sucessfully deleted package')
                # flash('Sucessfully deleted package')
                # return render_template('delete.html')
            else:
                return ('Package not found')
                # flash('Package not found')
                # return render_template('delete.html')
        return ('tracking id not found')

    output = cur.fetchall()

    mysql.connection.commit()
    # cur.close() ?
    return jsonify(output)
    # return render_template('DeletePackage.js')  # replace with actual one


if __name__ == '__main__':
    app.run(debug=True)
