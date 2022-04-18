#include <iostream>
#include <stdlib.h>
using namespace std;


struct nodo
{
	int dato;
	nodo* siguiente;
};

void agregarPila(nodo*&, int);
void sacarPila(nodo*&, int&);


int main()
{   nodo *pila = NULL;
	int num,i,suma=0;

	cout << "-----NUMERO PREFECTO-----\n";
    cout << "Ingrese un numero\n";
	cin >> num;

	for (i = 1; i<num; i++)
	{
		if (num % i == 0)
		{
			suma = suma + i;
			agregarPila(pila, i);
		}
	}

	if (suma == num)

	{
		cout << "el numero es perfecto\n";
		while (pila != NULL)
		{
			sacarPila(pila, i);
			if (pila != NULL);
			cout << i << " - ";
		}
	}

	else
		cout << "el numero no es perfecto\n";

	
}

void agregarPila(nodo*& pila, int n)
{
	nodo* nuevo = new nodo();
	nuevo->dato = n;
	nuevo->siguiente = pila;
	pila = nuevo;
}

void sacarPila(nodo *&pila, int &n)
{
	nodo* aux = pila;
	n = aux->dato;
	pila = aux->siguiente;
	delete aux;
}

