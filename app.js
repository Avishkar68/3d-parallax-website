let parallax_el = document.querySelectorAll(".parallax")

let xValue = 0, yValue = 0;
let rotateDegree = 0; 

function update(cursorPosition){
    parallax_el.forEach((el)=>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotationSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;

        let zvalue = (cursorPosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        el.style.transform = `perspective(2300px) translateZ(${zvalue * speedz}px) rotateY(${rotateDegree * rotationSpeed}deg) translateX(calc(-50%  + ${-xValue * speedx}px)) translateY(calc(-50%  + ${yValue * speedy}px))  `
    })
}

update(0);
window.addEventListener("mousemove" , (e)=>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    rotateDegree = (xValue/(window.innerWidth/2)) * 20;

    update(e.clientX);
})


//GSAP Animation..

// let timeline = gsap.timeline();

// parallax_el.forEach((el)=>{
//     timeline.from(
//         el,
//         {
//             top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
//             duration: 1,
//         },
//         "1"
//     );
// })