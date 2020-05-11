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
        "answerScore" : {
          "$sum": [
            "$part2.drink",
            "$part2.smoke",
            "$part2.weed",
            "$part2.drug",
            "$part2.rave",
            "$part2.eatOut",
            "$part2.cook",
            "$part2.boba",
            "$part2.workout",
            "$part2.read",
            "$part2.tv",
            "$part2.sex",
            "$part3.white",
            "$part3.weeb",
            "$part3.kpop",
            "$part3.parent",
            "$part3.maintainence",
            "$part3.arrival",
            "$part3.cleaniness",
            "$part3.emotion",
            "$part3.wholesome",
            "$part3.personality",
            "$part3.politics",
            "$part3.commitment"
          ]
        }
      }
    },
    {
      "$project": {
        "_id": 1,
        "userDetails": 1,
        "preferences": 1,
        "part1": 1,
        "contactInfo": 1,
        "answerScore": 1,
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
        "numEqualAnswers": {
          "$sum": [
            {"$cond": [{'$eq': ["$part1.major", person["part1"]["major"]]}, 4, 0]},
            {"$cond": [{'$eq': ["$part1.gpa", person["part1"]["gpa"]]}, 4, 0]},
            {"$cond": [{'$eq': ["$part1.salary", person["part1"]["salary"]]}, 4, 0]},
            {"$subtract": [4, {"$abs": {"$subtract": ["$part1.kids", person["part1"]["kids"]]}}]},
            {"$subtract": [4, {"$abs": {"$subtract": ["$part1.pets", person["part1"]["pets"]]}}]},
            {"$cond": [{'$eq': ["$part1.religion", person["part1"]["religion"]]}, 10, 0]},
            {"$cond": [{'$eq': ["$part1.loveLang", person["part1"]["loveLang"]]}, 4, 0]},
            {"$cond": [{'$eq': ["$part1.hotpot", person["part1"]["hotpot"]]}, 3, 0]},
            {"$cond": [{'$eq': ["$part1.rice", person["part1"]["rice"]]}, 3, 0]}
          ]
        }
      }
    },
    {
      "$addFields": {
        "answerScore" : {
          "$sum": [
            "$part2.drink",
            "$part2.smoke",
            "$part2.weed",
            "$part2.drug",
            "$part2.rave",
            "$part2.eatOut",
            "$part2.cook",
            "$part2.boba",
            "$part2.workout",
            "$part2.read",
            "$part2.tv",
            "$part2.sex",
            "$part3.white",
            "$part3.weeb",
            "$part3.kpop",
            "$part3.parent",
            "$part3.maintainence",
            "$part3.arrival",
            "$part3.cleaniness",
            "$part3.emotion",
            "$part3.wholesome",
            "$part3.personality",
            "$part3.politics",
            "$part3.commitment"
          ]
        }
      }
    },
    {
      "$addFields": {
        "numScore" : {
          "$subtract": [
            120, { "$abs": { "$subtract": ["$answerScore", person["answerScore"]]}}
          ]
        }
      }
    },
    {
      "$addFields": {
        "score" : {
          "$sum" : [
            "$numEqualAnswers",
            "$numScore",
            { "$cond": [{ "size":{ "$setIntersection": ["$userDetails.ethnicities", person["preferences"]["ethnicities"]]}}, 1, 0]},
          ]
        }
      }
    },
    {
      "$addFields": {
        "matchesScore" : {
          "$sum" : [
            "$numEqualAnswers",
            "$numScore",
            { "$cond": [{ "$size": { "$setIntersection": [person["userDetails"]["ethnicities"], "$preferences.ethnicities"]}}, 1, 0]}
          ]
        }
      }
    },
    {
      "$project": {
        "_id": 1,
        "numEqualAnswers": 1,
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

