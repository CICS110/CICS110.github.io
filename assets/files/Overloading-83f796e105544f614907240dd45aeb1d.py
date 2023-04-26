class Currency:
    def __init__(self, dollars, cents):
        self.dollars = dollars
        self.cents = cents

    def __str__(self):
        return f"${self.dollars}.{self.cents}"

    def __add__(self, other):
        dollars = self.dollars + other.dollars
        cents = self.cents + other.cents
        if cents >= 100:
            dollars += 1
            cents -= 100
        return Currency(dollars, cents)


currency_1 = Currency(5, 50)  # $5.50
currency_2 = Currency(1, 75)  # $1.75
total = currency_1 + currency_2
print(total)  # $7.25
