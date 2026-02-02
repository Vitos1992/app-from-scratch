const html = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const git = document.querySelector('#git');
const react = document.querySelector('#react');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModaL);

// js.classList.add('open');
// setTimeout(function() {
//     js.classList.remove('open');
// }, 2000)

function openCard() {
    js.classList.add('open');
}
function closeModaL() {
    js.classList.remove('open');
}


// function openCard() {
//     html.classList.add('open');
// }
// function closeModaL() {
//     html.classList.remove('open');
// }

