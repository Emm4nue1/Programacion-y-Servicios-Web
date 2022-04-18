/*Determinar si un número es perfecto.
Definición: Un número es perfecto cuando la suma de sus divisores excepto el mismo número 
es igual al número en cuestión.
Ejemplo: El número 6 (seis) es perfecto porque sus divisores son: 1, 2 y 3, la suma de estos valores 
resulta ser igual al mismo número.*/
 
#include <iostream>
using namespace std;
 
int main()
{
    int num,i;
    char resp='s';
   
    do
    {
        cout <<"\n";
        cout << "-----NUMERO PREFECTO-----\n";
        cout << "Ingrese un valor\n";
        int div = 0;
        cin >> num;
 
        for (i = 1; i < num; i++)
        {
            if (num % i == 0)
 
                div = div + i;
 
        }
        if (div == num)
        {
            cout << "El numero es PERFECTO\n";
            cout << "\n";
            cout <<"**********************************************************\n";
            cout << "Desea ingrasar otro numero?\n";
            cin >> resp;
        }
        else
            cout << "El numero NO ES PERFECTO\n";
     } while (resp=='s' || resp=='S') ;
}