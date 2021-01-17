import contactImg from '../images/contact.png'

function contactPage() {
    let title = document.createElement('img');
    title.src = contactImg;
    title.id = 'title';
    let phone = document.createElement('p');
    let hours = document.createElement('p');
    let address = document.createElement('p');
    address.id = 'address';
    hours.id='hours';
    phone.id = 'phone';
    hours.innerHTML = "<span class='center'>Hours:</span></br></br> Monday - Saturday 10:30AM - 9:00PM</br></br> Sunday 10:30AM - 8:00PM </br></br>";
    address.innerHTML = "<span class='center'>Niro\'s Gyros</span> </br></br> 10826 S. 48th St, Phoenix, AZ 85044</br></br>"
    phone.innerHTML = "<span class='center'>Phone:</span></br></br> 555-247-3855"; 
    let content = document.getElementById('content');

    let info = document.createElement('div');
    info.id = 'info';
    let container = document.createElement('div');
    container.id = 'container';
    info.appendChild(address);
    info.appendChild(hours);
    info.appendChild(phone);
    
    let mapDiv = document.createElement('div');
    mapDiv.id = 'mapDiv'; 
    container.appendChild(info);
    container.appendChild(mapDiv);
    mapDiv.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.8827349158823!2d-111.98313748458224!3d33.34801326195816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b05b938dda895%3A0xa7eca6303086aaac!2sNiro&#39;s%20Gyros!5e0!3m2!1sen!2sus!4v1610897883895!5m2!1sen!2sus" width="465" height="355" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';

    content.appendChild(title);
    content.appendChild(container);
}

export {contactPage}