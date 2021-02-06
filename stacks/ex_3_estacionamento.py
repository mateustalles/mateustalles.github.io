class Estacionamento():
    def __init__(self, *args):
        self.vagas = list(args)
        self.rua = list()

    def vagas_ocupadas(self):
        return len(self.vagas)

    def estacionar_carro(self, carro):
        self.vagas.append(carro)
    
    def retirar_carro(self, carro):
        print(f"Estado atual: {self.vagas}")
        print(f"Carro escolhido: {carro}")

        if self.vagas_ocupadas() == 1:
            print("Só tem 1")
            return self.vagas.pop()

        index_carro = self.vagas.index(carro)
        
        for i in range(self.vagas_ocupadas() - 1, index_carro, -1):
            carro_retirado = self.vagas.pop(i)
            print(f"Colocando {carro_retirado} na rua", end=" / ")
            self.rua.insert(0, carro_retirado)
            print(f"Rua: {self.rua}")

        carro_escolhido = self.vagas.pop()
        self.vagas.extend(self.rua)
        self.rua.clear()
        print(f"Nova configuração das vagas: {self.vagas}")
        print(f"{carro_escolhido} foi retirado(a)! \n")
        return carro_escolhido


if __name__ == "__main__":
    estacionamento = Estacionamento("Golf", "Fusca", "Uno", "Charrete")
    estacionamento.retirar_carro("Golf")
    estacionamento.retirar_carro("Uno")
    estacionamento.retirar_carro("Charrete")
    estacionamento.retirar_carro("Fusca")


