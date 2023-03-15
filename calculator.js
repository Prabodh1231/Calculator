let num = 123+35;
console.log (num);

let calculator = document.querySelector(".box");
let keysBox = calculator.querySelector(".keys");
let allButtons = document.querySelectorAll("button");
let numberKey = document.querySelectorAll(".number")
let functionKey = keysBox.querySelectorAll(".function")
let firstNumber = 0;
let functionClicked = false;

functionKey.forEach((button) => {
    button.addEventListener("click", () => {
        let functionButton = button.id;
        console.log(functionButton);
        functionClicked = true;
    })
})

numberKey.forEach((button) => {
    button.addEventListener("click", () => {
        let number = button.id;
        if (!functionClicked) {
            firstNumber += number;
            console.log(firstNumber);
        } else {
            functionClicked = false;
            return
        }
    })
})