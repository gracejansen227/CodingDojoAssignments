#fun with functions

#odd/even

def odd_even():
    for count in range(1,2001):
        if count%2 == 1:
            print 'Number is' , count, ' . This is an odd number.'
        elif count%2 == 0:
            print 'Number is' , count , ' . This is an even number.'

odd_even()


#MULTIPLY

def multiply(arr,num):
    for data in range(len(arr)):
        arr[data] *= num
    return arr
a = [2,4,10,16]
b = multiply(a,5)
print b

#hacker challenge
new_length =[]
new_array = []
def hacker_challenge(arr):
    for i in range(0,len(arr)):
        new_length = arr[i]
        baby_array = []
        for j in range (0, new_length):
            baby_array.insert(j,1)
        new_array.append(baby_array)
    return new_array

x = hacker_challenge(multiply([1,2,3],3))
print x
