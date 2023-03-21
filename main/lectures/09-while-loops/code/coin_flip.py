import random

def flip_coin():
    # This function simulates a coin flip
    return random.choice(['heads', 'tails'])

coin1 = flip_coin()
coin2 = flip_coin()
coin3 = flip_coin()
count = 1
print(f'Round {count}: {coin1}, {coin2}, {coin3}')

while not 'heads' == coin1 == coin2 == coin3:
    coin1 = flip_coin()
    coin2 = flip_coin()
    coin3 = flip_coin()
    count += 1 # Same as count = count + 1
    print(f'Round {count}: {coin1}, {coin2}, {coin3}')
    
print(f'All heads after {count} rounds')