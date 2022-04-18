/*Escribir un programa que permita ingresar por la consola o teclado dos arreglos de enteros con la misma dimensión.
En uno de los arreglos se deben ingresar solamente divisores de 1000 y en el otro arreglo se deben
 ingresar solamente
números primos; el programa debe mostrar el resultado de la suma de los mismos en un tercer 
vector, la media de cada arreglo
y los valores del vector suma que resultan menores a la media del primer vector y los valores que resultan mayores
 a los de la media del segundo vector.*/
 
#include <iostream>
#include <vector>
using namespace std;
 
bool primo(int num1)
{
    int i,cont=0;
 
 
    for (i = 1; i <= num1; i++)
    {
        if (num1 % i == 0)
        cont++;
    }
 
    if (cont == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
 
}
 
int main()
{
    int N, num, i;
   
    float total=0,media = 0, media1 = 0;
 
    int num1, total1 = 0;
 
    vector <int> suma;
 
    do
    {
        cout << "Ingrese la dimencion valida\n";
        cin >> N;
    } while (N <= 0);
 
    int* divisores = new int[N];
    int* primos    = new int[N];
 
// DIVISORES DE 1000    
 
    cout << "\n";
    cout << "------------------------------------------------------\n";
 
    for ( i = 0; i < N; i++)
    {
        cout << "Ingrese valores\n";
        cin >> num;
       
        if (1000 % num == 0)
        {
            total = total + num;
            divisores[i] = num;
        }
       
        else
        {
            cout << "------No es divisor-------\n";
            i--;
        }
    }
    media = total / N;
    cout << "\n";
    cout <<"El promedio del vector de DIVISORES es:"<<" "<<media << endl;
    cout << "\n";
    cout << "------------------------------------------------------\n";
 
// NUMEROS PRIMOS
   
    for (i = 0; i < N; i++)
    {
          cout << "Ingresar numero primos\n";
          cin >> num1;
 
          if (primo (num1))
          {
              total1 = total1 + num1;
              primos[i] = num1;
          }
          else
          {
              cout << "No es primo\n";
              i--;
          }
    }
    media1 = total1 / N;
    cout << "\n";
    cout << "El promedio del vector de PRIMOS es:" << " " << media1 << endl;
    cout << "\n";
    cout << "------------------------------------------------------\n";
 
 
      for (i = 0; i < N; i++)
      {
          suma.push_back(primos[i]+divisores[i]);
      }
 
      cout<<"Valores menores a la media\n";
 
      for (auto  e : suma)
      {
          if (e < media)
          cout <<" "<<e;
      }
     
      cout << "\n";
      cout << "------------------------------------------------------\n";
      cout << "Valores mayores a la media\n";
     
      for (auto e: suma)
      {
          if (e > media1)
          cout <<" "<<e;
      }
}