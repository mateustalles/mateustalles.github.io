# Exercício 1 - Blefe
# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a
#  outra irá escolher. Cada jogador escolhe 5 números de 0 a 10, inclusive. 
# A pontuação final é calculada da seguinte forma:

# A nota de partida de cada pessoa é o maior numero que a outra pessoa não escolheu
# O redutor é o menor numero que a outra pessoa não escolheu
# A pontuação final é a nota de partida - redutor

# Exemplo:
# 
# clara = [0, 1, 5, 9, 10]
# # nota de partida: 5
# # redutor: 1
# # pt: 4

# marco = [0, 2, 8, 9, 10]
# # nota de partida: 8
# # redutor: 2
# # pt individual: 6

# # Quem ganhou: Marco

# Implemente uma função que receba um dicionário com os nomes e números chutados
# e retorne o nome de quem ganhou
# 
# entrada = {
#     'Clara': [0, 1, 5, 9, 10],
#     'Marco': [0, 2, 8, 9, 10]
# }

# # saída: 'Marco'

def bluff_game(setting):
    dict_keys = [*setting.keys()]
    player_1 = dict_keys[0]
    player_2 = dict_keys[1]

    hand_p1 = set(setting[player_1])
    hand_p2 = set(setting[player_2])

    diff_hand_p1_p2 = hand_p1.difference(hand_p2)
    play_note_p1 = max(diff_hand_p1_p2)
    reductor_p1 = min(diff_hand_p1_p2)

    diff_hand_p2_p1 = hand_p2.difference(hand_p1)
    play_note_p2 = max(diff_hand_p2_p1)
    reductor_p2 = min(diff_hand_p2_p1)

    score_p1 = play_note_p1 - reductor_p1
    score_p2 = play_note_p2 - reductor_p2

    print(f"""
{player_1}: {score_p1} X {player_2}: {score_p2}
    """)

    if score_p1 > score_p2:
        print(f"O ganhador é: {player_1}")
    elif score_p2 > score_p1:
        print(f"O ganhador é: {player_2}")
    else:
        print('Empate!')


if __name__ == "__main__":
    entrada = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 7, 9, 10]
    }

    bluff_game(entrada)
