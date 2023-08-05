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

/*==================================== ANIMATION ====================================*/

window.onload = function () {
	let loadings = document.querySelectorAll('.loading');
	let header = document.querySelector('.header');
	header.style.opacity = 1;
	

	for (let loading of loadings) {
		loading.classList.add('loaded');
	}
};

let animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			let animItem = animItems[i];
			let animItemHeight = animItem.offsetHeight;
			let animItemOffset = offset(animItem).top;
			let animStart = 4
			let animItemPoint = window.innerHeight - (animItemHeight / animStart);

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - (window.innerHeight / animStart);
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && (pageYOffset < (animItemOffset + animItemHeight))) {
				animItem.classList.add('anim-item--active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('anim-item--active');
				}
			}

			function offset(elem) {
				let rect = elem.getBoundingClientRect(),
					scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
					scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			}
		}
	}
}