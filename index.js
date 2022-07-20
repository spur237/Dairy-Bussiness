function reportSummary(){

    event.preventDefault();

    let data = [];

    data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
    data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
    data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
    data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);

    let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;

    document.getElementById("output-D").innerHTML += "<Br>"

    document.getElementById("output-D").innerHTML += "<p>Your production in shed D is " + data.shed_S + " litres per day</p>";
    document.getElementById("output-D").innerHTML += "<p>Your production in shed  D is " + data.shed_P + " litres per day</p>";
    document.getElementById("output-D").innerHTML += "<p>Your production in shed D is " + data.shed_U + " litres per day</p>";
    document.getElementById("output-D").innerHTML += "<p>Your production in shed D is " + data.shed_R + " litres per day</p>";

    document.getElementById("output-R").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";
    

    dailyIncome = sumData * 45;

    document.getElementById("output-R").innerHTML += "<Br>"

    document.getElementById("output-R").innerHTML += "<hr>"

    document.getElementById("output-R").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("output-R").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("output-R").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";
    document.getElementById("output-R").innerHTML += "<hr>"

    document.getElementById("output-R").innerHTML += "<Br>"


    incomeJanuary = dailyIncome * 31;
    incomeFebruary = dailyIncome * 29;
    incomeMarch = dailyIncome * 31;
    incomeApril = dailyIncome * 30;
    incomeMay = dailyIncome * 31;
    incomeJune = dailyIncome * 30;
    incomeJuly = dailyIncome * 31;
    incomeAugust = dailyIncome * 31;
    incomeSeptember = dailyIncome * 30;
    incomeOctober = dailyIncome * 31;
    incomeNovember = dailyIncome * 30;
    incomeDecember = dailyIncome * 31;

     
    document.getElementById("output-R").innerHTML += "<p> Your total income for January is Ksh. " + incomeJanuary + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for February is Ksh. " + incomeFebruary + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for March is Ksh. " + incomeMarch + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for April is Ksh. " + incomeApril + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for May is Ksh. " + incomeMay + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for June is Ksh. " + incomeJune + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for July is Ksh. " + incomeJuly + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for August is Ksh. " + incomeAugust + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for September is Ksh. " + incomeSeptember + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for October is Ksh. " + incomeOctober + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for November is Ksh. " + incomeNovember + " </p>"
    document.getElementById("output-R").innerHTML += "<p> Your total income for December is Ksh. " + incomeDecember + " </p>"


    document.getElementById("output-D").innerHTML += "<Br>"

    document.getElementById("output-R").innerHTML += "<hr>"

    incomeInLeapYear = dailyIncome * 366;

    document.getElementById("output-R").innerHTML += "<p>Your total income in a leap year is Ksh. " + incomeInLeapYear + " </p>";

    document.getElementById("output-R").innerHTML += "<hr>"

    document.getElementById("output-R").innerHTML += "<Br>"
    
    function resetPage(){

        document.getElementById("outputData").remove("innerHTML");
        location.reload();
}
}