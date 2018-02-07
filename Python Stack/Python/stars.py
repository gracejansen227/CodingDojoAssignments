# stars

def draw_stars():
    x = [4,5,1,3,7,25]
    for i in range(0, len(x)):
        stars = "*"
        stars *= x[i]
        print stars

draw_stars()

#part 2

def draw_stars2():
    x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
    for i in range(0, len(x)):
        if isinstance(x[i], int):
            stars = "*"
            stars *= x[i]
            print stars
        elif isinstance(x[i], str):

            letter = x[i][0].lower()
            letter *= len(x[i])
            print letter

draw_stars2()
