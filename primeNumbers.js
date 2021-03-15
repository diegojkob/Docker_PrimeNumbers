'use strict';
const readLine = require('readline-sync');
let number = readLine.question("Ingrese un numero entero mayor a 1: ");

function isValidNumber(number)
{
  if(number <= 1)
  {
	console.log("El numero ingresado es menor o igual a 1.");
	return false;
  }
  else if(number != parseInt(number))
  {
	console.log("El valor ingresado no corresponde a un numero entero.");
	return false;
  }
  else
	  return true;

}


function isPrimeNumber(number) 
{
	for(let i= 2, s= Math.sqrt(number);i <= s; i++)
	{
		if(number % i === 0) 
			return false;
	}

	return true;
}


if(isValidNumber(number))
{
  let primeNumbers = [];

  for(let i= 2; i <= number; i++)
  {
    if(isPrimeNumber(i))
      primeNumbers.push(i);
  }

console.log("Los numeros primos son:\n" + primeNumbers);

}

