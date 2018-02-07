#scores and grades
import random
random_num = random.randint(60,100)

def scores(num):
        grade = '. Your grade is a '
        if num <= 69:
            grade += 'D'
            print grade
        elif num <= 79:
            grade += 'C'
        elif num <= 89:
            grade += 'B'
        elif num <= 100:
            grade += 'A'
        return (num,grade)

num, grade = scores(random_num)

print 'Scores and Grades'
print 'Score:', num, grade
