#include <iostream>
#include <stdlib.h>
using namespace std;

int main()
{

int opcion,t_papel,t_imprecion;

switch (opcion)

do
{
cout<<"1- Ingrese un nombre de archivo\n";
cout<<"2- Ingrese tamaño de papel\n";
cout<<"3- Ingrese el numero de copias a imprimir:\n";
cout<<"4- Preferencia de imprecion\n";
cout<<"5- Salir\n";
cout<<"Ingrese una opcion\n";
cin>>opcion;

{
case 1 /* constant-expression */:
    /* code */
    break;

case 2 /* constant-expression */:
    do{
    cout<<"1- A4\n";            
    cout<<"2- OFICIO\n"; 
    cout<<"3- CARTA\n"; 
    cout<<"4- VOLVER\n";
    cin>>t_papel;
    } while (t_papel==4);
    break;

case 3 /* constant-expression */:
    /* code */
    break;

case 4 /* constant-expression */:
    do
    {
    cout<<"1- COLOR\n";            
    cout<<"2- ESCALA DE GRISES\n"; 
    cout<<"3- VOLVER\n";
    cin>>t_imprecion; 
    } while (t_imprecion==3);
    
    break;

default:
    break;
}

} while (opcion==5);

}
