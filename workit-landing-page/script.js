let btnAnimation = () => {
    const tlMessageBtn = gsap.timeline({details: {duration: .5}, repeat: -1, repeatDelay: 3, ease: 'power1.inOut'});
    tlMessageBtn.to('.intro__link', {scale: 2, transformOrigin: "center bottom"})
        .to('.intro__link', {scale: 1, ease: "power1.out", y: 5});
    return tlMessageBtn;
}

const tl = gsap.timeline({details: {duration: 1.5}});
tl.fromTo('.intro__heading', {opacity: 0, ease: 'power1.out'}, {y: 0, opacity: 1, ease: 'power1.out'}) 
  .add(btnAnimation());

const tlImage = gsap.timeline({details: {duration: .1}, ease: 'power1.inOut'});
tlImage.fromTo('.intro__image', {y: 100, opacity: 0}, {y: 0, opacity: 1});


const featuresItems = Array.from(document.querySelectorAll(".features__item"));
let tlFeatures = gsap.timeline({paused: true});

featuresItems.forEach((elem, i) => {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 50%",
    animation: tlFeatures.from(elem, {
      autoAlpha: 0,
      y: 150,
      duration: 1.5,
      ease: "power1.out"
    }, i * .3)
  });
});

let tlCta = gsap.timeline({paused: true});

tlCta.fromTo('.cta__image-fonder', {
    autoAlpha: 0,
    y: 150,
}, {
    autoAlpha: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out"
}, 0);

ScrollTrigger.create({
    trigger: '.cta',
    start: "top 65%",
    animation: tlCta
});




