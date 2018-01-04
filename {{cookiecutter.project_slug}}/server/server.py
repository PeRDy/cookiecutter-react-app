#!/usr/bin/env python3

import os
from flask import Flask, send_from_directory

BUILD_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'build'))

app = Flask(__name__)

# Serve React App
@app.route('/')
def serve():
    return send_from_directory(BUILD_PATH, 'index.html')


if __name__ == '__main__':
    app.run()
