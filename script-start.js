
var button = document.getElementById('calcula');
var final = document.getElementById('finalAmount');

function calculateOntarioTax(amount, tax) {
    return amount * tax;
}

function calculateTipAmount(bill, tipPercent) {
    return bill * tipPercent;
}

function calculatePerPerson(total, numPeople) {
    return total / numPeople;
}


button.addEventListener('click', function() {
    var bill = parseInt(document.getElementById('billAmount').value);
    var tipPercent = parseFloat(document.getElementById("tip").value);
    var splitBy = parseInt(document.getElementById("splitBy").value);

    var ontarioTax = 0.13;

    var tax = calculateOntarioTax(bill, ontarioTax);
    var billWithTax = tax + bill;

    var tip = calculateTipAmount(billWithTax, tipPercent);
    var billWithTipTax = tip + billWithTax;

    var amountPerPerson = calculatePerPerson(billWithTipTax, splitBy);

    final.innerHTML = amountPerPerson.toFixed(2);
})


