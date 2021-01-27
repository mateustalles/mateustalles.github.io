#Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def find_biggest_int(numberlist, index = 0, value = 0):
    if not numberlist:
        raise ValueError("List cannot be empty")

    for item in numberlist:
        if not isinstance(item, int):
            raise ValueError("Only int items are allowed")

    if index == len(numberlist): return value

    elif numberlist[index] >= value:
        value = numberlist[index]
        index += 1
        return find_biggest_int(numberlist, index, value)

    else:
        index += 1
        return find_biggest_int(numberlist, index, value)

print(find_biggest_int([1, 5, 9, 10]))
print(find_biggest_int([22, 5, 9, 10]))
print(find_biggest_int([22, 5, 9, 10, 100]))
print(find_biggest_int([]))
print(find_biggest_int([22, 5, 9.2, 10, 100]))
print(find_biggest_int([22, 5, 9, 'a', 100]))



