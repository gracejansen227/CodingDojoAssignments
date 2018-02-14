#store

class Store(object):
    def __init__(self, products, location, owner):
        self.products = products
        self.products = []
        self.location = location
        self.owner = owner

    def add_product(self, p):
        self.products.append(p)
        for i in self.products:
            print i
        return self
    def remove_product(self, inputName):
        for i in self.products:
            if i.name == inputName:
                index = self.products.index(i)
                self.products.pop(index)
        return self
    def inventory(self):
        for i in self.products:
            print i
        return self

Walmart = Store(['Toys', 'Food', 'Shampoo'], '227 Hector Ave', 'George Furman')

print Walmart.inventory()
