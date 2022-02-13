const buttons = document.querySelectorAll(".percent");
const amount = document.querySelector(".dollar");
const people = document.querySelector(".people");

let billAmount;
let percents;
let persons;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.contains("clicked") ? btn.classList.remove("clicked") : "";
    });
    //Switching button color
    button.classList.toggle("clicked");
    //Saving bill, % a amount of people
    billAmount = amount.value;
    percents = Number(button.value);
    persons = Number(people.value);
    console.log(billAmount, percents);
    displayEnd(billAmount, percents, persons);
  });
});
console.log(percents);
function displayEnd(bill, perc, pers = 0) {
  const amount = bill * perc;
  const person = amount + bill / pers;
  console.log(person);
  document.getElementById("tip-amount").innerHTML = `$${amount}`;
  document.getElementById("person-amount").innerHTML = `$${person}`;
}
