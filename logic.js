//Global variables
let globalOne = 0;
let globalTwo;
let globalTemp = 0;
let operator;

function sum (num1, num2) {
    return num1 + num2;
}
function substract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2
} 
function divide (num1, num2) {
    if(!num2) return "ERROR"
    return num1 / num2;
}
function operate (operator, num1, num2) {
    switch (operator)
    {
        case "+":
        {
            return sum (num1, num2);
        }
        case "-":
        {
            return substract (num1, num2);
        }
        case "*":
        {
            return multiply (num1, num2);
        }
        case "/":
        {
            return divide (num1, num2);
        }
        default:
        {
            return "Error";
        }
    }
}

function addNumber (number, document) {
    document.value += `${number}`;
    globalTemp += `${number}`;
}
function addOperator (operandom, document) {
    globalOne += +globalTemp;
    globalTemp = 0;
    operator = operandom;
    document.value += ` ${operandom} `;
}

//Get buttons and form
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnplus = document.getElementById("btn+");
const btnminus = document.getElementById("btn-");
const btnmult = document.getElementById("btn*");
const btndivide = document.getElementById("btn/");
const btnclear = document.getElementById("btnCE");
const btnequals = document.getElementById("btn=");
const form = document.getElementById("results")



//Event Listeners

//Numbers
btn1.addEventListener("click", () => {
    addNumber(1, form);
});
btn2.addEventListener("click", () => {
    addNumber(2, form);
});
btn3.addEventListener("click", () => {
    addNumber(3, form);
});
btn4.addEventListener("click", () => {
    addNumber(4, form);
});
btn5.addEventListener("click", () => {
    addNumber(5, form);
});
btn6.addEventListener("click", () => {
    addNumber(6, form);
});
btn7.addEventListener("click", () => {
    addNumber(7, form);
});
btn8.addEventListener("click", () => {
    addNumber(8, form);
});
btn9.addEventListener("click", () => {
    addNumber(9, form);
}); 
btn0.addEventListener("click", () => {
    addNumber(0, form);
});

//Operators
btnplus.addEventListener("click", () => {
    addOperator("+", form);
});
btnminus.addEventListener("click", () => {
    addOperator("-", form);
});
btnmult.addEventListener("click", () => {
    addOperator("*", form);
});
btndivide.addEventListener("click", () => {
    addOperator("/", form);
});

//Specials
btnequals.addEventListener("click", () => {
    globalTwo = +globalTemp
    globalTemp = 0;
    let result = operate(operator, globalOne, globalTwo);
    globalOne = result;
    form.value = result;
});
btnclear.addEventListener("click", () => {
    globalOne = 0;
    globalTwo = 0;
    globalTemp = 0;
    form.value = "";
});