// Objeto con tareas predeterminadas
var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
]


//Variables para manejo del input agregar tarea
let divForm = document.querySelector('#formulario');
divForm.style.display ='none';
let botonAddTask = document.querySelector('#btn-add-task');
botonAddTask.addEventListener("click", showHideForm);
let tableBody = document.querySelector('#cuerpo-tabla');

//Evento para visualizar o ocultar formulario de agregar tarea
function showHideForm() {
    if(divForm.style.display == "none"){
        divForm.style.display = "block";
    }else{
        divForm.style.display = "none";
    }
}

// funcion para agregar una nueva tarea
function create(){
    let addTask = document.querySelector('#nuevaTarea')
    if(addTask.value !== "" ){
        let valor = addTask.value;
        let objetoTarea = {
                tarea: valor
            }
        tareas.push(objetoTarea);
        addTask.value = '';
        addTask.classList.remove('manejoError');
        read();
    }else{
        addTask.classList.add('manejoError');
        addTask.setAttribute("placeholder","Debe ingresar una tarea");
    }
    
};

// funcion para refrescar las tareas
function read(){
    html= '';
    tareas.forEach(function(tareasRecorrido, indice) {
        var task = tareasRecorrido.tarea;
        html += `<tr>           
                    <td>${task}</td>
                    <td><button type="button" id="deleteTask" onClick="deleted(${indice})" class="btn btn-danger">remover</button></td>           
                </tr>`
    });
    tableBody.innerHTML = html;
};

// funcion para actualizar tareas (no disponible actualmente)
function update(){};

// funcion para eliminar tareas
function deleted(taskToDelete){
    taskToDelete;
    tareas.splice(taskToDelete,1)
    read();
};


// funcion para cargar la lista tras iniciar el DOM
document.addEventListener('DOMContentLoaded', function() {
    read();
});
