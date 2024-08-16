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

const displayFunction = function(val){
    displayBox.textContent = val;
    return val;
};

//updating the displayBox
//get a number
//add to array

///////////////////////////////////////////////////////////
//making DIVs and buttons
// let array = ['4', '4', '*', '5'];
// let item = array.join(' ');
const calcContainer = document.querySelector('#calcContainer');
const mainPage = document.querySelector('#mainPage');
const display = document.querySelector('#display');
let calcArray = [];

document.getElementById('calcContainer');

displayBox = document.createElement('div');
displayBox.classList.add('displayBox');
display.appendChild(displayBox);
//displayBox.textContent = ''; //erase later

for (let i = 0; i < 15; i++){
    numbers = document.createElement('button');
    numbers.classList.add('numbers'); //to refer to the group
    numbers.classList.add('numbers' + i); //to stylistically refer to each individually.
    numbers.setAttribute('id', 'btn'+i);
    calcContainer.appendChild(numbers);
}

clearBtn = document.createElement('button');
clearBtn.classList.add('clearBtn');
calcContainer.appendChild(clearBtn);
clearBtn.textContent = 'Clear';

let box7 = document.getElementsByClassName('numbers')[0];
box7.textContent = '7';
// const btn0 = document.getElementById('#btn0');
// btn0.addEventListener('click', displayFunction(7));

let box8 = document.getElementsByClassName('numbers')[1];
box8.textContent = '8';
let box9 = document.getElementsByClassName('numbers')[2];
box9.textContent = '9';
let boxDiv = document.getElementsByClassName('numbers')[3];
boxDiv.textContent = '/';
let box4 = document.getElementsByClassName('numbers')[4];
box4.textContent = '4';
let box5 = document.getElementsByClassName('numbers')[5];
box5.textContent = '5';
let box6 = document.getElementsByClassName('numbers')[6];
box6.textContent = '6';
let boxMult = document.getElementsByClassName('numbers')[7];
boxMult.textContent = '*';
let box1 = document.getElementsByClassName('numbers')[8];
box1.textContent = '1';
let box2 = document.getElementsByClassName('numbers')[9];
box2.textContent = '2';
let box3 = document.getElementsByClassName('numbers')[10];
box3.textContent = '3';
let boxSub = document.getElementsByClassName('numbers')[11];
boxSub.textContent = '-';
let box0 = document.getElementsByClassName('numbers')[12];
box0.textContent = '0';
let boxEquals = document.getElementsByClassName('numbers')[13];
boxEquals.textContent = '=';
let boxPlus = document.getElementsByClassName('numbers')[14];
boxPlus.textContent = '+';

//////////////////////////////////////////////////////////////

const mybtn = document.querySelector('#mybtn');
mybtn.addEventListener('click', function(){
    displayBox.textContent = 'mybtn';
});

cellList = document.querySelectorAll('.numbers'); //cellList is an object + not an array

cellList.forEach(numbers => {
    calcArray.push(numbers);
}) //I think this allows me to target each div to add functions + eventlisteners?

console.log(Array.isArray(calcArray)); 
console.log(calcArray)