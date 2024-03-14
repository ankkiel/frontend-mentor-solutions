const tl = gsap.timeline();

tl.from(".features__heading", {
    y: -100,
    opacity: 0,
    duration: 1,
});

tl.from(".features__desc", {
    x: -100,
    opacity: 0,
    duration: 1,
});

tl.from(".features__item", {
    opacity: 0,
    stagger: 0.4,
    duration: 1,
});

tl.fromTo(".feature-card__icon", {
    scale: 1
}, {
    scale: 1.2,
    ease: "power1.out",
    duration: 1.5,
    repeat: -1,
    yoyo: true
}, 0);
