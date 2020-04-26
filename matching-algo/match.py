from pymongo import MongoClient
client = MongoClient("mongodb+srv://user1:yDGQCkV4E8i7wDU@cluster0-o5xcn.mongodb.net/test?retryWrites=true&w=majority")
db = client["test"]

order = [
  "nonBinary",
  "transFemale",
  "transMale",
  "female",
  "male"
]

def getList(gender):
  collection = db[gender]
  queue = []
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
  print(queue)
  return queue

def getPossibleMatches(person):
  matches = []
  pipline = [
    {
      "$match": {
        "$and": [
          { "userDetails.age": { "$gte": person['preferences']['minAge'], "$lte": person['preferences']['maxAge'] }},
          { "preferences.minAge": { "$lte": person['userDetails']['age']}},
          { "preferences.maxAge": { "$gte": person['userDetails']["age"]}},
          { "userDetails.height": { "$gte": person["preferences"]["minHeight"], "$lte": person["preferences"]["maxHeight"] }},
          # { "preferences.minHeight": { "$lte": person["userDetails"]["height"]}},
          # { "preferences.maxHeight": { "$gte": person["userDetails"]["height"]}},
          # { "$or": [ { "matched": False}, { "match.gender": { "$in": order}}]}
        ]
      }
    },
    # {
    #   "$addFields": {
    #     "numEqualAnswers" : {
    #       "$size": { 
    #         "$setIntersection": [
    #           {
    #             "$concatArrays": [
    #             { "$objectToArray": "$part1" },
    #             { "$objectToArray": "$part2" },
    #             { "$objectToArray": "$part3" }
    #             ]
    #           }, 
    #           person['info']
    #         ]
    #       }
    #     }
    #   }
    # },
    # {
    #   "$addFields": {
    #     "score" : {
    #       "$sum" : [
    #         "$numEqualAnswers",
    #         { "$cond": [{ "$setIntersion": ["$userDetails.ethnicities", person["preferences"]["ethnicities"]]}, 1, 0]}
    #       ]
    #     }
    #   }
    # },
    # {
    #   "$addFields": {
    #     "matchesScore" : {
    #       "$sum" : [
    #         "$numEqualAnswers",
    #         { "$cond": [{ "$setIntersion": ["$userDetails.ethnicities", person["preferences"]["ethnicities"]]}, 1, 0]}
    #       ]
    #     }
    #   }
    # },
    {
      "$project": {
        "_id": 1,
        "userDetails": 1,
        "contactInfo": 1,
        # "score": 1,
        # "matchesScore": 1
      }
    }
  ]
  for gender in person['preferences']['genders']:
    if gender != set(order):
      print(gender)
      collection = db[gender]
      people = collection.aggregate(pipline)
      for person in people:
        print(person)
        matches.append(person)
  matches =  sorted(matches, key = lambda i: (i["score"], i["matchesScore"]), reverse=True) 
 
  return matches


def findMatch(person):
  matches = person.get("matches")
  if matches == None:
    person['matches'] = getPossibleMatches(person)


def main():
  queue = getList("female")
  while queue:
    findMatch(queue[0])
    return

main()

