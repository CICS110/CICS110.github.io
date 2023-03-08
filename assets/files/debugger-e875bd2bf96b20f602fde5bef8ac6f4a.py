# The following code has a bug in it. It is big, so it is hard to find.
# You can use the debugger to find the bug.

# Determines the change to give back to a customer
# Takes in 2 parameters:
#   amount: the amount of change needed
#   stock: a tuple of the number of each coin we have
# Returns a tuple of the number of each coin we should give back
def get_change(amount, stock):
    if amount < 0:
        return None
    quarters = amount // 25
    if quarters > stock[3]:
        quarters = stock[3]
    amount -= quarters * 25
    dimes = amount // 10
    if dimes > stock[2]:
        dimes = stock[2]
    amount -= dimes * 10
    nickels = amount // 5
    if nickels > stock[1]:
        nickels = stock[1]
    amount -= nickels * 5
    pennies = amount
    if pennies > stock[0]:
        pennies = stock[0]
    amount -= pennies
    if amount != 0:
        return None
    else:
        return (quarters, dimes, nickels, pennies)

# Prompts the user for the number of each coin we have
# A value of -1 means the user should be prompted for that coin
# A value of anything else means that coin should be set to that value
# Example: get_stock(1, 2, 3, 4) should set the stock to
#   1 quarter, 2 dimes, 3 nickels, and 4 pennies
# Example: get_stock() should prompt the user for the number of each coin
# Example: get_stock(1, -1, 3, -1) should set the stock to 1 quarter,
#   prompt for the number of dimes, 3 nickels,
#   and prompt for the number of pennies


def get_stock(pennies=-1, nickels=-1, dimes=-1, quarters=-1):
    if pennies == -1:
        pennies = int(input("How many pennies do we have? "))
    if nickels == -1:
        nickels = int(input("How many nickels do we have? "))
    if dimes == -1:
        dimes = int(input("How many dimes do we have? "))
    if quarters == -1:
        quarters = int(input("How many quarters do we have? "))
    return (quarters, dimes, nickels, pennies)

# Should print a message saying how many of each coin we should give back
def print_stock(stock):
    print(f"{stock[0]} quarters")
    print(f"{stock[1]} dimes")
    print(f"{stock[2]} nickels")
    print(f"{stock[3]} pennies")


stock = get_stock()
amount = int(input("How much change do you need? (in cents)"))
res = get_change(amount, stock)
if res == None:
    print("We don't have enough change")
else:
    print_stock(res)
