const number = document.querySelector('.number');
console.log(number);

const minus = document.querySelector('.minus');
console.log(minus);

const plius = document.querySelector('.plus');
console.log(plius);

const reset = document.querySelector('.reset');
console.log(reset);

const form = document.querySelector('form');
console.log(form);

let counter = 0;

minus.addEventListener('click', function() {
number.innerText = --counter;
})
plius.addEventListener('click', function() {
    number.innerText = ++counter;
})

reset.addEventListener('click', function() {
    counter = 0;
    number.innerText = counter;
})