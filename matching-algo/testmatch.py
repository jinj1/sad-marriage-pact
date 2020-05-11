from pymongo import MongoClient
from collections import deque

client = MongoClient("mongodb+srv://user1:yDGQCkV4E8i7wDU@cluster0-o5xcn.mongodb.net/test?retryWrites=true&w=majority")
db = client["test"]

order = [
  "male",
  "female"
]

part2Replacement = {
  "never": 0,
  "daily": 1,
  "few": 2,
  "weekly": 3,
  "biweekly": 4,
  "monthly": 5,
  "LMON": 6
}



def main():
  while order:
    collection = db[order[0]]
    for doc in collection.find():
      print(doc)
      doc["matched"] = False
      if type(doc["part1"]["kids"]) == str:
          doc["part1"]["kids"] =int(doc["part1"]["kids"][0])
      if type(doc["part1"]["pets"]) == str:
          doc["part1"]["pets"] =int(doc["part1"]["pets"][0])
      for key in doc["part2"].keys():
        if type(doc["part2"][key]) == str:
          doc["part2"][key] = part2Replacement[doc["part2"][key]]
      for key in doc["part3"].keys():
        if type(doc["part3"][key]) == str:
          value = int(doc["part3"][key][0]) - 1
          doc["part3"][key] = value
      collection.replace_one({"_id": doc["_id"]}, doc)
    order.pop(0)
  

main()

