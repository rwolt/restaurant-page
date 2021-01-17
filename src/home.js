function homePage () {

let content = document.getElementById('content');

let subtitle = document.createElement('p');
subtitle.id = "subtitle"
subtitle.textContent = 'Authentic Greek Food';
let food = document.createElement('img');
food.id = 'food';
let copy = document.createElement('p');
copy.id = 'copy';
let phone = document.createElement('p');
phone.id = 'phone';

food.src = "../images/gyro2.png";
copy.textContent = "Handmade with fresh ingredients daily. Available for pickup and delivery, or stop in for a quick bite!";
phone.textContent = '555-247-3855'; 

content.appendChild(subtitle);
content.appendChild(food);
content.appendChild(copy);
content.appendChild(phone);
}

export {homePage}