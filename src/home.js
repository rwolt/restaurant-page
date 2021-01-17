import {menuPage} from './menu.js'
import {clearContent} from './script.js'
import foodImg from '../images/gyro2.png'


function homePage () {

let content = document.getElementById('content');

let subtitle = document.createElement('p');
subtitle.id = "subtitle"
subtitle.textContent = 'Authentic Greek Food';
let food = document.createElement('img');
food.id = 'food';
let copy = document.createElement('p');
copy.id = 'copy';
let order = document.createElement('div');
order.id = 'order';

food.src = foodImg;
copy.textContent = "Handmade with fresh ingredients daily. Available for pickup and delivery, or stop in for a quick bite!";
order.textContent = 'Order Online'; 

order.addEventListener('click', function() {
    clearContent();
    menuPage();
});

content.appendChild(subtitle);
content.appendChild(food);
content.appendChild(copy);
content.appendChild(order);
}

export {homePage}