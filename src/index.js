import _ from 'lodash';
import './style.css';

import { homePage } from './assets/web-pages/home';
import { menuPage } from './assets/web-pages/menu';

homePage();
const homeButton = document.getElementById('home');
homeButton.addEventListener('click', homePage);

const menuButton = document.getElementById('menu');
menuButton.addEventListener('click', menuPage);
