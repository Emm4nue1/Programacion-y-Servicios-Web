#include <iostream>
#include <stdlib.h>
using namespace std;


struct nodo
{
	int dato;
	nodo* siguiente;
};

void insertar(nodo *&, nodo *&, int);
bool cola_vacia(nodo*);


int main()
{
	int numero;
	nodo* frente = NULL;
	nodo* fin = NULL;

    cout << "ingrese numeros\n";
}



void insertar(nodo *& frente, nodo *& fin, int n)

{
	nodo* nuevo = new nodo();
	nuevo->dato = n;
	nuevo->siguiente = NULL; 
	
	if (cola_vacia(frente))
	{
		frente = nuevo;
	}
	else
	{
		fin->siguiente = nuevo;
	}

	fin = nuevo;
}

bool cola_vacia(nodo* frente) 
{
	if (frente == NULL)
	{
		return true;
	}
	else
	{
		return false;
	}
}