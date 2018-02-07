#animal

class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
        self.health = 100

    def walk(self):
        self.health -= 1
        return self

    def run(self):
        self.health -=5
        return self

    def displayHealth(self):
        print self.health
        return self

class Dog(Animal):
    def __init__(self):
        super(Dragon, self).__init__
        self.health = 150
        return self
    def pet(self):
        self.health += 5

class Dragon(Animal):
    def __init__(self):
        self.health = 170
        return self
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print self.health, "I am a Dragon"
        return self



animal1 = Animal("dobby", 100)
animal1.walk().walk().walk().walk().run().run().displayHealth()
animal2 = Dog("Bunny", 1000)
animal2.fly()
