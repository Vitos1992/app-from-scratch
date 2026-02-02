const html1 = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const git = document.querySelector('#git');
const react = document.querySelector('#react');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModaL);

const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: false},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: false},
    {title: 'JavaScript', description: 'JavaScript Text', type: 'js', done: false},
    {title: 'Git', description: 'Git Text', type: 'git', done: false},
    {title: 'React', description: 'React Text', type: 'react', done: false},
];

function openCard() {
    js.classList.add('open');
}
function closeModaL() {
    js.classList.remove('open');
}

if (technologies.length === 0) {
    content.innerHTML = '<p class="empty">Оберіть мови: HTML, CSS, JavaScript, Git, React!</p>'
} else {
    let html = '';
for (let i = 0; i < technologies.length; i++) {
    const tech = technologies[i];
    html += `
    <div class="card">
        <h3>${tech.title}</h3>
    </div>
    `
}
content.innerHTML = html;
}




// function openCard() {
//     html.classList.add('open');
// }
// function closeModaL() {
//     html.classList.remove('open');
// }

