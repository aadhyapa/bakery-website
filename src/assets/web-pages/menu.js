export function menuPage() {
    // Create a new div element
    const mainContent = document.getElementById('container');


    mainContent.innerHTML = ''; 
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = '<h1>Our Menu!</h1>';
  
    const menuItems = [];

    function addMenuItems(name, image, description, price) {
      this.name = name;
      this.image = image;
      this.description = description;
      this.price = price;
    };

    const menuContent = document.createElement('div');
    menuContent.classList.add('menu-content');

    function menuCards(addMenuItems){
      for (let i = 0; i < addMenuItems.length; i++){
        const menuCard = document.createElement('div');
        const menuItem = addMenuItems[i];
        menuCard.classList.add('menu-card');
        menuCard.style.backgroundImage = `url(${menuItem.image})`;
        menuCard.innerHTML = `
        <h2>${menuItem.name}</h2>
        <p>${menuItem.description}</p>
        <p>${menuItem.price}</p>
        `;
        menuContent.appendChild(menuCard);
      }
      
    };
  


  
    if (mainContent) {
      // Append the content to the main content container
      mainContent.appendChild(menu);
    } else {
      console.error('Element with id "main-content" not found.');
    }
    }