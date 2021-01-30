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

class SubordinatesRank:
    def __init__(self):
        self._subordinates = {
            1: [[2, 3], []],
            2: [[4], []],
            3: [[], []],
            4: [[5, 6], []],
            5: [[7], []],
            6: [[], []],
            7: [[], []]
        }

    def calc_score(self, id, score=1, iterated_ids=[]):
        iterated_ids.append(id)
        # - 1 => 2, 3
        # - 2 => 4
        # - 3 => sem subordinados
        # - 4 => 5, 6
        # - 5 => 7
        # - 6 => sem subordinados
        # - 7 => sem subordinados

        if id > len(self._subordinates):
            self._subordinates[iterated_ids[0]][1] = score
            return score

        if self._subordinates[id][1]:
            score = self._subordinates[id][1]
            return score

        if score == 1 and not self._subordinates[id][0]:
            self._subordinates[id][1] = 0
            return 0

        if self._subordinates[id][0] != None:
            score += len(self._subordinates[id][0])
            id += 1
            return self.calc_score(id, score, iterated_ids)

if __name__ == "__main__":
    rank = SubordinatesRank()

    rank.calc_score(5)


    print(rank._subordinates)
