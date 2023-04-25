class Counter:
    def __init__(self, start):
        self.count = start
    def inc(self):
        self.count += 1

my_counter = Counter(5)
print(my_counter.count)

my_counter.inc()
print(my_counter.count)