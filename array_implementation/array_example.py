import sys

class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        return len(self.data)
    
    def __str__(self):
        return str(self.data)

    def get(self, index):
        return self.data[index]
    
    def set(self, index, value):
        self.data.insert(index, value)
    
    def remove(self, index):
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value

if __name__ == "__main__":
    # vamos inicializar e preencher uma estrutura de dados array
    array = Array()
    array.set(0, "Felipe")
    array.set(1, "Ana")
    array.set(2, "Shirley")
    array.set(3, "Miguel")

    # para acessar um elemento do array, utilizamos seu índice
    print(array.get(0))  # saída: Felipe
    print(array.get(2))  # saída: Shirley
    print("-----")

    # podemos iterar sobre seus elementos da seguinte maneira
    index = 0
    # enquanto há elementos no array
    while index < len(array):
        # recupera o elemento através de um índice
        print("Index:", index, ", Nome:", array.get(index))
        index += 1

    print("----------")
    array = Array()
    array_memory_size = sys.getsizeof(array.data)
    print(array_memory_size)


    array.set(0, "Marcos")
    array.set(1, "Patrícia")
    # quando começamos as inserções o valor muda
    array_memory_size = sys.getsizeof(array.data)
    print(array_memory_size)
    array.set(2, "Matheus")
    print(array_memory_size)
    array.set(3, "Giovana")
    # como um espaço adicional é reservado o valor não é modificado
    array_memory_size = sys.getsizeof(array.data)
    print(array_memory_size)

    array.set(4, "Alberto")
    array.set(5, "Marta")
    array.set(6, "Túlio")
    array.set(7, "Michelle")
    array_memory_size = sys.getsizeof(array.data)
    print(array_memory_size)

    array.update(5, "João")
    print(array.data)

