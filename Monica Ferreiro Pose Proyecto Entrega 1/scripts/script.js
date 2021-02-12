function cliente (nombre, sueldo, antiguedad) {
    this.nombre= nombre;
    this.sueldo= sueldo;
    this.antiguedad= antiguedad;
}

var newclient= new cliente ('Juan', 100000, 18);


var interestDataBase= []

class tablainterest{
    constructor(months, interest){
    this.numberOfMonths = months;
    this.interest = interest;
    }
}

let months12 = new tablainterest(12,8);
let months24 = new tablainterest(24,12);
let months36 = new tablainterest(36,15);
let months48 = new tablainterest(48,18);
let months60 = new tablainterest(60,21);
let months72 = new tablainterest(72,28);


interestDataBase.push(months12);
interestDataBase.push(months24);
interestDataBase.push(months36);
interestDataBase.push(months48);
interestDataBase.push(months60);
interestDataBase.push(months72);


function monthlyInstallmentsCalc(){
    var monthlyInstallment = 0;
    var installmentsPlusInterest = 0;
    var result = document.getElementById("resultado");
    var totalAmount = Number(document.getElementById("dineroPrestado").value);
    var numberOfMonths = Number(document.getElementById("plazoPago").value);
    var tot = document.getElementById("totalDevuelto");
   
    if (totalAmount> newclient.sueldo) {
        alert("El importe que esta solicitando es mayor a tu sueldo, ingresa un nuevo monto")
    }
    else {

    monthlyInstallment = totalAmount / numberOfMonths;
    installmentsPlusInterest = monthlyInstallment + (monthlyInstallment * interestCalc());

    result.innerHTML = "Cálculo de Cuota Mensual    $ " + installmentsPlusInterest.toFixed(2);
    tot.innerHTML = newclient.nombre + ": el total que vas a tener que devolver al final del plazo asciende a  $ " + Math.round((installmentsPlusInterest * numberOfMonths));
    }
}



function interestCalc(){
    let interest = 0;
    let term = Number(document.getElementById("plazoPago").value);

    for(let i = 0; i < interestDataBase.length; i++){
        if(term == interestDataBase[i].numberOfMonths){
            interest = interestDataBase[i].interest;
            break;
        }
    }


    return interest/100;
}
