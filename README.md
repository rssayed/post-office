# SnailMail
## Tech stack
1. ReactJS for the frontend using Rainbow UI
2. Flask for the backend
3. mysql for the database
## Setting up react app
1. In your terminal navigate to the project folder and type "git clone https://github.com/rssayed/post-office"
2. This will copy all the files from this repo down to your computer
3. In your terminal, cd into the directory you just created
4. Check node --version, Install node.js, Npx comes with it.
    https://nodejs.org/en/download/
5. Type "npm install" to install all dependencies
## How to install back end
1. Install python and flask and their dependencies using pip
2. Pip install the dependencies in app.py, inside of the backend folder. 
## Back end dependencies to install with pip
Example: python3 -m pip module_name
2. Flask==1.1.2
3. Flask-Cors==3.0.10
4. flask-mysql-connector==1.1.0
5. Flask-MySQLdb==0.2.0
10. mysqlclient==2.0.3
11. numpy==1.20.2
12. pandas==1.2.3
13. protobuf==3.15.7
14. python-dateutil==2.8.1
15. pytz==2021.1
16. six==1.15.0
17. Werkzeug==1.0.1
## How to run backend
1. Open a terminal for backend
1. Now to run the backend use "python -m flask run" inside of the backend folder.
2. You will need to be able to see app.py for this to work.
3. The local server should be connected to port 5000 if hosted locally.
4. (If hosted on a webserver will be at the URL of webserver)
## How to run front end
1. Open another terminal for front end
2. Type "npm start" to run the app locally where you can see app.js
## How to use website
1. Now that you have front and backend talking to each other along with the database you can use the website.