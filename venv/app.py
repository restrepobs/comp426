from flask import Flask, render_template, request

app = Flask(__name__, template_folder='templates')

# @app.route('/')
# def hello_world():
#     return 'Hello, World!'

@app.route('/')

def LoginPage():
    #request_method = request.method
    return render_template('login.html')
    #return render_template('login.html', request_method = request_method)

if __name__ == '__main__':
   app.run(debug = True)    

