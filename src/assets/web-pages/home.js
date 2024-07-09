import bakery2 from '../images/home-page/bakery2.png';
import bg10 from '../images/home-page/bg10.jpg';

export function homePage() {


    const mainContent = document.getElementById('container');
    mainContent.innerHTML = ''; 
    document.body.style.backgroundColor = 'transparent';
    document.body.style.backgroundImage = `url(${bg10})`;
    
;


    const home = document.createElement('div');
    home.classList.add('home');

  
    home.innerHTML = `
    <h1>Welcome to Bake & Banter!</h1>
    <p>Welcome to Bake and Banter! Where delicious pastries meet delightful conversation and creativity. 
    Enjoy our freshly baked treats, then decorate your own desserts for a fun, interactive experience. 
    Whether you're catching up with friends or savoring a quiet moment, we promise a sweet escape!! </p>
    `;


    //Why Us page
    const whyUs = document.createElement('div');
    whyUs.classList.add('why-us');
    whyUs.innerHTML = `
    <h1>Why Bake & Banter?</h1>
    <p>♢♦︎♢</p>
    <p>Serving fun and delicious treats since 2020</p>
    `;

    const whyUsContent = document.createElement('div');
    whyUsContent.classList.add('why-us-content');
    whyUsContent.innerHTML = `
    <div>
    <h3>AUTHENTIC RECIPES</h3>
      <p>Our products are based on traditional home-style recipes using fresh ingredients</p>
      <br>
      <h3>BAKED WITH LOVE</h3>
      <p>Our bakers are passionate about their craft and it shows in the quality of our products.</p>
    </div>
    <div>
      <img src="${bakery2}">
    </div>
    <div>
      <h3>COMMITED TO QUALITY</h3>
      <p>From our ingredients to our kitchen operations & guest services, we always prioritize quality.</p>
      <br>
      <h3>CREATIVE DECORATING</h3>
      <p>Our decorating stations allow you to customize your desserts with a variety of toppings and icings.</p>
    </div>
    `;
    whyUs.appendChild(whyUsContent);

    // Testimonials

  function createFeedback(name, quote) {
    this.name = name;
    this.quote = quote;
  }
  const feedback = []
  feedback.push(new createFeedback('John', 'The pastries are delicious and the decorating station is so much fun!'));
  feedback.push(new createFeedback('Jane', 'I love the variety of treats and the friendly staff!'));
  feedback.push(new createFeedback('Jack', 'The quality of the ingredients really shines through in the taste!'));

  let index = 0;
  
  let keepTrack = '♦︎' + '♢'.repeat(feedback.length - 1);

    const testimonials = document.createElement('div');
    testimonials.classList.add('testimonial-part');
    testimonials.innerHTML = `
      <h1>What our customers are saying...</h1>
      <br>
      <p class = "quote">“</p>
      <p class = "keepingTrack">${keepTrack}</p>
      <div class = "below">
        <button id="prev"><</button>
        <div class = "feedbackDisplay">
        <p class = "testContent">${feedback[index].quote}<p>
        <br>
        <p class = "name">- ${feedback[index].name}</p>
        </div>
        <button id="next">></button>
      </div>
    `;
    const feedbackDisplay = testimonials.querySelector('.feedbackDisplay');
    const keepingTrack = testimonials.querySelector('.keepingTrack');
    const prevBtn = testimonials.querySelector('#prev');
    const nextBtn = testimonials.querySelector('#next');

    const prevQuote = () => {
      keepTrack = ''
      index = (index - 1 + feedback.length) % feedback.length;
      feedbackDisplay.innerHTML = `
      <p class = "testContent">${feedback[index].quote}<p>
      <br>
      <p class = "name">- ${feedback[index].name}</p>
      `;
      for (let i = 0; i < feedback.length; i++) {
        if (i === index) {
          keepTrack += '♦︎';
        } else {
          keepTrack += '♢';
        }
      }
      keepingTrack.innerHTML = keepTrack;

    } 

    const nextQuote = () => {
      keepTrack = ''
      index = (index + 1 + feedback.length) % feedback.length;

      for (let i = 0; i < feedback.length; i++) {
        if (i === index) {
          keepTrack += '♦︎';
        } else {
          keepTrack += '♢';
        }
      }

      keepingTrack.innerHTML = keepTrack;

      feedbackDisplay.innerHTML = `
      <p class = "testContent">${feedback[index].quote}<p>
      <br>
      <p class = "name">- ${feedback[index].name}</p>
      `;

    } 

    prevBtn.addEventListener('click', () => {
      prevQuote(index);
    });
    nextBtn.addEventListener('click', () => {
      nextQuote(index);
    });
    setInterval(nextQuote, 5000);


  
    // Select the main content container
  
    if (mainContent) {
      // Append the content to the main content container
      mainContent.appendChild(home);
      mainContent.appendChild(whyUs);
      mainContent.appendChild(testimonials);
    } else {
      console.error('Element with id "main-content" not found.');
    }
    }
