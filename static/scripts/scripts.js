const menu = document.querySelector('.popup-menu');
document.querySelectorAll('.menu-icon').forEach(obj =>
    obj.addEventListener('click', () => {
        console.log(menu.style.visibility);
        menu.style.visibility = menu.style.visibility !== 'visible' ? 'visible' : 'hidden';
    })
);
