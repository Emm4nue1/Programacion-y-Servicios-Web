#include <iostream>
#include <vector>
using namespace std;

struct libro
{
	char  titulo[50];
	char  autor[50];
	char  editorial[50];
	int   fecha;
	float precio;
};

int main() 
{
	vector <libro> libros;

	char titulo, autor, editorial, eleccion;
	int fecha, i, opcion;
	i = 0;
	
	do
	{
		cout << "1_ CARGAR LIBRO\n";
		cout << "2_ MOSTRAR LIBROS REGISTRADOS\n";
		cout << "3_ SALIR\n";
		cin >> opcion;

		switch (opcion)
		{
		case 1:
			do
			{
				libro li;
				cout << "Ingrese Titulo\n";
				cin >> li.titulo;
				cout << "Ingrese Autor\n";
				cin >> li.autor;
				cout << "Ingrese Editorial\n";
				cin >> li.editorial;
				cout << "Ingrese Año de Publicación\n";
				cin >> li.fecha;
				cout << "Ingrese precio\n";
				cin >> li.precio;
				libros.push_back(li);

				cout << "Desea seguir registrando libros? s/n\n";
				cin >> eleccion;
			} while ((eleccion == 's') || (eleccion == 'S'));
			break;

		case 2:
			for (i = 0; i < libros.size(); i++)
			{
				cout << libros[i].titulo<<endl;
				cout << libros[i].autor <<endl;
				cout << libros[i].editorial<<endl;
				cout << libros[i].fecha<<endl;
				cout << libros[i].precio<<endl;
			}
			
	    break;
		default:
		break;
		}
	} while (opcion != 3);	
}