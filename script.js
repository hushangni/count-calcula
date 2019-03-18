var button = document.getElementById("calcula");
var finalAmount = document.getElementById('finalAmount');


function calculateOntarioTax(bill) {
  return (bill * 0.13);
}

function calculateTipAmount(bill, tipPercent) {
  return (bill * tipPercent);
}

function calculatePerPerson(total, numOfPeople) {
  return (total / numOfPeople);
}

button.addEventListener("click", function() {
  var billAmount = parseInt(document.getElementById("billAmount").value);

  var tipPercent = document.getElementById("tip").value;
  var splitBy = document.getElementById("splitBy").value;

  var tax = calculateOntarioTax(billAmount);
  var billWithTax = tax + billAmount;
  var tip = calculateTipAmount( billWithTax , tipPercent);
  var billTotal = (tip + billWithTax);


  var amountPerPerson = calculatePerPerson(billTotal, splitBy);
  finalAmount.innerHTML = amountPerPerson.toFixed(2);
});

// for font
// if (navigator.platform.indexOf('Win') != -1) {
//     window.document.getElementById("wrapper").setAttribute("class", "windows");
// } else if (navigator.platform.indexOf('Mac') != -1) {
//     window.document.getElementById("wrapper").setAttribute("class", "mac");
// }
