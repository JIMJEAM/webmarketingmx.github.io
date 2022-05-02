// (function(){
//     const openButton = document.querySelector('.nav__menu');
//     const menu = document.querySelector('.nav__link');
//     const closeMenu = document.querySelector('.nav__close');

//     openButton.addEventListener('click', ()=>{
//         menu.classList.add('nav__link--show');
//     });

//     closeMenu.addEventListener('click', ()=>{
//         menu.classList.remove('nav__link--show');
//     });




// })();

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});