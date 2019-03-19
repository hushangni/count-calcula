var button = document.getElementById("calcula");
var finalAmount = document.getElementById('finalAmount');


function calculateOntarioTax(bill, taxPercent) {
  return bill * taxPercent;
}

function calculateTipAmount(bill, tipPercent) {
  return bill * tipPercent;
}

function calculatePerPerson(total, numOfPeople) {
  return total / numOfPeople;
}

button.addEventListener("click", function() {
  // Grab the bill amount from the page
  var billAmount = parseInt(document.getElementById("billAmount").value);
  var tipPercent = parseFloat(document.getElementById("tip").value);
  var splitBy = parseInt(document.getElementById("splitBy").value);

  // Calculate tax
  var tax = calculateOntarioTax(billAmount, 0.13);
  // Add tax to bill total
  var billWithTax = tax + billAmount;

  // Calculate tip
  var tip = calculateTipAmount(billWithTax , tipPercent);
  // Add tip to the bill total with tax
  var billTotal = tip + billWithTax;


  // Calculate how much each person owes
  var amountPerPerson = calculatePerPerson(billTotal, splitBy);
  // Change the HTML to the amount per person, to 2 decimal places
  finalAmount.innerHTML = amountPerPerson.toFixed(2);
});

