
let temp;

let arrayOperands;
let last_was_operator;

function initCalc(initTotal){
    temp = initTotal;
    arrayOperands = [];
    form.value = "";
    last_was_operator = false;
    refreshScreen(true, temp);
}

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
    return Math.round((num1 / num2) * 100000) / 100000; //ROund up to 5 decimals :)
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

//Flow functions



function refreshScreen(last_was_number, number){
    
    if(last_was_number){ //Posible optimization of vars: if (last_was_operator -> !last_was_number)
        form.value += number;
    }
    else{
        form.value = arrayOperands.join(" ") + " ";
    }
    return;
}

function appendNumber(number){

    if(checForError()){
        return;
    }

    temp += number;
    last_was_operator = false;
    refreshScreen(true, number);
    return;
}

function appendOperator(operator){

    checForError();

    if(last_was_operator){
        arrayOperands[arrayOperands.length - 1] = operator;
        refreshScreen(false, 0);
        return;
    }
    arrayOperands.push(temp);
    temp = "";
    arrayOperands.push(operator);
    refreshScreen(false, 0);
    last_was_operator = true;
    return;
}

function checForError(){
    if (temp === "ERROR"){
        temp = "";
        form.value = temp;
    }
    if (form.value.length >= 20){
        alert("Too many characters!");
        return true;
    }
}

function calculate(){
    operators = [
        "*",
        "/",
        "+",
        "-",
    ]
    if(!last_was_operator){
        arrayOperands.push(temp);
    }
    else{
        arrayOperands.pop(); //Destroy last operator.
    }
    
        //Operate mult and div
    arrayOperands.forEach(element => {
        if(element === operators[0] || element === operators[1]){
            let pos = arrayOperands.indexOf(element);
            arrayOperands[pos] = operate(element, +arrayOperands[pos - 1], +arrayOperands[pos + 1]);
            arrayOperands[pos - 1] = false;
            arrayOperands[pos + 1] = false;
            arrayOperands = arrayOperands.filter( e => typeof e != "boolean")
        }
    });
    //Operate sum and sub
    arrayOperands.forEach(element => {
        if(element === operators[2] || element === operators[3]){
            let pos = arrayOperands.indexOf(element);
            arrayOperands[pos] = operate(element, +arrayOperands[pos - 1], +arrayOperands[pos + 1]);
            arrayOperands[pos - 1] = false;
            arrayOperands[pos + 1] = false;
            arrayOperands = arrayOperands.filter( e => typeof e != "boolean")
        }
    });
    console.log("This is: " + arrayOperands[0]);
    return arrayOperands.pop();
}


//Get buttons and form 
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");
const btnplus = document.getElementById("btn+");
const btnminus = document.getElementById("btn-");
const btnmult = document.getElementById("btn*");
const btndivide = document.getElementById("btn/");
const btnclear = document.getElementById("btnCE");
const btnequals = document.getElementById("btn=");
const form = document.getElementById("results")

//Init the calculator

initCalc("");

//Event Listeners

//Numbers
btn1.addEventListener("click", () => {
    appendNumber(1);
});
btn2.addEventListener("click", () => {
    appendNumber(2);
});
btn3.addEventListener("click", () => {
    appendNumber(3);
});
btn4.addEventListener("click", () => {
    appendNumber(4);
});
btn5.addEventListener("click", () => {
    appendNumber(5);
});
btn6.addEventListener("click", () => {
    appendNumber(6);
});
btn7.addEventListener("click", () =>{
    appendNumber(7);
});
btn8.addEventListener("click", () => {
    appendNumber(8);
});
btn9.addEventListener("click", () => {
    appendNumber(9);
}); 
btn0.addEventListener("click", () => {
    appendNumber(0);
});

//Operators
btnplus.addEventListener("click", () => {
    appendOperator("+");
});
btnminus.addEventListener("click", () => {
    appendOperator("-");
});
btnmult.addEventListener("click", () => {
    appendOperator("*");
});
btndivide.addEventListener("click", () => {
    appendOperator("/");
});

//Specials
btnequals.addEventListener("click", () => {
    initCalc(calculate());
    
});
btnclear.addEventListener("click", () => {
    initCalc("");
});