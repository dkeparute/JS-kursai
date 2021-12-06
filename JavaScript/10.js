const input = document.querySelector('input');
console.log(input);

const submit = document.getElementsByTagName('button')[3];
console.log(submit);

const span = document.querySelector('span');
console.log(span);

submit.addEventListener('click', function() {
const text = input.value;
span.innerText = text;
input.value = input.innerText;

})


