# Strings and Lists Assignment

words = "It's thanksgiving day. It's my birthday, too!"

words.find('day')

print words.find('day')

words2 = words.replace('day','month')

print words2

#min and max

x = [2,54,-2,7,12,98]
print min(x)
print max(x)

#first and last

x = ["hello", 2, 54, -2, 7, 12, 98, "world"]

print x[0]
print x[len(x)-1]
list = x[0] + x[len(x)-1]
print list

#new list

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
half = len(x)/2

print half
x1 = x[:half]
x2 = x[half-1:]

print x1

x2[0] = x1

print x2
