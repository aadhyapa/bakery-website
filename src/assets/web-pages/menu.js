
import bg12 from '../images/menu-page/bg12.png';
import bg11 from '../images/menu-page/bg11.png';
import bg13 from '../images/menu-page/bg13.png';

export function menuPage() {
    // Create a new div element
    const mainContent = document.getElementById('container');


    mainContent.innerHTML = '';
    document.body.style.backgroundImage = `url(${bg13})`;

    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.innerHTML = `
    <div>
      <h1>Our Menu!</h1>
      <p>Explore our wide variety of baked goods, from scrumptious cakes to delightful pastries. 
        Find your favorite treat and get inspired to try something new!
        </p>
    </div>
    <button>View Menu ⇩</button>
    `;
  
    const menuItems = [];

    class addMenuItems{
      constructor(name, image, description, price) {
      this.name = name;
      this.image = image;
      this.description = description;
      this.price = price;
    }};

    class menuCategory{
    constructor(category, dishes){
      this.category = category;
      this.dishes = dishes;
    }}

    menuItems.push(new menuCategory('Cakes', [new addMenuItems('Chocolate Cake', 'chocolate-cake', 'A rich and moist chocolate cake with a creamy chocolate frosting.', '$15.99'),
      new addMenuItems('Vanilla Cake', 'vanilla-cake', 'A light and fluffy vanilla cake with a sweet vanilla frosting.', '$12.99'),
      new addMenuItems('Red Velvet Cake', 'red-velvet-cake', 'A classic red velvet cake with a tangy cream cheese frosting.', '$18.99'),
      new addMenuItems('Carrot Cake', 'carrot-cake', 'A moist carrot cake with a cream cheese frosting and a sprinkle of walnuts.', '$16.99'),
      new addMenuItems('Lemon Cake', 'lemon-cake', 'A zesty lemon cake with a lemon glaze and a sprinkle of lemon zest.', '$14.99'),
      new addMenuItems('Strawberry Cake', 'strawberry-cake', 'A light and fluffy strawberry cake with a sweet strawberry frosting.', '$13.99')]));

    menuItems.push(new menuCategory('Cupcakes', [new addMenuItems('Chocolate Cupcake', 'chocolate-cupcake', 'A rich and moist chocolate cupcake with a creamy chocolate frosting.', '$2.99'),
      new addMenuItems('Vanilla Cupcake', 'vanilla-cupcake', 'A light and fluffy vanilla cupcake with a sweet vanilla frosting.', '$1.99'),
      new addMenuItems('Red Velvet Cupcake', 'red-velvet-cupcake', 'A classic red velvet cupcake with a tangy cream cheese frosting.', '$3.99'),
      new addMenuItems('Carrot Cupcake', 'carrot-cupcake', 'A moist carrot cupcake with a cream cheese frosting and a sprinkle of walnuts.', '$2.99'),
      new addMenuItems('Lemon Cupcake', 'lemon-cupcake', 'A zesty lemon cupcake with a lemon glaze and a sprinkle of lemon zest.', '$2.99'),
      new addMenuItems('Strawberry Cupcake', 'strawberry-cupcake', 'A light and fluffy strawberry cupcake with a sweet strawberry frosting.', '$2.99')]));
    
    menuItems.push(new menuCategory('Cookies', [new addMenuItems('Chocolate Chip Cookie', 'chocolate-chip-cookie', 'A classic chocolate chip cookie with a sprinkle of chocolate chips.', '$1.99'),
      new addMenuItems('Sugar Cookie', 'sugar-cookie', 'A sweet sugar cookie with a sprinkle of sugar crystals.', '$1.99'),
      new addMenuItems('Oatmeal Cookie', 'oatmeal-cookie', 'A chewy oatmeal cookie with a sprinkle of raisins and walnuts.', '$1.99'),
      new addMenuItems('Peanut Butter Cookie', 'peanut-butter-cookie', 'A rich and nutty peanut butter cookie with a sprinkle of peanuts.', '$1.99'),
      new addMenuItems('Snickerdoodle Cookie', 'snickerdoodle-cookie', 'A soft and chewy snickerdoodle cookie with a sprinkle of cinnamon sugar.', '$1.99'),
      new addMenuItems('Macaroon Cookie', 'macaroon-cookie', 'A light and fluffy macaroon cookie with a sprinkle of coconut flakes.', '$1.99')]));

    menuItems.push(new menuCategory('Muffins', [new addMenuItems('Chocolate Muffin', 'chocolate-muffin', 'A rich and moist chocolate muffin with a creamy chocolate frosting.', '$3.99'),
      new addMenuItems('Vanilla Muffin', 'vanilla-muffin', 'A light and fluffy vanilla muffin with a sweet vanilla frosting.', '$2.99'),
      new addMenuItems('Red Velvet Muffin', 'red-velvet-muffin', 'A classic red velvet muffin with a tangy cream cheese frosting.', '$4.99'),
      new addMenuItems('Carrot Muffin', 'carrot-muffin', 'A moist carrot muffin with a cream cheese frosting and a sprinkle of walnuts.', '$3.99'),
      new addMenuItems('Lemon Muffin', 'lemon-muffin', 'A zesty lemon muffin with a lemon glaze and a sprinkle of lemon zest.', '$3.99'),
      new addMenuItems('Strawberry Muffin', 'strawberry-muffin', 'A light and fluffy strawberry muffin with a sweet strawberry frosting.', '$3.99')]));
    
    menuItems.push(new menuCategory('Cheesecakes', [new addMenuItems('Chocolate Cheesecake', 'chocolate-cheesecake', 'A rich and creamy chocolate cheesecake with a chocolate crust.', '$19.99'),
      new addMenuItems('Vanilla Cheesecake', 'vanilla-cheesecake', 'A light and fluffy vanilla cheesecake with a graham cracker crust.', '$16.99'),
      new addMenuItems('Red Velvet Cheesecake', 'red-velvet-cheesecake', 'A classic red velvet cheesecake with a red velvet crust.', '$21.99'),
      new addMenuItems('Carrot Cheesecake', 'carrot-cheesecake', 'A moist carrot cheesecake with a carrot cake crust and a sprinkle of walnuts.', '$18.99'),
      new addMenuItems('Lemon Cheesecake', 'lemon-cheesecake', 'A zesty lemon cheesecake with a lemon cookie crust and a sprinkle of lemon zest.', '$17.99'),
      new addMenuItems('Strawberry Cheesecake', 'strawberry-cheesecake', 'A light and fluffy strawberry cheesecake with a graham cracker crust.', '$16.99')]));
    
    menuItems.push(new menuCategory('Pastries', [new addMenuItems('Chocolate Pastry', 'chocolate-pastry', 'A rich and flaky chocolate pastry with a creamy chocolate filling.', '$4.99'),
      new addMenuItems('Vanilla Pastry', 'vanilla-pastry', 'A light and fluffy vanilla pastry with a sweet vanilla filling.', '$3.99'),
      new addMenuItems('Red Velvet Pastry', 'red-velvet-pastry', 'A classic red velvet pastry with a tangy cream cheese filling.', '$5.99'),
      new addMenuItems('Carrot Pastry', 'carrot-pastry', 'A moist carrot pastry with a cream cheese filling and a sprinkle of walnuts.', '$4.99'),
      new addMenuItems('Lemon Pastry', 'lemon-pastry', 'A zesty lemon pastry with a lemon glaze and a sprinkle of lemon zest.', '$4.99'),
      new addMenuItems('Strawberry Pastry', 'strawberry-pastry', 'A light and fluffy strawberry pastry with a sweet strawberry filling.', '$4.99')]));


      if (mainContent) {
        // Append the content to the main content container
        mainContent.appendChild(menu);
      } else {
        console.error('Element with id "main-content" not found.');
      }

    for (let i = 0; i < menuItems.length; i++) {
    // creating a category for each menu item
      const menuCategory = document.createElement('div');
      menuCategory.classList.add('menuCategory');
      menuCategory.classList.add(`${menuItems[i].category}`);

      menuCategory.innerHTML = `
      <div></div>
      <h2 class = "title">⊷ ${menuItems[i].category} ⊶</h2>
      <div></div>
      `;

      // creating a card for each dish
      for(let j =0; j < menuItems[i].dishes.length; j++){

        const dish = menuItems[i].dishes[j];
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
        <div class="menu-image">
          <img src='${bg11}' alt="${dish.name}">
        </div>
        <div class="menu-info">
          <h2>${dish.name}</h2>
          <p>${dish.description}</p>
          <p class="price">${dish.price}</p>
        </div>
        `
        menuCategory.appendChild(menuItem);
      }

      mainContent.appendChild(menuCategory);
    }
  
    
}