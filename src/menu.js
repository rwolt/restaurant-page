import spanakopita from '../images/spanakopita.jpeg'
import hummus from '../images/hummus.jpg'
import falafel from '../images/falafel.jpg'
import onionRings from '../images/onionrings.jpg'
import mozzSticks from '../images/mozzsticks.jpeg'
import zucchiniSticks from '../images/zucchinisticks.jpg'
import menuImg from '../images/menu.png'


function menuPage()  {
    let content = document.getElementById('content');
    let items = [{name: 'Spanakopita', price: '$9.50'}, {name: 'Hummus', price: '$9.00'}, {name: 'Falafel', price: '$11.00'}, {name: 'Onion Rings', price: '$8.50'}, {name: 'Mozzarella Sticks', price: '$9.50'}, {name: 'Zucchini Sticks', price: '$8.50'}];
    let menu = document.createElement('div');
    let title = document.createElement('img');
    title.id = 'title';
    title.src = menuImg;
    menu.id = 'menu';
    content.appendChild(title);

    for(let item of items) {
        let entry = document.createElement('div');
        entry.className = 'entry';
        let line = document.createElement('p');
        let image = document.createElement('img');
        image.className = 'preview';
        let strLength = (item.name + item.price).length;
        let spaceLength = 40 - strLength;
        let space = '';
        for(let i = 0; i < spaceLength; i++){
            space += '.';
        }
    
        line.textContent = `${item.name}${space}${item.price}`;
        entry.appendChild(image);
        entry.appendChild(line);
        menu.appendChild(entry);
    }
    let menuImages = menu.getElementsByTagName('img');
    menuImages[0].src = spanakopita;
    menuImages[1].src = hummus;
    menuImages[2].src = falafel;
    menuImages[3].src = onionRings;
    menuImages[4].src = mozzSticks;
    menuImages[5].src = zucchiniSticks;


    content.appendChild(menu);
}

export {menuPage}