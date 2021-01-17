function contactPage() {
    let title = document.createElement('img');
    title.src = '../images/contact.png';
    title.id = 'title';
    let phone = document.createElement('p');
    phone.id = 'phone';
    phone.textContent = '555-247-3855'; 
    let content = document.getElementById('content');

    content.appendChild(title);
    content.appendChild(phone);
}

export {contactPage}