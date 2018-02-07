#product

class Product(object):
    def __init__(self, price, item_name, weight, brand, status):
        self.price = price
        self.item_name = item_name
        self.weight = weight
        self.brand = brand
        self.status = status
        self.status = 'for sale'
        self.display_Info()

    def sell(self):
        self.status = 'sold'
        return self

    def addTax(self):
        self.price = self.price*.2
        return self

    def reTurn(self, reason):
        if reason == 'defective':
            self.status = 'defective'
            self.price = 0
        if reason == 'inbox':
            self.status = 'for sale'
        if reason == 'opened':
            self.status = 'used'
            self.price = self.price - (.2*self.priced)
        return self

    def display_Info(self):
        info = "Price: ", self.price, "Name:", self.item_name, "Weight:", self.weight, "Brand:", self.brand, "Status:", self.status
        print info
        return info

item1 = Product(100, "TV Display Monitor", "30kg", "Vizu", "for sale")

item1.sell().reTurn('defective').display_Info()
