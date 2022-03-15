import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

//* --- Burger --- *//
const burgerBtn = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.nav');
const burgerList = [burgerBtn, burgerMenu];
burgerBtn.addEventListener('click', () => {
	burgerList.forEach((e) => {
		e.classList.toggle('active');
	})

	for (let i = 0; i < burgerList.length; i++) {
		if (burgerList[i].classList.contains('active')) {
			document.body.style.overflow = 'hidden';
			document.documentElement.style.scrollBehavior = 'auto';
		} else {
			document.body.style.overflow = 'auto';	
			document.documentElement.style.scrollBehavior = 'smooth';
		}
	}
})

// Anchor crossing
const navLinks = document.querySelectorAll('.nav__link');
const destruction = () => {
	burgerList.forEach((e) => {
		e.classList.remove('active');
	})
}
navLinks.forEach((navLink) => {
	navLink.addEventListener('click', (e) => {
		destruction();
		document.body.style.overflow = 'auto';	
		setTimeout(()=> {
			document.documentElement.style.scrollBehavior = 'smooth';	
		}, 1000);
	});
});

//* --- Form validation --- *//
const form = document.querySelector('.contact-form');
const fields = form.querySelectorAll('.field');
form.addEventListener('submit', (e) => {
	for (let i = 0; i < fields.length; i++) {
		if (!fields[i].value) {	
			e.preventDefault();
			alert('To send a message, fill in all the fields!');
		}
	}
})
