#cointoss

def coinToss():
    import random
    totalHead = 0
    totalTail = 0
    side = ''
    attempt = 0
    while attempt < 5000:
        attempt += 1
        coin = round(random.random())
        if coin == 0:
            side = 'head!'
            totalHead += 1
            print 'Attempt#',attempt,': Throwing a coin...It\'s a', side, '...Got',totalHead,'head(s) so far and',totalTail, 'tail(s) so far'
        elif coin == 1:
            side = 'tail!'
            totalTail += 1
            print 'Attempt#',attempt,': Throwing a coin...It\'s a', side, '...Got',totalHead,'head(s) so far and',totalTail, 'tail(s) so far'
    return (attempt, side, totalHead, totalTail)

attempt, side, totalHead, totalTail = coinToss()

print 'Attempt#',attempt,': Throwing a coin...It\'s a', side, '...Got',totalHead,'head(s) so far and',totalTail, 'tail(s) so far. Ending the program, thank you!'
