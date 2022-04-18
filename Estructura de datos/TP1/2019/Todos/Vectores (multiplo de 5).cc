#include <iostream>
#include <vector>
using namespace std;

int main()

{
	int N, i, num;
	cout << "Ingrese el dimencion del vector\n";
	cin >> N;

	int *v= new int[N];


	for ( i = 0; i < N; i++)
	{ 
	cout << "Ingrese numeros multiplos de cinco\n";	
	cin>>num;

	if (num % 5 == 0 && num % 2 != 0)
		{
				v[i]=num;
		}
		else{
			cout << "El numero a ingresar tiene que ser multiplo de 5 y no multiplo de 2\n";
			i--;
			}
	}

	for ( i = 0; i < N; i++)
	{
		cout << ","<<v[i];
	}
}
