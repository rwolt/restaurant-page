function menuPage()  {
    let content = document.getElementById('content');
    let items = [{name: 'Spanakopita', price: '$9.50'}, {name: 'Hummus', price: '$9.00'}, {name: 'Falafel', price: '$11.00'}, {name: 'Onion Rings', price: '$8.50'}, {name: 'Mozzarella Sticks', price: '$9.50'}, {name: 'Zucchini Sticks', price: '$8.50'}];
    let menu = document.createElement('div');
    let title = document.createElement('img');
    title.id = 'title';
    title.src = '../images/menu.png';
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
    menuImages[0].src = '../images/spanakopita.jpeg';
    menuImages[1].src = '../images/hummus.jpg';
    menuImages[2].src = '../images/falafel.jpg';
    menuImages[3].src = '../images/onionrings.jpg';
    menuImages[4].src = '../images/mozzsticks.jpeg';
    menuImages[5].src = '../images/zucchinisticks.jpg';


    content.appendChild(menu);
}

export {menuPage}