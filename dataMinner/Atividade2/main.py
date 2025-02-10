import math

def Main():
    Q3()


def Q1():
    conta = float(input("digite o valor da conta:"))
    print(conta * 1.2)

def Q2():
    conta = float(input("Digite o valor da conta: ")) 
    N_pessoas = int(input("Qual o numero de pessoas na mesa?"))
    print(f"O valor da conta deu {conta /(N_pessoas - 1)}")

def Q3():
    preco = []

    for i in range(5):
        valor = float(input("Digite o valor do produto: "))
        preco.append(valor)
    media = (sum(preco) / 5)
    print(f"Sua média é {media}")

def Q4():
    distancia = float(input("Digite sua distancia: "))
    tempo = int(input("Digite o tempo que foi percorrido: "))

    velocidade = distancia / tempo
    print(f"Sua velociadde é {velocidade}")

def Q5():
    cobertura_por_litro = 6
    litro_por_lata = 18
    litro_por_galao = 3.6
    preco_lata = 80.0
    preco_galao = 25.0

    area = float(input("informe o tamanho em m² da area a ser pintada: "))
    litro_por_area = math.ceil((area / cobertura_por_litro)  * 1.1)  # 10% de folga

    latas = math.ceil(litro_por_area / litro_por_lata)
    custo_latas = latas * preco_lata

    galoes = math.ceil(litro_por_area / litro_por_galao)
    custo_galoes = galoes * preco_galao
    
    latas_mistura = litro_por_area // litro_por_lata
    restante = litro_por_area % litro_por_lata
    galoes_mistura = math.ceil(restante / litro_por_galao)
    custo_mistura = (latas_mistura * preco_lata) + (galoes_mistura * preco_galao)
    

    print(f"\nOpção 1 - Apenas latas de 18L: {latas} latas, Custo: R$ {custo_latas:.2f}")
    print(f"Opção 2 - Apenas galões de 3.6L: {galoes} galões, Custo: R$ {custo_galoes:.2f}")
    print(f"Opção 3 - Misturar latas e galões: {latas_mistura} latas e {galoes_mistura} galões, Custo: R$ {custo_mistura:.2f}")

def Q6():
    valor = float(input("informe o valor da compra: "))
    if( valor < 0):
        valor_final = 0
    elif( valor < 50):
        valor_final = valor * 1.05
    elif(valor < 100):
        valor_final = valor * 1.10
    elif(valor < 200):
        valor_final = valor * 1.20
    elif(valor < 500):
        valor_final = valor * 1.25
    else:
        valor_final = valor * 1.30
    print(f"Sua compra com desconto ficou de {valor_final}")

def Q7():
    precos = []
    for i in range(5):
        valor = float(input(f"Informe o {i+1}º preço: "))
        precos.append(valor)
    
    media = sum(precos) / len(precos)
    acima_da_media = [p for p in precos if p > media]
    
    print(f"A Média dos preços: R$ {media:.2f}")
    print("Valores acima da média:", acima_da_media if acima_da_media else "Nenhum")

def Q8():
    dado1 = int(input("informe o numero do jogador 1: "))
    dado2 = int(input("informe o numero do jogador 2: "))

    if (dado1 == dado2):
        print("Nenhum dos jogadores jogam!")
    elif (dado1 > dado2):
        print("O jogador 1 pode jogar!")
    else:
        print("O jogador 2 pode jogar!")

def Q9():
    cartas = {
        1: "Ás",
        2: "Dois",
        3: "Três",
        4: "Quatro",
        5: "Cinco",
        6: "Seis",
        7: "Sete",
        8: "Oito",
        9: "Nove",
        10: "Dez",
        11: "Valete",
        12: "Rainha",
        13: "Rei"
    }
    numero = int(input("Informe um número de 1 a 13 para saber a carta correspondente: "))

    if 1 <= numero <= 13:
        print(f"A carta correspondente é: {cartas[numero]}")
    else:
        print("Número inválido! Informe um número entre 1 e 13.")

def Q10():
    letra = input("Digite sua legra pra saber se é vogal ou consoante: ")
    if (letra == "a" or letra == "e" or letra == "i" or letra == "o" or letra == "u"):
        print("A letra é uma vogal!")
    else:
        print("A letra é uma consoante")


Main()


