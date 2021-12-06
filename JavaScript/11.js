const input = document.querySelector('input');
console.log(input);
const spalva = input.style.color = 'red';

const submit = document.getElementsByTagName('button')[3];
console.log(submit);

const span = document.querySelector('span');
console.log(span);

submit.addEventListener('click', function() {
span.innerText =input.value;
input.value = input.innerText;
})





