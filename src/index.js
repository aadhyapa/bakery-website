import _ from 'lodash';
import './style.css';

import { homePage } from './assets/web-pages/home';
import { menuPage } from './assets/web-pages/menu';
import { contactPage } from './assets/web-pages/contact';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

function resetPage() {
    const mainContent = document.getElementById('container');
    mainContent.innerHTML = '';
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = '';
    }
function resetNavButton() {
    const navButton = document.querySelectorAll('nav button');
    navButton.forEach((button) => {
        button.style.fontSize = '1.5em';
    });
}
function setButtonActive(button) {
    button.style.fontSize = '2em';
}

function defaultPage(){
    homePage();
    homeButton.style.fontSize = '2em';
}
defaultPage();

homeButton.addEventListener('click', () =>{
    resetPage(); 
    resetNavButton(); 
    homePage();
    setButtonActive(homeButton);
});
menuButton.addEventListener('click', () =>{
    resetPage(); 
    resetNavButton(); 
    menuPage();
    setButtonActive(menuButton);
});
contactButton.addEventListener('click', () =>{
    resetPage(); 
    resetNavButton(); 
    contactPage();
    setButtonActive(contactButton);
});

