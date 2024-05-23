alert =("hello there");

/*=============== SHOW MENU ===============*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close'),
        navLink= document.getElementById('nav-link'),
        navLink2= document.getElementById('nav-link2'),
        navLink3= document.getElementById('nav-link3'),
        navLink4= document.getElementById('nav-link4'),
        navLink5= document.getElementById('nav-link5');
/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navLink){
    navLink.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
if(navLink2){
    navLink2.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
if(navLink3){
    navLink3.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
if(navLink4){
    navLink4.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
if(navLink5){
    navLink5.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scroll >=50; header.classList.add('shadow-header')
                    ;header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY <= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
    const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id'),
			sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line '

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const ScrollRevealOption ={
    distance :"50px",
    origin:"bottom",
    duration :1000,
};

ScrollReveal().reveal(".home__image",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 300,
});

ScrollReveal().reveal(".home__name ",{
    ...ScrollRevealOption,
    origin:"left",
});

ScrollReveal().reveal(".home__description",{
    ...ScrollRevealOption,
    origin:"left",
    delay:100,
});

ScrollReveal().reveal(".insta",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 500,
});

ScrollReveal().reveal(".linkedin",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 550,
});

ScrollReveal().reveal(".github",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 600,
});

ScrollReveal().reveal(".about__perfil",{
    ...ScrollRevealOption,
    origin:"left",
    delay: 400,
});

ScrollReveal().reveal(".about__list",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 100,
});

ScrollReveal().reveal("#uiux",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 100,
});

ScrollReveal().reveal("#webdesign",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 300,
});

ScrollReveal().reveal("#development",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 500,
});

ScrollReveal().reveal("#website",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 100,
});

ScrollReveal().reveal("#app",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 300,
});

ScrollReveal().reveal("#fast__food-app",{
    ...ScrollRevealOption,
    origin:"right",
    delay: 500,
});

ScrollReveal().reveal(".contact__data",{
    ...ScrollRevealOption,
    origin:"left",
    delay: 100,
});

ScrollReveal().reveal("#facebook",{
    ...ScrollRevealOption,
    origin:"bottom",
    delay: 100,
});

ScrollReveal().reveal("#insta",{
    ...ScrollRevealOption,
    origin:"bottom",
    delay: 300,
});

ScrollReveal().reveal("#linkedin",{
    ...ScrollRevealOption,
    origin:"bottom",
    delay: 500,
});





/*=============== REMOVE MENU MOBILE ===============*/




/*=============== EMAIL JS ===============*/
const   contactForm = document.getElementById("contact-form"),
        contactMessage =document.getElementById("contact-message");

const sendEmail= (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_owchtjl','template_r7r18rj','#contact-form','JJvy-Ytxyl4WPkHyr')
    .then(()=>{
        //Show sent message
        contactMessage.textContent = "Message Sent Successfully✅ "

        //Remove Message After five seconds 
        setTimeout.textContent = ""
    } , 5000)

    contactForm.reset()

    contactMessage.textContent='Message not sent (service Error)'
}

contactForm.addEventListener('submit', sendEmail);










