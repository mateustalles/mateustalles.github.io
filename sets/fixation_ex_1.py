# Exercício 6
# Escreva uma função que identifique o único número duplicado em uma lista.
# Retorne o número duplicado em O(n) .
# Exemplos de entrada e saída:
# Copiar
# entrada = [1, 3, 2, 4, 5, 1]
# # saída: 1

def find_duplicate(array):
    items_set = set()
    for item in array:
        if item in items_set:
            print(f'O item duplicado é: {item}')
            return item
        else:
            items_set.add(item)


if __name__ == "__main__":
    entrada = [1, 3, 2, 4, 5, 1]
    find_duplicate(entrada)
    entrada = [2, 4, 2, 5, 1]
    find_duplicate(entrada)
