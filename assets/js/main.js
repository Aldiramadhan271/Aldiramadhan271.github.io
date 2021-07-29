// MENU SHOW Y HIDDEN

const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')


// menu  show
// validate if constant exists
if (navToggle) {
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

// MENU HIDDEN
// validate if constant exists
if (navClose) {
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	// when we click on eachnav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ============= ACCORDIONS SKILLS =====================
const skillsContent = document.getElementsByClassName('skills__content'),
	  skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
	let itemClass = this.parentNode.className

	for(i = 0; i < skillsContent.length; i++){
		skillsContent[i].className = 'skills__content skills__close'
	}
	if(itemClass === 'skills__content skills__close'){
		this.parentNode.className = 'skills__content skills__open'
	}
}

skillsHeader.forEach((el) =>{
	el.addEventListener('click', toggleSkills)
})

// ===================================== QUALIFICATION ==========================
const tabs = document.querySelectorAll('[data-target]'),
	  tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tab.forEach(tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
}) 

// ==================================== SERVICES MODAL ================================
const modalViews = document.querySelectorAll('.services__modal'),
	  modalBtns = document.querySelectorAll('.services__button'),
	  modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalclick){
	modalViews[modalclick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
	modalBtn.addEventListener('click', () =>{
		modal(i)
	})
})

modalCloses.forEach((modalClose) =>{
	modalClose.addEventListener('click', () =>{
		modalViews.forEach((modalView) =>{
			modalView.classList.remove('active-modal')
		})
	})
})

// ============================== PORTFOLIO SWIPER ===========================
let swiperPortfolio = new Swiper('.portfolio__container', {
	cssMode: true,
	loop:true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

// ============================= TESTIMONIAL ===========================
let swiperTestimonial = new Swiper('.testimonial__container', {
	loop:true,
	grabCursor:true,
	spaceBetween: 48,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints:{
		568:{
			slidesPerView: 2,
		}
	}
});

// ================================ SCROLL SECTIONS ACTIVE LINK ======================
const section = document.querySelectorAll('section[id]')

	function scrollactive(){
		const scrollY = window.pageYOffset

		section.forEach(current =>{
			const sectionHeight = current.offsetHeight
			const sectionTop = current.offsetTop - 50;
			sectionId = current.getAttribute('id')

			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				document.querySelector('.nav__menu a[href*= ' + sectionId + ']').classList.add('active-link')
			}else{
				document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
			}
		})
	}

window.addEventListener('scroll', scrollactive)

// ====================================== CHANGE BACKGROUND HEADER =============================
function scrollHeader(){
	const nav = document.getElementById('header')
	// when the scroll is greater than 200 viewport height, and the scroll header 
	if (this.scrollY >= 80)nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// =============================================== scroll top ===================================
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 500)scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



				// =================================== DARK LIGHT THEME ==============================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// previously the current theme
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously close a topic
if (selectedTheme) {
	// if the validation is fulfilled
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// active / deactive the theme manually
themeButton.addEventListener('click', () => {
	// add or remove the dark theme /icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// we save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})

