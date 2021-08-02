
//import './sass/main.scss';
import cardTpl from './templates/card.hbs';
import menu from './menu.json'

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createCardsMenu(menu);

menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);


function createCardsMenu(menu) {
    return menu.map(cardTpl).join('');
}
