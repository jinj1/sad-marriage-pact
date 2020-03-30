from flask import Flask

# app is a single object used by all the code modules in this package
app = Flask(__name__)  # pylint: disable=invalid-name

# Read settings from config module (insta485/config.py)
app.config.from_object('api.config')

from api import backend