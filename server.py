#! /usr/bin python  
import time
from flask import Flask

app = Flask(__name__)

@app.route("/hello")
def hello():
    return "Flask: Hello Electron!!"

if __name__ == "__main__": 
    app.run(host='127.0.0.1', port=5000)
