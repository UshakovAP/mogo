// Fixed header

const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY >= headerHeight) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
});

// Smooth scroll

const links = document.querySelectorAll('.nav__link');

links.forEach(link => {
    link.addEventListener('click', item => {
        item.preventDefault();
        let linkId = link.getAttribute('data-link');
        let currentLink = document.querySelector(linkId);
        currentLink.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        nav.classList.remove('nav--active');
    });
});

// Burger menu

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
});

// Accordion

const accordionItems = document.querySelectorAll('.accordion__item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('accordion__item--active');
    });
});
