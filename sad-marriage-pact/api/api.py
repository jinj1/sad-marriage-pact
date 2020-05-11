from flask import Flask, request
from flask_pymongo import PyMongo
import http

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb+srv://user1:yDGQCkV4E8i7wDU@cluster0-o5xcn.mongodb.net/tester?retryWrites=true&w=majority'

mongo = PyMongo(app)

@app.route('/data', methods=['POST'])
def hello():
  db = None 
  data  = request.json
  gender = data.get('userDetails', {'gender': ''}).get('gender', '')
  if gender == 'male':
    db = mongo.db.male
  elif gender == 'female':
    db = mongo.db.female
  elif gender == 'transMale':
    db = mongo.db.transMale
  elif gender == 'transFemale':
    db = mongo.db.transFemale
  elif gender == 'nonBinary':
    db = mongo.db.nonBinary
  else:
    return '', http.HTTPStatus.NO_CONTENT
  data.pop('step')
  for key in data.keys():
    data[key].pop('valid', '')
  data["matched"] = False
  db.update_one(
    { "userDetails.email": data.get('userDetails', {'email': ''}).get('email', '')},
    { "$set": data},
    upsert=True,
  )
  return '', http.HTTPStatus.NO_CONTENT