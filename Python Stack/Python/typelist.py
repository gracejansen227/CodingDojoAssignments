#type list

#input type is always a list

#a = ['magical unicorn', 12, ' hello', 65, 65]

#a = [1,3,5,6]

a = ['hello', 'lil biiitch', 'u cannot mess with me']
sum = 0
string = "String: "
intBool = False
strBool = False
msg = ''

for count in range(0,len(a)):

    if isinstance(a[count], int):
        intBool = True
        sum = sum + a[count]

    if isinstance(a[count], str):
        strBool = True
        string += a[count]

if (intBool == True and strBool == False):
    msg = "The list you entered is of integer type"
if (intBool == False and strBool == True):
    msg = "The list you entered is of string type"
if(intBool == True and strBool == True):
    msg = "The list you entered is of mixed type"


print "start here!"
print msg
print "Sum:", sum
print string
