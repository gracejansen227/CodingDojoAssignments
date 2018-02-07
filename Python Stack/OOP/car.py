#car

class Car(object):
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        if self.price > 10000:
            self.tax = .15
        else:
            self.tax = .12
        self.display_All()

    def display_All(self):
        info = "Price: ", self.price, "Speed:", self.speed, "Fuel:", self.fuel, "Mileage:", self.mileage, "Tax:", self.tax
        print info
        return info

car1 = Car("100","140 mph","Not Full", "34mpg")
car2 = Car("100000","120 mph","Full", "30mpg")
car3 = Car("30","3000 mph","Not Full", "18mpg")
car4 = Car("400","140 mph","Full", "14mpg")
car5 = Car("780","30 mph","Not Full", "88mpg")
car6 = Car("10000000000","900 mph","Full", "35mpg")
