const tl = gsap.timeline();

tl.from(".intro__heading", {
    y: -100,
    opacity: 0,
    duration: 1,
});

tl.from(".intro__desc", {
    x: -100,
    opacity: 0,
    duration: 1,
});

tl.from(".intro__form-email", {
    opacity: 0,
    duration: 1,
    stagger: 0.2,
});

tl.from(".side-image", {
    scale: 1.2,
    rotation: "20_cw",
    transformOrigin: "50% 95%",
    opacity: 0,
    duration: 3,
    ease: "back.out(1.7)",
})
