function generuotiSocials(selector, iconList) {
    // validation
    if (typeof selector !== 'string' || selector.length < 1) {
        console.error('ivestas selectorius negali buti tuscias stringas ir privalo buti tik stringas');
        return false;
    }
    if (!Array.isArray(iconList) || iconList.length < 1) {
        console.error('tai nera masyvas');
        return false;
    }

    // logic
    const selectorDOM = document.querySelector(selector);
    let htmlElements = '';
    for (let i = 0; i < iconList.length; i++) {
        htmlElements += `
        <i class="fa fa-${iconList[i]}"></i>`;
    }

    // logic validation
    if (!selectorDOM) {
        console.error('neteisingas selectorius');
        return false;
    }

    // result return
    selectorDOM.innerHTML = htmlElements;
}

const icons = ['facebook', 'instagram', 'twitter', 'linkedin'];

// generuotiSocials('.socials', icons);
// PATESTAVIMAS
// generuotiSocials('', icons);
// generuotiSocials('labas', icons);
// generuotiSocials('.socials', 2);
generuotiSocials('.socials', []);