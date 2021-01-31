# Exercício 2 - Substring
# Dada uma string , ache o tamanho da maior substring , que não tenha caracteres
# repetidos. Complexidade de tempo limite aceitável: O(n^2) .
# 
# str = "serdevemuitolegalmasehprecisoestudarbastante"

def find_biggest_substr_with_unique_chars(string):
    dummy_str = ""
    string_len_set = set()
    for char in string:
        if char not in dummy_str:
            dummy_str += char
        else:
            string_len_set.add(len(dummy_str))
            dummy_str = ""
    return max(string_len_set)


if __name__ == "__main__":
    string = "serdevemuitolegalmasehprecisoestudarbastante"
    print(find_biggest_substr_with_unique_chars(string))

