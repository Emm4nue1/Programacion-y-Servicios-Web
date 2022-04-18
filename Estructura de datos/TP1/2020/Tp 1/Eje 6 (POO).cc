/*-Escribir un programa que permita ingresar la información de muchos libros de acuerdo a la implementación del caso ejemplo; 
luego el usuario podrá indicar un rango de precios en particular y el programa deberá mostrar los libros cuyos precios se encuentren 
dentro del rango especificado.

  -Modificar la implementación del tipo Libro de los ejercicios anteriores de manera que cada libro pueda tener más de un autor. */
#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Libro
{
private:
    string titulo, editorial;
    vector <string> autores;
    int   fecha;
    float precio;


public:
    Libro(string, vector <string>, string, int, float);
    string getTitulo();
    string getEditorial();
    void getAutores();
    int    getFecha();
    float  getPrecio();

};

Libro::Libro(string titulo, vector <string> autor, string editorial, int fecha, float precio)
{
    this->titulo = titulo;
    this->editorial = editorial;
    this->autores = autor;
    this->fecha = fecha;
    this->precio = precio;
}

string Libro::getTitulo() 
{
    return this->titulo;
}

string Libro::getEditorial() 
{
    return this->editorial;
}

void Libro::getAutores()
{
    int i;
    for ( i = 0; i < autores.size() ; i++)
    {
        cout << autores[i]<<" - ";
    }
    cout<<endl;
}

int Libro::getFecha() 
{
    return this->fecha;
}

float Libro::getPrecio() 
{
    return this->precio;
}


int main()
{
    string titulo, autor, editorial;
    int fecha, opcion,cont=0;
    
    float precio,rango1, rango2;
    char eleccion;

    vector <Libro> Bibloteca;
    vector <string> autores;

    do
    {
        cout << "1.- CARGAR LIBRO\n";
        cout << "2.- MOSTRAR LIBROS REGISTRADOS\n";
        cout << "3.- BUSCAR POR RANGO DE PRECIO\n";
        cout << "4.- SALIR\n";
        cin >> opcion;
        system ("cls");
        switch (opcion)
        {
        case 1:
            do
            {
                cout << "Ingrese Titulo\n";
                cin >> titulo;
                do
                {
                    cout << "Ingrese Autor\n";
                    cin >> autor;
                    autores.push_back(autor);
                    cout << "\n";
                    cout << "Desea seguir registrando autores? S/N\n";
                    cin >> eleccion;

                } while ((eleccion == 's') || (eleccion == 'S'));
      
                cout << "\n";
                cout << "Ingrese Editorial\n";
                cin >> editorial;
                cout <<"Ingrese A"<<char(164)<<"o de Publicaci"<<char(162)<<"n"<<endl;
                cin >> fecha;
                cout << "Ingrese precio\n";
                cin >> precio;

                Libro libro = Libro(titulo, autores, editorial, fecha, precio);
                Bibloteca.push_back(libro);
                cont=0;

                cout << "Desea seguir registrando libros? S/N\n";
                cin >> eleccion;
                system("cls");
            } while ((eleccion == 's') || (eleccion == 'S'));
            system("cls");
            break;

        case 2:
            
            for (Libro x : Bibloteca) 
            {
                cont++;
                cout << "----------------------LIBRO"<<" "<< cont << "-------------------" << endl;
                cout << x.getTitulo() <<endl;
                cout << x.getEditorial() << endl;
             
                x.getAutores();

                cout << x.getFecha() << endl;
                cout << x.getPrecio() << endl;
            }
            break;

        case 3:
            cout << "Ingresar el rango de precio MINIMO\n";
            cin >> rango1;
            cout << "Ingresar el rango de precio MAXIMO\n";
            cin >> rango2;
            
            if (rango1 > 0 && rango2>0 && rango2 > rango1)

            {
                cout << Bibloteca[0].getPrecio()<<endl;
                for (int i = 0; i < Bibloteca.size(); i++)
                {
                    if (Bibloteca[i].getPrecio()>=rango1 && Bibloteca[i].getPrecio()<=rango2)
                    {
                        cout << "----------------------LIBRO---------------------"<< endl;
                        cout << Bibloteca[i].getTitulo() << endl;
                        cout << Bibloteca[i].getEditorial() << endl;

                        Bibloteca[i].getAutores();

                        cout << Bibloteca[i].getFecha() << endl;
                        cout << Bibloteca[i].getPrecio() << endl;
                    }
                    else
                    {
                        cout << "No existe ningun libro con el rango " << rango1 << " y " << rango2 << " de precio" << endl;
                    }
                }
            }
            else
                cout << "Rango incorrecto\n";
            break;

            default:
            break;
        }
    } while (opcion != 4);
}