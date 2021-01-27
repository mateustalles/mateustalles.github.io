"""
Em softwares científicos, existe uam função bastante útil chamada reshape
que é capaz de remodelar a matriz em uma nova com tamanho diferente,
porém mantendo os dados originais.
Se algum erro ocorrer na remodelagem, a matriz original deverá ser
retornada.
"""


def matrix_reshape(matrix, rows, columns):
    is_impossible_reshape = (
        not matrix or
        rows * columns != len(matrix) * len(matrix[0])
    )

    if is_impossible_reshape:
        return matrix
    
    new_matrix = [[]]
    row_index = 0
    col_index = 0
    for row in matrix:
        for column in row:
            if col_index >= columns: # aqui é checado se o index estourou, pois columns = numero de colunas
                                    #  e se o index for igual ao numero de colunas, significa que está 1 a mais
                                    #   do que o limite do numero de colunas esperado"""
                new_matrix.append([]) # nova linha
                row_index += 1 # sobre o index pois começaremos na segunda linha na proxima iteração
                col_index = 0 # zera o índice da coluna pois ele deve iterar desde o início novamente na nova linha
            new_matrix[row_index].append(column)
            col_index += 1
    return new_matrix

teste = [[1, 2, 3], [4, 5, 6]]

print(matrix_reshape(teste, 3, 2))
                                    
