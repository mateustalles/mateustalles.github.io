# Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a
# uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que
# estão abaixo dela, incluindo subordinados de seus subordinados, além dela
# própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1.
# Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.
# Escreva um método que calcule o score de uma determinada pessoa.
# Dica: para saber o score de uma pessoa, você precisa saber o score das pessoas
# da equipe dela, correto? Qual estratégia utiliza a mesma função dentro dela própria?
# Exemplo de subordinados:

# - 1 => 2, 3
# - 2 => 4
# - 3 => sem subordinados
# - 4 => 5, 6
# - 5 => 7
# - 6 => sem subordinados
# - 7 => sem subordinados

# Neste exemplo, o score de cada pessoa é:
# Copiar
# - 1 => 5 (score 2) + 1 (score 3) + 1 (score dele próprio) = 7
# - 2 => 4 (score 4) + 1 (score dele próprio) = 5
# - 3 => 1 (score dele próprio)
# - 4 => 2 (score 5) + 1 (score 6) + 1 (score dele próprio) = 4
# - 5 => 1 (score 7) + 1 (score dele próprio) = 2
# - 6 => 1 (score dele próprio)
# - 7 => 1 (score dele próprio)


def calc_score(employee_id, subordinates_rank, score=1):
    # - 1 => 2, 3
    # - 2 => 4
    # - 3 => sem subordinados
    # - 4 => 5, 6
    # - 5 => 7
    # - 6 => sem subordinados
    # - 7 => sem subordinados
    if score == 1 and subordinates_rank[employee_id] == None:
        return 0

    if employee_id > len(subordinates_rank):
        return score

    if subordinates_rank[employee_id] != None:
        score += len(subordinates_rank[employee_id])
    employee_id += 1

    return calc_score(employee_id, subordinates_rank, score)


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: None,
        4: [5, 6],
        5: [7],
        6: None,
        7: None
    }
    print(calc_score(1, subordinates))
    print(calc_score(2, subordinates))
    print(calc_score(3, subordinates))
    print(calc_score(4, subordinates))
    print(calc_score(5, subordinates))
    print(calc_score(6, subordinates))
    print(calc_score(7, subordinates))


