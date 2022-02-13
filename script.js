const buttons = document.querySelectorAll(".percent");
const amount = document.querySelector(".dollar");

let billAmount;
let percents;
let persons;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.contains("clicked") ? btn.classList.remove("clicked") : "";
    });
    button.classList.toggle("clicked");
    billAmount = amount.value;
    console.log(billAmount);
  });
});
