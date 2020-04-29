import options
import random
import requests
import json

genders = [
  # "nonBinary",
  # "transFemale",
  # "transMale",
  "female",
  "male"
]

for gender in genders:
  for i in range (1,2):
    user ={"step": 7}

    userDetails = {
      'firstName': gender,
      'lastName': str(i),
      'email': gender + str(i) + "@test.com",
      'age': random.randint(18,25),
      'height': random.choice(options.HEIGHT_OPTIONS)['value'],
      'gender': gender,
      # 'country': list (
      #   dict.fromkeys(
      #     [random.choice(options.COUNTRY_OPTIONS)['value'] for i in range(1, random.randint(1,len(options.COUNTRY_OPTIONS)))]
      #   )
      # ),
      'country': ['US'],
      'ethnicities': list (
        dict.fromkeys(
          [random.choice(options.ETHNICITIES_OPTIONS)['value'] for i in range(1, random.randint(1,len(options.ETHNICITIES_OPTIONS)))]
        )
      )
    }
    user['userDetails'] = userDetails

    minAge = random.randint(18,100)
    minHeight = ([{'key': 'N/A', 'text': 'No Preference', 'value': 148}] + options.HEIGHT_OPTIONS)[random.randint(0, len(options.HEIGHT_OPTIONS))]['value']
    preferences = {
      # 'minAge': minAge,
      # 'maxAge': random.randint(minAge, 100),
      # 'minHeight': minHeight,
      # 'maxHeight': random.randint(minHeight, 202),
      # 'genders': list (
      #   dict.fromkeys(
      #     [random.choice(options.GENDER_OPTIONS)['value'] for i in range(1, random.randint(1,len(options.GENDER_OPTIONS)))]
      #   )
      # ),
      'minAge': 18,
      'maxAge': 25,
      'minHeight': 148,
      'maxHeight': 202,
      'genders': [('male','female')[gender!='female']],
      'ethnicities': list (
        dict.fromkeys(
          [random.choice(options.ETHNICITIES_OPTIONS)['value'] for i in range(1, random.randint(1,len(options.ETHNICITIES_OPTIONS)))]
        )
      )
    }
    user['preferences'] = preferences

    part1 = {
      "major": random.choice(options.MAJOR_OPTIONS)['value'],
      "gpa": random.choice(options.GPA_OPTIONS)['value'],
      "salary": random.choice(options.SALARY_OPTIONS)['value'],
      "kids": random.choice(options.NUMBER_OPTIONS)['value'],
      "pets": random.choice(options.NUMBER_OPTIONS)['value'],
      "religion": random.choice(options.RELIGIOUS_OPTIONS)['value'],
      "loveLang": random.choice(options.LOVE_LANG_OPTIONS)['value'],
      "hotpot": random.choice(options.FOOD_OPTIONS)['value'],
      "rice": random.randint(0,5)
    }
    user['part1'] = part1

    part2 = {
      "drink": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "smoke": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "weed": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "drug": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "rave": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "eatOut": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "cook": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "boba": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "workout": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "read": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "tv": random.choice(options.FREQUENCY_OPTIONS)['value'],
      "sex": random.choice(options.FREQUENCY_OPTIONS)['value']
    }
    user['part2'] = part2

    part3 = {
      "white": random.choice(['1(FOB)', '2', '3', '4', '5(White)']),
      "weeb": random.choice(['1(Whats anime?)', '2', '3', '4', '5(Full Weeb)']),
      "kpop": random.choice(['1(Neutral)', '2', '3', '4', '5(Obsessed)']),
      "parent": random.choice(['1(Lax)', '2', '3', '4', '5(Tiger parent)']),
      "maintainence": random.choice(['1(Low maintainence)', '2', '3', '4', '5(High maintainence)']),
      "arrival": random.choice(['1(Early)', '2', '3', '4', '5(Fashionably late)']),
      "cleaniness": random.choice(['1(Slob)', '2', '3', '4', '5(Neat Freak)']),
      "emotion": random.choice(['1(Emotionally Compotent)', '2', '3', '4', '5(Emotionally Incompotent)']),
      "wholesome": random.choice(['1(Wholesome)', '2', '3', '4', '5(Hoesome)']),
      "personality": random.choice(['1(Introvert)', '2', '3', '4', '5(Extrovert)']),
      "politics": random.choice(['1(Liberal)', '2', '3', '4', '5(Conservative)']),
      "commitment": random.choice(['1(Hookup)', '2', '3', '4', '5(Committed)'])
    }
    user['part3'] = part3

    contactInfo = {
      "snapchat": "",
      "instagram": "",
      "facebook": "",
      "email": gender + str(i) + "@test.com",
      "other": ""
    }

    user['contactInfo'] = contactInfo
    
    newHeaders = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    response = requests.post('http://localhost:5000/data', data=json.dumps(user), headers=newHeaders)
    print("Status code: ", response.status_code)

