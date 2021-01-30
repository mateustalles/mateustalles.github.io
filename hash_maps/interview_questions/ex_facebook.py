#Você receberá uma lista de palavras e uma string .
# Escreva uma função que decida quais palavras podem ser formadas com os
# caracteres da string (cada caractere só pode ser utilizado uma vez).
# Retorne a soma do comprimento das palavras escolhidas.

#Exemplo 1:
#Copiar
# words = ["cat", "bt", "hat", "tree"], chars = "atach"
# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "cat" (tamanho 3) e "hat" (tamanho 3)."""
#Exemplo 2:
#Copiar
# words = ["hello", "world", "students"], chars = "welldonehoneyr"
# saída: 10
#"""Explicação: As palavras que podem ser formadas com os caracteres da string
               #são "hello" (tamanho 5) e "world" (tamanho 5)."""

def is_anagram_modified(string, chars):
    sorted_string_array = [*string]
    sorted_string_array.sort()
    chars_array = [*chars]

    contains_word = True

    for index in range(len(sorted_string_array)):
        if sorted_string_array[index] in chars_array:
            delete_index = chars_array.index(sorted_string_array[index])
            del chars_array[delete_index]
        else:
            contains_word = False
    return contains_word


if __name__ == "__main__":
    print('words = ["cat", "bt", "hat", "tree"], chars = "atach"')
    words = ["cat", "bt", "hat", "tree"]
    chars = "atach"
    count = 0
    for word in words:
        if is_anagram_modified(word, chars):
            count += len(word)
    print(count)

    print('["hello", "world", "students"], chars = "welldonehoneyr"')
    words = ["hello", "world", "students"]
    chars = "welldonehoneyr"
    count = 0
    for word in words:
        if is_anagram_modified(word, chars):
            count += len(word)
    print(count)
