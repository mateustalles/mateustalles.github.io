from content_deque import Deque
from unidecode import unidecode


if __name__ == "__main__":
    alphabet = "abcdefghijklmnopqrstuvwyxz"
    deque_test = Deque()
    palindrom_cases = [
        "Sera que sou palíndromo?",
        "madam",
        "arara",
        "Zé de Lima, Rua Laura, Mil e Dez",
        "Luza Rocelina, a namorada do Manuel, leu na moda da Romana: "
        + "anil e cor azul.",
        "teste"
        ]

    results = []

    for palindrom_case in palindrom_cases:
        palindrom = palindrom_case.split(" ")
        palindrom = "".join(unidecode(str(x)).lower() for x in palindrom)
        for letter in palindrom:
            if letter.lower() not in alphabet:
                palindrom = palindrom.replace(letter, "")
        palindrom = Deque([*palindrom])
        mid_term = len(palindrom) // 2
        is_palindrom = False

        for i in range(mid_term):
            if palindrom.peek(i) == palindrom.peek(i, "desc"):
                is_palindrom = True
                break
            is_palindrom = False

        results.append(is_palindrom)

    print(results)
