const tl = gsap.timeline();

tl.from(".introductory__heading", {
    y: -100,
    opacity: 0,
    duration: 1,
});

tl.from(".introductory__desc", {
    x: -100,
    opacity: 0,
    duration: 1,
});

tl.fromTo(
    ".button",
    { scale: 0.5, opacity: 0, y: 50 },
    { scale: 1, opacity: 1, y: 0, transformOrigin: "bottom", ease: "power2.out", stagger: 0.2 },
);

tl.from(".introductory__image", {
    y: 100,
    opacity: 0,
    duration: 3,
    stagger: 0.5
});
