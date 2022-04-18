class Pila:
    def __init__(self,size):
        self.lista = []
        self.aux = []
        self.tope = 0
        self.size = size

    def empty (self):
        if self.tope == 0:
            return True
        else:
            return False

    def push (self, dato):
        if self.tope < self.size:
            self.lista.append(dato) #self.list+=[dato] ==>( de otro modo )
            self.tope +=1
        else:
            self.size+=5
            self.lista+=[dato]
            self.top

 def pop(self):
        if self.empty():  # si empty  es True
            print("la pila esta vacia")
        else:
            self.tope -= 1
            self.lista = [self.lista[x] for x in range(self.tope)]# ingresa sobre la lista la nuva lista
 
  def show(self):
        i = self.tope -1
        while i > -1:
            print("[%d]  =>  %d"%(i,self.lista[i]))
            i -= 1

    def size(self):
        return self.tope

    def top(self):
        return self.lista[-1]


    def popMejorado(self,elemen):
          if self.empty():
              print("la pila esta vacia!!")
          else:

              for lista in range(self.tope):
                  if elemen != self.lista[-1]:
                     self.aux.append(self.lista.pop())
                     print(self.lista.pop())
                  else:
                       self.lista.pop()
              for x in range(self.tope):
                  self.lista.append(self.aux.pop())

pilas = Pila(9)

pilas.push(0)
pilas.push(1)
pilas.push(2)
pilas.push(3)
pilas.push(4)
pilas.push(5)

pilas.show()

pilas.popMejorado(4)
print("\neliminados")
pilas.show()