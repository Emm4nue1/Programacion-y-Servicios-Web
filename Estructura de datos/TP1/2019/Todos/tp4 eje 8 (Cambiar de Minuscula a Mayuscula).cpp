#include <iostream>
#include <list>
#include <ctype.h>


using namespace std;

int main()

{
	char opc,letras,covertir;
	list<char>minus,mayus;
	do
	{
		cout << "----------------------------MINUSCULA A MAYUSCULAS--------------------------------\n";
		cout << "Ingrese letras\n";
		cin >> letras;
		minus.push_back(letras);
		cout << "\n";
		cout << "\n";
		cout << "Seguir? S/N\n";
		cin >> opc;

	} while ((opc!='n')&&(opc!='N'));

	while (!minus.empty())
	{
		covertir = minus.front();
		minus.pop_front();
		
		covertir=toupper(covertir);
		mayus.push_back(covertir);

		while (!mayus.empty())
		{
			cout <<mayus.front()<<" ";
			mayus.pop_front();
		}

	}
	
}