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

const h1 = document.getElementsByTagName('h1')[1];
console.log(h1);

minus.addEventListener('click', function () {
    number.innerText = --counter;
    h1.innerText = "Žaidimas progrese";
})
plius.addEventListener('click', function () {
    number.innerText = ++counter;
    h1.innerText = "Žaidimas progrese";
})

reset.addEventListener('click', function () {
    counter = 0;
    number.innerText = counter;
    h1.innerText = "La bamba!";
})


