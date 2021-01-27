"""Número passado por parâmetro à função: 4

Execução: 4 + 3 + 2 + 1

Resultado: 10"""

def sum_recursively(num):
    if num == 1: return 1
    else: return num + sum_recursively(num - 1)

print(sum_recursively(4))
