from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, template_folder='templates')

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

@app.route('/login', methods = ['GET', 'POST'])

def LoginPage():
    request_method = request.method
    #return render_template('login.html')
    return render_template('login.html', request_method = request_method)

@app.route('/register', methods = ['GET', 'POST'])

def RegisterPage():
    request_method = request.method
    #return render_template('login.html')
    return render_template('register.html', request_method = request_method)
    if request.method == 'POST':
        return redirect('/login')

@app.route('/home', methods = ['GET', 'POST'])

def HomePage():
    #render the home page
    return
    


if __name__ == '__main__':
   app.run(debug = True)    

