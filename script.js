const header = document.querySelector("header");

    window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});

const sr = ScrollReveal ({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: true
})

sr.reveal ('.home-img', {delay: 400});
sr.reveal ('.home-text', {delay: 350});
sr.reveal ('.container', {delay: 400});
sr.reveal ('.about-img', {delay: 300});
sr.reveal ('.about-text', {delay: 400});
sr.reveal ('.middle-text', {delay: 300});
sr.reveal ('.menu-content', {delay: 100});
sr.reveal ('.contact', {delay: 100});
sr.reveal ('.contact-text', {delay: 200});
