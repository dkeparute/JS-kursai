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

function liElement(buttonTupe, h1Text = 'Žaidimas progrese!') {
    h1.innerText = h1Text;
    number.innerText = counter;
    ulDOM.innerHTML += `<li>Paspaudei ${buttonTupe} ir dabartinis rezultatas yra ${counter}.</li>`;
}

minus.addEventListener('click', function () {
    --counter;
    liElement('minusa')
})
plius.addEventListener('click', function () {
    ++counter;
    liElement('pliusa')
})
const h1Default = h1.innerText;

reset.addEventListener('click', function () {
    counter = 0;
    liElement('reseta', h1Default);
})

const ulDOM = document.getElementsByTagName('ul')[1];
ulDOM.innerHTML = '<li>Tu pasileidai zaidima - sekmes!</li>';
console.log(ulDOM);
