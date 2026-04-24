const btnGuardar = document.querySelector("#btnGuardar");
const tbody = document.querySelector("#tbody");
const txtNombre = document.querySelector("#txtNombre");
const datFecha = document.querySelector("#datFecha");
const txtPuesto = document.querySelector("#txtPuesto");
const numSalario = document.querySelector("#numSalario");
const btnEliminarPrimero  = document.querySelector("#btnEliminarPrimero");
const btnEliminarUltimo = document.querySelector("#btnEliminarUltimo");
const mensajeParrafo = document.querySelector("#mensajeParrafo");

function AgregarDatos(e){
    e.preventDefault();
    let nombre = txtNombre.value;
    let fecha = datFecha.value;
    let puesto = txtPuesto.value;
    let salario = numSalario.value;
    console.log("Nombre: " + nombre + "Fecha: " + fecha + "Puesto: " +  puesto + "Salario: " + salario);

    let fila = "<tr> <td>" + nombre +"</td> <td>" + fecha + "</td> <td>" + puesto + "</td> <td>" + salario + "</td> </tr>";
    tbody.innerHTML += fila;
}

function BorrarPrimero(e){
    e.preventDefault();
    if (tbody.rows.length > 0){
        tbody.deleteRow(0);
    }
}
function borrarUltima(e){
    e.preventDefault();
    let totalfilas = tbody.rows.length;

    if(tbody.rows.length > 0){
        tbody.deleteRow(totalfilas -1);
    }
}
btnEliminarPrimero.addEventListener("click", BorrarPrimero);
btnEliminarUltimo.addEventListener("click", borrarUltima);
btnGuardar.addEventListener("click", AgregarDatos);