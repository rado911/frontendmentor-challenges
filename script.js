//SAVING ELEMENTS TO VARIABLES
//INPUTS
const billIn = document.querySelector(".dollar");
const customIn = document.getElementById("manual");
const personIn = document.querySelector(".people");
//BUTTONS
const percentBttnS = document.querySelectorAll(".percent");
const resetBttn = document.querySelector(".reset");
//OUTPUTS
const zeroPeople = document.querySelector(".warning");
const tipFinal = document.getElementById("tip-amount");
const personFinal = document.getElementById("person-amount");
/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

let billAmount,
  percentAmount,
  personAmount = "";
//EVENT LISTENERS FOR BUTTON AND INPUT ELEMENTS
percentBttnS.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    percentBttnS.forEach((bttn) => bttn.classList.remove("clicked"));
    bttn.classList.toggle("clicked");
    collectValues(bttn.value);
    if (billAmount !== 0 && personAmount !== 0) {
      resetBttn.removeAttribute("disabled");
      displayTotal(billAmount, percentAmount, personAmount);
    }
  });
});
customIn.addEventListener("input", () => {
  const customInput = customIn.value;
  collectValues(customInput);
  if (billAmount !== 0 && personAmount !== 0) {
    resetBttn.removeAttribute("disabled");
    displayTotal(billAmount, percentAmount, personAmount);
  }
});
resetBttn.addEventListener("click", () => {
  billAmount = percentAmount = personAmount = 0;
  billIn.value = customIn.value = personIn.value = "";
  tipFinal.textContent = personFinal.textContent = "$0.00";
  resetBttn.setAttribute("disabled", true);
});
//FUNCTIONS
function collectValues(bttn) {
  billAmount = Number(billIn.value);
  percentAmount = Number(bttn) / 100;
  personAmount = Number(personIn.value);
  console.log(
    `The bill is ${billAmount}, will be splitted between ${personAmount} ${
      personAmount === 1 ? "person" : "persons"
    } and the tip is ${percentAmount}%.`
  );
}

function displayTotal(bill, percent, people) {
  const tip = Number((bill * percent) / people);
  tipFinal.textContent = `$${tip.toFixed(2)}`;
  const finalBill = bill / people + tip;
  personFinal.textContent = `$${finalBill.toFixed(2)}`;
  console.log(typeof tip);
}
