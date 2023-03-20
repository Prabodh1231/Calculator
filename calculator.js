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
let getFirstNumber = false;
let secondNumber = "";
let getSecondNumber = false;
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
            getFirstNumber = true;
        } else {
            secondNumber += number;
            display.textContent = secondNumber;
            getSecondNumber = true;
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
        if (!getSecondNumber) {
            functionButton = button.textContent;
            functionClicked = true;
            decimalClicked = false;  
        }
        else {
            let result = calculate(Number(firstNumber), Number(secondNumber), functionButton);
            display.textContent = result;
            functionClicked = true;
            firstNumber = result;
            functionButton = button.textContent;
            secondNumber = "";
            decimalClicked = false;
            getFirstNumber = false;
            getSecondNumber = false;
            }
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
    if (!getFirstNumber) {
        return
    }
    else if (!getSecondNumber) {
        return
    }
    else {
    let result = calculate(Number(firstNumber), Number(secondNumber), functionButton);
    display.textContent = result;
    firstNumber = "";
    secondNumber = "";
    functionButton = "";
    functionClicked = false;
    decimalClicked = false;
    getFirstNumber = false;
    getSecondNumber = false;
    }
})


clear.addEventListener("click", () => {
    display.textContent = ""
    firstNumber = "";
    secondNumber = "";
    functionButton = "";
    functionClicked = false;
    decimalClicked = false;
})