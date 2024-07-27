// Show and hide the mobile menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

// Remove mobile menu on link click
const navLinks = document.querySelectorAll('.nav__link');
const removeMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
};
navLinks.forEach(link => link.addEventListener('click', removeMenu));

// Highlight active section in navigation menu based on scroll position
const sections = document.querySelectorAll('section[id]');
const highlightActiveLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add('active');
        } else {
            navLink.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', highlightActiveLink);

// Initialize ScrollReveal for animations
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    // reset: true
});

sr.reveal('.home__data, .hero__image, .about__img, .values__img, .about__text, .values__text, .about__subtitle, .values__subtitle, .values__list');
sr.reveal('.home__img, .hero__image, .about__subtitle, .values__subtitle, .values__list, .about__text, .values__text, .about__img, .values__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.service__img, service2__img', { interval: 200 });

// Additional code for new pages
window.addEventListener('load', () => {
    if (document.querySelector('.advisory .content') || document.querySelector('.smart-cities .content')) {
        sr.reveal('.content h1, .content p', { delay: 200, interval: 200 });
    }
});

// Toggle service description visibility on item click for service
document.querySelectorAll('.service__item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const description = item.querySelector('.service__description');
        description.classList.toggle('active');
    });
});

// Toggle service description visibility on item click for service2
document.querySelectorAll('.service2__item').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const description = item.querySelector('.service2__description');
        description.classList.toggle('active');
    });
});

// Adjust layout based on the number of items
window.addEventListener('load', () => {
    const serviceContainer = document.querySelector('.service__container');
    const serviceItems = document.querySelectorAll('.service__item');

    if (serviceItems.length) {
        // Determine if the container should use the 4-column or 3-column layout
        if (serviceItems.length > 4) {
            // Apply 4-column layout to the first row
            serviceContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';

            // Add a class to handle subsequent rows
            serviceItems.forEach((item, index) => {
                if (index < 4) {
                    item.classList.add('first-row');
                } else {
                    item.classList.add('other-row');
                }
            });
        } else {
            // If less than 4 items, just use the default layout
            serviceContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
        }
    }
});

// Adjust layout for service2 section
window.addEventListener('load', () => {
    const service2Container = document.querySelector('.service2__container');
    const service2Items = document.querySelectorAll('.service2__item');

    if (service2Items.length) {
        // Default to 3 columns for service2
        service2Container.style.gridTemplateColumns = 'repeat(3, 1fr)';
    }
});
