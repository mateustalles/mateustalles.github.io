# Exercício 7
# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe!
# Em um determinado módulo, os estudantes precisam entregar dois trabalhos para
# seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica
# registrado. Precisamos saber como está o andamento da entrega das listas. Para
# isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem
# já entregou qual lista. A partir das listas abaixo, crie quatro funções que
# respondem às perguntas a seguir.


# estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
# lista1_entregues = ['a', 'd', 'g', 'c']
# lista2_entregues = ['c', 'a', 'f']

# Quem ainda não entregou a lista1?
# Quem já entregou as duas listas?
# Quem já entregou qualquer uma das duas listas?
# Quem ainda não entregou nenhuma das listas?


if __name__ == "__main__":
    estudantes = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    lista1_entregues = ['a', 'd', 'g', 'c']
    lista2_entregues = ['c', 'a', 'f']

    conjunto_estudantes = set(estudantes)
    conjunto_lista_1 = set(lista1_entregues)
    conjunto_lista_2 = set(lista2_entregues)
    listas_entregues = conjunto_lista_1.union(conjunto_lista_2)


    # Quem ainda não entregou a lista1?

    nao_entregou_lista_1 = conjunto_estudantes.difference(conjunto_lista_1)
    print(f"""# Quem ainda não entregou a lista1?
    Estudantes: {nao_entregou_lista_1}""")


    # Quem já entregou as duas listas?

    entregou_2_listas = conjunto_estudantes.intersection(
        conjunto_estudantes.intersection(conjunto_lista_1),
        conjunto_estudantes.intersection(conjunto_lista_2)
        )
    print(f"""# Quem já entregou as duas listas?
    Estudantes: {entregou_2_listas}""")


    # Quem já entregou qualquer uma das duas listas?

    entregou_alguma_lista = conjunto_estudantes.intersection(listas_entregues)

    print(f"""# Quem já entregou qualquer uma das duas listas?
    Estudantes: {entregou_alguma_lista}""")


    # Quem ainda não entregou nenhuma das listas?

    nao_entregou_listas = conjunto_estudantes.intersection(
        conjunto_estudantes.difference(conjunto_lista_1),
        conjunto_estudantes.difference(conjunto_lista_2)
        )
    print(f"""# Quem ainda não entregou nenhuma das listas?
    Estudantes: {nao_entregou_listas}""")

