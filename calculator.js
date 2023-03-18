let x = 2;
let y = 3;
let expression = "x + y"; // This is a string representing the expression "2 + 3"
let result = eval(expression); // This will evaluate the expression and return the result, which is 5
console.log(expression)

let calculator = document.querySelector(".box");
let keysBox = calculator.querySelector(".keys");
let allButtons = document.querySelectorAll("button");
let numberKey = document.querySelectorAll(".number");
let functionKey = keysBox.querySelectorAll(".function");
let firstNumber = "";
let secondNumber = "";
let functionButton ="";
let display = document.querySelector(".result");
let functionClicked = false;
let numberKey02 = document.querySelectorAll(".number");
let answer = document.querySelector(".answer");


numberKey.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        let number = button.id;
        if (!functionClicked) {
            firstNumber += number;
            display.textContent = firstNumber;
        } else {
            secondNumber += number;
            display.textContent = secondNumber;
        }
    })
})


functionKey.forEach((button) => {
    button.addEventListener("click", () => {
        functionButton = button.id;
        functionClicked = true;
    })
})


function calculate(num1, num2, operator) {
    switch(operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return NaN;
    }
}

answer.addEventListener("click", () => {
    let result = calculate(Number(firstNumber), Number(secondNumber), functionButton);
    display.textContent = result;
    firstNumber = "";
    secondNumber = "";
    functionButton = "";
    functionClicked = false;
})