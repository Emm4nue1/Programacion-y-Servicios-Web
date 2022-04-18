#include <iostream>
#include <stack>
#include <string>

using namespace std;

int main()
{
	int num;
	string operacion;
	stack<char>numeros,operandos;

	do
	{
		cout << "Ingrese numeros del 1 al 9 o [ - , + , * , / ]\n";
		cin >> num;

		if ((num == '-') || (num == '/') || (num == '+') || (num == '-'))
		{
			operandos.push(num);
		}
		else
		{
			operacion == to_string(num);
			numeros.push(num);
		}
		
	} while ((num<10)&&(num>0));

	cout << operacion;
	
}
