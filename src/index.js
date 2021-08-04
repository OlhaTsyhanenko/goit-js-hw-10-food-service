//import './sass/main.scss';

import cardTpl from './templates/card.hbs';
import menu from './menu.json'

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMenu(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);


function createCardsMenu(menu) {
    return menu.map(cardTpl).join('');
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

document.querySelector('#theme-switch-toggle').addEventListener('change', onChangeLightTheme);

const bodyEl = document.querySelector('body');

populateBodyClass();

function onChangeLightTheme(evt) {
        
    if (bodyEl.classList.contains(Theme.DARK)) {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
    } else {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
    }

        
    localStorage.setItem('Theme', bodyEl.className);
}

function populateBodyClass() {
    const savedBodyClass = localStorage.getItem('Theme');
    
    if (savedBodyClass) {
        console.log(savedBodyClass);
        bodyEl.className = savedBodyClass;
    }

    if (bodyEl.classList.contains(Theme.DARK)) {
        document.querySelector('#theme-switch-toggle').checked = true;
    } 
}


