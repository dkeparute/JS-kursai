function generuotiLenta(selector, number) {
    // validacija
    if (typeof selector !== 'string' || selector.length <1) {
        console.error('ERROR:selector klaida');
        return false;
    }
    if(typeof number !== 'number' || number < 1 || number % 1 !==0 ){
        console.error('ivestas skaicius turi buti ne tuscias stringas ir sveikas skaicius');
        return false;
    }
    // logika
    const selectorDOM = document.querySelector(selector);
    if(!selectorDOM){
        console.error('ERROR: selectorDOM netinkamas');
        return false;
    }
    let html = '';
    for (let i = 1; i <= number; i++) {
        html += `<div>${i}</div>`;
    }
    selectorDOM.innerHTML = html;
}
// generuotiLenta('.lenta', 3);
generuotiLenta('lenta', -3);



