foods = ['apple', 'pear', 
'banana', 'kiwi', 'mango']

for food in foods:
    if food == 'kiwi':
        break
    if food == 'pear':
        continue
    print(food)
