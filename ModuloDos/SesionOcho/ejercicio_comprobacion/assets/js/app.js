
let selection = 0;

do {
     selection = parseFloat(prompt("Escoja una opción\n1.-\n2.-\n3.-\n4.-\n5.-"));
     switch (selection) {
        case 1:
            alert("Escogio la opcion: 1")
            break;
        case 2:
            alert("Escogio la opcion: 2")
            break;
        case 3:
            alert("Escogio la opcion: 3")
            break;
        case 4:
            alert("Escogio la opcion: 4")
            break;
        case 5:
            alert("Hasta luego")
            break;

        default:
            alert("Escoja una opcion válida");
            break;
     }

} while (selection !== 5);

