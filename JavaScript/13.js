const namuKomanda = document.querySelector('[data-komanda="namu"]');
const sveciuKomanda = document.querySelector('[data-komanda="sveciu"]');

const namuOne = document.querySelector('[data-komanda="namu"] > [data-points="1"]');
const namuTwo = document.querySelector('[data-komanda="namu"] > [data-points="2"]');
const namuThree = document.querySelector('[data-komanda="namu"] > [data-points="3"]');

const sveciuOne = document.querySelector('[data-komanda="sveciu"] > [data-points="1"]');
const sveciuTwo = document.querySelector('[data-komanda="sveciu"] > [data-points="2"]');
const sveciuThree = document.querySelector('[data-komanda="sveciu"] > [data-points="3"]');


let namuKomandaScore = 0;
let sveciuKomandaScore = 0;

namuOne.addEventListener('click', () => {
    namuKomandaScore++;
    namuKomanda.innerText = namuKomandaScore;
});

namuTwo.addEventListener('click', () => {
    namuKomandaScore += 2;
    namuKomanda.innerText = namuKomandaScore;
});

namuThree.addEventListener('click', () => {
    namuKomandaScore += 3;
    namuKomanda.innerText = namuKomandaScore;
});

sveciuOne.addEventListener('click', () => {
    sveciuKomandaScore++;
    sveciuKomanda.innerText = sveciuKomandaScore;
})
sveciuTwo.addEventListener('click', () => {
    sveciuKomandaScore+=2;
    sveciuKomanda.innerText = sveciuKomandaScore;
})
sveciuThree.addEventListener('click', () => {
    sveciuKomandaScore+=3;
    sveciuKomanda.innerText = sveciuKomandaScore;
})

