function monthlyInstallmentsCalc(){
    var monthlyInstallment = 0;
    var installmentsPlusInterest = 0;
    var result = document.getElementById("resultado");
    var totalAmount = Number(document.getElementById("dineroPrestado").value);
    var numberOfMonths = Number(document.getElementById("plazoPago").value);
    var tot = document.getElementById("totalDevuelto");
    
    monthlyInstallment = totalAmount / numberOfMonths;
    installmentsPlusInterest = monthlyInstallment + (monthlyInstallment * interestCalc());

    result.innerHTML = "Cálculo de Cuota Mensual    $ " + installmentsPlusInterest.toFixed(2);
    tot.innerHTML = "En total que vas a tener que devolver al final del plazo asciende a  $ " + Math.round((installmentsPlusInterest * numberOfMonths));
}


function interestCalc(){
    let interest = 0;
    let term = Number(document.getElementById("plazoPago").value);

    if(term == 12){interest=8};
    if(term == 24){interest=12};
    if(term == 36){interest=15};
    if(term == 48){interest=18};
    if(term == 60){interest=21};
    if(term == 72){interest=28};


    return interest/100;
}
