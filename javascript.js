console.log('hello world!')

const calcContainer = document.querySelector('#calcContainer');
const mainPage = document.querySelector('#mainPage');
let calcArray = [];

document.getElementById('calcContainer');

for (let i = 0; i < 16; i++){
    numbers = document.createElement('div');
    numbers.classList.add('numbers'); //how to create array of divs that I can individually reference in CSS?
    calcContainer.appendChild(numbers);
}

cellList = document.querySelectorAll('.numbers'); //cellList is an object + not an array

cellList.forEach(numbers => {
    calcArray.push(numbers);
}) //I think this allows me to target each div to add functions + eventlisteners? 

console.log(Array.isArray(calcArray)); 
console.log(calcArray)