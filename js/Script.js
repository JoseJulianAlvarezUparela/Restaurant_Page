const MiMenu = document.getElementById('navegation');
const MenuBtn = document.getElementById('toggleMenu');
const Enlaces = MiMenu.getElementsByTagName('a');

MenuBtn.addEventListener('click', () => {
    MiMenu.classList.toggle('show-nav');
});

for (let i = 0; i < Enlaces.length; i++) {
    Enlaces[i].addEventListener('click', () => {
        MiMenu.classList.remove('show-nav');
    });
} 
