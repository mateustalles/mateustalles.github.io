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
        self.personnel = [1, 2, 3, 4, 5, 6, 7]
        self._subordinates_rank = {
            1: [[2, 3], []],
            2: [[4], []],
            3: [[], []],
            4: [[5, 6], []],
            5: [[7], []],
            6: [[], []],
            7: [[], []]
        }
        self._max_per_team = 3
        self.last_iterated_id = 0


    def calc_score(self, id, score=1,):
        if id > len(self._subordinates_rank):
            self._subordinates_rank[self.last_iterated_id][1] = score
            return score

        self.last_iterated_id = id
        # - 1 => 2, 3
        # - 2 => 4
        # - 3 => sem subordinados
        # - 4 => 5, 6
        # - 5 => 7
        # - 6 => sem subordinados
        # - 7 => sem subordinados

        if self._subordinates_rank[id][1]:
            score = self._subordinates_rank[id][1]
            return score

        if score == 1 and not self._subordinates_rank[id][0]:
            self._subordinates_rank[id][1] = 1
            return 1

        if self._subordinates_rank[id][0] != None:
            score += len(self._subordinates_rank[id][0])
            id += 1
            return self.calc_score(id, score)


    def add_subordinate(self, id, team):
        if id in self.personnel:
            raise ValueError("ID já existe")
        else:
            self.personnel.append(id)

        while len(self._subordinates_rank[team][0]) >= self._max_per_team:
            team += 1

        self._subordinates_rank[team][0].append(id)

        for worker_id in self.personnel: 
            self.calc_score(worker_id)

        print(f'Adicionado ID {id} no time {team} (time pode haver mudado devido limitações na capacidade')


if __name__ == "__main__":
    rank = SubordinatesRank()

    print(rank._subordinates_rank)

    rank.calc_score(5)

    rank.calc_score(1)

    rank.calc_score(7)

    print(rank._subordinates_rank)

    print(f'Funcionários: {rank.personnel}')


    rank.add_subordinate(15, 3)

    print(rank._subordinates_rank)
    
    rank.add_subordinate(8, 3)

    print(rank._subordinates_rank)

    rank.add_subordinate(9, 3)

    print(rank._subordinates_rank)

    rank.add_subordinate(10, 3)

    print(rank._subordinates_rank)

    rank.add_subordinate(19, 3)

    print(rank._subordinates_rank)

    rank.add_subordinate(20, 3)

    print(rank._subordinates_rank)
    
    rank.add_subordinate(26, 3)

    print(rank._subordinates_rank)

    print(f'Funcionários: {rank.personnel}')
