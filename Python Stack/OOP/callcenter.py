#call center

class Call(object):

    def __init__ (self, ID, name, number, time, reason):
        self.ID = ID
        self.name = name
        self.number = number
        self.time = time
        self.reason = reason
    def display(self):
        print self.id, self.name, self.number, self.time, self.reason
        return self

class CallCenter(object):
    def __init__(self, calls):
        self.calls = calls
        self.size = len(self.calls)
    def add(self, *a):
        self.calls.append(a)
        self.size += 1
        return self

    def remove(self):
        self.calls.pop(0)
        self.size -= 1
        return self
    def info(self):
        for i in range(0, len(self.calls)):
            print self.calls[i].name
            print self.calls[i].number
        print "The queue length is ", self.size
        return self

call1 = Call(1,'Grace', 5043196721,'5:09 pm', 'dying')

call2 = Call(2, 'Patricia', 1232229394,'6:03 am', 'wasted')

listof2 = CallCenter([call1, call2])

listof2.remove().info()
