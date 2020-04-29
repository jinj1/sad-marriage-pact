from pymongo import MongoClient
from collections import deque

client = MongoClient("mongodb+srv://user1:yDGQCkV4E8i7wDU@cluster0-o5xcn.mongodb.net/test?retryWrites=true&w=majority")
db = client["test"]

order = [
  # "nonBinary",
  # "transFemale",
  # "transMale",
  "female",
  "male"
]

matchedPeople = {}


def getList(gender):
  collection = db[gender]
  queue = deque()
  pipline = [
    {
      "$match": {
        "matched": False
      }
    },
    {
      "$addFields": {
        "info" : {
          "$concatArrays": [
            { "$objectToArray": "$part1" },
            { "$objectToArray": "$part2" },
            { "$objectToArray": "$part3" }
          ] 
        }
      }
    },
    {
      "$project": {
        "_id": 1,
        "userDetails": 1,
        "preferences": 1,
        "contactInfo": 1,
        "info": 1
      }
    }
  ]
  people = collection.aggregate(pipline)
  for person in people:
    queue.append(person)
  return queue

def alreadyMatched(person):
  collection = db[person["userDetails"]["gender"]]
  info = collection.find_one({"_id": person["_id"]})
  return info["matched"]

def getPossibleMatches(person):
  matches = []
  pipline = [
    {
      "$match": {
        "$and": [
          { "userDetails.country":  { "$elemMatch": {"$in": person["userDetails"]["country"]}}},
          { "userDetails.email": { "$ne": person["userDetails"]["email"]}},
          { "userDetails.age": { "$gte": person['preferences']['minAge'], "$lte": person['preferences']['maxAge'] }},
          { "preferences.minAge": { "$lte": person['userDetails']['age']}},
          { "preferences.maxAge": { "$gte": person['userDetails']["age"]}},
          { "userDetails.height": { "$gte": person["preferences"]["minHeight"], "$lte": person["preferences"]["maxHeight"] }},
          { "preferences.genders": { "$elemMatch": {"$eq": person["userDetails"]["gender"]}}},
          { "preferences.minHeight": { "$lte": person["userDetails"]["height"]}},
          { "preferences.maxHeight": { "$gte": person["userDetails"]["height"]}},
          { "$or": [ { "matched": False}, { "match.userDetails.gender": { "$in": order}}]}
        ]
      }
    },
    {
      "$addFields": {
        "numEqualAnswers" : {
          "$size": { 
            "$setIntersection": [
              {
                "$concatArrays": [
                { "$objectToArray": "$part1" },
                { "$objectToArray": "$part2" },
                { "$objectToArray": "$part3" }
                ]
              }, 
              person['info']
            ]
          }
        }
      }
    },
    {
      "$addFields": {
        "score" : {
          "$sum" : [
            "$numEqualAnswers",
            { "$cond": [{ "size":{ "$setIntersection": ["$userDetails.ethnicities", person["preferences"]["ethnicities"]]}}, 1, 0]}
          ]
        }
      }
    },
    {
      "$addFields": {
        "matchesScore" : {
          "$sum" : [
            "$numEqualAnswers",
            { "$cond": [{ "$size": { "$setIntersection": [person["userDetails"]["ethnicities"], "$preferences.ethnicities"]}}, 1, 0]}
          ]
        }
      }
    },
    {
      "$project": {
        "_id": 1,
        "userDetails": 1,
        "contactInfo": 1,
        "score": 1,
        "matchesScore": 1
      }
    }
  ]
  for gender in person['preferences']['genders']:
    if gender in set(order):
      collection = db[gender]
      people = collection.aggregate(pipline)
      for person in people:
        matches.append(person)
  matches =  sorted(matches, key = lambda i: (i["score"], i["matchesScore"]), reverse=True) 
  return matches


def findMatch(person):

  if alreadyMatched(person):
    return

  matches = person.get("matches")

  if matches is None:
    person['matches'] = getPossibleMatches(person)

  if not person['matches']:
    return 

  topMatch = person['matches'].pop(0)
  collection = db[topMatch['userDetails']['gender']]
  topMatchInfo = collection.find_one({"_id": topMatch['_id']})

  if topMatchInfo['matched'] == False:
    topMatchInfo['matched'] = True
    topMatchInfo['match'] = {
      "_id": person['_id'],
      "userDetails": person["userDetails"],
      "contactInfo": person["contactInfo"],
      "matchesScore": topMatch["matchesScore"]
    }
    collection.update_one(
      { "_id": topMatchInfo['_id']},
      {"$set": { "matched": True, "match": topMatchInfo['match']}}
    )
    person['match'] = {
      "_id": topMatchInfo['_id'],
      "userDetails": topMatch["userDetails"],
      "contactInfo": topMatch['contactInfo'],
      "matchesScore": topMatch["score"]
    }
    matchedPeople[person['_id']] = person
    return 
  elif topMatchInfo['match']['matchesScore'] < topMatch['matchesScore'] and topMatchInfo['match']['userDetails']['gender'] in order :
    oldMatchId = topMatchInfo['match']['_id']
    oldMatch = matchedPeople.pop(oldMatchId)
    topMatchInfo['match'] = {
      "_id": person['_id'],
      "userDetails": person["userDetails"],
      "matchesScore": topMatch["matchesScore"]
    }
    collection.update_one(
      { "_id": topMatchInfo['_id']},
      {"$set": { "matched": True, "match": topMatchInfo['match']}}
    )
    person['match'] = {
      "_id": topMatch['_id'],
      "userDetails": topMatch["userDetails"],
      "contactInfo": topMatch["contactInfo"],
      "matchesScore": topMatch["score"]
    }
    matchedPeople[person['_id']] = person
    return oldMatch
  else :
    return person 


   

def main():
  while order:
    print("matching " + order[0])
    matchedPeople.clear()
    queue = getList(order[0])

    while queue:
      person = queue.popleft()
      person = findMatch(person)
      if person is not None:
        queue.append(person)
    for key in matchedPeople:
      person = matchedPeople[key]
      person.pop('matches')
      collection = db[order[0]]
      collection.update_one(
        { "_id": person['_id']},
        {"$set": {"matched": True, "match": person["match"]}}
      )
    order.pop(0)
  

main()

