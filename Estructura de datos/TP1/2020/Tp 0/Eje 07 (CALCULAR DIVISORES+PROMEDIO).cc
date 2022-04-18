/*Determinar cuáles y cuántos son los divisores de un número positivo ingresado por el usuario. 
Calcular el promedio de los divisores.*/
 
#include <iostream>
#include <vector>
 
using namespace std;
 
int main()
{
    int num, i, div = 0;
    float prom;
 
    vector<int>d;
 
    cout << "-------CALCULAR DIVISORES-------\n";
    cout << "Ingrese un numero\n";
    cin >> num;
 
    if (num > 0)
    {
        for (i = 1; i < num; i++)
        {
            if (num % i == 0)
            {
                d.push_back(i);
                div = div + i;
            }
        }
        cout << "La cantidad de divisores son:\n";
        cout << d.size()<<endl;
        cout << "Los divisores son:\n";
        for (int contenido : d)
        {
            cout << contenido<<endl;
        }
        cout << "El promedio de los divisores son:\n";
        prom = (div/d.size());
        cout << prom<<endl;
    }
    else
        cout << "ingresar numeros positivos\n";
}