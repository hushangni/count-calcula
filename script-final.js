/* 📝 TODOS 📝 aka pseudo code
  1. Grab DOM elements of interest and save in variables:
      - input with id of billAmount
      - input with id of tip
      - input with id of splitBy
      - button with id of calcula
      - span with id of finalAmount
  2. Create a function for calculating per person total after split
  3. Add event listener to button with id of calcula and grab actual user input values
  4. Feed user inputs through helper functions to get split amount
  5. DISPLAY TO USER in the span with the id of finalAmount
  EXTRA: add Pay Up! Text to bottom of page after button click
*/

const billInput = document.getElementById("billAmount");
const tipInput = document.getElementById("tip");
const splitInput = document.getElementById("splitBy");
const button = document.getElementById("calcula");
const finalAmount = document.getElementById('finalAmount');

const calculatePerPerson = (bill, tip, numOfPeople) => {
    const tipAmount = tip * bill;
    const billAfterTip = bill + tipAmount; 
    return billAfterTip / numOfPeople;
}

button.addEventListener("click", () => {
    const billAmount = parseFloat(billInput.value);
    const tipValue = parseFloat(tipInput.value);
    const splitByNum = parseInt(splitInput.value)

    const amountPerPerson = calculatePerPerson(billAmount, tipValue, splitByNum);

    finalAmount.textContent = amountPerPerson.toFixed(2);
    if (!document.querySelector('h3')) {
      const payUp = document.createElement('h3');
      payUp.textContent = "Pay up!";
      document.querySelector('.calculator').append(payUp);
    }
});