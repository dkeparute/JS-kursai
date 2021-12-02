const listDOM = document.querySelectorAll('li');
for (let i = 0; i < listDOM.length; i++) {
    const ingridientas = listDOM[i];
    const pavadinimas = ingridientas.textContent;
    console.log(pavadinimas);
}
// alternatyva
// for(const ingridientas of listDOM) {
//     console.log(ingridientas.textContent);
// }


