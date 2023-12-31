
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
   }
   );
}

    if(top >= offset && top < offset + height) {
    navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('Header nav a [href*=' + id +']').classList.add('active');
    })
   
    
};

scrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

scroolReveal().reveal('.home-content, .heading',{origin: 'top'})

