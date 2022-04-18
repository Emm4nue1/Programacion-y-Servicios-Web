#include <iostream>
#include <conio.h>
using namespace std;


struct Nodo
{
	int dato;
	Nodo *siguiete;
};

void insertarLista(Nodo *&,int);

int main()
{
	int dato;
	Nodo *lista = NULL;
    cout << "Digite un dato\n";
	cin >> dato;
	insertarLista(lista,dato);
}


void insertarLista(Nodo *&lista, int n)
{
	Nodo *nuevo = new Nodo();
	nuevo->dato = n;
	Nodo *aux1 = lista;
	Nodo* aux2;

	while ((aux1 != NULL) && (aux1->dato<n))
	{
		aux2 = aux1;
		aux1 = aux1->siguiete;
	}

	if (lista == aux1)
	{
		lista = nuevo;
	}
	else
	{
		aux2->siguiete = nuevo;
	}

	nuevo->siguiete = aux1;
}