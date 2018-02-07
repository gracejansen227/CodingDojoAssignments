#checkerboard

def checkerboard():
    string =''
    difstring = ''

    for rows in range(1,9):
        if rows%2 == 1:
            for j in range(0,4):
                string += '* '
            print string
            string=''

        if rows%2 == 0:
            for j in range(0,4):
                difstring += ' *'
            print difstring
            difstring = ''

checkerboard()
