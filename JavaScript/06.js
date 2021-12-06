const logo = document.querySelector('.logo');
console.log(logo);

const hamburger = document.querySelector('.hamburger');
console.log(hamburger);

hamburger.addEventListener('click', function() {
    logo.classList.toggle('big');
});

const nav = document.querySelector('nav');

console.log(nav);
hamburger.addEventListener('click', function () {
    nav.classList.toggle('visible');
})

