
let menuInicial = prompt("¡Hola! Soy Eva, tú asistente virtual del servicio al Cliente de Mentel. \nEstoy aquí para ayudarte en lo que necesites. \nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial \n4.- Otras consultas");
logicaTest(menuInicial);

    function logicaTest(valorIngresado) {
    switch (valorIngresado) {
        case "1": 
            let opcionUno = "1.- Ver Boleta \n2.- Pagar cuenta";
            prompt(opcionUno)
            if(opcionUno == 1){
                alert("Haga click aquí para descarga1r su boleta");
            }else{
                alert("usted está siendo transferido. Espere porfavor...")
            }
          break;
        case "2":
            let opcionDos = "Seleccion1e una opción \n1.- Problemas con señal \n2.- Problemas con las llamadas";
            prompt(opcionDos)
            let solicitud = prompt("A continuación escriba su solicitud");
            alert("Estimado usuario, su solicitud: '" + solicitud+ "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos")
          break;
        case "3":
            let opcionTres = "¡Mentel tiene una oferta comercial acorde a tus necesidades! \nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'";
            prompt(opcionTres)
            if((opcionTres).toLowerCase == "si"){
                alert("Un ejecutivo contactará con usted")
            }else{
                alert("Gracias por preferir nuestros servicios")
            }
            break;
        case "4":
            let opcionCuatro = "A continuación escriba su consulta"
            prompt(opcionCuatro)
            alert("Estimado usuario, su consulta: '" + opcionCuatro+ "' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos")
            break;
        default:
            isNumber(valorIngresado);
            break;
      }
  }

    // window.location.reload es solamente para refrescar la pagina tras se finalice el flujo nada mas (para no recargar manual xd o no tener que guardar el archivo)
    //funcion para validar que el dato ingresado al inicio sea numerico.
    function isNumber(ingreso){
        if (!isNaN(parseFloat(ingreso))) {
            alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
            window.location.reload(true);
        }else{
            alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios\n \nNota:\nRecuerde que el valor debe ser númerico como se indica en la lista");
            window.location.reload(true);
        }
    };
  