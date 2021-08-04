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

function onChangeLightTheme(evt) {
     
    if (bodyEl.classList.contains(Theme.DARK)) {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
    } else {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
    }
}
//  const ChangeTheme = document.querySelector('#theme-switch-toggle');

// if(localStorage.getItem("theme") === undefined){
//    localStorage.setItem("theme","light");
// }

// function setTheme(){
//    document.body.classList.remove("dark");
//    document.body.classList.remove("light");
//    document.body.classList.add(localStorage.getItem("theme"));
// }

// ChangeTheme.addEventListener("click",function(){
//    localStorage.setItem("theme",(localStorage.getItem("theme") === "dark") ? "light" : "dark");
//    setTheme();
// });

// setTheme();       



