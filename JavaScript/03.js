const h2 = document.querySelector('h2');

h2.classList.add('simba');

console.log(h2.classList);

const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
    const list = li[i];
    list.classList.add('darzove');
    console.log(list.classList);
}

