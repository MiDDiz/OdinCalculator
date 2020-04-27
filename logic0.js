//Global variables
let temp = "";
let last_appended_operator = false;

//Basic functions
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


// Flow functions

function appendNumber(number, form){
  temp += number;
  display();
  last_appended_operator ? last_appended_operator = false : true;
}

function appendOperator(operator, form){
  if (last_appended_operator){

    temp = changeLastOperator(temp, operator)
    last_appended_operator = true;
  }else{

    temp += operator;
    last_appended_operator = true;
  }
  display();
}

function changeLastOperator(foo, fooop){
  let newTemp = "";
  for (let i = 0; i < (foo.length - 1); i++){
    newTemp += foo[i];
  }
  return newTemp += fooop;
}

//Main function (oh god pls have mercy)

function OPERATE (string){
  let done_parsing = 2;
  while (done_parsing === 2){
    let had_operator = false;
    for (let i = 0; i < string.length - 1; i++){
      if (string[i]).match(/[\/*]/){
        last_operator_position = getLastOperatorPosition(i);
      }
    }
  }
}


function display(string){
    form.value = temp;
}
//Event Listeners

//Numbers
btn1.addEventListener("click", () => {
    appendNumber(1, form);
});
btn2.addEventListener("click", () => {
    appendNumber(2, form);
});
btn3.addEventListener("click", () => {
    appendNumber(3, form);
});
btn4.addEventListener("click", () => {
    appendNumber(4, form);
});
btn5.addEventListener("click", () => {
    appendNumber(5, form);
});
btn6.addEventListener("click", () => {
    appendNumber(6, form);
});
btn7.addEventListener("click", () => {
    appendNumber(7, form);
});
btn8.addEventListener("click", () => {
    appendNumber(8, form);
});
btn9.addEventListener("click", () => {
    appendNumber(9, form);
});
btn0.addEventListener("click", () => {
    appendNumber(0, form);
});

//Operators
btnplus.addEventListener("click", () => {
    appendOperator("+", form);
});
btnminus.addEventListener("click", () => {
    appendOperator("-", form);
});
btnmult.addEventListener("click", () => {
    appendOperator("*", form);
});
btndivide.addEventListener("click", () => {
    appendOperator("/", form);
});

//Specials
btnequals.addEventListener("click", () => {
  OPERATE(temp);
});
btnclear.addEventListener("click", () => {

});
