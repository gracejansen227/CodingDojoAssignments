#MathDojo

#part 1

class MathDojo(object):
    def __init__(self):
        self.total = 0

    def add(self, *a):
        self.addThis = 0
        for value in a:
            self.addThis += value
        self.total += self.addThis
        return self

    def subtract(self, *b):
        self.subtractThis = 0
        for value in b:
            self.subtractThis += value
        self.total -= self.subtractThis
        return self

number1 = MathDojo().add(2).add(2,5).subtract(3,2).total

print number1

#part 2

class MathDojo2(object):
    def __init__(self):
        self.total = 0

    def add(self, *a):
        for obj in a:
            if type(obj) == list:
                for value in obj:
                    self.total += value
            elif type(obj) == int:
                self.total += obj
        return self


    def subtract(self, *b):
        for obj in b:
            if type(obj) == list:
                for value in obj:
                    self.total -= value
            elif type(obj) == int:
                self.total -= obj
        return self


number2 = MathDojo2()
number2.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).total
print number2, "Number Two"

#part 3


class MathDojo3(object):
    def __init__(self):
        self.total = 0

    def add(self, *a):
        for obj in a:
            if isinstance(obj, (list, tuple)):
                for value in obj:
                    self.total += value
            elif isinstance(obj,int):
                self.total += obj
        return self


    def subtract(self, *b):
        for obj in b:
            if isinstance(obj,(list,tuple)):
                for value in obj:
                    self.total -= value
            elif isinstance(obj, int):
                self.total -= obj
        return self


list1 = [1,2,3,4,6]

#
# md2 = MathDojo().add(list2,list1,5,6,list2).subtract(10,list1).result
#
# md3 = MathDojo().add([1],3,4).add([3,5,7,8],[2,4.3,1.25]).subtract(2,[2,3],[1.1,2.3]).result

tuple1 = (1,2,3,5.6,10)
tuple2 = (5,10,15)

md4 = MathDojo3().add(tuple1,list1,14).subtract(tuple2,tuple1,7).total 

print md4
