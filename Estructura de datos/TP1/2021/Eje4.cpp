#include<iostream>
#include<cmath>
using namespace std;

int main() {
	int acum1 = 1, acum2 = 1, i = 1, j = 1, num, dig1 = 0, dig2 = 0, dig3 = 0, dig4 = 0, total1 = 1, total2 = 1;

	cout << "Ingrese un numero " << endl;
	cin >> num;
	if (num > 9 && num < 100)
	{
		while (num > i) {
			acum1 = acum1 + 2;
			total1 = total1 + acum1;
			i = i + 1;
		}
		dig1 = num % 10;
		num = int(num / 10);
		num = dig1 * 10 + num;
		while (num > j) {
			acum2 = acum2 + 2;
			total2 = total2 + acum2;
			j = j + 1;
		}
		if (total2 < 1000) 
		{
			dig1 = total2 % 10;
			total2 = int(total2 / 10);
			dig2 = total2 % 10;
			total2 = int(total2 / 10);
			dig3 = total2 % 10;
			total2 = dig1 * 100 + dig2 * 10 + dig3;
		}
		else 
		{
			dig1 = total2 % 10;
			total2 = int(total2 / 10);
			dig2 = total2 % 10;
			total2 = int(total2 / 10);
			dig3 = total2 % 10;
			total2 = int(total2 / 10);
			dig4 = total2 % 10;
			total2 = dig1 * 1000 + dig2 * 100 + dig3 * 10 + dig4;
		}
		if ((total1 == total2)) 
			cout << "Son espejos" << endl;
		else
			cout << "No son espejos" << endl;
	}
	else 
		cout << "Ingrese un numero mayor a 9 y menor a 100" << endl;

}