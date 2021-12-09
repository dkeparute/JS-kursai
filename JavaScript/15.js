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
    

    // logic validation
    if (!selectorDOM) {
        console.error('neteisingas selectorius');
        return false;
    }
    for (let i = 0; i < iconList.length; i++) {
        if (typeof iconList[i] !== 'string' || iconList[i].length === 0) {
            continue;
        }
        htmlElements += `<i class="fa fa-${iconList[i]}"></i>`;
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
// generuotiSocials('.socials', []);
generuotiSocials('.socials', ['facebook', '', 5, true, false, [], null, NaN]);