const html1 = document.querySelector('#html');
const css = document.querySelector('#css');
const js = document.querySelector('#js');
const git = document.querySelector('#git');
const react = document.querySelector('#react');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');
const progress = document.querySelector('#progress');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModaL);

const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: true},
    {title: 'JavaScript', description: 'JavaScript Text', type: 'js', done: true},
    {title: 'Git', description: 'Git Text', type: 'git', done: false},
    {title: 'React', description: 'React Text', type: 'react', done: false},
];

function openCard(event) {
    const date = event.target.dataset;
    const tech = technologies.find(t => t.type === date.type);
    if (!tech) return;

    openModal('');

    
}

function openModal(html, title) {
    js.classList.add('open');
}

function closeModaL() {
    js.classList.remove('open');
}

function init() {
    renderCards();
    renderProgress();
}

function renderCards() {
    // додаем клас у разі не обрання техногії
    if (technologies.length === 0) {
        content.innerHTML = '<p class="empty">Оберіть мови: HTML, CSS, JavaScript, Git, React!</p>'
    } else {
        let html = '';
    for (let i = 0; i < technologies.length; i++) {
        const tech = technologies[i];
        html += toCard(tech);
    }
    content.innerHTML = html;
    //content.innerHTML = technologie.map(toCard).join('');
    }
}

function renderProgress() {
    const percent = computeProgressPercent();
    
    // колір прогресу навчання
    let background

    if (percent <= 30) {
        background = '#e75a5a'; // red
    } else if (percent > 30 && percent < 70) {
        background = '#F99415'; // orange
    } else {
        background = '#73BA3C'; // green
    }

    progress.style.background = background; 
    progress.style.width = percent + '%';
    progress.textContent = percent ? percent + '%' : '';
}

function computeProgressPercent() {
    // ця умова для того як що не оброна технологія computeProgressPercent != NaN 
    if (technologies.length === 0) {
        return 0;
    }
    // відсоток прогресу навчання
    let doneCount = 0;
    for (let i = 0; i < technologies.length; i++) {
        if (technologies[i].done) doneCount++;
    }
    
    return Math.round((100 * doneCount) / technologies.length);
}


function toCard(tech) {
    const doneClass = tech.done ? 'done' : '';
    return `
        <div class="card ${doneClass}" date-type="${tech.type}">
            <h3 date-type="${tech.type}">${tech.title}</h3>
        </div>
        `
}
init();
//renderCards();





// function openCard() {
//     html.classList.add('open');
// }
// function closeModaL() {
//     html.classList.remove('open');
// }

