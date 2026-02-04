//const html1 = document.querySelector('#html');
//const css = document.querySelector('#css');
//const git = document.querySelector('#git');
//const react = document.querySelector('#react');
const js = document.querySelector('#js');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');
const progress = document.querySelector('#progress');
const form = document.querySelector('#form');

content.addEventListener('click', openCard);
backdrop.addEventListener('click', closeModaL);
js.addEventListener('change', toggleTech); // метод toggleTech для перемикання із одного стану в інший
form.addEventListener('submit', createTech); // метод

// назва сайту
const APP_TITLE = document.title;

const technologies = [
    {title: 'HTML', description: 'HTML Text', type: 'html', done: true},
    {title: 'CSS', description: 'CSS Text', type: 'css', done: false},
    {title: 'JavaScript', description: 'JavaScript Text', type: 'js', done: false},
    {title: 'Git', description: 'Git Text', type: 'git', done: false},
    {title: 'React', description: 'React Text', type: 'react', done: false},
];

function openCard(event) {
    const data = event.target.dataset;
    //console.log(data.type);
    //цикл для перебирання масиву 
    const tech = technologies.find(t => t.type === data.type);
    if (!tech) return;

    openModal(toModal(tech), tech.title);
}

// відкриття модального вікна
function openModal(html, title = APP_TITLE) {
    document.title = `${title} | ${APP_TITLE}`;
    js.innerHTML = html;
    js.classList.add('open');
}

// закриття модального вікна
function closeModaL() {
    document.title = APP_TITLE;
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

function toModal(tech) {
    // якщо tech.done тоді string 'checked' або пустий рядок
    const checked = tech.done ? 'checked' : '';
    return `
        <h2>${tech.title}}</h2>
        <p>${tech.description}</p>
        <hr>
        <div>
            <input type="checkbox" id="done" ${checked} data-type="${tech.type}">
            <label for="done">Вивчаю на теперешній час</label>
        </div>
        `;
}

function toggleTech(event) {
    const type = event.target.dataset.type;
    const tech = technologies.find(t => t.type === type);
    tech.done = event.target.checked;

    init();
}

function toCard(tech) {
    // якщо tech.done тоді string 'done' або пустий рядок
    const doneClass = tech.done ? 'done' : '';
    return `
        <div class="card ${doneClass}" data-type="${tech.type}">
            <h3 data-type="${tech.type}">${tech.title}</h3>
        </div>
        `
}

function isInvalid(title, description) {
    return !title.value || !description.value;
}

function createTech(event) {
    event.preventDefault(); //відключення автооновлення сторінки

    //const title = event.target.title;
    //const description = event.target.description;
    const {title, description} = event.target;

    // валідація для перевірки данних у формі
    if (isInvalid(title, description)) {
        if (!title.value) title.classList.add('invalid');
        if (!description.value) description.classList.add('invalid');

        setTimeout(() => {
            title.classList.remove('invalid');
            description.classList.remove('invalid');
        }, 2000)
        return
    }  

    const newTech = {
        title: title.value,  // опис в input
        description: description.value, // опис в input
        done: false,
        type: title.value.toLowerCase() // метод приводить строчку до нижнього регістру
    };

    technologies.push(newTech); // метод push додає елемент у кінець масиву
    title.value = '';  
    description.value = ''; // після додавання input очищається

    init();
}

init();
//renderCards();





// function openCard() {
//     html.classList.add('open');
// }
// function closeModaL() {
//     html.classList.remove('open');
// }

