/*Escribir un programa que permita ingresar números a una matriz 4x3, mostrar 
la matriz en la consola y calcular la suma de los elementos de una fila o el producto de 
una columna, a petición del usuario. Agregar los controles necesarios.*/
using System;
using System.Collections;
 
namespace ConsoleApp1
{
    class Program
    {
        static void Menu()
        {
            Console.WriteLine("1.- Cargar");
            Console.WriteLine("2.- Mostrar");
            Console.WriteLine("3.- Sumar fila elegida");
            Console.WriteLine("4.- Multiplicar Columna Elegida");
            Console.WriteLine("5.- Terminar");
            Console.WriteLine(" ");
            Console.WriteLine("Elija una opción");
            Console.WriteLine(" ");          
        }

        static void Main(string[] args)
        {
            int opc;
            int[,] mat = new int[4,3];
            do
            {
                Menu();
                opc = int.Parse(Console.ReadLine());
                if (opc >= 1 && opc <= 5)
                {
                    switch (opc)
                    {
                        case 1:
                            Console.Clear();
                            //CARGAR VALORES
                            for (int f = 0; f < 4; f++)
                                for (int c = 0; c < 3; c++)
                                {
                                    {
                                        Console.WriteLine("Ingrese Valor de la Fila " + (f + 1) + " columna " + (c + 1));
                                        mat[f, c] = int.Parse(Console.ReadLine());
                                    }
                                }
                            break;
                        
                        case 2:
                            Console.Clear();
                            //MOTRAR 
                            for (int f = 0; f < 4; f++)
                            {
                                for (int c = 0; c < 3; c++)
                                {
                                    Console.Write(mat[f, c] + " ");
                                }
                                Console.WriteLine();
                            }
                            break;
                            //SUMA
                        case 3:
                            Console.WriteLine("Ingrese el numero de fila que desea sumar");
                            int num = int.Parse(Console.ReadLine());
                            int suma = 0;
                            if ((num < 5) && (num > 0))
                            {
                                for (int i = 0; i < 3; i++)
                                {
                                    suma = suma + mat[num - 1, i];
                                }
                                Console.WriteLine("La suma de la " + num + "° " + "Fila  es " + suma);
                            }
                            else
                                Console.WriteLine("No existe la fila ingresada");
                            break;
                            //MULTIPLICACION
                        case 4:
                            Console.WriteLine("Ingrese el numero de columna que desea multiplicar");
                            int num1 = int.Parse(Console.ReadLine());
                            int producto = 1;
                            if ((num1 < 4) && (num1 > 0))
                            {
                                for (int i = 0; i < 4; i++)
                                {
                                    producto = producto * mat[i, num1 - 1];
                                }
                                Console.WriteLine("El producto de la " + num1 + "° " + "Columna  es " + prod1);
                            }
                            else
                                Console.WriteLine("No existe la Columna ingresada");
                            break;
                        case 5:
                            Console.WriteLine("El End");
                            break;
                    }
                }
                else
                {
                    Console.Clear();
                    Console.WriteLine("Debe ingresar una opción válida ");
                    Console.WriteLine(" ");
                }
            } while (opc != 5);
        }
    }
}