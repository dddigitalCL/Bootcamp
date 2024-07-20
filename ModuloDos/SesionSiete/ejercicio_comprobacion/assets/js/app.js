let valorUno = isCorrect(prompt("ingrese el Primer número"));

if(valorUno){
  let valorDos = isCorrect(prompt("ingrese el Segundo número"));
  if(valorDos){
    comparativoValore(valorUno, valorDos);
  }
}

function isCorrect(valor){
  if (isNaN(parseFloat(valor))) {
      alert("Recuerde que el valor debe ser numérico");
      window.location.reload(true);   
  }else{
    return valor
  }
}

function comparativoValore(digitoUno, digitoDos){
  if (digitoUno >= digitoDos) {
    if (digitoUno == digitoDos) {
      alert(digitoUno + " es igual que: " + digitoDos);
    } else {
      alert(digitoUno + " es mayor que: " + digitoDos);
    }
  } else {
    alert(digitoUno + " es menor que: " + digitoDos);
  }
}

