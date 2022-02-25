const buttons = document.querySelectorAll(".percent");
const manual = document.getElementById("manual");
const amount = document.querySelector(".dollar");
const people = document.querySelector(".people");
const warning = document.querySelector(".warning");
const tip = document.getElementById("tip-amount");
const perpers = document.getElementById("person-amount");
const reset = document.querySelector(".reset");

let billAmount;
let percents;
let persons;
let buttonValue;

console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.contains("clicked") ? btn.classList.remove("clicked") : "";
    });
    buttonValue = button.value;
    //Switching button color
    button.classList.toggle("clicked");
    //Saving bill, % a amount of people
    //
    console.log(typeof amount.value);
    if (amount.value !== "" && people.value !== "") {
      reset.removeAttribute("disabled");
      valuesCollect();
    } else {
      return;
    }
  });
});

//ADDING EVENT LISTENER TO CUSTOM TIP INPUT
manual.addEventListener("input", () => {
  buttonValue = manual.value;
  valuesCollect();
});
function valuesCollect() {
  billAmount = amount.value;
  percents = Number(buttonValue) / 100;
  persons = Number(people.value);
  console.log(billAmount, percents);

  //CHECKING FOR AMOUNT OF PEOPLE IS NOT 0
  if (people.value === "" || people.value === "0") {
    warning.classList.add("error");
  } else {
    warning.classList.remove("error"),
      displayEnd(billAmount, percents, persons);
  }
}
function displayEnd(bill, perc, pers = 1) {
  const amount = (bill * perc) / pers;
  const person = amount + bill / pers;
  console.log(person);
  document.getElementById("tip-amount").innerHTML = `$${amount.toFixed(2)}`;
  document.getElementById("person-amount").innerHTML = `$${person.toFixed(2)}`;
}
//RESETING APP
reset.addEventListener("click", () => {
  amount.value = people.value = manual.value = "";
  tip.textContent = perpers.textContent = "$0.00";
  buttonValue = 0;
  reset.setAttribute("disabled", true);
  console.log(typeof buttonValue + buttonValue);
});
