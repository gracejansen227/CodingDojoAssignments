#find characters

# input
words = ['hello','world','my','name','is','Anna']
char = "o"
def characters(words):
    new_words = []
    for i in range(0,len(words)):
        if words[i].count(char) >0:
            new_words.append(words[i])
    print new_words

characters(words)
