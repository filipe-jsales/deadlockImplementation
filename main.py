
'''
    Matriz C é uma matriz de alocação  de recursos. Ou seja, o processo 1 já está de posse de 1 unidade do recurso 2, 1 unidade do recurso 3, 1  unidade do recurso 4 e 2 unidades do recurso 5, assim por diante.
'''
#matriz de alocação atual
from numpy import mat


c = [[0, 1, 1, 1, 2],
     [0, 1, 0, 1, 0],
     [0, 0, 0, 0, 1],
     [2, 1, 0, 0, 0]]

'''
    Matriz R matriz recursos (resources). Ou seja, ele precisa de 1 unidade do primeiro recurso, 1 unidade do segundo recurso, 2 unidades do quarto e 1 do quinto, assim por diante.
'''
#matriz de solicitações
r = [[1, 1, 0, 2, 1],
     [0, 1, 0, 2, 1],
     [0, 2, 0, 3, 1],
     [0, 2, 1, 1, 0]]

'''
    vetor E = quantidade máxima que esse sistema tem de recursos do tipo 1, 2, 3, 4, 5. Ou seja, recurso 1 tenho 2  unidades, recurso 2 tenho 4 unidades, recurso 3 uma unidade,  recurso 4 quatro unidades e recurso 5 quatro unidades, assim por diante.
'''
#numero de recursos de cada tipo em existência
e = [2, 4, 1, 4, 4]

'''
    vetor A = vetor available. Quantidade de recursos DISPONÍVEIS de cada tipo. Ou seja, para o primeiro estão disponíveis zero recursos, para o segundo estão disponíveis 1 recurso, para o terceiro nenhum, para o quarto estão disponíveis 2 recursos e para o quinto apenas 1, assim por diante. Esse valor é atualizado à medida que os processo forem deixando de utilizar os recursos.
'''

#quantidade de cada tipo de recurso
a = [0, 1, 0, 2, 1]

impasse = False


#iterate over c (resource allocation) matrix
for i in range(0, len(c)):
    for j in range(0, len(c)+1):
        print("Linha {} O processo {} está de posse de {} recurso(s)".format(i+1, j,  c[i][j]))

#iterate over r (resources) matrix
for i in range(0, len(r)):
    for j in range(0, len(r)+1):
        print("O processo {} necessita de {} unidade(s) do recurso {}".format(j+1, r[i][j], j+1))

#iterate over e(max_actual) vector
for i in range(0, len(e)):
    print("A quantidade máxima de recursos para o processo {} é de {}".format(i+1, e[i]))

#iterate over available resources
for i in range(0, len(a)):
    print("A quantidade de recursos disponíveisdo tipo {} é de {}".format(i+1, a[i]))


#while(True):
for i in range(0, len(c)):
    for j in range(0, len(c)+1):
        if(e[j] >= c[i][j] and a[j] - r[i][j] >=0):
            print('e[j] = ', e[j])
            print('a[j] = ', a[j])
            #caso a quantidade de recurso seja menor que a maxima permitida e
            #eu solicite a quantidade de recurso disponivel dentro do range
            print("c[i][j]: ", c[i][j])
            print("r[i][j]: ", r[i][j])
            c[i][j] += r[i][j]
            print("[NOVO]Linha {} O processo {} está de posse de {} recurso(s)".format(i+1, j+1,  c[i][j]))
        else:
            print("[ESTADO BLOQUEADO]Linha {} O Processo {} está de posse de {} recurso(s), solicita {} Recurso(s). Recursos disponíveis: {} ".format(i+1, j+1,  c[i][j], r[i][j], a[j]))







#with open("sample-input.txt") as file:
#    matriz_alocacao = file.readlines()[0].rstrip()
#    matriz_alocacao.split()
#print(matriz_alocacao[0])







#f = open("matriz_alocacao.txt")
#print(f.read())





#while (impasse == False):
    #print('Impasse por impasse True')
    #impasse = True
    #todo code goes here