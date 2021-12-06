const h1DOM = document.getElementsByTagName('h1')[0];

h1DOM.innerText = "Zuikio pomidoru darzas";

h1DOM.classList.add('pavadinimas');
console.log(h1DOM.classList);

const darzoves = document.querySelectorAll('li');
for (let i = 0; i < darzoves.length; i++) {
    const darzovesVisos = darzoves[i];
    darzovesVisos.innerText = "Pomidoras";
    darzovesVisos.classList.add("pomidoras")

}