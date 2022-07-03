class DeadLockDetection:
 
    def main(self, processes, resources, max_resources, currently_allocated, max_need) :
        self.processes = processes
        self.resources= resources
        self.max_resources = max_resources
        self.currently_allocated = currently_allocated
        self.max_need = max_need    

        allocated = [0] * resources
        for i in range(processes): #adding allocated resources
            for j in range(resources):
                allocated[j] += currently_allocated[i][j]

        available = [max_resources[i] - allocated[i] for i in range(resources)]
      
        running = [True] * processes
        count = processes
        while count != 0:
            safe = False
            for i in range(processes):
                if running[i]:
                    executing = True
                    for j in range(resources): #if available resources is lesser than currently, break
                        if max_need[i][j] - currently_allocated[i][j] > available[j]:
                            executing = False
                            break
                    if executing:
                        running[i] = False
                        count -= 1
                        safe = True
                        for j in range(resources):
                            available[j] += currently_allocated[i][j]
                        break
            if not safe:
                print(f"deadlock detected")
                break 
        #else:
        print("No deadlock detected")
            #print("No deadlock detected")

if __name__ == '__main__':
    d1 = DeadLockDetection()
    d2 = DeadLockDetection()
    d3 = DeadLockDetection()
    d4 = DeadLockDetection()    
#inputs to algorithm
    print('Entrada 1: ')
    d1.main(6, 5, [3,5,2,4,4],
                  [[0, 1, 1, 1, 2],     
                   [0, 1, 0, 1, 0], 
                   [0, 0, 0, 0, 1], 
                   [2, 1, 0, 0, 0],
                   [0, 0, 1, 0, 0],
                   [1, 1, 0, 0, 0]], 
                  [[0, 0, 0, 3, 3], 
                   [0, 2, 0, 3, 1], 
                   [0, 2, 0, 3, 2], 
                   [2, 3, 1, 1, 0], 
                   [2, 1, 1, 0, 0],
                   [2, 1, 0, 0, 0]])

    print('Entrada 2: ')
    d2.main(6,5,[0,0,4,5,5], 
                [[0 , 0 , 2 , 0 , 0],
                [0 , 0 , 0 , 0 , 4],
                [0 , 0 , 0 , 0 , 0],
                [0 , 0 , 0 , 0 , 0],
                [0 , 0 , 0 , 0 , 0],
                [2 , 0 , 0 , 0 , 0]],
                [[2 , 1 , 0 , 0 , 0],
                [0 , 0 , 0 , 0 , 5],
                [0 , 1 , 0 , 1 , 0],
                [0 , 0 , 0 , 1 , 0],
                [0 , 0 , 0 , 1 , 0],
                [2 , 0 , 2 , 0 , 0]])

    print('Entrada 3: ')
    d3.main(6,5,[0,0,4,5,5], 
                [[0 , 0 , 0 , 0 , 1],
                [0 , 0 , 0 , 1 , 0],
                [0 , 0 , 0 , 1 , 1],
                [0 , 0 , 1 , 0 , 0],
                [0 , 0 , 1 , 0 , 1],
                [0 , 0 , 1 , 1 , 1]],
                [[0 , 0 , 0 , 3 , 3],
                [0 , 0 , 0 , 3 , 1],
                [0 , 0 , 0 , 3 , 2],
                [0 , 0 , 1 , 1 , 0],
                [0 , 0 , 0 , 0 , 1],
                [0 , 0 , 1 , 1 , 0]])
 
    print('Entrada 4: ')
    d4.main(6,5,[4,3,4,0,5], 
                [[1 , 0 , 2 , 0 , 0],
                [0 , 0 , 0 , 0 , 2],
                [0 , 1 , 1 , 0 , 1],
                [0 , 2 , 0 , 0 , 0],
                [2 , 0 , 0 , 0 , 2],
                [0 , 0 , 1 , 0 , 0]],
                [[1 , 0 , 0 , 0 , 0],
                [0 , 2 , 0 , 0 , 0],
                [1 , 0 , 0 , 0 , 1],
                [0 , 0 , 0 , 0 , 2],
                [2 , 0 , 0 , 0 , 0],
                [0 , 0 , 0 , 1 , 0]])
