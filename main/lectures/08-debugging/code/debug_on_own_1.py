# Goal: Fix the code so that it works correctly
# Situation: Playing a game of guessing the closest number to a random number
#   The game is played in 3 rounds
#   Each round, the players enter a number
#   The player who is closer to the random number gets a point
#       The random number is between 1 and 10
#   The game ends when all 3 rounds are played
#   The player with the most points wins
# Warning: This code has more than one bug in it. The debugger is recommended, but not necessary.

import random

# Should return 2 if num2 is closer to the random number
# Should return 1 if num1 is closer to the random number
# Should return 0 if they are equally close


def play_who_is_closer(num1, num2):
    # random.randint(a,b) returns a random integer between a and b, inclusive
    num = random.randint(1, 10)
    if abs(num-num1) > abs(num-num2):
        res = 2
    if abs(num-num1) < abs(num-num2):
        res = 1
    else:
        res = 0
    return res

# Should get the numbers from the players


def get_nums():
    num1 = int(input("Player 1, enter a number: "))
    num2 = int(input("Player 2, enter a number: "))
    return num1, num2


def play_game():
    score1 = 0
    score2 = 0
    # Round 1
    num1, num2 = get_nums()
    winner = play_who_is_closer(num1, num2)
    if winner == 1:
        score1 += 1
    elif winner == 2:
        score2 += 1
    # Round 2
    num1, num2 = get_nums()
    winner = play_who_is_closer(num1, num2)
    if winner == 1:
        score1 += 1
    elif winner == 2:
        score2 += 1
    # Round 3
    num1, num2 = get_nums()
    winner = play_who_is_closer(num1, num2)
    if winner == 1:
        score1 += 1
    else:
        score2 += 1
    # Print the score
    print(f"Player 1 score: {score1}")
    print(f"Player 2 score: {score2}")
    print("Player 1 wins!" if score1 >
          score2 else "Player 2 wins!" if score2 > score1 else "Tie game!")


play_game()
