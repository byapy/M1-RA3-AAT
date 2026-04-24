const numSueldo = document.querySelector("#numSueldo");
const numTiempo = document.querySelector("#numTiempo");
const numSalarioPendiente = document.querySelector("#numSalarioPendiente");
const numDeuda = document.querySelector("#numDeuda");

const calcularInde = document.querySelector("#calcularInde");
const bono14 = document.querySelector("#bono14");
const aguinaldoBox = document.querySelector("#aguinaldo");

const indemnizacionBox = document.querySelector("#indemnizacionResultado");
function Calcular(e){
    e.preventDefault();
    let sueldo = Number(document.getElementById("numSueldo").value);
    let tiempo = Number(document.getElementById("numTiempo").value);
    let bono = sueldo /12 * tiempo;
    let aguinaldo = sueldo/12 * tiempo;
    let pendiente = Number(document.getElementById("numSalarioPendiente").value);
    let deuda = Number(document.getElementById("numDeuda").value);

    bono14.innerHTML = bono.toFixed(2);
    aguinaldoBox.innerHTML = aguinaldo.toFixed(2);

    let indemnizacion = (sueldo * tiempo) + bono + aguinaldo + pendiente - deuda;
    indemnizacionBox.innerHTML = indemnizacion.toFixed(2);
}

calcularInde.addEventListener("click", Calcular);