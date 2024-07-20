let valorUno = prompt("ingrese un numero");
let valorDos = prompt("ingrese otro valor para comparar con el primero");

if (valorUno >= valorDos) {
  if (valorUno == valorDos) {
    alert(valorUno + " es igual que: " + valorDos);
  } else {
    alert(valorUno + " es mayor que: " + valorDos);
  }
} else {
  alert(valorUno + " es menor que: " + valorDos);
}