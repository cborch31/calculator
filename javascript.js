console.log('hello world!')

////////////////////////////////////////////////////////
//operations

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

///////////////////////////////////////////////////////////
//making DIVs and buttons

const calcContainer = document.querySelector('#calcContainer');
const mainPage = document.querySelector('#mainPage');
let calcArray = [];

document.getElementById('calcContainer');

displayBox = document.createElement('div');
displayBox.classList.add('displayBox');
calcContainer.appendChild(displayBox);
displayBox.textContent = '4 x 5'; //erase later

for (let i = 0; i < 16; i++){
    numbers = document.createElement('div');
    numbers.classList.add('numbers'); //to refer to the group
    numbers.classList.add('numbers' + i); //to stylistically refer to each individually.
    calcContainer.appendChild(numbers);
}

numbers1.textContent = '1'; //but this doesn't work

cellList = document.querySelectorAll('.numbers'); //cellList is an object + not an array

cellList.forEach(numbers => {
    calcArray.push(numbers);
}) //I think this allows me to target each div to add functions + eventlisteners? 

console.log(Array.isArray(calcArray)); 
console.log(calcArray)