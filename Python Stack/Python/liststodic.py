#lists to dict

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

new_dict = {}
fake_dict = []
def make_dict(list1, list2):

    fake_dict = zip(list1, list2)
    new_dict = dict(fake_dict)
    return new_dict
print make_dict(favorite_animal, name)
