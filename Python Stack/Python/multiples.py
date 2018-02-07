#multiples sum average

#multiples part 1
'''
for count in range(1,1000):
    if count%2 != 0:
        print count


#part 2

for count in range(5,1000000):
    if count%5 == 0:
        print count
'''
#sum lists


a =[1,2,5,10,255,3]
count =0
sum =0
for count in range(0, len(a)):
    sum = sum + a[count]
    count += 1
print sum

#average lists

a = [1,2,5,10,255,3]
for count in range(0, len(a)):
    sum = sum + a[count]
    count += 1
avg = sum / (len(a))
print avg
