#include <iostream>
#include <queue>
using namespace std;

int main()
{
	queue<int> cola, cola2;
	int num,mul,numeros;
	char opc;
	do
	{
		cout << "Ingrese numeros aleatorios\n";
		cin >> num;
		cola.push(num);
		cout << "Desea ingresar mas numeros?s/n\n";
		cin >> opc;
	} while (opc !='n');
 
	cout << "Ingresar numero para buscar sus multiplos\n";
	cin >> mul;


	
	while (!cola.empty())
	{		
		numeros=cola.front();
		cola.pop();

		if (numeros % mul != 0)
		{
			cola2.push(numeros);
		}
		
	   
	   while (!cola2.empty())
	   {
		 cout<< cola2.front()<<" ";
		 cola2.pop();

	   }
	}	
	}