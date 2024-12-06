const hamburgerIcon = document.getElementById('hamburger-icon');
const navbar = document.querySelector('.navbar');

hamburgerIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});