

const usuarios = [
    {name: 'Jose', id: 'jose1', password: 'pwd1', saldo: 10000},
    {name: 'Miguel', id: 'miguel2', password: 'pwd2', saldo: 5000},
    {name: 'Juan', id: 'juan3', password: 'pwd3', saldo: 0}
];

function inicio(){
    alert("Bienvenido a Banca en Linea")
}

function welcome(usuario, user){

    let indexUser = usuarios.findIndex(userName => userName.id == usuario);
    if(user != "" && user == true){
        nameUser = usuarios[indexUser].name;
        alert("Bienvenido " + nameUser);
        manuSelector();
    } else{
        alert("credenciales incorrectas");
        window.location.reload(true);
    }
    
};

function validateUser(usuario, password){
    isPassword = false;
    usuarios.forEach(credenciales => {
        if(credenciales.id === usuario){
            isUser = true;
            if(credenciales.password === password){
                isPassword = true;
            }else{
                isPassword = false;
            }
        }else{
            isUser = false;
        }
    });

   return isPassword
}


function verSaldo(usuario){
    let indexUser = usuarios.findIndex(userName => userName.id == usuario);
    userSaldo = usuarios[indexUser].saldo;
    alert("Su saldo es de: $" + userSaldo + " CLP");
    manuSelector()
}

function realizarGiro(usuario){
    let indexUser = usuarios.findIndex(userName => userName.id == usuario);
    userSaldo = usuarios[indexUser].saldo;
    let giro = prompt("Su saldo actual es: " + userSaldo + " CLP\nIngrese el monto que desea girar" );
    if(giro > userSaldo){
        alert("No cuenta con saldo suficiente para realizar el giro indicado");
        manuSelector()
    }else{
        alert("Giro realizado. Su nuevo saldo es :"+ solicitudGiro(userSaldo, giro)+" CLP" );
        usuarios[indexUser].saldo = solicitudGiro(userSaldo, giro);
        manuSelector()
    }
}

function solicitudGiro(saldo,giro){
    ecuacion = saldo-giro;
    return ecuacion;
}

function deposito(usuario){
    let indexUser = usuarios.findIndex(userName => userName.id == usuario);
    userSaldo = usuarios[indexUser].saldo;
    let deposito = prompt("Su saldo actual es: " + userSaldo + " CLP\nIngrese el monto que desea depositar");
    alert("Deposito realizado. Su nuevo saldo es :"+ solicitudDeposito(userSaldo, deposito)+ " CLP" );
    usuarios[indexUser].saldo = solicitudDeposito(userSaldo, deposito);
    manuSelector()
}

function solicitudDeposito(saldo, deposito){
    ecuacion = parseFloat(saldo)+ parseFloat(deposito);
    return ecuacion;
}

function manuSelector(){
    selector = prompt("Seleccione que desea hacer:\n1.- Ver saldo\n2.- Realizar giro\n3.- Realizar deposito\n4.- Salir");



    switch (selector) {
        case "1":
            verSaldo(userID);
            break;
        case "2":
            realizarGiro(userID);
            break;
        case "3":
            deposito(userID)
            break;
        case "4":
            alert("¡Hasta pronto!")
            break;
        default:
            alert("debe ingresar una opción valida")
            manuSelector()
            break;
    }




}

inicio();
let userID = prompt("Ingrese su usuario");
let userPwd = prompt("Ingrese su password");
let saldoContable = 0;
let validateCredentials = validateUser(userID, userPwd);
welcome(userID, validateCredentials)



