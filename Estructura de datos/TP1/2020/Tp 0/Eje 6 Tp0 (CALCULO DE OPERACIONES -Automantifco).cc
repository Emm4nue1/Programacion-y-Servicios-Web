/*Dados dos números reales a y b, y el símbolo S (carácter) que representa un operador aritmético (+, -, *, /), 
calcular el resultado de la operación a S b. Si no es posible realizar la operación, 
mostrar el mensaje de error correspondiente. El programa debe continuar hasta que el 
usuario decida detener la ejecución. Modifique el programa escrito de manera que cuente con funciones, procedimientos
o métodos que realicen los solicitado mediante el uso de la consola y otra modalidad que haga exactamente 
 lo mismo, pero reemplazando el ingreso de valores por consola por un generador de valores aleatorio.*/
#include <iostream>
#include <cstdlib>
using namespace std;
float suma(float a, float b)
{
    float resultado;
    resultado = a + b;
    return  resultado;
}

float resta(float a, float b)
{
    float resultado;
    resultado = a - b;
    return  resultado;
}

float multiplicacion(float a, float b)
{
    float resultado;
    resultado = a * b;
    return  resultado;
}

float division(float a, float b)
{
    float resultado;
    resultado = a / b;
    return  resultado;
}

int main()
{
    float a, b, rta;
    char s, opc;
    do
    {
        a = rand()%1000;
        b = rand()%1000;
        cout << "Ingrese operador\n";
        cin >> s;

        if ((s == '-') || (s == '+') || (s == '*') || (s == '/'))
        {
            if (s == '+')
            {
                cout <<"a="<< a << endl;
                cout << "\n";
                cout <<"b="<< b << endl;
                cout << "\n";
                cout << suma(a, b) << endl;
            }

            if (s == '-')
            {
                cout << "a=" << a << endl;
                cout << "\n";
                cout << "b=" << b << endl;
                cout << "\n";

                cout << resta(a, b) << endl;
            }

            if (s == '*')
            {
                cout << "a=" << a << endl;
                cout << "\n";
                cout << "b=" << b << endl;
                cout << "\n";
                cout << multiplicacion(a, b) << endl;
            }

            if (s == '/')

            {
                if (b != 0)
                {
                    cout << "a=" << a << endl;
                    cout << "\n";
                    cout << "b=" << b << endl;
                    cout << "\n";
                    cout << division(a, b) << endl;
                }
                else
                    cout << "Error\n";
            }
        }
        else
            cout << "Operador invalido\n";

        cout << "Seguir S/N\n";
        cin >> opc;

    } while (opc != 'n' && opc != 'N');

}