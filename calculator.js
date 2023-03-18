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
let answer = document.querySelector(".answer");
let decimal = document.getElementById("decimal");
let decimalClicked = false;
let clear = document.querySelector(".Clear");

  

numberKey.forEach((button) => {
    button.addEventListener("click", () => {
        if (display.textContent === "0") {
            display.textContent = "";
        }
        let number = button.textContent;
        if (!functionClicked) {
            firstNumber += number;
            display.textContent = firstNumber;
        } else {
            secondNumber += number;
            display.textContent = secondNumber;
        }
    })
})

decimal.addEventListener("click", () => {
    if (!decimalClicked) {
        decimalClicked = true;
        if (!functionClicked) {
            firstNumber += ".";
            display.textContent = firstNumber;
        } else {
            secondNumber += ".";
            display.textContent = secondNumber;
        }
    }
});


functionKey.forEach((button) => {
    button.addEventListener("click", () => {
        functionButton = button.id;
        functionClicked = true;
        decimalClicked = false;
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
    decimalClicked = false;
})

clear.addEventListener("click", () => {
    display.textContent = ""
    firstNumber = "";
    secondNumber = "";
    functionButton = "";
    functionClicked = false;
    decimalClicked = false;
})