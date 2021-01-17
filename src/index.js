import {homePage} from './home.js'
import {menuPage} from './menu.js'
import {contactPage} from './contact.js'
import {clearContent} from './script.js'
import logoImg from '../images/nirosgyros.png'

let content = document.getElementById('content');
let header = document.createElement('div');

header.id = 'header';
let logo = document.createElement('img')
logo.id = 'logo';


logo.src = logoImg;


let nav = document.createElement('div');
nav.className = 'nav';

let navHome = document.createElement('div');
navHome.className = 'nav-link';
navHome.id = 'nav-home';
navHome.innerText = "Home";
nav.appendChild(navHome);

let navMenu = document.createElement('a');
navMenu.className = 'nav-link';
navMenu.id = 'nav-menu';
navMenu.innerText = "Menu";
nav.appendChild(navMenu);

let navContact = document.createElement('a');
navContact.className = 'nav-link';
navContact.id = 'nav-contact';
navContact.innerText = "Contact";
nav.appendChild(navContact);

header.appendChild(logo);
header.appendChild(nav);
document.body.insertBefore(header, content);

navHome.addEventListener('click', function() {
    clearContent();
    homePage();
});

navMenu.addEventListener('click', function() {
    clearContent();
    menuPage();
});



navContact.addEventListener('click', function() {
    clearContent();
    contactPage();
});

homePage();
