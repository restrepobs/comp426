from flask import Flask, render_template, request, redirect, url_for
import os
from flask_sqlalchemy import SQLAlchemy
#import sqlite3

app = Flask(__name__, template_folder='templates')
db_path = os.path.join(os.path.dirname(__file__), 'myapp.db')
db_uri = 'sqlite:///{}'.format(db_path)
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/test.db'
db = SQLAlchemy(app)
db.create_all()

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(240))
    password = db.Column(db.String(240))

def __str__(self):
    return f'{self.content}, {self.id}'

@app.route('/login', methods = ['GET', 'POST'])

def LoginPage():
    request_method = request.method
    users = User.query.all()
    #return render_template('login.html')
    return render_template('login.html', request_method = request_method)
    return render_template('login.html', request_method = request_method, users = users)

@app.route('/register', methods = ['GET', 'POST'])

def RegisterPage():
    request_method = request.method
    if request_method == 'POST':
        user = User(username = "amanda", password = "harr")
         #username = request.form['username']
        db.session.add(user)
        db.session.commit()
        return render_template('login.html', request_method = request_method)
        #return redirect('/login')
    else:

    
    #password = request.form['password']
    
    #return render_template('login.html')
        return render_template('register.html', request_method = request_method)
   

@app.route('/home', methods = ['GET', 'POST'])

def HomePage():
    #render the home page
    return
    


if __name__ == '__main__':
   app.run(debug = True)    

