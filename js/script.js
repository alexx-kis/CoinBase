'use strict';

/*==================================== BURGER ====================================*/

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let overlay = document.querySelector('.overlay');
let sellmenu = document.querySelector('.header__sell-menu');




burger.addEventListener('click', function () {
	this.classList.toggle('header__burger--active');
	menu.classList.toggle('header__menu--open');
	overlay.classList.toggle('overlay--show');
	sellmenu.classList.toggle('header__sell-menu--open');
	
});


/*==================================== FOOTER ====================================*/

let titles = document.querySelectorAll('.footer__column-title');

for (let title of titles) {
	title.addEventListener('click', function () {
		if (this.nextElementSibling.style.maxHeight) {
			this.nextElementSibling.style.maxHeight = null;
		}
		else {
			this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px"
		}
	});
}