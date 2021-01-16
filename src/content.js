function pageLoad () {

let content = document.getElementById('content');
let header = document.createElement('div');
header.id = 'header';
let logo = document.createElement('img')
let subtitle = document.createElement('p');
let food = document.createElement('img');
food.id = 'food';
let copy = document.createElement('p');
copy.id = 'copy';
let phone = document.createElement('p');
phone.id = 'phone';

logo.src = "../images/nirosgyros.png";
subtitle.textContent = 'Authentic Greek Food';
food.src = "../images/gyro2.png";
copy.textContent = "Not your ordinary Gyro. Handmade with fresh ingredients daily. Available for pickup and delivery, or stop in for a quick bite!";
phone.textContent = '555-247-3855'; 

header.appendChild(logo);
header.appendChild(subtitle);
header.appendChild(food);
content.appendChild(header);
content.appendChild(copy);
content.appendChild(phone);

}

export {pageLoad}