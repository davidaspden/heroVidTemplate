// Burger menu toggle
const burgerBtn = document.getElementById('burgerBtn');
const menuNav = document.getElementById('menuNav');

if (burgerBtn && menuNav) {
    burgerBtn.addEventListener('click', () => {
        menuNav.classList.toggle('open');
    });
}
