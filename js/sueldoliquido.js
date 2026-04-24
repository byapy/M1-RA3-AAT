const calcularLiquido = document.querySelector("#calcularLiquido");
const numSalario = document.querySelector("#numSalario");
const numBonificacion = document.querySelector("#numBonificacion");
const numComisiones = document.querySelector("#numComisiones");

const numAhorro =  document.querySelector("#numAhorro");
const igss = document.querySelector("#numIgss");
const numPrestamos = document.querySelector("#numPrestamos");

const totalGanado = document.querySelector("#totalGanado");
const totalDescontado = document.querySelector("#totalDescontado");

const total  = document.querySelector("#totalLiquido");

function CalculadoraLiquido(e){
    e.preventDefault();
    let salario = Number(document.getElementById("numSalario").value);
    let bonos = Number(document.getElementById("numBonificacion").value);
    let comisiones = Number(document.getElementById("numComisiones").value);
    let ingresos = salario + bonos + comisiones; 
    totalGanado.innerHTML = "Q" + ingresos.toFixed(2);

    let ahorro = Number(document.getElementById("numAhorro").value);
    let igss = 0.0483;
    let descuentoIgss = salario * igss;
    let prestamos = Number(document.getElementById("numPrestamos").value);
    let egresos = ahorro + descuentoIgss + prestamos;
    totalDescontado.innerHTML = "-Q" + egresos.toFixed(2);

    let liquido = ingresos - egresos;
    total.innerHTML = "Q" + liquido.toFixed(2);

}

calcularLiquido.addEventListener("click", CalculadoraLiquido);