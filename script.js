const listIcon = document.getElementById('list-icon');
const menu = document.querySelector('.menu');

listIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
