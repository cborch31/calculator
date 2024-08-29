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

let array = ['4', '4', '*', '5'];
let item = array.join('');
array.splice()

console.log(item);

let array2 = [ ];
let holder = [ ];
let holder2 = [ ];
let placeholder;

// const pushArray = function(val){
//     if (array2.length == 0 && val == 0 ||
//         array2.length == 0 && val == '+' ||
//         array2.length == 0 && val == '/' ||
//         array2.length == 0 && val == '*'
//     ) {
//         return '0, +, /, * will not be added to empty array';
//     } else if (array2.length == 0 && typeof(val) == 'number') {
//         array2.push(val);
//         return 'a number (not zero) is added to empty array';
//     } else if (array2.length !== 0) {
//         if ( typeof(array2[array2.length-1]) == 'number' && typeof(val) == 'number') {
//             array2.push(val);
//             holder = [ ];
//             holder.push(array2.join(''));
//             return 'more numbers are added to the array. And joined in holder variable';
//         } else if ( isNaN(val) && isNaN(array2[array2.length-1]) )
//             { 
//                 if ( array2[array2.length-1] == '-' && val == '-') {

//                 }} // here we'd need to check about minus. cannot have more than three.
//             else if (isNaN(val) && val !== '-')
//                 { return 'fifth condition' }
//     }
// };

const pushArray = function(val){
        switch (val){
            case 0:
                if(array2.length == 0){
                    return 'array is empty and val is 0';
                } else if (array2[array2.length-1] == '/') {
                    return 'can\'t divide by zero';    
                    } else { array2.push(val); 
                            console.log('zero pushed to array');
                            break;
                    };

            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                if (array2.length == 0) {
                    array2.push(val);
                    holder = [ ];
                    holder.push(Number(array2.join('')));
                    array2 = [ ];
                    array2.push(holder[0]);
                    return 'number pushed to empty array';
                }else if (array2[array2.length-1] == 0){
                    return 'can\'t add number after a zero';
                    } else if (array2.length == 1) {
                        array2.push(val);
                        holder = [ ];
                        holder.push(Number(array2.join('')));
                        array2 = [ ];
                        array2.push(holder[0]);
                        return 'added number to array and joined in holder' //joining changes a number into a string. Might use Number('3') to convert back to number.
                        } else if (typeof(array2[array2.length-1] == 'string' && array2[array2.length-1] !== '-')){
                            holder2.push(val);
                            placeholder = holder2.join('');
                            holder2 = [ ];
                            holder2.push(placeholder);
                            array2.splice(2, 2, Number(holder2[0]));

                            return 'added a second number!'
                        }
            
            case '+':
            case '/':
            case '*':
                if (array2.length == 0){
                    return 'can\'t add operator to empty string!';
                } else if (array2.includes('+') ||
                            array2.includes('/') ||
                            array2.includes('*')){
                    return 'can\'t input multiple +, /, *';
                } else if (isNaN(val)){
                    array2.splice(1, 0, val); break; }
                    return 'nope';
        } //next figure out minus!

};


///////////////////////////////////////////////////////////

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