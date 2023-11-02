gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

// Smooth Scroll Animation
let bodyScrollBar = Scrollbar.init(document.body, {
	damping: 0.07,
	delegateTo: document,
})
ScrollTrigger.scrollerProxy('.wrapper', {
	scrollTop(value) {
		if (arguments.length) {
			bodyScrollBar.scrollTop = value
		}
		return bodyScrollBar.scrollTop
	},
})
bodyScrollBar.addListener(ScrollTrigger.update)

// Intro animation
tl.fromTo(
	'.header__logo',
	{
		y: -50,
		opacity: 0,
	},
	{
		y: 0,
		opacity: 1,
		duration: 0.5,
	},
	0.4
)
	.fromTo(
		'.header__nav ul li',
		{
			y: -50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.5,
			stagger: 0.15,
		},
		0.4
	)
	.fromTo(
		'.intro__head',
		{
			y: 50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.5,
		},
		0.8
	)
	.fromTo(
		'.intro__title',
		{
			y: 50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.5,
		},
		1
	)
	.fromTo(
		'.intro__btn',
		{
			y: 50,
			opacity: 0,
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.5,
		},
		1.2
	)

// Skills scroll animation
gsap.from('.skills__head', {
	scrollTrigger: {
		trigger: '.skills',
		scroller: '.wrapper',
		start: '-20% 50%',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	duration: 0.5,
})

gsap.from('.skills__title', {
	scrollTrigger: {
		trigger: '.skills',
		scroller: '.wrapper',
		start: '0 50%',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	duration: 0.5,
})

const skillsListItem = gsap.utils.toArray('.skills__list li')

gsap.from(skillsListItem, {
	scrollTrigger: {
		trigger: '.skills',
		scroller: '.wrapper',
		start: '10% center',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	stagger: 0.15,
	duration: 0.5,
})

const skillsItems = gsap.utils.toArray('.skills__item')

gsap.from(skillsItems, {
	scrollTrigger: {
		trigger: '.skills',
		scroller: '.wrapper',
		start: '10% center',
		// toggleActions: 'play none none reset',
	},
	opacity: 0,
	stagger: 0.15,
	duration: 0.5,
})

// Projects scroll animation
gsap.from('.projects__head', {
	scrollTrigger: {
		trigger: '.projects',
		scroller: '.wrapper',
		start: '-100 center',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	duration: 0.5,
})

const projectItems = gsap.utils.toArray('.projects__item')

gsap.from(projectItems, {
	scrollTrigger: {
		trigger: '.projects',
		scroller: '.wrapper',
		start: '0 center',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	stagger: 0.3,
	duration: 1,
})

// Footer scroll animation
gsap.from('.footer__title', {
	scrollTrigger: {
		trigger: '.footer',
		scroller: '.wrapper',
		start: '-50 center',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	duration: 0.5,
})

gsap.from('.footer__email', {
	scrollTrigger: {
		trigger: '.footer',
		scroller: '.wrapper',
		start: '50 center',
		// toggleActions: 'play none none reset',
	},
	y: 100,
	opacity: 0,
	duration: 0.5,
})

const socialLinks = gsap.utils.toArray('.footer__social-link')

gsap.from(socialLinks, {
	scrollTrigger: {
		trigger: '.footer',
		scroller: '.wrapper',
		start: '50 center',
		// toggleActions: 'play none none reset',
	},
	y: 50,
	opacity: 0,
	stagger: 0.1,
	duration: 0.5,
})

// Burger mnenu
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.header__nav')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger--active')
	menu.classList.toggle('header__nav--active')
})
