#compare Lists
list_one = [1,2,5,6,5]
list_two = [1,2,5,9,5]
val = False


def compare(list_one, list_two):
    if len(list_one) != len(list_two):
        print "These are not same length!"
    else:

        for i in range(0, len(list_one)):
            if list_one[i] != list_two[i]:
                print "The lists are not the same"
                return
        print "The lists are the same"

compare(list_one, list_two)
