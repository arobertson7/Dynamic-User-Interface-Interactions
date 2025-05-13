import "./styles.css";
import dropDown from "./dropDown.js";
import menuIcon from "./menu.svg";
import menuDownIcon from "./menu-down.svg"

import californiaImage from "./cali.jpg";
import dresdenImage from "./dresden.jpg";
import switzerlandImage from "./switzerland.jpg";
import amsterdamImage from "./amsterdam.jpg";
import nycImage from "./nyc.jpg";
import parisImage from "./paris.jpg";

import imageCarousel from "./imageCarousel.js";

// ------------ DROP DOWN MENU ------------ //

const headerMessage = document.getElementById("header").querySelector('h2');
const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
    dropDown.toggle(menuButton, menu, menuIcon, menuDownIcon);
    // toggle header message as well
    if (headerMessage.textContent == 'Slideshow') {
        headerMessage.textContent = 'Drop Down Menu';
    }
    else {
        headerMessage.textContent = 'Slideshow';
    }
})

const menuItems = menu.querySelectorAll('li');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        imageCarousel.slideShow(slides, navDotContainer, i);
        // close menu
        dropDown.toggle(menuButton, menu, menuIcon, menuDownIcon);
        // toggle header message as well
        if (headerMessage.textContent == 'Slideshow') {
            headerMessage.textContent = 'Drop Down Menu';
        }
        else {
            headerMessage.textContent = 'Slideshow';
        }
    })
}

// ------------ IMAGE CAROUSEL ------------ //

const slides = document.getElementById("carousel-slides-container");
const navDotContainer = document.querySelector(".nav-dots");
const nextButton = document.querySelector(".next-slide-button");
const prevButton = document.querySelector(".prev-slide-button");

nextButton.addEventListener("click", function() {
    imageCarousel.slideShow(slides, navDotContainer, 'next');
})

prevButton.addEventListener("click", function() {
    imageCarousel.slideShow(slides, navDotContainer, 'prev');
})

// initialize navDots to jump to corresponding slides
const navDots = navDotContainer.querySelectorAll('img');
for (let i = 0; i < navDots.length; i++) {
    navDots[i].addEventListener("click", function() {
        imageCarousel.slideShow(slides, navDotContainer, i);
    })
}

imageCarousel.slideShow(slides, navDotContainer, 'initialization');