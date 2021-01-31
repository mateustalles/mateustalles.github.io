class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0
    
    def add(self, value):
        if not self.set[value]:
            self.set[value] = True
        if value > self.last_element:
            self.last_element = value
        
    def __str__(self, a_set=[]):
        printed_value = "{"
        for index, is_in_set in enumerate([] or self.set):
            if is_in_set:
                printed_value += str(index)
                if index < self.last_element:
                    printed_value += ", "
        printed_value += "}"
        return printed_value
    
    def is_in(self, value):
        return self.set[value]

    def union(self, conjuntoB):
        new_set = Conjunto()
        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_set.add(index)
        return new_set

    def intersection(self, conjuntoB):
        new_set = Conjunto()
        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_set.add(index)
        return new_set

    def difference(self, conjuntoB):
        new_set = Conjunto()
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_set.add(index)
        return new_set

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False
        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False
        return True

if __name__ == "__main__":
    conjunto = Conjunto()
    valores = [0, 10, 100, 1000]
    for valor in valores:
        conjunto.add(valor)
    print(conjunto)

    print(conjunto.is_in(10))
    print(conjunto.is_in(19))
    
    conjunto_a = Conjunto()
    for value in range(1, 11):
        conjunto_a.add(value)

    conjunto_b = Conjunto()
    for value in range(10, 21):
        conjunto_b.add(value)

    print(conjunto_a.union(conjunto_b))
    print(conjunto_a.intersection(conjunto_b))
