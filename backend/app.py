from flask import Flask, render_template, redirect, url_for
from flask import jsonify
from flask import request
import json
import datetime
import werkzeug
from flask_mysqldb import MySQL
from werkzeug.exceptions import HTTPException
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# app.config['MYSQL_DB'] = 'postoffice'
# app.config['MYSQL_HOST'] = 'localhost'
# app.config['MYSQL_PORT'] = 3306
# app.config['MYSQL_USER'] = 'root'
# app.config['MYSQL_PASSWORD'] = 'meow10!'

app.config['MYSQL_DB'] = 'post_office'
app.config['MYSQL_HOST'] = 'aws-snailmail.cnij84gemecu.us-east-2.rds.amazonaws.com'
app.config['MYSQL_PORT'] = 3306
app.config['MYSQL_USER'] = 'admin'
app.config['MYSQL_PASSWORD'] = 'snail-password'

mysql = MySQL(app)


@app.route('/backend/profile', methods=['GET', 'POST'])
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
        # customer_id = request.get_json['customer_id']
        # fname = request.get_json()['fname']
        # lname = request.get_json()['lname']
        # street_address = request.get_json()['street_address']
        # city = request.get_json()['city']
        # state = request.get_json()['state']
        # zipcode = request.get_json()['zipcode']
        # email = request.get_json()['email']
        # customer_password = request.get_json()['customer_password']
        cur.execute('''UPDATE customers SET fname=%s, lname=%s, street_address=%s, city=%s, state=%s, zipcode=%s, 
        customer_password=%s, email=%s WHERE customer.customer_id=%s''',
                    (fname, lname, street_address, city, state, zipcode,
                     generate_password_hash(customer_password), email,
                     customer_id))
        mysql.connection.commit()

    profile_query = cur.fetchall()
    return jsonify(profile_query)
    # return render_template('/profile.js')  # Documentation shows rendering a .html file, not sure if this is correct


@app.route('/backend/orderHistory', methods=['GET', 'POST'])
def order_history():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form.get('tracking_id')
        # tracking_id = request.get_json()['tracking_id']
        first_between_date = request.form.get('first_between_date')
        second_between_date = request.form.get('second_between_date')
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
        WHERE delivers.tracking_id=%s AND delivers.facility_id=post_office.facility_id
        ORDER BY delivers.time_in''', (tracking_id,))
        # This should return all the information we want to display based on the user input
    output = cur.fetchall()
    return jsonify(output)


@app.route('/backend/Update_Package', methods=['GET', 'POST'])
def update_package():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        tracking_id = request.form.get('tracking_id')
        post_office_id = request.form.get('facility_id')
        time_in = request.form.get('time_in')
        time_out = request.form.get('time_out')
        delivery_status = request.form.get('is_delivered')
        # tracking_id = request.get_json()['tracking_id']
        # post_office_id = request.get_json()['facility_id']
        # time_in = request.get_json()['time_in']
        # time_out = request.get_json()['time_out']
        # delivery_status = request.get_json()['is_delivered']

        cur.execute('''INSERT INTO delivers
                        VALUES(%s,%s,%s,%s,%s)''',
                    (tracking_id, time_in, time_out, delivery_status, post_office_id))
        mysql.connection.commit()

        update_query = 'Delivery status updated!'
        return jsonify(update_query)
    # return render_template('/Update_Package.js')


@app.route('/backend/getUserId', methods=['GET', 'POST'])
def get_user_id():
    cur = mysql.connection.cursor()
    fname = request.form.get('fname')
    lname = request.form.get('lname')
    email = request.form.get('email')
    cur.execute('''SELECT customer_id, fname, lname FROM customer WHERE fname=%s OR lname=%s OR email=%s''', (fname, lname, email))
    get_user_id_query = cur.fetchall()
    return jsonify(get_user_id_query)


@app.route('/backend/createUser', methods=['GET', 'POST'])
def createUser():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        entity = request.form.get('entity')
        # if entity == 'Customer':
        fname = request.form.get('fname')
        lname = request.form.get('lname')
        street_address = request.form.get('street_address')
        city = request.form.get('city')
        state = request.form.get('state')
        zipcode = request.form.get('zipcode')
        customer_password = request.form.get('customer_password')
        email = request.form.get('email')
        cur.execute('''INSERT INTO customer(fname, lname, street_address, city, state, zipcode, customer_password, email)
        VALUES (%s,%s,%s,%s,%s,%s,%s,%s)''', (fname, lname, street_address, city, state, zipcode, customer_password, email))
        mysql.connection.commit()
        cur.execute('''SELECT customer_id FROM customer WHERE fname=%s, lname=%s, email=%s''', (fname, lname, email))
        get_customer_id = cur.fetchall()
        return jsonify(get_customer_id)
        # successful = 'success'
        # return jsonify(successful)
        # else:
        #     fname = request.form.get('fname')
        #     lname = request.form.get('lname')
        #     employee_email = request.form.get('employee_email')
        #     gender = request.form.get('gender')
        #     age = request.form.get('age')
        #     job_title = request.form.get('job_title')
        #     delivery_DBaccess = request.form.get('delivery_DBaccess')
        #     employee_password = request.form.get('employee_password')
        #     cur.execute('''INSERT INTO employee(employee_email, fname, lname, gender, age, job_title, delivery_DBaccess, employee_password)
        #     VALUES (%s, %s, %s, %s, %s, %s, %s, %s)''', (employee_email, fname, lname, gender, age, job_title, delivery_DBaccess, employee_password))
        #     mysql.connection.commit()
    # create_user_query = cur.fetchall()
    # return jsonify(create_user_query)


@app.route('/backend/CreatePackage', methods=['GET', 'POST'])
def create_package():
    cur = mysql.connection.cursor()
    if request.method == 'POST':
        date = request.form.get('shipping_date')
        shipping_type = request.form.get('type')
        weight = request.form.get('weight')
        customer_id = request.form.get('customer_id')
        name = request.form.get('name')
        street_address = request.form.get('return_street_address')
        city = request.form.get('return_city')
        state = request.form.get('return_state')
        zipcode = request.form.get('return_zipcode')
        # shipping_date = request.get_json()['shipping_date']
        # shipping_type = request.get_json()['type']
        # weight = request.get_json()['weight']
        # customer_id = request.get_json()['customer_id']
        # name = request.get_json()['name']
        # street_address = request.get_json()['street_address']
        # city = request.get_json()['city']
        # state = request.get_json()['state']
        # zipcode = request.get_json()['zipcode']

        # not sure if these will be valid as it doesn't fulfill all of the fields for creating each one of these
        cur.execute('''INSERT INTO package(shipping_date, expected_delivery, type, weight, return_street_address, return_city, return_state, return_zipcode, is_delivered, deliver_to)
                    VALUES (%s, ADDDATE(%s, INTERVAL 5 DAY), %s, %s, %s, %s, %s, %s, 'No', %s)''', (date, date, shipping_type, weight, street_address, city, state, zipcode, name))
        cur.execute('''INSERT INTO receiver(name, street_address, city, state, zipcode
                    VALUES (%s, %s, %s, %s, %s)''', (name, street_address, city, state, zipcode))
        mysql.connection.commit()
        cur.execute('''SELECT tracking_id FROM package WHERE shipping_date=%s''', date)
        get_tracking_id = cur.fetchall()
        # not sure how to return these multiple queries just yet
        # create_package_query = 'cur.fetchall()'
        return jsonify(get_tracking_id)
    

@app.route('/backend/login', methods=['GET', 'POST'])
def login():
    try:
        cur = mysql.connection.cursor()
        username = request.form['username']
        password = request.form['password']
        cur.execute('''SELECT email FROM customer''')
        customerUsernames = [item[0] for item in cur.fetchall()]
        cur.execute('''SELECT employee_email FROM employee''')
        employeeUsernames = [item[0] for item in cur.fetchall()]
        cur.execute('''SELECT employee_email FROM employee, post_office WHERE employee.employee_id =  post_office.po_manager_eid''')
        managerUsernames = [item[0] for item in cur.fetchall()]
        for i in customerUsernames:
            if username == i:
                cur.execute('''SELECT customer_password FROM customer WHERE email=%s''', [username])
                customerPW = cur.fetchone()
                customerPW = list(customerPW)
                if password == customerPW[0]:
                    # return redirect('/profile')
                    return 'Customer'
                return 'no_permission'
        for i in managerUsernames:
            if username == i:
                cur.execute('''SELECT employee_password FROM employee WHERE employee_email=%s''', [username])
                managerPW = cur.fetchone()
                managerPW = list(managerPW)
                if password == managerPW[0]:
                    # return redirect('/profile')
                    return 'Manager'
                return 'no_permission'
        for i in employeeUsernames:
            if username == i:
                cur.execute('''SELECT employee_password FROM employee WHERE employee_email=%s''', [username])
                employeePW = cur.fetchone()
                employeePW = list(employeePW)
                if password == employeePW[0]:
                    # return redirect('/profile')
                    return 'Worker'
                return 'no_permission'
        return ("Username Not Found In DB")
        
    except:
        return ('Unable to get Username or Password')


@app.route('/backend/delete', methods=['GET', 'POST'])
def delete():
    if request.method == 'POST':
        cur = mysql.connection.cursor()
        tracking_id = request.form.get('tracking_id')
        cur.execute ('''SELECT tracking_id FROM orders''')
        orders = [item[0] for item in cur.fetchall()]
        for i in orders:
            if tracking_id == i:
                cur.execute ('''DELETE FROM package WHERE tracking_id=%s''', (tracking_id))
                mysql.connection.commit()
                output = 'Sucessfully Deleted Package'
                return jsonify(output)
            else:
                output = 'Package Not Found'
                return jsonify(output)

        output = 'Tracking ID Not Found'
        return jsonify(output)
    else:
        output = 'Unable to get tracking_id request'
        return jsonify(output)


@app.route('/')
def home():
    # cur = mysql.connection.cursor()
    # cur.execute('''select tracking_id from orders''')
    # orders = [item[0] for item in cur.fetchall()]
    # return str(orders)

    return ('/ route working')


# not sure which method of error handling is correct, can try out both
@app.errorhandler(werkzeug.exceptions.BadRequest)
def handle_bad_request(e):
    return {'message': 'Bad request!'}, 400


@app.errorhandler(werkzeug.exceptions.Conflict)
def handle_conflict(e):
    return {'message': 'Username already taken!'}, 409


@app.errorhandler(404)
def page_not_found(e):
    return ('error 404') # make pretty


@app.errorhandler(500)
def internal_server_error(e):
    return ('error 500') # change


if __name__ == '__main__':
    app.run(debug=True)