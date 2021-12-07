const nameDOM = document.getElementById('customer');
console.log(nameDOM);

const sriubaDOM = document.getElementById('sriuba');
console.log(sriubaDOM);

const patiekalas = document.getElementById('patiekalas');
console.log(patiekalas);

const desertas = document.getElementById('desertas');
console.log(desertas);

const gerimai = document.querySelectorAll('input[name=gerimas]');
console.log(gerimai);

const submit = document.querySelector('button[type=submit');
console.log(submit);

const orderDOM = document.querySelector('.order');
console.log(orderDOM);

submit.addEventListener('click', function (e) {
    // tam jog nenusimustu info paspaudus submit mygtuka
    e.preventDefault();

    const name = nameDOM.value.trim();
    // trim stringo metodas kuris is abieju pusiu ismes space'us
    let sakinioPradzia = 'anonimas';

    if (name !== '') {
        sakinioPradzia = `vardu ${name}`;
    }
    // jeigu vardas duotas tai ji irasom
    // jeigu vardas nera duotas irasom 'anonimas'

    let arNoriSriubos = 'nenori';
    if (sriubaDOM.checked) {
        arNoriSriubos = 'nori';
    }

    let arNoriPatiekalo = 'nenori';
    if (patiekalas.checked) {
        arNoriPatiekalo = 'nori';
    }
    let arNoriDeserto = 'nenori';
    if (desertas.checked) {
        arNoriDeserto = 'nori';
    }

    let pasirinktasGerimas = '';
    if (gerimai[0].checked) {
        pasirinktasGerimas = 'sultys';
    }
    else if (gerimai[1].checked) {
        pasirinktasGerimas = 'gira';
    }
    else if (gerimai[2].checked) {
        pasirinktasGerimas = 'pienas';
    }

    // alternatyva
    // for (let i = 0; i < gerimai.length; i++) {
    //     if (gerimai[i].checked) {
    //         pasirinktasGerimas = gerimai[i].value;
    //         break;
    //     }
    // }
    // kita alternatyva
    // for (const gerimas of gerimai) {
    //     if (gerimas.checked) {
    //         pasirinktasGerimas = gerimai.value;
    //         break;
    //     }
    // }

   let sakinioPabaiga = pasirinktasGerimas ? `${pasirinktasGerimas} yra pasirinktas gerimas` : 'gerimo nepasirinko';

    orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNoriSriubos} sriubos, ${arNoriPatiekalo} pagrindinio patiekalo, ${arNoriDeserto} deserto ir ${sakinioPabaiga}.`


})