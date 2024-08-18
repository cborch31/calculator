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

const operate = function(firstNumber, operator, secondNumber){
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

const displayFunction = function(val){
    if(displayBox.textContent === '' && val == 0){
        return;
        }else if( typeof(val) == 'number' ){
            displayBox.textContent += val;
            //add to an array?
            }else if(typeof(val) !== 'number' && displayBox.textContent !== '') 
                    {if(displayBox.textContent.includes('-') || //this doesn't allow for negative numbers
                        displayBox.textContent.includes('+') ||
                        displayBox.textContent.includes('*') ||
                        displayBox.textContent.includes('/') )
                        {
                            return;
                        } else {displayBox.textContent += val;}
                    };
    };


///////////////////////////////////////////////////////////
//making DIVs and buttons
let array = ['4', '4', '*', '5'];
let item = array.join('');
array.splice()

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

const btn0 = document.querySelector('#btn0');
btn0.addEventListener('click', () => {displayFunction(0)});
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {displayFunction(1)});
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {displayFunction(2)});
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {displayFunction(3)});
const btn4 = document.querySelector('#btn4');
btn4.addEventListener('click', () => {displayFunction(4)});
const btn5 = document.querySelector('#btn5');
btn5.addEventListener('click', () => {displayFunction(5)});
const btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', () => {displayFunction(6)});
const btn7 = document.querySelector('#btn7'); //each event listener should do two things: update the display box, send their value to an array OR should the displayFunction send the item to the array?
btn7.addEventListener('click', () => {displayFunction(7)});
const btn8 = document.querySelector('#btn8');
btn8.addEventListener('click', () => {displayFunction(8)});
const btn9 = document.querySelector('#btn9');
btn9.addEventListener('click', () => {displayFunction(9)});

const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', () => {displayFunction('+')});
const btnDiv = document.querySelector('#btnDiv');
btnDiv.addEventListener('click', () => {displayFunction('/')});
const btnMul = document.querySelector('#btnMul');
btnMul.addEventListener('click', () => {displayFunction('*')});
const btnMin = document.querySelector('#btnMin');
btnMin.addEventListener('click', () => {displayFunction('-')});

//////////////////////////////////////////////////////////////

// const mybtn = document.querySelector('#mybtn');
// mybtn.addEventListener('click', function(){
//     displayBox.textContent = 'mybtn';
// });

cellList = document.querySelectorAll('.numbers'); //cellList is an object + not an array

cellList.forEach(numbers => {
    calcArray.push(numbers);
}) //I think this allows me to target each div to add functions + eventlisteners?

// console.log(Array.isArray(calcArray)); 
// console.log(calcArray)