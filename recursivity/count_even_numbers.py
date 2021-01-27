# Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares
# existem em uma sequência numérica (1 a n).

def count_even_numbers(n):
    count = 0
    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1
    return count

# print(count_even_numbers(6))

# Exercício 2: Transforme o algoritmo criado acima em recursivo.

def count_even_numbers_recursively(n, count = 0):
    if n == 1: return count

    elif n % 2 == 0:
        count += 1
        return count_even_numbers_recursively(n - 1, count)

    else: return count_even_numbers_recursively(n - 1, count)


print(count_even_numbers_recursively(6))
