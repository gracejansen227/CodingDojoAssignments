#hospital
import random

class Patient(object):
    def __init__(self, name, allergies):
        self.id = random.randrange(1,501)
        self.name = name
        self.allergies = allergies
        self.bedNum = 0


class Hospital(object):
    def __init__(self):
        self.patients = []
        self.name = 'Da Hospital Yo'
        self.capacity = 500
    def admit(self, p):
        if len(self.patients) >= self.capacity:
            print "The hospital is at capacity. Cannot admit patient"
        else:
            self.patients.append(p)

            for element in self.patients:
                print element.name, element.id
            p.bedNum =random.randrange(1,501)
        print "Admitted patient#", p.id, "Name", p.name, "to bed#",p.bedNum
        #print self.patients
        #why isn't self.patients printing out list -- its only printing object instance
        return self
    def discharge(self, inputName):
        self.input = inputName
        for i in self.patients:
            if i.name == inputName:
                index = self.patients.index(i)
                self.patients.pop(index)
                i.bedNum = 0
        print i.name, i.bedNum, "Has been discharged"
        return self

patient1 = Patient("Grace", "cats")
patient2 = Patient("Patricia", "tide")

hospital1= Hospital()

hospital1.admit(patient1)

hospital1.admit(patient2)

hospital1.discharge("Patricia")
