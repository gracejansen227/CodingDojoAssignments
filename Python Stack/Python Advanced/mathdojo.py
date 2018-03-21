#math dojo

class MathDojo(object):
    def __init__(self, newnum):
        self.newnum = newnum

    def add(self, a, *b):
        newnum = newnum + a + b
        return self
    def substract(self, a, *b):
        newnum = newnum - a - b
        return self

md = MathDojo().add(2).add(2, 5).subtract(3, 2).result
