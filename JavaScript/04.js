const h1 = document.querySelector('h1');

h1.innerText = "Zuikio darzas";

const visos = document.querySelectorAll('li');
for(let i = 0; i < visos.length; i++) {
    const visosDarzoves = visos[i];
    visosDarzoves.innerText = "Israuta darzove";
    console.log(visosDarzoves);
}
