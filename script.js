

// let tl = gsap.timeline();

// function timer(){
//     let a = 0;
//     setInterval(function(){
//         a += Math.floor(Math.random() * 18);

//         if(a<100){
//             document.querySelector(".loading h1").innerHTML = a+"%";
//         }else{
//             a = 100;
//             document.querySelector(".loading h1").innerHTML = a+"%";
//         }
//     },150);
// }

// tl.to(".loading h1", {
//     delay: 1,
//     duration: 0.9,
//     onStart: timer()
// })

// tl.to(".loading", {
//     top: "-100%",
//     opacity: 0,
//     delay:0.8,
//     duration:1,
// })


gsap.from(".img1", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    y: 70,
})

gsap.from(".img2", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    x: 70
})

gsap.from(".img3", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    y: -70
})

gsap.from("#main h1", {
    scale:0.8,
    opacity: 0,
    duration: 1,
    delay: 0.4,
})