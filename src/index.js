import createContactPage from './contact';
import homePage from './home';
import menuPage from './menu';

let contact = document.querySelector('#contact');
contact.addEventListener("click", () => createContactPage());

let home2 = document.querySelector('#home');
home2.addEventListener("click", () => homePage());

let menu = document.querySelector('#menu');
menu.addEventListener("click", () => menuPage());

let body = document.querySelector('#content');

document.body.onload = homePage;


