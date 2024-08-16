console.log('hello world!')

////////////////////////////////////////////////////////
//operations (add rounding to all)

let firstNumber = 3;
let operator = '-';
let secondNumber = 2;

const addition = function(a,b){
    return add = a + b;
};

const subtraction = function(a,b){
    return subtract = a - b;
};

const multiplication = function(a,b){
    return multiply = a * b;
};

const division = function(a,b){
    return divide = a / b;
};

const operate = function(operator, firstNumber, secondNumber){
    if (operator === '+'){
        return addition(firstNumber, secondNumber);
    } else if (operator === '-'){
        return subtraction(firstNumber, secondNumber);
    } else if (operator === '*'){
        return multiplication(firstNumber, secondNumber);
    } else if (operator === '/'){
        return division(firstNumber, secondNumber);
    }
};

let val = "10";

//get a value
//check if it is an operand
//check if displayBox has already received an operand

const displayFunction = function(val){
    if( val === '+' ||
        val === '-' ||
        val === '/' ||
        val === '*'
    ) { }
    
    console.log(displayBox.textContent);
    // displayBox.textContent += val;
    // return val;
};

//updating the displayBox
//get a number
//add to array

///////////////////////////////////////////////////////////
//making DIVs and buttons
let array = ['4', '4', '*', '5'];
let item = array.join('');

console.log(item);

const calcContainer = document.querySelector('#calcContainer');
const mainPage = document.querySelector('#mainPage');
const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
let calcArray = [];

document.getElementById('calcContainer');

displayBox = document.createElement('div');
displayBox.classList.add('displayBox');
display.appendChild(displayBox);
//displayBox.textContent = ''; //erase later

const btn7 = document.querySelector('#btn7'); //each event listener should do two things: update the display box, send their value to an array
btn7.addEventListener('click', () => {displayFunction(7)});

const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', () => { displayBox.textContent += '+' });

//////////////////////////////////////////////////////////////

// const mybtn = document.querySelector('#mybtn');
// mybtn.addEventListener('click', function(){
//     displayBox.textContent = 'mybtn';
// });

cellList = document.querySelectorAll('.numbers'); //cellList is an object + not an array

cellList.forEach(numbers => {
    calcArray.push(numbers);
}) //I think this allows me to target each div to add functions + eventlisteners?

console.log(Array.isArray(calcArray)); 
console.log(calcArray)