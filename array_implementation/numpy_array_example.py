import numpy as np
import sys

# define um array vazio de inteiros
myarray = np.array([], dtype=int)

# adicionar valores
myarray = np.insert(myarray, 0, 5) # posição 0, valor 5
myarray = np.insert(myarray, 1, 3)
myarray = np.insert(myarray, 2, 5)
print("valores: ", myarray)

# adicionar em uma posição intermediária
myarray = np.insert(myarray, 1, 4)
print("Após inserção em índice intermediário: ", myarray)

# remover um valor
myarray = np.delete(myarray, 0)
print("Array após remoção: ", myarray)

print("Tamanho do array", sys.getsizeof(myarray))
