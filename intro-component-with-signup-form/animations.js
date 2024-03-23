const tl = gsap.timeline();

tl.fromTo('.intro__heading', {x: 100, opacity: 0}, {x: 0, opacity: 1, duration: 1.5})
    .fromTo('.intro__desc', {opacity: 0}, {opacity: 1, duration: 1.5})
    .from('.intro__form-container', {y: 20, opacity: 0, duration: 3, ease: "elastic"});
