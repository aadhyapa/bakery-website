import bakery2 from '../images/home-page/bakery2.png';
import bg10 from '../images/home-page/bg10.jpg';

export function contactPage() {


    const mainContent = document.getElementById('container');
    mainContent.innerHTML = ''; 

    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = `url(${bg10})`;
    document.body.style.backgroundBlendMode = 'darken';

    const contact = document.createElement('div');
    contact.classList.add('contact');

    const contactTitle = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Contact Us';
    contactTitle.appendChild(title);
    contact.appendChild(contactTitle);

    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');

    const contactDetails = document.createElement('div');
    contactDetails.classList.add('contact-details');

    contactDetails.innerHTML = `
    <p>♢♦︎♢</p>
    <p>For inquiries, please contact us at:</p>
    <p>Phone: 555-555-5555</p>
    <p>Email: bake&banter@bakery.com</p>
    <p>Address: 123 Bakery Lane, Bakingham, BK 12345</p>
    <p>♢♦︎♢</p>
    `;

    const contactForm = document.createElement('form');
    contactForm.classList.add('contact-form');
    contactForm.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Send</button>
    `;
    
    contact.appendChild(contactContainer);
    contactContainer.appendChild(contactDetails);
    contactContainer.appendChild(contactForm);
  
    // Select the main content container
  
    if (mainContent) {
      // Append the content to the main content container
      mainContent.appendChild(contact);
    } else {
      console.error('Element with id "main-content" not found.');
    }
    }
