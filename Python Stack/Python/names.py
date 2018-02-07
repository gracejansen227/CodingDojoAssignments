# names

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def writeNames(students):
    for elements in students:
        print elements["first_name"], elements["last_name"]

writeNames(students)

#part two

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }


def namespartTwo(users):
    for key, data in users.items():
        print key
        num = 1
        for name in data:
            print num, ' - ', name["first_name"].upper(), name["last_name"].upper(),' - ', len(name["first_name"])
            num += 1

namespartTwo(users)
