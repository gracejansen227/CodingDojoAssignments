def change(cents):
    coins = {}
    dollar = 0
    half_dollar = 0
    quarter = 0
    dime =0
    nickel = 0
    penny = 0

    if coins/100 > 1:
         dollar = Math.floor(coins/100)
         coins['dollar'] = dollar
         coins = coins % 100
    if coins/50 > 1:
        half_dollar = Math.floor(coins/50)
        coins['half_dollar'] = half_dollar
        coins = coins % 50
    if coins/ 25 > 1:
        quarter = Math.floor(coins/25)
        coins['quarter'] = quarter
        coins = coins % 25
    if coins/10 > 1:
        dime = Math.floor(coins/10)
        coins['dime'] = dime
        coins = coins % 10
    if coins/5 > 1:
        nickel = Math.floor(coins/5)
        coins['nickel'] = nickel
        coins = coins % 5
    if coins/1 > 1:
        penny = coins
        coins['penny'] = penny

    return coins
