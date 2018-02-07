#bike

#bike class has attributes of price, max_speed, miles -- need 3 instances of bike class

class Bike(object):
    def __init__(self, price, max_speed, total_miles):
        self.price = price
        self.max_speed = max_speed
        total_miles = 0
        self.total_miles = total_miles

    def displayInfo(self):
        print self.price, self.max_speed, self.total_miles
        return self

    def ride(self):
        self.total_miles += 10
        print 'Ridin Dirtay'
        return self

    def reverse(self):
        self.total_miles -= 5
        if self.total_miles < 0:
            self.total_miles = 0
        print "Reverse (back dat ass UP)"
        return self

new_user1 = Bike("$100", "250 mph", "10000")
new_user2 = Bike("$2.00", "100 mph", "200000")
new_user3 = Bike("$500.00", "240 mph", "100000")

print new_user1.ride().ride().ride().reverse().displayInfo()

print new_user2.ride().ride().reverse().reverse().displayInfo()

print new_user3.reverse().reverse().reverse().displayInfo()


#to prevent the instance from having negative miles you would set total miles to be equal to or greater than 0

#all methods can return self except the init
