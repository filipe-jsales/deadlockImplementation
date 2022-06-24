import numpy as np
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

def show_current_resources():
    for i in range(0, len(c)):
        print('O processo {} está de posse dos recursos {}'.format(i+1, c[i]))
    print('')

def show_resources_needed():
    for i in range(0, len(r)):
        print('O processo {} solicita os recursos {}'.format(i+1, r[i]))
    print('')

def check_deadlock():
    array_aux = []
    array_bool = [False, False, False, False, False]
    #while(True):
    cont_proc =1
    show_current_resources()
    show_resources_needed()

    for i in range(0, len(r)):
        array_aux = r[i].copy() #criando uma cópia da lista

        for j in range(0, len(r)+1):
            #if(e[j] >= c[i][j] and a[j] - r[i][j] >=0):
            #array_aux.append(r[i][j]+a[j])
            print('a[i]', a[j])
            print('array aux[i] ', array_aux[j])
            if(len(array_aux) == (len(r)+1)): #checar se os vetores têm o mesmo tamanho
                if(a[j] >= array_aux[j]):#recursos disponíveis > recursos solicitados
                    print("Entrou true")
                    print('a[i]', a[j])
                    print('array aux[i] ', array_aux[j])
                    array_aux[j] = r[i][j]+a[j]
                    print('NOVO VALOR ARRAY AUX', array_aux)
                    array_bool[j] = True
                    if (all(array_aux)):#todos processos em posse dos recursos solicitados
                        del array_bool[:]
                        array_bool = array_aux.copy()
                        print('NÃO HOUVE IMPASSE NÃO HOUVE IMPASSE NÃO HOUVE IMPASSE NÃO HOUVE IMPASSE NÃO HOUVE IMPASSE NÃO HOUVE IMPASSE ')
                else: #recursos disponiveis < recursos solicitados
                    print('Entrou false')
                    array_bool[j] = False
                print(array_aux)
                print(array_bool)
        del array_aux[:]

            #else: #solicitando mais que o disponivel
                #j+=1

            #print(r[j])

print(check_deadlock())

print(np.array([a]) >= np.array([r[0]]))

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